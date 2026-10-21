# Glitz & Glamour — Discovery Audit v2 (consolidated register)

**Site:** `nuancestudios/glitz-glamour-site`
**Client:** Kakoly Sengupta — Glitz & Glamour Academy & Boutique Salon, Santoshpur, Kolkata
**Sources:** *Brand & Website Discovery* response (CSV, submitted 20 Oct 2026) + the **Google Forms export (PDF)** which includes the full question and option text · *Complete Package — Final Scope* (4 Oct 2026) · Nu.ance AI Context Brief
**Revised:** 21 Oct 2026 — supersedes v1

> The PDF is the same single response as the CSV, just exported (the 21/10 timestamp is the print time). Its value is different: **it shows the options she was offered and did not pick.** That turns four previously ambiguous answers into deliberate decisions — see §2.

---

## 0. Status — what has since been implemented

**Fixed in the current build (21 Oct 2026):** F1, F2, F3, F4 *(used our own intake record `@ikakolysengupta` — confirm with client)*, F5, F6, F7, F9, F10, F11, F12, F13, F14, F15, F16, F17, F18, F19, F20, F22, F30, F31, F32, F26 *(partial — per-page meta, OG title/description, JSON-LD; no canonical or per-page OG images)*. F8 resolved by removing the unverified founding year rather than asserting one.

**Deliberately deferred:** F21 (email route — needs a spend approval), F23 (course names — Q8 unanswered; the Academy now presents four *disciplines* rather than invented courses), F24 (Portfolio — blocked on client photography), F25 (GA4), F27 (real URLs), F28 (domain), F29 (image weights — placeholders, to be replaced).

**Still open with the client:** G1–G7 in §4.

---

## 1. Verdict

The build looks right and behaves right. What the PDF clarifies is that **we have misread her priorities in three places**, and that **she has already given us the exact approved copy we're not using.**

Her form told her, in the question text, that we hold *30+ years and City & Guilds Level 4* and asked for the **exact approved wording** of her credentials. She supplied four credentials. The site shows one. Same story with her business description: the form said *"we will use this description to reference your business on the Website and Social Media"* — she wrote 200 words including a tagline — and the site uses none of its structure.

