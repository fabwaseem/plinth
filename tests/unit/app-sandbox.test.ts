// @vitest-environment node

import {describe, expect, it} from 'vite-plus/test'
import {shouldEnableAppSandbox} from '@main/appSandbox.js'

describe('shouldEnableAppSandbox', () => {
	it('enables the sandbox when the dev launcher has not opted out', () => {
		expect(shouldEnableAppSandbox({})).toBe(true)
	})

	it('skips enableSandbox when ELECTRON_DISABLE_SANDBOX is set', () => {
		expect(shouldEnableAppSandbox({ELECTRON_DISABLE_SANDBOX: '1'})).toBe(false)
		expect(shouldEnableAppSandbox({ELECTRON_DISABLE_SANDBOX: '0'})).toBe(false)
	})
})
