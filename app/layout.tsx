import type { Metadata } from 'next'
import { Cormorant_Garamond, Nunito } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ohana Montessori — Infant, Toddler & Preschool in Santa Ana, CA',
  description: 'A nature-inspired Montessori school in Santa Ana, CA serving infants through preschool. Where curiosity is invited, imagination is honored, and every child is nurtured.',
  openGraph: {
    images: [{ url: 'https://ohanamontessori.com/og-image.jpg', width: 1200, height: 628, alt: 'Ohana Montessori — Santa Ana, CA' }],
  },
  twitter: { card: 'summary_large_image', images: ['https://ohanamontessori.com/og-image.jpg'] },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ChildCare',
  '@id': 'https://ohanamontessori.com/#business',
  name: 'Ohana Montessori',
  url: 'https://ohanamontessori.com',
  telephone: '+17149427135',
  email: 'info@ohanamontessori.com',
  description: 'A nature-inspired Montessori school in Santa Ana, CA serving infants through preschool-age children.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2102 N. Tustin Avenue',
    addressLocality: 'Santa Ana',
    addressRegion: 'CA',
    postalCode: '92705',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Santa Ana' },
    { '@type': 'City', name: 'Irvine' },
    { '@type': 'City', name: 'Tustin' },
    { '@type': 'City', name: 'Costa Mesa' },
  ],
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '07:00', closes: '18:00' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${nunito.variable} h-full antialiased`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
