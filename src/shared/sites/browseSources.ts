// Sources the Browse tab can open. YouTube stays the signed-in site; these
// hosts are where a typed address or a launcher pick may load, and where a
// page can be downloaded. Google is the launcher's search, not a source.

import {EXPLORE_ADDRESS_MAX, exploreAddressScope, type ExploreSiteScope} from './exploreAddress.js'
import {hostMatches} from './hostRules.js'
import type {HostRule, SiteExplore} from './types.js'

export type BrowseSourceId = 'youtube' | 'tiktok' | 'instagram' | 'facebook' | 'x' | 'reddit' | 'twitch' | 'vimeo' | 'soundcloud' | 'dailymotion' | 'pinterest' | 'bilibili'

export interface BrowseSource {
	readonly id: BrowseSourceId
	readonly name: string
	readonly homeUrl: string
	readonly hosts: readonly HostRule[]
	readonly searchUrl: (query: string) => string
	readonly isHome: (url: URL) => boolean
	readonly isSearch: (url: URL) => boolean
}

function suffix(domain: string): HostRule {
	return {kind: 'suffix', domain}
}

function exact(host: string): HostRule {
	return {kind: 'exact', host}
}

function withQuery(base: string, key: string, query: string): string {
	const url = new URL(base)
	url.searchParams.set(key, query)
	return url.href
}

function siteHome(hosts: readonly HostRule[]): (url: URL) => boolean {
	return url => hostMatches(url.hostname, hosts) && (url.pathname === '/' || url.pathname === '') && url.search === '' && url.hash === ''
}

function pathIs(pathname: string, prefix: string): boolean {
	const path = pathname.replace(/\/+$/, '') || '/'
	const stem = prefix.replace(/\/+$/, '') || '/'
	return path === stem || path.startsWith(`${stem}/`)
}

function source(entry: Omit<BrowseSource, 'isHome'> & {isHome?: (url: URL) => boolean}): BrowseSource {
	return {...entry, isHome: entry.isHome ?? siteHome(entry.hosts)}
}

export const BROWSE_SOURCES: readonly BrowseSource[] = [
	source({id: 'youtube', name: 'YouTube', homeUrl: 'https://www.youtube.com/', hosts: [suffix('youtube.com'), exact('youtu.be')], searchUrl: query => withQuery('https://www.youtube.com/results', 'search_query', query), isSearch: url => pathIs(url.pathname, '/results') && url.searchParams.has('search_query')}),
	source({id: 'tiktok', name: 'TikTok', homeUrl: 'https://www.tiktok.com/', hosts: [suffix('tiktok.com')], searchUrl: query => withQuery('https://www.tiktok.com/search', 'q', query), isSearch: url => pathIs(url.pathname, '/search')}),
	source({id: 'instagram', name: 'Instagram', homeUrl: 'https://www.instagram.com/', hosts: [suffix('instagram.com')], searchUrl: query => withQuery('https://www.instagram.com/explore/search/keyword/', 'q', query), isSearch: url => pathIs(url.pathname, '/explore/search')}),
	source({id: 'facebook', name: 'Facebook', homeUrl: 'https://www.facebook.com/', hosts: [suffix('facebook.com'), suffix('fb.watch'), exact('fb.com')], searchUrl: query => withQuery('https://www.facebook.com/search/top/', 'q', query), isSearch: url => pathIs(url.pathname, '/search')}),
	source({id: 'x', name: 'X', homeUrl: 'https://x.com/', hosts: [suffix('x.com'), suffix('twitter.com'), exact('t.co')], searchUrl: query => withQuery('https://x.com/search', 'q', query), isSearch: url => pathIs(url.pathname, '/search')}),
	source({id: 'reddit', name: 'Reddit', homeUrl: 'https://www.reddit.com/', hosts: [suffix('reddit.com'), exact('redd.it')], searchUrl: query => withQuery('https://www.reddit.com/search/', 'q', query), isSearch: url => pathIs(url.pathname, '/search')}),
	source({id: 'twitch', name: 'Twitch', homeUrl: 'https://www.twitch.tv/', hosts: [suffix('twitch.tv')], searchUrl: query => withQuery('https://www.twitch.tv/search', 'term', query), isSearch: url => pathIs(url.pathname, '/search')}),
	source({id: 'vimeo', name: 'Vimeo', homeUrl: 'https://vimeo.com/', hosts: [suffix('vimeo.com')], searchUrl: query => withQuery('https://vimeo.com/search', 'q', query), isSearch: url => pathIs(url.pathname, '/search')}),
	source({id: 'soundcloud', name: 'SoundCloud', homeUrl: 'https://soundcloud.com/', hosts: [suffix('soundcloud.com')], searchUrl: query => withQuery('https://soundcloud.com/search', 'q', query), isSearch: url => pathIs(url.pathname, '/search')}),
	source({id: 'dailymotion', name: 'Dailymotion', homeUrl: 'https://www.dailymotion.com/', hosts: [suffix('dailymotion.com'), exact('dai.ly')], searchUrl: query => `https://www.dailymotion.com/search/${encodeURIComponent(query)}`, isSearch: url => pathIs(url.pathname, '/search')}),
	source({id: 'pinterest', name: 'Pinterest', homeUrl: 'https://www.pinterest.com/', hosts: [suffix('pinterest.com'), exact('pin.it')], searchUrl: query => withQuery('https://www.pinterest.com/search/pins/', 'q', query), isSearch: url => pathIs(url.pathname, '/search')}),
	source({id: 'bilibili', name: 'Bilibili', homeUrl: 'https://www.bilibili.com/', hosts: [suffix('bilibili.com'), exact('b23.tv')], searchUrl: query => withQuery('https://search.bilibili.com/all', 'keyword', query), isSearch: url => url.hostname.startsWith('search.') || pathIs(url.pathname, '/search')})
]

