# Professional Portfolio Website

Personal portfolio site for Nagaraju Sandrala — Applied AI Engineer & Forward Deployed Engineer.

Live at: https://nagarajusandrala.github.io/Portfolio1/

## Stack

Static HTML5, CSS3, and vanilla JavaScript (ES6 modules) only — no build step, no frameworks. Deployed via GitHub Pages directly from `main`.

## Folder structure

```
/
├── index.html
├── styles/
│   └── style.css          # single stylesheet, organized into commented sections
├── scripts/
│   ├── main.js             # entry point, wires up all modules on DOMContentLoaded
│   ├── analytics.js        # Google Analytics 4 loader
│   └── modules/
│       ├── footer.js       # sets the copyright year
│       ├── theme.js        # theme switcher (aurora / frost / nebula / ember), persisted in localStorage
│       ├── scrollAnimations.js  # IntersectionObserver-based reveal-on-scroll
│       └── tabs.js         # accessible ARIA tablist behavior for the Skills section
├── images/
│   └── profile/            # profile photo
├── assets/
│   └── favicon/            # favicon.svg
├── sitemap.xml
├── robots.txt
└── Claude.md                # project spec / working agreement
```

## Sections

Hero, About Me, Expertise, Skills (tabbed by category), Featured Projects, Work Experience, Education, Leadership & Achievements, Contact.

## Themes

Four selectable color themes (aurora, frost, nebula, ember), switched via `data-theme` on `<html>` and persisted in `localStorage`. Toggle buttons live in the nav bar.

## Analytics

Visitor tracking uses Google Analytics 4, loaded by `scripts/analytics.js`. The GA4 Measurement ID is set in `MEASUREMENT_ID` in that file. Tracking is skipped when the site is served from localhost. View visitor reports at https://analytics.google.com.

## Deployment

Push to `main` — GitHub Pages rebuilds automatically from the repository root. No build step required.

## Local development

Serve the folder with any static file server, e.g.:

```
python -m http.server 8000
```

Then open `http://localhost:8000`.
