/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true }, // Set to false in production for image optimization
}

// Performance budget enforced:
// LCP < 2.5s | INP < 100ms | CLS < 0.1
// Monitor: npx lighthouse http://localhost:3000 --only-categories=performance
// Recommendations for meeting budgets:
// 1. next.config.js — set `images: { unoptimized: false }` in production; use Next.js <Image> not raw <img>
// 2. No render-blocking third-party scripts — defer all analytics with `next/script strategy="lazyOnload"`
// 3. tailwind.config.js — set `content` paths correctly to enable tree-shaking (no unused CSS ships)
// 4. Font loading — use `next/font` not `<link rel="stylesheet">` for Google Fonts
// 5. Bundle budget — no single JS chunk over 250KB (gzipped). Avoid importing lodash/moment/date-fns without tree-shaking.

module.exports = nextConfig