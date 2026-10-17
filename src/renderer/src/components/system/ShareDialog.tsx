import {type ComponentType, type SVGProps, useMemo, useRef, useState, type ReactNode} from 'react'
import {Copy, CopyCheck, Mail} from 'lucide-react'
import {useTranslation} from 'react-i18next'
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from '../ui/dialog.js'
import {Button} from '../ui/button.js'
import {useAppStore} from '../../store/useAppStore.js'
import {WEBSITE_URL} from '@shared/constants.js'
import {track} from '../../lib/analytics.js'

import IconX from '~icons/simple-icons/x'
import IconFacebook from '~icons/logos/facebook'
import IconWhatsapp from '~icons/logos/whatsapp-icon'
import IconTelegram from '~icons/logos/telegram'
import IconReddit from '~icons/logos/reddit-icon'
import IconLinkedin from '~icons/logos/linkedin-icon'
import IconLine from '~icons/simple-icons/line'
import IconKakao from '~icons/simple-icons/kakaotalk'
import IconWeibo from '~icons/simple-icons/sinaweibo'
import IconPinterest from '~icons/logos/pinterest'
import IconTumblr from '~icons/logos/tumblr-icon'
import IconHackernews from '~icons/simple-icons/ycombinator'
import IconBluesky from '~icons/simple-icons/bluesky'
import IconThreads from '~icons/simple-icons/threads'
import IconMastodon from '~icons/logos/mastodon-icon'
import IconQQ from '~icons/simple-icons/qq'
import IconQzone from '~icons/simple-icons/qzone'
import IconDouban from '~icons/simple-icons/douban'
import IconHatena from '~icons/simple-icons/hatenabookmark'
import IconNaver from '~icons/simple-icons/naver'
import IconSkype from '~icons/logos/skype'
import IconPocket from '~icons/simple-icons/pocket'
import IconBuffer from '~icons/simple-icons/buffer'
import IconDiaspora from '~icons/simple-icons/diaspora'

// Viber dropped: viber://forward URL is rejected by shell.openExternal's
// http(s)-only allowlist (fileHandlers.ts), so the button silently did nothing.
// Restoring it would require whitelisting viber:// in the IPC layer.
type DestinationId = 'copy' | 'twitter' | 'facebook' | 'whatsapp' | 'telegram' | 'reddit' | 'linkedin' | 'email' | 'line' | 'kakao' | 'weibo' | 'pinterest' | 'tumblr' | 'hackernews' | 'bluesky' | 'threads' | 'mastodon' | 'qq' | 'qzone' | 'douban' | 'hatena' | 'naver' | 'skype' | 'pocket' | 'buffer' | 'diaspora'

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

interface SocialDestination {
	id: Exclude<DestinationId, 'copy'>
	label: string
	buildUrl: (url: string, msg: string) => string
	Icon: IconComponent
	// Brand color for monochrome `simple-icons:*` glyphs (rendered via
	// `currentColor`). `logos:*` icons embed their own multi-tone fills and
	// ignore this — leave undefined for them.
	color?: string
}

function openExternal(url: string): void {
	void window.appApi.shell.openExternal(url)
}

