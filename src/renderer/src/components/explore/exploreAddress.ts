import type {TFunction} from 'i18next'
import {EXPLORE_ADDRESS_MAX, classifyExploreAddress, type ExploreAddress} from '@shared/sites/exploreAddress.js'
import {browseAddressScope, googleSearchUrl, isExploreOpenAddress} from '@shared/sites/browseSources.js'
import {siteById} from '@shared/sites/index.js'
import type {ExploreAddressHint} from '../../store/types.js'

// Plain text searches Google. A web link opens in the view. YouTube links keep
// their watch-page form; sign-in and non-web schemes stay refused.
const EXPLORE = siteById('youtube').explore

// `failed`: navigation broke for a reason that says nothing about the
// address (IPC, an error in main): logged, and nothing shown.
export type ExploreAddressOutcome = {kind: 'navigated'} | {kind: 'hint'; hint: ExploreAddressHint} | {kind: 'failed'}

// Enter in the address bar (P2-R45). A link or a search goes to main, which
// alone decides what the view loads: only it knows the E2E home origin, so
// a link on another site is sent too and comes back refused (a validation
// failure). That refusal shows the hint, with Download for a web link on
// another site; what is refused here (another scheme, credentials, a
// sign-in, account or consent page, over the cap) is never sent.
function openableAddress(text: string): ExploreAddress {
	if (!EXPLORE) return {kind: 'refused'}
	const scope = browseAddressScope(EXPLORE)
	const classified = classifyExploreAddress(text, EXPLORE, scope)
	if (classified.kind === 'search') {
		const url = googleSearchUrl(text.trim())
		return url.length > EXPLORE_ADDRESS_MAX ? {kind: 'search-too-long'} : {kind: 'search', url}
	}
	if (classified.kind === 'offsite' && isExploreOpenAddress(classified.url, scope)) return {kind: 'site', url: classified.url}
	return classified
}

export async function submitExploreAddress(text: string): Promise<ExploreAddressOutcome> {
	const address = openableAddress(text)
	if (address.kind === 'refused' || address.kind === 'search-too-long') return {kind: 'hint', hint: {kind: address.kind}}
	const result = await window.appApi.explore.navigate({kind: 'address', url: address.url})
	if (result.ok) return {kind: 'navigated'}
	if (result.error.code !== 'validation') {
		console.warn('[explore] address navigation failed', result.error.code)
		return {kind: 'failed'}
	}
	return {kind: 'hint', hint: address.kind === 'offsite' ? {kind: 'offsite', downloadUrl: address.url} : {kind: 'refused'}}
}

function hostOf(url: string): string {
	try {
		return new URL(url).hostname
	} catch {
		return url
	}
}

// What the hint says (and the live region announces).
export function exploreAddressHintText(hint: ExploreAddressHint, t: TFunction): string {
	switch (hint.kind) {
		case 'offsite':
			return t('explore.toolbar.offsiteHintHost', {host: hostOf(hint.downloadUrl)})
		case 'refused':
			return t('explore.toolbar.offsiteHint')
		case 'search-too-long':
			return t('explore.toolbar.searchTooLong')
	}
}
