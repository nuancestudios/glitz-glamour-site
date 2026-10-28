# Glitz & Glamour Academy & Boutique Salon — website

Static site for GitHub Pages. Uses relative asset paths, so it works at a GitHub Pages project URL such as
`https://YOUR-USERNAME.github.io/glitz-glamour-site/`.

## Pages

Home · Academy · Services · Testimonials · Contact. (The old `#/portfolio` link still works — it now opens the Testimonials page.)

## Where the copy comes from

All business copy — founder biography, credentials, service descriptions, course areas, the enquiry process and
contact details — is taken from the client's **Brand & Website Discovery** response (20 Oct 2026), principally
Q1, Q2 and Q8–Q13. Nothing on the site invents a service, course, credential or claim that is not in that response.

- **Founder & credentials** — Q10, reproduced as approved wording (City & Guilds Level 4 Licentiateship,
  Vidal Sassoon Teacher's Training, London Makeup Academy, Dermalogica Specialist).
- **Business description and tagline** — Q2 ("Luxury services. Expert training.", "One destination. Two
  expressions of excellence.").
- **Services** — Q3 (bridal makeup, bridal hairstyling, occasion/party makeup, hairstyling, salon services,
  education), detailed with Q2's Dermalogica and Davines lines.
- **Enquiry process** — Q9, reproduced on the Contact page and in the Academy admissions steps.
- **Contact details** — Q13. **Address and landmark** — Q12.

The Academy course areas are deliberately described as *disciplines* rather than named courses, because Q8
(which services/courses to feature first) was left unanswered. Named courses, durations, fees and certification
should be added once the client supplies them.

### Content revision — 28 Oct 2026

A client revision pass, applied to four pages. The visual system was not touched; the new components reuse the
existing palette and type scale.

- **Home** — headline and introduction are client-supplied ("Where Beauty Meets Expertise." + the
  salon-and-academy paragraph). The two pathways are now named **Explore the boutique salon** and
  **Discover the Academy**, and each card carries an at-a-glance list of what that side covers, so the page
  introduces the salon and the Academy equally instead of reading as a bridal site.
- **Services** — headline kept. The list is now grouped: *Bridal & occasion*, *Haircuts, colour & styling*,
  *Professional skin & hair treatments*, covering the eight client-listed services (bridal makeup, bridal
  hairstyling, occasion & party makeup, haircuts / colour / hairstyling, Dermalogica, Davines, Schwarzkopf,
  keratin / botox / nanoplastia). Precision haircuts are named as such rather than folded into "hairstyling".
  Bridal makeup is described against skin, features, attire, ceremony and preference; bridal hairstyling
  against consultation, preparation, attire and long wear. **No medical or guaranteed-result claims** —
  treatments are described as cosmetic, outcomes are said to vary, and suitability is confirmed at
  consultation.
- **Academy** — reframed as a dedicated professional training institute: headline
  "Learn the Art. Master the Technique. Build Your Career.", five course categories (professional makeup,
  hairdressing, hair colour theory, hairstyling, beauty therapy — "beauty therapy" and "hairdressing" are the
  terms an Academy graduate uses in her Google review) and four formats that separate **foundation courses,
  professional upskilling, masterclasses and one-to-one mentoring**. Formats are levels, not named courses —
  durations, fees and certification still wait on G6.
- **Testimonials** — the one quote on the page that is *not* a customer review is now boxed and labelled
  **Founder's reply · written by the salon — not a customer review**. Reviewer spelling is preserved verbatim,
  including where a reviewer writes the salon's or Academy's name differently ("Gltz n glamour academy n
  Butique salon", "Boutique Saloon", "Guild and Glamour Academy"); each of those quotes carries a
  "quoted as written" note so the spelling does not read as our error. The earlier inline `[sic]` was removed
  in favour of that note.

### Testimonials

Built from the 103 public Google reviews of *Glitz & Glamour Academy and Boutique Salon* (4.9 ★). Quotes are
reproduced as written — trimmed with an ellipsis where a review continues — grouped by topic, with the reviewer
names and dates shown on Google. The full review text lives on Google; the page links out to the listing.
Nothing on the page is invented, and no review ratings or names were altered. Some quotes contain the
spelling "Kakoli"; this is how the reviewer wrote it and has deliberately been left untouched.

## Brand mark

`public/images/logo-mark-96.png` is the client-supplied emblem (gold profile and botanical crest on burgundy),
cropped to a circle and used beside the wordmark in the header and footer. `public/images/logo-mark.png` is the
larger master copy (used for `og:image` and the Apple touch icon); `public/favicon.png` is the 64 px favicon.
The source is a square 1024 px PNG. Ask the client for a vector (SVG/AI/EPS) before any print or signage use.

## Icons and mobile

- **Icons are inline SVG, never characters.** The decorative glyphs the design uses (the ↗ arrow, the ✳ asterisk,
  the ✆ / ✉ / ◎ contact marks, the ★ review stars) are drawn from the `<svg class="icon-sprite">` block at the top
  of `index.html` and referenced with `ic('arrow')` etc. in `app.js`. This is not a style preference: iOS has no
  glyph for these characters in the webfonts, so it substitutes colour **emoji** — the asterisk arrived as a green
  emoji disc and the arrows as blue Apple glyphs. Do not reintroduce them as text.
- **Mobile breakpoints** are `720px` (layout collapses, menu becomes a drawer, 16px form fields so iOS does not zoom
  on focus, quick-contact bar pinned with `env(safe-area-inset-bottom)`) and `420px` / `380px` (small-phone type and
  header tuning). There is also a short-landscape rule so the hero does not fill a rotated iPhone.
- **Touch targets** are 44px minimum for buttons, filters, nav rows and the menu toggle; text links carry a 28px
  tap area.
- **Contrast** — `--gold-ink` (#755427) is the gold used for _text_; `--gold` (#b58c5c) stays for rules and borders
  only. `--muted` was darkened to #665552 so body copy passes WCAG AA on every cream panel.
- `prefers-reduced-motion` stops the marquee and reveals; hover-only effects are gated behind `@media(hover:hover)`
  equivalents so they do not "stick" after a tap.

## Housekeeping

- `public/images/academy-class.jpg` is **client-supplied photography** (a live masterclass demonstration) and replaces
  the earlier placeholder. `academy-class-square.jpg` is a square crop of the same frame, used in the founder band on
  Home, where the slot is taller than wide. The untouched upload is kept as `academy-class-original.jpeg` for re-crops.
- `public/images/academy-touchup.jpg` is also client-supplied — a make-up touch-up at a lit dressing table. It is used
  for the Home page's Academy band ("Not just *how.* Also *why.*") **only**, and carries the
  `.academy-feature--photo` modifier in `styles.css` because the frame is low-key and needs far less of the dark
  overlay than the brighter placeholder shots. Untouched upload: `academy-touchup-original.jpeg`.
- `bridal-editorial.jpg` (928 × 1152) and the unused `salon-styling.png` remain **art-direction placeholders** —
  replace them with Kakoly-approved images before the site is promoted publicly. The bridal image was 2.3 MB as a
  PNG; the JPEG is 140 KB and is used at `./public/images/bridal-editorial.jpg`. The untouched original is kept as
  `bridal-editorial-original.png` for re-crops.
- `index.html` uses relative `./` paths throughout. Keep `index.html`, `styles.css`, `app.js` and the `public`
  folder at the top level of the repository.

## Publish it (no coding needed)

1. Sign in or create an account at https://github.com.
2. Click **+** (top right) → **New repository**.
3. Name it `glitz-glamour-site`; choose **Public**; click **Create repository**.
4. On the empty repository page, click **Add file** → **Upload files**.
5. Unzip the website package on your computer. Upload the files *inside* this folder (`index.html`, `styles.css`,
   `app.js`, `README.md`, and the `public` folder). Keep the folder structure as it is. Do not upload the zip itself.
6. Click **Commit changes**.
7. In the repository, open **Settings** → **Pages**.
8. Under **Build and deployment**, choose **Deploy from a branch**. Select branch **main** and folder **/(root)**,
   then click **Save**.
9. Wait a minute or two. Refresh **Settings → Pages** and open the link GitHub gives you.

If you see a 404 at first, give GitHub another minute and refresh.

---

Website by [Nu.ance Studios](https://www.nuancestudios.co.in).
