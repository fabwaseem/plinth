import {describe, expect, it} from 'vite-plus/test'

import {findUnsafePreloadRequires} from '../../scripts/check-preload-bundle.js'

describe('preload bundle checker', () => {
	it('accepts intentional Electron and Node runtime imports', () => {
		expect(
			findUnsafePreloadRequires(`
        const electron = require("electron");
        const path = require("node:path");
      `)
		).toEqual([])
	})

	it('rejects machine-local and source imports that should have been bundled', () => {
		const findings = findUnsafePreloadRequires(`
      require("D:\\\\a\\\\Plinth\\\\Plinth\\\\src\\\\shared\\\\ipc.js");
      require("C:/work/plinth/src/preload/createPreloadApi.js");
      require("/tmp/plinth/src/shared/ipc.js");
      require("@shared/ipc.js");
      require("@preload/createPreloadApi.js");
      require("./createPreloadApi.js");
    `)

		expect(findings.map(finding => finding.specifier)).toEqual(['D:\\\\a\\\\Plinth\\\\Plinth\\\\src\\\\shared\\\\ipc.js', 'C:/work/plinth/src/preload/createPreloadApi.js', '/tmp/plinth/src/shared/ipc.js', '@shared/ipc.js', '@preload/createPreloadApi.js', './createPreloadApi.js'])
	})
})
