# NWVSA
Official Northwest VSA page

This is NWVSA's first custom-built webpage, developed from scratch rather than using pre-built templates. Our goal is to provide hands-on web development experience for members in our region through practical work with HTML, CSS, and JavaScript while leveraging AI tools. We're using our existing WordPress site as a reference for content and design inspiration. When contributing, please create your own branch and submit a pull request for review before merging to main. Have questions? Feel free to reach out to ricky.le@nwvsa.org to schedule a discussion about next steps for the website.

## Structure

- `frontend/` — the Vite + React site
- `backend/` — reserved for a future backend service (currently empty)

### Running the frontend

Requires Node 20.19+ / 22.13+ / 24+ (Vite 8's minimum). `frontend/.nvmrc`
pins Node 22 — run `nvm use` in `frontend/` if you have nvm installed.

```
cd frontend
nvm use   # optional, if you use nvm
npm install
npm run dev
```

### Deploying to northwestvsa.com (IntraServer)

```
cd frontend
npm install
npm run build
```

This produces a static site in `frontend/dist/`. Upload the **contents** of
`dist/` (not the folder itself) to IntraServer's `public_html/`.

`dist/` already includes:
- `.htaccess` — forces HTTPS, redirects `www.northwestvsa.com` to the bare
  domain, and serves `index.html` for client-side routes (`/about`, `/teams`,
  etc.) so deep links and page refreshes don't 404.
- `robots.txt` and `sitemap.xml` — both reference `northwestvsa.com`; update
  them if the domain ever changes.

No backend or environment variables are needed — this is a fully static
build.

### Dev preview on GitHub Pages

Every push to `main` automatically builds and deploys to
**https://rickyleNWVSA.github.io/** via
`.github/workflows/deploy-github-pages.yml`. This is a preview mirror only —
production is `northwestvsa.com`, deployed separately as described above.

This works with zero path/config changes because the workflow publishes
into a dedicated `rickyleNWVSA.github.io` repo, which GitHub serves at the
root (no `/nwvsa/` subpath) — matching the root-relative paths already used
throughout this codebase.

One-time setup (already done if this section still exists, but documented
for reference):
1. Create an empty public repo named exactly `rickyleNWVSA.github.io`.
2. Create a fine-grained GitHub PAT scoped to just that repo with
   **Contents: Read and write**.
3. Add it as a repository secret named `PAGES_DEPLOY_TOKEN` on this
   (`nwvsa`) repo under Settings → Secrets and variables → Actions.

You can also trigger a deploy manually from the Actions tab
(`workflow_dispatch`) without pushing to `main`.

