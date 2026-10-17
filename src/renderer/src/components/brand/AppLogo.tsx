import type {ReactNode} from 'react'
import logoUrl from '@renderer/assets/logo.svg'

export function AppLogo({size, className}: {size: number; className?: string}): ReactNode {
	return <img src={logoUrl} alt="" width={size} height={size} className={className} draggable={false} />
}
