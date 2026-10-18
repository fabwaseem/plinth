// After SignPath returns signed Windows executables, latest.yml still describes
// the unsigned installer. Rewrite its sha512 and size, and rebuild the NSIS
// blockmap with the same app-builder-lib implementation electron-builder used.

import {createHash} from 'node:crypto'
import {existsSync, readFileSync, writeFileSync} from 'node:fs'
import {join} from 'node:path'
import {pathToFileURL} from 'node:url'

const SETUP_EXE = 'Plinth-win-x64-Setup.exe'

function unquote(value) {
	const trimmed = value.trim()
	if (
		(trimmed.startsWith('"') && trimmed.endsWith('"')) ||
		(trimmed.startsWith("'") && trimmed.endsWith("'"))
	) {
		return trimmed.slice(1, -1)
	}
	return trimmed
}

export function latestYmlNames(yamlText) {
	const names = []
	const seen = new Set()
	for (const line of yamlText.split(/\r?\n/)) {
		const url = line.match(/^ {2}- url:\s*(.*?)\s*$/)
		const pathLine = line.match(/^path:\s*(.*?)\s*$/)
		const raw = url?.[1] ?? pathLine?.[1]
		if (raw == null || raw === '') continue
		const name = unquote(raw)
		if (seen.has(name)) continue
		seen.add(name)
		names.push(name)
	}
	return names
}

// updates: { [filename]: { sha512: string, size: number } }
export function applyUpdateMetadata(yamlText, updates) {
	const newline = yamlText.includes('\r\n') ? '\r\n' : '\n'
	const trailingNewline = yamlText.endsWith('\n')
	const lines = yamlText.split(/\r?\n/)
	if (trailingNewline && lines.at(-1) === '') lines.pop()

	let current = null
	const replacedSha = new Set()
	const out = lines.map((line) => {
		const url = line.match(/^ {2}- url:\s*(.*?)\s*$/)
		if (url) {
			current = unquote(url[1])
			return line
		}
		const pathLine = line.match(/^path:\s*(.*?)\s*$/)
		if (pathLine) {
			current = unquote(pathLine[1])
			return line
		}
		const update = current == null ? undefined : updates[current]
		if (!update) return line
		if (/^ {4}sha512:/.test(line) || /^sha512:/.test(line)) {
			replacedSha.add(current)
			const indent = line.match(/^ */)[0]
			return `${indent}sha512: ${update.sha512}`
		}
		if (/^ {4}size:/.test(line)) {
			return `    size: ${update.size}`
		}
		return line
	})

	for (const name of Object.keys(updates)) {
		if (!replacedSha.has(name)) {
			throw new Error(`latest.yml has no sha512 entry for ${name}`)
		}
	}

	const text = out.join(newline)
	return trailingNewline ? `${text}${newline}` : text
}

async function hashFile(file, name) {
	if (name === SETUP_EXE) {
		const {buildBlockMap} = await import('app-builder-lib/out/targets/blockmap/blockmap.js')
		const info = await buildBlockMap(file, 'gzip', `${file}.blockmap`)
		return {sha512: info.sha512, size: info.size}
	}
	const data = readFileSync(file)
	return {
		sha512: createHash('sha512').update(data).digest('base64'),
		size: data.length,
	}
}

async function main() {
	const dist = process.argv[2]
	if (!dist) {
		throw new Error('usage: refresh-windows-update-metadata.mjs <dist-dir>')
	}
	const latestPath = join(dist, 'latest.yml')
	const yaml = readFileSync(latestPath, 'utf8')
	const names = latestYmlNames(yaml)
	if (names.length === 0) {
		throw new Error(`${latestPath} does not name a Windows update file`)
	}
	const updates = {}
	for (const name of names) {
		const file = join(dist, name)
		if (!existsSync(file)) {
			throw new Error(`latest.yml names ${name}, but ${file} is missing`)
		}
		updates[name] = await hashFile(file, name)
	}
	writeFileSync(latestPath, applyUpdateMetadata(yaml, updates))
}

function isDirectRun() {
	const arg = process.argv[1]
	if (!arg) return false
	return import.meta.url === pathToFileURL(arg).href
}

if (isDirectRun()) {
	main().catch((error) => {
		console.error(error instanceof Error ? error.message : error)
		process.exit(1)
	})
}
