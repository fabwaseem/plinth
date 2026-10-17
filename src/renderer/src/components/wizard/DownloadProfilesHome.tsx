import {lazy, Suspense, useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore, type ClipboardEvent, type KeyboardEvent, type ReactNode} from 'react'
import type {TFunction} from 'i18next'
import {useTranslation} from 'react-i18next'
import {Check, Compass, Download, History, Link2, ListPlus, PenLine, Plus, Settings, Users, X} from 'lucide-react'
import {downloadProfileLabel, downloadProfileOrigin, downloadProfileRefFor} from '@shared/downloadProfiles.js'
import {cleanUrl} from '@shared/cleanUrl.js'
import type {DownloadProfile, DownloadProfileRef, DownloadProfilesPrefs} from '@shared/types.js'
import {bulkLogger} from '@renderer/lib/bulkLogger.js'
import {notify} from '@renderer/lib/notify.js'
import {cn} from '@renderer/lib/utils.js'
import {useAppStore} from '../../store/useAppStore.js'
import {useDownloadHomeView, type DownloadInputType} from '../../store/downloadHomeView.js'
import {Alert, AlertDescription} from '../ui/alert.js'
import {Badge} from '../ui/badge.js'
import {Button} from '../ui/button.js'
import {Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle} from '../ui/card.js'
import {InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput} from '../ui/input-group.js'
import {Switch} from '../ui/switch.js'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '../ui/tabs.js'
import {Tooltip, TooltipContent, TooltipTrigger} from '../ui/tooltip.js'
import {Spinner} from '../ui/spinner.js'
import {BulkUrlDialog} from './BulkUrlDialog.js'
import {DownloadProfilesSettingsTab} from './DownloadProfilesSettingsTab.js'
import {IncompleteCookiesConfigDialog} from './IncompleteCookiesConfigDialog.js'
import {QuickProfileControl} from './QuickProfileControl.js'
import {QueueManagerTab} from '../queue/QueueManagerTab.js'
import {needsAttention} from '../queue/queueAttention.js'
import {ExploreTab} from '../explore/ExploreTab.js'
import {buildClipboardCandidate, resolveClipboardIntake, type ClipboardCandidate} from './clipboardIntake.js'
import {PROFILE_ICONS} from './downloadProfileVisuals.js'
import {QuickDownloadErrorAlert} from './QuickDownloadErrorAlert.js'
import {IconTile} from '../shared/IconTile.js'
import {SpeechBubble} from '../shared/SpeechBubble.js'

type ProfilesTab = 'download' | 'bulk' | 'explore' | 'queue' | 'profiles' | 'settings'
const PROFILE_TABS = ['download', 'bulk', 'explore', 'queue', 'profiles', 'settings'] as const satisfies readonly ProfilesTab[]
const DownloadProfileEditor = lazy(() => import('./DownloadProfileEditor.js').then(module => ({default: module.DownloadProfileEditor})))
const QUEUE_TAB_TIP_STORAGE_KEY = 'plinth_seen_queue_tab_tip'
const SMART_MODE_STORAGE_KEY = 'plinth_smart_mode'
const QUEUE_TAB_TIP_VISIBLE_MS = 5_000

