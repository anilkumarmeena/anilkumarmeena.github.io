# anilkumarmeena.github.io

**Source for [anilkumarmeena.github.io](https://anilkumarmeena.github.io), the personal site of Anil Kumar Meena, Tech Head at Slike, Times Internet.**

A single static page: plain HTML and CSS, built with Vite, no framework. Every push to `main` deploys to GitHub Pages.

| | Command | What it does |
|:-:|---|---|
| 🧪 | `npm run dev` | Local server with live reload on port 8080 |
| 📦 | `npm run build` | Writes the site to `dist/` |
| 👀 | `npm run preview` | Serves `dist/` to check the build |

| File | Holds |
|---|---|
| `index.html` | All content, plus the SEO tags and the Person schema |
| `src/style.css` | Styles, with light and dark themes |
| `public/` | Favicon, social share image (`og.png`), `robots.txt`, `sitemap.xml` |

> [!TIP]
> When the content changes, bump `<lastmod>` in `public/sitemap.xml` so search engines pick it up sooner.
