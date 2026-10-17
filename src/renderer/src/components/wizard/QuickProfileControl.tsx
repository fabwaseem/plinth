import {useState, type ReactNode} from 'react'
import {useTranslation} from 'react-i18next'
import {ChevronDown, ChevronRight, Download, Folder, FolderCog, PenLine} from 'lucide-react'
import {DEFAULTS} from '@shared/constants.js'
import type {DownloadProfile, DownloadProfileRef, DownloadProfilesPrefs} from '@shared/types.js'
import {formatHotkeyChord, formatHotkeyChordSpoken} from '@renderer/lib/hotkeyLabel.js'
import {cn} from '@renderer/lib/utils.js'
import {useAppStore} from '../../store/useAppStore.js'
import {Button} from '../ui/button.js'
import {Label} from '../ui/label.js'
import {Kbd, KbdGroup} from '../ui/kbd.js'
import {Switch} from '../ui/switch.js'
import {Popover, PopoverTrigger} from '../ui/popover.js'
import {Spinner} from '../ui/spinner.js'
import {Tooltip, TooltipContent, TooltipTrigger} from '../ui/tooltip.js'
import {buildDownloadProfileActionModel, type DownloadProfileActionModel} from './downloadProfileActions.js'
import {DownloadProfileMenuContent, type DownloadProfileMenuTestIdPrefix} from './DownloadProfileMenu.js'

// The URL tab and the Bulk dialog; Explore opens the same menu from its own toolbar.
type QuickProfileTestIdPrefix = Exclude<DownloadProfileMenuTestIdPrefix, 'explore'>

interface QuickProfileControlProps {
	defaultProfileMenuOpen?: boolean
	destination?: string
	destinationDetail?: string
	disabled: boolean
	onChangeGlobalDestination?: () => void
	onDownload: () => void
	onInteractiveDownload?: () => void
	onSmartModeChange?: (enabled: boolean) => void
	smartMode?: boolean
	onEditProfile: (profile: DownloadProfile) => void
	onManageProfiles: () => void
	onNewProfile: () => void
	onPickProfile: (ref: DownloadProfileRef) => void
	// Bulk URLs prepares its links in one run; a single link prepares in the background.
	preparing?: boolean
	profilesPrefs?: DownloadProfilesPrefs
	size?: 'default' | 'compact'
	testIdPrefix?: QuickProfileTestIdPrefix
}

