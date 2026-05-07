# Remaining Broken Pages Report (Generated)

## Summary
No pages were excluded from the shared responsive system. Remaining issues (if any) are expected to be **page-specific layout choices** that the global system intentionally does not override aggressively.

## What to check manually (high probability)
- Any pages using fixed sidebars with `position: fixed` + large `width` values.
- Any hero sections with `min-height: 100vh` and large `padding` on small phones.
- Any custom grids with `grid-template-columns` fixed widths.
- Any tables that use nested fixed-width elements inside cells.

## How to identify
Open each page at:
- 375×667 (phone)
- 768×1024 (tablet)
- 1366×768 (laptop)
- 1920×1080 (desktop)

and watch for:
- horizontal scroll on the body (should not happen; tables should scroll only inside `.ss-table`)
- clipped fixed headers (top padding should be handled by `body.ss-platform`)

