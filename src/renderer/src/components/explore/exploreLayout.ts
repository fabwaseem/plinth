import type {ExploreViewBounds} from '@shared/types.js'

// The native view paints over all DOM, so anything that floats above the page
// hides it: Base UI dialogs and popovers (role="dialog"/"alertdialog"), select
// lists and menus (which can open over the view, e.g. the footer language
// picker), and the startup splash. A popup kept mounted while closed sits in a
// `hidden` positioner and does not count.
const OVERLAY_SELECTOR = '[role="dialog"], [role="alertdialog"], [role="listbox"], [role="menu"], .splash-overlay'

export function hasBlockingOverlay(): boolean {
	for (const element of document.querySelectorAll(OVERLAY_SELECTOR)) {
		if (element.closest('[hidden]') === null) return true
	}
	return false
}

// The placeholder's rect as the view must cover it: clipped by every scrolling
// or clipping ancestor and the window, so a scrolled-away part never paints
// over the title bar or footer. Viewport CSS px — `getBoundingClientRect`
// already includes the content wrapper's CSS `zoom`; main multiplies by the
// main window's zoom factor (Cmd/Ctrl +/-) to get DIP.
export function visibleBounds(element: HTMLElement): ExploreViewBounds {
	const rect = element.getBoundingClientRect()
	let left = rect.left
	let top = rect.top
	let right = rect.right
	let bottom = rect.bottom
	for (let node = element.parentElement; node; node = node.parentElement) {
		const style = getComputedStyle(node)
		if (style.overflowX === 'visible' && style.overflowY === 'visible') continue
		const clip = node.getBoundingClientRect()
		left = Math.max(left, clip.left)
		top = Math.max(top, clip.top)
		right = Math.min(right, clip.right)
		bottom = Math.min(bottom, clip.bottom)
	}
	left = Math.max(left, 0)
	top = Math.max(top, 0)
	right = Math.min(right, window.innerWidth)
	bottom = Math.min(bottom, window.innerHeight)
	return {x: left, y: top, width: Math.max(0, right - left), height: Math.max(0, bottom - top)}
}

// The native view is a sharp rectangle. Its corner radius is the placeholder's,
// scaled by the same CSS zoom already baked into getBoundingClientRect: computed
// border-radius is pre-zoom, the rect is post-zoom.
export function cornerRadius(element: HTMLElement): number {
	return scaledCornerRadius(getComputedStyle(element).borderTopLeftRadius, element.offsetWidth, element.getBoundingClientRect().width)
}

export function scaledCornerRadius(raw: string, layoutWidth: number, screenWidth: number): number {
	const parsed = Number.parseFloat(raw)
	if (!Number.isFinite(parsed) || parsed <= 0) return 0
	if (layoutWidth > 0 && screenWidth > 0) return (parsed * screenWidth) / layoutWidth
	return parsed
}

export function sameBounds(a: ExploreViewBounds, b: ExploreViewBounds): boolean {
	return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height && (a.radius ?? 0) === (b.radius ?? 0)
}
