// TikTok's For You feed plays a video while the address stays on the home
// page. Download needs the video's own page, which the feed only keeps in the
// player, not in the address bar.

const VIDEO_ID = /(\d{8,22})/
const AUTHOR = /^[\w.]{1,24}$/

// The card around the video that is playing. The author and the /video/ link
// sit on an ancestor of the player, and the feed above that holds every other
// video, so the script stops at the first card that names exactly one video.
export const TIKTOK_PLAYING_VIDEO_SCRIPT = `(() => {
	const empty = {hrefs: [], ids: [], author: ''}
	const videos = document.querySelectorAll('video')
	let playing = null
	for (const video of videos) {
		if (!video.paused && video.readyState >= 2) { playing = video; break }
	}
	let node = playing || document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2)
	let best = empty
	while (node && node !== document.body && node !== document.documentElement) {
		const hrefs = []
		for (const link of node.querySelectorAll('a[href*="/video/"]')) {
			const href = link.getAttribute('href') || ''
			if (href) hrefs.push(href)
			if (hrefs.length >= 8) break
		}
		const ids = []
		for (const el of node.querySelectorAll('[id]')) {
			const match = String(el.id).match(/(\\d{15,})/)
			if (match) ids.push(match[1])
			if (ids.length >= 4) break
		}
		const named = node.querySelector('[data-e2e="video-author-uniqueid"]')
		const authorLink = node.querySelector('a[href^="/@"], a[href*="tiktok.com/@"]')
		const author = (named && named.textContent ? named.textContent : authorLink ? authorLink.getAttribute('href') || '' : '').trim().slice(0, 80)
		const distinct = []
		for (const href of hrefs) {
			const match = href.match(/\\/video\\/(\\d{8,22})/)
			if (match && !distinct.includes(match[1])) distinct.push(match[1])
		}
		for (const id of ids) if (!distinct.includes(id)) distinct.push(id)
		if (distinct.length > 1) break
		if (distinct.length === 1) best = {hrefs, ids: distinct, author}
		const root = node.getRootNode && node.getRootNode()
		const next = root && root.host && root.host !== node ? root.host : node.parentElement
		node = next
	}
	if (best.ids.length === 1 && (best.hrefs.length === 0 || !best.author)) {
		const rect = playing ? playing.getBoundingClientRect() : {top: window.innerHeight / 2 - 40, bottom: window.innerHeight / 2 + 40}
		const near = el => {
			const box = el.getBoundingClientRect()
			return box.width > 0 && box.bottom > rect.top - 120 && box.top < rect.bottom + 120
		}
		if (best.hrefs.length === 0) {
			for (const link of document.querySelectorAll('a[href*="/video/"]')) {
				if (!near(link)) continue
				const href = link.getAttribute('href') || ''
				if (href.includes('/video/' + best.ids[0])) best.hrefs.push(href)
				if (best.hrefs.length >= 4) break
			}
		}
		if (!best.author) {
			for (const el of document.querySelectorAll('[data-e2e="video-author-uniqueid"], a[href^="/@"]')) {
				if (!near(el)) continue
				best.author = (el.getAttribute('href') || el.textContent || '').trim().slice(0, 80)
				if (best.author) break
			}
		}
	}
	return best
})()`

function tiktokHost(hostname: string): boolean {
	const host = hostname.replace(/\.$/, '').replace(/^www\./, '')
	return host === 'tiktok.com' || host.endsWith('.tiktok.com')
}

function tiktokAuthor(raw: string): string | null {
	const trimmed = raw.trim()
	const fromHref = /^(?:https?:\/\/(?:www\.)?tiktok\.com)?\/?@([\w.]{1,24})(?:\/|$)/.exec(trimmed)
	const name = fromHref?.[1] ?? (trimmed.startsWith('@') ? trimmed.slice(1) : trimmed)
	if (!AUTHOR.test(name) || name.startsWith('.') || name.endsWith('.') || name.includes('..')) return null
	return name
}

// The page yt-dlp can download: https://www.tiktok.com/@user/video/<id>
export function tiktokVideoPageUrl(raw: string): string | null {
	let url: URL
	try {
		url = new URL(raw, 'https://www.tiktok.com')
	} catch {
		return null
	}
	if ((url.protocol !== 'https:' && url.protocol !== 'http:') || !tiktokHost(url.hostname)) return null
	const match = /^\/@([\w.]{1,24})\/video\/(\d{8,22})$/.exec(url.pathname.replace(/\/+$/, ''))
	if (!match?.[1] || !match[2]) return null
	const author = tiktokAuthor(match[1])
	return author ? `https://www.tiktok.com/@${author}/video/${match[2]}` : null
}

function videoId(raw: string): string | null {
	const match = VIDEO_ID.exec(raw)
	return match?.[1] ?? null
}

function strings(value: unknown, limit: number): string[] {
	if (!Array.isArray(value)) return []
	return value.filter((item): item is string => typeof item === 'string').slice(0, limit)
}

// What the page script found in the card that is playing.
export function tiktokMediaFromPage(raw: unknown): string {
	if (raw === null || typeof raw !== 'object') return ''
	const hrefs = strings('hrefs' in raw ? raw.hrefs : [], 12)
	const ids = strings('ids' in raw ? raw.ids : [], 4)
	const authorField = 'author' in raw ? raw.author : ''
	const author = typeof authorField === 'string' ? authorField.slice(0, 80) : ''
	const preferred = ids.map(videoId).find((id): id is string => id !== null)
	const pages = hrefs.map(tiktokVideoPageUrl).filter((url): url is string => url !== null)
	if (preferred) {
		const match = pages.find(url => url.endsWith(`/${preferred}`))
		if (match) return match
		const built = tiktokAuthor(author)
		if (built) return `https://www.tiktok.com/@${built}/video/${preferred}`
	}
	return pages[0] ?? ''
}

// The For You feed: a video is on screen and the address is not that video.
export function isTikTokFeedUrl(raw: string): boolean {
	let url: URL
	try {
		url = new URL(raw)
	} catch {
		return false
	}
	if (url.protocol !== 'https:' || !tiktokHost(url.hostname)) return false
	const path = url.pathname.replace(/\/+$/, '') || '/'
	return path === '/' || path === '/foryou' || path === '/following'
}
