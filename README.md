# phemelo_portfolio

Personal portfolio for Phemelo Steve Mokwena, built with [Astro](https://astro.build).
Dark theme, a collapsible side menu (icons only or icons with names, remembered between
visits), a hand-drawn tech doodle background, and almost no JavaScript.

## Run it

```bash
npm install
npm run dev       # http://localhost:4321
npm run check     # type and template checks
npm run build     # static site in dist/
npm run preview   # serve the built site locally
```

Needs Node 20 or newer.

## Where things are

| What | Where |
|---|---|
| All text, links, projects, skills, certificates, experience | `src/data/site.ts` |
| Page layout and sections | `src/pages/index.astro` |
| Side menu (collapse, active section) | `src/components/Sidebar.astro` |
| Floating GitHub / LinkedIn buttons | `src/components/SocialRail.astro` |
| Doodle background | `src/components/Doodles.astro` |
| Contact form | `src/components/ContactForm.astro` |
| Colours, fonts, spacing | `src/styles/global.css` (variables at the top) |

## Before you publish

1. **CV:** put your CV at `public/cv.pdf`, then set `links.cv` to `"/cv.pdf"` in
   `src/data/site.ts`. Until then the Download CV buttons stay hidden.
2. **Check every line in `src/data/site.ts`** is accurate. The AWS card says the exam
   is planned; update it after you pass.
3. Set `site` in `astro.config.mjs` to your live URL.

## Contact form

There is no server. Submitting the form opens the visitor's email app with the message
filled in, addressed to the email in `site.ts`. If you later want messages delivered
without an email app, swap it for a form service (for example Formspree) in
`src/components/ContactForm.astro`.

## Deploy

**Vercel (recommended):** import this repository, framework preset "Astro", then deploy.
Every push to `main` redeploys.

**Later, as a DevOps project:** host `dist/` on S3 behind CloudFront, defined with
Terraform and deployed from GitHub Actions.

## CI

`.github/workflows/ci.yml` runs `astro check` and `astro build` on every push and pull request.