Meanwhile three of her stated priorities are structurally absent: **Academy enquiries** (her outcome #1), **presentation of her work** (outcome #2), and **Dermalogica / Davines** (her salon proof). And there are still **six factual errors** that would ship her name, email and Instagram handle wrong.

Nothing here needs a redesign. But this is more than a polish pass: call it **~2 focused build days** of unblocked work, plus one chase email to her.

---

## 2. What the PDF settles — four decisions, no longer open

| Question | Options she was given | She picked | What it means for us |
|---|---|---|---|
| **Q4 — Academy relationship** | part of the same brand · **named sub-brand** · separate brand · not sure | **"It is a separate brand"** | She rejected "same brand" *and* "named sub-brand" explicitly. This isn't ambiguity — it's a decision. **Two brands, one roof, equal billing.** Retire the site's "One studio. Three ways in." model. |
| **Q6 — Outcomes** | more bridal enquiries · more Academy enquiries · clearer professional presence · easier to understand · **easier to enquire/book** · better presentation of work | **More Academy enquiries + Better presentation of my work** | She actively rejected *"a clearer, more professional online presence"* and *"an easier way for people to enquire or book."* **Design polish is not her concern; her work and her Academy are.** This re-prioritises the entire backlog — and means the missing Portfolio page is a headline failure, not a nice-to-have. |
| **Q7 — Prominence** | bridal & makeup · The Academy · salon & hairstyling · **equal prominence** | **"Give the service and Academy sides equal prominence"** | Note the option text: **two** sides — *"the service and Academy sides."* The site splits into **three** lanes (Bridal / Salon / Academy). We resolved a binary question with a ternary answer. |
| **Q16 — Permissions** | yes, everything · some items · need to check · no materials | **"Yes, permission is confirmed for everything shared"** | She rejected the cautious options. But **what she shared was reviews and a listing link — no photographs.** So: reviews are cleared ✅, the AI placeholder imagery is **not** ⛔. |

**The fifth thing the PDF reveals, and the sharpest finding in this audit:**

> **Q14's question text reads: *"We have @ikakolysengupta. Please correct it if needed."* — she did not correct it.**
> **The site uses `@ikakolisengupta`.**
>
> Our own intake record has a **Y**; the website has an **I**. The Kakoli/Kakoly error has propagated into the Instagram link. One of the two is a dead or wrong profile, and it is linked from the header, footer and every page.

---

## 3. Master register

**Severity** — P0: ships wrong / harms the business · P1: her explicit ask, missing · P2: scope owed · P3: polish
**Effort** — S: under 30 min · M: 1–2 hrs · L: half-day or more

### P0 — Factual. Fix regardless of any other decision.

| ID | Finding | Evidence | Fix | Eff |
|---|---|---|---|---|
| **F1** | Her name is misspelt **17 times** | `Kakoli` ×14 in `app.js`, ×3 in `index.html`. `Kakoly` ×0. | Global replace. Leave the Google review quotes alone — they legitimately contain "Kakoli". | S |
| **F2** | **Email is wrong** | Site: `glitzndglamour22@gmail.com`. She gave: `kakolina2002@gmail.com`. | Replace in `app.js` (`email` const). Highest-risk line in the codebase. | S |
| **F3** | **Two contact numbers collapsed into one** | Site has `+91 98363 81831` labelled "Call or WhatsApp". She gave WhatsApp **9836381831** *and* telephone **9835231831**, as separate channels. | Add both; split "Call now" from "WhatsApp". | S |
| **F4** | **Instagram handle mismatch** + unconfirmed second profile | Site `@ikakolisengupta`; our form records `@ikakolysengupta`; she added *"I have one more academy profile will let you know shortly."* | Confirm which is live. Do not launch with a guess. | S (after her reply) |
| **F5** | **Full business name absent** | She gave "Glitz & Glamour Academy and Boutique salon" (Q1) and "Academy & Boutique Salon" (Q2). Site uses bare "Glitz & Glamour"; the full name appears only inside testimonial disclaimers. | One canonical lockup — recommend **"Glitz & Glamour Academy & Boutique Salon"** — in header, footer, `<title>`, schema. Get her sign-off on `&` vs `and` and `salon` vs `Salon`; she was inconsistent. | M |
| **F6** | Landmark missing from address | She supplied *"Land mark - near Suryodaya school."* Site omits it. | Append. Santoshpur is navigated by landmark. | S |
| **F7** | **Seven internal notes are live on the public site** | "…should be confirmed with the client before launch", "please reconfirm before launch", "Instagram · please confirm spelling", "Confirm with the client that quoting these reviews…is approved", "reflect publicly listed programme categories", "art-direction placeholders", "*listed online". | Delete all. Replace the review note with a plain credit — she has confirmed permission (Q16). | S |
| **F8** | Public contradiction on founding date | "Est. **2006**" (home + Academy) vs "**2003** — clients still with us since" (Testimonials). A visitor can see both. | She must arbitrate. Then state it once, without an asterisk. | S (after her reply) |

### P1 — Her differentiators and explicit asks

| ID | Finding | Evidence | Fix | Eff |
|---|---|---|---|---|
| **F9** | **Dermalogica — 0 mentions** | She is a **Dermalogica Specialist**; "advanced Dermalogica skincare treatments" (Q2, Q10). Site says "Beauty & skin services … personal beauty-care appointments." | Name it in Services, About and Academy. This is her strongest salon-side proof point. | M |
| **F10** | **Davines — 0 mentions** | "Davines professional haircare and colour services" (Q2). Site says "haircut & colour". | Name it against hair colour. | S |
| **F11** | **Vidal Sassoon teacher training — 0 mentions** | Q10, approved wording. | Add to credential stack. For an educator, the teaching credential *is* the product. | S |
| **F12** | **London Makeup Academy — 0 mentions** | Q10, approved wording. | Add. Her makeup artistry is currently unevidenced. | S |
| **F13** | **Online programmes — 0 mentions** | Q12: *"in-person professional training as well as selected online educational programmes."* Site says "hands-on, in small groups" only. | Add. This currently **excludes every student outside Kolkata** — directly against her goal of being known *"beyond Kolkata"* (Q5). Commercially the most expensive omission on the list. | M |
| **F14** | **"By appointment" never stated** | Q5, Q9, Q12 all describe an exclusive, consultation-first business. | State it in the hero, Services and Contact. Site currently reads as walk-in. | S |
| **F15** | **Her tagline unused** | *"Luxury Services. Expert Training."* (Q2) vs ours: "Beauty with a point of view." / "Beauty, made personal. Craft, passed on." | Ours are good lines; hers is a positioning statement. Test hers in the lockup and keep ours as supporting copy. | S |
| **F16** | **Her approved business description unused** | The form said it would be used *"to reference your business on the Website and Social Media"*. Site uses none of its structure — including **"One Destination. Two Expressions of Excellence."**, which answers the architecture question. | Use her substance as the spine; keep Nu.ance craft in the sound. Adopt "Two Expressions" as the architecture line. | M |
| **F17** | **No floating WhatsApp / Call bar** | Q13 asks for *"clearly visible WhatsApp, Call Now and Enquire Now options."* Site has one header button; WhatsApp is footer-only. | Sticky mobile bar. Standard, high-yield for this market. | M |
| **F18** | **Enquiry form is one, not three** | Q13: *"separate enquiry forms for Salon Services, Bridal Makeup and Academy Courses."* | Three distinct intents (distinct entry points or clearly separated panels). | M |
| **F19** | **Bridal form misses required fields** | Q13 requires **name, event date, location, required services**. Form has name, phone, interest, date, message — **no location**. | Conditional location field for Bridal. | S |
| **F20** | **Academy tab still says "Preferred date"** | `#date-label` is never updated on tab switch; only the WhatsApp body relabels it. | Switch to "Preferred batch / start date". | S |
| **F21** | **No email route for enquiries** | Form → WhatsApp only. Q13 asks for official channels incl. email. | Decide: Formspree / Netlify Forms / Google Form. Small recurring cost — she must approve per Scope §07. | M |
| **F22** | **Service list doesn't match her six** | She selected exactly: Bridal makeup · **Bridal hairstyling** · Occasion/party makeup · Hairstyling · Salon services · Education — and did **not** select "Other". Site adds **"Fashion & session artistry"** (not hers) and folds bridal hair into "Bridal makeup & hair". | Remove or get approval for fashion/session. Split bridal hairstyling out. | M |
| **F23** | **Unverified course list + trademark** | 10 courses, durations ("3-month certificate / 6–12 month diploma") and **"HydraFacial"** all trace to a *public directory listing*, not to her. Q8 — the question that would have answered it — is blank (see §4). | Hold the list; get hers. Remove the HydraFacial/PMU/airbrush line until confirmed. | M (after her reply) |

### P2 — Scope we've contracted and not delivered

| ID | Finding | Evidence | Fix | Eff |
|---|---|---|---|---|
| **F24** | **Portfolio page missing** — now a headline gap | Scope §02.4. `#/portfolio` redirects to Testimonials; dead `.gallery-*` CSS still in `styles.css`. Her **outcome #2** is *"better presentation of my work and experience."* | Rebuild. **Blocked on photography** — F32. | L |
| **F25** | **Analytics absent** | Scope §05. Zero `gtag` / `dataLayer` / event handlers. | GA4 + events: form submit, WhatsApp, phone, Instagram, booking intent, Academy intent. | M |
| **F26** | **SEO foundation half-built** | Scope §01. Per-route `<title>` ✅ but **one static meta description for all 5 pages**, no canonical, no OG/Twitter cards, no `BeautySalon`/`LocalBusiness` JSON-LD (address, phone, hours, rating). | Per-page meta, OG, JSON-LD. Highest-leverage technical SEO for a local salon. | M |
| **F27** | **Whole site indexes as one page** | Hash routing (`#/academy`, `#/services`). | Convert to real URLs. Cheap now, expensive after launch — and her stated goal is reach beyond Kolkata. | L |
| **F28** | Domain not wired | Scope §03 `glitzandglamouracademy.com`. No `CNAME`; still on a Pages project URL. | Decision + DNS. **See the naming caution in §5.** | S + DNS |
| **F29** | **~7.9 MB of placeholder PNGs** | 2.79 MB + 2.40 MB + 2.71 MB. `salon-styling.png` is **referenced nowhere**. Hero asset is 928×1152 — low for retina. | Drop the unused file; convert to WebP/AVIF ≈ 150–250 KB each. | S |

### P3 — Polish

| ID | Finding | Evidence | Fix | Eff |
|---|---|---|---|---|
| **F30** | "Showing **9** of 103 reviews", but **8** cards render | `reviews[]` has 8 entries. | "8 of 103", or add a ninth. | S |
| **F31** | Headline testimonial contains a typo that looks like ours | *"At **Guild** and Glamour Academy…"* — verbatim from the review, presented as a designed feature rather than in the review wall. | Keep verbatim, add `[sic]`, or use a different quote for that slot. | S |
| **F32** | No privacy note on the form | Collects name, phone, date. | One line on what happens to the data. | S |
| **F33** | Academy stock claim unsourced | "hands-on, **in small groups**" — not in her answers. | Confirm or drop. | S |

---

## 4. Where her response has gaps (chase list — blocking)

| # | Gap | Detail |
|---|---|---|
| **G1** | **Q8 is blank** | Her Q8 answer is a verbatim copy of Q9. Q8 asked: *"For each important one, include its name, what it includes, who it is for, and any price, fee or upcoming batch information."* **We have no answer on what to feature first.** This is why F23 relies on a directory listing. Re-ask, with the question restated. |
| **G2** | **No logo, no photography, no student work** | Q15 explicitly invited *"a Google Drive folder link… grouping photos by bridal, makeup, hair, salon or Academy work."* She returned a Google Business share link and *"You will get the testimonials from the reviews."* So the request was clear and unmet — **this is a chase, not our failure.** Blocks F24 and every image on the site. |
| **G3** | Instagram | Neither handle confirmed live; second Academy profile promised. Blocks F4, and Scope §04 if the Academy has its own account. |
| **G4** | Founding year | 2003 or 2006? Blocks F8. |
| **G5** | Name spelling in writing | `Kakoly`, and the exact lockup. She was inconsistent on `&`/`and` and `salon`/`Salon`. Blocks F1, F5. |
| **G6** | Actual course list | Names, inclusions, duration, eligibility, certification, whether online is running now. Blocks F23. |
| **G7** | Q11 is generic | The form asked for *"a specific example or a comment you hear often."* She gave a description. **Mitigation:** her 103 Google reviews already supply specifics — mine them rather than chase her. |

---

## 5. Brand architecture — the one decision, now much clearer

The PDF shows she chose **"separate brand"** after being offered **"part of the same brand"** and **"named sub-brand."** Combined with *"Give the service and Academy sides equal prominence"* and her own line *"One Destination. Two Expressions of Excellence,"* the model is unambiguous:

> **One business, two distinct brands, equal billing, bridal as the flagship service rather than a third pillar.**

The site currently runs a three-lane model — *"One studio. Three ways in."* — which is a different idea, and it demotes the Academy to "a way in".

| | Option A — light (recommended) | Option B — full |
|---|---|---|
| **Change** | Keep three cards; reframe as two pillars with bridal as flagship. Add "Boutique Salon" as a named entity in the lockup. Hero CTA splits: **"Book a salon appointment"** / **"Explore the Academy"**. | Nav rebuilt as Salon / Academy, distinct identity treatment per side, Bridal becomes the hero service inside Salon. |
| **Cost** | ~4 hrs | ~1.5 days + needs her to confirm the Academy has its own name, logo and Instagram |
| **Risk** | Low | Costs bridal the top-level slot — which is where most revenue and most of the 4.9★ reviews come from |

**I'd hold Option B** until she sends the second Academy profile. If that profile has its own name and mark, B becomes correct — and this stops being a design task and becomes a second identity project with commercial implications.

> **⚠️ Naming caution for us (Scope §03).** The domain in our scope is `glitzandglamouracademy.com`. That gives the Academy 100% of the brand equity and the Boutique Salon 0% — the exact inverse of "equal prominence." Raise this **before** the domain is bought and DNS pointed. `glitzandglamour.in` / `.com`, or a neutral umbrella, would serve the two-brand model better.

---

## 6. What I would not change

Protect this work from the churn:

- **The visual system.** Wine / ivory / gold / sage with Playfair + DM Sans reads exactly as *"understated luxury"* — her words. Correct direction, and she explicitly did **not** ask for visual change (she rejected "clearer, more professional online presence").
- **The review wall.** 4.9★ / 103 reviews, verbatim, filterable, dated and named. The most persuasive thing on the site, and honest. Only refresh the numbers if they've moved.
- **No published prices.** She wants fees discussed personally (Q9, Q13). Resist "conversion optimisation."
- **No automated booking.** Same reasoning. The WhatsApp handoff respects her process.
- **Course-level prefill** (`data-enquire`) — small, genuinely good UX. Keep.
- **Nothing fabricated.** Everything traceable to Google. Keep it that way.

---

## 7. Sequence

| Phase | Contents | Effort | Blocked? |
|---|---|---|---|
| **A — Corrections** | F1–F8, F30, F32 | ~2.5 hrs | F4/F8 need her reply; the rest can ship now |
| **B — Her differentiators** | F9–F16 | ~4 hrs | No — we have the approved copy already |
| **C — Enquiry conversion** | F17–F21, F22 | ~4 hrs | F21 needs a spend approval; F23 waits on G6 |
| **D — Scope completion** | F24–F29 | ~2 days | F24 blocked on G2 |
| **E — Launch** | F28 + final sign-off | ~2 hrs + DNS | After A–D |

**Phase A can go today.** Phase B is the highest value-per-hour on the list — it's all copy we already have in writing, and it addresses both of her chosen outcomes.

---

## 8. Decision sheet

Tick what you want and I'll build it. My recommendation in bold.

- [ ] **Phase A — corrections** *(recommended, do regardless)*
- [ ] **Phase B — Dermalogica / Davines / credentials / online / by-appointment** *(recommended — best ROI on the list)*
- [ ] Phase C — floating WhatsApp+Call bar, three form intents, bridal fields, email route
- [ ] Phase D — Portfolio, GA4, JSON-LD, real URLs
- [ ] **Option A architecture** *(recommended)* — or [ ] Option B
- [ ] Send her the §4 chase list first
- [ ] Raise the domain-naming caution (§5) before DNS

---

*Audit only — no site files modified. The current build is running at port 8000 for comparison.*
