import {describe, expect, it} from 'vite-plus/test'
import {lightOceanScene} from '@renderer/components/layout/background/lightOcean/scene.js'
import {FRAG} from '@renderer/components/layout/background/lightOcean/shader.js'

describe('light ocean WebGL shader', () => {
	it('uses the light backdrop render budget', () => {
		expect(lightOceanScene.renderScale).toBe(0.75)
		expect(lightOceanScene.maxDevicePixelRatio).toBe(1.5)
		expect(lightOceanScene.frameIntervalMs).toBe(1000 / 30)
	})

	it('does not regress to the flat postcard ocean structure', () => {
		expect(FRAG).not.toContain('float horizon = 0.47')
		expect(FRAG).not.toMatch(/\bcloud[A-C]\b/)
		expect(FRAG).not.toMatch(/q\.y\s*\*\s*(88\.0|142\.0|120\.0)/)
		expect(FRAG).toContain('seaNormal')
		expect(FRAG).toContain('domainWarp')
		expect(FRAG).toContain('atmosphericHaze')
	})

	it('paints a quiet paper field instead of the ocean', () => {
		const main = FRAG.slice(FRAG.lastIndexOf('void main()'))
		expect(main).toContain('vec3(0.973, 0.965, 0.949)')
		expect(main).not.toContain('waterColor')
		expect(main).not.toContain('cloudVolume')
	})
})
