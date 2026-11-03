# L and S Helping Hands & Cleaning Services

A fast, accessible marketing site for **L and S Helping Hands & Cleaning Services**, Durban North.

Built with Vite 8, React 19, TypeScript, Tailwind CSS 4, React Router and Motion.

## Getting started

```bash
npm install
npm run dev      # local development
npm run build    # production build (outputs to dist/)
npm run preview  # preview the production build
npm run lint     # lint the codebase
```

## Editing content

- **Business details** (phone numbers, email, service areas, hours): `src/lib/site.ts`
- **Services, FAQs, process steps and promises**: `src/lib/content.ts`
- **Pages**: `src/pages/`
- **Images**: `src/assets/images/`

The two phone numbers, email address and Durban North location are taken from the business's
existing marketing material. Service areas, opening hours and the operating details on the site
are sensible defaults — confirm them with the owner before launch.

### Forms

Both forms are backend-free: they validate on the client, then compose a pre-filled message that
opens in WhatsApp, with an email fallback. Nothing is submitted until the visitor presses send in
WhatsApp or their email client. No personal data is stored.

### Before launch

1. Replace the photo placeholders with real photos of the team and their work if available.
2. Confirm opening hours and the list of service areas in `src/lib/site.ts`.
3. Once the production domain is known, add a canonical `<link>` and change `og:image` in
   `index.html` to an absolute URL (it is intentionally relative until the domain exists).
4. Add real Google Business Profile / social links to `src/lib/site.ts` if available.
5. Deploy with SPA rewrites (already included for Netlify and Vercel).

## Deployment

The build is a static SPA. `public/_redirects` (Netlify) and `vercel.json` (Vercel) already
configure SPA fallback so client-side routes work.

## Image credits

Photography sourced from [Pexels](https://www.pexels.com/license/) and
[Unsplash](https://unsplash.com/license). Replace with the client's own photography where possible.
