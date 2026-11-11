# ROTDEX – catch, battle and survive the brainrot

Built for **NEBULITH: The Brainrot Ideathon & Hackathon** (Celestial Biscuit, IGDTUW) – Track 2, Supernova.

**Live site:** PASTE_YOUR_DEPLOYED_URL_HERE

## Concept
ROTDEX is a Pokédex for internet brainrot. You create original creatures, collect them, battle with them and survive a feed of fake news. It looks chaotic, but every screen has a clear goal and a working mechanic.

## Features
- **The Lab:** pick an animal, an object and a vibe to generate an original creature with a fake-Italian name, lore and aura/rizz/chaos stats. The same combination always gives the same creature (seeded random). Export the creature as a trading card PNG using the Canvas API.
- **Dex:** save up to 12 creatures, stored in localStorage.
- **Aura Battle:** best of 3 rounds against a random rival, each stat usable once.
- **Doomscroll Escape:** find the one real, useful post among absurd fake news in 20 seconds.
- **67 mode:** sets every stat to 67 live, including on the card.
- **Cooked captcha:** a three-step absurd login gate (with a skip button).
- **Brainrot polish:** falling-brainrot loading screen, a 67 pop-up on every click, a TV no-signal sequence before the theme changes (4 themes), chaos mode and a cursor trail.
- Responsive layout, keyboard focus styles, and reduced-motion support.

## Tech
Plain HTML, CSS and vanilla JavaScript. No build step, no frameworks. Fonts: Bungee and Rubik via Google Fonts.

## Run locally
Open `index.html` in a browser.

## Files
- `index.html` – structure
- `style.css` – styling, themes, animations
- `script.js` – generator, canvas card, battle, doomscroll, overlays

## Note on AI
AI tools were used to help build this project. The team understands and can explain all of the code.
