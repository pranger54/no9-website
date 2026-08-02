# no9website-mui

Same ARCH·FORMA design as the original project, rewritten with **styled-components** + **MUI** for readability.

## Run

```bash
npm install
npm run dev
```

## What changed vs the original

- All inline `style={{...}}` objects → named styled-components (readable CSS, real hover states)
- Hover logic via CSS `&:hover` instead of `useHover()` hooks
- Buttons and form fields are MUI components, themed once in `src/theme.js`
- Fade-in animation wrapped in one `<Fade delay={...}>` component
- Fonts loaded in `index.html` instead of a runtime loader

## Where things live

| What | Where |
|---|---|
| Colors & fonts (MUI theme) | `src/theme.js` |
| Keyframes, scrollbar, resets | `src/styles/GlobalStyles.js` |
| All images | `src/data/photos.js` — swap URLs for local imports |
| Projects (+ per-project galleries) | `src/data/projects.js` |
| Pages | `src/pages/` — one file per page, `/work/:slug` is dynamic |
| Your own pictures | drop into `src/assets/images/`, import in `photos.js` |
