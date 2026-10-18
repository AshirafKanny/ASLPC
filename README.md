# ASLPC Website

Website of the **African Sports Law and Policy Centre** — live at **https://aslpc.org**.

Built with Next.js (App Router, TypeScript, Tailwind CSS v4), hosted on Vercel. Articles are
managed by staff in a Sanity Studio embedded at **https://aslpc.org/studio**.

## Services and accounts

| Service | Used for | Notes |
|---|---|---|
| **Hostinger** | Domain `aslpc.org` and its DNS | Keep auto-renewal on. All DNS records live here. |
| **Vercel** | Hosting and deploys (project `aslpc`) | Every push to `master` deploys to production. |
| **GitHub** | Source code (`AshirafKanny/ASLPC`) | |
| **Sanity** | Articles (project `cxpuy3cc`, dataset `production`) | Free plan. Staff are invited under Members → Editor. |
| **Zoho Mail** | `info@aslpc.org` mailbox | MX, SPF and DKIM (`zmail._domainkey`) records in Hostinger. |
| **Resend** | Sends contact-form emails from `website@aslpc.org` | Records on `send`, `rsend`, `resend._domainkey`. |
| **Google Search Console** | Search indexing, sitemap | Verified by the `google-site-verification` TXT record. Do not delete it. |

`www.aslpc.org` permanently redirects to `aslpc.org` (set in Vercel → Domains).

## Environment variables

Set in Vercel (Production) and, for local development, in `.env.local` (git-ignored).

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend key used by the contact form. |
| `CONTACT_FROM_EMAIL` | Sender, e.g. `ASLPC Website <website@aslpc.org>`. |
| `CONTACT_TO_EMAIL` | Where enquiries go (`info@aslpc.org`). |
| `SANITY_REVALIDATE_SECRET` | Shared secret for the Sanity webhook (must match the webhook's secret). |
| `SANITY_API_WRITE_TOKEN` | Local only, and only for one-off scripts such as the article migration. |

The Sanity project ID and dataset are public and default in `src/sanity/env.ts`.

## Running locally

```bash
npm install
npm run dev        # http://localhost:3000 and http://localhost:3000/studio
npm run build && npm start   # production build
npm run lint
```

`http://localhost:3000` is an allowed CORS origin in Sanity, so the local Studio can log in.

## How content works

- **Articles** (`/insights`, home "Latest News", search, sitemap) come from Sanity. Schema:
  `src/sanity/schemaTypes/post.ts`; queries: `src/lib/content/insights.ts`.
  Articles with a future publish date stay hidden until that date.
- **Publishing** triggers the Sanity webhook "Refresh aslpc.org" → `POST /api/revalidate`,
  which clears the cached article data so the change shows on the next visit.
  Without it, content still refreshes hourly.
- **Publications and events** are typed arrays in `src/lib/content/` (currently empty until
  ASLPC releases them). Pages show a short notice while empty.
- **Site-wide details** (name, email, WhatsApp number, navigation) are in `src/lib/constants.ts`.

## Contact form

`src/app/contact/actions.ts` is a Server Action: validates input, rejects bots with a hidden
honeypot field, and emails the message through the Resend API with the visitor as reply-to.
If Resend is not configured it shows visitors the email address instead of losing the message.

## Images and video

Keep files in `public/` web-sized. Before adding large photos or videos, run:

```bash
node scripts/compress-images.js                       # resizes oversized images in place
npm install --no-save ffmpeg-static && bash scripts/compress-videos.sh public/your-video.mp4
```

## Deploying

Push to `master` → Vercel builds and deploys automatically (about 2 minutes).
Check progress in Vercel → Deployments.
