# 💻 Modern Developer Portfolio

A sleek, premium, and highly interactive developer portfolio built to showcase my professional skills, projects, and technical expertise. The core design philosophy centers around a clean **Code Syntax / TypeScript Theme**, blending high-performance code architecture with fluid user experiences.

🚀 **[Live Demo](https://portfolio-xi-five-95.vercel.app/)**

---
## ✨ Features

- **TypeScript-Themed UI:** A unique layout crafted for developers, mimicking a real code editor environment with precise syntax coloring.
- **Dynamic Scroll Animations:** Smooth, cinematic section reveals and custom slide-ups powered by `Framer Motion`.
- **Infinite Marquee Carousel:** An uninterrupted, linear looping technology stack showcase that runs entirely on hardware-accelerated animations.
- **Adaptive Grid Systems:** Fully responsive layouts (Desktop, Tablet, Mobile) optimized with utility-first utility-first responsiveness.
- **Type-Safe Component Architecture:** Built ground-up with TypeScript for strict type checking and clean, robust components.

---

## 🛠️ Tech Stack & Architecture

- **Core Framework:** React 19
- **Type System:** TypeScript
- **Styling & Layout:** Tailwind CSS
- **Animation Engine:** Framer Motion (`motion/react`)
- **Icons:** Lucide React

--
## 💻 Preview
<p align="center">
  <img src="./src/assets/portfolio-preview.png" alt="Portfolio Preview">
</p>







# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
