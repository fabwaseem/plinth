import {describe, expect, it} from 'vite-plus/test'
import {buildDownloadProfileActionModel, quickProfileSummary} from '@renderer/components/wizard/downloadProfileActions.js'
import {BUILTIN_DOWNLOAD_PROFILES, setDownloadProfileEnabled} from '@shared/downloadProfiles.js'
import type {DownloadProfilesPrefs} from '@shared/types.js'

describe('download profile action model', () => {
	it('projects the active profile, menu options, refs, labels, and summaries in one place', () => {
		const prefs: DownloadProfilesPrefs = {active: {kind: 'builtin', id: 'audio-only'}, overrides: [], custom: [], enabledOverrides: {}}

		const model = buildDownloadProfileActionModel(prefs)

		expect(model.activeProfile.id).toBe('audio-only')
		expect(model.activeSummary).toBe('best audio')
		expect(model.options).toHaveLength(BUILTIN_DOWNLOAD_PROFILES.filter(profile => profile.enabled).length)
		expect(model.options.find(option => option.profile.id === 'audio-only')).toMatchObject({active: true, ref: {kind: 'builtin', id: 'audio-only'}})
		expect(model.options.every(option => option.label.length > 0)).toBe(true)
	})

	it('hides a turned-off profile until it is enabled again', () => {
		const prefs: DownloadProfilesPrefs = {active: {kind: 'builtin', id: 'audio-only'}, overrides: [], custom: [], enabledOverrides: {}}
		const hidden = setDownloadProfileEnabled(prefs, 'hd-1080', false)
		expect(buildDownloadProfileActionModel(hidden).options.some(option => option.profile.id === 'hd-1080')).toBe(false)

		const enabled = setDownloadProfileEnabled(hidden, 'hd-1080', true)
		expect(buildDownloadProfileActionModel(enabled).options.some(option => option.profile.id === 'hd-1080')).toBe(true)
	})

	it('summarizes profile media intent for compact controls', () => {
		const balanced = BUILTIN_DOWNLOAD_PROFILES.find(profile => profile.id === 'balanced')
		const fullHd = BUILTIN_DOWNLOAD_PROFILES.find(profile => profile.id === 'hd-1080')
		if (!balanced || !fullHd) throw new Error('expected built-in profiles')

		expect(quickProfileSummary(balanced)).toBe('720p · best audio')
		expect(quickProfileSummary(fullHd)).toBe('1080p · best audio')
	})

	it('uses the default bitrate for lossy audio profile summaries with no explicit bitrate', () => {
		expect(quickProfileSummary({...BUILTIN_DOWNLOAD_PROFILES[0], media: {kind: 'audio-only', audio: {format: 'mp3'}}})).toBe('MP3 192K')
	})
})
