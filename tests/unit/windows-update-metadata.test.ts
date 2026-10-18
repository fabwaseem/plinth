import {describe, expect, it} from 'vite-plus/test'
import {applyUpdateMetadata, latestYmlNames} from '../../scripts/release/refresh-windows-update-metadata.mjs'

const sample = [
	'version: 1.2.3',
	'files:',
	'  - url: Plinth-win-x64-Setup.exe',
	'    sha512: OLDSETUP==',
	'    size: 10',
	'  - url: Other.exe',
	'    sha512: OLDOTHER==',
	'    size: 4',
	'path: Plinth-win-x64-Setup.exe',
	'sha512: OLDSETUP==',
	"releaseDate: '2026-01-01T00:00:00.000Z'",
	'',
].join('\n')

describe('windows update metadata', () => {
	it('rewrites sha512 and size for each named file and keeps the rest of latest.yml', () => {
		const updated = applyUpdateMetadata(sample, {
			'Plinth-win-x64-Setup.exe': {sha512: 'NEWSETUP==', size: 20},
			'Other.exe': {sha512: 'NEWOTHER==', size: 8},
		})

		expect(updated).toContain('    sha512: NEWSETUP==')
		expect(updated).toContain('    size: 20')
		expect(updated).toContain('    sha512: NEWOTHER==')
		expect(updated).toContain('    size: 8')
		expect(updated).toContain('sha512: NEWSETUP==\n')
		expect(updated).not.toContain('OLDSETUP')
		expect(updated).not.toContain('OLDOTHER')
		expect(updated).toContain("releaseDate: '2026-01-01T00:00:00.000Z'")
		expect(updated.endsWith('\n')).toBe(true)
		expect(latestYmlNames(updated)).toEqual(['Plinth-win-x64-Setup.exe', 'Other.exe'])
	})

	it('preserves CRLF and throws when a requested file has no sha512', () => {
		const crlf = sample.replaceAll('\n', '\r\n')
		const updated = applyUpdateMetadata(crlf, {
			'Plinth-win-x64-Setup.exe': {sha512: 'NEWSETUP==', size: 20},
			'Other.exe': {sha512: 'NEWOTHER==', size: 8},
		})

		expect(updated.includes('\r\n')).toBe(true)
		expect(updated.includes('sha512: NEWSETUP==\r\n')).toBe(true)
		expect(() => applyUpdateMetadata(sample, {'Missing.exe': {sha512: 'NOPE==', size: 1}})).toThrow(/Missing\.exe/)
	})
})
