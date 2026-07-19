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
      {
        source: '/schedule-a-tour',
        destination: '/schedule-a-tour-santa-ana-daycare-preschool',
        permanent: true,
      },
      {
        source: '/preschool-program',
        destination: '/preschool-program-santa-ana-tustin-irvine',
        permanent: true,
      },
      {
        source: '/request-information-short-form',
        destination: '/request-information-daycare-santa-ana',
        permanent: true,
      },
      {
        source: '/request-information-short-form/',
        destination: '/request-information-daycare-santa-ana',
        permanent: true,
      },
      {
        source: '/how-to-choose-the-perfect-preschool-in-orange-ca-a-complete-parents-guide',
        destination: '/blog/how-to-choose-the-perfect-preschool-in-orange-ca-a-complete-parents-guide',
        permanent: true,
      },
      {
        source: '/how-to-choose-the-perfect-preschool-in-orange-ca-a-complete-parents-guide/',
        destination: '/blog/how-to-choose-the-perfect-preschool-in-orange-ca-a-complete-parents-guide',
        permanent: true,
      },
      {
        source: '/top-rated-daycare-in-irvine-ca-what-parents-need-to-know-before-choosing',
        destination: '/blog/top-rated-daycare-in-irvine-ca-what-parents-need-to-know-before-choosing',
        permanent: true,
      },
      {
        source: '/top-rated-daycare-in-irvine-ca-what-parents-need-to-know-before-choosing/',
        destination: '/blog/top-rated-daycare-in-irvine-ca-what-parents-need-to-know-before-choosing',
        permanent: true,
      },
      {
        source: '/best-montessori-preschool-near-tustin-ca-expert-guide-for-toddlers-and-infants',
        destination: '/blog/best-montessori-preschool-near-tustin-ca-expert-guide-for-toddlers-and-infants',
        permanent: true,
      },
      {
        source: '/best-montessori-preschool-near-tustin-ca-expert-guide-for-toddlers-and-infants/',
        destination: '/blog/best-montessori-preschool-near-tustin-ca-expert-guide-for-toddlers-and-infants',
        permanent: true,
      },
      {
        source: '/the-complete-guide-to-choosing-the-perfect-preschool-in-irvine-ca',
        destination: '/blog/the-complete-guide-to-choosing-the-perfect-preschool-in-irvine-ca',
        permanent: true,
      },
      {
        source: '/the-complete-guide-to-choosing-the-perfect-preschool-in-irvine-ca/',
        destination: '/blog/the-complete-guide-to-choosing-the-perfect-preschool-in-irvine-ca',
        permanent: true,
      },
      {
        source: '/preschools-and-montessori-schools-in-orange-county-ca-test-2',
        destination: '/blog/preschools-and-montessori-schools-in-orange-county-ca-test-2',
        permanent: true,
      },
      {
        source: '/preschools-and-montessori-schools-in-orange-county-ca-test-2/',
        destination: '/blog/preschools-and-montessori-schools-in-orange-county-ca-test-2',
        permanent: true,
      },
      {
        source: '/montessori-vs-traditional-daycare-in-costa-mesa-which-is-right-for-your-child',
        destination: '/blog/montessori-vs-traditional-daycare-in-costa-mesa-which-is-right-for-your-child',
        permanent: true,
      },
      {
        source: '/montessori-vs-traditional-daycare-in-costa-mesa-which-is-right-for-your-child/',
        destination: '/blog/montessori-vs-traditional-daycare-in-costa-mesa-which-is-right-for-your-child',
        permanent: true,
      },
      {
        source: '/best-infant-care-near-newport-beach-ca-what-to-look-for',
        destination: '/blog/best-infant-care-near-newport-beach-ca-what-to-look-for',
        permanent: true,
      },
      {
        source: '/best-infant-care-near-newport-beach-ca-what-to-look-for/',
        destination: '/blog/best-infant-care-near-newport-beach-ca-what-to-look-for',
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
