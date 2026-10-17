import type {ReactNode} from 'react'
import {useTranslation} from 'react-i18next'
import {BROWSE_SOURCES} from '@shared/sites/browseSources.js'
import {ArrowLeft, ArrowRight, ChevronDown, House, RotateCw, Search, ShieldCheck, WandSparkles, type LucideIcon} from 'lucide-react'
import {cn} from '@renderer/lib/utils.js'
import {buttonVariants} from '../ui/button.variants.js'
import {Skeleton} from '../ui/skeleton.js'
import {browseSourceMarkStyle} from './browseMarks.js'

function MiniIcon({icon: Icon, flip}: {icon: LucideIcon; flip?: boolean}): ReactNode {
	return (
		<span className={cn(buttonVariants({variant: 'outline', size: 'icon-xs'}), 'shrink-0')}>
			<Icon className={flip ? 'rtl:rotate-180' : undefined} />
		</span>
	)
}

// The first-run notice's picture of Browse (decorative, so hidden from
// assistive technology and out of the tab order): the toolbar in miniature,
// with the real look of the Download split, over the source launcher — a
// search field and the sites, not one site's home page.
// Shorter in a narrow card (a small window or a large UI zoom), so the notice's
// text and Continue stay in view; the parent is the size container.
export function ExplorePreview({profileName, ProfileIcon}: {profileName: string; ProfileIcon: LucideIcon}): ReactNode {
	const {t} = useTranslation()
	return (
		<div aria-hidden inert className="pointer-events-none relative flex h-48 flex-col overflow-hidden rounded-xl border border-border bg-background/40 select-none @xl:h-60" data-testid="explore-preview">
			<div className="flex min-w-0 items-center gap-1.5 border-b border-border p-2" data-testid="explore-preview-toolbar">
				<div className="flex shrink-0 gap-0.5">
					<MiniIcon icon={ArrowLeft} flip />
					<MiniIcon icon={ArrowRight} flip />
					<MiniIcon icon={RotateCw} />
					<MiniIcon icon={House} />
				</div>
				<Skeleton className="h-6 min-w-10 flex-1 animate-none rounded-lg" />
				<MiniIcon icon={ShieldCheck} />
				<span className="flex min-w-0 shrink">
					<span className={cn(buttonVariants({size: 'xs'}), 'min-w-0 shrink rounded-e-none')}>
						<ProfileIcon data-icon="inline-start" />
						<span className="min-w-0 truncate">{t('explore.toolbar.downloadWithProfile', {profileName})}</span>
					</span>
					<span className={cn(buttonVariants({size: 'icon-xs'}), 'shrink-0 rounded-s-none border-s border-s-primary-foreground/25')}>
						<ChevronDown />
					</span>
				</span>
				<MiniIcon icon={WandSparkles} />
			</div>
			<div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-3 px-4">
				<div className="flex h-7 w-full max-w-xs items-center gap-2 rounded-lg border border-border bg-background/50 px-2.5">
					<Search className="size-3 shrink-0 text-subtle-foreground" />
					<span className="truncate text-xs text-subtle-foreground">{t('explore.home.searchPlaceholder')}</span>
				</div>
				<div className="grid w-full max-w-md grid-cols-6 gap-x-1.5 gap-y-2">
					{BROWSE_SOURCES.map(source => (
						<div key={source.id} className="flex min-w-0 flex-col items-center gap-1">
							<span className="block size-4" style={browseSourceMarkStyle(source)} />
							<span className="w-full truncate text-center text-caption leading-none text-subtle-foreground">{source.name}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