const SOCIAL_DESTINATIONS: SocialDestination[] = [
	{id: 'twitter', label: 'X', Icon: IconX, buildUrl: (u, m) => `https://twitter.com/intent/tweet?text=${encodeURIComponent(m)}&url=${encodeURIComponent(u)}`},
	{id: 'facebook', label: 'Facebook', Icon: IconFacebook, buildUrl: u => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(u)}`},
	{id: 'whatsapp', label: 'WhatsApp', Icon: IconWhatsapp, buildUrl: (u, m) => `https://wa.me/?text=${encodeURIComponent(`${m} ${u}`)}`},
	{id: 'telegram', label: 'Telegram', Icon: IconTelegram, buildUrl: (u, m) => `https://t.me/share/url?url=${encodeURIComponent(u)}&text=${encodeURIComponent(m)}`},
	{id: 'reddit', label: 'Reddit', Icon: IconReddit, buildUrl: (u, m) => `https://www.reddit.com/submit?url=${encodeURIComponent(u)}&title=${encodeURIComponent(m)}`},
	{id: 'linkedin', label: 'LinkedIn', Icon: IconLinkedin, buildUrl: u => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(u)}`},
	{id: 'email', label: 'Email', Icon: Mail, buildUrl: (u, m) => `mailto:?subject=${encodeURIComponent(m)}&body=${encodeURIComponent(`${m}\n\n${u}`)}`},
	{id: 'line', label: 'LINE', Icon: IconLine, color: '#00C300', buildUrl: u => `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(u)}`},
	{id: 'kakao', label: '카카오스토리', Icon: IconKakao, color: '#FFCD00', buildUrl: u => `https://story.kakao.com/share?url=${encodeURIComponent(u)}`},
	{id: 'weibo', label: '微博', Icon: IconWeibo, color: '#E6162D', buildUrl: (u, m) => `https://service.weibo.com/share/share.php?url=${encodeURIComponent(u)}&title=${encodeURIComponent(m)}`},
	{id: 'pinterest', label: 'Pinterest', Icon: IconPinterest, buildUrl: (u, m) => `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(u)}&description=${encodeURIComponent(m)}`},
	{id: 'tumblr', label: 'Tumblr', Icon: IconTumblr, buildUrl: (u, m) => `https://www.tumblr.com/widgets/share/tool?canonicalUrl=${encodeURIComponent(u)}&caption=${encodeURIComponent(m)}`},
	{id: 'hackernews', label: 'Hacker News', Icon: IconHackernews, color: '#FF6600', buildUrl: (u, m) => `https://news.ycombinator.com/submitlink?u=${encodeURIComponent(u)}&t=${encodeURIComponent(m)}`},
	{id: 'bluesky', label: 'Bluesky', Icon: IconBluesky, color: '#1185FE', buildUrl: (u, m) => `https://bsky.app/intent/compose?text=${encodeURIComponent(`${m} ${u}`)}`},
	{id: 'threads', label: 'Threads', Icon: IconThreads, buildUrl: (u, m) => `https://www.threads.net/intent/post?text=${encodeURIComponent(`${m} ${u}`)}`},
	{id: 'mastodon', label: 'Mastodon', Icon: IconMastodon, buildUrl: (u, m) => `https://mastodonshare.com/?text=${encodeURIComponent(m)}&url=${encodeURIComponent(u)}`},
	{id: 'qq', label: 'QQ', Icon: IconQQ, color: '#1EBAFC', buildUrl: (u, m) => `https://connect.qq.com/widget/shareqq/index.html?url=${encodeURIComponent(u)}&title=${encodeURIComponent(m)}`},
	{id: 'qzone', label: 'QQ空间', Icon: IconQzone, color: '#FFCE00', buildUrl: (u, m) => `https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${encodeURIComponent(u)}&title=${encodeURIComponent(m)}`},
	{id: 'douban', label: '豆瓣', Icon: IconDouban, color: '#007722', buildUrl: (u, m) => `https://www.douban.com/share/service?href=${encodeURIComponent(u)}&name=${encodeURIComponent(m)}`},
	{id: 'hatena', label: 'はてな', Icon: IconHatena, color: '#00A4DE', buildUrl: (u, m) => `https://b.hatena.ne.jp/entry?mode=confirm&url=${encodeURIComponent(u)}&title=${encodeURIComponent(m)}`},
	{id: 'naver', label: '네이버', Icon: IconNaver, color: '#03C75A', buildUrl: (u, m) => `https://share.naver.com/web/shareView?url=${encodeURIComponent(u)}&title=${encodeURIComponent(m)}`},
	{id: 'skype', label: 'Skype', Icon: IconSkype, buildUrl: (u, m) => `https://web.skype.com/share?url=${encodeURIComponent(u)}&text=${encodeURIComponent(m)}`},
	{id: 'pocket', label: 'Pocket', Icon: IconPocket, color: '#EF4056', buildUrl: (u, m) => `https://getpocket.com/edit?url=${encodeURIComponent(u)}&title=${encodeURIComponent(m)}`},
	{id: 'buffer', label: 'Buffer', Icon: IconBuffer, color: '#168EEA', buildUrl: (u, m) => `https://buffer.com/add?url=${encodeURIComponent(u)}&text=${encodeURIComponent(m)}`},
	{id: 'diaspora', label: 'Diaspora', Icon: IconDiaspora, buildUrl: (u, m) => `https://share.diasporafoundation.org/?title=${encodeURIComponent(m)}&url=${encodeURIComponent(u)}`}
]

// Rough global-popularity rank for the social destinations grid. Copy is the
// primary action above the grid and not part of this list. Ordering is a
// best-effort default; the dialog still surfaces every destination — less
// popular ones simply appear later in the responsive grid.
const POPULARITY_ORDER: Exclude<DestinationId, 'copy'>[] = ['facebook', 'whatsapp', 'twitter', 'linkedin', 'reddit', 'pinterest', 'telegram', 'threads', 'bluesky', 'mastodon', 'email', 'hackernews', 'tumblr', 'pocket', 'buffer', 'skype', 'line', 'weibo', 'qq', 'qzone', 'naver', 'kakao', 'hatena', 'douban', 'diaspora']