function tabFromHash(hash = window.location.hash): ProfilesTab {
	const value = hash.replace(/^#/, '').toLowerCase()
	if (value === 'profile' || value === 'profiles') return 'profiles'
	if (value === 'bulk') return 'bulk'
	if (value === 'explore') return 'explore'
	if (value === 'queue' || value === 'history') return 'queue'
	if (value === 'setting' || value === 'settings') return 'settings'
	return 'download'
}

function browserMockScenarioId(): string | null {
	try {
		return new URLSearchParams(window.location.search).get('scenario')
	} catch {
		return null
	}
}

function isBrowserMockBulkDialogScenario(scenario: string | null): boolean {
	return scenario === 'profiles-bulk' || scenario === 'profiles-bulk-huge-input'
}

function browserMockBulkInitialRaw(scenario: string | null): string {
	if (scenario !== 'profiles-bulk-huge-input') return ''
	return [
		'vite v8.0.16 building ssr environment for development...',
		'4 modules transformed.',
		'out/preload/index.cjs  9.02 kB',
		'',
		'built in 14ms',
		'',
		'electron preload scripts built successfully',
		'',
		'-----',
		'',
		'dev server running for the electron renderer process at:',
		'',
		'  -> Local:   http://localhost:5173/',
		'  -> Network: use --host to expose',
		'',
		'starting electron app...',
		'',
		...Array.from({length: 180}, (_, index) => {
			const seconds = String(index % 60).padStart(2, '0')
			return `17:20:${seconds}.${String(index).padStart(3, '0')}          > gpu features { 2d_canvas: 'disabled_software', direct_rendering_display_compositor: 'disabled_off_ok', gpu_compositing: 'disabled_software', multiple_raster_threads: 'enabled_on', opengl: 'disabled_off', rasterization: 'disabled_software', video_decode: 'disabled_software', vulkan: 'disabled_off' }`
		})
	].join('\n')
}

function subscribeProfileTabHash(onStoreChange: () => void): () => void {
	window.addEventListener('hashchange', onStoreChange)
	return () => window.removeEventListener('hashchange', onStoreChange)
}

function profileTabSnapshot(): ProfilesTab {
	return tabFromHash()
}

function isProfilesTab(value: unknown): value is ProfilesTab {
	return typeof value === 'string' && PROFILE_TABS.includes(value as ProfilesTab)
}

function tabHash(tab: ProfilesTab): string {
	if (tab === 'profiles') return '#profiles'
	if (tab === 'bulk') return '#bulk'
	if (tab === 'explore') return '#explore'
	if (tab === 'queue') return '#queue'
	if (tab === 'settings') return '#settings'
	return '#download'
}

function selectProfilesTab(tab: ProfilesTab): void {
	window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}${tabHash(tab)}`)
	window.dispatchEvent(new Event('hashchange'))
}

function hasSeenQueueTabTip(): boolean {
	try {
		return localStorage.getItem(QUEUE_TAB_TIP_STORAGE_KEY) === '1'
	} catch {
		return true
	}
}

function markQueueTabTipSeen(): void {
	try {
		localStorage.setItem(QUEUE_TAB_TIP_STORAGE_KEY, '1')
	} catch {
		// Storage may be unavailable in hardened browser contexts; the cue is non-critical.
	}
}

function profileDetail(profile: DownloadProfile, t: TFunction): string {
	const subs = profile.subtitles.enabled || profile.media.kind === 'subtitles-only' ? `${profile.subtitles.languages.join(', ') || 'selected'} ${t('wizard.confirm.labelSubtitles').toLowerCase()}` : t('wizard.subtitles.noSelected')
	const output = profile.output.kind === 'fixed' ? profile.output.dir : t('wizard.folder.downloads')
	const artifacts = [
		profile.embed.metadata ? t('wizard.output.embedMetadata.label') : null,
		profile.embed.thumbnail ? t('wizard.output.embedThumbnail.label') : null,
		profile.embed.thumbnailSidecar ? t('wizard.output.writeThumbnail.label') : null,
		profile.embed.description ? t('wizard.output.writeDescription.label') : null
	]
		.filter(Boolean)
		.join(' · ')
	return `${subs} · ${output}${artifacts ? ` · ${artifacts}` : ''}`
}

function downloadMascotHelp({activeProfileName, hasActiveDownloads, hasInput, inputType, quickDownloadStatus, t}: {activeProfileName: string; hasActiveDownloads: boolean; hasInput: boolean; inputType: DownloadInputType | null; quickDownloadStatus: string; t: TFunction}): {
	key: string
	title: string
	body: string
	points: string[]
} {
	if (quickDownloadStatus === 'preparing') {
		return {key: 'preparing', title: t('wizard.url.quickPreparing'), body: `${t('wizard.url.quickDownload')} is reading this link and applying ${activeProfileName}.`, points: ['No wizard steps', 'Queued when ready']}
	}

	if (quickDownloadStatus === 'queued') {
		return {key: 'queued', title: t('wizard.url.quickQueued'), body: 'The queue is handling this download. You can paste another link while it works.', points: ['Queue keeps order', 'Profile applied']}
	}

	if (!hasInput) {
		return {key: hasActiveDownloads ? 'idle-running' : 'idle', title: hasActiveDownloads ? 'Downloads are running' : 'Tip', body: hasActiveDownloads ? t('wizard.url.mascotBusy') : t('wizard.url.mascotIdle'), points: ['Quick uses the active profile', 'Interactive reviews first', 'Bulk handles lists']}
	}

	if (inputType === 'Playlist URL' || inputType === 'Channel URL' || inputType === 'Search URL') {
		return {key: `collection-${inputType}`, title: inputType, body: `Quick queues loaded items with ${activeProfileName}. Interactive lets you inspect or select items first.`, points: ['Quick queues loaded items', 'Interactive supports selection', 'Profile rules apply']}
	}

	if (inputType === 'Mixed URL') {
		return {key: 'mixed', title: 'Mixed URL', body: 'This link points at one video inside a collection. Plinth will ask which one you want before probing.', points: ['Choose video or collection', 'No silent playlist choice']}
	}

	if (inputType === 'Single URL') {
		return {key: 'single', title: 'Single URL', body: `Quick starts one download with ${activeProfileName}. Use Interactive for one-off changes.`, points: ['Quick is fastest', 'Interactive can override options']}
	}

	return {key: 'generic-url', title: 'URL detected', body: t('wizard.url.quickSingleOnly'), points: ['Quick uses the active profile', 'Interactive reviews first']}
}

function QueueTabFirstRunCue({onDismiss, persistent = false, placement = 'side'}: {onDismiss: () => void; persistent?: boolean; placement?: 'side' | 'below'}): ReactNode {
	const {t} = useTranslation()

	useEffect(() => {
		if (persistent) return undefined
		const timeout = window.setTimeout(onDismiss, QUEUE_TAB_TIP_VISIBLE_MS)
		return () => window.clearTimeout(timeout)
	}, [onDismiss, persistent])

	return (
		<div className={cn('pointer-events-none absolute z-20 flex', placement === 'below' ? 'top-full left-1/2 mt-2 -translate-x-1/2 justify-center' : 'start-full top-0 ms-3 justify-start')} data-testid="queue-tab-first-run-cue">
			<div className="nudge-in pointer-events-auto flex max-w-[min(20rem,calc(100vw-2rem))] items-center">
				<SpeechBubble tail="start">{t('queue.tabTip')}</SpeechBubble>
			</div>
		</div>
	)
}

// react-doctor-disable-next-line react-doctor/prefer-useReducer -- these local UI controls update independently and do not share reducer-style transitions
export function DownloadProfilesHome(): ReactNode {
	const {t} = useTranslation()
	const {
		activeProfileDestination,
		activeProfileDestinationDetail,
		activeProfile,
		chooseWizardFolder,
		commonPaths,
		cookiesConfigDialogIssue,
		dismissCookiesConfigDialog,
		globalDestinationRoot,
		hasActiveDownloads,
		hasInput,
		inputType,
		openCookiesSettings,
		openExploreSignIn,
		signInWithExploreThenRetry,
		retryWithExploreSignIn,
		profiles,
		profilesPrefs,
		quickDownload,
		quickDownloadFailureMessage,
		quickDownloadProbeExperience,
		quickDownloadProgressFailed,
		quickDownloadStatus,
		removeDownloadProfile,
		retryQuickDownloadFailure,
		retryQuickDownloadWithCookies,
		saveDownloadProfile,
		setActiveDownloadProfile,
		setDownloadProfileEnabled,
		setWizardUrl,
		submitUrl,
		urlReady,
		wizardUrl
	} = useDownloadHomeView()
	const inputRef = useRef<HTMLInputElement>(null)
	const bulkOpenRef = useRef(false)
	const initialBrowserMockScenario = browserMockScenarioId()
	const hashTab = useSyncExternalStore(subscribeProfileTabHash, profileTabSnapshot, profileTabSnapshot)
	const exploreEnabled = useAppStore(state => state.settings?.common?.exploreEnabled !== false)
	const navLayout = useAppStore(state => (state.settings?.common?.navLayout === 'pill' ? 'pill' : 'sidebar'))
	const pill = navLayout === 'pill'
	const tabTriggerClass = pill ? 'h-10 rounded-full border-0 text-sm data-active:border-transparent' : 'h-auto flex-none justify-start rounded-lg border-0 text-sm data-active:border-transparent'
	const countBadgeClass = pill ? 'download-count-badge ms-0.5 min-w-4 px-1 font-mono' : 'download-count-badge ms-auto min-w-4 px-1 font-mono'
	const exploreNoticeSeen = useAppStore(state => state.settings?.common?.exploreNoticeSeen === true)
	// With the kill switch on, a stale #explore lands on the URL tab.
	const activeTab: ProfilesTab = hashTab === 'explore' && !exploreEnabled ? 'download' : hashTab
	const bulkScreen = activeTab === 'bulk'
	const [bulkInitialRaw] = useState(() => browserMockBulkInitialRaw(initialBrowserMockScenario))
	const [pendingClipboard, setPendingClipboard] = useState<ClipboardCandidate | null>(null)
	const [editorOpen, setEditorOpen] = useState(() => initialBrowserMockScenario === 'profiles-editor')
	const [editorSessionId, setEditorSessionId] = useState(0)
	const [editingProfile, setEditingProfile] = useState<DownloadProfile | null>(null)
	const queueCount = useAppStore(state => state.queue.length)
	const attentionCount = useAppStore(state => state.queue.filter(needsAttention).length)
	const queueIsActive = useAppStore(state => state.queue.some(item => item.status === 'running' || item.lastStatus?.key === 'movingFiles'))
	const previousQueueCountRef = useRef(queueCount)
	const [showQueueTabTip, setShowQueueTabTip] = useState(() => initialBrowserMockScenario === 'queue-tab-tip' || (queueCount > 0 && !hasSeenQueueTabTip()))
	const showQuickPartialWarning = quickDownloadStatus === 'queued' && quickDownloadProgressFailed > 0
	const mascotHelp = downloadMascotHelp({activeProfileName: activeProfile.name, hasActiveDownloads, hasInput, inputType, quickDownloadStatus, t})
	const showMascotHelp = inputType !== 'Unknown URL' && inputType !== 'Unsupported URL'
	const mascotHeaderBody = showMascotHelp ? mascotHelp.body : t('wizard.url.quickSingleOnly')
	const activateProfile = (profile: DownloadProfile): void => {
		void setActiveDownloadProfile(downloadProfileRefFor(profile, profilesPrefs))
	}
	const pickProfileRef = (ref: DownloadProfileRef): void => {
		void setActiveDownloadProfile(ref)
	}

	useEffect(() => {
		bulkOpenRef.current = bulkScreen
	}, [bulkScreen])

	useEffect(() => {
		if (isBrowserMockBulkDialogScenario(initialBrowserMockScenario)) selectProfilesTab('bulk')
	}, [initialBrowserMockScenario])

	// The cue floats below the tab bar, where Explore's native view would paint
	// over it: hold it (unseen) until another tab is active.
	const queueTabTipVisible = showQueueTabTip && activeTab !== 'explore'

	useEffect(() => {
		if (!queueTabTipVisible || initialBrowserMockScenario === 'queue-tab-tip') return
		markQueueTabTipSeen()
	}, [initialBrowserMockScenario, queueTabTipVisible])

	useEffect(() => {
		const previousQueueCount = previousQueueCountRef.current
		previousQueueCountRef.current = queueCount
		if (previousQueueCount !== 0 || queueCount === 0 || hasSeenQueueTabTip()) return
		setShowQueueTabTip(true)
	}, [queueCount])

	const consumeClipboardCandidate = useCallback(
		(candidate: ClipboardCandidate): void => {
			setPendingClipboard(null)

			const url = candidate.acceptedUrls[0]
			if (!url) return
			setWizardUrl(url)
			notify.clipboard(t('wizard.url.clipboard.autofilledLink'))
		},
		[setWizardUrl, t]
	)

	useEffect(() => {
		return window.appApi.events.onClipboardUrl(payload => {
			const state = useAppStore.getState()
			const action = resolveClipboardIntake({candidate: buildClipboardCandidate(payload), hasInput: state.wizardUrl.trim().length > 0, formatsLoading: state.formatsLoading, quickPreparing: state.quickDownloadStatus === 'preparing', bulkOpen: bulkOpenRef.current})

			if (action.kind === 'ignore') return
			if (action.kind === 'store-pending') {
				setPendingClipboard(action.candidate)
				if (bulkOpenRef.current) bulkLogger.info('Clipboard URL held while bulk dialog is open', {accepted: action.candidate.count})
				return
			}
			if (action.kind === 'hint-bulk') {
				notify.clipboard(t('wizard.url.clipboard.bulkHint'))
				return
			}
			consumeClipboardCandidate(action.candidate)
		})
	}, [consumeClipboardCandidate, t])

	function openEditor(profile: DownloadProfile | null): void {
		setEditingProfile(profile)
		setEditorSessionId(value => value + 1)
		setEditorOpen(true)
	}

	const editingProfileOrigin = editingProfile ? downloadProfileOrigin(editingProfile, profilesPrefs) : null
	const editorResetProfile = useMemo(
		() =>
			editingProfile && editingProfileOrigin?.kind === 'builtin'
				? {
						enabled: editingProfileOrigin.overridden,
						onReset: async () => {
							await removeDownloadProfile(editingProfile.id)
						}
					}
				: undefined,
		[editingProfile, editingProfileOrigin, removeDownloadProfile]
	)

	function handleClearUrl(): void {
		setWizardUrl('')
		if (pendingClipboard) {
			consumeClipboardCandidate(pendingClipboard)
			return
		}
		inputRef.current?.focus()
	}

	const [smartMode, setSmartMode] = useState(() => sessionStorage.getItem(SMART_MODE_STORAGE_KEY) !== '0')
	function changeSmartMode(enabled: boolean): void {
		sessionStorage.setItem(SMART_MODE_STORAGE_KEY, enabled ? '1' : '0')
		setSmartMode(enabled)
	}

	function handleKeyDown(event: KeyboardEvent<HTMLInputElement>): void {
		if (event.key !== 'Enter' || !urlReady) return
		if (smartMode) void quickDownload({url: wizardUrl, entry: 'url-tab'})
		else void submitUrl()
	}

	function handlePaste(event: ClipboardEvent<HTMLInputElement>): void {
		const pasted = event.clipboardData.getData('text')
		const cleaned = cleanUrl(pasted)
		if (cleaned === pasted) return
		event.preventDefault()
		const input = event.currentTarget
		const start = input.selectionStart ?? wizardUrl.length
		const end = input.selectionEnd ?? wizardUrl.length
		setWizardUrl(wizardUrl.slice(0, start) + cleaned + wizardUrl.slice(end))
	}

	return (
		<div className="wizard-step mx-auto flex h-full min-h-0 w-full max-w-[92rem] flex-col" data-testid="download-profiles-home">
			<Tabs
				orientation={pill ? 'horizontal' : 'vertical'}
				value={activeTab}
				onValueChange={value => {
					if (!isProfilesTab(value)) return
					if (value !== 'download') setPendingClipboard(null)
					selectProfilesTab(value)
				}}
				className={cn('h-full min-h-0 flex-1 items-stretch gap-4 overflow-hidden', pill ? 'flex-col' : 'flex-row')}
			>
				<div className={cn('download-home-tabs-frame relative z-30', pill && 'flex w-full justify-center')} data-layout={navLayout}>
					<TabsList variant="line" className={cn('download-home-tabs', pill && 'flex justify-center')} aria-label={t('wizard.tabsNavAria')} data-layout={navLayout} data-testid="profiles-tabs">
						<TabsTrigger value="download" className={tabTriggerClass}>
							<Download data-icon="inline-start" aria-hidden />
							{t('wizard.url.tabs.download')}
						</TabsTrigger>
						<TabsTrigger value="bulk" className={tabTriggerClass} data-testid="profiles-bulk-urls">
							<ListPlus data-icon="inline-start" aria-hidden />
							{t('wizard.url.tabs.bulk')}
						</TabsTrigger>
						{exploreEnabled ? (
							<TabsTrigger value="explore" className={cn('explore-tab-trigger', tabTriggerClass)}>
								<Compass data-icon="inline-start" aria-hidden />
								{t('explore.tabLabel')}
								{exploreNoticeSeen ? null : (
									<Badge variant="info" size="sm">
										{t('explore.newBadge')}
									</Badge>
								)}
							</TabsTrigger>
						) : null}
						<div className="relative">
							<TabsTrigger value="queue" data-queue-active={queueIsActive ? 'true' : undefined} className={cn('downloads-tab-trigger', pill ? 'w-auto' : 'w-full', tabTriggerClass, queueIsActive && 'queue-tab-working')}>
								<History data-icon="inline-start" aria-hidden />
								{t('queue.tabLabel')}
								{attentionCount > 0 ? (
									<Badge variant="warning" size="sm" className={countBadgeClass} title={t('queue.attentionBadge', {count: attentionCount})} aria-label={t('queue.attentionBadge', {count: attentionCount})} data-testid="downloads-attention-badge">
										{attentionCount}
									</Badge>
								) : queueCount > 0 ? (
									<Badge variant="secondary" size="sm" className={countBadgeClass}>
										{queueCount}
									</Badge>
								) : null}
							</TabsTrigger>
							{queueTabTipVisible ? <QueueTabFirstRunCue placement={pill ? 'below' : 'side'} persistent={initialBrowserMockScenario === 'queue-tab-tip'} onDismiss={() => setShowQueueTabTip(false)} /> : null}
						</div>
						<TabsTrigger value="profiles" className={tabTriggerClass}>
							<Users data-icon="inline-start" aria-hidden />
							{t('wizard.url.tabs.profiles')}
						</TabsTrigger>
						<TabsTrigger value="settings" className={tabTriggerClass}>
							<Settings data-icon="inline-start" aria-hidden />
							{t('wizard.url.tabs.settings')}
						</TabsTrigger>
					</TabsList>
				</div>

				<TabsContent value="download" className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto overscroll-contain pb-5">
					<Card variant="glass" data-testid="profiles-download-panel">
						<CardHeader className="px-5 pt-5 md:px-6 md:pt-5">
							<div className="min-w-0">
								<div className="min-w-0" data-testid="profiles-mascot-header">
									<CardTitle className="text-display">{t('wizard.url.heading')}</CardTitle>
									<CardDescription className="mt-1.5 text-body text-subtle-foreground" data-testid="profiles-mascot-copy">
										{mascotHeaderBody}
									</CardDescription>
								</div>
								<InputGroup className="glow-tile mt-4 h-11 rounded-xl border-transparent px-1">
									<InputGroupAddon align="inline-start">
										<Link2 aria-hidden />
									</InputGroupAddon>
									<InputGroupInput ref={inputRef} type="url" value={wizardUrl} onChange={event => setWizardUrl(event.target.value)} onKeyDown={handleKeyDown} onPaste={handlePaste} placeholder={t('wizard.url.placeholder')} spellCheck={false} data-testid="profiles-main-input" className="text-title" />
									{hasInput ? (
										<InputGroupAddon align="inline-end">
											<InputGroupButton type="button" size="icon-sm" aria-label={t('wizard.url.clearAria')} onClick={handleClearUrl} data-testid="url-clear">
												<X aria-hidden />
											</InputGroupButton>
										</InputGroupAddon>
									) : null}
								</InputGroup>
								{pendingClipboard ? <ClipboardPendingAction onApply={() => consumeClipboardCandidate(pendingClipboard)} onDismiss={() => setPendingClipboard(null)} /> : null}
							</div>
						</CardHeader>
						<CardContent className="px-5 pb-4 md:px-6">
							<QuickProfileControl
								defaultProfileMenuOpen={initialBrowserMockScenario === 'profiles-split-menu'}
								destination={activeProfileDestination}
								destinationDetail={activeProfileDestinationDetail}
								disabled={!urlReady}
								onChangeGlobalDestination={() => void chooseWizardFolder()}
								onDownload={() => void quickDownload({url: wizardUrl, entry: 'url-tab'})}
								onInteractiveDownload={() => void submitUrl()}
								onSmartModeChange={changeSmartMode}
								smartMode={smartMode}
								onEditProfile={openEditor}
								onManageProfiles={() => selectProfilesTab('profiles')}
								onNewProfile={() => openEditor(null)}
								onPickProfile={pickProfileRef}
								profilesPrefs={profilesPrefs}
							/>

							{quickDownloadStatus === 'error' ? (
								<QuickDownloadErrorAlert
									className="mt-2"
									experience={quickDownloadProbeExperience}
									message={quickDownloadFailureMessage}
									onEnableCookiesAndRetry={() => void retryQuickDownloadWithCookies()}
									onOpenCookiesSettings={openCookiesSettings}
									onSignInWithExplore={openExploreSignIn}
									onSignInWithExploreThenRetry={() => void signInWithExploreThenRetry({kind: 'home'})}
									onRetryWithExploreSignIn={() => void retryWithExploreSignIn({kind: 'home'})}
									onRetry={() => void retryQuickDownloadFailure()}
								/>
							) : null}
							{showQuickPartialWarning ? (
								<Alert variant="warning" size="sm" className="mt-2" data-testid="quick-download-feedback">
									<AlertDescription>{t('wizard.url.quickPartialFailed', {count: quickDownloadProgressFailed})}</AlertDescription>
								</Alert>
							) : null}
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="bulk" className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain pb-5">
					<BulkUrlDialog embedded initialRaw={bulkInitialRaw} onEditProfile={() => openEditor(activeProfile)} onManageProfiles={() => selectProfilesTab('profiles')} onNewProfile={() => openEditor(null)} />
				</TabsContent>

				{exploreEnabled ? (
					<TabsContent value="explore" className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain pb-5">
						<ExploreTab onEditProfile={openEditor} onNewProfile={() => openEditor(null)} onManageProfiles={() => selectProfilesTab('profiles')} />
					</TabsContent>
				) : null}

				<TabsContent value="queue" className="min-h-0 flex-1 overflow-y-auto overscroll-contain pb-5">
					<QueueManagerTab />
				</TabsContent>

				<TabsContent value="profiles" className="min-h-0 flex-1 overflow-y-auto overscroll-contain pb-5">
					<ProfilesTab activeProfile={activeProfile} onEdit={openEditor} onPick={activateProfile} onRemove={profile => void removeDownloadProfile(profile.id)} onToggleEnabled={(id, enabled) => void setDownloadProfileEnabled(id, enabled)} profiles={profiles} profilesPrefs={profilesPrefs} />
				</TabsContent>
				<TabsContent value="settings" className="min-h-0 flex-1 overflow-y-auto overscroll-contain pb-5">
					<DownloadProfilesSettingsTab />
				</TabsContent>
			</Tabs>

			{editorOpen ? (
				<Suspense
					fallback={
						<output className="fixed inset-0 z-50 grid place-items-center bg-background/35" aria-label={t('wizard.formats.loadingAria')}>
							<Spinner className="size-5 text-primary" aria-hidden />
						</output>
					}
				>
					<DownloadProfileEditor
						key={editorSessionId}
						commonPaths={commonPaths}
						globalDestination={globalDestinationRoot}
						initialProfile={editingProfile}
						onChangeGlobalDestination={() => chooseWizardFolder()}
						open={editorOpen}
						onOpenChange={setEditorOpen}
						onSave={profile => saveDownloadProfile(profile)}
						resetProfile={editorResetProfile}
					/>
				</Suspense>
			) : null}
			<IncompleteCookiesConfigDialog issue={cookiesConfigDialogIssue} onDismiss={dismissCookiesConfigDialog} onOpenSettings={openCookiesSettings} />
		</div>
	)
}

function ClipboardPendingAction({onApply, onDismiss}: {onApply: () => void; onDismiss: () => void}): ReactNode {
	const {t} = useTranslation()
	const Icon = Link2
	const statusLabel = t('wizard.url.clipboard.pendingLinkReady')
	const actionLabel = t('wizard.url.clipboard.useCopiedLink')
	return (
		<output className="mt-2 flex max-w-full flex-wrap items-center gap-2 rounded-2xl border border-[var(--glow-border)] bg-primary/12 px-3 py-2 text-xs text-foreground" data-testid="clipboard-pending">
			<span className="flex min-w-0 flex-1 items-center gap-2">
				<Icon className="size-3.5 shrink-0 text-primary" aria-hidden />
				<span className="min-w-0 truncate">{statusLabel}</span>
			</span>
			<Button type="button" variant="outline" size="xs" onClick={onApply} data-testid="clipboard-pending-action" className="bg-background/50">
				{actionLabel}
			</Button>
			<Button type="button" variant="ghost" size="icon-xs" onClick={onDismiss} aria-label={t('wizard.url.clipboard.dismissCopiedLink')} data-testid="clipboard-pending-dismiss" className="-me-1">
				<X aria-hidden />
			</Button>
		</output>
	)
}

function ProfilesTab({
	activeProfile,
	onEdit,
	onPick,
	onRemove,
	onToggleEnabled,
	profiles,
	profilesPrefs
}: {
	activeProfile: DownloadProfile
	onEdit: (profile: DownloadProfile | null) => void
	onPick: (profile: DownloadProfile) => void
	onRemove: (profile: DownloadProfile) => void
	onToggleEnabled: (id: string, enabled: boolean) => void
	profiles: DownloadProfile[]
	profilesPrefs: DownloadProfilesPrefs | undefined
}): ReactNode {
	const {t} = useTranslation()
	const enabledCount = profiles.filter(profile => profile.enabled).length
	return (
		<Card variant="glass" data-testid="profiles-manage-tab">
			<CardHeader>
				<div className="min-w-0">
					<CardTitle className="text-xl font-semibold leading-tight">{t('wizard.url.profile.panelTitle')}</CardTitle>
					<CardDescription className="mt-1 text-xs text-subtle-foreground">{t('wizard.url.profile.panelDescription')}</CardDescription>
					<p className="mt-1 text-caption text-subtle-foreground">{t('wizard.url.profile.enableHint')}</p>
				</div>
				<CardAction className="self-center">
					<Button variant="glow" type="button" onClick={() => onEdit(null)}>
						<Plus data-icon="inline-start" />
						{t('wizard.url.profile.newProfile')}
					</Button>
				</CardAction>
			</CardHeader>
			<CardContent className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
				{profiles.map(profile => {
					const Icon = PROFILE_ICONS[profile.icon]
					const active = activeProfile.id === profile.id
					const origin = downloadProfileOrigin(profile, profilesPrefs)
					const isCustom = origin.kind === 'custom'
					const canRemove = isCustom || origin.overridden
					const canToggleOff = profile.enabled ? enabledCount > 1 : true
					return (
						<article
							key={profile.id}
							data-active={active ? 'true' : undefined}
							data-selected={active || undefined}
							data-disabled-profile={!profile.enabled ? 'true' : undefined}
							className={cn('choice-surface rounded-lg p-3', !profile.enabled && 'opacity-60 saturate-[0.7]')}
							data-testid={`profiles-manage-card-${profile.id}`}
						>
							<button
								type="button"
								className="flex w-full items-start gap-3 text-left"
								aria-pressed={active}
								aria-disabled={!profile.enabled}
								onClick={() => {
									if (!profile.enabled) return
									onPick(profile)
								}}
								data-testid={`profiles-manage-card-${profile.id}-picker`}
							>
								<IconTile>
									<Icon />
								</IconTile>
								<span className="min-w-0 flex-1" data-testid={`profiles-manage-card-${profile.id}-summary`}>
									<span className="flex items-center gap-2" data-testid={`profiles-manage-card-${profile.id}-title-row`}>
										<span className="truncate text-sm font-semibold" data-testid={`profiles-manage-card-${profile.id}-title`}>
											{profile.name}
										</span>
										<Badge variant={isCustom || origin.overridden ? 'outline' : 'secondary'}>{isCustom ? t('wizard.url.profile.badgeCustom') : origin.overridden ? t('wizard.url.profile.badgeModified') : t('wizard.url.profile.badgeBuiltIn')}</Badge>
										{!profile.enabled ? <Badge variant="outline">{t('wizard.url.profile.badgeDisabled')}</Badge> : null}
										<Check className={cn('ms-auto size-4 shrink-0 text-primary transition-opacity duration-150', active ? 'opacity-100' : 'opacity-0')} aria-hidden data-testid={`profiles-manage-card-${profile.id}-check`} />
									</span>
									<span className="mt-1 block text-xs text-subtle-foreground" data-testid={`profiles-manage-card-${profile.id}-description`}>
										{downloadProfileLabel(profile)}
									</span>
									<span className="block text-xs text-subtle-foreground" data-testid={`profiles-manage-card-${profile.id}-detail`}>
										{profileDetail(profile, t)}
									</span>
								</span>
							</button>
							<div className="mt-3 flex items-center gap-2" data-testid={`profiles-manage-card-${profile.id}-actions`}>
								<div className="grid flex-1 grid-cols-2 gap-2">
									<Button type="button" variant="outline" size="sm" onClick={() => onEdit(profile)}>
										<PenLine data-icon="inline-start" />
										{t('wizard.url.profile.edit')}
									</Button>
									<Button type="button" variant="outline" size="sm" disabled={!canRemove} onClick={() => onRemove(profile)}>
										<X data-icon="inline-start" />
										{isCustom ? t('wizard.url.profile.remove') : t('wizard.url.profile.reset')}
									</Button>
								</div>
								<Tooltip>
									<TooltipTrigger
										render={props => (
											<span {...props} className="inline-flex">
												<Switch
													checked={profile.enabled}
													disabled={!canToggleOff}
													onCheckedChange={next => {
														if (!canToggleOff && profile.enabled) return
														onToggleEnabled(profile.id, next)
													}}
													aria-label={t('wizard.url.profile.enableToggleAria', {profileName: profile.name})}
													data-testid={`profiles-manage-card-${profile.id}-enabled-toggle`}
												/>
											</span>
										)}
									/>
									{!canToggleOff ? <TooltipContent>{t('wizard.url.profile.lastEnabledHint')}</TooltipContent> : null}
								</Tooltip>
							</div>
						</article>
					)
				})}
			</CardContent>
		</Card>
	)
}
