import {cleanUrl} from '@shared/cleanUrl.js'
import {isBrowsePageGrabbable} from '@shared/sites/browseSources.js'
import {isTikTokFeedUrl} from '@shared/sites/tiktokMedia.js'
import {classifyUrlIntent} from '@shared/urlIntent.js'

// Whether the Explore page is something the download flow can take as-is: a
// YouTube video (a video-with-list counts — the flow asks which one), a
// playlist, or a channel. Search results and a bare home name nothing to grab.
// TikTok's For You feed is the exception: the address stays on the home page
// while a video plays, and Download reads that video from the page.
export function isExploreGrabbable(url: string): boolean {
	if (!url) return false
	if (isTikTokFeedUrl(url)) return true
	const intent = classifyUrlIntent(cleanUrl(url))
	switch (intent.kind) {
		case 'obvious-single':
			return intent.site === 'youtube'
		case 'mixed':
			return true
		case 'obvious-collection':
			return intent.collection !== 'search'
		case 'unknown':
			return isBrowsePageGrabbable(url)
	}
}
