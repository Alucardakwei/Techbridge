# TechBridge GH — Premium Tech from China to Ghana

**Purpose**: A consumer-facing landing page for a Ghana-based tech retailer that sources products directly from China. Users describe what they want, pick a category, and tap **Send to WhatsApp** to open a pre-filled WhatsApp message to the business.

**Target audience**: Ghanaian consumers looking for Chinese tech products (phones, laptops, audio, watches, accessories, etc.) at competitive prices with local delivery to Accra.

## Implementation

### Architecture

- **Framework**: React 19 + Vite + Tailwind CSS 4 + Hono/Bun
- **Routing**: Single-page app with `/` route rendering `TechBridgePage`
- **State**: Local React `useState` for the form (no backend, no database)
- **Styling**: CSS custom properties + Tailwind utilities
- **No persistence**: form submissions open WhatsApp with `wa.me/233593320772` and a pre-filled message

### File Structure

```
src/
├── data/
│   └── products.ts             # Tag/category metadata used for the suggestion chips
└── components/
    ├── Header.tsx               # Sticky nav with logo, search, mobile menu
    ├── Hero.tsx                 # Hero with mesh-blob gradient, headline, CTAs
    ├── CustomRequest.tsx        # Custom-order form (textarea + native <select> + send button)
    ├── HowItWorks.tsx           # 4-step process section (no flow diagram)
    └── Footer.tsx               # Contact + social links
```

### Key Features

1. **Hero** — Headline, eyebrow, trust badges, "Request a Product" + "Chat on WhatsApp" CTAs
2. **Custom Request form** — Textarea for product description, chip suggestions, native category `<select>` (all options always visible), send button
3. **Send to WhatsApp** — Disabled until the textarea has non-whitespace text. On click, opens `https://wa.me/233593320772?text=...` in a new tab with a pre-filled message that includes the description and the chosen category. The selected category appears in the message only if one was picked.
4. **How It Works** — 4 step cards (no flow diagram)
5. **Responsive** — Mobile-first, stacks on small screens, two-column on desktop
6. **WhatsApp links** — Hero CTA and footer link open `wa.me/233593320772` directly

### Backend

- The Hono server in `server.ts` only serves the built React app — there is no API, no database, no request storage. The site is fully static with no server-side state.

### Build & Deploy

- `bun run build` creates production `dist/` (~278KB JS, ~47KB CSS gzipped)
- Dev mode uses Vite middleware; production uses static file serving
