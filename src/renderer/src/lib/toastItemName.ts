// How a toast names a quick download's item. A title reads as itself; a link
// the probe has not titled yet reads as host + video id (or playlist id), or as a short address
// cut with an ellipsis, so a toast never wraps a URL mid-word.

const MAX_ADDRESS = 40
const ID_PATH = /^\/(?:shorts|live|embed)\/([^/]+)/
const SOCIAL_VIDEO = /\/@([^/]+)\/(?:video|photo)\/\d{6,}/

function itemId(url: URL, host: string): string | null {
	if (host === 'youtu.be') return url.pathname.split('/')[1] || null
	const youtube = url.searchParams.get('v') ?? ID_PATH.exec(url.pathname)?.[1] ?? url.searchParams.get('list')
	if (youtube) return youtube
	const social = SOCIAL_VIDEO.exec(url.pathname)
	if (social?.[1]) return `@${social[1]}`
	const bare = /\/(?:video|photo)\/(\d{6,})/.exec(url.pathname)
	return bare?.[1] ?? null
}

export function toastItemName(title: string): string {
	let url: URL
	try {
		url = new URL(title.trim())
	} catch {
		return title
	}
	if (url.protocol !== 'http:' && url.protocol !== 'https:') return title
	const host = url.hostname.replace(/^(?:www|m)\./, '')
	const id = itemId(url, host)
	if (id) return `${host} · ${id}`
	const address = `${host}${url.pathname.replace(/\/+$/, '')}`
	return address.length > MAX_ADDRESS ? `${address.slice(0, MAX_ADDRESS)}…` : address
}
