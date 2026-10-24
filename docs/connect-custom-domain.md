# Connecting your new domain (bought on Squarespace) to this website

**Short version:** your website already lives in two places — the code lives in GitHub, and GitHub is *already*
showing it at `https://nuancestudios.github.io/glitz-glamour-site/`. Buying a domain doesn't move the website.
It just gives it a prettier front door. Your job is to tell the domain **"when someone types my name, send them
to GitHub."** That's all this is.

---

## The 5-year-old picture

Think of it like a shop:

| Thing | What it is | In your case |
| --- | --- | --- |
| **The shop** | Where the website actually sits | GitHub Pages (already open, already working) |
| **The address board** | A list that says "this name → that shop" | DNS, managed at Squarespace |
| **The name** | What customers say | `yourdomain.com` |

Right now the address board says: *"`yourdomain.com` → a Squarespace parking page. Nobody's home."*
We're going to erase that line and write: *"`yourdomain.com` → GitHub's shop."*

Squarespace is only the **landlord of the name**. The website is **not** going to live at Squarespace. So when
Squarespace keeps asking you things like *"which site should this domain connect to?"* — that's a Squarespace
website question, and the answer for you is **no Squarespace website**. Ignore those prompts. We only want the
**DNS** screen.

---

## Do it in this order (important)

**GitHub first, DNS second.** GitHub's own security guidance says: claim the domain inside GitHub *before* you
point DNS at it. If you do it backwards, there's a small window where someone else could claim your domain on
GitHub Pages and serve their own site on it.

So: **Step 1 → Step 2 → Step 3.**

---

## Step 0 — What you need open

- Your GitHub account that owns `nuancestudios/glitz-glamour-site` (you can also ask me to do this part).
- Your Squarespace account, at <https://account.squarespace.com/domains>.
- Your domain name, written down exactly. In the steps below I'll call it `yourdomain.com`.

Decide which is your **main address**:

- **Option A (recommended):** `yourdomain.com` is the real thing, and `www.yourdomain.com` redirects to it.
  This is what the steps below set up. GitHub does the redirect for free once both records exist.
- **Option B:** `www.yourdomain.com` is the real thing, and the bare domain redirects to it. Also fine — just
  use `www.yourdomain.com` wherever I say "the domain" in Step 2. Everything else is identical.

---

## Step 1 — Teach GitHub the new name (5 minutes)

1. Go to the repo: <https://github.com/nuancestudios/glitz-glamour-site>
2. Click **Settings** (top row of tabs — you must have admin on the repo).
3. In the left sidebar, under *Code, planning, and automation*, click **Pages**.
4. Under **Custom domain**, type your domain — e.g. `yourdomain.com` (no `https://`, no `www`, no trailing slash).
5. Click **Save**.
6. GitHub will now say something like **"DNS check unsuccessful"** in a yellow/red box, and may offer a
   *Check again* button.

**This error is expected. Do not panic and do not undo it.** GitHub is saying "I've written your name on my
door, but the address board outside (Squarespace) still points at Squarespace." That's literally the next step.

> What just happened behind the scenes: GitHub committed a tiny file called `CNAME` to the root of your `main`
> branch. That file is how the repo remembers its own domain. Leave it alone.

---

## Step 2 — Change the address board at Squarespace

> ⚠️ **The single most common failure here:** Squarespace ships your domain with a block of records called
> **"Squarespace Defaults"** that point at Squarespace's own parking servers. If you leave those in place and
> just add GitHub's records, Squarespace will refuse with errors like *"This name record is already in use"* or
> *"Invalid DNS record."* **You must delete the defaults first.** Squarespace support confirms this:
> > "The Squarespace Defaults need to be removed first before you can point the domain away from Squarespace."

### 2a. Get to the right screen