const FEATURED_DESTINATIONS = new Set<SocialDestination['id']>(['facebook', 'whatsapp', 'twitter', 'telegram', 'linkedin', 'reddit'])

export function ShareDialog(): ReactNode {
	const {t} = useTranslation()
	const open = useAppStore(s => s.shareDialogOpen)
	const trigger = useAppStore(s => s.shareDialogTrigger)
	const closeShareDialog = useAppStore(s => s.closeShareDialog)
	const [copied, setCopied] = useState(false)
	// Tracks whether the user clicked any destination (or Copy) during this
	// open session — used by share_dialog_closed to distinguish prompt fatigue
	// (close without click) from a successful share funnel.
	const clickedRef = useRef(false)

	const sortedDestinations = useMemo(() => POPULARITY_ORDER.map(id => SOCIAL_DESTINATIONS.find(d => d.id === id)).filter((d): d is SocialDestination => d !== undefined), [])

	function handleOpenChange(next: boolean): void {
		if (!next) {
			track('share_dialog_closed', {via: trigger ?? 'settings', clicked: clickedRef.current})
			clickedRef.current = false
			setCopied(false)
			closeShareDialog()
		}
	}

	function handleCopy(): void {
		void navigator.clipboard.writeText(WEBSITE_URL).then(() => {
			clickedRef.current = true
			track('share_destination_clicked', {destination: 'copy'})
			track('share_link_copied')
			setCopied(true)
			setTimeout(() => setCopied(false), 1500)
		})
	}

	function handleSocial(dest: SocialDestination): void {
		const msg = t('share.defaultMessage')
		clickedRef.current = true
		track('share_destination_clicked', {destination: dest.id})
		openExternal(dest.buildUrl(WEBSITE_URL, msg))
	}

	const featured = sortedDestinations.filter(dest => FEATURED_DESTINATIONS.has(dest.id))
	const more = sortedDestinations.filter(dest => !FEATURED_DESTINATIONS.has(dest.id))

	return (
		<Dialog open={open} onOpenChange={handleOpenChange}>
			<DialogContent data-testid="share-dialog" className="gap-0 overflow-hidden p-0 sm:max-w-md">
				<div className="border-b border-border bg-muted/40 px-5 pt-5 pb-4 pe-12">
					<DialogHeader className="gap-1">
						<DialogTitle>{t('share.title')}</DialogTitle>
						<DialogDescription className="text-balance">{t('share.description')}</DialogDescription>
					</DialogHeader>
				</div>

				<div className="flex max-h-[min(32rem,70vh)] flex-col gap-4 overflow-y-auto p-4">
					<div className="flex items-center gap-2 rounded-xl border border-border-strong bg-background p-1.5 ps-3 shadow-glow">
						<span className="min-w-0 flex-1 truncate font-mono text-caption text-foreground">{WEBSITE_URL}</span>
						<Button type="button" variant={copied ? 'secondary' : 'glow'} size="sm" onClick={handleCopy} data-testid="share-copy-link">
							{copied ? <CopyCheck /> : <Copy />}
							<span>{copied ? t('share.copied') : t('share.copyLink')}</span>
						</Button>
					</div>

					<div className="grid grid-cols-3 gap-2">
						{featured.map(dest => (
							<ShareDestination key={dest.id} dest={dest} featured onSelect={handleSocial} />
						))}
					</div>

					<div className="flex flex-wrap justify-center gap-1 rounded-xl bg-muted/40 p-2">
						{more.map(dest => (
							<ShareDestination key={dest.id} dest={dest} onSelect={handleSocial} />
						))}
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)
}

function ShareDestination({dest, featured = false, onSelect}: {dest: SocialDestination; featured?: boolean; onSelect: (dest: SocialDestination) => void}): ReactNode {
	const Icon = dest.Icon
	if (!featured) {
		return (
			<Button type="button" variant="ghost" size="icon-lg" onClick={() => onSelect(dest)} data-testid={`share-dest-${dest.id}`} title={dest.label} aria-label={dest.label}>
				<span className="flex items-center justify-center text-foreground" style={dest.color ? {color: dest.color} : undefined}>
					<Icon width={18} height={18} />
				</span>
			</Button>
		)
	}

	return (
		<Button type="button" variant="outline" onClick={() => onSelect(dest)} data-testid={`share-dest-${dest.id}`} title={dest.label} className="h-auto min-w-0 flex-col gap-2 rounded-xl px-2 py-3">
			<span className="flex size-10 items-center justify-center rounded-lg bg-muted text-foreground" style={dest.color ? {color: dest.color} : undefined}>
				<Icon width={22} height={22} />
			</span>
			<span className="w-full truncate text-center text-caption text-subtle-foreground">{dest.label}</span>
		</Button>
	)
}
