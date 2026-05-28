---
name: Academic Core
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#434655'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#784b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#996100'
  on-tertiary-container: '#ffeedd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  container-margin: 24px
  gutter: 16px
---

## Brand & Style

This design system is built for the modern educator—balancing administrative efficiency with a welcoming, distraction-free learning environment. The brand personality is **reliable, organized, and empowering**, moving away from the cluttered density of traditional LMS platforms toward a more intentional, high-utility interface.

The visual style follows a **Corporate / Modern** aesthetic with a strong emphasis on **Minimalism**. It utilizes generous whitespace to reduce cognitive load during long grading sessions, while employing subtle tonal layering to keep the hierarchy intuitive. The interface should feel like a high-end productivity tool: precise, responsive, and quietly sophisticated.

## Colors

The color strategy prioritizes functional clarity and professional trust. 

- **Primary (Scholar Blue):** A vibrant, high-contrast blue used for primary actions, navigation states, and brand presence.
- **Secondary (Success Green):** A soft but legible green specifically reserved for "Published" statuses, completed assignments, and positive feedback.
- **Tertiary (Alert Amber):** Used sparingly for "Pending" items, drafts, or items requiring teacher attention.
- **Neutral (Slate):** A sophisticated range of grays that define the interface structure, borders, and secondary text.

The background is kept off-white (#F8FAFC) to reduce eye strain, while cards and containers use pure white to pop against the subtle background.

## Typography

This design system utilizes **Inter** for all roles to ensure maximum legibility and a systematic, clean aesthetic. The type scale is optimized for readability in data-heavy environments.

- **Headlines:** Use Semi-Bold (600) weights with slightly tightened letter spacing to create a strong visual anchor for page titles.
- **Body Text:** Set at 16px (md) for standard reading and 14px (sm) for dense data tables and sidebars.
- **Labels:** Uppercase labels with increased letter spacing are used for category headers and small metadata tags to differentiate them from interactive body text.

## Layout & Spacing

The layout utilizes a **12-column fluid grid** for desktop, transitioning to a **4-column grid** for mobile.

- **Desktop:** Sidebar is fixed at 260px. Content area is fluid with a maximum readable width of 1440px.
- **Tablet:** Sidebar collapses into a rail or becomes a hidden drawer. Margins reduce to 16px.
- **Vertical Rhythm:** A strict 4px base unit ensures consistent alignment. Elements should favor `md` (16px) or `lg` (24px) spacing for group separation.
- **Data Tables:** Use a compact horizontal padding (12px) but maintain a comfortable 56px row height to ensure touch targets are accessible and the eye can track data easily.

## Elevation & Depth

We use **Tonal Layers** combined with **Ambient Shadows** to create a sense of hierarchy.

1.  **Level 0 (Canvas):** The base background (#F8FAFC).
2.  **Level 1 (Card/Surface):** Pure white surfaces with a very soft, diffused shadow (0px 2px 4px rgba(0,0,0,0.05)). Used for dashboard widgets and list items.
3.  **Level 2 (Active/Hover):** A slightly more pronounced shadow (0px 4px 12px rgba(0,0,0,0.08)) to indicate interactivity or focused states.
4.  **Level 3 (Modals/Popovers):** High elevation with a crisp 1px neutral-200 border to ensure separation from the background.

Shadows should always be tinted with a hint of the primary Scholar Blue to prevent them from appearing muddy or "dirty."

## Shapes

The design system employs a **Rounded** shape language to appear approachable and modern.

- **Standard Elements:** Buttons, input fields, and small cards use a 0.5rem (8px) radius.
- **Large Components:** Dashboard containers and primary modals use a 1rem (16px) radius to soften the overall appearance of the layout.
- **Instructional Feedback:** Tooltips and small status tags use a 0.25rem (4px) radius to maintain precision at small scales.

## Components

### Buttons
- **Primary:** Solid Scholar Blue with white text. High-contrast, 8px corner radius.
- **Secondary:** White background with a 1px Slate-300 border.
- **Ghost:** No border or background; text turns Scholar Blue on hover. Used for secondary actions in tables.

### Dashboard Cards
Cards must include a 1px border (#E2E8F0) and Level 1 elevation. Headers within cards should use `title-md` and be separated by a subtle horizontal divider.

### Data Tables
- Header rows use `label-md` with a light gray background (#F1F5F9).
- Row hover states use a subtle blue tint (#EFF6FF).
- Status indicators (Chips) use soft, low-saturation backgrounds with high-saturation text for maximum accessibility.

### Sidebar Navigation
The sidebar uses a dark-on-light or light-on-dark theme depending on preference, but must utilize "active" indicators—a 4px vertical bar on the left edge of the active menu item in Scholar Blue.

### Input Fields
Inputs use a 1px border that thickens and changes to Scholar Blue on focus. Labels always sit above the field in `body-sm` bold.