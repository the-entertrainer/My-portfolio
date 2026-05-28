# Portfolio Testing Checklist

## CRITICAL: Visual Rendering Tests
BEFORE declaring "complete," test at actual mobile dimensions (375px, 768px, 1920px).

### Mobile (375px - iPhone SE)
- [ ] Navigation hamburger appears
- [ ] Nav menu doesn't overlap hero content when closed
- [ ] Hero title and text fully visible, not cut off
- [ ] Marquee text readable, not overlapping
- [ ] Icon belt icons visible (opacity: 1, not 0)
- [ ] All sections properly spaced (no text overlap)
- [ ] Buttons clickable, not hidden
- [ ] Toggle visible and functional
- [ ] No horizontal scrolling
- [ ] Footer readable

### Tablet (768px)
- [ ] Navigation visible
- [ ] Two-column layouts working
- [ ] No overlapping elements
- [ ] Text hierarchy maintained
- [ ] Touch targets at least 44px

### Desktop (1920px)
- [ ] Navigation menu visible (not hamburger)
- [ ] Full grid layouts (3-4 columns)
- [ ] All animations smooth at 60fps
- [ ] No console errors
- [ ] Custom cursor visible

## Code Quality Tests
- [ ] No JavaScript console errors
- [ ] No CSS syntax errors
- [ ] All CSS selectors match HTML classes
- [ ] All HTML sections have CSS definitions
- [ ] Initial opacity/transform states defined for animated elements

## Section-by-Section Audit
For EACH section (.hero, .marquee-section, .icon-belt, etc.):
- [ ] CSS selector matches HTML class name exactly
- [ ] Padding/margin defined (no auto-overlap)
- [ ] Z-index values prevent overlap
- [ ] Initial animation states (opacity, transform) match CSS
- [ ] Responsive breakpoints override base styles

## Never Deploy Without:
1. Visual test at 375px, 768px, 1920px (in browser, not just syntax check)
2. Full page scroll test to verify no overlap
3. Interaction test: click every button, toggle, link
4. Console clear: 0 errors, 0 warnings
5. Animation smooth: scrub scroll, verify 60fps, no jank

## Red Flags (STOP and fix):
- "everything looks fine" based on syntax alone
- Selector match without checking CSS rules actually style correctly
- "No errors" without visual validation
- Z-index without verifying no overlap
- opacity: 0 without verifying animation kicks in
