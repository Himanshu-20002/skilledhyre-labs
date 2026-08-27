# Reusable Next.js About Page Component

A fully self-contained, animated **About** page section component powered by **GSAP** and **ScrollTrigger** for Next.js (App Router or Pages Router).

---

## 📦 What's Included?

```
reusable-about-component/
├── About.jsx              # Main About section component ('use client')
├── AnimatedTitle.jsx      # Animated 3D title sub-component ('use client')
├── about.css              # Pure CSS styles & @font-face declarations
├── README.md              # Setup guide and documentation
└── assets/
    ├── about.png          # Background clip image
    └── fonts/             # Custom WOFF2 fonts
        ├── circularweb-book.woff2
        ├── general.woff2
        ├── robert-medium.woff2
        ├── robert-regular.woff2
        └── zentry-regular.woff2
```

---

## ⚡ How to Copy & Paste to Any Next.js Project

### 1. Copy the Folder
Copy the entire `reusable-about-component` folder into your project's `components/` directory:
```
your-next-project/
└── src/
    └── components/
        └── reusable-about-component/  <-- Paste here
```

### 2. Install Required Dependencies
Run this in your target Next.js project:
```bash
npm install gsap @gsap/react
```

### 3. Import and Use in Any Page
In any Next.js page (e.g., `app/page.js` or `pages/index.js`):

```jsx
import About from '@/components/reusable-about-component/About';

export default function Home() {
  return (
    <main>
      <About />
    </main>
  );
}
```

---

## 🎨 Zero External CSS Setup Required
- All custom fonts, clip-path animations, responsive layout rules, and GSAP styles are bundled into `about.css`.
- Does **NOT** require Tailwind CSS or any changes to global CSS files.
