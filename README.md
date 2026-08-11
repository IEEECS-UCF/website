# website

11ty based static site

## Data

- `_data/config.js` — nav, ticker, news, officers, meeting info, footer, badges. Edit and rebuild.
- `posts/` — one markdown file per welcome message. Newest `date` shows on the home page.

## Build

```
npm install
npm run build   # -> out/
npm run serve   # local preview
```

## Deploy

```
npm run deploy   # builds, then wrangler pages deploy out
```

needs to be logged in with wrangler once. contact the current software chair for access to the Cloudflare group.
