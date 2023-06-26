# `@next/font` fork

`@next/font` includes built-in automatic self-hosting for any font file. This means you can optimally load web fonts with zero layout shift, thanks to the underlying CSS size-adjust property used.

This new font system also allows you to conveniently use all Google Fonts with performance and privacy in mind. CSS and font files are downloaded at build time and self-hosted with the rest of your static assets. No requests are sent to Google by the browser.

[Read more](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)

## package.json:

```
{
  "name": "@next/font",
  "version": "13.4.8-canary.2",
  "repository": {
    "url": "vercel/next.js",
    "directory": "packages/font"
  },
  "types": "dist/types.d.ts",
  "files": [
    "dist",
    "google",
    "local"
  ],
  "license": "MIT",
  "scripts": {
    "build": "node ../../scripts/rm.mjs dist && pnpm ncc-fontkit && tsc -d -p tsconfig.json",
    "prepublishOnly": "cd ../../ && turbo run build",
    "dev": "pnpm ncc-fontkit && tsc -d -w -p tsconfig.json",
    "typescript": "tsec --noEmit -p tsconfig.json",
    "ncc-fontkit": "ncc build ./fontkit.js -o dist/fontkit"
  },
  "devDependencies": {
    "@types/fontkit": "2.0.0",
    "@vercel/ncc": "0.34.0",
    "fontkit": "2.0.2"
  }
}
```
