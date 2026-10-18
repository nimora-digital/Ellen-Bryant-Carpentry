# Ellen-Bryant Carpentry — Nimora Digital prospect demo

Complete React / Vite / TypeScript source. Independent demonstration, not an authorised business website. No public deployment was performed. Stock images are labelled throughout. No fabricated credentials, reviews, partners, project counts or service coverage.

## Run locally

Use Node 22. Install with `npm ci`, run `npm run dev`, build with `npm run build`, and preview with `npm run preview`. Run backend validation checks with `npm test`. The Vite server uses the actual function handler for the local enquiry endpoint; collection remains disabled by default. The site has no ChatGPT dependency.

## GitHub → Netlify

1. Extract the ZIP. Upload its contents directly to the root of a new GitHub repository, including hidden files. Do not upload the ZIP as the repository's only file.
2. In Netlify, import an existing project from GitHub and select that repository. Keep the base directory blank.
3. Use install command `npm ci` where an install override is available (Netlify otherwise installs from the lockfile automatically), build command `npm run build`, publish directory `dist`, functions directory `netlify/functions`, Node version `22`.
4. Keep `DEMO_ENQUIRIES_ENABLED=false` in the Functions runtime environment, or leave it unset. Do not configure form notifications, business forwarding or acknowledgements.
5. Set `SITE_URL` in the build environment to the final HTTPS origin. The metadata script also accepts Netlify's `URL`. Rebuild after setting the final domain. Canonical links and sitemap are generated only when an origin is known; no fictional production domain is shipped.
6. Deploy, then verify every service link, direct route, mobile navigation, gallery, security headers and disabled form response. Keep the noindex meta, X-Robots-Tag and disallow-all robots file for this prospect demo. Noindex is not access control: use hosting access restrictions if a private demonstration is needed.
7. Only after controller/legal approval, set `DEMO_ENQUIRIES_ENABLED=true` for an isolated test deployment. Submit clearly synthetic information, inspect the private `private-project-enquiries` store in Netlify Blobs, confirm the receipt and record, test failures and rate limits, then remove synthetic records. Never put records in Git or public assets. Enabling the form does not turn on emails.

Netlify functions receive storage credentials through the platform. No API key is required in browser code. Do not add secrets to `VITE_` variables. Blobs is site-wide and shared across deploy contexts; use a separate Netlify project for isolated storage testing. Read [Netlify Blobs documentation](https://docs.netlify.com/build/data-and-storage/netlify-blobs/) for platform access and storage details.

## Pages

Home `/`; Services `/services`; Hand-Cut Roofs `/hand-cut-roofs`; Loft Conversion Shells `/loft-conversion-shells`; Timber Framing `/timber-framing`; First-Fix Carpentry `/first-fix-carpentry`; Extensions & Structural Carpentry `/extensions`; Garden Rooms `/garden-rooms`; Our Work `/our-work`; About `/about`; Our Approach `/our-approach`; Areas `/areas`; FAQs `/faqs`; Contact `/contact`; Privacy `/privacy`; Cookies `/cookies`; Terms `/terms`; Thank You `/thank-you`; custom not-found view for unknown routes and `404.html`.

## Editing

Advertised services and FAQs are in `src/content.ts`. The reusable layout, labelled illustrative gallery and page content are in `src/main.tsx`; styling is in `src/style.css`. This is developer-editable configuration, not a customer CMS. Update contact details in the header/footer/contact content together. `scripts/metadata.mjs` defines route metadata and sitemap generation. Replace images with approved company photographs and update alt text and provenance. Do not silently convert stock images into portfolio claims.

## Form behaviour

Client-side required fields and email validation; server-side type, length, email, phone and UK postcode validation; honeypot; origin check; request size limit; one-minute per-network rate limit; in-flight duplicate-submit lock; accessible server error announcement and loading/disabled state. The function returns a receipt only after the storage write resolves. Thank You is guarded by the tab's receipt. This receipt UI is not an administrator authentication system.

The rate limiter is proportionate demo protection, not an atomic high-volume abuse defence. There is no CAPTCHA or distributed transactional deduplication. A failed connection after a successful write can require administrator review to resolve uncertain receipt status. No public read endpoint exists. Secure uploads are absent. Netlify Blobs records require an agreed administrator access model, retention schedule and deletion procedure before collection is enabled. No scheduled cleanup is installed.

## Deployment limitations

Live Netlify storage, public response headers, public routing, account permissions, data region, retention and public success flow require verification on the destination account. No account credentials or authorised deployment connection were supplied. This delivery does not claim a successful public deployment. The React content requires JavaScript; route-specific metadata is emitted at build time, not full server-rendered page content. Unknown SPA routes display a custom 404 view but use the SPA fallback HTTP 200; `404.html` is also included for hosts that serve it directly.

See `HANDOFF.md` for actual test results, customer sign-off and the sales summary. See `ASSETS.md` for image licensing.