const GOOGLE_HOSTS: readonly HostRule[] = [exact('www.google.com'), exact('google.com')]

export function googleSearchUrl(query: string): string {
	return withQuery('https://www.google.com/search', 'q', query)
}

export function browseSourceForUrl(raw: string): BrowseSource | null {
	let url: URL
	try {
		url = new URL(raw)
	} catch {
		return null
	}
	return BROWSE_SOURCES.find(entry => hostMatches(url.hostname, entry.hosts)) ?? null
}

// Hosts a typed address may load beyond the signed-in site's own content hosts.
export function browseContentHosts(): readonly HostRule[] {
	const extra = BROWSE_SOURCES.filter(entry => entry.id !== 'youtube').flatMap(entry => entry.hosts)
	return [...extra, ...GOOGLE_HOSTS]
}

export function browseNavigationHosts(siteHosts: readonly HostRule[]): readonly HostRule[] {
	return [...siteHosts, ...browseContentHosts()]
}

export function browseAddressScope(explore: Pick<SiteExplore, 'contentHosts' | 'signInHosts' | 'consentHosts'>, extraAllowedOrigin?: string): ExploreSiteScope {
	const scope = exploreAddressScope(explore, extraAllowedOrigin)
	return {...scope, hosts: [...scope.hosts, ...browseContentHosts()]}
}

// The name shown on Download: a known source, otherwise the site's host.
export function browseSiteLabel(raw: string): string {
	const entry = browseSourceForUrl(raw)
	if (entry) return entry.name
	try {
		return new URL(raw).hostname.replace(/^www\./, '')
	} catch {
		return ''
	}
}

const WEB_PROTOCOLS = new Set(['http:', 'https:'])

// A link the address bar may open: a normal web URL, not a scheme the view
// could run, and not a sign-in or consent host.
export function isExploreOpenAddress(raw: string, scope: ExploreSiteScope): boolean {
	if (raw.length > EXPLORE_ADDRESS_MAX) return false
	let url: URL
	try {
		url = new URL(raw)
	} catch {
		return false
	}
	if (url.username !== '' || url.password !== '') return false
	if (scope.extraAllowedOrigin !== undefined && url.origin === scope.extraAllowedOrigin) return true
	if (scope.blockedHosts !== undefined && hostMatches(url.hostname, scope.blockedHosts)) return false
	if (url.protocol === 'https:' && url.port === '' && hostMatches(url.hostname, scope.hosts)) return true
	return WEB_PROTOCOLS.has(url.protocol) && url.hostname !== ''
}

function isGenericSearch(url: URL): boolean {
	const path = url.pathname.replace(/\/+$/, '') || '/'
	return path === '/search' || path.startsWith('/search/') || path === '/results' || path.startsWith('/results/')
}

function isGoogleSearch(url: URL): boolean {
	const host = url.hostname.replace(/^www\./, '')
	return (host === 'google.com' || host.endsWith('.google.com')) && url.pathname === '/search'
}

// A page Download can hand to yt-dlp. Homes and search pages name nothing.
// YouTube keeps its own URL-intent rules, so it is never decided here.
export function isBrowsePageGrabbable(raw: string): boolean {
	let url: URL
	try {
		url = new URL(raw)
	} catch {
		return false
	}
	if (!WEB_PROTOCOLS.has(url.protocol) || url.username !== '' || url.password !== '') return false
	const entry = browseSourceForUrl(raw)
	if (!entry) return !isGoogleSearch(url) && !isGenericSearch(url) && !((url.pathname === '/' || url.pathname === '') && url.search === '')
	if (entry.id === 'youtube') return false
	return !entry.isHome(url) && !entry.isSearch(url)
}
