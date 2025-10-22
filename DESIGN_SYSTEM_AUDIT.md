# Design System Audit: Current vs YSL

## Executive Summary
**Status**: Two separate systems with overlapping concerns  
**Risk**: Code duplication, maintenance burden, unpredictable token cascade  
**Recommendation**: Merge into unified system (no bloat, zero conflicts)

---

## 1. SPACING SYSTEM

### Current System (client/global.css)
```
--spacing-xs: 4px         (4px)
--spacing-sm: 8px         (8px)
--spacing-md: 16px        (16px)
--spacing-lg: 32px        (32px)
--spacing-xl: 64px        (64px)
--spacing-2xl: 96px       (96px)
--spacing-luxury: 128px   (128px)
```

**Issues:**
- Pixel-based (not responsive to root font-size changes)
- Limited granularity (7 sizes only)
- No semantic naming (what does "lg" mean contextually?)

### YSL System
```
--spacer-xxxs: 0.125rem   (2px @ 16px root)
--spacer-xxs: 0.25rem     (4px)
--spacer-xs: 0.5rem       (8px)
--spacer-s: 0.75rem       (12px)
--spacer-m: 1rem          (16px)
--spacer-l: 1.5rem        (24px)
--spacer-xl: 2rem         (32px)
--spacer-2xl: 2.5rem      (40px)
--spacer-3xl: 2.75rem     (44px)
--spacer-4xl: 3.5rem      (56px)
--spacer-5xl: 4rem        (64px)
--spacer-6xl: 4.5rem      (72px)
--spacer-7xl: 5rem        (80px)
--spacer-8xl: 5.5rem      (88px)
--spacer-9xl: 6rem        (96px)
--spacer-10xl: 6.5rem     (104px)
--spacer-11xl: 10.75rem   (172px)
```

**Semantic spacers (context-aware):**
```
--spacer-header-top: 1.125rem
--spacer-block-top: 3.75rem
--spacer-look-bottom: 6.25rem
--spacer-block-bottom: 6.25rem
--spacer-footer-bottom: 6.25rem
--spacer-title-bottom: 1.5rem
--spacer-inner: 1.375rem
--spacer-content-text: 1.25rem
--spacer-content: 5rem
```

**Advantages:**
- Rem-based (scales with root font-size)
- Much finer granularity (16 base sizes)
- Semantic naming for specific use cases
- Responsive by default

### Verdict
**ADOPT YSL'S APPROACH**: The rem-based system is superior. Convert our px values to rem equivalents.

---

## 2. COLOR SYSTEM

### Current System
```
Hex-based (non-granular):
--luxury-black: #1a1a1a
--luxury-white: #fafafa
--gray-50 through --gray-900 (grayscale only)

Navigation-specific hardcoded:
--nav-color-primary: var(--luxury-black)
--nav-color-hover: rgba(26, 26, 26, 0.7)
--nav-color-border: rgba(26, 26, 26, 0.04)
--nav-bg-header: rgba(250, 250, 250, 0.98)
```

**Issues:**
- No semantic meaning (what is --gray-400 used for?)
- Navigation colors scattered in --nav-* tokens
- No system for interactive states, error states, backgrounds

### YSL System
```
TEXT COLORS (with RGB + alpha for flexibility):
--color-text-primary: #000
--color-text-secondary: #999999
--color-text-tertiary: #666666
--color-text-inverse: rgb(255,255,255)
--color-text-calendar: #CCCCCC
--color-text-error: #B32519
--color-text-inverse-tertiary: rgb(255,255,255,0.45)

BACKGROUND COLORS:
--color-background-primary: rgb(255,255,255)
--color-background-secondary: #1A1A1A
--color-background-tertiary: #333333
--color-background-quaternary: #F5F5F7
--color-background-light: #E6E6E6
--color-background-lighter: #F2F2F2
--color-background-packshots: #F8F7F5
--color-background-inverse: #000
--color-background-blur: rgb(255,255,255,0.9)
--color-background-icon: rgb(255,255,255,0.3)
--color-background-dark-icon: rgb(0,0,0,0.2)
--color-background-overlay: rgb(239,239,239,0.6)
--color-background-error: #B32519
--color-background-scrollbar: #CCCCCC

BORDER COLORS:
--color-border-primary: #000
--color-border-secondary: #999999
--color-border-tertiary: #CCCCCC
--color-border-error: #B32519
--color-border-light: #F2F2F2
--color-border-inverse: rgb(255,255,255)

OUTLINE COLORS:
--color-outline-primary: #000
--color-outline-secondary: #999999
--color-outline-light: rgb(255,255,255)
--color-outline-highlight: #B32519

SHADOW:
--color-shadow-primary: #0000001A
```

