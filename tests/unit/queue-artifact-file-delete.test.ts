import {mkdtemp, readFile, rm, writeFile} from 'node:fs/promises'
import {tmpdir} from 'node:os'
import path from 'node:path'
import {afterEach, describe, expect, it} from 'vite-plus/test'
import {QueueArtifactCleanup} from '@main/services/download/queueArtifactCleanup.js'
import {makeItem} from '../shared/fixtures.js'

const roots: string[] = []

afterEach(async () => {
	await Promise.all(roots.splice(0).map(root => rm(root, {recursive: true, force: true})))
})

describe('deleteDownloadedFiles', () => {
	it('deletes the download inside its folder and leaves everything else', async () => {
		const root = await mkdtemp(path.join(tmpdir(), 'plinth-delete-'))
		roots.push(root)
		const media = path.join(root, 'video.mkv')
		const outside = path.join(tmpdir(), `plinth-keep-${Date.now()}.txt`)
		await writeFile(media, 'media')
		await writeFile(outside, 'keep')
		roots.push(path.dirname(outside) === tmpdir() ? outside : path.dirname(outside))

		const item = makeItem({
			id: 'done',
			status: 'done',
			outputDir: root,
			artifacts: [
				{id: 'media', kind: 'media', path: media, fileName: 'video.mkv', discoveredAt: '2026-06-18T10:00:00.000Z'},
				{id: 'outside', kind: 'media', path: outside, fileName: 'keep.txt', discoveredAt: '2026-06-18T10:00:00.000Z'},
				{id: 'playlist', kind: 'companion', path: path.join(root, 'list.m3u'), fileName: 'list.m3u', discoveredAt: '2026-06-18T10:00:00.000Z'}
			]
		})

		await new QueueArtifactCleanup().deleteDownloadedFiles(item)

		await expect(readFile(media, 'utf8')).rejects.toThrow()
		expect(await readFile(outside, 'utf8')).toBe('keep')
		await rm(outside, {force: true})
	})
})
