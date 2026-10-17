import {lazy, Suspense, useEffect, useState, type ReactNode} from 'react'
import {Cpu, Paintbrush} from 'lucide-react'
import {useShallow} from 'zustand/react/shallow'
import {type UiTheme} from '@shared/schemas.js'
import {useAppStore} from './store/useAppStore.js'
import {AppBackdrop} from './components/layout/background/AppBackdrop.js'
import type {BackdropColorScheme} from './components/layout/background/types.js'
import {TitleBar} from './components/layout/TitleBar.js'
import {WizardPanel} from './components/layout/WizardPanel.js'
import {WarmupSplash} from './components/system/WarmupSplash.js'
import {UpdateBanner} from './components/system/UpdateBanner.js'
import {Toaster} from './components/ui/sonner.js'
import {useToastSink} from './lib/toastSink.js'
import {ThemeToggle} from './components/system/ThemeToggle.js'
import {AboutDialog} from './components/system/AboutDialog.js'
import {FeedbackDialog} from './components/system/FeedbackDialog.js'
import {useUpdateChannel} from './components/system/useUpdateChannel.js'
import {WhatsNewDialog} from './components/system/WhatsNewDialog.js'
import {useWhatsNewDialog} from './components/system/useWhatsNewDialog.js'
import {shouldShowSplashGreeting} from './components/system/splashGreeting.js'
import {TooltipProvider} from './components/ui/tooltip.js'
import {cn} from './lib/utils.js'
import changelogText from '../../../CHANGELOG.md?raw'

const SHOW_SCENARIO_GALLERY = import.meta.env.MODE === 'browser-mock'
const ShareDialog = lazy(() => import('./components/system/ShareDialog.js').then(module => ({default: module.ShareDialog})))
// Dev-only screens: gating the dynamic import itself lets Vite drop their chunks
// from production builds instead of shipping them unreachable.
const ScenarioGallery = SHOW_SCENARIO_GALLERY ? lazy(() => import('./dev/ScenarioGallery.js').then(module => ({default: module.ScenarioGallery}))) : null
const UiKit = import.meta.env.MODE === 'browser-mock' ? lazy(() => import('./dev/UiKit.js').then(module => ({default: module.UiKit}))) : null
type BackdropPreviewMode = 'gpu' | 'css'

const BACKDROP_PREVIEW_MODES = [
	{description: 'WebGL shader preview: hardware when available, software allowed in this stage.', icon: Cpu, id: 'gpu', label: 'WebGL shader'},
	{description: 'CSS emergency: no canvas, body gradients only.', icon: Paintbrush, id: 'css', label: 'CSS emergency'}
] as const satisfies readonly {description: string; icon: typeof Cpu; id: BackdropPreviewMode; label: string}[]

// Design-system sheet (browser-mock only): every primitive in every variant. Reach it via `?kit`.
function isUiKitStage(): boolean {
	return import.meta.env.MODE === 'browser-mock' && new URLSearchParams(window.location.search).has('kit')
}

function exitUiKitStage(): void {
	const url = new URL(window.location.href)
	url.searchParams.delete('kit')
	window.location.assign(`${url.pathname}${url.search}${url.hash}`)
}

function isBackdropOnlyStage(): boolean {
	return (import.meta.env.MODE === 'browser-mock' || import.meta.env.MODE === 'test') && new URLSearchParams(window.location.search).has('backdrop')
}

function backdropPreviewModeFromUrl(): BackdropPreviewMode {
	try {
		const forcedMode = new URLSearchParams(window.location.search).get('backdropForceFallback')
		return forcedMode === 'css' ? forcedMode : 'gpu'
	} catch {
		return 'gpu'
	}
}

function resolveColorScheme(uiTheme: UiTheme, systemPrefersDark: boolean): BackdropColorScheme {
	return uiTheme === 'dark' || (uiTheme === 'system' && systemPrefersDark) ? 'dark' : 'light'
}

