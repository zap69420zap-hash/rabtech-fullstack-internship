# Manual test plan

## Environment
- Browser and version: record before testing
- Operating system: record before testing
- Viewports: desktop (1440px), tablet (768px), mobile (375px)

## Dashboard checks
- [ ] `index.html` loads without console errors.
- [ ] Skip link appears on keyboard focus and moves focus to main content.
- [ ] Tab and Shift+Tab move through links and buttons in a logical order.
- [ ] Focus outline is visible on interactive elements.
- [ ] Add demo project adds exactly one row and announces status.
- [ ] High contrast toggle changes contrast mode and updates `aria-pressed`.
- [ ] Table remains usable at narrow widths with horizontal scrolling.
- [ ] Layout adapts at tablet and mobile widths.

## Components checks
- [ ] Form input has a visible label and helper text.
- [ ] Submitting a blank/short name displays an error, sets `aria-invalid`, and focuses the input.
- [ ] Valid project name produces a status message without sending data.
- [ ] Dialog opens from its button, closes with Escape, and returns focus to the opener.
- [ ] Dialog Cancel and Confirm actions provide status messages.
- [ ] Reduced-motion preference is respected.

## Server checks
- [ ] `npm start` launches on port 3000 (or configured `PORT`).
- [ ] `/` returns the dashboard.
- [ ] `/components.html` returns the component page.
- [ ] `/health` returns JSON with status `ok`.
- [ ] Unknown paths return 404.
- [ ] Traversal-style URL attempts do not expose files outside `client/`.

## Automated accessibility follow-up
Run Lighthouse against the local dashboard and inspect all flagged items. Fix real findings and record before/after evidence. Automated checks cannot confirm all screen-reader and keyboard usability.
