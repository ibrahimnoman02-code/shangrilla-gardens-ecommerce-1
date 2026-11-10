# Shangrilla Gardens & BBQ — Complete Website Design System Harness

> **Version:** 1.0 — Last updated: 2026-11-09
> **Purpose:** Single source of truth for every design token, UI component, layout pattern, interaction behavior, data schema, business rule, and content copy used across the Shangrilla Gardens & BBQ e-commerce website.

---

## Table of Contents

1. [Brand Identity](#1-brand-identity)
2. [Design Tokens (CSS Custom Properties)](#2-design-tokens)
3. [Typography System](#3-typography-system)
4. [Color Palette](#4-color-palette)
5. [Spacing, Radius & Shadows](#5-spacing-radius--shadows)
6. [Motion & Transitions](#6-motion--transitions)
7. [Layout & Grid System](#7-layout--grid-system)
8. [Responsive Breakpoints](#8-responsive-breakpoints)
9. [Site Architecture & Navigation](#9-site-architecture--navigation)
10. [Component Library](#10-component-library)
11. [Page Sections & Content Copy](#11-page-sections--content-copy)
12. [Data Model & Schema](#12-data-model--schema)
13. [Business Logic & Rules](#13-business-logic--rules)
14. [Accessibility Standards](#14-accessibility-standards)
15. [Image Assets Inventory](#15-image-assets-inventory)
16. [External Dependencies](#16-external-dependencies)
17. [Test Harness Architecture](#17-test-harness-architecture)
18. [File Structure](#18-file-structure)

---

## 1. Brand Identity

### Brand Name & Taglines
* **Primary Name:** Shangrilla Garden & BBQ
* **Display Name (uppercase):** SHANGRILLA GARDEN & BBQ
* **Primary Tagline:** "A little sophistication, served hot"
* **Secondary Tagline:** "Where Quality & Quantity Come First"
* **Kitchen Tag:** "From the Kitchen of Shangrilla Garden"
* **Heritage Line:** "Royal Flavors, Garden Fresh Dining"

### Logo System
* **Logo Mark:** Gold line-art "S" monogram, transparent PNG `assets/images/logo.png` (160×160), shown at 40×40px (36×36px below 400px width) with no background box
* **Favicons:** `assets/images/favicon-32.png` (browser tab) and `assets/images/apple-touch-icon.png` (180×180 on `#0d0c0b`, iOS home screen)
* **Logo Text Stack:**
  - Brand Name: `Cinzel`, 1.15rem, weight 700, letter-spacing 0.04em
  - "SHANGRILLA" in `--text-main` (#f8fafc), "GARDEN & BBQ" in `--primary` (#f59e0b)

### Contact Information
* **Home Delivery Hotline:** 061-454880
* **Reservation & Marquee:** 0307-8882936
* **WhatsApp:** +92 307-8882936
* **Email:** orders@shangrillagardens.com
* **Address:** Club Road, Shangrilla Garden & BBQ
* **Operating Hours:** Mon–Sun: 12:00 PM – 01:00 AM
  - Lunch: 12:00 PM – 4:00 PM
  - Dinner: 7:00 PM – 1:00 AM

### Social Media Channels
* WhatsApp, Facebook (`facebook.com/shangrillaBBQOfficial`), Instagram (`instagram.com/shangrillagardens`)

---

## 2. Design Tokens

### Core Background Tokens
| Token | Value | Usage |
|:---|:---|:---|
| `--bg-main` | `#0d0c0b` | Page body background |
| `--bg-card` | `#181613` | Cards, drawers, footer |
| `--bg-card-hover` | `#221f1a` | Card hover state |
| `--bg-elevated` | `#28241f` | Elevated surfaces, inputs |
| `--bg-glass` | `rgba(24, 22, 19, 0.82)` | Header & filter bar (with backdrop-filter) |
| `--bg-glass-modal` | `rgba(18, 16, 14, 0.95)` | Modal overlays |

### Primary (Gold) Tokens
| Token | Value | Usage |
|:---|:---|:---|
| `--primary` | `#f59e0b` | Primary accent, active states, icons |
| `--primary-hover` | `#d97706` | Hover state |
| `--primary-glow` | `rgba(245, 158, 11, 0.35)` | Box-shadow glow effects |
| `--primary-subtle` | `rgba(245, 158, 11, 0.12)` | Subtle background tint |

### Gold Accent Tokens
| Token | Value | Usage |
|:---|:---|:---|
| `--gold-accent` | `#fbbf24` | Prices, stars, highlight text |
| `--gold-gradient` | `linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%)` | Buttons, badges |
| `--gold-glow-gradient` | `linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)` | Hover state gradient, hero text |

### Text Tokens
| Token | Value | Usage |
|:---|:---|:---|
| `--text-main` | `#f8fafc` | Primary body text |
| `--text-muted` | `#a1a1aa` | Secondary/muted text |
| `--text-dim` | `#71717a` | Tertiary/dim labels |

### Border Tokens
| Token | Value | Usage |
|:---|:---|:---|
| `--border-subtle` | `rgba(245, 158, 11, 0.15)` | Gold-tinted borders |
| `--border-card` | `rgba(255, 255, 255, 0.08)` | Card & input borders |
| `--border-glow` | `rgba(245, 158, 11, 0.45)` | Active/focus glow borders |

### Semantic Status Tokens
| Token | Value | Usage |
|:---|:---|:---|
| `--success` | `#10b981` | Success states, completed steps, green accents |
| `--spicy` | `#ef4444` | Error states, delete, spice indicator |
| `--info` | `#38bdf8` | Informational blue accents |

---

## 3. Typography System

### Font Families
| Token | Family Stack | Usage |
|:---|:---|:---|
| `--font-display` | `'Cinzel', serif` | Brand name, logo text |
| `--font-heading` | `'Playfair Display', serif` | Section titles, hero, dish titles |
| `--font-body` | `'Plus Jakarta Sans', sans-serif` | Body text, UI, labels |

### Font Loading
```
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
```

### Type Scale
| Element | Family | Size | Weight | Extras |
|:---|:---|:---|:---|:---|
| Hero Title | Playfair Display | 3.4rem | 700 | line-height: 1.12 |
| Hero Title (mobile ≤768px) | Playfair Display | 2.5rem | 700 | — |
| Section Title | Playfair Display | 2.5rem | 700 | line-height: 1.2 |
| Section Subtitle | Plus Jakarta Sans | 0.85rem | 700 | uppercase, letter-spacing: 0.15em |
| Card Title | Playfair Display | 1.25rem | 700 | line-height: 1.3 |
| Card Subtitle | Plus Jakarta Sans | 0.78rem | 600 | uppercase, letter-spacing: 0.08em |
| Card Description | Plus Jakarta Sans | 0.88rem | 400 | line-height: 1.55, 2-line clamp |
| Body Text | Plus Jakarta Sans | 0.95rem | 400 | line-height: 1.6 |
| Nav Link | Plus Jakarta Sans | 0.92rem | 500 | — |
| Button Text | Plus Jakarta Sans | 0.92rem | 700 | — |
| Price Display | Plus Jakarta Sans | 1.35rem | 800 | color: --gold-accent |
| Price Hero | Plus Jakarta Sans | 1.45rem | 800 | color: --gold-accent |
| Dietary Tag | Plus Jakarta Sans | 0.72rem | 400 | — |
| Badge | Plus Jakarta Sans | 0.72rem | 800 | uppercase, letter-spacing: 0.05em |
| Top Bar | Plus Jakarta Sans | 0.82rem | 400 | — |
| Footer Text | Plus Jakarta Sans | 0.88rem | 400 | — |

### Harness Typography (harness.html only)
| Token | Family Stack |
|:---|:---|
| `--h-font-sans` | `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif` |
| `--h-font-mono` | `'JetBrains Mono', 'Fira Code', 'Consolas', monospace` |

---

## 4. Color Palette

### Dark Theme Gradient Background
```css
body {
  background-image:
    radial-gradient(circle at 10% 20%, rgba(245, 158, 11, 0.04) 0%, transparent 40%),
    radial-gradient(circle at 90% 80%, rgba(217, 119, 6, 0.04) 0%, transparent 40%),
    linear-gradient(to bottom, rgba(13, 12, 11, 0.85), rgba(13, 12, 11, 1));
  background-attachment: fixed;
}
```

### Social Brand Colors
| Platform | Color |
|:---|:---|
| WhatsApp | `#25D366` (gradient to `#128C7E`) |
| Facebook | `#1877F2` |
| Twitter/X | `#000000` |
| LinkedIn | `#0A66C2` |

### Scrollbar
* Track: `--bg-main`
* Thumb: `--bg-elevated`
* Thumb hover: `--primary`
* Width: 8px

---

## 5. Spacing, Radius & Shadows

### Border Radius Tokens
| Token | Value | Usage |
|:---|:---|:---|
| `--radius-sm` | `8px` | Inputs, small cards, tags |
| `--radius-md` | `14px` | Medium cards, modals, review cards |
| `--radius-lg` | `22px` | Large cards (hero, story, reservation) |
| `--radius-full` | `9999px` | Pills, buttons, badges, search bar |

### Shadow Tokens
| Token | Value | Usage |
|:---|:---|:---|
| `--shadow-card` | `0 10px 30px -10px rgba(0,0,0,0.6), 0 0 1px 1px rgba(255,255,255,0.05)` | All cards |
| `--shadow-glow` | `0 12px 35px -5px rgba(245,158,11,0.3)` | Highlighted / promoted elements |
| `--shadow-modal` | `0 25px 50px -12px rgba(0,0,0,0.85)` | Modal containers |

### Key Spacing
| Context | Value |
|:---|:---|
| Max content width | 1280px |
| Harness max width | 1400px |
| Section horizontal padding | 24px |
| Nav container padding | 14px 24px |
| Card body padding | 20px |
| Cart drawer max-width | 440px |
| Modal max-width (customizer) | 760px |
| Modal max-width (checkout) | 600px |
| Modal max-width (tracker) | 620px |
| Menu grid gap | 28px |
| Menu grid min column width | 320px |

---

## 6. Motion & Transitions

### Transition Tokens
| Token | Value | Usage |
|:---|:---|:---|
| `--transition-fast` | `0.18s cubic-bezier(0.4, 0, 0.2, 1)` | Hover states, colors, small transforms |
| `--transition-normal` | `0.3s cubic-bezier(0.4, 0, 0.2, 1)` | Drawer slide, modal fade, cards |
| `--transition-bounce` | `0.4s cubic-bezier(0.34, 1.56, 0.64, 1)` | Cart badge scale, modal scale-up |

### Keyframe Animations
| Name | Effect | Duration | Usage |
|:---|:---|:---|:---|
| `pulseDot` | Scale 1→1.3→1, opacity 1→0.6→1 | 2s infinite | Kitchen live dot, active timeline |
| `floatSlow` | TranslateY 0→-8px→0 | 4s ease-in-out infinite | Floating stat card |
| `pulseGlow` | Box-shadow pulse 0→16px→0 | 2s infinite | Success order icon |
| `waPulse` | Scale 0.95→1.25→0.95, opacity fade | 2s cubic-bezier infinite | WhatsApp pulse ring |
| `slideToast` | TranslateY 20px→0, opacity 0→1 | 0.3s forwards | Toast notifications |
| `fadeIn` | Opacity 0→1, translateY 4px→0 | 0.25s ease-out | Tab pane switching |
| `fadeInRight` | Opacity 0→1, translateX 10px→0 | 0.4s ease forwards | WhatsApp tooltip |

### Hover Transforms
| Component | Transform |
|:---|:---|
| Buttons (primary, secondary) | `translateY(-2px)` |
| Food cards | `translateY(-6px)` |
| Featured poster card | `translateY(-6px)` |
| Card image (on card hover) | `scale(1.06)` |
| Poster image (on card hover) | `scale(1.04)` |
| Story gallery image | `scale(1.08)` |
| WhatsApp FAB | `scale(1.1) rotate(5deg)` |
| Modal close | `rotate(90deg)` |
| Cart badge (on button hover) | `scale(1.15)` |

---

## 7. Layout & Grid System

### Page-Level Layouts
| Section | Grid | Gap |
|:---|:---|:---|
| Hero | `1.15fr 0.85fr` (2-col) | 40px |
| Menu Grid | `repeat(auto-fill, minmax(320px, 1fr))` | 28px |
| Story Card | `1fr 1fr` (2-col) | 48px |
| Story Gallery | `1fr 1fr` (2×2) | 16px |
| Story Features | `1fr 1fr` (2×2) | 16px |
| Reservation | `1fr 1.2fr` (2-col) | 40px |
| Booking Form | `1fr 1fr` (2-col) | 18px |
| Reviews | `repeat(auto-fit, minmax(320px, 1fr))` | 24px |
| Footer | `1.5fr 1fr 1fr 1.2fr` (4-col) | 40px |
| Customizer Modal | `1fr 1.2fr` (2-col) | — |
| Payment Options | `repeat(3, 1fr)` | 12px |
| Order Timeline | `repeat(4, 1fr)` | 8px |
| Cart Item Row | `64px 1fr auto` | 14px |
| Share Card | Flex row, `space-between` | 32px |
| Checkout Tabs | Flex row, equal width | — |

### Harness Page Layouts
| Section | Grid |
|:---|:---|
| Metrics Ribbon | `repeat(auto-fit, minmax(220px, 1fr))` |
| Scenarios Grid | `repeat(auto-fill, minmax(280px, 1fr))` |
| State Inspector | `1fr 1fr` (2-col) |
| Sandbox | `280px 1fr` sidebar + stage |

---

## 8. Responsive Breakpoints

### Breakpoint: ≤1024px
* Hero grid → single column
* Story card → single column
* Reservation grid → single column
* Footer → 2 columns

### Breakpoint: ≤768px
* Nav links → hidden (no mobile menu implemented)
* Hero title → 2.5rem
* Customizer modal → single column
* Customizer media → max-height 240px
* Booking form → single column
* Payment options → single column
* Footer → single column
* Order timeline → 2 columns, no connecting line
* Share card → column direction
* WhatsApp tooltip → hidden

### Breakpoint: ≤960px (Harness)
* Sandbox layout → single column

### Breakpoint: ≤900px (Harness)
* State inspector → single column

---

## 9. Site Architecture & Navigation

### Primary Navigation (index.html)
| Link Text | Target | Notes |
|:---|:---|:---|
| Home | `#hero` | Active by default |
| Menu & Sizzlers | `#menuSection` | — |
| Our Heritage | `#brandStory` | — |
| Book a Table | `#reservationSection` | — |
| Reviews | `#reviewsSection` | — |

### Top Announcement Bar
* **Live Notice:** "Kitchen Live: Sizzlers & Tandoor Baking Now • Express Delivery in 35-45 mins"
* **Pulse dot:** Green (#10b981), animated pulse
* **Currency Toggle:** USD ($) / PKR (Rs.) — pill toggle with gold gradient active state
* **Delivery link:** 061-454880
* **Reservation link:** 0307-8882936

### Header Actions
* WhatsApp icon button (opens `wa.me` link)
* Share icon button (copies page link)
* "Explore Menu" secondary button → `#menuSection`
* "Order Cart" button with live badge counter

### Footer Navigation
**Column 1:** Brand info + social icons (WhatsApp, Facebook, Instagram)
**Column 2:** Culinary Menu links → `#menuSection`
**Column 3:** Ordering & Service links
**Column 4:** Visit & Contact (address, hours, phones, email)
**Bottom:** © 2026 + Privacy Policy, Terms of Service, Hygiene Standards

### Floating Elements
* **WhatsApp FAB:** Fixed bottom-right (28px), 60×60px, gradient green, pulse ring animation, tooltip
* **Dev HUD Badge:** Fixed bottom-left (24px), QA badge → opens test harness panel
* **Toast Container:** Fixed bottom-left (24px), stacked notifications

---

## 10. Component Library

### 10.1 Buttons

#### `.btn-primary`
* Background: `--gold-gradient`
* Text: `#12100e`
* Weight: 700
* Padding: 10px 22px
* Radius: `--radius-full`
* Shadow: `0 4px 16px var(--primary-glow)`
* Hover: translateY(-2px), stronger shadow, `--gold-glow-gradient`

#### `.btn-secondary`
* Background: `rgba(255, 255, 255, 0.05)`
* Border: `1px solid var(--border-card)`
* Text: `--text-main`
* Weight: 600
* Hover: 10% white bg, translateY(-2px)

#### `.btn-card-order`
* Gold gradient background, rounded pill
* Padding: 8px 16px
* Contains `<i class="fa-solid fa-plus">` + "Order" text

#### `.btn-card-view`
* 36×36px circle, transparent bg
* Settings/sliders icon
* Hover: primary color border & icon

#### `.icon-btn`
* 42×42px circle
* Used for social icons and share
* Hover: elevated bg, gold border, translateY(-2px)

#### `.cart-btn`
* Pill shape with icon + text + live badge
* Border: `--border-subtle`
* Hover: primary border, golden glow shadow

### 10.2 Cards

#### `.food-card` (Menu Item Card)
* Aspect: vertical, flex column
* Media: 16:11 aspect ratio, lazy-loaded image
* Badge: absolute top-left, gold gradient pill
* Rating pill: absolute top-right, dark glass background, star icon + number
* Body: subtitle → title → description (2-line clamp) → dietary tags → footer (price + actions)
* Hover: translateY(-6px), glow shadow, image scale(1.06)

#### `.featured-poster-card` (Hero Showcase)
* 4:5 aspect ratio poster image
* Full overlay gradient (top→bottom)
* Top badge row: "Chef's Signature" ribbon + "Sizzling Hot" pill
* Bottom: dish title, description (2-line clamp), price + order button
* Hover: translateY(-6px), enhanced glow

#### `.review-card`
* Stars row (5 gold stars)
* Quote text (italic, muted)
* Author row: name + dish tag
* Border-top separator above author

#### `.scenario-card` (Harness)
* Title with icon + label
* Description text
* Action button at bottom
* Hover: gold border, translateY(-2px)

#### `.metric-card` (Harness)
* Label + large mono value on left
* Color-coded icon square on right
* Hover: subtle lift

### 10.3 Modals

#### Product Customizer Modal (`#customizerModal`)
* 2-column grid: left image + right options
* Content sections:
  - Heading (title + subtitle)
  - Description
  - Portion size radio group (required)
  - Spice level radio group (3 options: Mild, Medium, Fiery)
  - Add-ons checkboxes (optional, dynamic list)
  - Special instructions text input
  - Footer: quantity controls (−/+) + "Add to Order • Rs. X" button

#### Checkout Modal (`#checkoutModal`)
* Top: 3-tab toggle (Express Delivery | Self Takeaway | Dine-In Order)
* Form fields: Name*, Phone*, Address* (delivery), Table # (dine-in), Notes
* Payment grid: Cash on Delivery | Card on Delivery | Digital / QR Pay
* Bill summary box: Subtotal, Delivery, Final Total
* "Place Order Now" submit button

#### Order Tracker Modal (`#orderTrackerModal`)
* Success pulse icon (green circle with check)
* "Order Confirmed!" heading + Order ID
* 4-step timeline: Received → In Kitchen → On the Way → Delivered
* Printable receipt paper: header, guest info, item rows, grand total
* Print Receipt + Continue Browsing buttons

### 10.4 Cart Drawer (`#cartOverlay`)
* Slide-over from right, max-width 440px
* Header: "Your Feast Cart" + close button
* Free shipping progress bar: text + percentage + fill bar
* Items list: image (64×64) + info (name, variation, addons, qty controls) + price + remove
* Footer: coupon box + bill summary (subtotal, discount, delivery, tax, grand total) + checkout button

### 10.5 Forms

#### `.form-control`
* Padding: 12px 16px
* Background: `--bg-elevated`
* Border: `--border-card`
* Radius: `--radius-sm`
* Focus: primary border + 3px primary-subtle shadow

#### `.search-input`
* Full-width, pill shape (`--radius-full`)
* Left search icon, right clear button
* Focus: primary border + subtle glow

#### `.sort-select`
* Pill shape select dropdown
* Background: `--bg-card`

#### `.coupon-input`
* Uppercase transform
* Paired with "Apply" button

### 10.6 Tags & Badges

#### `.dietary-tag`
* Tiny pill: 0.72rem, 3px 8px padding
* Transparent bg with subtle border
* Used for: "Charcoal Grilled", "High Protein", spice level, etc.

#### `.card-badge`
* Gold gradient pill, top-left on card image
* Font: 0.72rem, weight 800, uppercase

#### `.card-rating-pill`
* Dark glass background, top-right on card image
* Star icon + rating number
* Gold accent color

#### `.ribbon`
* Gold gradient pill
* Used on hero poster ("Chef's Signature") and receipt ("PAID / COD")

#### `.live-sizzle-pill`
* Dark glass background with fire icon
* Color: `#fca5a5` (light red)

#### `.hero-tag`
* Primary-subtle bg, primary border, primary text
* Crown/leaf icon + text
* Pill shape

#### `.hero-badge-item`
* Card bg, card border, full radius
* Icon (primary color) + text

### 10.7 Toast Notifications
* Position: fixed bottom-left (24px)
* Background: `--bg-elevated`, border: `--border-subtle`
* Slide-up animation
* Types: `toast-success` (green icon), `toast-error` (red icon)
* Auto-dismiss: 3500ms with fade-out

### 10.8 Category Filter Tabs
* Sticky position below header (top: 73px)
* Horizontal scroll, no scrollbar
* Each tab: `.category-tab-btn` pill with icon + text
* Active: gold gradient bg, dark text, glow shadow

### 10.9 Order Timeline
* 4-step horizontal grid (responsive: 2-col on mobile)
* Connecting line via `::before` pseudo-element
* States:
  - Default: dim icon circle
  - Active: primary bg, gold border, pulsing glow
  - Completed: green bg, white icon

### 10.10 Free Shipping Progress Bar
* 6px height, rounded
* Fill: gold gradient
* Threshold: Rs. 9,975 (USD $35.00)
* Congratulations message at 100%

### 10.11 Bill Summary
* Stacked rows: label + value
* Total row: larger font, dashed border-top, gold accent value

### 10.12 Currency Toggle
* Two pill buttons: USD ($) / PKR (Rs.)
* Active: gold gradient bg, dark text, glow shadow
* Inactive: muted text, dark bg

---

## 11. Page Sections & Content Copy

### 11.1 Hero Section
* **Tag:** "From the Kitchen of Shangrilla Garden"
* **Headline:** A little sophistication, *served hot & sizzling.*
* **Subtitle:** Indulge in our acclaimed flame-grilled **Truffle Mushroom Chicken Steak**, slow-simmered **Handi Chicken Hari Mirch**, and piping hot **Clay Oven Artisan Naans** crafted by master chefs.
* **Badges:**
  - Cast Iron Sizzling Platters
  - Clay Tandoor Fresh Breads
  - Free Delivery on Orders Over Rs. 9,975
* **CTAs:** Order Online Now → `#menuSection` | Reserve Table → `#reservationSection`
* **Featured Card:** Truffle Mushroom Chicken Steak (Rs. 5,412 / $18.99)
* **Floating Stat:** 4.9 / 5.0 Rating — Over 1,500+ Verified Guests

### 11.2 Menu Section
* **Subtitle:** Gourmet Selection
* **Title:** Royal Kitchen & BBQ Menu
* **Description:** Prepared to order with handpicked farm-fresh produce, authentic Kashmiri spices, and pure desi makhan.
* **Filter Bar:** Category tabs (14 categories) + Search input + Sort select (Featured, Price Low/High, Rating)

### 11.3 Brand Story Section
* **Tag:** Pure Ingredients
* **Title:** From the Kitchen of Shangrilla Garden
* **Description:** At Shangrilla Gardens & BBQ, our culinary philosophy blends the theatrical sizzle of continental cast-iron steaks with the timeless royal aroma of Mughlai clay-oven tandoor craft.
* **Feature Cards:**
  - Truffle Infusion — Authentic truffle mushroom reductions crafted fresh daily.
  - Charcoal Grill — Smoked to perfection with organic wood coal heat.
  - Heritage Handi — Slow-simmered in clay & metal handi vessels with yogurt and herbs.
  - Insulated Delivery — Custom heat-locking packaging guarantees steaming hot delivery.
* **Gallery:** 4 images (handi, nans, steak, malai boti)

### 11.4 Reservation Section
* **Tag:** Dine & Events
* **Title:** Table Reservation & Marquee Booking
* **Description:** Reserve your open-air garden gazebo or cozy indoor sizzler lounge table, or book our grand **Royal Marquee** for weddings, corporate galas, and banquet celebrations.
* **Seating Options:**
  - 2 Guests (Couple Table)
  - 4 Guests (Family Table) — default
  - 6 Guests (Garden Gazebo)
  - 8-12 Guests (VIP Executive Lounge)
  - 30-50 Guests (Private Lawn Party)
  - 100-500+ Guests (Royal Marquee Wedding & Banquet)
* **Time Slots:** 1:00 PM, 7:30 PM, 9:00 PM (default), 10:30 PM, Marquee Day, Marquee Night
* **Venue Spaces:** Grand Royal Marquee, Open-Air Garden, Indoor Dining, Live Sizzler Show Bar

### 11.5 Reviews Section
* **Subtitle:** Guest Testimonials
* **Title:** What Our Patrons Say
* **Description:** Cherished memories of hot sizzling steaks, rich curries, and warm hospitality.
* **Reviews (3):**
  1. Tariq Mansoor — Truffle Mushroom Steak (5★)
  2. Ayesha Malik — Handi Hari Mirch (5★)
  3. Danyal Shah — Special Nans Platter (5★)

### 11.6 Social Share Section
* **Tag:** Spread the Flavor
* **Title:** Share Shangrilla Garden & BBQ
* **Buttons:** WhatsApp, Facebook, X/Twitter, LinkedIn, Copy Link

---

## 12. Data Model & Schema

### 12.1 `RESTAURANT_DATA` Root Object
```
{
  name: string,
  slogan: string,
  tagline: string,
  deliveryPhone: string,
  reservationPhone: string,
  phone: string,
  email: string,
  address: string,
  openingHours: string,
  deliveryFee: number (USD),         // 2.50
  freeDeliveryThreshold: number,     // 35.00
  taxRate: number,                   // 0.05
  currency: CurrencyConfig,
  coupons: Coupon[],
  categories: Category[],
  items: MenuItem[]
}
```

### 12.2 Currency Config
```
{
  symbol: "$",
  code: "USD",
  rate: 1,
  altSymbol: "Rs.",
  altCode: "PKR",
  altRate: 285
}
```

### 12.3 Category Schema
```
{
  id: string,       // "all", "deals", "soups", "bbq", etc.
  name: string,     // Display name
  icon: string      // Font Awesome class (e.g., "fa-utensils")
}
```

**14 Categories:** all, deals, soups, bbq, steaks, pizza, handi, seafood, rice, naans, chinese, beverages, hotbrews, desserts

### 12.4 Menu Item Schema
```
{
  id: string,
  title: string,
  subtitle: string,
  category: string,          // matches category.id
  price: number,             // base price in USD
  rating: number,            // 0.0–5.0
  reviewsCount: number,
  badge: string | null,      // e.g., "Chef's Signature"
  featured: boolean,
  image: string,             // relative path
  gallery: string[],
  description: string,
  dietary: string[],         // e.g., ["Charcoal Grilled", "High Protein"]
  spiceLevel: string,        // e.g., "Medium Spicy"
  prepTime: string,          // e.g., "15-20 mins"
  portions: Portion[],
  addons: Addon[]
}
```

### 12.5 Portion Schema
```
{
  name: string,              // e.g., "Full Bowl (Serves 2-3)"
  priceDelta: number         // USD delta from base price (can be negative)
}
```

### 12.6 Addon Schema
```
{
  name: string,              // e.g., "Extra Creamy Truffle Mushroom Sauce"
  price: number              // USD additional cost
}
```

### 12.7 Coupon Schema
```
{
  code: string,              // e.g., "SHANGRILLA10"
  type: "percent" | "fixed" | "shipping",
  value: number,             // percent value or USD amount
  minOrder: number,          // min subtotal in USD
  desc: string
}
```

**Active Coupons:**
| Code | Type | Value | Min Order | Description |
|:---|:---|:---|:---|:---|
| SHANGRILLA10 | percent | 10 | $15 | 10% off entire order |
| ROYALSTEAK | fixed | $5.00 | $25 | $5 off premium sizzlers |
| FREESHIP | shipping | — | $20 | Free priority delivery |

### 12.8 Cart Item Schema (runtime)
```
{
  id: string,                // unique cart item ID
  variationKey: string,      // composite key for deduplication
  productId: string,
  title: string,
  image: string,
  category: string,
  portionName: string,
  portionPriceDelta: number,
  spiceLevel: string,
  addons: Addon[],
  instructions: string,
  unitPrice: number,         // base + priceDelta + addons total
  quantity: number
}
```

### 12.9 Order Schema
```
{
  orderId: string,           // "SG-XXXXXX"
  date: string,
  orderType: "delivery" | "pickup" | "dinein",
  customer: { name, phone, address },
  payment: "cash" | "card" | "online",
  notes: string,
  items: CartItem[],
  totals: TotalsObject
}
```

---

## 13. Business Logic & Rules

### 13.1 Pricing Engine
* All base prices stored in **USD**
* PKR conversion: `Math.round(usdAmount × 285)`
* USD format: `$X.XX` (2 decimal places)
* PKR format: `Rs. X,XXX` (comma-separated integer)

### 13.2 Cart Logic
* **Variation deduplication key:** `productId|portionName|spiceLevel|sorted addons|instructions`
* Same variation → increment quantity
* Different variation → new line item
* Unit price = `basePrice + priceDelta + sum(addon.price)`
* Quantity minimum: 1
* Quantity reaching 0 → auto-remove item
* Cart persisted in `localStorage` key: `shangrilla_cart_v1`

### 13.3 Delivery Fee Rules
* Standard delivery fee: **$2.50** (Rs. 713)
* Free delivery threshold: **$35.00** (Rs. 9,975)
* Subtotal ≥ threshold → delivery fee waived
* Pickup orders: always $0 delivery
* Dine-in orders: always $0 delivery
* FREESHIP coupon: overrides delivery fee to $0

### 13.4 Tax Calculation
* Tax rate: **5%** of taxable amount
* Taxable amount = `subtotal - discount`
* Grand total = `taxable + deliveryFee + tax`

### 13.5 Coupon Engine
* Code matching: case-insensitive, trimmed, uppercased
* Validation: code must exist in `RESTAURANT_DATA.coupons`
* Min order check: `subtotal >= coupon.minOrder`
* Percent type: `discount = subtotal × value / 100`
* Fixed type: `discount = min(subtotal, value)`
* Shipping type: `deliveryFee = 0`
* Only one coupon active at a time
* Coupon persisted in `localStorage` key: `shangrilla_coupon_v1`

### 13.6 Currency Switching
* Default: PKR
* Persisted in `localStorage` key: `shangrilla_currency_v2`
* Switching re-renders: menu cards, hero price, free delivery threshold, cart totals

### 13.7 Order Tracking Simulation
* 4 steps with 6000ms interval between progressions
* Step progression: Received(completed) → In Kitchen(active) → On the Way → Delivered
* Toast at step 3: "Sizzling hot Chicken Steak is on its way..."
* Toast at step 4: "Your feast has safely arrived!"

### 13.8 Reservation Logic
* If area is "marquee" OR guests ≥ 50 → booking type = "Royal Marquee & Banquet"
* Otherwise → "Table" booking
* Confirmation toast with guest details
* WhatsApp confirmation message: via `0307-8882936`

### 13.9 Order History
* Max 20 orders stored in `localStorage` key: `shangrilla_orders_v1`
* New orders prepended (LIFO)
* Excess trimmed with `.slice(0, 20)`

### 13.10 localStorage Resilience
* Corrupt JSON → caught by try/catch → returns empty array `[]`
* All localStorage access wrapped in defensive try/catch blocks

---

## 14. Accessibility Standards

### ARIA Attributes
| Element | Attribute | Value |
|:---|:---|:---|
| Top bar | `aria-label` | "Announcement" |
| Main nav | `aria-label` | "Main Navigation" |
| Cart drawer | `aria-modal` | "true" |
| Cart overlay | `role` | "dialog" |
| Customizer modal | `aria-modal` | "true" |
| Checkout modal | `aria-modal` | "true" |
| Order tracker modal | `aria-modal`, `role` | "true", "dialog" |
| Toast container | `aria-live` | "polite" |
| WhatsApp FAB | `aria-label` | "Chat on WhatsApp" |
| Dev HUD | `aria-label` | "Developer Harness HUD" |
| Search input | `aria-label` | "Search menu items" |
| Share button | `aria-label` | "Share" |
| Cart button | `aria-label` | "View Shopping Cart" |
| Social icons | `aria-label` | Platform name |
| Close buttons | `aria-label` | "Close" / "Close Cart" |
| Viewport iframe | `title` | "Shangrilla Gardens Live Preview" |

### Semantic HTML
* `<aside>` for top bar, WhatsApp FAB, cart drawer, dev HUD
* `<header>` for site header
* `<nav>` with `aria-label` for navigation
* `<main>` wrapping all sections
* `<section>` for each page section with IDs
* `<article>` for each food card
* `<footer>` for site footer
* `<form>` for reservation and checkout
* `<button>` for all interactive controls (not `<div>`)

### Keyboard & Interaction
* All modals close on backdrop click
* All modals close on close button click
* Scroll behavior: smooth (`html { scroll-behavior: smooth }`)
* All links have `rel="noopener"` for external targets
* Images have descriptive `alt` text
* Lazy loading: `loading="lazy"` on menu card images

---

## 15. Image Assets Inventory

All images stored in `assets/images/`:

| Filename | Used For |
|:---|:---|
| `truffle-mushroom-steak-poster.jpg` | Hero featured poster, og:image |
| `truffle-mushroom-steak-close.jpg` | Truffle steak (close-up, data.js) |
| `handi-chicken-hari-mirch.jpg` | Handi dish, brand story gallery, deals |
| `special-artisan-nans.jpg` | Naan platter, story gallery |
| `fire-glazed-mexican-steak.jpg` | Mexican steak, story gallery |
| `bbq-malai-boti-platter.jpg` | Malai boti, story gallery, BBQ items |
| `artisan-bbq-pizza.jpg` | Pizza items |
| `crispy-zinger-burger.jpg` | Burger, sandwiches |
| `crispy-wings-fries.jpg` | Wings, fries |
| `hot-and-sour-soup.jpg` | Soups |
| `golden-corn-soup.jpg` | Corn soup |
| `traditional-mutton-karahi.jpg` | Mutton deals |
| `royal-chicken-biryani.jpg` | Rice items |
| `dhaka-fried-fish.jpg` | Seafood |
| `chicken-chow-mein.jpg` | Chinese items |
| `cappuccino-coffee.jpg` | Hot brews, dessert platter |
| `signature-drinks.jpg` | Beverages, fruit salad |
| `kulfa-falooda-dessert.jpg` | Desserts |
| `molten-lava-cake.jpg` | Bakery items |
| `punjabi-lassi-jug.jpg` | Lassi, cold drinks |

---

## 16. External Dependencies

### CDN Resources
| Resource | URL | Purpose |
|:---|:---|:---|
| Font Awesome 6.5.1 | `cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css` | Icons (solid, brands) |
| Google Fonts | `fonts.googleapis.com` | Cinzel, Playfair Display, Plus Jakarta Sans |
| Google Fonts (Harness) | `fonts.googleapis.com` | Inter, JetBrains Mono |

### JavaScript Dependencies
* **Zero external JS dependencies** — all logic is vanilla JavaScript
* No jQuery, React, Vue, or any framework
* Cart state via `localStorage` API
* Custom events via `CustomEvent` API

### Icon Usage (Font Awesome Solid)
`fa-crown`, `fa-fire-burner`, `fa-bread-slice`, `fa-truck-fast`, `fa-utensils`, `fa-calendar-check`, `fa-bag-shopping`, `fa-share-nodes`, `fa-book-open`, `fa-magnifying-glass`, `fa-xmark`, `fa-star`, `fa-plus`, `fa-sliders`, `fa-fire`, `fa-motorcycle`, `fa-champagne-glasses`, `fa-phone-volume`, `fa-clock`, `fa-location-dot`, `fa-circle-check`, `fa-money-bill-wave`, `fa-credit-card`, `fa-mobile-screen-button`, `fa-check`, `fa-arrow-right`, `fa-print`, `fa-file-invoice`, `fa-bell-concierge`, `fa-leaf`, `fa-gem`, `fa-bowl-food`, `fa-temperature-arrow-up`, `fa-link`, `fa-envelope`, `fa-pepper-hot`, `fa-plate-wheat`, `fa-trash-can`, `fa-tag`, `fa-circle-exclamation`, `fa-play`, `fa-spinner`, `fa-code`, `fa-file-arrow-down`, `fa-flask-vial`, `fa-microchip`, `fa-arrow-up-right-from-square`, `fa-cart-shopping`, `fa-ticket`, `fa-money-bill-transfer`, `fa-shield-virus`, `fa-clock-rotate-left`, `fa-circle-dot`, `fa-circle-xmark`, `fa-receipt`, `fa-timeline`, `fa-bell`, `fa-cubes`, `fa-network-wired`, `fa-mobile-screen`, `fa-tablet-screen-button`, `fa-desktop`, `fa-triangle-exclamation`, `fa-circle-info`, `fa-vial`, `fa-percent`

### Icon Usage (Font Awesome Brands)
`fa-whatsapp`, `fa-facebook-f`, `fa-instagram`, `fa-x-twitter`, `fa-linkedin-in`

---

## 17. Test Harness Architecture

### Harness Page (harness.html)
Separate page at `/harness.html` with its own design system (`harness.css`).

### Harness Design Tokens
| Token | Value |
|:---|:---|
| `--h-bg` | `#0b0f17` |
| `--h-surface` | `#131b26` |
| `--h-surface-elevated` | `#1a2536` |
| `--h-border` | `rgba(255,255,255,0.08)` |
| `--h-border-focus` | `rgba(212,163,89,0.5)` |
| `--h-gold` | `#d4a359` |
| `--h-gold-glow` | `rgba(212,163,89,0.25)` |
| `--h-primary` | `#ff5722` |
| `--h-success` | `#10b981` |
| `--h-danger` | `#ef4444` |
| `--h-warning` | `#f59e0b` |
| `--h-info` | `#38bdf8` |
| `--h-text` | `#f1f5f9` |
| `--h-text-muted` | `#94a3b8` |
| `--h-text-dim` | `#64748b` |

### 4 Harness Tabs
1. **Automated Test Runner** — BDD test suites with real-time execution, progress bar, pass/fail rendering, filter, MD/JSON export
2. **State & Scenario Injector** — 7 one-click state presets + live localStorage JSON editor
3. **Component Isolation Sandbox** — 5 component previews: Menu Card, Item Customizer, Receipt, Timeline, Toasts
4. **Chaos, Latency & Viewports** — Device viewport simulator (375/768/1200px) + latency injection + live iframe preview

### Test Engine (`harness-engine.js`)
* Lightweight BDD framework: `describe()`, `it()`, `expect()`, `beforeEach()`, `afterEach()`
* Matchers: `toBe`, `toEqual`, `toBeDefined`, `toBeNull`, `toBeTruthy`, `toBeFalsy`, `toBeGreaterThan`, `toBeLessThan`, `toBeCloseTo`, `toContain`, `toThrow`
* Negation: `expect(x).not.toBe(y)`
* Async support: `async/await` in test functions
* Deep equality: recursive object/array comparison
* Event system: `testStart`, `testComplete`, `suiteStart`, `suiteComplete`, `runComplete`
* Markdown report generator

### 8 Test Suites (`harness-suites.js`)
1. **Data Model & Schema Validation** — RESTAURANT_DATA root, branding, pricing constants, categories, dishes, coupons
2. **Cart Operations & Item Variations** — add item, portion delta, addons, distinct/identical variations, quantity update, remove, clear
3. **Coupons & Promotional Logic** — invalid code rejection, min order check, percent/fixed/shipping coupons, coupon removal
4. **Tax & Shipping Math Engine** — standard delivery fee, free delivery threshold, pickup fee waiver, tax at 5%
5. **Multi-Currency Formatter** — USD format, PKR format with 285× conversion
6. **LocalStorage Resilience & Order Archival** — corrupt JSON handling, order history save/retrieve
7. **DOM Structure & Accessibility Standards** — modal ARIA attributes, toast aria-live
8. **Asynchronous Dish Image Reachability** — HEAD request to all dish images for HTTP 200

### 7 Scenario Presets
| Name | Action |
|:---|:---|
| Empty Slate | Clear all cart, coupons, orders |
| Single Sizzler Steak | 1× Truffle Steak + sauce ($21.24) |
| Near Free Shipping | Cart at $34.49 ($0.51 from threshold) |
| VIP Royal Feast | Multiple items >$100, free shipping |
| Promo SHANGRILLA10 | 10% discount applied |
| Currency Toggle: PKR | Switch to PKR display |
| Corrupt State Test | Inject malformed JSON |

### Dev HUD Badge (`harness-badge.js`)
* Floating pill (bottom-left) on main site
* Click to expand: cart count, currency, links to harness
* "Load VIP Feast" and "Clear Cart" quick actions
* Syncs with `cart:updated` event

---

## 18. File Structure

```
shangrilla-gardens-ecommerce/
├── index.html                    # Main website
├── harness.html                  # Test & development harness page
├── server.ps1                    # Local dev server script
│
├── css/
│   ├── style.css                 # Main website styles (2303 lines)
│   └── harness.css               # Harness page styles (669 lines)
│
├── js/
│   ├── data.js                   # RESTAURANT_DATA (menu, categories, items, coupons)
│   ├── cart.js                   # CartManager class (state, localStorage, calculations)
│   ├── app.js                    # Main app logic (rendering, modals, events)
│   ├── harness-engine.js         # BDD test framework engine
│   ├── harness-suites.js         # Test suite definitions (8 suites)
│   ├── harness-ui.js             # Harness UI controller (tabs, sandbox, chaos)
│   └── harness-badge.js          # Dev HUD floating badge
│
├── assets/
│   └── images/                   # 20 dish/product images (.jpg)
│
├── harness/
│   ├── menu-items.md             # Complete menu with prices (PKR)
│   └── design-system.md          # THIS FILE — complete design system harness
│
├── menu_slices/                  # Original menu PDF slices (11 PNG files)
├── tests/
│   └── run_tests.py              # Python test runner
│
├── extracted_full_menu.json      # Extracted menu data (JSON)
├── extracted_full_menu.txt       # Extracted menu data (text)
├── extracted_menu.txt            # Earlier menu extraction
├── generated_items.json          # Generated menu item data
├── DOC-20260201-WA0009..pdf      # Original menu PDF
│
├── apply_full_menu.py            # Menu application script
├── check_pdf_dim.py              # PDF dimension checker
├── copy_new_images.py            # Image copy utility
├── generate_menu_data.py         # Menu data generator
├── match_images.py               # Image matching utility
├── parse_inspect.py              # Parsing inspector
├── run_menu_ocr.py               # OCR processing script
├── scratch_dump.py               # Debug dump utility
└── scratch_extract.py            # Extraction scratch script
```

---

*This design system harness is the single source of truth for the Shangrilla Gardens & BBQ website. Every design token, component specification, business rule, data schema, content copy, and architectural decision is documented here. Use this file to ensure consistency when building new features, debugging issues, or onboarding new contributors.*
