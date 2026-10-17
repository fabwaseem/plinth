import {describe, expect, it} from 'vite-plus/test'
import {classifyExploreAddress} from '@shared/sites/exploreAddress.js'
import {browseAddressScope, browseSiteLabel, browseSourceForUrl, googleSearchUrl, isBrowsePageGrabbable, isExploreOpenAddress} from '@shared/sites/browseSources.js'
import {youtubeSite} from '@shared/sites/youtube.js'

function scope() {
	if (!youtubeSite.explore) throw new Error('youtube has no Explore capability')
	return {explore: youtubeSite.explore, scope: browseAddressScope(youtubeSite.explore)}
}

describe('browse sources', () => {
	it('searches Google and each source', () => {
		expect(googleSearchUrl('lofi beats')).toBe('https://www.google.com/search?q=lofi+beats')
		expect(browseSourceForUrl('https://www.tiktok.com/')?.searchUrl('cats')).toBe('https://www.tiktok.com/search?q=cats')
		expect(browseSourceForUrl('https://www.dailymotion.com/')?.searchUrl('cats & dogs')).toBe('https://www.dailymotion.com/search/cats%20%26%20dogs')
		expect(browseSourceForUrl('https://search.bilibili.com/all')?.id).toBe('bilibili')
	})

	it('treats a source page as downloadable and a home or search as not', () => {
		expect(isBrowsePageGrabbable('https://www.tiktok.com/@creator/video/123')).toBe(true)
		expect(isBrowsePageGrabbable('https://vimeo.com/123')).toBe(true)
		expect(isBrowsePageGrabbable('https://www.tiktok.com/')).toBe(false)
		expect(isBrowsePageGrabbable('https://www.tiktok.com/search?q=cats')).toBe(false)
		expect(isBrowsePageGrabbable('https://www.youtube.com/feed/subscriptions')).toBe(false)
		expect(isBrowsePageGrabbable('https://www.google.com/search?q=cats')).toBe(false)
		expect(isBrowsePageGrabbable('https://example.com/video/1')).toBe(true)
		expect(isBrowsePageGrabbable('https://example.com/')).toBe(false)
	})

	it('loads a source or Google in the view and leaves other sites outside it', () => {
		const {explore, scope: addressScope} = scope()
		expect(classifyExploreAddress('vimeo.com/123', explore, addressScope)).toEqual({kind: 'site', url: 'https://vimeo.com/123'})
		expect(classifyExploreAddress('https://www.google.com/search?q=cats', explore, addressScope)).toEqual({kind: 'site', url: 'https://www.google.com/search?q=cats'})
		expect(classifyExploreAddress('example.com/video', explore, addressScope)).toEqual({kind: 'offsite', url: 'https://example.com/video'})
		expect(isExploreOpenAddress('https://example.com/video', addressScope)).toBe(true)
		expect(isExploreOpenAddress('https://accounts.google.com/ServiceLogin', addressScope)).toBe(false)
		expect(browseSiteLabel('https://vimeo.com/123')).toBe('Vimeo')
		expect(browseSiteLabel('https://example.com/video/1')).toBe('example.com')
		expect(classifyExploreAddress('https://accounts.google.com/ServiceLogin', explore, addressScope)).toEqual({kind: 'refused'})
	})
})
