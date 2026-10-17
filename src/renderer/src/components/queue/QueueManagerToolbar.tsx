import type {ReactNode} from 'react'
import type {Column} from '@tanstack/react-table'
import type {TFunction} from 'i18next'
import {Columns3, Inbox} from 'lucide-react'
import type {QueueItem} from '@shared/types.js'
import {cn} from '@renderer/lib/utils.js'
import {Button} from '../ui/button.js'
import {ButtonGroup} from '../ui/button-group.js'
import {Checkbox} from '../ui/checkbox.js'
import {Popover, PopoverContent, PopoverTrigger} from '../ui/popover.js'
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from '../ui/select.js'
import {QueueActionButton} from './QueueManagerButtons.js'
import {COLUMN_LABEL_KEYS, SELECTED_ACTIONS, STATUS_FILTERS, actionButtonDisabled, queueStatusFilterCount, type QueueSelectedAction} from './queueManagerActions.js'
import type {QueueStatusFilter} from './queueManagerState.js'
import type {QueueTableColumnId} from './queueTablePreferences.js'
import type {QueueTableFeatures} from './queueTableFeatures.js'
import {IconTile} from '../shared/IconTile.js'

interface QueueManagerToolbarProps {
	t: TFunction
	queue: QueueItem[]
	selectedItems: QueueItem[]
	selectedCount: number
	filter: QueueStatusFilter
	columns: Column<QueueTableFeatures, QueueItem, unknown>[]
	onFilterChange: (filter: QueueStatusFilter) => void
	onSelectedAction: (action: QueueSelectedAction) => void
	schedulerPaused: boolean
}

function isStatusFilter(value: unknown): value is QueueStatusFilter {
	return STATUS_FILTERS.some(statusFilter => statusFilter.id === value)
}

function statusFilterById(id: QueueStatusFilter): (typeof STATUS_FILTERS)[number] | undefined {
	return STATUS_FILTERS.find(statusFilter => statusFilter.id === id)
}

export function QueueManagerToolbar({t, queue, selectedItems, selectedCount, filter, columns, onFilterChange, onSelectedAction, schedulerPaused}: QueueManagerToolbarProps): ReactNode {
	const actingOnAll = selectedCount === 0
	const targets = actingOnAll ? queue : selectedItems
	const actionLabel = (action: QueueSelectedAction): string => {
		if (!actingOnAll) return t(SELECTED_ACTIONS.find(item => item.id === action)?.labelKey ?? 'queue.item.pause')
		if (action === 'pause') return t('queue.pauseAllTitle')
		if (action === 'resume') return t('queue.resumeAllTitle')
		if (action === 'cancel') return t('queue.cancelAllTitle')
		if (action === 'remove') return t('queue.clearTitle')
		return t(SELECTED_ACTIONS.find(item => item.id === action)?.labelKey ?? 'queue.item.pause')
	}
	const actionDisabled = (action: QueueSelectedAction): boolean => {
		if (actingOnAll && action === 'pause') return schedulerPaused
		if (actingOnAll && action === 'delete-files') return true
		if (actingOnAll && (action === 'resume' || action === 'cancel' || action === 'remove')) return false
		return actionButtonDisabled(action, targets)
	}
	const actionTestId = (action: QueueSelectedAction): string | undefined => {
		if (!actingOnAll) return undefined
		if (action === 'pause') return 'btn-pause-all'
		if (action === 'resume') return 'btn-resume-first'
		if (action === 'remove') return 'btn-clear-completed'
		return undefined
	}

	return (
		<div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 pb-3">
			<div className="flex min-w-0 items-center gap-2.5">
				<IconTile>
					<Inbox />
				</IconTile>
				<div className="min-w-0">
					<h2 className="text-headline">{t('queue.header')}</h2>
					<p className="text-xs text-muted-foreground" data-testid="queue-selection-summary">
						{t('queue.selectionSummary', {selected: selectedCount, total: queue.length})}
					</p>
				</div>
			</div>
			<div className="flex flex-wrap items-center justify-end gap-2">
				<Select
					value={filter}
					onValueChange={value => {
						if (isStatusFilter(value)) onFilterChange(value)
					}}
				>
					<SelectTrigger size="sm" variant="ghost" aria-label={t('queue.filtersLabel')} data-testid="queue-status-filter" className="h-8 rounded-full border border-border/70 bg-background/40 px-3 text-xs font-medium">
						<SelectValue>
							{(value: unknown) => {
								if (!isStatusFilter(value)) return null
								const statusFilter = statusFilterById(value)
								if (!statusFilter) return null
								return (
									<span className="inline-flex items-center gap-2">
										{t(statusFilter.labelKey)}
										<span className="font-mono text-muted-foreground">{queueStatusFilterCount(statusFilter.id, queue)}</span>
									</span>
								)
							}}
						</SelectValue>
					</SelectTrigger>
					<SelectContent align="end" alignItemWithTrigger={false}>
						<SelectGroup>
							{STATUS_FILTERS.map(statusFilter => (
								<SelectItem key={statusFilter.id} value={statusFilter.id} onClick={() => onFilterChange(statusFilter.id)} data-testid={`queue-filter-${statusFilter.id}`}>
									<span className="flex w-full items-center justify-between gap-6">
										{t(statusFilter.labelKey)}
										<span className="font-mono text-muted-foreground">{queueStatusFilterCount(statusFilter.id, queue)}</span>
									</span>
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
				<Popover>
					<PopoverTrigger
						render={
							<Button type="button" variant="ghost" size="icon-sm" aria-label={t('queue.table.columns')} title={t('queue.table.columns')}>
								<Columns3 size={13} aria-hidden />
							</Button>
						}
					/>
					<PopoverContent className="w-48 gap-1.5 p-2" align="end">
						{columns
							.filter(column => column.id !== 'select')
							.map(column => {
								const columnId = column.id as QueueTableColumnId
								const checkboxId = `queue-column-${column.id}`
								return (
									<label key={column.id} htmlFor={checkboxId} className={cn('flex items-center gap-2 rounded-md px-2 py-1.5 text-xs', column.getCanHide() ? 'cursor-pointer hover:bg-muted/60' : 'cursor-not-allowed text-muted-foreground')}>
										<Checkbox id={checkboxId} checked={column.getIsVisible()} disabled={!column.getCanHide()} onCheckedChange={value => column.toggleVisibility(value === true)} />
										{t(COLUMN_LABEL_KEYS[columnId])}
									</label>
								)
							})}
					</PopoverContent>
				</Popover>
				<ButtonGroup className="rounded-full border border-border/70 bg-background/40 px-1 py-0.5" aria-label={t(actingOnAll ? 'queue.globalActionsLabel' : 'queue.selectedActionsLabel')} data-testid="queue-selected-actions">
					{SELECTED_ACTIONS.map(action => (
						<QueueActionButton key={action.id} action={action} disabled={actionDisabled(action.id)} label={actionLabel(action.id)} testId={actionTestId(action.id)} onClick={() => onSelectedAction(action.id)} />
					))}
				</ButtonGroup>
			</div>
		</div>
	)
}
