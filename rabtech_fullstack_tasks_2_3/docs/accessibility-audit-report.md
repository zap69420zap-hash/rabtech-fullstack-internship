# Accessibility Baseline & Repository Architecture Audit

**Project:** Accessible Dashboard Foundation  
**Prepared for:** Full Stack Web Development Internship — Task 02  
**Audit status:** Project structure prepared; third-party website measurement must be completed by the student.

## 1. Scope
The task requires an audit of one real public-facing website. Select a website you can access, record its URL and date, run Lighthouse in Chrome DevTools, and perform keyboard-only navigation. Do not represent this project template as a completed third-party website audit.

- Website audited: **[enter chosen public website URL]**
- Date and time: **[enter actual date/time]**
- Browser / version: **[enter browser/version]**
- Lighthouse version: **[record from report if available]**
- Auditor: **[your name]**

## 2. Lighthouse results
Run Chrome DevTools → Lighthouse → select Accessibility, Best Practices, SEO (and Performance if required) → Analyze page load. Save the report and a screenshot.

| Category | Actual score | Evidence file |
|---|---:|---|
| Accessibility | [61] | [lighthouse-screenshot.png] |
| Best Practices | [100] | [lighthouse-screenshot.png] |
| SEO | [100] | [lighthouse-screenshot.png] |
| Performance | [100] | [lighthouse-screenshot.png] |

**Do not guess or fill scores without running the test.** Attach the generated report/screenshot in `docs/evidence/` or link it in your repository README.

## 3. Keyboard-only review
Disconnect the mouse or do not use it. Start at the top of the page and test Tab, Shift+Tab, Enter, Space, and Escape where appropriate.

| Check | Result (Pass/Fail/N/A) | Evidence / notes |
|---|---|---|
| Focus indicator is visible | [record] | [describe element] |
| Focus order follows reading order | [record] | [notes] |
| Skip link is available if appropriate | [record] | [notes] |
| All links and buttons can be activated by keyboard | [record] | [notes] |
| Menus/dialogs can be opened and closed by keyboard | [record] | [notes] |
| Focus is not trapped unexpectedly | [record] | [notes] |
| Form labels and errors are understandable | [record] | [notes] |
| Content is usable at 200% zoom | [record] | [notes] |

## 4. Issue log
Use `issue-log.csv` to document at least five issues you actually observe. Prioritize by impact, include reproducible steps and a screenshot or Lighthouse reference, and give a practical remediation.

Suggested priority:
- **P1 / High:** Blocks a key task for users relying on assistive technology.
- **P2 / Medium:** Significant barrier with a workaround.
- **P3 / Low:** Smaller usability or consistency problem.

## 5. Repository architecture
The repository uses a monorepo-style structure with separate `client/`, `server/`, `docs/`, and `tests/` directories. See `architecture.md`. The browser UI uses semantic HTML5; the server includes a health endpoint at `/health`.

## 6. Evidence checklist
- [ ] Actual Lighthouse report or screenshot attached
- [ ] Public website URL and audit date recorded
- [ ] Keyboard walkthrough completed and results recorded
- [ ] At least five real issues recorded with evidence and remediation
- [ ] Repository architecture screenshot captured
- [ ] No credentials, private user data, or copyrighted private documents committed

## 7. Limitations
Automated Lighthouse results do not replace manual testing. This report is a prepared audit framework until the website, measured results, and observed issues above are completed. The sample dashboard is a separate implementation artifact, not evidence of a third-party website audit.
