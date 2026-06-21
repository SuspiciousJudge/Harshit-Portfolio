# Harshit Shah — Portfolio

A personal portfolio built with React 18, TypeScript, Vite, Tailwind CSS and Framer Motion. Features bilingual support (EN/DE), video backgrounds, animated sections, and a responsive project carousel.

## Features
- Built with Vite + React + TypeScript
- Tailwind CSS for styling and responsive layout
- Framer Motion animations and animated sections
- Bilingual content (English and German)
- Video backgrounds and custom cursor interactions
- Project carousel and fullscreen project previews

## Quick start

1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

Open http://localhost:5173 in your browser (Vite default port may vary).

## Environment
- Copy `.env.local.example` to `.env.local` and fill in any required secrets (for example EmailJS credentials used by the contact form).

```bash
cp .env.local.example .env.local
```

## Add your media

Place media files under `resources/` (see `resources/README.md`) and run the sync script to copy them into `public/`:

```powershell
.\scripts\sync-resources.ps1
```

Common assets:

- `cv-en.pdf` / `cv-de.pdf` — CV files used by download buttons
- `clip1.mp4`, `clip2.mp4` — hero and contact section videos
- `profile.jpg` — profile photo
- `projects/*` — images used in the project carousel

## Build & preview

```bash
npm run build
npm run preview
```

Bundle output is in `dist/` — deploy to Vercel, Netlify, or GitHub Pages.

## Commit message used for GitHub push

"chore: add comprehensive README and prepare repository for GitHub"

## Contributing

Feel free to open issues or PRs. For local development, follow the Quick start steps above.

## License

This project does not include a license file. Add a LICENSE if you want to specify terms.

## Contact

Author: Harshit Shah
Project repository prepared for push to https://github.com/SuspiciousJudge/Harshit-Portfolio.git
