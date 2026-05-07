# Optimization Recommendations

## Next best upgrades (optional)
- Convert repeated inline styles into reusable utility classes (requires page-by-page transforms).
- Replace absolute-position layouts with CSS Grid/Flex (especially in older lecture dashboards).
- Normalize fonts by removing per-page font imports (currently preserved to avoid breaking design).
- Add a real searchable index (build-time JSON index + client-side search).

## Performance
- Consider bundling fonts and limiting font families to 2 (sans + mono).
- Defer/async any heavy scripts that aren’t needed for initial paint.

## Accessibility
- Ensure headings are hierarchical (H1 → H2 → H3).
- Ensure sufficient contrast for custom colored text inside inline styles.
- Add `alt` attributes to key images.

