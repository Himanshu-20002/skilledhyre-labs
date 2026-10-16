# Mobile Performance Optimization Plan (Lighthouse 63 ➔ 90+)

**Date:** October 16, 2026  
**Target:** SkilledHyre Labs Public Website (`office-Project/website`)  
**Objective:** Eliminate mobile touch-scroll jank, reduce Total Blocking Time (TBT) from 3,050 ms to < 250 ms, eliminate layout shifts (CLS), and elevate mobile Lighthouse Performance from 63 to 90+.

---

## 📊 Current vs. Target Metrics (Mobile Profile)

| Metric | Current Audit | Target Goal | Status |
| :--- | :---: | :---: | :--- |
| **Overall Performance Score** | **63 / 100** | **90+ / 100** | 🔴 Needs Major Elevation |
| **Total Blocking Time (TBT)** | **3,050 ms** | **< 250 ms** | 🔴 Critical (Main Thread Starvation) |
| **Main-Thread Work** | **6.5 s** | **< 2.0 s** | 🔴 Critical (CPU Thrashing) |
| **Long Main-Thread Tasks** | **13 Tasks** | **< 3 Tasks** | 🔴 13 Long Tasks Identified |
| **Non-Composited Animations** | **23 Elements** | **0 Elements** | 🔴 Forcing CPU Frame Rasterization |
| **Cumulative Layout Shift (CLS)** | **0.105** | **0.00** | 🟡 Needs Layout Reservation |
| **Network Transfer Payload** | **10.3 MB** | **~2.0 MB** | 🟡 97% Consumed by Video |
| **First Contentful Paint (FCP)** | **0.4 s** | **< 0.5 s** | 🟢 Optimal |
| **Largest Contentful Paint (LCP)** | **0.6 s** | **< 1.0 s** | 🟢 Optimal |

---

## 🔍 Identified Root Causes in the Codebase

1. **Massive 10 MB Video Stream on Mobile Devices**:
   - `public/video/quality_broll_new.mp4` is 9.95 MB.
   - On initial page load, mobile browsers automatically stream this 1080p desktop video over cellular networks, saturating CPU network buffers and video decoding chips during page hydration.
2. **GSAP Scroll Pinning (`pin: true`) on Mobile Viewports**:
   - In `About.jsx`, `(max-width: 768px)` runs `pin: true`, `pinSpacing: true`, `scrub: 0.6`.
   - On mobile touch screens with kinetic momentum, JavaScript pinning forces `.pin-spacer` DOM manipulation, continuous `window.scrollY` reads, and layout thrashing as browser URL bars resize dynamically on scroll.
3. **Continuous 25ms React Re-renders (`MatrixTextRotator.js`)**:
   - Executes an unthrottled `setInterval(..., 25)` (40 times/second) updating state via `setDisplayText()`.
   - Continuous state updates on a single-core mobile CPU trigger repetitive React reconciliations and forced reflows during scroll.
4. **23 Non-Composited Animations Forcing Continuous CPU Paint**:
   - **HeroBackground.js**: 12 SVG stars animating with `drop-shadow-[0_0_6px_currentColor]`. In mobile browser engines, animating CSS `drop-shadow` on SVG cannot run on the GPU compositor; the CPU must rasterize every frame.
   - **FloatingSpheresBackground.js**: Full-screen SVG canvases with radial gradients scaling up to `scale(2.1)` on `<g>` elements, triggering repeated SVG vector recalculations.
   - **ReviewsSection.module.css**: Continuous linear marquee animating under a `-webkit-mask-image` alpha gradient.
5. **Heavy `framer-motion` Runtime on Initial Bundle**:
   - `CounterItem.js` imports `useSpring` and `useInView` from `framer-motion` solely to animate 4 integer counters in `StatsSection.js`, importing ~35 KB gzipped / 120 KB JS into the critical mobile path.
6. **Dynamic Import Layout Shifts (`HomePageClient.js`)**:
   - `ServicesScroll` and `ReviewsSection` load via `next/dynamic({ ssr: false })` with no placeholder height, causing the page content below to shift down (CLS = 0.105) upon load.

---

## 🛠️ Step-by-Step Implementation Strategy

### Step 1: Media & Payload Optimization (10.3 MB ➔ ~2.0 MB)
- **Action**: Create a lightweight, mobile-optimized video asset (`public/video/quality_broll_mobile.mp4`) encoded at 720p 30fps with a target file size of **~1.5 MB – 2.0 MB** (78% bandwidth reduction).
- **Implementation in `About.jsx`**: Use HTML5 responsive `<source>` elements so mobile devices stream the lightweight asset while desktop streams the high-bitrate version:
  ```jsx
  <video ref={videoRef} autoPlay muted loop playsInline preload="auto" className="about-img-bg">
    <source media="(max-width: 768px)" src="/video/quality_broll_mobile.mp4" type="video/mp4" />
    <source media="(min-width: 769px)" src="/video/quality_broll_new.mp4" type="video/mp4" />
  </video>
  ```

---

