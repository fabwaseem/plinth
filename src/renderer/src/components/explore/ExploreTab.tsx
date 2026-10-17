import {useEffect, useRef, useState, type ReactNode, type RefObject} from 'react'
import {useShallow} from 'zustand/react/shallow'
import type {ExploreNavigateCommand, ExploreViewState} from '@shared/types.js'
import {isExploreAdBlockOn} from '@shared/exploreAdBlock.js'
import {isTikTokFeedUrl} from '@shared/sites/tiktokMedia.js'
import {replaceHash} from '@renderer/lib/navigation.js'
import {useAppStore} from '../../store/useAppStore.js'
import {Card} from '../ui/card.js'
import {ExploreAddressHint, ExploreAddressHintLive} from './ExploreAddressHint.js'
import {ExploreModeNudge, type NudgeMode} from './ExploreModeNudge.js'
import {submitExploreAddress} from './exploreAddress.js'
import {ExploreNotice} from './ExploreNotice.js'
import {buildDownloadProfileActionModel} from '../wizard/downloadProfileActions.js'
import {ExploreToolbar, type ExploreProfileMenuActions} from './ExploreToolbar.js'
import {ExploreViewport} from './ExploreViewport.js'
import {notify} from '../../lib/notify.js'
import {BrowseHome} from './BrowseHome.js'
import {isExploreGrabbable} from './exploreGrab.js'

const NO_PAGE: ExploreViewState = {url: '', title: '', canGoBack: false, canGoForward: false, loading: false, signedIn: false, error: null, adBlock: 'off'}

const NO_PAGE_AD_BLOCK_ON: ExploreViewState = {...NO_PAGE, adBlock: 'starting'}

// Edit, New and Manage in the profile menu belong to the home (its editor and tabs).
type ExploreTabProps = Omit<ExploreProfileMenuActions, 'onPickProfile'>

export function ExploreTab(props: ExploreTabProps): ReactNode {
	const noticeSeen = useAppStore(state => state.settings?.common?.exploreNoticeSeen === true)
	const acknowledgeExploreNotice = useAppStore(state => state.acknowledgeExploreNotice)
	const profilesPrefs = useAppStore(state => state.settings?.profiles)
	if (!noticeSeen) {
		const {activeProfile, ActiveIcon} = buildDownloadProfileActionModel(profilesPrefs)
		return <ExploreNotice profileName={activeProfile.name} ProfileIcon={ActiveIcon} onContinue={() => void acknowledgeExploreNotice()} />
	}
	return <ExploreBrowser {...props} />
}

function navigate(command: ExploreNavigateCommand): void {
	void window.appApi.explore.navigate(command)
}

