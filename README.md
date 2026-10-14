# LINHSTAY — static website

Source website is in `dist/`. It is a static HTML/CSS/JS site and needs no build command.

## Local preview

Open `dist/index.html` in a browser, or serve `dist/` with any static server.

## Publish with GitHub + Cloudflare Pages

1. Create a GitHub repository named `linhstay` and upload the contents of this folder (keep the `dist` folder).
2. In Cloudflare Dashboard, go to **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the `linhstay` repository. Choose **No framework**, use no build command, and set output directory to `dist`.
4. Deploy. Cloudflare will create a temporary `*.pages.dev` URL.
5. When a domain is purchased, open the Pages project → **Custom domains** and add it. Cloudflare will show the required DNS records and provide HTTPS.

## Before publishing

- Replace the provisional collage assets in `dist/assets/` with original project images.
- Add actual email/Zalo/social links.
- Connect `lien-he.html` form to Tally, Formspree, or a selected email workflow; the current form intentionally does not submit.
- Update page text and project details through GitHub, then push the change. Cloudflare deploys automatically.