export function QuickProfileControl({
	defaultProfileMenuOpen = false,
	destination,
	destinationDetail,
	disabled,
	onChangeGlobalDestination,
	onDownload,
	onInteractiveDownload,
	onSmartModeChange,
	smartMode = true,
	onEditProfile,
	onManageProfiles,
	onNewProfile,
	onPickProfile,
	preparing = false,
	profilesPrefs,
	size = 'default',
	testIdPrefix = 'profiles'
}: QuickProfileControlProps): ReactNode {
	const {t} = useTranslation()
	const model = buildDownloadProfileActionModel(profilesPrefs)
	const {activeProfile} = model
	const compact = size === 'compact'
	const accelerator = useAppStore(state => state.settings?.common?.hotkeyAccelerator ?? DEFAULTS.hotkeyAccelerator)
	const hotkeyRegistration = useAppStore(state => state.hotkeyRegistration)
	const openAdvancedSettings = useAppStore(state => state.openAdvancedSettings)
	const showHotkeyHint = !compact && hotkeyRegistration === 'registered'
	const chordKeys = showHotkeyHint ? formatHotkeyChord(accelerator) : []
	const spokenChord = showHotkeyHint ? formatHotkeyChordSpoken(accelerator) : []
	const hasDestination = !compact && Boolean(destination?.trim())
	const clusterTestId = testIdPrefix === 'profiles' ? 'profiles-quick-preview' : 'bulk-quick-profile-preview'
	if (!compact) {
		return (
			<SimpleQuickDownload
				chordKeys={chordKeys}
				clusterTestId={clusterTestId}
				destination={destination}
				destinationDetail={destinationDetail}
				disabled={disabled}
				model={model}
				onChangeGlobalDestination={onChangeGlobalDestination}
				onDownload={onDownload}
				onInteractiveDownload={onInteractiveDownload}
				onSmartModeChange={onSmartModeChange}
				smartMode={smartMode}
				onEditProfile={onEditProfile}
				onManageProfiles={onManageProfiles}
				onNewProfile={onNewProfile}
				onPickProfile={onPickProfile}
				openAdvancedSettings={openAdvancedSettings}
				preparing={preparing}
				showHotkeyHint={showHotkeyHint}
				spokenChord={spokenChord}
				testIdPrefix={testIdPrefix}
				defaultProfileMenuOpen={defaultProfileMenuOpen}
			/>
		)
	}
	return (
		<div className={cn('quick-profile-cluster flex w-full flex-col overflow-hidden rounded-xl md:flex-row', compact ? 'md:min-h-[5rem]' : hasDestination ? 'md:min-h-[8.5rem]' : 'md:min-h-[6.5rem]')} data-linked-control="quick-profile" data-testid={clusterTestId}>
			<button
				type="button"
				disabled={disabled}
				aria-busy={preparing}
				onClick={onDownload}
				className={cn(
					'quick-profile-action group/quick relative flex min-w-0 flex-1 items-center gap-4 overflow-hidden text-left transition-[filter,transform] duration-200',
					compact ? 'min-h-[4.75rem] px-4 py-3 md:min-h-[5rem] md:basis-[52%]' : 'min-h-[6rem] px-5 py-4 md:m-2 md:me-0 md:min-h-0 md:flex-[0_1_42%] md:self-stretch lg:m-3 lg:me-0 lg:flex-[0_1_38%] lg:px-5 xl:flex-[0_1_36%] xl:px-6',
					'hover:brightness-[1.08] active:translate-y-px',
					'focus-visible:outline-none',
					disabled && !preparing && 'pointer-events-none opacity-55 saturate-[0.65]',
					preparing && 'pointer-events-none'
				)}
				data-testid={`${testIdPrefix}-quick-download`}
			>
				<span aria-hidden className="quick-card-overlay pointer-events-none absolute inset-0" />
				<span className={cn('icon-tile quick-icon-tile relative grid shrink-0 place-items-center rounded-xl [&_svg]:size-6', compact ? 'size-11' : 'size-12 md:size-14 md:[&_svg]:size-7')}>{preparing ? <Spinner aria-hidden className={compact ? 'size-5' : 'size-6 md:size-7'} /> : <Download aria-hidden />}</span>
				<span className="relative flex min-w-0 flex-col">
					<span className={compact ? 'text-title' : 'text-headline'}>{preparing ? `${t('wizard.url.quickPreparing')}…` : t('wizard.url.quickDownload')}</span>
					<span className={cn('mt-1 block truncate font-medium leading-snug text-quick-card-muted', compact ? 'text-xs' : 'text-sm md:whitespace-nowrap')}>{t('wizard.url.quickDownloadTooltip', {profileName: activeProfile.name})}</span>
					{showHotkeyHint ? (
						<Tooltip>
							<TooltipTrigger
								render={props => (
									<span {...props} aria-label={`${t('wizard.url.hotkey.hintLabel')} ${spokenChord.join(' ')}`} data-testid="quick-download-hotkey-hint" className="mt-2 flex flex-wrap items-center gap-1.5 text-caption font-medium text-quick-card-muted">
										<span>{t('wizard.url.hotkey.hintLabel')}</span>
										<KbdGroup aria-hidden="true">
											{chordKeys.map(key => (
												<Kbd key={key}>{key}</Kbd>
											))}
										</KbdGroup>
									</span>
								)}
							/>
							<TooltipContent side="bottom" className="max-w-xs flex-col items-start gap-1 text-left">
								<span>{t('wizard.url.hotkey.hintTooltip')}</span>
								<Button type="button" variant="link" size="inline" className="text-start text-background opacity-80 hover:text-background" onClick={() => openAdvancedSettings('hotkey')}>
									{t('wizard.url.hotkey.hintTooltipSettings')}
								</Button>
							</TooltipContent>
						</Tooltip>
					) : null}
				</span>
				<ChevronRight className={cn('relative ms-auto shrink-0 text-quick-card-ink opacity-85 transition-transform duration-200 group-hover/quick:translate-x-0.5', compact ? 'size-5' : 'size-5 md:size-6')} aria-hidden />
			</button>

			<ProfileMenu
				activeProfile={activeProfile}
				compact={compact}
				defaultOpen={defaultProfileMenuOpen}
				destination={destination}
				destinationDetail={destinationDetail}
				onChangeGlobalDestination={onChangeGlobalDestination}
				onEditProfile={onEditProfile}
				onManageProfiles={onManageProfiles}
				onNewProfile={onNewProfile}
				onPickProfile={onPickProfile}
				model={model}
				testIdPrefix={testIdPrefix}
			/>
		</div>
	)
}

