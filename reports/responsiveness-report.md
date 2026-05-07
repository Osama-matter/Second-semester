# Responsiveness Report (Generated)

Date: 2026-05-07

## What was standardized
- A shared, responsive layout wrapper is injected on every page via `app.js` without deleting existing content.
- A unified top navigation + optional lecture bar (breadcrumbs, progress, prev/next) is injected on all non-home pages.
- Global responsive fixes are applied safely (images/videos max-width, overflow protection, code blocks scrollable).
- Tables are wrapped into horizontal scroll containers to prevent mobile overflow.
- PDFs/iframes/embeds are wrapped and constrained to the viewport.

## Breakpoints implemented
Defined in `responsive.css`:
- 320px (baseline behavior through fluid sizing)
- 480px
- 768px
- 1024px
- 1440px+

## Automatic fixes applied at runtime
Applied by `app.js`:
- Adds `body.ss-platform` and wraps page content into `.ss-wrap > main.ss-content`
- Injects `.ss-topbar` on all pages
- Injects `.ss-lecturebar` on lecture pages (not `index.html`)
- Wraps `<table>` in `.ss-table` (scrollable)
- Wraps `iframe/embed/object` in `.ss-embed`
- Converts `section/article` blocks into mobile collapsible disclosures on screens `<= 768px` (content-safe)

## Known limitations
- Very aggressive inline styles or page-specific CSS may still override typography/spacing. The system prioritizes content safety over visual uniformity.
- Pages with heavy absolute positioning may still need manual refactors (the system prevents overflow, but won’t redesign those structures automatically).
- If a page relies on `<section>/<article>` semantics for layout, the mobile disclosure conversion may reduce scannability; it can be disabled by removing `mobileDisclosures()` in `app.js`.

