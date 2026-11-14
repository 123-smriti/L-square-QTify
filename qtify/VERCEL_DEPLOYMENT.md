# Vercel deployment

The React app is in the `qtify` directory. The repository-root `vercel.json` supports deploying from the repository root by installing and building from `qtify`, then publishing `qtify/build`.

Recommended Vercel settings:

- Root Directory: repository root (`.`)
- Framework preset: Other (the build and install commands are set in `vercel.json`)
- Production branch: `main`

If the Vercel project already uses `qtify` as its Root Directory, the nested `qtify/vercel.json` keeps that setup working; use `npm run build` and `build` as the build command and output directory.

Both configurations rewrite application routes to `index.html` so React Router routes work on direct visits and refreshes.

After pushing changes, trigger a production redeploy in Vercel and use the production domain assigned to that deployment. A URL showing `DEPLOYMENT_NOT_FOUND` is not an active deployment alias.
