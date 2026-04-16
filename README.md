# Burak Ege Kaya — Portfolio

Personal portfolio website built with vanilla HTML, CSS, and JavaScript.

**Live:** [burakegekaya.com](https://burakegekaya.com)

---

## Stack

- **HTML / CSS / JS** — no frameworks, no build step
- **Web3Forms** — contact form backend
- **Vercel** — hosting & deployment

## Features

- TR / EN language toggle
- Scroll reveal animations
- Contact form with honeypot spam protection and client-side rate limiting
- CV download
- Fully responsive

## Structure

```
portfolio/
├── index.html
├── style.css
├── script.js
└── CV_without_phone_number.pdf
```

## Local Development

No setup needed. Open `index.html` directly in a browser, or use a local server:

```bash
npx serve .
```

## Deployment

Deployed on Vercel. Every push to `main` triggers an automatic redeploy.
