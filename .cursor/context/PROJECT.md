# Supporting Children's Pathways — project context

Official website for **Supporting Children's Pathways** (UK charity,
no. `1211641`). Static marketing / information site — no app backend.

## Stack

| Layer | Choice |
|-------|--------|
| SSG | Hugo via `hugo-extended` (`^0.144.0` in `package.json`) |
| Theme | [dot-org-hugo-theme](https://github.com/cncf/dot-org-hugo-theme) (CNCF; git submodule) |
| CSS | Theme styles + PostCSS/Autoprefixer; site CSS in `static/css/custom.css` (Sporting Chance–aligned teal + Montserrat/Karla) |
| Package manager | npm |
| Local runtime | Docker Compose (`site` service: Node 20 + `hugo-extended` / PostCSS); optional native `npm run start` |
| Search | Pagefind (documented; `show_search: false` in params) |
| Hosting | Production URL `https://www.supportingchildrenspathways.org/` (Netlify; root `netlify.toml`) |

## Repo layout

| Path | Role |
|------|------|
| `content/en/` | Page Markdown (home, about, team, initiatives, events, donate, contact, accessibility) |
| `layouts/` | Site overrides (events, initiatives, footer, shortcodes) |
| `config/_default/` | Shared Hugo + params + languages/menu |
| `config/development/` | Local `baseURL` (`http://localhost:1313/`) |
| `config/production/` | Prod `baseURL`, `writeStats: true`, robots |
| `static/` | Images, `css/custom.css` |
| `themes/dot-org-hugo-theme/` | Theme submodule — prefer overrides over editing |
| `hugo_stats.json` | Auto-written on production builds (`writeStats`) for CSS purging |
| `postcss.config.js` | PostCSS pipeline |

## Commands

```bash
# Docker (preferred local workflow — same pattern as Sporting Chance)
docker compose build
docker compose run --rm site npm install
docker compose up          # or: npm run dev → http://localhost:1313

# Native (optional)
npm install
npm run start              # hugo serve → http://localhost:1313
npm run build              # production Hugo build
```

Optional search index (after build): `npx -y pagefind --site public`.

Prefer `docker compose up` / `npm run dev` for day-to-day site work. Netlify
build is unchanged (`hugo` on their image). Scripts named `dev:*` target theme
exampleSite paths (`themesDir=../..`) and are not the usual charity-site workflow.

## Git workflow

| Branch | Role |
|--------|------|
| `main` | Production / default remote branch |
| `develop` | Integration / staging |
| `feature/*`, `chore/*` | Work branches → PR into `develop`, then promote to `main` |

## Conventions

- Content edits live in `content/en/**/*.md`; structural/UI in `layouts/` and
  `static/css/custom.css`.
- Do not edit the theme submodule for routine work — override in the site repo.
- Production builds regenerate `hugo_stats.json`; commit refreshes on a chore
  branch when the purge list drifts.
- Do not commit on the user's behalf unless explicitly asked.
- After material ownership, hosting, or architecture changes, update
  [`TIMELINE.md`](TIMELINE.md) in the same PR.

## Ownership / access (as of Aug 2026)

- GitHub: `HandMatt/SCPCharity`.
- Sister site (same maintainer context): Sporting Chance
  (`/home/matt/development/work/SportingChance`).
