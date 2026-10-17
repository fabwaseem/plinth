import {useState, type ReactNode, type SubmitEventHandler} from 'react'
import {useTranslation} from 'react-i18next'
import {BROWSE_SOURCES, googleSearchUrl, type BrowseSource} from '@shared/sites/browseSources.js'
import {Button} from '../ui/button.js'
import {Input} from '../ui/input.js'
import {browseSourceMarkStyle} from './browseMarks.js'

const GOOGLE_HOME = 'https://www.google.com/'

interface BrowseHomeProps {
	onOpen: (url: string) => void
}

// The Browse tab before a page is open: search the web, or open a source and
// search there. The native view stays hidden until one of those happens.
export function BrowseHome({onOpen}: BrowseHomeProps): ReactNode {
	const {t} = useTranslation()
	const [query, setQuery] = useState('')
	const label = t('explore.home.searchPlaceholder')

	function openSource(source: BrowseSource): void {
		const text = query.trim()
		onOpen(text === '' ? source.homeUrl : source.searchUrl(text))
	}

	const searchWeb: SubmitEventHandler<HTMLFormElement> = event => {
		event.preventDefault()
		const text = query.trim()
		onOpen(text === '' ? GOOGLE_HOME : googleSearchUrl(text))
	}

	return (
		<div className="flex min-h-0 flex-1 flex-col gap-8 px-4 py-6" data-testid="browse-home">
			<form className="mx-auto w-full max-w-xl" onSubmit={searchWeb}>
				<Input value={query} placeholder={label} aria-label={label} autoComplete="off" enterKeyHint="search" onChange={event => setQuery(event.target.value)} data-testid="browse-search" />
			</form>
			<div className="flex flex-1 items-center justify-center">
				<div className="grid w-full max-w-xl grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
					{BROWSE_SOURCES.map(source => (
						<Button key={source.id} type="button" variant="outline" aria-label={source.name} data-testid={`browse-source-${source.id}`} onClick={() => openSource(source)} className="h-auto flex-col gap-1.5 whitespace-normal px-1.5 py-3">
							<span aria-hidden className="block size-7" style={browseSourceMarkStyle(source)} />
							<span className="max-w-full text-center text-caption wrap-anywhere">{source.name}</span>
						</Button>
					))}
				</div>
			</div>
		</div>
	)
}
