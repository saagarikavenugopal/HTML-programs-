# Saagarika Venugopal — Portfolio (React)

A React + Vite rebuild of your original HTML/CSS/JS portfolio, with the same content but a cleaner structure, working dark mode, animations, and a fixed contact form.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (typically `http://localhost:5173`).

Production build:

```bash
npm run build
npm run preview
```

## Adding your real images

Images just work — no code editing needed. Drop your files into **`public/assets/`** with these exact names, then refresh the page:

| Section | Expected filename |
|---|---|
| About (profile photo) | `profile.jpg` (or rename the file and update `fileName` in `About.jsx`) |
| RENTSYNC | `rentsync.png` |
| Calculator | `calculator.png` |
| Mario Game | `mario.png` |
| Weather App | `weather.png` |

These names come from `src/data/portfolioData.js` (the `image` field on each project) and the `fileName` prop passed to `<ImageWithFallback>` in `About.jsx`. If a file isn't there yet, that spot just shows a styled placeholder instead of a broken image — so it's safe to add them one at a time.

To use different filenames, either rename your files to match the table above, or edit the `image` values in `portfolioData.js` / the `fileName` prop in `About.jsx`.

**Important**: files must go in `public/assets/`, not `src/assets/` — anything in `public/` is served as-is at the site root (so `public/assets/profile.jpg` becomes `/assets/profile.jpg` in the browser), while `src/` files need to be explicitly imported into JavaScript to be bundled.

## What changed from your original file, and why

- **One contact form, not two.** Your original had a form with name/email/message in the Contact section, then a *second*, unrelated form further down with password, resume upload, and a date picker — those look like leftovers from a different assignment and don't fit a portfolio's "contact me" form, so I removed them and kept one clean, validated form.
- **Fixed markup bugs**: `class="site -header"` (stray space), a duplicate `</section>` after Hero, duplicate `id="contact"` on two sections, and `action=""method="POST"` (missing space) are all resolved by the component structure.
- **Toned down copy slightly** for a professional tone — e.g. "Please do Hire me!!" → "Hire Me" — but all your actual bio, skills, projects, and contact info are unchanged. Feel free to put the exclamation marks back if you want that voice.
- **Kept your real content**: the exact bio text, the skills table with proficiency levels, the "Learning Journey" steps, and all four real projects (RENTSYNC, Calculator, Mario Game, Weather App) with their real GitHub link and YouTube demo embeds.

## Customizing content

Everything text-based lives in one file:

```
src/data/portfolioData.js
```

Edit that to change your bio, skills, projects, or contact details without touching component code.

## Project structure

```
src/
├── assets/            # drop your real images here
├── context/           # ThemeContext (dark mode + localStorage)
├── data/              # portfolioData.js — all site content
├── hooks/             # useScrollSpy
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── About/
│   ├── Skills/
│   ├── Learning/
│   ├── Projects/
│   ├── Contact/
│   ├── Footer/
│   └── ScrollToTop/
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Notes

- The contact form currently **simulates** sending (shows "Sending..." then "Message Sent"). To actually deliver messages, wire it up to a backend endpoint or a service like Formspree or EmailJS — happy to help with that next.
- Dark mode is toggled with the ☀️/🌙 button in the navbar and persists across refreshes via `localStorage`.
