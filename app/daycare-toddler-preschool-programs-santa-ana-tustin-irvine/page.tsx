import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { Animate, AnimateStagger, AnimateItem } from '@/components/Animate'

export const metadata: Metadata = {
  title: 'Infant, Toddler & Preschool Programs in Santa Ana, CA',
  description: 'Explore our Infant, Toddler, and Preschool Montessori programs in Santa Ana, CA — a seamless journey from infancy through preschool.',
  alternates: { canonical: 'https://ohanamontessori.com/daycare-toddler-preschool-programs-santa-ana-tustin-irvine' },
}

const PROGRAMS = [
  {
    title: 'Infant Program',
    ages: '3–24 months',
    focus: 'Trust, security, sensory exploration, and gentle independence',
    highlights: [
      'Calm, responsive care',
      'Sensory-rich activities (touch, sound, movement)',
      'Individualized feeding and sleep routines',
      'First social experiences with peers',
    ],
    ratio: '1:4',
    href: '/daycare-infant-program-santa-ana-tustin-irvine',
  },
  {
    title: 'Toddler Program',
    ages: '18 months–3 years',
    focus: 'Independence, language, movement, and social-emotional growth',
    highlights: [
      'Hands-on practical life activities',
      'Language development through conversation and stories',
      'Guided movement and outdoor play',
      'Gentle support with toilet learning',
    ],
    ratio: '1:6',
    href: '/toddler-program-santa-ana-tustin-irvine',
  },
  {
    title: 'Preschool Program',
    ages: '3–6 years',
    focus: 'Kindergarten readiness, self-confidence, academic and social skills',
    highlights: [
      'Child-led work cycles with authentic Montessori materials',
      'Early math, language, science, and cultural exploration',
      'Social-emotional lessons and community activities',
      'Outdoor learning and creative expression',
    ],
    ratio: '1:12',
    href: '/preschool-program-santa-ana-tustin-irvine',
  },
]

const WHY_FAMILIES = [
  { title: 'Seamless Pathway', body: 'Seamless progression from infancy through preschool' },
  { title: 'Consistency', body: 'Consistent Montessori philosophy and familiar routines' },
  { title: 'Known and Nurtured', body: "Deep relationships with educators who know your child's unique story" },
  { title: 'Parent Partnership', body: 'Ongoing parent communication and partnership' },
]

const headingStyle = {
  fontFamily: 'var(--font-baskervville)',
  fontWeight: 400,
  fontSize: 'clamp(28px, 4vw, 40px)',
  lineHeight: '44px',
  color: 'var(--brown)',
} as const

const subHeadingStyle = {
  fontFamily: 'var(--font-baskervville)',
  fontWeight: 400,
  lineHeight: 1.2,
  fontSize: 'clamp(20px, 2.2vw, 24px)',
  color: 'var(--brown)',
} as const