function ExploreBrowser({onEditProfile, onNewProfile, onManageProfiles}: ExploreTabProps): ReactNode {
	const view = useAppStore(s => s.exploreView)
	// Home, and the first open before any page exists, show the source launcher
	// instead of the last site. A page the view already has stays up.
	const [atLauncher, setAtLauncher] = useState(false)
	const adBlockOn = useAppStore(s => isExploreAdBlockOn(s.settings?.common ?? {}))
	// Until main reports the view, the shield follows the setting (on unless turned off).
	const state = view ?? (adBlockOn ? NO_PAGE_AD_BLOCK_ON : NO_PAGE)
	const showLauncher = state.error === null && (atLauncher || (view !== null && view.url === ''))
	// The page hidden by Home or by backing out of the first site. Forward returns to it.
	const [parkedUrl, setParkedUrl] = useState<string | null>(null)
	const visibleUrl = showLauncher ? '' : state.url
	const toolbarState: ExploreViewState = showLauncher ? {...state, url: '', title: '', loading: false, canGoBack: false, canGoForward: parkedUrl !== null} : {...state, canGoBack: true}
	const pointerEntries = useAppStore(s => s.explorePointerEntries)
	const profilesPrefs = useAppStore(s => s.settings?.profiles)
	const setActiveDownloadProfile = useAppStore(s => s.setActiveDownloadProfile)
	const setExploreAdBlock = useAppStore(s => s.setExploreAdBlock)
	const {addressHint, setAddressHint} = useAppStore(useShallow(s => ({addressHint: s.exploreAddressHint, setAddressHint: s.setExploreAddressHint})))
	const profiles = buildDownloadProfileActionModel(profilesPrefs)
	const mountedRef = useExploreTabActive()
	const nudgeMode = useExploreModeNudge()
	const {setCookiesMode, dismissExploreModeNudge} = useAppStore(useShallow(s => ({setCookiesMode: s.setCookiesMode, dismissExploreModeNudge: s.dismissExploreModeNudge})))

	// A TikTok feed's address is the home page. The video to download is the one playing.
	async function downloadUrl(): Promise<string | null> {
		if (!isTikTokFeedUrl(visibleUrl)) return visibleUrl
		const result = await window.appApi.explore.readMedia()
		if (!result.ok || result.data === '') {
			notify.exploreVideoNotFound()
			return null
		}
		return result.data
	}

	// A Download prepares in the background as a row in Downloads; the page
	// title names the row until the probe knows the video's own.
	function grab(): void {
		if (!isTikTokFeedUrl(visibleUrl)) {
			void useAppStore.getState().quickDownload({url: visibleUrl, entry: 'explore', title: state.title})
			return
		}
		void downloadUrl().then(url => {
			if (!url) return
			void useAppStore.getState().quickDownload({url, entry: 'explore'})
		})
	}

	// A result that lands after the tab was left is dropped: the hint must not come back.
	async function submitAddress(text: string): Promise<boolean> {
		const outcome = await submitExploreAddress(text)
		if (!mountedRef.current) return false
		if (outcome.kind === 'navigated') {
			setParkedUrl(null)
			setAtLauncher(false)
		}
		if (outcome.kind !== 'failed') setAddressHint(outcome.kind === 'hint' ? outcome.hint : null)
		return outcome.kind === 'navigated'
	}

	function openBrowseUrl(url: string): void {
		setParkedUrl(null)
		setAtLauncher(false)
		void window.appApi.explore.navigate({kind: 'address', url})
	}

	function onNavigate(command: ExploreNavigateCommand): void {
		if (command.kind === 'home' || (command.kind === 'back' && !state.canGoBack)) {
			if (!showLauncher && state.url) setParkedUrl(state.url)
			setAtLauncher(true)
			return
		}
		if (command.kind === 'forward' && showLauncher && parkedUrl) {
			setParkedUrl(null)
			setAtLauncher(false)
			return
		}
		if (command.kind === 'reload' && showLauncher) return
		if (command.kind === 'back' || command.kind === 'forward' || command.kind === 'reload') setAtLauncher(false)
		navigate(command)
	}

	// The off-site link a hint offers: the background quick download, with the active profile.
	function downloadLink(url: string): void {
		setAddressHint(null)
		void useAppStore.getState().quickDownload({url, entry: 'explore'})
	}

	// Interactive works off `wizardUrl`, set just before; the run starts in
	// Explore, so the wizard lands back here.
	function openInteractive(): void {
		const start = (url: string): void => {
			const {setWizardUrl, submitUrl} = useAppStore.getState()
			setWizardUrl(url)
			void submitUrl('explore')
		}
		if (!isTikTokFeedUrl(visibleUrl)) {
			start(visibleUrl)
			return
		}
		void downloadUrl().then(url => {
			if (url) start(url)
		})
	}

	return (
		<Card variant="glass" size="sm" className="min-h-0 flex-1 px-3" data-testid="explore-tab">
			{nudgeMode ? <ExploreModeNudge mode={nudgeMode} onUseExplore={() => void setCookiesMode('explore')} onDismiss={() => void dismissExploreModeNudge(nudgeMode)} /> : null}
			<ExploreToolbar
				state={toolbarState}
				pointerEntries={pointerEntries}
				grabbable={isExploreGrabbable(visibleUrl)}
				profiles={profiles}
				profileMenu={{onPickProfile: ref => void setActiveDownloadProfile(ref), onEditProfile, onNewProfile, onManageProfiles}}
				onNavigate={onNavigate}
				onSubmitAddress={submitAddress}
				onAddressEdit={() => setAddressHint(null)}
				onDownload={grab}
				onInteractive={openInteractive}
				onToggleAdBlock={enabled => void setExploreAdBlock(enabled)}
			/>
			{addressHint ? <ExploreAddressHint hint={addressHint} onDownload={downloadLink} onDismiss={() => setAddressHint(null)} /> : null}
			<ExploreAddressHintLive hint={addressHint} />
			<ExploreViewport error={state.error} launcher={showLauncher ? <BrowseHome onOpen={openBrowseUrl} /> : null} onRetry={() => navigate({kind: 'reload'})} onOpenSettings={() => replaceHash('settings')} />
		</Card>
	)
}

// The page plays sound only while the Explore tab is the active tab (P2-R32).
// This component is mounted exactly then: leaving the tab, or the wizard
// replacing the home, unmounts it. A dialog over the page only hides the view.
// Leaving also drops the address bar's off-site hint (P2-R45); an edit in
// progress lives in the bar itself and goes with it.
// Answers whether the tab is still mounted, for results that land late.
function useExploreTabActive(): RefObject<boolean> {
	const mountedRef = useRef(false)
	useEffect(() => {
		mountedRef.current = true
		void window.appApi.explore.setActive(true)
		return () => {
			mountedRef.current = false
			void window.appApi.explore.setActive(false)
			useAppStore.getState().setExploreAddressHint(null)
		}
	}, [])
	return mountedRef
}

// D6: the first Explore open is marked once (`exploreModeAutoSwitched`), and
// only an `off` found then is switched to `explore`. `file`/`browser`, and any
// `off` chosen after that first open, get a dismissible nudge instead.
function useExploreModeNudge(): NudgeMode | null {
	const {common, markExploreFirstOpen} = useAppStore(useShallow(s => ({common: s.settings?.common, markExploreFirstOpen: s.markExploreFirstOpen})))
	const mode = common?.cookiesMode ?? 'off'
	const firstOpen = common !== undefined && common.exploreModeAutoSwitched !== true
	const pendingAutoSwitch = firstOpen && mode === 'off'
	// A failed write rolls the settings back; retrying on every render would loop.
	const attemptedRef = useRef(false)

	useEffect(() => {
		if (!firstOpen || attemptedRef.current) return
		attemptedRef.current = true
		void markExploreFirstOpen()
	}, [firstOpen, markExploreFirstOpen])

	if (!common || mode === 'explore' || pendingAutoSwitch) return null
	if (common.exploreModeNudgeDismissedFor === mode) return null
	return mode
}