### Step 2: Eliminate Mobile Scroll Pinning & Touch Jank in GSAP (`About.jsx`)
- **Action**: Disable `pin: true` exclusively for mobile viewports (`max-width: 768px`).
- **Implementation**:
  - **Desktop (above 768px):** Keep the full pinned 3D scale scrub (`pin: true, scrub: 0.6`) completely untouched.
  - **Mobile (768px & below):** Remove `pin: true`, `pinSpacing: true`, and `anticipatePin: 1`. Convert the mobile animation to a lightweight, non-pinning scroll-driven scale (`scale: 0.94` to `scale: 1.0`) with `ease: "power1.out"`.
- **Impact**: Zero touch-scroll trapping, zero address-bar resize recalculations, and 100% native smooth momentum scrolling on iOS and Android.

---

### Step 3: Main-Thread CPU Unburdening (`MatrixTextRotator.js`)
- **Action**: Eliminate the aggressive 25ms timer cycle.
- **Implementation**:
  - Replace `setInterval(..., 25)` with `requestAnimationFrame` or throttle the scramble frequency to 60–80ms on mobile viewports.
  - Add an `IntersectionObserver` to automatically pause the text rotator when scrolled out of view, ensuring zero CPU execution when reading lower sections.

---

### Step 4: Fix 23 Non-Composited Animations (Move from CPU to GPU)
- **HeroBackground.js**:
  - Remove CPU-intensive `drop-shadow-[0_0_6px_currentColor]` from animated SVG stars.
  - Replace with hardware-composited `box-shadow` or pure vector glow filters that run on the compositor thread without software re-rasterization.
  - On mobile screens, reduce star count from 12 to 6 to save GPU power.
- **FloatingSpheresBackground.js**:
  - On mobile (`max-width: 768px`), simplify the floating background to pure GPU-accelerated CSS radial gradients with fixed bounds, avoiding full-viewport SVG canvas repainting.
- **ReviewsSection.module.css**:
  - Add `will-change: transform; transform: translate3d(0, 0, 0);` to the marquee track.
  - On mobile screens, disable the heavy `-webkit-mask-image` alpha gradient that triggers per-frame CPU blending.

---

### Step 5: Trim Critical Path Bundle (Replace `framer-motion` in `CounterItem.js`)
- **Action**: Remove `framer-motion` (`useSpring`, `useInView`) from `CounterItem.js`.
- **Implementation**:
  - Replace with a lightweight, 15-line vanilla JavaScript `requestAnimationFrame` ease-out counter triggered by a native `IntersectionObserver`.
- **Impact**: Removes ~35 KB gzipped / 120 KB JS from the critical initial route, directly addressing Lighthouse's *"Reduce unused JavaScript (333 KiB)"*.

---

### Step 6: Zero-CLS Layout Shift Elimination (`HomePageClient.js`)
- **Action**: Prevent content jumping when dynamically imported sections load.
- **Implementation**:
  - Add minimum height reservations and sleek dark skeleton placeholders to `ServicesScroll` (`min-h-[650px]`) and `ReviewsSection` (`min-h-[450px]`):
  ```javascript
  const ServicesScroll = dynamic(
    () => import("@/components/services-storytelling").then((mod) => mod.ServicesScroll),
    { ssr: false, loading: () => <div className="min-h-[650px] w-full bg-black/20 animate-pulse" /> }
  );
  ```
- **Impact**: Reduces Cumulative Layout Shift (CLS) from **0.105 to 0.00** (Perfect Green).

---

## 📁 Exact Files to be Modified

| File | Changes Planned |
| :--- | :--- |
| `public/video/quality_broll_mobile.mp4` | Lightweight 720p 30fps mobile video asset (~1.5 MB) |
| `src/components/landing-page/reusable-about-component/About.jsx` | Responsive video `<source>` selection; disable `pin: true` on mobile |
| `src/components/common/MatrixTextRotator.js` | Throttle scramble speed & pause via `IntersectionObserver` |
| `src/components/landing-page/HeroBackground.js` | Replace CPU `drop-shadow` on stars with GPU-composited glow; reduce mobile stars |
| `src/components/common/FloatingSpheresBackground.js` | Mobile-optimized CSS radial gradient fallback (zero vector repaints) |
| `src/components/ReviewsSection/ReviewsSection.module.css` | GPU layer promotion for marquee; remove heavy alpha mask on mobile |
| `src/components/common/CounterItem.js` | Replace `framer-motion` with 15-line native rAF counter |
| `src/components/home/HomePageClient.js` | Add skeleton/min-height placeholders to dynamic imports to eliminate CLS |

---

## 🛡️ Guardrails & Desktop Integrity
- **Desktop (above 768px) is 100% Preserved**: All pinned 3D scale transforms, desktop video quality (1080p), and visual fidelity remain completely untouched.
- **Visual Parity Maintained**: All animations remain aesthetically rich, but execute via GPU compositor layers rather than main-thread CPU re-paints.
- **Fully Testable & Reversible**: Every change is staged incrementally with local verification before committing.
