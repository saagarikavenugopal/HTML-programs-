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

Your original file referenced local screenshots (e.g. `calci photo.png`, `mario img.png`) that weren't available to rebuild with, so the Hero/About/Projects sections currently use styled placeholders instead.

To use your real images:
1. Drop your files into `src/assets/` — suggested names: `profile.jpg`, `rentsync.png`, `calculator.png`, `mario.png`, `weather.png`.
2. In `About.jsx`, replace the `.about__photo-placeholder` div with:
   ```jsx
   import profilePhoto from '../../assets/profile.jpg';
   // ...
   <img src={profilePhoto} alt="Profile Photo" />
   ```
3. In `Projects.jsx`, do the same for each project's `.project-card__image` div, or update the `image` field in `src/data/portfolioData.js` and import the files at the top of `Projects.jsx`.

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
- Dark mode is toggled with the 🌑/☀️ button in the navbar and persists across refreshes via `localStorage`.