**Advantages:**
- Semantic naming (what it's USED for, not just the color)
- RGB notation allows alpha/opacity manipulation
- Covers all interactive states (primary, secondary, tertiary, error)
- One place to find all colors

### Verdict
**ADOPT YSL'S APPROACH**: This is a massive improvement. Replace our grayscale-only system with semantic color naming.

---

## 3. TYPOGRAPHY SYSTEM

### Current System
```
WEIGHTS (generic):
--font-weight-thin: 100
--font-weight-extralight: 200
--font-weight-light: 300
--font-weight-body: 300
--font-weight-heading: 200

FAMILIES (embedded in nav tokens):
"Work Sans" and "Cormorant Garamond" imported but no explicit tokens
```

**Issues:**
- No explicit font-family tokens
- Weight names don't match weight values (--font-weight-thin is 100, not typical "thin")
- Families buried in imports

### YSL System
```
--sans: 'Helvetica_Reg', Helvetica, Arial, sans-serif
--copperplate: 'Copperplate', serif
--font-weight-medium: 500
--font-weight-semibold: 600
--font-weight-bold: 700
```

**Advantages:**
- Explicit font families
- Weight names match intent (medium/semibold/bold are standard)
- Easy to swap entire font system

### Verdict
**ADOPT + ADAPT**: Keep our imported families, but add explicit tokens.

---

## 4. EASING/ANIMATION SYSTEM

### Current System
```
Navigation-specific (embedded in --nav-transition-*):
--nav-transition-fast: 320ms cubic-bezier(0.16, 1, 0.3, 1)
--nav-transition-medium: 450ms cubic-bezier(0.16, 1, 0.3, 1)
--nav-transition-slow: 580ms cubic-bezier(0.16, 1, 0.3, 1)

Inline easing used throughout:
cubic-bezier(0, 0, 0.58, 1)
cubic-bezier(0.22, 1, 0.36, 1)
cubic-bezier(0.16, 1, 0.3, 1)
```

**Issues:**
- Easing curves not named (hard to reuse)
- Durations tied to navigation only
- Inconsistent timing values scattered

### YSL System
```
EASING CURVES (named):
--ease: cubic-bezier(.4,0,.2,1)
--ease-fade: cubic-bezier(.25,.1,.25,1)
--ease-transform: cubic-bezier(.22,1,.36,1)
--ease-bounce: cubic-bezier(.65,-.55,.25,1.5)
--ease-out-quint: cubic-bezier(.22,1,.36,1)

DURATION (implied in usage, not explicit token)
```

**Advantages:**
- Named easing curves (semantic)
- Easy to apply consistently
- Can be combined with any duration

### Verdict
**ADOPT YSL'S EASING + ENHANCE**: Use named easing curves, add duration tokens.

---

## 5. SHADOW SYSTEM

### Current System
```
--shadow-color: 0deg 0% 50%
--shadow-elevation-low: 0.5px 1px 1px hsl(var(--shadow-color) / 0.07)
--shadow-elevation-medium: (compound shadow, 3 layers)
--shadow-elevation-high: (compound shadow, 4 layers)
```

**Good system**, but YSL doesn't explicitly define shadows. No conflict.

### Verdict
**KEEP OURS**: Shadow system is clean and works well.

---

## 6. NAVIGATION-SPECIFIC TOKENS

### Current System (in --nav-* namespace)
```
FONTS:
--nav-font-family: "Work Sans", sans-serif
--nav-font-weight-thin: 200
--nav-font-weight-light: 300
--nav-font-size-sm: 11px
--nav-font-size-md: 12px
--nav-font-size-lg: 13px
--nav-letter-spacing-sm: 0.11em
--nav-letter-spacing-md: 0.18em
--nav-letter-spacing-lg: 0.22em

LAYOUT:
--nav-gap-desktop: 48px
--nav-gap-columns: 96px
--nav-padding-x: 64px
--nav-padding-y: 24px
--nav-height-desktop: 72px
--nav-height-mobile: 64px
--nav-height-scrolled: 64px

COLORS:
--nav-color-primary: var(--luxury-black)
--nav-color-hover: rgba(26, 26, 26, 0.7)
--nav-color-border: rgba(26, 26, 26, 0.04)
--nav-bg-header: rgba(250, 250, 250, 0.98)
--nav-bg-menu: rgba(250, 250, 250, 0.99)

SHADOWS:
--nav-shadow-sm: var(--shadow-elevation-low)
--nav-shadow-md: var(--shadow-elevation-medium)

TRANSITIONS:
--nav-transition-fast: 320ms cubic-bezier(0.16, 1, 0.3, 1)
--nav-transition-medium: 450ms cubic-bezier(0.16, 1, 0.3, 1)
--nav-transition-slow: 580ms cubic-bezier(0.16, 1, 0.3, 1)
```

**Issues:**
- Duplicates base tokens (--nav-font-family = "Work Sans")
- Navigation-specific namespace makes sense but mixes concerns
- Colors reference --luxury-black (one level of indirection)
- Transitions are hardcoded values + easing

### YSL System
**No navigation-specific tokens** — they build from base tokens only.

### Verdict
**REFACTOR**: Keep --nav-* tokens for semantic navigation layout (height, gap, padding), but map font/color/shadow to base tokens.

---

## 7. LAYOUT & RESPONSIVE SYSTEM

### Current System
```
No explicit grid or responsive layout tokens
Breakpoints implied in media queries (@media max-width: 1023px, etc.)
```

### YSL System
```
--grid-columns: 8
--container-width: 100%
--col-container-width: calc(var(--container-width,100%) - (2 * var(--outer-gutter,0)))
--breakpoint: 'sm'
--inner-gutter: 20px
--outer-gutter: 20px
```

**Advantages:**
- Explicit grid definition
- Container width control
- Gutter management

### Verdict
**ADOPT FOR FUTURE**: These are useful but not critical. We can add them later.

---

## 8. THIRD-PARTY INTEGRATIONS (Algolia Search)

### YSL System
```
50+ --aa-* variables for Algolia styling
--swiper-theme-color: #007aff
```

**Our System**
```
No Algolia tokens
```

### Verdict
**SKIP FOR NOW**: Only implement if/when we add Algolia search.

---

## 9. UTILITY/SEMANTIC HELPERS

### Current System (In utilities layer)
```
.tracking-luxury
.tracking-display
.tracking-uppercase
.scroll-snap-footer
.luxury-input
.btn-luxury-slide
.link-luxury
(etc.)
```

**Good system**, but not tokens — these are component classes.

### YSL System
```
No utility classes in their token dump (focus on tokens only)
```

### Verdict
**KEEP OURS**: These are utilities, not tokens. No conflict.

---

## MERGER STRATEGY

### Phase 1: Create Unified System (NO code bloat)

**New structure in global.css:**

```css
:root {
  /* 1. BASE TYPOGRAPHY */
  --font-sans: "Work Sans", sans-serif;
  --font-serif: "Cormorant Garamond", serif;
  --font-weight-thin: 100;
  --font-weight-extralight: 200;
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* 2. SPACING (rem-based, YSL approach) */
  --spacer-xxxs: 0.125rem;
  --spacer-xxs: 0.25rem;
  --spacer-xs: 0.5rem;
  --spacer-s: 0.75rem;
  --spacer-m: 1rem;
  --spacer-l: 1.5rem;
  --spacer-xl: 2rem;
  --spacer-2xl: 2.5rem;
  --spacer-3xl: 2.75rem;
  --spacer-4xl: 3.5rem;
  --spacer-5xl: 4rem;
  --spacer-6xl: 4.5rem;
  --spacer-7xl: 5rem;
  --spacer-8xl: 5.5rem;
  --spacer-9xl: 6rem;
  --spacer-10xl: 6.5rem;
  --spacer-11xl: 10.75rem;

  /* Semantic spacers */
  --spacer-header-top: 1.125rem;
  --spacer-block-top: 3.75rem;
  --spacer-block-bottom: 6.25rem;
  --spacer-footer-bottom: 6.25rem;
  --spacer-title-bottom: 1.5rem;
  --spacer-inner: 1.375rem;
  --spacer-content-text: 1.25rem;
  --spacer-content: 5rem;

  /* 3. COLORS (semantic, RGB for flexibility) */
  --color-text-primary: #1a1a1a;
  --color-text-secondary: #666666;
  --color-text-tertiary: #999999;
  --color-text-inverse: rgb(255, 255, 255);
  --color-text-error: #B32519;

  --color-background-primary: rgb(255, 255, 255);
  --color-background-secondary: #1A1A1A;
  --color-background-light: #F8F8F8;
  --color-background-lighter: #F2F2F2;
  --color-background-overlay: rgba(26, 26, 26, 0.4);
  --color-background-error: #B32519;

  --color-border-primary: #1a1a1a;
  --color-border-secondary: #cccccc;
  --color-border-tertiary: #e4e4e4;
  --color-border-error: #B32519;

  --color-shadow-primary: #0000001a;

  /* 4. EASING CURVES (named) */
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-fade: cubic-bezier(0.25, 0.1, 0.25, 1);
  --ease-transform: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-bounce: cubic-bezier(0.65, -0.55, 0.25, 1.5);
  --ease-out-quint: cubic-bezier(0.22, 1, 0.36, 1);

  /* 5. DURATIONS */
  --duration-fast: 320ms;
  --duration-medium: 450ms;
  --duration-slow: 580ms;

  /* 6. SHADOWS (kept from current system) */
  --shadow-elevation-low: 0.5px 1px 1px hsl(var(--shadow-color) / 0.07);
  --shadow-elevation-medium: ...;
  --shadow-elevation-high: ...;

  /* 7. NAVIGATION-SPECIFIC (semantic layout tokens only) */
  --nav-height-desktop: 72px;
  --nav-height-mobile: 64px;
  --nav-gap-desktop: 48px;
  --nav-gap-columns: 96px;
  --nav-padding-x: 64px;
  --nav-padding-y: 24px;

  /* Responsive gutters */
  --inner-gutter: 20px;
  --outer-gutter: 20px;
  --breakpoint-tablet: 1024px;
  --breakpoint-mobile: 640px;
}
```

### Phase 2: Update Component References

**Old:**
```css
.ysl-nav-item {
  color: var(--nav-color-primary);
  font-size: 13px;
  font-weight: var(--nav-font-weight-thin);
}
```

**New:**
```css
.ysl-nav-item {
  color: var(--color-text-primary);
  font-size: 13px;
  font-weight: var(--font-weight-thin);
}
```

### Phase 3: Test & Migrate

- No duplicate tokens
- All components reference single source
- Zero code bloat
- Easy to maintain

---

## FINAL RECOMMENDATION

**PROCEED WITH MERGER**

1. Create unified design system in global.css (replacing scattered tokens)
2. Keep YSL's rem-based spacing approach
3. Adopt YSL's semantic color naming
4. Add named easing curves
5. Retain our shadow system
6. Keep navigation-specific layout tokens (--nav-height, --nav-gap, etc.)
7. Test all pages after migration

**No bloat. One source of truth. Professional system.**
