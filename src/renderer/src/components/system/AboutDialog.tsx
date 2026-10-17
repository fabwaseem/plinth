import {type ComponentType, type ReactNode} from 'react'
import {useTranslation} from 'react-i18next'
import {ChevronRight, ExternalLink, Globe, Share2} from 'lucide-react'
import IconGithub from '~icons/simple-icons/github'
import {APP_NAME, WEBSITE_URL} from '@shared/constants.js'
import {SourceCapabilityStrip} from '../shared/SourceCapabilityStrip.js'
import {Badge} from '../ui/badge.js'
import {Button} from '../ui/button.js'
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from '../ui/dialog.js'
import {useAppStore} from '../../store/useAppStore.js'
import {AppLogo} from '../brand/AppLogo.js'

const GITHUB_URL = 'https://github.com/fabwaseem/plinth'
const NOTICES_URL = 'https://github.com/fabwaseem/plinth/blob/main/THIRD_PARTY_NOTICES.txt'

function openExternalUrl(url: string): void {
	void window.appApi.shell.openExternal(url)
}

export function AboutDialog(): ReactNode {
	const {t} = useTranslation()
	const {aboutDialogOpen, setAboutDialogOpen, openShareDialog} = useAppStore()

	function handleShare(): void {
		setAboutDialogOpen(false)
		openShareDialog('about')
	}

	return (
		<Dialog open={aboutDialogOpen} onOpenChange={setAboutDialogOpen}>
			<DialogContent data-testid="about-dialog" className="gap-0 overflow-hidden p-0 sm:max-w-md">
				<div className="flex flex-col items-center gap-3 border-b border-border bg-muted/40 px-6 pt-8 pb-6">
					<div className="flex size-20 items-center justify-center rounded-2xl bg-background shadow-glow ring-1 ring-foreground/10">
						<AppLogo size={52} />
					</div>
					<DialogHeader className="items-center gap-1.5 text-center">
						<DialogTitle>{APP_NAME}</DialogTitle>
						<Badge variant="outline" size="sm" className="tabular-nums">
							v{window.appVersion}
						</Badge>
						<DialogDescription className="max-w-xs text-center text-balance">{t('about.tagline')}</DialogDescription>
					</DialogHeader>
				</div>

				<div className="flex flex-col gap-4 p-4">
					<div className="grid gap-2">
						<AboutAction icon={Globe} label={t('about.websiteLink')} testId="about-link-website" onClick={() => openExternalUrl(WEBSITE_URL)} />
						<AboutAction icon={IconGithub} label={t('about.githubLink')} testId="about-link-github" onClick={() => openExternalUrl(GITHUB_URL)} />
						<AboutAction icon={Share2} label={t('share.shareAction')} testId="about-link-share" onClick={handleShare} />
					</div>

					<SourceCapabilityStrip testId="about-capabilities" className="w-full" />

					<div className="flex flex-col items-center gap-1 border-t border-border pt-3 text-center">
						<span className="text-caption text-subtle-foreground">{t('about.licenseLine')}</span>
						<Button type="button" variant="link" size="inline" onClick={() => openExternalUrl(NOTICES_URL)} className="text-caption text-subtle-foreground" data-testid="about-link-notices">
							{t('about.thirdPartyNotices')}
							<ExternalLink className="size-3" aria-hidden />
						</Button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)
}

function AboutAction({icon: Icon, label, testId, onClick}: {icon: ComponentType<{className?: string; 'aria-hidden'?: boolean}>; label: string; testId: string; onClick: () => void}): ReactNode {
	return (
		<Button type="button" variant="outline" onClick={onClick} data-testid={testId} className="h-auto w-full justify-between px-3 py-2.5">
			<span className="flex min-w-0 items-center gap-2.5">
				<span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
					<Icon className="size-4" aria-hidden />
				</span>
				<span className="truncate text-title">{label}</span>
			</span>
			<ChevronRight className="size-4 text-subtle-foreground rtl:rotate-180" aria-hidden />
		</Button>
	)
}
