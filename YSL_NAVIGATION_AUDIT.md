# YSL Navigation Component Audit

## Current Status

Our navigation is **functionally complete** but needs **style/layout refinement** to match YSL's precisely.

---

## ISSUES IDENTIFIED

### 1. **isOverlay Prop Removed (BREAKING CHANGE)**

**Status**: ✅ Already fixed in Header.tsx  
**What**: Header now always passes `isOverlay={true}` — navigation always white text on transparent header  
**Impact**: YSLNavigation.tsx still has conditional color logic (line 77: `color: isOverlay ? "white" : "var(--nav-color-primary)"`)

**Action Needed**:

- Remove `isOverlay` prop from YSLNavigation entirely
- Hardcode nav items to white text (since header is always transparent)
- Update DesktopNavigation interface to remove isOverlay

---

### 2. **Navigation Layout & Spacing**

**Current**: Using `--nav-gap-desktop: 48px`, `--nav-padding-x: 64px`  
**YSL Values**: Same tokens (good!)  
**Status**: ✅ Already aligned via token merger

---

### 3. **Mega Menu Behavior**

**Current Implementation**:

- Hidden by default (opacity: 0, pointer-events: none)
- Shows on hover with 150ms delay
- Smooth transition in/out

**YSL Likely Does**:

- Similar hover behavior (need to verify exact delays and easing)
- White/dark background in mega menu
- Different column layout possibly

**Action Needed**:

- Confirm mega menu behavior matches (delays, easing, styling)
- Check if background color should change when menu opens

---

### 4. **Nav Item Styling**

**Current**:

- `.ysl-nav-item` has conditional color
- Gradient underline (0 → 100% on hover)
- Translate Y on hover

**YSL Pattern**:

- White text always (now that header is always transparent)
- Underline effect confirmed ✅
- Hover animation confirmed ✅

**Action Needed**:

- Remove color conditional logic
- Update `.ysl-nav-item` to not need isOverlay

---

### 5. **Mobile Navigation**

**Current**:

- Uses hamburger button
- Full-viewport drawer on mobile
- Accordion-style expandable sections

**YSL Likely Does**:

- Similar drawer pattern
- Check if color/background needs adjustment for always-transparent header

**Action Needed**:

- Verify mobile nav styles still work with transparent header
- Check if hamburger button color needs hardcoding to white

---

### 6. **Global text-transform: uppercase**

**Status**: ✅ Just added  
**Impact**: All navigation labels will be uppercase now (which is correct for YSL)  
**Potential Issue**: Make sure nav labels in config don't duplicate uppercase

---

## NEXT STEPS

### Phase 1: Refactor YSLNavigation Component

1. **Remove `isOverlay` prop** entirely
2. **Hardcode nav colors** to white/inverse colors
3. **Update interface** to reflect single-mode (always white text)
4. **Test** all three mega menus (BROWSE, EXPERIENCE, CUSTOMER SERVICE)

### Phase 2: Verify Mega Menu Styling

Need to check YSL's actual CSS:

- Mega menu background color (ours: `rgba(250, 250, 250, 0.99)` light / `rgba(26, 26, 26, 0.95)` dark)
- Mega menu border colors
- Column spacing and alignment
- Section header styling
- Sub-link styling

### Phase 3: Verify Mobile Navigation

Need to check:

- Mobile drawer background and styling
- Hamburger button color (should always be white now)
- Accordion behavior
- Typography in mobile context

---

## REVISION PRIORITY

| Priority  | Component          | Action                                 |
| --------- | ------------------ | -------------------------------------- |
| 🔴 HIGH   | YSLNavigation.tsx  | Remove isOverlay prop, hardcode colors |
| 🟡 MEDIUM | Mega menu styling  | Pull YSL's mega-menu CSS               |
| 🟡 MEDIUM | Mobile nav styling | Verify drawer works with new header    |
| 🟢 LOW    | Token alignment    | Already done ✅                        |

---

## FILES TO PULL FROM YSL

1. **Mega menu CSS** - Need full `.ysl-mega-menu` and `.ysl-mega-menu-*` rules
2. **Mobile drawer CSS** - Need `.ysl-mobile-drawer` complete rules
3. **Any responsive breakpoints** - To verify our layout matches

---

## RECOMMENDED CODE CHANGES

### YSLNavigation.tsx Changes:

```typescript
// REMOVE: isOverlay prop from both DesktopNavigationProps and MobileNavigationProps
// REMOVE: All conditional color styling based on isOverlay
// CHANGE: Always use white text color
// EXAMPLE:

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  menuItems,
  // isOverlay removed
}) => {
  // ... rest of code
  <button
    className="ysl-nav-item"
    style={{ color: "white" }} // No conditional
  >
```

### Header.tsx Changes:

```typescript
// ALREADY DONE ✅
// Now always passes isOverlay={true}
// Can eventually remove isOverlay entirely from nav
```

---

## CONFIDENCE LEVEL

- ✅ Header styling: 95% (matches YSL)
- ✅ Token system: 100% (merged successfully)
- 🔄 Navigation layout: 80% (structure seems right, styling needs verification)
- 🔄 Mega menu behavior: 70% (likely correct, but delays/easing unconfirmed)
- 🔄 Mobile nav: 70% (structure good, styling unconfirmed)

---

## OPEN QUESTIONS

1. Does YSL's mega menu background change based on scroll/overlay?
2. What exact easing curves does YSL use for mega menu show/hide?
3. What are the exact column spacing values in mega menu grid?
4. Are there any special states (loading, active, error) we should implement?
5. Does mobile nav have special styling on transparent header vs scrolled state?
