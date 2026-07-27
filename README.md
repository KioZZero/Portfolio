# HTML Portfolio

**Summary:** A small portfolio site built with plain HTML, CSS and vanilla JavaScript. It includes a projects page that loads project data (JSON or JS fallback), theme/language modules, and lightweight UI helpers.

**Quick Start:**
- Open `index.html` or `Projects/projects.html` in a browser. For full `fetch` support (projectData.json), serve the folder with a local HTTP server:

```bash
# from the project root
python3 -m http.server 8000
# then open http://localhost:8000/index.html
```

**Files of interest:**
- [index.html](index.html) — Home page
- [Projects/projects.html](Projects/projects.html) — Projects listing page
- [Script/projectRenderer.js](Script/projectRenderer.js) — Loads project data and renders cards
- [Script/modules.js](Script/modules.js) — HTML snippets / templates for modules and project skeletons
- [Script/moduleLoader.js](Script/moduleLoader.js) — Shows/closes modules, manages theme & language
- [Script/translationScript.js](Script/translationScript.js) — Simple i18n implementation
- [Style/*.css](Style/) — Site styles (core, modules, pages)

**Reviewer notes / suggestions**
- `projectRenderer.js` uses a `fetch` to load `projectData.json` and falls back to `Projects/projectData.js` (sets `window.__projectData`). When opening files via `file://` the initial `fetch` may fail; run a local server to test JSON fetch.
- Templates and small markup snippets live in `Script/modules.js` (see `projectTemplates`). This is good for reuse; consider moving HTML templates into real `<template>` elements in HTML if progressive enhancement is desired.
- `moduleLoader.js` has repeated render patterns for sidebar/theme/language modules — these could be DRYed via a small helper (no functional issue, just a maintenance note).
- Some image tags in `modules.js` include inline `style` attributes — consider using CSS classes instead to keep styles centralized.
- The project previously had an animated SVG background script; that was removed. If you want to reintroduce an animated background, keep the animation code separate from the main UI logic.

If you want, I can:
- Add a short dev script in `package.json` to run a local server.
- Move templates into `<template>` elements and provide a small render helper.
- Run a quick pass to remove remaining inline styles and consolidate constants.
