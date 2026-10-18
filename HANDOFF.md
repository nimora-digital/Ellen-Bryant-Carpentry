# Ellen-Bryant Carpentry — delivery and customer review

Status: built and packaged for GitHub → Netlify. Not publicly deployed. No business notifications, acknowledgements, tracking or uploads are activated.

## Design

An architectural editorial design using charcoal, forest-grey, sand, off-white and warm copper. Full-bleed timber imagery, oversized typography, numbered service rows, a staggered image gallery, a measured five-step enquiry pathway and a split photographic contact section keep attention on structural carpentry. Mobile layouts use a dedicated menu, stacked image and service sections, large controls and reduced-motion support.

## Complete page list

1. Home
2. Services
3. Hand-Cut Roofs
4. Loft Conversion Shells
5. Timber Framing
6. First-Fix Carpentry
7. Extensions & Structural Carpentry
8. Garden Rooms
9. Our Work — clearly labelled illustrative gallery
10. About
11. Our Approach
12. Areas / project location enquiries
13. FAQs
14. Contact / project quotation enquiry
15. Privacy policy approval draft
16. Cookie policy approval draft
17. Demonstration terms
18. Guarded Thank You / enquiry receipt
19. Custom not-found view

## Implemented

Responsive navigation; service routes and internal links; gallery category filters and modal lightbox; expandable FAQs; direct telephone/email links; Facebook link; validated enquiry form; real Netlify Function and private Blobs write implementation; guarded receipt page; noindex controls; route-specific titles/descriptions; domain-aware canonical/sitemap generator; WebPage structured data without fabricated business claims; security-header configuration; Node 22 and Netlify configuration; lockfile; licensed local stock images. No external fonts, tracking requests or session-dependent resources are needed.

## Actual verification — 18 October 2026

- `npm ci`: passed after stopping the preview process, which had locked esbuild during the first retry.
- Dependency audit during install: 72 packages audited, 0 reported vulnerabilities.
- `npm test`: 4 tests passed. Covers valid synthetic input; invalid email/phone/postcode/service/length/consent and honeypot input; disabled-storage behaviour; method and foreign-origin rejection.
- `npm run build`: TypeScript and production build passed. Route metadata generated for 18 named pages. Build was repeated after correcting an empty CSS import and improving unavailable-storage error handling.
- Local preview: served successfully on port 4173. An initial preview command parsed the port incorrectly; launching Vite directly corrected it.
- Browser: all 18 named routes plus an unknown route rendered at desktop 1440 × 1000 and mobile 390 × 844. No horizontal overflow detected in those 38 route/viewport checks. Each named route had one description meta tag.
- Homepage desktop and mobile screenshots visually reviewed and saved. Gallery filtering reduced the results correctly; photo lightbox opened and closed; mobile menu opened and its Services link navigated; FAQ expanded.
- Empty form submission exposed native required-field messages. A fully synthetic enquiry reached the local function and showed the explicit disabled-storage response, without navigating to Thank You. No enquiry was stored or forwarded.
- Direct Thank You navigation showed no verified submission. Browser error/warning inspection on route checks returned no entries.

## Remaining verification and limitations

There was no authorised Netlify account connection, so there is no public deployment, live storage test, public success receipt verification or public header/routing test. The rate limiter and storage-failure path require deployed integration testing. Loading and duplicate locks are implemented but rapid repeated submissions under real network latency were not separately stress-tested. Native validation and an error announcement are included; a full screen-reader, contrast and keyboard audit was not performed. No browser matrix or 320px viewport test was performed. Images are compressed JPEGs with lazy loading outside the hero, not multiple responsive image variants.

The backend remains intentionally disabled until data-controller details and retention/access procedures are approved. Secure uploads, genuine case studies, reviews, team biographies, qualifications, insurance and approved partners are absent. Garden-room and extension gallery entries should only be added with approved content. There is no CMS, admin dashboard, automated cleanup, email delivery, analytics or CRM integration.

## Netlify deployment

Extract the ZIP into a new GitHub repository root. Import the repository into Netlify. Base directory: blank. Install: `npm ci`. Build: `npm run build`. Publish: `dist`. Functions: `netlify/functions`. Node: `22`. Keep `DEMO_ENQUIRIES_ENABLED=false`. Set `SITE_URL` to the deployment's HTTPS origin and rebuild for canonical links and sitemap. Keep all noindex controls. Full instructions and storage-testing steps are in `README.md`.

## Customer sign-off checklist

- Confirm permission to operate an official website and use the company name/contact details.
- Approve service scope, loft-shell inclusions, contractor enquiry wording and exact coverage.
- Supply rights-cleared genuine photographs, accurate project locations and verified scope. Confirm whether work was principal-contractor or specialist-package work before writing case studies.
- Approve a team biography, qualifications, insurance, reviews and partner names only where evidence and publication permission exist.
- Confirm legal trading identity and data controller, privacy contact, lawful basis, retention schedule, administrator permissions and deletion procedure. Review legal drafts.
- Confirm Netlify account/domain ownership, hosting terms, storage location, processor arrangements and any applicable charges before enabling storage.
- Perform a controlled synthetic storage test, inspect the private record and receipt, verify failed-storage behaviour, then remove synthetic data.
- Approve any notification recipient, acknowledgement, upload service or integration separately before implementation/activation.
- Review final desktop/mobile content and public headers/routing. Remove noindex controls only for a separately approved official launch.

## Customer-facing sales summary

### FEATURES CURRENTLY LIVE

No public site is live yet. Built and deployment-ready: a distinctive responsive carpentry website, six specialist service pages, labelled illustrative gallery with filters/lightbox, project FAQs, direct contact links, a controlled enquiry form and search/privacy foundations. The form does not currently collect enquiries.

### FEATURES WE CAN ADD WITH CUSTOMER CONTENT OR APPROVAL

Genuine project photography and case studies, confirmed service areas, approved team information and credentials, authentic reviews and legally approved live enquiry collection. Individual case-study pages and richer project galleries can be developed once enough verified material is available.

### ADDITIONAL INTEGRATIONS AVAILABLE AFTER APPROVAL

Email notifications, CRM integration, secure drawing uploads, analytics and consent controls, marketing tools or chat can be scoped and developed separately. These integrations are not built or active in this delivery.
