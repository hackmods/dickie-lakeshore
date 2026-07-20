# Dickie Lakeshore — Knowledge Journal

Living document for Ryan ↔ Dickie conversations and for AI/agents working on this site.
**Read this before changing bio, booking, clips, or schedule copy.**

---

## How to use

1. Before talking to Dickie, skim **Open asks** and pick a few questions.
2. After the chat, fill answers under the ask (or paste into **Session log**).
3. Check off completed asks; move lasting facts into **Known facts**.
4. Use **Content map** to update the right files on the site.
5. Agents: prefer facts from this journal over inventing copy.

---

## Known facts (confirmed)

| Fact | Value | Source |
|------|--------|--------|
| Stage name | Dickie Lakeshore | Press / site |
| Legal name | Richard Gibbs | Fort Erie Radio; email |
| Email | richard.gibbs2016@gmail.com | Site / client |
| Phone | 905-714-3622 | Site / client |
| Instagram | https://www.instagram.com/dickie.lakeshore/ | Web |
| Region | Niagara, Ontario | Press |
| Podcast circle | Talkin' Funny | Press |
| Talkin' Funny Facebook | https://www.facebook.com/profile.php?id=61587689854406 | Ryan / page |
| Show runner | Produces nights at multiple Niagara venues; some recurring | Ryan |
| Press photos | Fort Erie Radio / Andrew Hawlitzky — credited on site | Articles |
| Featured clip | Spotlight set w/ Ryan Morris — `LYTE6BoJhq4` | YouTube |
| Podcast clip | Talkin' Funny Ep 20 — `Ro0vHpUQxL4` | YouTube |
| Merch | **In person at shows only** (no online store yet) | Ryan / product decision |
| Live LAN site | http://192.168.0.61/ (Proxmox CT 112) | Deploy |
| GitHub | https://github.com/hackmods/dickie-lakeshore | Deploy |
| Tagline (current) | "Hi, I'm Dickie Lakeshore. I like to make you laugh." | Site (pending confirm) |

---

## Open asks

Check a box when answered. Paste Dickie’s answer under the line.

### Identity & bio

- [ ] Preferred one-line bio for the homepage?
  - Answer:
- [ ] How long have you been doing stand-up?
  - Answer:
- [ ] Hometown / where are you based day-to-day?
  - Answer:
- [ ] Anything to emphasize (or avoid) about “Richard Gibbs” vs “Dickie Lakeshore”?
  - Answer:
- [ ] Clean vs adult material — how should bookers be warned?
  - Answer:
- [ ] Keep the current tagline, or prefer a different one?
  - Answer:

### Booking

- [ ] Typical set lengths you offer (e.g. 5 / 10 / 20 / 45 / feature)?
  - Answer:
- [ ] Preferred venue types (Legions, clubs, corporate, weddings, fundraisers)?
  - Answer:
- [ ] Travel radius and overnight / mileage fees?
  - Answer:
- [ ] Rate range, or always “contact for quote”?
  - Answer:
- [ ] Tech needs (mic only, stool, video, etc.)?
  - Answer:
- [ ] Deposit / contract preference?
  - Answer:

### Shows & schedule

- [ ] Confirm real upcoming dates (replace placeholders in `shows.csv`)
  - Answer:
- [ ] Who will update the schedule? (Ryan / Dickie / Google Sheet)
  - Answer:
- [ ] Prefer Google Sheet auto-update vs editing `shows.csv`?
  - Answer:
- [ ] Recurring rooms (Yuk Yuk’s, Spotlight, etc.)?
  - Answer:
- [ ] Show-runner venues: exact names, cadence (monthly?), and which are recurring vs one-offs?
  - Answer:
- [ ] Should “Shows I Run” list ticket links or just descriptions?
  - Answer:

### Media

- [ ] Best 2–3 video clips to feature (YouTube links)?
  - Answer:
- [ ] OK to keep Fort Erie Radio photos with credit?
  - Answer:
- [ ] Facebook / TikTok / other socials to link?
  - Answer:
- [ ] Better headshot or hero photo from your phone?
  - Answer:

### Merch (in person now · online = future)

- [ ] What merch do you sell in person today? (shirts, caps, etc.)
  - Answer:
- [ ] Interested in online merch later? If yes, when roughly?
  - Answer:
- [ ] Footer line OK: “Merch available in person at shows.”?
  - Answer:

### Site feel

- [ ] Anything you never want on the website?
  - Answer:
- [ ] Anyone else who should be credited (podcast hosts, photographers)?
  - Answer:

---

## Session log

Add a new entry after each conversation or site decision.

### 2026-07-20 — Show runner + Talkin’ Funny shout-out (Ryan)

- Expanded **About Me** with first-person bio (flubbed years/venues — TODO for Dickie).
- Added **Shows I Run** section (recurring + specials placeholders).
- Added **Talkin’ Funny** shout-out linking to Facebook page `id=61587689854406`.
- Still need: real show-runner venue names and cadence from Dickie.

### 2026-07-20 — Site build / SEO pass (Ryan + agent)

- Shipped SEO meta, About, Book Me; removed online Merch section.
- Merch policy locked: **in person only**; online store = future goal.
- Knowledge captured in `.cursorrules`, `.cursor/rules/`, and this journal.
- Still need: real show dates, confirmed bio/tagline, booking details from Dickie.

### YYYY-MM-DD — (next chat with Dickie)

- Topics:
- Decisions:
- Still open:

---

## Content map

| When Dickie answers… | Update these files / sections |
|----------------------|--------------------------------|
| Bio / tagline | `index.html` → `#about`, hero |
| Show runner venues | `index.html` → `#show-runner` |
| Talkin' Funny / socials | `index.html` → `#talkin-funny`, footer, JSON-LD `sameAs` |
| Booking (venues, rates, travel) | `index.html` → `#book` |
| Show dates | `shows.csv` (or Google Sheet + `SHOWS_CSV_URL` in `app.js`) |
| Social links | `index.html` footer + JSON-LD `sameAs` |
| New photos | `img/hero.jpg`, `img/press/…`, `docs/CREDITS.md` |
| Online merch (future) | New section + Cursor rules merch policy — only when requested |
| Public domain | `index.html` canonical/og:url, `robots.txt`, `sitemap.xml` |

---

## Future goals backlog

- [ ] Online merch / store (only if Dickie wants it)
- [ ] Google Sheets live schedule (`SHOWS_CSV_URL`)
- [ ] Custom domain + HTTPS (CapRover or reverse proxy)
- [ ] CapRover GitHub secrets for auto-deploy from `main`
- [ ] Press kit PDF (one-sheet + photo)
- [ ] Replace LAN canonical URLs (`192.168.0.61`) with public domain
- [ ] More clips / Instagram embed gallery
- [ ] Testimonials (only with permission)

---

## Quick links

- Live LAN: http://192.168.0.61/
- Repo: https://github.com/hackmods/dickie-lakeshore
- Maintainer show updates: `HOW-TO-UPDATE-SHOWS.txt`
- Credits: `docs/CREDITS.md`
- Checklist: `docs/CONTENT-CHECKLIST.md`
