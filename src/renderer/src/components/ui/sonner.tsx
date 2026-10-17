import {Toaster as Sonner, type ToasterProps} from 'sonner'

// Written by hand rather than pulled from the shadcn registry. The registry
// entry does not compile here: it imports `IconPlaceholder` from
// `@/app/(create)/components/icon-placeholder`, a shadcn-site-internal
// component for previewing several icon libraries, and that path does not
// exist in this repo. It also carries a `"use client"` directive (meaningless
// outside Next.js) and reads the theme from `next-themes`, while App.tsx
// already resolves the theme itself (see resolveColorScheme) and passes the
// answer down. The parts of it worth having — the custom-property theming and
// the radius token — are kept below.

// Inset from the window corner. The card floats; it does not reserve a row.
const CORNER_OFFSET = 16

export function Toaster(props: ToasterProps) {
	return (
		<Sonner
			position="bottom-right"
			offset={CORNER_OFFSET}
			closeButton
			// Sonner v2 colors itself from these custom properties. Setting them is
			// the supported way to theme it — a background rule delivered through
			// `classNames` loses to sonner's own stylesheet, which is why the toast
			// rendered flat white and flat black instead of picking up the app's
			// surface tokens.
			style={{'--normal-bg': 'color-mix(in srgb, var(--popover) 86%, transparent)', '--normal-text': 'var(--popover-foreground)', '--normal-border': 'var(--border)', '--border-radius': '14px', '--width': '22.5rem'} as React.CSSProperties}
			toastOptions={{classNames: {toast: 'app-toast', title: 'app-toast-title', description: 'app-toast-description', actionButton: 'app-toast-action', closeButton: 'app-toast-close'}}}
			{...props}
		/>
	)
}
