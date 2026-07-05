# Solutions Medical Services — Corporate Website

Modern, minimal pharmaceutical company website built with **Angular 20** (standalone
components, signals, lazy-loaded routes), **SCSS**, and **Bootstrap 5 + Bootstrap Icons**.

## Structure

```
src/
  app/
    app.component.ts/html/scss      Root shell (navbar + router-outlet + footer)
    app.config.ts                   Providers (router, view transitions, scroll restoration)
    app.routes.ts                   Lazy-loaded routes: /, /products, /contact
    shared/
      components/navbar/            Sticky navbar with mobile menu (signals)
      components/footer/            Simple footer
      directives/reveal.directive.ts  Scroll-reveal animation (IntersectionObserver)
    pages/
      home/                         Hero section with brand SVG illustration
      products/                     "Coming Soon" section
      contact/                      Contact info card
public/
  images/logo.png                   Official company logo
```

## Getting started

```bash
npm install
npm start        # ng serve — http://localhost:4200
npm run build    # production build to dist/solutions-medical
```

Requires Node.js 20+ and Angular CLI 20 (`npm i -g @angular/cli`) if you want to
regenerate/extend the project with schematics.

## Design tokens

Defined as CSS custom properties in `src/styles.scss`:

| Token | Value | Use |
|---|---|---|
| `--navy` | `#0f2f6b` | Primary brand color |
| `--teal` | `#14a6a1` | Accent / hover states |
| `--leaf` | `#7fc241` | Accent (gradient terminus) |
| `--mist` | `#f6f8f9` | Section background |
| `--font-display` | Playfair Display | Headings |
| `--font-body` | Inter | Body copy |
| `--font-arabic` | Noto Kufi Arabic | Arabic name in hero |

## Notes

- All three pages (`Home`, `Products`, `Contact`) are lazy-loaded via `loadComponent`.
- The navbar and mobile menu state are driven by Angular **signals**.
- Products page intentionally ships with **no product data** — "Coming Soon" only, per spec.
- Contact page intentionally ships with **no form** — static contact details only, per spec.
