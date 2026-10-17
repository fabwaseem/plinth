#!/usr/bin/env bash
# Run the download smoke matrix on the Windows test VM and print its table.
# Defaults to the exe built by win-build.sh; download smoke exists only in
# builds that include it, so an older installed release cannot run it.
#
# Usage: scripts/vm/win-download-smoke.sh -Url <youtube url> [-Browser firefox] [-Proxy <url>] [-ProfileId <id>]
#        PLINTH_WIN_VM_EXE='C:\path\Plinth.exe' scripts/vm/win-download-smoke.sh -Url ...
set -euo pipefail
source "$(dirname "$0")/_win-vm.sh"

exe="${PLINTH_WIN_VM_EXE:-$WIN_VM_DIR\\dist\\win-arm64-unpacked\\Plinth.exe}"
win_vm_check
win_vm_copy "$WIN_VM_SCRIPTS/../smoke/download-smoke-matrix.ps1"
win_vm_run_ps download-smoke-matrix.ps1 -Exe "$exe" "$@"
