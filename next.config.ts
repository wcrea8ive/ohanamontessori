import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  async redirects() {
    return [
      {
        source: '/request-information',
        destination: '/request-information-daycare-santa-ana',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'X-Permitted-Cross-Domain-Policies', value: 'none' },
          { key: 'Cross-Origin-Opener-Policy', value: 'unsafe-none' },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jotfor.ms https://form.jotform.com https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jotfor.ms https://form.jotform.com",
              "font-src 'self' https://fonts.gstatic.com https://cdn.jotfor.ms",
              "img-src 'self' data: blob: https:",
              "media-src 'self'",
              "frame-src https://form.jotform.com https://submit.jotform.com https://www.googletagmanager.com",
              "frame-ancestors 'self'",
              "connect-src 'self' https://form.jotform.com https://api.jotform.com https://cdn.jotfor.ms https://submit.jotform.com https://www.googletagmanager.com https://www.google-analytics.com https://analytics.google.com https://tagassistant.google.com",
              "form-action 'self' https://form.jotform.com https://submit.jotform.com",
            ].join('; '),
          },
        ],
      },
      {
        source: '/:all*(jpg|jpeg|png|gif|svg|ico|webp|woff|woff2|ttf|otf)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
};

export default nextConfig;
