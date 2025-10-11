# Luxury Web Standard v1.1
*Build + Experience Spec (Enhanced)*

## Table of Contents
1. [Core Philosophy](#core-philosophy)
2. [Token Source of Truth](#token-source-of-truth)
3. [Typography System](#typography-system)
4. [Color Theory & Palettes](#color-theory--palettes)
5. [Shadows & Depth](#shadows--depth)
6. [Z-Index Scale](#z-index-scale)
7. [Breakpoints](#breakpoints)
8. [Animation & Timing](#animation--timing)
9. [Spacing & Layout](#spacing--layout)
10. [Navigation Design](#navigation-design)
11. [Visual Elements & Media](#visual-elements--media)
12. [Forms & Inputs](#forms--inputs)
13. [Buttons & CTAs](#buttons--ctas)
14. [Performance Optimization](#performance-optimization)
15. [Tone & Voice Guidelines](#tone--voice-guidelines)
16. [Legal Pages & Disclosures](#legal-pages--disclosures)
17. [Micro-Interactions](#micro-interactions)
18. [Grid Systems & Layouts](#grid-systems--layouts)
19. [Advanced Techniques](#advanced-techniques)
20. [Master Checklist](#master-checklist)

## Core Philosophy
- **Whitespace is wealth.** Breathing room communicates value; crowding signals scarcity.
- **Restraint over spectacle.** Minimal animation, muted palette, refined typography.
- **Quality over quantity.** One perfect element beats ten decent ones. Curate.
- **Consistency is prestige.** Spacing on an eight‑point grid; transitions 250–400ms; layered shadows only.
- **No freehand CSS.** Always use tokens (colors, spacing, shadows, timing, type, z-index).

---

## Token Source of Truth
Define tokens in `:root` and map into Tailwind. Non‑Tailwind surfaces still inherit the brand, and engineers cannot "go off script."

```css
/* styles/globals.css */
:root {
  /* Typography weights */
  --font-weight-thin: 100;
  --font-weight-extralight: 200;
  --font-weight-light: 300;
  --font-weight-body: 300;
  --font-weight-heading: 200;

  /* Tracking */
  --tracking-luxury: 0.025em;    /* body text */
  --tracking-display: -0.02em;   /* large headings */
  --tracking-uppercase: 0.15em;  /* nav/labels */

  /* Shadows */
  --shadow-color: 0deg 0% 50%;
  --shadow-elevation-low:
    0.5px 1px 1px hsl(var(--shadow-color) / 0.07);
  --shadow-elevation-medium:
    1px 2px 2px hsl(var(--shadow-color) / 0.09),
    2px 4px 4px hsl(var(--shadow-color) / 0.09),
    3px 6px 6px hsl(var(--shadow-color) / 0.09);
  --shadow-elevation-high:
    1px 2px 2px hsl(var(--shadow-color) / 0.06),
    2px 4px 4px hsl(var(--shadow-color) / 0.06),
    4px 8px 8px hsl(var(--shadow-color) / 0.06),
    8px 16px 16px hsl(var(--shadow-color) / 0.06);

  /* Z-Index Scale */
  --z-base: 0;
  --z-dropdown: 1000;
  --z-sticky: 1020;
  --z-fixed: 1030;
  --z-modal-backdrop: 1040;
  --z-modal: 1050;
  --z-popover: 1060;
  --z-tooltip: 1070;
  --z-toast: 1080;

  /* Spacing (8pt core) */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 32px;
  --spacing-xl: 64px;
  --spacing-2xl: 96px;
  --spacing-luxury: 128px; /* hero */

  /* Breakpoints (match Tailwind defaults) */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;

  /* Palette */
  --luxury-black: #1a1a1a;
  --luxury-white: #fafafa;
  --gray-50: #f8f8f8;
  --gray-100: #f0f0f0;
  --gray-200: #e4e4e4;
  --gray-300: #d1d1d1;
  --gray-400: #a3a3a3;
  --gray-500: #737373;
  --gray-600: #525252;
  --gray-700: #404040;
  --gray-800: #262626;
  --gray-900: #171717;
}

/* Tracking utilities */
.tracking-luxury { letter-spacing: var(--tracking-luxury); }
.tracking-display { letter-spacing: var(--tracking-display); }
.tracking-uppercase { letter-spacing: var(--tracking-uppercase); }
```

```ts
// tailwind.config.ts (complete token mapping)
export default {
  theme: {
    extend: {
      colors: {
        luxury: {
          black: '#1a1a1a',
          white: '#fafafa',
          gray: {
            50: '#f8f8f8', 100: '#f0f0f0', 200: '#e4e4e4', 300: '#d1d1d1',
            400: '#a3a3a3', 500: '#737373', 600: '#525252', 700: '#404040',
            800: '#262626', 900: '#171717',
          },
        },
      },
      fontWeight: {
        thin: '100', hairline: '100', extralight: '200', light: '300',
        normal: '300', medium: '400', semibold: '500', bold: '600',
      },
      letterSpacing: {
        luxury: '0.025em',
        display: '-0.02em',
        uppercase: '0.15em',
      },
      boxShadow: {
        'luxury-sm': 'var(--shadow-elevation-low)',
        'luxury-md': 'var(--shadow-elevation-medium)',
        'luxury-lg': 'var(--shadow-elevation-high)',
      },
      zIndex: {
        dropdown: '1000',
        sticky: '1020',
        fixed: '1030',
        'modal-backdrop': '1040',
        modal: '1050',
        popover: '1060',
        tooltip: '1070',
        toast: '1080',
      },
      maxWidth: { luxury: '1120px' },
      transitionDuration: { 250: '250ms', 400: '400ms' },
      transitionTimingFunction: {
        'luxury-in': 'cubic-bezier(0, 0, 0.58, 1.0)',   // enters (ease-out)
        'luxury-out': 'cubic-bezier(0.42, 0, 1.0, 1.0)', // exits (ease-in)
      },
    },
  },
};
```

---

## Typography System
- **Weights:** 100–300 everywhere; body `300`, headings `200`.
- **Hero H1:**
```tsx
<h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight tracking-display leading-[1.1]">
  Timeless Elegance
</h1>
```
- **Paragraphs:**
```tsx
<p className="text-base font-light leading-relaxed tracking-luxury">
  Your refined body copy that breathes.
</p>
```
- **Tracking:**
  - `tracking-display` for large headings (-0.02em)
  - `tracking-luxury` for body text (0.025em)
  - `tracking-uppercase` for nav/labels (0.15em)
- **Leading:** body `1.625–2.0`; headlines `1.1–1.25`; captions `1.375`.
- **Measure:** `max-w-[65ch]` for readable paragraphs.
- **Static text:** no scroll‑triggered text animations on headings or paragraphs.

---

## Color Theory & Palettes
- **Avoid pure black/white** backgrounds; use `luxury-black` for headlines, `gray-700` for body, `luxury-white` for backgrounds.
- **Borders:** `gray-100/200` only.
- **Accents:** desaturated and rare; never rely on color alone for state.
- **Gradients:** **No colorful gradients.** Only grayscale overlays on images to ensure text legibility (see Media section).

---

## Shadows & Depth
- **Layered only (3–5).** Opacity ≤ 0.09; gray‑based, not pure black.
- **Tokens:** use `shadow-luxury-sm/md/lg`.
- **Usage guide:**
  - `shadow-luxury-sm` - Subtle cards, form inputs, minimal elevation
  - `shadow-luxury-md` - Product cards (rest state), navigation (scrolled)
  - `shadow-luxury-lg` - Product cards (hover state), dropdowns, modals
- **Cards:** rest `luxury-md`, hover `luxury-lg`, `transition-shadow duration-300`.
- **No `drop-shadow-*`.** Prefer layered `box-shadow` tokens.

---

## Z-Index Scale
**Consistent layering prevents conflicts. Never use arbitrary z-index values.**

| Token | Value | Usage |
|-------|-------|-------|
| `z-base` | 0 | Default layer (most content) |
| `z-dropdown` | 1000 | Dropdown menus |
| `z-sticky` | 1020 | Sticky headers/elements |
| `z-fixed` | 1030 | Fixed navigation |
| `z-modal-backdrop` | 1040 | Modal overlay/backdrop |
| `z-modal` | 1050 | Modal content |
| `z-popover` | 1060 | Popovers |
| `z-tooltip` | 1070 | Tooltips |
| `z-toast` | 1080 | Toast notifications (highest) |

**Example usage:**
```tsx
{/* Fixed navigation */}
<nav className="fixed top-0 w-full z-fixed">...</nav>

{/* Modal */}
<div className="fixed inset-0 z-modal-backdrop bg-black/50">
  <div className="relative z-modal">...</div>
</div>

{/* Tooltip */}
<div className="absolute z-tooltip">...</div>
```

---

## Breakpoints
**Responsive design tokens (matches Tailwind defaults):**

| Token | Value | Description |
|-------|-------|-------------|
| `sm` | 640px | Small tablets, large phones (landscape) |
| `md` | 768px | Tablets (portrait) |
| `lg` | 1024px | Tablets (landscape), small laptops |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Large desktop |

**Mobile-first approach:**
```tsx
{/* Base styles = mobile, then progressively enhance */}
<div className="text-2xl md:text-4xl lg:text-6xl">
  Scales from mobile to desktop
</div>
```

---

## Animation & Timing
- **Durations:** 200–400ms. Hover/focus `250ms`; enters `400ms`; exits `250ms`.
- **Easing:** use `luxury-in` (ease-out) for enters, `luxury-out` (ease-in) for exits.
- **Allowed:** opacity, subtle `y` (≤20px), background/border/opacity, image scale to `1.05`.
- **Prohibited:** springs/bounce, parallax, text slide‑ins, rotating icons, animating width/height/margins.
- **Standard hover timing:**
```tsx
<button className="transition-all duration-250 ease-luxury-in hover:opacity-60">
  Hover me
</button>
```

---

## Spacing & Layout
- **8‑point grid:** 4, 8, 16, 32, 64, 96, 128. (Optional escape hatches: 12px, 20px for optical fixes.)
- **Section padding:** `py-24 md:py-32 lg:py-40`.
- **Container:** `max-w-luxury mx-auto px-8`.
- **Grid gaps:** `gap-8 md:gap-12 lg:gap-16`.
- **Cards:** `p-8 md:p-10 lg:p-12`.
- **Paragraphs:** `max-w-[65ch]` enforced across body text.

---

## Navigation Design
**Structure: modest logo, uppercase thin links, opacity hover, text "Menu."**

```tsx
<nav className={cn(
  "fixed top-0 w-full z-fixed transition-all duration-400 ease-luxury-in",
  scrolled
    ? "bg-white/95 backdrop-blur-sm shadow-luxury-sm py-4"
    : "bg-transparent py-8"
)}>
  <div className="max-w-luxury mx-auto px-8 flex items-center justify-between">
    <img src="/logo.svg" alt="Logo" className="h-8" />
    <ul className="hidden md:flex items-center gap-12">
      <li>
        <a className="text-sm font-light tracking-uppercase uppercase hover:opacity-60 transition-opacity duration-250">
          Collections
        </a>
      </li>
      <li>
        <a className="text-sm font-light tracking-uppercase uppercase hover:opacity-60 transition-opacity duration-250">
          About
        </a>
      </li>
    </ul>
    <button className="text-sm font-light tracking-uppercase uppercase">
      Menu
    </button>
  </div>
</nav>
```

**Scrolled state:** subtle change only—backdrop blur + micro‑shadow **or** border‑bottom (pick one; do not stack unless the border is extremely faint).

---

## Visual Elements & Media
- **Aspect ratios:** prefer `aspect-square` (1:1) and `aspect-[4/5]`; avoid `16/9` for editorial imagery.
- **Image budgets:** hero min **1600w** (ideal 3200w @2×); cards = container width × 2. Always provide `srcset` + `sizes`; lazy‑load below the fold.
- **Grayscale overlays (allowed):**
```css
.hero-overlay {
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%);
}
```
- **Object fit:** containers define aspect; images use `object-cover` to avoid stretching.

**Responsive snippet:**
```html
<picture>
  <source type="image/avif" srcset="/image-800w.avif 800w, /image-1600w.avif 1600w"/>
  <source type="image/webp" srcset="/image-800w.webp 800w, /image-1600w.webp 1600w"/>
  <img
    src="/image-800w.jpg"
    srcset="/image-800w.jpg 800w, /image-1600w.jpg 1600w"
    sizes="(max-width: 768px) 100vw, 800px"
    loading="lazy"
    alt="Description"
    width="800"
    height="600"
  />
</picture>
```

---

## Forms & Inputs
- **Labels:** uppercase, thin, tracking wide.
- **Inputs:** `px-6 py-4`, border `gray-200`, focus to `gray-400`. No bright blue focus.
- **Typography:** weight `300`.
```tsx
<div className="space-y-2">
  <label className="block text-sm font-light tracking-uppercase uppercase text-gray-700">
    Email Address
  </label>
  <input
    type="email"
    className="w-full px-6 py-4 border border-gray-200 font-light text-base tracking-luxury
      focus:outline-none focus:border-gray-400 transition-colors duration-250"
    placeholder="your@email.com"
  />
</div>
```

---

## Buttons & CTAs
- **Variants:** two only.
  - **Primary:** solid soft black; white text.
  - **Secondary:** transparent with 1px black border; hover inverts to solid black / white text.
- **Typography:** uppercase, tracking `~0.15em`, weight `300`, size `~14px` (≥12px).
- **Shape:** radius `0–2px` (`rounded-none` or `rounded-[2px]`), no pills.
- **Spacing:** `px-12 py-5` (≈ 48×18px). Tap target ≥ 44px.
- **Motion:** `250ms` `luxury-in` on hover; no scale/bounce.
- **States:** focus ring `2px gray-300` with `2px` offset; active 90–95% opacity for ~150–200ms; disabled 35–50% opacity; loading → replace label with single word ("Processing…").
- **Accessibility:** contrast ≥ 4.5:1.

```tsx
// Primary
<button className="inline-flex items-center justify-center px-12 py-5 text-sm font-light tracking-uppercase uppercase
  text-white bg-black transition-all duration-250 ease-luxury-in
  focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2
  disabled:opacity-40 disabled:cursor-default">
  Reserve
</button>

// Secondary
<button className="inline-flex items-center justify-center px-12 py-5 text-sm font-light tracking-uppercase uppercase
  text-black border border-black bg-transparent transition-all duration-400 ease-luxury-in
  hover:bg-black hover:text-white
  focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2
  disabled:opacity-40 disabled:cursor-default">
  Inquire
</button>
```

---

## Performance Optimization
- **Images:** AVIF/WebP; responsive `srcset/sizes`; lazy‑load; width/height attributes to prevent layout shift; compress to ~80–85% quality.
- **Fonts:** preconnect to font host; `font-display: swap`; subset if custom.
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400&display=swap" rel="stylesheet">
```
- **CSS:** purge unused; inline critical; defer non‑critical.
- **JavaScript:** keep minimal; defer non‑critical; code‑split.
- **Server:** CDN; Brotli; HTTP/2+.

---

## Tone & Voice Guidelines
- **Confidence without hype.** Short sentences; active voice; no superlatives.
- **Vocabulary:** crafted, refined, precise, considered, enduring.
- **Links:** keep underlines; fade opacity on hover (do not remove underlines).
- **Where personality belongs:** editorials/blog only—never in navigation, forms, or legal copy.

---

## Legal Pages & Disclosures
- **Structure:** short intro, clear sections, plain language, short paragraphs.
- **Typescale (example):**
```css
.legal-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 80px 32px;
}
.legal-page h1 {
  font-size: 36px;
  font-weight: 200;
  margin-bottom: 32px;
}
.legal-page h2 {
  font-size: 20px;
  font-weight: 300;
  margin: 48px 0 16px;
}
.legal-page p {
  font-size: 16px;
  font-weight: 300;
  line-height: 1.7;
  color: var(--gray-700);
  margin-bottom: 20px;
}
```
- **Cookie notice (bottom banner):**
```css
.cookie-notice {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 24px 32px;
  background: var(--luxury-white);
  border-top: 1px solid var(--gray-200);
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  z-index: var(--z-toast);
}
```

---

## Micro-Interactions
- **Focus rings:** subtle gray `2px` + offset; always visible on keyboard nav.
- **Smooth scroll:** `html { scroll-behavior: smooth; }`.
- **Scrollbar (subtle):**
```css
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: var(--gray-50); }
::-webkit-scrollbar-thumb { background: var(--gray-300); border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: var(--gray-400); }
* {
  scrollbar-width: thin;
  scrollbar-color: var(--gray-300) var(--gray-50);
}
```
- **Loading state:** minimal text with gentle pulse—no spinners or skeleton walls.

---

## Grid Systems & Layouts
- **Use up to three:** 2‑column, 3‑column, and asymmetric (2fr/1fr). Add masonry for editorial galleries.
```css
/* 2-column */
.grid-2col {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 64px;
}
@media (max-width: 768px) {
  .grid-2col {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

/* 3-column */
.grid-3col {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
}
@media (max-width: 1024px) {
  .grid-3col {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 640px) {
  .grid-3col {
    grid-template-columns: 1fr;
  }
}

/* Asymmetric */
.grid-asymmetric {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 64px;
}
@media (max-width: 768px) {
  .grid-asymmetric {
    grid-template-columns: 1fr;
  }
}

/* Masonry */
.grid-masonry {
  columns: 3;
  column-gap: 48px;
}
.grid-masonry > * {
  break-inside: avoid;
  margin-bottom: 48px;
}
@media (max-width: 1024px) {
  .grid-masonry {
    columns: 2;
  }
}
@media (max-width: 640px) {
  .grid-masonry {
    columns: 1;
  }
}
```

---

## Advanced Techniques
- **Sticky sections:** use for images alongside scrolling copy (`position: sticky; top: 100px`).
- **Backdrop blur:** add `-webkit-backdrop-filter` for Safari; fallback to solid background if unsupported.
- **Rule‑breaking:** do not break weight standards, spacing grid, timing ranges, or z-index scale. Limited exceptions: accent color, grid structure, editorial typography—only with intent and documentation.

---

## Master Checklist

### Typography
- [ ] Body weight ≤ 300; headings 200
- [ ] Body leading ≥ 1.625; headings 1.1–1.25
- [ ] Use `tracking-uppercase` (0.15em), `tracking-display` (-0.02em), `tracking-luxury` (0.025em)
- [ ] Paragraphs ≤ 65ch

### Colors
- [ ] No pure black/white backgrounds
- [ ] Borders ≤ gray‑200
- [ ] Text in gray‑700 to gray‑900 range

### Spacing
- [ ] 8‑point grid (rare: 12px, 20px)
- [ ] Sections ≥ 96px vertical
- [ ] Card padding ≥ 32px
- [ ] Grid gaps ≥ 32px

### Shadows
- [ ] Layered 3–5; opacity ≤ 0.09
- [ ] Gray‑based; no `drop-shadow-*`
- [ ] Use `shadow-luxury-sm/md/lg` tokens

### Z-Index
- [ ] Use scale tokens only (dropdown, sticky, fixed, modal, tooltip, toast)
- [ ] Never arbitrary z-index values
- [ ] Navigation uses `z-fixed` (1030)
- [ ] Modals use `z-modal-backdrop` (1040) + `z-modal` (1050)

### Animation
- [ ] Durations 200–400ms; hover 250ms
- [ ] Use `ease-luxury-in` for enters; `ease-luxury-out` for exits
- [ ] No springs, parallax, or text slide‑ins

### Images
- [ ] Hero ≥ 1600w (3200w @2× ideal)
- [ ] AVIF/WebP; `srcset/sizes`; lazy‑load
- [ ] Aspect 1:1 or 4:5 for editorial
- [ ] Width/height attributes to prevent CLS

### Navigation
- [ ] Logo ≤ 32px height
- [ ] Uppercase thin links; `tracking-uppercase`
- [ ] Text "Menu"; modest scrolled state
- [ ] Uses `z-fixed` for stacking

### Buttons
- [ ] Two variants only; radius 0–2px
- [ ] Uppercase, `tracking-uppercase`, weight 300
- [ ] Contrast ≥ 4.5:1; honest states
- [ ] Tap target ≥ 44px

### Performance
- [ ] Font preconnect/swap; image compression
- [ ] Minimal JavaScript; code‑split; CDN
- [ ] Purge unused CSS

### Tone
- [ ] Short, active, understated; underlines on links
- [ ] No superlatives in UI copy

---

## Component Blueprints

### Hero (static, serene)
```tsx
<section className="relative min-h-screen flex items-center justify-center bg-white">
  <div className="max-w-luxury mx-auto px-8 text-center">
    <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight tracking-display leading-[1.1] mb-8">
      Your Headline Here
    </h1>
    <p className="text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto mb-12 tracking-luxury">
      Your elegant subheadline that provides context and intrigue
    </p>
    <button className="px-12 py-5 bg-black text-white font-light text-sm tracking-uppercase uppercase
      hover:bg-gray-900 transition-all duration-250 ease-luxury-in">
      Explore Collection
    </button>
  </div>
</section>
```

### Card (product/service)
```tsx
<div className="group shadow-luxury-md hover:shadow-luxury-lg transition-shadow duration-300 p-8 bg-white">
  <div className="aspect-square mb-6 overflow-hidden">
    <img
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      src="/product.jpg"
      alt="Product name"
    />
  </div>
  <h3 className="text-xl font-light tracking-tight mb-3">Product Title</h3>
  <p className="text-sm font-light leading-relaxed text-gray-600 tracking-luxury">
    Brief description that doesn't overwhelm
  </p>
</div>
```

### Modal
```tsx
<div className="fixed inset-0 z-modal-backdrop bg-black/50 flex items-center justify-center">
  <div className="relative z-modal bg-white max-w-2xl w-full mx-4 p-12 shadow-luxury-lg">
    <button
      className="absolute top-6 right-6 text-gray-600 hover:text-gray-900 transition-colors duration-250"
      aria-label="Close"
    >
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <h2 className="text-3xl font-extralight tracking-tight mb-6">Modal Title</h2>
    <p className="text-base font-light leading-relaxed tracking-luxury text-gray-700">
      Modal content goes here
    </p>
  </div>
</div>
```

### Footer (minimal)
```tsx
<footer className="py-16 px-8 border-t border-gray-100">
  <div className="max-w-luxury mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
    <p className="text-sm font-light tracking-wide text-gray-600">
      © 2025 Your Brand
    </p>
    <nav className="flex gap-8">
      <a className="text-sm font-light tracking-wide text-gray-600 hover:text-gray-900 transition-colors duration-250">
        Contact
      </a>
      <a className="text-sm font-light tracking-wide text-gray-600 hover:text-gray-900 transition-colors duration-250">
        Privacy
      </a>
      <a className="text-sm font-light tracking-wide text-gray-600 hover:text-gray-900 transition-colors duration-250">
        Terms
      </a>
    </nav>
  </div>
</footer>
```

---

**Version History:**
- v1.1 (2025-01-11): Added z-index scale, breakpoint tokens, tracking tokens, shadow usage guide, modal blueprint
- v1.0 (2025-01-11): Initial release
