// @vitest-environment node
import {describe, expect, it} from 'vite-plus/test'
import {sameBounds, scaledCornerRadius} from '../../src/renderer/src/components/explore/exploreLayout.js'
import type {ExploreViewBounds} from '../../src/shared/types.js'

const BOUNDS: ExploreViewBounds = {x: 1, y: 2, width: 3, height: 4}

describe('scaledCornerRadius', () => {
	it('drops a missing or empty radius', () => {
		expect(scaledCornerRadius('', 100, 100)).toBe(0)
		expect(scaledCornerRadius('0px', 100, 100)).toBe(0)
	})

	it('keeps a laid-out radius when nothing is zoomed', () => {
		expect(scaledCornerRadius('12px', 640, 640)).toBe(12)
	})

	it('scales the pre-zoom radius by the CSS zoom already in the screen rect', () => {
		expect(scaledCornerRadius('12px', 640, 960)).toBe(18)
	})
})

describe('sameBounds', () => {
	it('treats a missing radius as square', () => {
		expect(sameBounds(BOUNDS, {...BOUNDS, radius: 0})).toBe(true)
	})

	it('notices a corner-radius change', () => {
		expect(sameBounds({...BOUNDS, radius: 12}, {...BOUNDS, radius: 16})).toBe(false)
	})
})
