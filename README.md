# Skincare Landing Page

A responsive, animated landing page for a skincare brand built with React and Tailwind CSS.

## 🧩 Tech Stack & Libraries

- **React** (with Vite)
- **Tailwind CSS** for styling
- **GSAP** for animations
- **GSAP ScrollTrigger** for scroll-based animations
- **@gsap/react** for React-compatible animation setup
- **lucide-react** for icons

## 📁 Folder Structure

- `src/pages/Landing.jsx` — main landing page
- `src/components/Landing_Page_Parts/` — all section components of the landing page
- `src/components/common/` — reusable components like buttons, cards, etc.
- `App.jsx` — contains page loading screen and transition logic

## 🎬 Animations

- Animations are scroll-based using `gsap.to()` and `ScrollTrigger`
- Separate `ref` arrays for PC and mobile elements
- No `scrub`; animations trigger once per scroll section
- PC and mobile animations handled separately with proper trigger points
- Refs are managed per-element group to avoid early trigger issues
- Animations are wrapped inside `useGSAP` for clean React integration