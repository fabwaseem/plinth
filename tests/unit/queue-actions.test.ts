import {describe, expect, it} from 'vite-plus/test'
import {canApplyQueueActionToItem, planQueueAction} from '@shared/queueActions.js'
import {makeItem} from '../shared/fixtures.js'

describe('planQueueAction', () => {
	it('pauses pending and running items while skipping invalid statuses', () => {
		const result = planQueueAction('pause', [makeItem({id: 'pending', status: 'pending'}), makeItem({id: 'running', status: 'running'}), makeItem({id: 'done', status: 'done'}), makeItem({id: 'paused', status: 'paused-active'})])

		expect(result.applicableIds).toEqual(['pending', 'running'])
		expect(result.skipped).toEqual([
			{itemId: 'done', status: 'done', reason: 'invalid-status'},
			{itemId: 'paused', status: 'paused-active', reason: 'invalid-status'}
		])
	})

	it('resumes both pause states only', () => {
		const result = planQueueAction('resume', [makeItem({id: 'held', status: 'paused-held'}), makeItem({id: 'active', status: 'paused-active'}), makeItem({id: 'running', status: 'running'})])

		expect(result.applicableIds).toEqual(['held', 'active'])
		expect(result.skipped).toEqual([{itemId: 'running', status: 'running', reason: 'invalid-status'}])
	})

	it('cancels in-flight queue items only', () => {
		const result = planQueueAction('cancel', [makeItem({id: 'pending', status: 'pending'}), makeItem({id: 'running', status: 'running'}), makeItem({id: 'held', status: 'paused-held'}), makeItem({id: 'active', status: 'paused-active'}), makeItem({id: 'error', status: 'error'})])

		expect(result.applicableIds).toEqual(['pending', 'running', 'held', 'active'])
		expect(result.skipped).toEqual([{itemId: 'error', status: 'error', reason: 'invalid-status'}])
	})

	it('retries error and cancelled items only', () => {
		const result = planQueueAction('retry', [makeItem({id: 'error', status: 'error'}), makeItem({id: 'cancelled', status: 'cancelled'}), makeItem({id: 'done', status: 'done'})])

		expect(result.applicableIds).toEqual(['error', 'cancelled'])
		expect(result.skipped).toEqual([{itemId: 'done', status: 'done', reason: 'invalid-status'}])
	})

	it('does not offer retry for terminal probe errors with no runnable job', () => {
		const probeError = makeItem({id: 'probe-error', status: 'error', job: {kind: 'unresolved', extractor: '', extractorKey: ''}, probeMode: 'video', error: {kind: 'unknown', raw: 'probe failed'}})

		expect(canApplyQueueActionToItem('retry', probeError)).toBe(false)
		expect(planQueueAction('retry', [probeError]).applicableIds).toEqual([])
	})

	it('deletes files only for non-running items that have a saved file', () => {
		const withFile = makeItem({id: 'done', status: 'done', artifacts: [{id: 'artifact:/tmp/video.mkv', kind: 'media', path: '/tmp/video.mkv', fileName: 'video.mkv', discoveredAt: '2026-06-18T10:00:00.000Z'}]})
		const result = planQueueAction('delete-files', [withFile, makeItem({id: 'pending', status: 'pending'}), makeItem({id: 'running', status: 'running', artifacts: [{id: 'artifact:/tmp/live.mkv', kind: 'media', path: '/tmp/live.mkv', fileName: 'live.mkv', discoveredAt: '2026-06-18T10:00:00.000Z'}]})])

		expect(result.applicableIds).toEqual(['done'])
		expect(result.skipped.map(item => item.itemId)).toEqual(['pending', 'running'])
	})

	it('removes non-running items only', () => {
		const result = planQueueAction('remove', [makeItem({id: 'pending', status: 'pending'}), makeItem({id: 'running', status: 'running'}), makeItem({id: 'done', status: 'done'})])

		expect(result.applicableIds).toEqual(['pending', 'done'])
		expect(result.skipped).toEqual([{itemId: 'running', status: 'running', reason: 'invalid-status'}])
	})

	it('changes output target only for pending queue items that never started', () => {
		const result = planQueueAction('change-output-target', [
			makeItem({id: 'fresh', status: 'pending', lastJobId: undefined, tempDir: undefined, progressPercent: 0}),
			makeItem({id: 'started-pending', status: 'pending', lastJobId: 'job-old', progressPercent: 0}),
			makeItem({id: 'resume-pending', status: 'pending', progressPercent: 0, resumeContext: {kind: 'media-retry', tempDir: '/tmp/.plinth-temp/resume', reason: 'media-transfer', failureKind: 'network'}}),
			makeItem({id: 'running', status: 'running'}),
			makeItem({id: 'active', status: 'paused-active'}),
			makeItem({id: 'held', status: 'paused-held'}),
			makeItem({id: 'done', status: 'done'}),
			makeItem({id: 'cancelled', status: 'cancelled'})
		])

		expect(result.applicableIds).toEqual(['fresh'])
		expect(result.skipped).toEqual([
			{itemId: 'started-pending', status: 'pending', reason: 'invalid-status'},
			{itemId: 'resume-pending', status: 'pending', reason: 'invalid-status'},
			{itemId: 'running', status: 'running', reason: 'invalid-status'},
			{itemId: 'active', status: 'paused-active', reason: 'invalid-status'},
			{itemId: 'held', status: 'paused-held', reason: 'invalid-status'},
			{itemId: 'done', status: 'done', reason: 'invalid-status'},
			{itemId: 'cancelled', status: 'cancelled', reason: 'invalid-status'}
		])
	})

	it('keeps output-target planning out of the generic queue command action set', () => {
		expect(canApplyQueueActionToItem('change-output-target', makeItem({id: 'fresh', status: 'pending', lastJobId: undefined, tempDir: undefined, progressPercent: 0}))).toBe(true)
	})
})
