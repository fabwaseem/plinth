import {existsSync, readFileSync} from 'node:fs'
import {join} from 'node:path'
import {describe, expect, it} from 'vite-plus/test'

const root = process.cwd()

describe('renderer startup shell', () => {
	it('waits on the stone sky until the status splash mounts', () => {
		const html = readFileSync(join(root, 'src/renderer/index.html'), 'utf8')

		expect(html).not.toContain('id="boot-splash"')
		expect(html).not.toContain('Starting Plinth')
		expect(html).not.toContain('#050813')
		expect(html).not.toContain('#1f69ff')
		expect(html).toContain('#131211')
		expect(html).toContain('#f7f5f3')
		expect(html).toContain('id="root"')
	})

	it('ships theme-aware pre-paint colors before settings load', () => {
		const html = readFileSync(join(root, 'src/renderer/index.html'), 'utf8')

		expect(html).toContain('@media (prefers-color-scheme: light)')
		expect(html).toContain('color-scheme: light')
		expect(html).toContain('color-scheme: dark')
	})

	it('keeps the post-boot body background on the active app sky', () => {
		const css = readFileSync(join(root, 'src/renderer/src/styles.css'), 'utf8')

		const unlayeredBackgroundOverride = ':root,\nbody {\n\tbackground: var(--background);\n}'

		expect(css).toContain(unlayeredBackgroundOverride)
		expect(css.indexOf(unlayeredBackgroundOverride)).toBeLessThan(css.indexOf('@layer base'))
	})

	it('keeps the favicon on the packaged logo', () => {
		const html = readFileSync(join(root, 'src/renderer/index.html'), 'utf8')

		expect(html).toContain('href="/logo.svg"')
		expect(existsSync(join(root, 'src/renderer/public/logo.svg'))).toBe(true)
	})
})