function qualityChipLabel(profile: DownloadProfile): string {
	switch (profile.id) {
		case 'best-quality':
			return 'Best'
		case 'best-2160':
			return '4K'
		case 'best-1440':
			return '2K'
		case 'hd-1080':
			return '1080p'
		case 'balanced':
			return '720p'
		case 'audio-only':
			return 'Audio'
		default:
			return profile.name
	}
}

function SimpleQuickDownload({
	chordKeys,
	clusterTestId,
	defaultProfileMenuOpen,
	destination,
	destinationDetail,
	disabled,
	model,
	onChangeGlobalDestination,
	onDownload,
	onEditProfile,
	onInteractiveDownload,
	onManageProfiles,
	onNewProfile,
	onPickProfile,
	onSmartModeChange,
	openAdvancedSettings,
	preparing,
	showHotkeyHint,
	smartMode = true,
	spokenChord,
	testIdPrefix
}: {
	chordKeys: string[]
	clusterTestId: string
	defaultProfileMenuOpen: boolean
	destination?: string
	destinationDetail?: string
	disabled: boolean
	model: DownloadProfileActionModel
	onChangeGlobalDestination?: () => void
	onDownload: () => void
	onEditProfile: (profile: DownloadProfile) => void
	onInteractiveDownload?: () => void
	onManageProfiles: () => void
	onNewProfile: () => void
	onPickProfile: (ref: DownloadProfileRef) => void
	onSmartModeChange?: (enabled: boolean) => void
	openAdvancedSettings: (target: 'hotkey') => void
	preparing: boolean
	showHotkeyHint: boolean
	smartMode?: boolean
	spokenChord: string[]
	testIdPrefix: QuickProfileTestIdPrefix
}): ReactNode {
	const {t} = useTranslation()
	const [menuOpen, setMenuOpen] = useState(defaultProfileMenuOpen)
	const {activeProfile} = model
	const destinationLabel = destination?.trim()
	const destinationDetailText = destinationDetail?.trim()
	const destinationDetailLabel = destinationDetailText === undefined || destinationDetailText.length === 0 ? t('wizard.url.profile.destinationFallback') : destinationDetailText
	const editActiveProfileLabel = t('wizard.url.profile.editActive')
	const changeGlobalDestinationLabel = t('wizard.url.profile.changeGlobalDestination')

	function closeAndRun(action: () => void): void {
		setMenuOpen(false)
		action()
	}

	return (
		<Popover open={menuOpen} onOpenChange={setMenuOpen}>
			<div className="flex w-full flex-col gap-3" data-linked-control="quick-profile" data-testid={clusterTestId}>
				{onSmartModeChange ? (
					<div className="flex items-center justify-between gap-3">
						<Label htmlFor="download-smart-mode">{t('wizard.url.smartMode')}</Label>
						<Switch id="download-smart-mode" size="sm" checked={smartMode} onCheckedChange={onSmartModeChange} data-testid="download-smart-mode" />
					</div>
				) : null}
				{smartMode ? (
					<>
						<div className="flex flex-wrap items-center gap-2" data-testid={`${testIdPrefix}-active-profile-card`}>
							<span className="sr-only">{activeProfile.name}</span>
							{model.options.map(option => (
								<Button key={option.profile.id} type="button" size="sm" variant={option.active ? 'default' : 'outline'} aria-pressed={option.active} className="rounded-full" onClick={() => onPickProfile(option.ref)} data-testid={`${testIdPrefix}-quality-${option.profile.id}`}>
									{qualityChipLabel(option.profile)}
								</Button>
							))}
							<div className="flex items-center gap-1">
								<Tooltip>
									<TooltipTrigger
										render={props => (
											<Button {...props} type="button" variant="ghost" size="icon-sm" aria-label={editActiveProfileLabel} onClick={() => closeAndRun(() => onEditProfile(activeProfile))} data-testid={`${testIdPrefix}-edit-active-profile`}>
												<PenLine aria-hidden />
											</Button>
										)}
									/>
									<TooltipContent>{editActiveProfileLabel}</TooltipContent>
								</Tooltip>
								<PopoverTrigger
									render={
										<Button type="button" variant="ghost" size="icon-sm" aria-label={t('wizard.url.profile.switchAria', {profileName: activeProfile.name})} title={t('wizard.url.profile.switchTitle')} data-testid={`${testIdPrefix}-active-profile-trigger`}>
											<ChevronDown aria-hidden />
										</Button>
									}
								/>
							</div>
						</div>
						<Button type="button" variant="glow" size="lg" disabled={disabled} aria-busy={preparing} onClick={onDownload} className="h-12 w-full justify-between rounded-xl px-4" data-testid={`${testIdPrefix}-quick-download`}>
							<span className="flex items-center gap-2">
								{preparing ? <Spinner aria-hidden /> : <Download aria-hidden />}
								{preparing ? `${t('wizard.url.quickPreparing')}…` : t('wizard.url.quickDownload')}
							</span>
							{showHotkeyHint ? (
								<Tooltip>
									<TooltipTrigger
										render={props => (
											<span {...props} aria-label={`${t('wizard.url.hotkey.hintLabel')} ${spokenChord.join(' ')}`} data-testid="quick-download-hotkey-hint" className="flex items-center gap-1.5 text-caption font-medium">
												<span>{t('wizard.url.hotkey.hintLabel')}</span>
												<KbdGroup aria-hidden="true">
													{chordKeys.map(key => (
														<Kbd key={key}>{key}</Kbd>
													))}
												</KbdGroup>
											</span>
										)}
									/>
									<TooltipContent side="bottom" className="max-w-xs flex-col items-start gap-1 text-left">
										<span>{t('wizard.url.hotkey.hintTooltip')}</span>
										<Button type="button" variant="link" size="inline" className="text-start text-background opacity-80 hover:text-background" onClick={() => openAdvancedSettings('hotkey')}>
											{t('wizard.url.hotkey.hintTooltipSettings')}
										</Button>
									</TooltipContent>
								</Tooltip>
							) : null}
						</Button>
						{destinationLabel ? (
							<div className="flex min-w-0 items-center gap-2 px-1" data-testid={`${testIdPrefix}-profile-destination`} title={destinationDetailLabel}>
								<Folder className="size-4 shrink-0 text-subtle-foreground" aria-hidden />
								<span className="min-w-0 flex-1 truncate text-sm text-subtle-foreground" title={destinationLabel}>
									{destinationLabel}
								</span>
								{onChangeGlobalDestination ? (
									<Tooltip>
										<TooltipTrigger
											render={props => (
												<Button {...props} type="button" variant="ghost" size="icon-sm" aria-label={changeGlobalDestinationLabel} onClick={() => closeAndRun(onChangeGlobalDestination)} data-testid={`${testIdPrefix}-change-global-destination`}>
													<FolderCog aria-hidden />
												</Button>
											)}
										/>
										<TooltipContent>{changeGlobalDestinationLabel}</TooltipContent>
									</Tooltip>
								) : null}
							</div>
						) : null}
					</>
				) : (
					<Button type="button" variant="glow" size="lg" disabled={disabled} onClick={onInteractiveDownload} title={t('wizard.url.fetchFormatsTooltip')} className="h-12 w-full justify-start gap-2 rounded-xl px-4" data-testid={`${testIdPrefix}-interactive-download`}>
						<Download aria-hidden />
						{t('wizard.url.download')}
					</Button>
				)}
			</div>
			{smartMode ? <DownloadProfileMenuContent model={model} onPickProfile={onPickProfile} onEditProfile={onEditProfile} onNewProfile={onNewProfile} onManageProfiles={onManageProfiles} onClose={() => setMenuOpen(false)} testIdPrefix={testIdPrefix} /> : null}
		</Popover>
	)
}

