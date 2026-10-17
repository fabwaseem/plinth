import {test} from '@playwright/test'
import type {Page} from '@playwright/test'

// Regenerates the README screenshots in build/ from the browser-mock renderer.
//
//   bun run screenshots:readme                      every shot
//   bun run screenshots:readme -g "Bulk URLs"        one shot
//
// Each shot is a scenario from the Scenario Workbench rendered with showcase
// content (`showcase=1`: sample titles and generated artwork instead of fixture
// text) and the software WebGL backdrop (`backdropSoftware=1`, so headless
// Chromium shows the GPU look), at the default window size and 2x pixel
// density, in the dark theme. Each shot waits for its own `ready` element.
// To add a shot for a new feature: add a scenario if none shows it, add an entry
// below, run the command, and reference build/<file> from readme-src/template.md.

interface Shot {
	name: string
	file: string
	query: string
	hash?: string
	// The element that proves the screen finished loading (after `prepare`, if any).
	ready: string
	// A taller window than the default, for a screen whose story does not fit in 760 px.
	height?: number
	prepare?: (page: Page) => Promise<void>
}

const SAMPLE_URLS = ['https://www.youtube.com/watch?v=aurora4k01', 'https://www.youtube.com/watch?v=reefdoc002', 'https://www.youtube.com/watch?v=nighttrain3']

const SHOTS: readonly Shot[] = [
	{name: 'Download', file: 'readme/download.png', query: 'scenario=default', hash: '#download', ready: '[data-testid="profiles-quick-download"]:not([disabled])'},
	{
		name: 'Browse',
		file: 'readme/browse.png',
		query: 'scenario=explore-notice',
		ready: '[data-testid="browse-home"]',
		prepare: async page => {
			await page.getByTestId('explore-notice-continue').click()
		}
	},
	{
		name: 'Bulk URLs',
		file: 'readme/bulk.png',
		query: 'scenario=profiles-bulk',
		hash: '#bulk',
		ready: '[data-testid="bulk-url-textarea"]',
		prepare: async page => {
			await page.getByTestId('bulk-url-textarea').fill([...SAMPLE_URLS, SAMPLE_URLS[0]].join('\n'))
		}
	},
	{name: 'History', file: 'readme/history.png', query: 'scenario=queue-parallel', hash: '#queue', ready: '[data-testid="queue-manager-row-queue-parallel-6"]'},
	{name: 'Profiles', file: 'readme/profiles.png', query: 'scenario=default', hash: '#profiles', ready: '[data-testid="profiles-manage-tab"]'}
]

// Chrome that belongs to the workbench or to first-run moments, not to the feature being shown.
const HIDE = ['[data-testid="scenario-gallery"]', '[data-testid="queue-tab-first-run-cue"]', '[data-testid="feedback-nudge"]']

for (const shot of SHOTS) {
	test(shot.name, async ({page}) => {
		if (shot.height) await page.setViewportSize({width: 900, height: shot.height})
		await page.goto(`/?${shot.query}&theme=dark&showcase=1&backdropSoftware=1${shot.hash ?? ''}`)
		await page.waitForSelector('[data-testid="app-root"]')
		await page.addStyleTag({content: `${HIDE.join(',')}{display:none!important}`})
		await page.waitForSelector('body.backdrop-webgl-active')
		if (shot.prepare) {
			// Probe scenarios land on their step only after the mock's probe delay.
			await page.waitForSelector('[data-testid="profiles-tabs"], [data-testid="wizard-panel"] [data-testid^="step-"]')
			await shot.prepare(page)
		}
		await page.waitForSelector(shot.ready)
		await page.waitForFunction(() => [...document.images].every(image => image.complete))
		// Let entrance transitions finish so nothing is caught mid-fade.
		await page.waitForTimeout(600)
		await page.screenshot({path: `build/${shot.file}`})
	})
}
