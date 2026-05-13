# theashishbisht.github.io

Personal portfolio — **Vite + React + TypeScript + Tailwind + shadcn/ui**, deployed to GitHub Pages.

---

## ✏️ Editing content (read this first)

**Every number, label, project, and link on the site lives in one file:**

```
src/data/profile.ts
```

Open it, change what you want, save. That's it. The page updates everywhere — hero, about, footer, contact.

The counts (years of experience, projects, dashboards, etc.) are at the top of the file. The four hero stats are placeholders — replace with whatever is actually true for you.

---

## 🚀 Running it

```bash
npm install
npm run dev          # local preview → http://localhost:8080
npm run build        # production build into dist/
npm run deploy       # publishes dist/ to the gh-pages branch
```

---

## 📊 Visitor counter (optional but recommended)

The old `countapi.xyz` counter died. This site is wired for [GoatCounter](https://www.goatcounter.com/) — free, privacy-friendly, no tracking cookies.

To turn it on:

1. Sign up at https://www.goatcounter.com/ (30 seconds, no card required)
2. Pick a code — e.g. `ashishbisht` — your dashboard will live at `https://ashishbisht.goatcounter.com`
3. Open `src/data/profile.ts` and set:
   ```ts
   goatcounter: { code: "ashishbisht" },
   ```
4. Push. Counter appears in the footer.

Leave `code` as `null` to keep it hidden.

---

## 🧱 Stack

- **Vite** (build)
- **React 18** + **TypeScript**
- **Tailwind CSS** with **shadcn/ui** primitives
- **EmailJS** for the contact form
- **GoatCounter** for visitor analytics
- **React Router** (one route, but kept for future expansion)

Fonts: Instrument Serif (display), Geist (body), JetBrains Mono (labels).

---

## 📁 Layout

```
src/
├── data/
│   └── profile.ts              ← edit this for content updates
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Portfolio.tsx
│   ├── Contact.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx
│   ├── VisitorCount.tsx        ← GoatCounter widget
│   ├── common/                 ← Loading + Error boundary
│   └── ui/                     ← shadcn primitives, don't touch
├── layout/MainLayout.tsx
├── pages/
│   ├── Index.tsx
│   └── NotFound.tsx
├── index.css
└── main.tsx
```

---

## 📬 Contact

- Email: abisht129@gmail.com
- LinkedIn: linkedin.com/in/theashishbisht
- GitHub: github.com/theashishbisht