function previewModeToRenderMode(mode: BackdropPreviewMode): 'css-only' | 'gpu' {
	if (mode === 'css') return 'css-only'
	return 'gpu'
}

function exitBackdropStage(): void {
	const url = new URL(window.location.href)
	url.searchParams.delete('backdrop')
	window.location.assign(`${url.pathname}${url.search}${url.hash}`)
}

function shouldRenderStartupSplash(): boolean {
	if (import.meta.env.MODE !== 'browser-mock') return true
	return window.__plinthBrowserMockShowStartupSplash === true
}

export function App(): ReactNode {
	const {initialized, initialize, setSplashDismissed, splashDismissed, cancelWarmup, warmupBlocking, warmupDiagnostics, warmupProgress, settings} = useAppStore(
		useShallow(state => ({
			initialized: state.initialized,
			initialize: state.initialize,
			setSplashDismissed: state.setSplashDismissed,
			splashDismissed: state.splashDismissed,
			cancelWarmup: state.cancelWarmup,
			warmupBlocking: state.warmupBlocking,
			warmupDiagnostics: state.warmupDiagnostics,
			warmupProgress: state.warmupProgress,
			settings: state.settings
		}))
	)
	const {uiZoom, uiTheme, feedbackDialogOpen, setFeedbackDialogOpen, shareDialogOpen} = useAppStore(useShallow(state => ({uiZoom: state.uiZoom, uiTheme: state.uiTheme, feedbackDialogOpen: state.feedbackDialogOpen, setFeedbackDialogOpen: state.setFeedbackDialogOpen, shareDialogOpen: state.shareDialogOpen})))
	const update = useUpdateChannel()
	// Routes notify.ts to the toast surface for as long as the app is mounted.
	useToastSink()
	const [colorScheme, setColorScheme] = useState<BackdropColorScheme>(() => (document.documentElement.classList.contains('dark') ? 'dark' : 'light'))
	const [backdropPreviewMode, setBackdropPreviewMode] = useState<BackdropPreviewMode>(() => backdropPreviewModeFromUrl())
	const showStartupSplash = shouldRenderStartupSplash()
	const whatsNew = useWhatsNewDialog(changelogText, {startupReady: !showStartupSplash || splashDismissed})
	useEffect(() => {
		void initialize()
	}, [initialize])

	useEffect(() => {
		const html = document.documentElement
		const mq = window.matchMedia('(prefers-color-scheme: dark)')

		function apply(): void {
			const resolved = resolveColorScheme(uiTheme, mq.matches)
			html.classList.toggle('dark', resolved === 'dark')
			html.classList.toggle('light', resolved === 'light')
			setColorScheme(resolved)
		}

		apply()
		if (uiTheme === 'system') {
			mq.addEventListener('change', apply)
			return () => mq.removeEventListener('change', apply)
		}
	}, [uiTheme])

	if (UiKit && isUiKitStage()) {
		return (
			<TooltipProvider>
				<div className="relative h-screen w-screen overflow-hidden">
					<AppBackdrop key={colorScheme} colorScheme={colorScheme} renderMode="css-only" />
					<Suspense fallback={null}>
						<UiKit onExit={exitUiKitStage} />
					</Suspense>
				</div>
			</TooltipProvider>
		)
	}

	// Backdrop isolation stage (browser-mock only): strips all chrome so the animated
	// background can be tuned on its own. Reach it via `?backdrop=1` or the gallery button.
	if (isBackdropOnlyStage()) {
		const activeBackdropPreview = BACKDROP_PREVIEW_MODES.find(mode => mode.id === backdropPreviewMode) ?? BACKDROP_PREVIEW_MODES[0]
		const applyBackdropPreviewMode = (mode: BackdropPreviewMode): void => {
			const url = new URL(window.location.href)
			if (mode === 'gpu') url.searchParams.delete('backdropForceFallback')
			else url.searchParams.set('backdropForceFallback', mode)
			window.history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`)
			setBackdropPreviewMode(mode)
		}
		return (
			<div className="relative h-screen w-screen overflow-hidden" data-testid="backdrop-stage">
				<AppBackdrop key={`${colorScheme}-${backdropPreviewMode}`} colorScheme={colorScheme} renderMode={previewModeToRenderMode(backdropPreviewMode)} softwareWebglAllowed={backdropPreviewMode === 'gpu'} />
				<div className="fixed bottom-4 left-4 z-10 flex max-w-[calc(100vw-2rem)] flex-wrap items-center gap-2 rounded-md border border-border-strong bg-background/80 px-2 py-1.5 backdrop-blur">
					<ThemeToggle />
					<div className="h-5 w-px bg-border" aria-hidden />
					<div className="flex items-center gap-1 rounded-md border border-border bg-muted/30 p-0.5" data-testid="backdrop-preview-controls" aria-label="Backdrop render path">
						{BACKDROP_PREVIEW_MODES.map(mode => {
							const Icon = mode.icon
							const active = mode.id === backdropPreviewMode
							return (
								<button
									key={mode.id}
									type="button"
									onClick={() => applyBackdropPreviewMode(mode.id)}
									aria-pressed={active}
									className={cn('inline-flex h-7 items-center gap-1 rounded px-2 text-caption font-medium transition-colors', active ? 'bg-primary text-primary-foreground shadow-[0_4px_14px_var(--brand-glow)]' : 'text-muted-foreground hover:bg-accent hover:text-foreground')}
									data-testid={`backdrop-preview-${mode.id}`}
								>
									<Icon size={12} aria-hidden />
									{mode.label}
								</button>
							)
						})}
					</div>
					<p className="max-w-[min(30rem,calc(100vw-2rem))] text-caption leading-4 text-muted-foreground" data-testid="backdrop-preview-description">
						{activeBackdropPreview.description}
					</p>
					<button type="button" onClick={exitBackdropStage} className="text-xs font-medium text-muted-foreground hover:text-foreground" data-testid="backdrop-stage-exit">
						← exit
					</button>
				</div>
			</div>
		)
	}

	return (
		<TooltipProvider>
			<div className="relative flex flex-col h-screen w-screen overflow-hidden" data-testid="app-root">
				<AppBackdrop key={colorScheme} colorScheme={colorScheme} renderMode="css-only" />
				<TitleBar />

				{update.info && <UpdateBanner info={update.info} installing={update.installing} installError={update.error} onInstall={update.install} onDownload={update.download} onDismiss={update.dismiss} />}

				<div className="flex min-h-0 flex-1 flex-col overflow-hidden" data-testid="app-content">
					<div className="flex min-h-0 flex-1 flex-col overflow-hidden" style={{zoom: uiZoom}}>
						<div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden" data-testid="wizard-scrollport">
							<WizardPanel />
						</div>
					</div>
				</div>

				{showStartupSplash && <WarmupSplash initialized={initialized} warmupBlocking={warmupBlocking} warmupDiagnostics={warmupDiagnostics} warmupProgress={warmupProgress} showGreeting={shouldShowSplashGreeting(settings)} onDismissed={() => setSplashDismissed(true)} onCancel={cancelWarmup} />}
				<AboutDialog />
				{shareDialogOpen ? (
					<Suspense fallback={null}>
						<ShareDialog />
					</Suspense>
				) : null}
				<FeedbackDialog open={feedbackDialogOpen} onOpenChange={setFeedbackDialogOpen} />
				<WhatsNewDialog open={whatsNew.open} digest={whatsNew.digest} onClose={whatsNew.close} onOpenFullNotes={whatsNew.openFullNotes} />
				{ScenarioGallery ? (
					<Suspense fallback={null}>
						<ScenarioGallery />
					</Suspense>
				) : null}
				<Toaster theme={colorScheme} />
			</div>
		</TooltipProvider>
	)
}