1. Sign in and go to <https://account.squarespace.com/domains>.
2. Click your domain name.
3. In the side panel click **DNS**, then **DNS Settings**.
4. Scroll to the **Squarespace Defaults** section. It will contain roughly four `A` records with the IPs
   `198.185.159.144`, `198.185.159.145`, `198.49.23.144`, `198.49.23.145`, plus a `CNAME` for `www` pointing at
   `ext-sq.squarespace.com`. (If the domain came over from Google Domains, there may also be a weird random-looking
   `CNAME` ending in `.googlehosted.com` — that's normal, but it can go too.)
5. Click the **red trash can** next to **Squarespace Defaults** and confirm **Delete**.

Now the board is blank, and everything below is *Custom Records*.

### 2b. Add the 5 records GitHub needs

Scroll to **Custom Records** → **Add record**. (Squarespace will make you re-enter your password or do your 2FA
here. That's not a bug — it's because DNS changes can break a website, so they double-check it's really you.)

What the fields mean, since they are the "random things" being asked:

| Field on the form | What it actually means | What to put |
| --- | --- | --- |
| **Type** | What *kind* of note this is | `A` or `CNAME` (see table below) |
| **Name** / **Host** | Which door of your building. `@` = the main front door (`yourdomain.com`). `www` = the `www.` door | `@` or `www` |
| **IP Address** / **Data** | Where to send the visitor | the GitHub value below |
| **TTL** | How long the internet memorises the note (in seconds) | **5 minutes** while setting up — see below |

**Add these four `A` records** (Type = `A`, Name = `@`), one at a time:

| Type | Name | IP Address (Data) |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

**Then add one `CNAME` record:**

| Type | Name | Data |
| --- | --- | --- |
| CNAME | `www` | `nuancestudios.github.io` |

Notes:

- `nuancestudios.github.io` is **not** `nuancestudios.github.io/glitz-glamour-site` — no slash, no folder, ever.
  CNAME values are names only, never paths.
- No trailing dot, no `https://`. Exactly `nuancestudios.github.io`.
- **Do not touch the nameservers.** Leave them on Squarespace's defaults (`ns1`/`ns2.squarespacedns.com` or
  similar). If you change nameservers, anything you typed above stops applying.
- **Do not add a wildcard `*` record.** GitHub explicitly warns that wildcards are a takeover risk.

When done, Custom Records should show **4 × A** and **1 × CNAME**, and Squarespace Defaults should be **gone**.

### 2c. About the TTL ("4 hrs")

`4 hrs` is Squarespace's default (14400 seconds) and it's a perfectly fine everyday value — it does **not** slow
your site down. It only means *"the internet may remember this answer for up to 4 hours."*

But while you're setting up, set it to **5 minutes** (300 seconds) on all five records. Squarespace has a TTL
dropdown with presets plus a *custom value in seconds* box. Reason: if you typo an IP address, the wrong answer
gets stuck in caches for four hours and you'll be debugging a mistake you already fixed. At 5 minutes, you fix it
and re-test in minutes.

Once the site is live on the domain, HTTPS is enforced and everything has been stable for a few days, raise the
TTL back to `4 hrs` (or `1 hr`). Don't go below 300 seconds — resolvers clamp it anyway and you just add query load.

One thing this does **not** fix: lowering the TTL now can't un-cache answers that are already out there. The
Squarespace Defaults you deleted had their own 4-hour TTL, so a device that looked up the domain earlier can
still show the parking page for up to 4 hours. Test in a private window or on mobile data to dodge that.

---

## Step 3 — Wait, then flip the HTTPS switch

1. DNS changes usually take **10 minutes to a few hours**; Squarespace officially says *up to 48 hours*, GitHub
   says *up to 24*. In India, Squarespace/Google DNS is usually fast — often under 30 minutes.
2. Go back to **GitHub → Settings → Pages**. Click **Check again** in the DNS box until the error goes away and
   GitHub shows **"Your site is published at https://yourdomain.com"**.
3. Once GitHub has issued the free certificate (minutes to ~24 hours), the **Enforce HTTPS** checkbox becomes
   available. **Tick it.** This gives you the padlock and is required for a professional-looking salon site.
   If it's greyed out, the certificate isn't ready — wait and come back; don't disable/enable the domain over and
   over, that resets the timer.

### How to check it's really working

- Open `https://yourdomain.com` in a **private/incognito window** (so you don't get a cached old version).
- Open `https://www.yourdomain.com` — it should land on the same site, not a Squarespace page.
- The old URL `https://nuancestudios.github.io/glitz-glamour-site/` should **redirect** to your domain. That's
  normal and means everything is wired correctly.
- Optional geek check: <https://dns.google/query?name=yourdomain.com&type=A> — you should see the four
  `185.199.1xx.153` addresses and nothing from Squarespace.

---

## Does any code need to change? No.

I checked the repo for this: `index.html`, `app.js` and `styles.css` use **only relative paths** (`./styles.css`,
`./public/...`), there are no hardcoded `github.io` links, no `<base>` tag, and no `canonical`/`og:url` pointing
at the old address. A GitHub Pages **project** site with a custom domain is served from the domain **root**
(`https://yourdomain.com/`, not `/glitz-glamour-site/`), and relative paths work there exactly the same way.
So the moment DNS resolves, the site appears — no deploy, no rebuild, nothing to push.

---

## Troubleshooting — the things that actually go wrong

| Symptom | Cause | Fix |
| --- | --- | --- |
| Squarespace: *"This name record is already in use"* / *"Invalid DNS record"* | Squarespace Defaults still present | Delete the **Squarespace Defaults** block (red trash can) first, then add your records |
| Squarespace refuses the record with no clear reason | You used `@` for a **CNAME** — CNAMEs can't sit on the bare domain | `@` records must be `A`. `www` is the `CNAME` one |
| GitHub: *"CNAME already taken"* | That domain is already attached to some other GitHub Pages site | Check your other repos' Pages settings and remove it there first |
| GitHub: *"Domain does not appear to be properly configured"* after hours | Typo in an IP, or you edited a record instead of deleting it | Re-enter the four IPs exactly; `dig`/dns.google check |
| Site loads on `http://` but not `https://` | Certificate not issued yet | Wait up to 24h, then tick **Enforce HTTPS** |
| Banner: *"Both `yourdomain.com` and its alternate name are improperly configured" (NotServedByPagesError)* **while the site actually loads** | GitHub's DNS check is cached from before your records propagated. The check is a separate background job from the actual serving path — the site can be live while the banner is stale | Do **not** remove and re-add the domain. Click **Check again** once, then leave it; it clears within a few hours. Verify independently at <https://dnschecker.org> and by loading the site yourself |
| You fix a typo but *nothing* changes for hours | TTL was left at 4 hrs, so the wrong answer is cached | Drop TTL to 5 min on all records, retest in a private window / on mobile data |
| Squarespace keeps emailing *"your domain isn't connected to a site"* | True — it's connected to GitHub, not Squarespace | Ignore the emails. Do **not** click "connect to a site" |
| Your site breaks after you delete defaults | You deleted the defaults *before* Step 1, so nothing was claimed in GitHub | Redo Step 1, or re-add records |

---

## Later, when you want to polish (not required)

- **Social sharing preview:** `index.html` has `og:image` as a relative path (`./public/images/logo-mark.png`).
  Facebook/WhatsApp/LinkedIn prefer an **absolute** URL (`https://yourdomain.com/public/images/logo-mark.png`),
  and adding `og:url` helps too. Worth doing once the domain is live.
- **Email on the domain** (e.g. `hello@yourdomain.com`): that's a separate set of `MX`/TXT records at Squarespace,
  added *alongside* the ones above. Currently the site publishes a `gmail.com` address, so this is optional.
- **`robots.txt` / `sitemap.xml`:** small courtesy files for Google. Nice to have before you submit the site to
  Google Business Profile / Search Console.

---

## Update — live on 24 Oct 2026

Verified from outside the network, so this is not browser cache:

| Check | Result |
| --- | --- |
| `glitz-glamour.com` A records | `185.199.108.153`, `.109.153`, `.110.153`, `.111.153` — all four GitHub Pages IPs |
| `glitz-glamour.com` AAAA | none (fine) |
| `glitz-glamour.com` CNAME | none (correct — apex must not be a CNAME) |
| `www.glitz-glamour.com` | CNAME → `nuancestudios.github.io` → GitHub IPs, plus GitHub's IPv6 range |
| Nameservers | `nse1–nse4.squarespacedns.com` (so edits in the Squarespace panel do apply) |
| CAA at `www` | digicert / sectigo / letsencrypt — Let's Encrypt is allowed, so the certificate can issue |
| `http://glitz-glamour.com` | serves the site |
| `https://glitz-glamour.com` | serves the site, valid certificate |
| `http://www.glitz-glamour.com` | redirects to `https://glitz-glamour.com` |

**Conclusion:** DNS, domain attachment, certificate and the `www` redirect are all working. The Pages
settings banner is stale. The one genuine outstanding item is **Enforce HTTPS**, which GitHub still reports as
off — tick it in Settings → Pages once it is clickable, so plain `http://` visits auto-upgrade.
