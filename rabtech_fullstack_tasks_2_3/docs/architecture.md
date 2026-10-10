# Architecture and repository structure

## Goal
Create a small, understandable monorepo-style foundation that separates browser UI, server behavior, documentation, and tests.

```text
rabtech-fullstack-internship/
├── client/
│   ├── index.html          # Dashboard page, semantic landmarks and project table
│   ├── components.html     # Accessible forms, fieldset, table, native dialog
│   ├── styles.css          # Responsive design, focus states, reduced motion
│   ├── app.js              # Dashboard interactions
│   └── components.js       # Form validation and dialog behavior
├── server/
│   ├── package.json        # Node.js scripts and engine requirement
│   └── server.js           # Static file server and /health endpoint
├── docs/
│   ├── architecture.md
│   ├── accessibility-audit-report.md
│   └── issue-log.csv
├── tests/
│   └── manual-test-plan.md
├── .gitignore
└── README.md
```

## Data flow
1. Browser requests a page from the Node.js server.
2. Server serves files from `client/` and returns JSON for `/health`.
3. Browser JavaScript handles local demo interactions only.
4. No database, analytics, login, or personal-data collection is included.

## Maintainability choices
- HTML, CSS, and JavaScript are separated.
- No external runtime dependencies are required.
- Page regions and repeated components use semantic native HTML.
- Form labels, error messaging, table headers, and live status announcements are explicit.
- `server.js` restricts static file resolution to the client directory.
- Production deployment would need additional security headers, logging, robust MIME handling, and a hardened server configuration.
