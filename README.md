# BIRTHSTAR

A small React and Vite app that assigns four confirmed exoplanet host stars to a birthday, creates a downloadable SVG certificate, and reconstructs collections from their certificate ID.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`.

## Astronomy data and assignment

The bundled catalogue in `src/main.jsx` is a curated, static set of confirmed exoplanet systems. Its planet discovery years and discovery methods are represented as archive values; each result links to the corresponding NASA Exoplanet Archive overview page. A discovery year belongs to the planet discovery record, not to the host star. The short explanatory notes are context, not claims that the discovery happened on the visitor’s birthday.

Each new collection gets an independent random seed, reduced to six base-36 characters so it fits the certificate ID. A Fisher–Yates shuffle of the bundled catalogue selects four distinct systems. The ID contains the birthday and seed, allowing the app to recreate the same collection from the ID. The catalogue is intentionally bundled, so updates to the live archive require updating the local data.

This is a client-only demo: certificate verification reconstructs a collection and checks its format, but cannot establish authoritative issuance or prevent a forged ID. That requires a server-side registry or signed certificates. No birthdays or collections are sent to a server.
