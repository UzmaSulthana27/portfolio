# Uzma Sulthana S — Portfolio

> Personal portfolio website of Uzma Sulthana S, Full Stack Developer from Bengaluru.

**Live:** [uzma-portfolio.vercel.app](https://uzma-portfolio.vercel.app) &nbsp;·&nbsp; **GitHub:** [UzmaSulthana27](https://github.com/UzmaSulthana27)

---

## About

A dark-themed, interactive portfolio built with **React + Vite + Tailwind CSS**, featuring animated particle backgrounds, 3D tilt project cards, scroll-triggered reveals, and an IDE-style skills section.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Build Tool | Vite |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Particles | HTML5 Canvas API |
| Fonts | Instrument Serif · JetBrains Mono · Syne |
| Deployment | Vercel |

---

## Features

- **Particle canvas** — twinkling stars, drifting nebula orbs, connected node network, and shooting stars — all on an HTML5 canvas
- **Custom cursor** — violet dot + ring follower with `mix-blend-mode: difference`
- **Scroll progress bar** — gradient bar tracking read progress at the top
- **3D tilt cards** — project cards respond to mouse movement with perspective rotation
- **Framer Motion reveals** — every section animates in on scroll using `react-intersection-observer`
- **IDE skills section** — tabbed code editor aesthetic with animated skill bars
- **Rotating badge** — SVG circular text badge in the hero section
- **Infinite marquee** — tech stack ticker that pauses on hover
- **Active nav highlighting** — navigation links sync with the visible section

---

## Project Structure

```
uzma-portfolio/
├── index.html
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Cursor.jsx          # Custom cursor
        ├── Navbar.jsx          # Navigation + scroll progress
        ├── ParticleCanvas.jsx  # Canvas particle system
        ├── Hero.jsx            # Landing section
        ├── Marquee.jsx         # Tech stack ticker
        ├── About.jsx           # About + stat cards
        ├── Skills.jsx          # IDE-style skills with tabs
        ├── Projects.jsx        # Cinematic project cards
        ├── Experience.jsx      # Timeline: internship + education
        ├── Contact.jsx         # Contact links + form
        └── Footer.jsx          # Footer
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repo
git clone https://github.com/UzmaSulthana27/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

```bash
npm run dev       # Start development server (localhost:5173)
npm run build     # Build for production → dist/
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

---

## Deployment

This site is deployed on **Vercel**.

To deploy your own copy:

1. Push the project to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Vercel auto-detects Vite — no configuration needed
4. Click **Deploy**

---

## Featured Projects

| Project | Description | Stack | Live |
|---------|-------------|-------|------|
| [BuddyBot](https://github.com/UzmaSulthana27/BuddyBot) | Real-time AI team collaboration platform | React, Node.js, Socket.io, MySQL, Three.js | — |
| [ShopWave](https://github.com/UzmaSulthana27/ecommerce) | Full-featured e-commerce app | React, Vite, Node.js, REST API | [shopwave-e.vercel.app](https://shopwave-e.vercel.app) |
| [ImgNest](https://github.com/UzmaSulthana27/ImgNest) | Image discovery app with Unsplash API | React, Vite, Unsplash API | [imgnest.netlify.app](https://imgnest.netlify.app) |

---

## Contact

- **Email:** uzmasulthana2725@gmail.com
- **LinkedIn:** [linkedin.com/in/uzma-sulthana-s](https://linkedin.com/in/uzma-sulthana-s)
- **GitHub:** [github.com/UzmaSulthana27](https://github.com/UzmaSulthana27)

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Designed & Built with ♥ in Bengaluru</p>