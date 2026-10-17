import type {CSSProperties} from 'react'
import type {BrowseSource, BrowseSourceId} from '@shared/sites/browseSources.js'
import youtubeLogo from '../../assets/browse/youtube.svg'
import tiktokLogo from '../../assets/browse/tiktok.svg'
import instagramLogo from '../../assets/browse/instagram.svg'
import facebookLogo from '../../assets/browse/facebook.svg'
import xLogo from '../../assets/browse/x.svg'
import redditLogo from '../../assets/browse/reddit.svg'
import twitchLogo from '../../assets/browse/twitch.svg'
import vimeoLogo from '../../assets/browse/vimeo.svg'
import soundcloudLogo from '../../assets/browse/soundcloud.svg'
import dailymotionLogo from '../../assets/browse/dailymotion.svg'
import pinterestLogo from '../../assets/browse/pinterest.svg'
import bilibiliLogo from '../../assets/browse/bilibili.svg'

const LOGO: Record<BrowseSourceId, {src: string; color: string}> = {
	youtube: {src: youtubeLogo, color: '#FF0000'},
	tiktok: {src: tiktokLogo, color: '#FE2C55'},
	instagram: {src: instagramLogo, color: '#E4405F'},
	facebook: {src: facebookLogo, color: '#1877F2'},
	x: {src: xLogo, color: '#1D9BF0'},
	reddit: {src: redditLogo, color: '#FF4500'},
	twitch: {src: twitchLogo, color: '#9146FF'},
	vimeo: {src: vimeoLogo, color: '#1AB7EA'},
	soundcloud: {src: soundcloudLogo, color: '#FF5500'},
	dailymotion: {src: dailymotionLogo, color: '#00AAFF'},
	pinterest: {src: pinterestLogo, color: '#E60023'},
	bilibili: {src: bilibiliLogo, color: '#00A1D6'}
}

export function browseSourceMarkStyle(source: BrowseSource): CSSProperties {
	const logo = LOGO[source.id]
	const image = `url("${logo.src}")`
	return {backgroundColor: logo.color, maskImage: image, WebkitMaskImage: image, maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskPosition: 'center', maskSize: 'contain', WebkitMaskSize: 'contain'}
}
