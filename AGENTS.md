# AGENTS.md

Guidance for AI agents and humans working in this repo.

## What this is

Slides and announcement for a Batumi meetup talk by Konstantin Ryadov:
**«Агенты работают, даже когда я сплю»** — *если есть бэклог или есть что улучшать, в том числе по секьюрити*.

The talk walks up the L1→L9 AI-development ladder on three real projects:
[race-the-city](https://github.com/kryadov/race-the-city) (L4→L5),
[claude-remote-vm-dev](https://github.com/kryadov/claude-remote-vm-dev) (L5→L6),
[itffm](https://github.com/kryadov/itffm) (L6→L7).

Published at https://kryadov.github.io/batumi-meetup-1/ by GitHub Pages from `main`, repo root.
**Every push to `main` is live within a minute.**

## Files

```
index.html     the deck in Russian: one <section class="slide"> per slide
en.html        the same deck in English, slide for slide
deck.css       shared styles for both languages
deck.js        shared navigation: keys, swipes, notes, fit-to-window, language link
README.md      plan of the talk: blocks, timing, slide ranges
ANNOUNCE.md    meetup announcement text (Обо мне + Доклад), pasted into Telegram/posters
l0-l9.png      the ladder picture (slide 5), credited to alekseilitvinau.com/edu
me.jpg         speaker photo (from kryadov.github.io)
qr/*.svg       static QR codes — no network needed at the venue
```

## Working rules

- **Discuss ≠ apply.** When the author asks to brainstorm or discuss (titles, wording, structure),
  answer with options only. Do not edit, commit or push until they explicitly pick one and say to apply.
  Pushing here publishes immediately.
- **Facts come from git, not memory.** Every number on a slide (commits, tags, dates, hours, model
  co-author counts) must be re-derivable from `git log` of the project repos. Re-check before changing one.
  If a claim cannot be verified, mark it as a hypothesis or ask.
- **Language.** Slides exist in Russian (`index.html`) and English (`en.html`); the announcement is Russian;
  code, commit messages and this file are in English.
- **Two decks, one structure.** Any change to a slide's content or order goes into both `index.html` and
  `en.html` in the same commit, so slide `#n` is the same slide in both (the EN/RU link keeps the number).
  Translate for meaning, not word by word: idiomatic English, same facts and numbers, same length budget.
- **Wording.** No NDA framing: the author is an independent engineer (Georgian IE), co-founder & CTO of
  Bulka.AI; Azul is a client. Work products are internal — only press announcements can be shown.
  The projects had no monetization goal.
- **Keep README in sync.** Adding, removing or moving a slide shifts the numbers in the README plan
  table and the demo slide references. Update them in the same commit.

## Deck conventions

- Styles live in `deck.css`, behaviour in `deck.js`; keep the HTML files free of inline `<style>`/`<script>`.
- Stage is a fixed 1600×900 canvas scaled to the window. Text must fit without scrolling — headings
  ideally one line, at most two.
- Building blocks already in the CSS: `.kicker`, `.card`, `.stats/.stat`, `.flow/.step`, `.badge`,
  `.ladder/.rung`, `.tl/.tl-row` (timeline), `.qr-card`, `.qr-mini` (bottom-right QR on a slide),
  `.note-hand` (handwritten accent). Reuse them instead of inventing new styles.
- Speaker notes go in `<aside class="notes">` inside the slide, with an approximate duration (`~2 мин`).
  `N` toggles them while presenting.
- No external JS. Only Google Fonts (Inter, Caveat, JetBrains Mono) load from the network.

## QR codes

Generated with the `qrcode` npm package (outside the repo, so `node_modules` never gets published):

```js
const QR = require('qrcode');
QR.toString(url, { type: 'svg', margin: 1, errorCorrectionLevel: 'M',
                   color: { dark: '#26303b', light: '#ffffff' } });
```

Write the result to `qr/<name>.svg`, and scan it with a phone before pushing.

## Checking a change

Render the slides you touched in headless Chrome and look at them:

```bash
chrome --headless=new --hide-scrollbars --window-size=1600,900 \
  --virtual-time-budget=4000 --screenshot=out.png "file:///…/index.html#<slide>"
```

Watch for text overflowing cards, headings wrapping into three lines, and QR codes overlapping content.
After pushing, confirm the Pages build finished:
`gh api repos/kryadov/batumi-meetup-1/pages/builds/latest --jq .status`.
