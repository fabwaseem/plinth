import {describe, expect, it} from 'vite-plus/test'
import {isTikTokFeedUrl, tiktokMediaFromPage, tiktokVideoPageUrl} from '@shared/sites/tiktokMedia.js'
import {isExploreGrabbable} from '@renderer/components/explore/exploreGrab.js'

const VIDEO = 'https://www.tiktok.com/@Mani.Studio/video/7123456789012345678'

describe('TikTok playing video', () => {
	it('keeps a video page and drops the feed address', () => {
		expect(tiktokVideoPageUrl(`${VIDEO}?is_from_webapp=1&sender_device=pc`)).toBe(VIDEO)
		expect(tiktokVideoPageUrl('/@Mani.Studio/video/7123456789012345678')).toBe(VIDEO)
		expect(tiktokVideoPageUrl('https://www.tiktok.com/')).toBeNull()
		expect(tiktokVideoPageUrl('https://www.tiktok.com/search?q=cats')).toBeNull()
		expect(tiktokVideoPageUrl('https://evil.example/@Mani.Studio/video/7123456789012345678')).toBeNull()
	})

	it('builds the video page from the card that is playing', () => {
		expect(tiktokMediaFromPage({hrefs: ['/@Mani.Studio/video/7123456789012345678'], ids: ['7123456789012345678'], author: 'Mani.Studio'})).toBe(VIDEO)
		expect(tiktokMediaFromPage({hrefs: [], ids: ['xgwrapper-0-7123456789012345678'], author: 'Mani.Studio'})).toBe(VIDEO)
		expect(tiktokMediaFromPage({hrefs: ['/@other/video/7000000000000000001', VIDEO], ids: ['7123456789012345678'], author: 'other'})).toBe(VIDEO)
		expect(tiktokMediaFromPage({hrefs: [], ids: [], author: ''})).toBe('')
		expect(tiktokMediaFromPage(null)).toBe('')
	})

	it('treats the For You feed as a page Download can take', () => {
		expect(isTikTokFeedUrl('https://www.tiktok.com/')).toBe(true)
		expect(isTikTokFeedUrl('https://www.tiktok.com/foryou')).toBe(true)
		expect(isTikTokFeedUrl('https://www.tiktok.com/following')).toBe(true)
		expect(isTikTokFeedUrl('https://www.tiktok.com/search?q=cats')).toBe(false)
		expect(isTikTokFeedUrl(VIDEO)).toBe(false)
		expect(isExploreGrabbable('https://www.tiktok.com/')).toBe(true)
		expect(isExploreGrabbable('https://www.tiktok.com/search?q=cats')).toBe(false)
		expect(isExploreGrabbable(VIDEO)).toBe(true)
		expect(isExploreGrabbable('https://www.youtube.com/')).toBe(false)
	})
})
