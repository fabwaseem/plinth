// Best-effort artifact cleanup for queue items leaving the active lifecycle:
// resume temp dirs (paused .part files) and probe info-json cache files.
// Extracted from QueueService (same pattern as QueueAutoRetry /
// QueueProbeLifecycle) so the scheduler keeps its single responsibility and
// stays under the repo LOC cap. Never throws — cleanup failures are logged,
// never surfaced to the user.
import {lstat, rm} from 'node:fs/promises'
import path from 'node:path'
import log from 'electron-log/main.js'
import {deletableQueueArtifactPaths} from '@shared/queueArtifacts.js'
import {QueueResumeLifecycle} from './QueueResumeLifecycle.js'
import type {ProbeInfoJsonCache} from '../ProbeInfoJsonCache.js'
import type {QueueItem} from '@shared/types.js'

const logger = log.scope('queue')

export class QueueArtifactCleanup {
	constructor(private readonly probeInfoJsonCache?: ProbeInfoJsonCache) {}

	// Resume temp dir + probe info-json in one call — the shape every
	// cancel/remove/clear path needs.
	async cleanup(item: QueueItem): Promise<void> {
		await this.cleanupResumeContext(item)
		await this.cleanupProbeInfoJson(item)
	}

	// The files this download wrote into its own folder. Anything outside that
	// folder, or a directory, is left alone.
	async deleteDownloadedFiles(item: QueueItem): Promise<void> {
		const root = path.resolve(item.outputDir)
		for (const filePath of deletableQueueArtifactPaths(item.artifacts)) {
			const resolved = path.resolve(filePath)
			const relative = path.relative(root, resolved)
			if (relative === '' || relative.startsWith('..') || path.isAbsolute(relative)) {
				logger.warn('skipped deleting a file outside its download folder', {itemId: item.id, path: filePath})
				continue
			}
			try {
				const info = await lstat(resolved)
				if (info.isDirectory()) continue
				await rm(resolved, {force: true})
			} catch (err) {
				logger.warn('downloaded file delete failed', {itemId: item.id, path: filePath, error: err instanceof Error ? err.message : String(err)})
			}
		}
	}

	async cleanupProbeInfoJson(item: QueueItem): Promise<void> {
		if (!item.probeInfoJsonRef) return
		try {
			await this.probeInfoJsonCache?.delete(item.probeInfoJsonRef)
		} catch (err) {
			logger.warn('probe info-json cleanup failed', {itemId: item.id, error: err instanceof Error ? err.message : String(err)})
		}
	}

	private async cleanupResumeContext(item: QueueItem): Promise<void> {
		try {
			await QueueResumeLifecycle.cleanupResumeContext(item)
		} catch (err) {
			logger.warn('resume-context cleanup failed', {itemId: item.id, error: err instanceof Error ? err.message : String(err)})
		}
	}
}
