# Vercel deployment

This repository contains the React app in the `qtify` directory. In Vercel, set **Root Directory** to `qtify`.

- Framework preset: Create React App
- Build command: `npm run build`
- Output directory: `build`
- Install command: `npm install`

The `vercel.json` rewrite is included so React Router routes (including `/album/:albumId`) are served by the single-page app on direct visits and refreshes.

After pushing these changes, redeploy the project. The application uses these runtime packages: Axios, MUI, Emotion, React Router DOM, and Swiper; they are declared in `package.json`.
