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

## Housekeeping

- `public/images/academy-class.jpg` is **client-supplied photography** (a live masterclass demonstration) and replaces
  the earlier placeholder. `academy-class-square.jpg` is a square crop of the same frame, used in the founder band on
  Home, where the slot is taller than wide. The untouched upload is kept as `academy-class-original.jpeg` for re-crops.
- `public/images/academy-touchup.jpg` is also client-supplied — a make-up touch-up at a lit dressing table. It is used
  for the Home page's Academy band ("Not just *how.* Also *why.*") **only**, and carries the
  `.academy-feature--photo` modifier in `styles.css` because the frame is low-key and needs far less of the dark
  overlay than the brighter placeholder shots. Untouched upload: `academy-touchup-original.jpeg`.
- `bridal-editorial.png` and the unused `salon-styling.png` remain **art-direction placeholders** — replace them with
  Kakoly-approved images before the site is promoted publicly.
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
