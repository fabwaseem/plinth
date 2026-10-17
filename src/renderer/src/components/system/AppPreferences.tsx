import {useEffect, useState, type ReactNode} from 'react'
import log from 'electron-log/renderer.js'
import {Info, MessageCircle, Share2} from 'lucide-react'
import {useTranslation} from 'react-i18next'
import {useShallow} from 'zustand/react/shallow'
import type {NavLayout} from '@shared/types.js'
import {ZOOM_MAX, ZOOM_MIN, ZOOM_STEP} from '@shared/schemas.js'
import {useAppStore} from '../../store/useAppStore.js'
import {Button} from '../ui/button.js'
import {ButtonGroup} from '../ui/button-group.js'
import {FieldGroup} from '../ui/field.js'
import {SettingRow} from '../shared/SettingRow.js'
import {FeedbackNudge} from './FeedbackNudge.js'
import {LanguagePicker} from './LanguagePicker.js'
import {ThemeToggle} from './ThemeToggle.js'
import {ToggleGroup, ToggleGroupItem} from '../ui/toggle-group.js'

const feedbackLogger = log.scope('feedback')
const DEFAULT_FEEDBACK_NUDGE_DELAY_MS = 45_000

function resolveFeedbackNudgeDelay(injectedDelay: number | undefined): number {
	return typeof injectedDelay === 'number' && Number.isFinite(injectedDelay) && injectedDelay >= 0 ? injectedDelay : DEFAULT_FEEDBACK_NUDGE_DELAY_MS
}

export function AppPreferences(): ReactNode {
	const {t} = useTranslation()
	const {uiZoom, setUiZoom, uiTheme, navLayout, setNavLayout, setAboutDialogOpen, openShareDialog, setFeedbackDialogOpen} = useAppStore(
		useShallow(state => ({
			uiZoom: state.uiZoom,
			setUiZoom: state.setUiZoom,
			uiTheme: state.uiTheme,
			navLayout: state.settings?.common?.navLayout === 'pill' ? 'pill' : 'sidebar',
			setNavLayout: state.setNavLayout,
			setAboutDialogOpen: state.setAboutDialogOpen,
			openShareDialog: state.openShareDialog,
			setFeedbackDialogOpen: state.setFeedbackDialogOpen
		}))
	)
	const themeLabel = uiTheme === 'light' ? t('theme.light') : uiTheme === 'dark' ? t('theme.dark') : t('theme.system')
	const [showNudge, setShowNudge] = useState(false)

	useEffect(() => {
		const delay = resolveFeedbackNudgeDelay(window.__NUDGE_DELAY_MS)
		const timer = setTimeout(() => setShowNudge(true), delay)
		return () => clearTimeout(timer)
	}, [])

	useEffect(() => {
		if (!showNudge) return
		const timer = setTimeout(() => setShowNudge(false), 8_000)
		return () => clearTimeout(timer)
	}, [showNudge])

	return (
		<FieldGroup className="gap-3" data-testid="app-preferences">
			<SettingRow id="app-theme" label={themeLabel}>
				<ThemeToggle />
			</SettingRow>
			<SettingRow id="app-nav-layout" label={t('app.navLayout')}>
				<ToggleGroup
					size="sm"
					variant="outline"
					shape="chip"
					spacing={1}
					value={[navLayout]}
					onValueChange={value => {
						const next = value[0]
						if (next === 'sidebar' || next === 'pill') void setNavLayout(next satisfies NavLayout)
					}}
					className="flex-wrap"
					aria-labelledby="app-nav-layout"
					data-testid="app-nav-layout"
				>
					<ToggleGroupItem value="sidebar">{t('app.navLayoutSidebar')}</ToggleGroupItem>
					<ToggleGroupItem value="pill">{t('app.navLayoutPill')}</ToggleGroupItem>
				</ToggleGroup>
			</SettingRow>
			<SettingRow id="app-language" label={t('language.label')}>
				<div data-testid="app-language-picker">
					<LanguagePicker />
				</div>
			</SettingRow>
			<SettingRow id="app-zoom" label={t('app.zoomIn')}>
				<div className="flex items-center gap-2" data-testid="app-zoom">
					<ButtonGroup>
						<Button type="button" variant="outline" size="icon-sm" onClick={() => setUiZoom(uiZoom - ZOOM_STEP)} disabled={uiZoom <= ZOOM_MIN} aria-label={t('app.zoomOut')} data-testid="app-zoom-out">
							−
						</Button>
						<Button type="button" variant="outline" size="icon-sm" onClick={() => setUiZoom(uiZoom + ZOOM_STEP)} disabled={uiZoom >= ZOOM_MAX} aria-label={t('app.zoomIn')} data-testid="app-zoom-in">
							+
						</Button>
					</ButtonGroup>
					<span className="w-10 text-end text-sm text-muted-foreground tabular-nums" data-testid="app-zoom-value">
						{Math.round(uiZoom * 100)}%
					</span>
				</div>
			</SettingRow>
			<div className="flex flex-wrap gap-2" data-testid="app-actions">
				<Button type="button" variant="outline" size="sm" onClick={() => setAboutDialogOpen(true)} title={t('about.openTitle')} data-testid="btn-about">
					<Info data-icon="inline-start" aria-hidden />
					{t('about.button')}
				</Button>
				<Button type="button" variant="outline" size="sm" onClick={() => openShareDialog('settings')} title={t('share.footerTooltip')} data-testid="btn-share">
					<Share2 data-icon="inline-start" aria-hidden />
					<span data-testid="btn-share-label">{t('share.footerLabel')}</span>
				</Button>
				<div className="relative inline-flex">
					<FeedbackNudge visible={showNudge} message={t('app.feedbackNudge')} />
					<Button
						type="button"
						variant="outline"
						size="sm"
						className={showNudge ? 'feedback-btn-nudging' : undefined}
						onClick={() => {
							feedbackLogger.info('Feedback button clicked', {source: 'settings', nudgeVisible: showNudge})
							setShowNudge(false)
							setFeedbackDialogOpen(true)
						}}
						aria-label={t('app.feedback')}
						data-testid="btn-feedback"
					>
						<MessageCircle data-icon="inline-start" aria-hidden />
						<span data-testid="btn-feedback-label">{t('app.feedback')}</span>
					</Button>
				</div>
			</div>
		</FieldGroup>
	)
}
