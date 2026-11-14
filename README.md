# monibo-landing

Website for [Monibo](https://monibo.app): landing page, privacy policy, terms of use and support,
in English (`/`), Catalan (`/ca/`) and Spanish (`/es/`). Built with [Astro](https://astro.build) as a
fully static site.

## URLs for App Store Connect

| Field | URL |
|---|---|
| Marketing URL | https://monibo.app/ |
| Support URL | https://monibo.app/support/ (`/ca/support/`, `/es/support/`) |
| Privacy Policy URL | https://monibo.app/privacy/ (`/ca/privacy/`, `/es/privacy/`) |
| Terms of Use (EULA) | Apple's standard EULA, summarised and extended at https://monibo.app/terms/ |

## Develop

Requires Node.js 22.23.4 or newer.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run preview
```

## Where things are

| Path | What |
|---|---|
| `src/consts.ts` | Contact email, **App Store link** (null shows "Coming soon"), Pro prices, legal date |
| `src/i18n/ui.ts` | All landing page texts in the three languages |
| `src/legal/*.md` | Privacy policy, terms and support/FAQ, one Markdown file per page and language |
| `src/views/` | Home and legal page templates shared by every language |
| `src/assets/shots/` | App Store screenshots per language (optimised to WebP at build time) |
| `public/` | Favicon, Apple touch icon, Open Graph image, robots.txt |

When the privacy policy or terms change, edit the Markdown in every language and update
`LEGAL_UPDATED` in `src/consts.ts`.

## Deploy

Every push to `main` builds the site and publishes it to GitHub Pages
(`.github/workflows/deploy.yml`). `public/CNAME` holds the custom domain, `monibo.app`, whose
DNS points at GitHub Pages:

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153 |
| AAAA | @ | 2606:50c0:8000::153, 2606:50c0:8001::153, 2606:50c0:8002::153, 2606:50c0:8003::153 |
| CNAME | www | pserracomas.github.io |