const columnTitleStyle = {
  fontFamily: 'var(--font-baskervville)',
  fontWeight: 400,
  lineHeight: 1.2,
  fontSize: 'clamp(22px, 2.6vw, 28px)',
  color: 'var(--brown)',
} as const

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-3 sm:px-6 lg:px-12">
        <div className="max-w-[1420px] mx-auto">
          <div className="relative overflow-hidden rounded-[10px] flex items-center justify-center text-center px-3 sm:px-5 py-[50px] md:py-[60px] lg:py-[140px]">
            <Image
              src="/programs-hero.webp"
              alt="Woodland mural in a classroom"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)' }} />
            <Animate>
              <h1
                className="relative text-white capitalize text-[28px] md:text-[36px] max-w-3xl mx-auto"
                style={{ fontFamily: 'var(--font-nunito)', fontWeight: 400, lineHeight: 1.4, textShadow: '0 0 10px #000' }}
              >
                Cultivating Curiosity, Independence, and Confidence From Infancy to Preschool
              </h1>
            </Animate>
          </div>
        </div>
      </section>

      {/* Programs We Offer */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto text-center">
          <Animate>
            <h2 style={headingStyle}>Programs We Offer</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              At Ohana Montessori, we honor every stage of your child&apos;s early development, providing a seamless journey from infancy through preschool. Our programs are designed to nurture independence, curiosity, and confidence&mdash;every step of the way.
            </p>
          </Animate>
        </div>
      </section>

      {/* Which Program Is Right for Your Child? */}
      <section className="px-6" style={{ background: '#F0ECE9', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>Which Program Is Right for Your Child?</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              Explore our age-based programs below to find the best fit for your family. Not sure? We&apos;re here to help you select the perfect starting point and guide you through each transition as your child grows.
            </p>
          </Animate>
        </div>
      </section>

      {/* Program comparison */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <AnimateStagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROGRAMS.map((p) => (
              <AnimateItem key={p.title}>
                <div className="flex flex-col h-full" style={{ background: '#EBF1EE', border: '1px solid #D2E3DC', borderRadius: '12px', padding: '28px 24px' }}>

                  {/* Age badge */}
                  <span style={{ display: 'inline-block', alignSelf: 'flex-start', background: 'var(--sage)', color: '#fff', borderRadius: '100px', padding: '4px 14px', fontSize: '12px', fontFamily: 'var(--font-nunito)', fontWeight: 700, letterSpacing: '0.04em' }}>
                    {p.ages}
                  </span>

                  {/* Program title */}
                  <h3 className="mt-4" style={columnTitleStyle}>{p.title}</h3>

                  {/* Focus callout */}
                  <p className="mt-4 leading-relaxed" style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.65 }}>
                    {p.focus}
                  </p>

                  {/* Divider */}
                  <hr className="my-5" style={{ border: 'none', borderTop: '1px solid var(--border)' }} />

                  {/* Highlights */}
                  <div>
                    <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', fontFamily: 'var(--font-nunito)', fontWeight: 700, marginBottom: '10px' }}>Typical Day</p>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {p.highlights.map((h) => (
                        <li key={h} style={{ display: 'flex', gap: '9px', alignItems: 'flex-start', color: 'var(--text)', fontSize: '14px', lineHeight: 1.55 }}>
                          <Check size={15} style={{ color: 'var(--sage)', flexShrink: 0, marginTop: '2px' }} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ratio + CTA */}
                  <div className="flex items-center justify-between mt-auto pt-5" style={{ borderTop: '1px solid var(--border)', marginTop: '24px' }}>
                    <div>
                      <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', fontFamily: 'var(--font-nunito)', fontWeight: 700 }}>Class Ratio</p>
                      <p style={{ fontFamily: 'var(--font-baskervville)', fontSize: '22px', color: 'var(--brown)', marginTop: '2px', lineHeight: 1 }}>{p.ratio} <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontFamily: 'var(--font-nunito)', fontWeight: 400 }}>adult-to-child</span></p>
                    </div>
                    <Link
                      href={p.href}
                      style={{ fontSize: '13px', fontFamily: 'var(--font-nunito)', fontWeight: 700, color: 'var(--sage)', textDecoration: 'underline', textUnderlineOffset: '3px', flexShrink: 0 }}
                    >
                      Explore →
                    </Link>
                  </div>

                </div>
              </AnimateItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Support at Every Stage */}
      <section className="px-6" style={{ background: '#F0ECE9', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-10 items-center">
          <Animate variant="slideLeft">
            <h2 style={headingStyle}>Support at Every Stage</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              Transitions between programs are thoughtfully guided by our experienced educators, ensuring your child feels seen, secure, and celebrated at each step. We provide individualized transition plans, teacher introductions, and parent support for every new stage.
            </p>
          </Animate>
          <Animate variant="slideRight" delay={0.15} className="flex justify-center">
            <Image src="/turtle-illustration.webp" alt="Wooden turtle illustration" width={966} height={704} className="w-full max-w-[340px] h-auto" />
          </Animate>
        </div>
      </section>

      {/* Why Families Grow With Us */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>Why Families Grow With Us</h2>
          </Animate>
          <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {WHY_FAMILIES.map((item) => (
              <AnimateItem key={item.title}>
                <div className="h-full text-center" style={{ background: '#355E54', borderRadius: '10px', padding: '32px 24px' }}>
                  <h3 style={{ fontFamily: 'var(--font-baskervville)', fontWeight: 400, fontSize: '22px', lineHeight: 1.2, color: '#FEFAF4' }}>{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed" style={{ color: '#FEFAF4' }}>{item.body}</p>
                </div>
              </AnimateItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Ready to Begin Your Ohana Journey? */}
      <section style={{ background: '#F0F5F4', padding: '60px 10px 75px' }}>
        <div className="max-w-[1000px] mx-auto text-center px-6">
          <Animate>
            <h2 style={{ fontFamily: 'var(--font-baskervville)', fontWeight: 400, fontSize: 'clamp(28px, 4vw, 40px)', color: '#000' }}>
              Ready to Begin Your Ohana Journey?
            </h2>
            <p className="mt-6 leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--text)' }}>
              We know how meaningful these first months are. Let us partner with your family to provide a gentle, joyful start for your baby.
            </p>
          </Animate>
          <Animate className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/schedule-a-tour-santa-ana-daycare-preschool"
              className="inline-block transition-colors hover:bg-transparent hover:text-[var(--brown)]"
              style={{
                fontFamily: 'var(--font-work-sans)',
                fontWeight: 500,
                textTransform: 'uppercase',
                fontSize: '14px',
                color: '#fff',
                background: 'var(--brown)',
                border: '1px solid var(--brown)',
                borderRadius: '100px',
                padding: '13px 60px',
              }}
            >
              Schedule a Personal Tour
            </Link>
            <Link
              href="/contact-daycare-preschool-santa-ana-tustin"
              className="inline-block transition-colors hover:bg-[var(--brown)] hover:text-[#FEFAF4]"
              style={{
                fontFamily: 'var(--font-work-sans)',
                fontWeight: 500,
                textTransform: 'uppercase',
                fontSize: '14px',
                color: 'var(--brown)',
                background: 'transparent',
                border: '1px solid var(--brown)',
                borderRadius: '100px',
                padding: '13px 60px',
              }}
            >
              Contact Us
            </Link>
          </Animate>
        </div>
      </section>
    </>
  )
}
