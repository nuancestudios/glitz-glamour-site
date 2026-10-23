# Mobile compatibility pass — iPhone

**Site:** `nuancestudios/glitz-glamour-site`
**Branch:** `arena/0f470223-glitz-glamour-site`
**Date:** 23 Oct 2026

Six issues were reported from an iPhone. All six are fixed, and the whole site was then
re-checked at 320 / 360 / 375 / 390 / 430 / 768 / 844×390 across every page.

---

## 1. What was actually wrong

### The emoji problem had one root cause

iOS renders any character the page's fonts do not carry as **Apple colour emoji**. The
design used text glyphs for decoration:

| Character | Where it was used | What iPhone showed |
|---|---|---|
| `✳` U+2733 | hero marquee separators, page-hero swirl, the "True luxury lies in expertise" seal | the **green eight-spoked asterisk emoji** |
| `↗` U+2197 | Book / enquire, every button and text link, card arrows, service toggles | blue Apple arrow-in-box emoji |
| `✆` `✉` `◎` | Contact page phone / mail / Instagram marks | emoji |
| `★` | review stars, footer rating link | emoji |

This explains all three symptoms in the report: the Book / enquire arrow, the
"True luxury lies in expertise" seal, and the moving marquee bar. Nothing was
mis-styled — the browser was substituting emoji for missing glyphs.

**Fix:** every one of these is now an inline SVG from a single sprite at the top of
`index.html` (`<symbol id="i-arrow">`, `i-aster`, `i-star`, `i-chat`, `i-phone`,
`i-mail`, `i-insta`, `i-minus`), rendered through `ic('arrow')` in `app.js` and coloured
with `currentColor`. No decorative character is left in the markup — only em dashes,
apostrophes and the middle dot, which every font has.

### "Two ways in. One standard." cards were cut off

`.offer-grid--two{grid-template-columns:repeat(2,1fr)}` was declared in the section
added at the *bottom* of `styles.css`, i.e. **after** the `@media(max-width:720px)`
block. It therefore overrode the mobile single-column rule, leaving two 166 px cards on
a 390 px phone with `overflow:hidden` — copy spilled out of the bottom-right of each
card, exactly as reported.

**Fix:** the two-up grid now collapses to one column at ≤720 px (declared after the
desktop rule), and the cards' fixed `min-height` no longer fights the content.

### Also found while auditing

- **The hero forced the whole document wider than the screen at 320 px.** `.hero-facts`
  was a non-wrapping flex row, so at 320 px the hero row was 315 px wide + 22 px padding
  and the copy column hung 17 px off-screen. Facts now wrap.
- **Header crowding at 320–375 px** — the tagline under the wordmark now drops below
  380 px, the toggle and CTA are proper 44 px targets.
- **iOS input zoom** — all form fields were 11 px; iOS Safari auto-zooms any focused
  field under 16 px. Fields are now 16 px on touch widths.
- **Date field** — the blanket `appearance:none` reset had stripped the native date
  control; date inputs now keep the iOS wheel picker and get explicit styling.
- **WhatsApp hand-off** — the form used `window.open(...)`; on iOS Safari that returns
  `null` even on success, so users saw a spurious "if it did not open…" warning. It now
  uses a synthetic anchor click and a neutral confirmation.
- **Mistaps from late image layout** — the bridal hero image had no `width`/`height`, so
  the page re-flowed under the thumb as images loaded. All images now carry intrinsic
  dimensions, the hero image is eager-loaded with `fetchpriority="high"`, and the rest
  are lazy + `decoding="async"`.
- **Weight** — the bridal hero was a **2.3 MB PNG**; it is now a 140 KB progressive JPEG
  (`bridal-editorial.jpg`, 928×1152). The original is kept as
  `bridal-editorial-original.png`.
- **Colour contrast** — hairline gold `#b58c5c` measured **2.7:1** as text on cream, and
  muted grey was 4.05–4.41:1. Introduced `--gold-ink:#755427` for text (4.6–6.1:1),
  darkened `--muted` to `#665552`, and darkened the sage "third card" tone. All rendered
  text now passes WCAG AA.
- **Touch feedback / sticky hover** — `:hover` rules no longer stick after a tap
  (`@media(hover:none)` guards) and `:active` feedback is provided instead.
- **Safe areas** — the fixed quick-contact bar, footer and toast respect
  `env(safe-area-inset-*)`, so nothing sits under the iPhone home indicator; landscape
  keeps content clear of the notch.
- **Menu** — closes on outside tap, on Escape, on route change and on rotation to
  desktop; the button swaps to a close icon and updates its `aria-label`.
- **Overflow clipping** — `body{overflow-x:hidden}` was replaced with
  `overflow-x:clip` (with `hidden` as fallback) because `hidden` on `html`/`body`
  breaks `position:sticky` in iOS Safari.

---

## 2. Verification (headless Chromium, iPhone-class viewports)

| Check | Method | Result |
|---|---|---|
| Emoji glyphs in rendered text | DOM text walk over every page, scanning the symbol/emoji Unicode ranges | **0 found** (35 viewport × page combinations) |
| Horizontal overflow / clipped content | bounding-box + `scrollWidth` audit | **0** |
| Tap targets | every link, button, select and input measured | **0 under 24 px**, 44 px on all primary controls |
| Focus-zoom | input font sizes | all **16 px** on touch widths |
| Icon sprite integrity | every `<use href>` resolved and measured | all render, none collapsed |
| HTML validity | `html-validate` on the live DOM of all 5 routes | **5/5 valid** |
| CSS validity | `csstree-validator` | clean (the one `env()` notice is a validator limitation, not a CSS error) |
| Contrast | WCAG AA ratio computed for every text node with its blended background | **all pass** |
| Layout shift | `PerformanceObserver` layout-shift, full scroll of each page | **CLS 0.000** |
| Interaction | menu, service accordion, review filters, enquiry form → WhatsApp link, validation, reduced-motion | **17/17 pass** |
| JS errors | console + pageerror listeners | **none** |

Viewports covered: 320×568, 360×780, 375×667, 390×844, 430×932 (portrait),
768×1024, and 844×390 (landscape).

---

## 3. Files changed

| File | Change |
|---|---|
| `index.html` | icon sprite added; header/topline/footer icons replaced; `viewport-fit=cover`, `color-scheme`, `format-detection`; short topline label for phones |
| `styles.css` | icon system; mobile breakpoints (720 / 420 / 380 / short-landscape); touch targets; 16 px fields; safe-area insets; hover/active guards; contrast tokens; sticky-safe overflow handling; stat strip and offer card fixes |
| `app.js` | `ic()` icon helper; intrinsic image dimensions + eager hero; menu behaviour; accordion `aria-expanded`/`aria-controls`; WhatsApp hand-off; inline styles moved into classes |
| `public/images/bridal-editorial.jpg` | new 140 KB progressive JPEG (replaces 2.3 MB PNG at point of use) |
| `public/images/bridal-editorial-original.png` | original retained |
| `README.md` | icon + mobile conventions documented so the emoji problem is not reintroduced |

---

## 4. Open items (not blocking, client-side)

- `bridal-editorial.jpg` and `salon-styling.png` are still art-direction placeholders.
- Course names, durations and fees remain unconfirmed (Q8 unanswered).
- The Academy crest used in the header is `logo-mark-96.png` (client-supplied), not an
  emoji — if it ever appears green/tinted, it is a cached older build; hard-refresh the
  page.