function ProfileMenu({
	activeProfile,
	compact,
	defaultOpen,
	destination,
	destinationDetail,
	onChangeGlobalDestination,
	onEditProfile,
	onManageProfiles,
	onNewProfile,
	onPickProfile,
	model,
	testIdPrefix
}: {
	activeProfile: DownloadProfile
	compact: boolean
	defaultOpen: boolean
	destination?: string
	destinationDetail?: string
	onChangeGlobalDestination?: () => void
	onEditProfile: (profile: DownloadProfile) => void
	onManageProfiles: () => void
	onNewProfile: () => void
	onPickProfile: (ref: DownloadProfileRef) => void
	model: DownloadProfileActionModel
	testIdPrefix: QuickProfileTestIdPrefix
}): ReactNode {
	const {t} = useTranslation()
	const [menuOpen, setMenuOpen] = useState(defaultOpen)
	const {ActiveIcon, activeSummary} = model
	const destinationLabel = compact ? undefined : destination?.trim()
	const destinationDetailText = destinationDetail?.trim()
	const destinationDetailLabel = destinationDetailText === undefined || destinationDetailText.length === 0 ? t('wizard.url.profile.destinationFallback') : destinationDetailText
	const activeProfileLabel = t('wizard.url.profile.activeLabel')
	const changeGlobalDestinationLabel = t('wizard.url.profile.changeGlobalDestination')
	const editActiveProfileLabel = t('wizard.url.profile.editActive')
	const switchProfileTitle = t('wizard.url.profile.switchTitle')

	function closeAndRun(action: () => void): void {
		setMenuOpen(false)
		action()
	}

	return (
		<Popover open={menuOpen} onOpenChange={setMenuOpen}>
			<div
				className={cn(
					'quick-profile-selector relative flex min-w-0 flex-1 flex-col whitespace-normal rounded-lg text-left',
					compact ? 'm-1.5 min-h-[4.25rem] p-1.5 md:basis-[48%]' : destinationLabel ? 'm-2 min-h-[7.75rem] p-3 md:m-2 md:basis-[50%] md:self-stretch lg:m-3 lg:basis-[54%] lg:p-3.5 xl:basis-[56%]' : 'm-2 min-h-[5.5rem] p-2 md:m-2 md:min-h-0 md:basis-[50%] md:self-stretch lg:m-3 lg:basis-[54%] lg:p-2 xl:basis-[56%]'
				)}
				data-testid={`${testIdPrefix}-active-profile-card`}
			>
				<div className="relative flex min-w-0 items-center gap-2">
					<PopoverTrigger
						render={
							<Button
								type="button"
								variant="ghost"
								aria-label={t('wizard.url.profile.switchAria', {profileName: activeProfile.name})}
								title={switchProfileTitle}
								className={cn('quick-profile-selector-trigger h-auto min-w-0 flex-1 justify-start whitespace-normal rounded-xl bg-transparent text-left hover:bg-transparent', compact ? 'gap-3 px-1.5 py-1.5' : 'gap-2 px-1.5 py-1.5 md:gap-3')}
								data-testid={`${testIdPrefix}-active-profile-trigger`}
							>
								<span className={cn('icon-tile grid shrink-0 place-items-center rounded-xl', compact ? 'size-10 [&_svg]:size-5' : 'size-11 md:size-14 [&_svg]:size-5 md:[&_svg]:size-7')}>
									<ActiveIcon aria-hidden />
								</span>
								<span className="min-w-0 flex-1">
									<span className="quick-profile-selector-kicker mb-1 block truncate text-label uppercase">{activeProfileLabel}</span>
									<span className={cn('quick-profile-selector-title block truncate', compact ? 'text-title' : 'text-title md:text-headline')}>{activeProfile.name}</span>
									<span className={cn('quick-profile-selector-meta mt-0.5 block truncate font-normal leading-snug', compact ? 'text-xs' : 'text-xs md:text-sm')}>{activeSummary}</span>
								</span>
								<span className={cn('quick-profile-chevron grid shrink-0 place-items-center rounded-full', compact ? 'size-9' : 'size-10')}>
									<ChevronDown aria-hidden className="size-5 transition-transform duration-200 group-aria-expanded/button:rotate-180" />
								</span>
							</Button>
						}
					/>
					<Tooltip>
						<TooltipTrigger
							render={props => (
								<Button
									{...props}
									type="button"
									variant="ghost"
									size="icon"
									aria-label={editActiveProfileLabel}
									onClick={() => closeAndRun(() => onEditProfile(activeProfile))}
									className={cn('quick-profile-inline-action shrink-0 rounded-full text-quick-selector-muted hover:text-quick-selector-ink', compact ? 'size-9' : 'size-10')}
									data-testid={`${testIdPrefix}-edit-active-profile`}
								>
									<PenLine aria-hidden />
								</Button>
							)}
						/>
						<TooltipContent>{editActiveProfileLabel}</TooltipContent>
					</Tooltip>
				</div>
				{destinationLabel ? (
					<div className="quick-profile-destination relative mt-2 flex min-w-0 items-center gap-2 rounded-xl px-2 py-2" data-testid={`${testIdPrefix}-profile-destination`}>
						<Folder className="size-4 shrink-0 text-quick-selector-muted" aria-hidden />
						<span className="min-w-0 flex-1">
							<span className="block truncate text-caption font-medium leading-snug text-quick-selector-muted" title={destinationDetailLabel}>
								{destinationDetailLabel}
							</span>
							<span className="mt-1 block truncate font-mono text-xs leading-tight text-quick-selector-ink" title={destinationLabel}>
								{destinationLabel}
							</span>
						</span>
						{onChangeGlobalDestination ? (
							<Tooltip>
								<TooltipTrigger
									render={props => (
										<Button
											{...props}
											type="button"
											variant="ghost"
											size="icon-sm"
											aria-label={changeGlobalDestinationLabel}
											onClick={() => closeAndRun(onChangeGlobalDestination)}
											className="quick-profile-inline-action shrink-0 text-quick-selector-muted hover:text-quick-selector-ink"
											data-testid={`${testIdPrefix}-change-global-destination`}
										>
											<FolderCog aria-hidden />
										</Button>
									)}
								/>
								<TooltipContent>{changeGlobalDestinationLabel}</TooltipContent>
							</Tooltip>
						) : null}
					</div>
				) : null}
			</div>
			<DownloadProfileMenuContent model={model} onPickProfile={onPickProfile} onEditProfile={onEditProfile} onNewProfile={onNewProfile} onManageProfiles={onManageProfiles} onClose={() => setMenuOpen(false)} testIdPrefix={testIdPrefix} />
		</Popover>
	)
}
