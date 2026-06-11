import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CTABanner from '@/components/CTABanner'
import { Animate, AnimateStagger, AnimateItem } from '@/components/Animate'

export const metadata: Metadata = {
  title: 'Infant Program (3–24 months) — Ohana Montessori',
  description: 'Our infant program nurtures trust, security, and gentle independence for babies 3–24 months. 1:4 adult-to-child ratio in Santa Ana, CA.',
}

const HIGHLIGHTS = [
  { title: 'Calm, Responsive Care', body: 'Every infant is assigned a primary guide who learns their unique cues, rhythms, and preferences.' },
  { title: 'Sensory Activities', body: 'Age-appropriate Montessori materials designed to stimulate all five senses and support neurological development.' },
  { title: 'Individualized Routines', body: 'We follow each baby\'s natural schedule for feeding, sleeping, and play — not a one-size-fits-all timetable.' },
  { title: 'First Social Experiences', body: 'Gentle interactions with peers and guides build the foundation for social confidence and trust.' },
]

export default function InfantProgramPage() {
  return (
    <>
      <PageHero
        label="Infant Program · 3–24 Months"
        title="The Gentlest"
        titleAccent="Beginning"
        subtitle="Your baby's earliest experiences shape the architecture of their developing brain. We take that trust seriously — with warmth, intention, and joy."
      />

      <section className="py-24" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Animate variant="slideLeft">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--sage)' }}>Program Overview</p>
            <h2 className="font-bold mb-6" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.2, color: 'var(--text)' }}>
              Trust, Security, and Gentle Independence
            </h2>
            <div className="space-y-5 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              <p>
                Our infant program is designed around one central idea: every baby deserves to feel completely safe, known, and celebrated. From the moment your child arrives, they are held by a team that sees their unique spirit.
              </p>
              <p>
                We divide our infant program into two levels — Infant A (younger infants) and Infant B &ldquo;Sky&rdquo; (mobile infants) — to ensure developmentally appropriate care at every stage.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { label: 'Age Range', value: '3 – 24 months' },
                { label: 'Ratio', value: '1:4 adult-to-child' },
                { label: 'Hours', value: '7:00 am – 6:00 pm' },
              ].map((stat) => (
                <div key={stat.label} className="px-5 py-3 rounded-xl" style={{ background: 'var(--cream-dark)', border: '1px solid var(--border)' }}>
                  <p className="text-xs uppercase tracking-widest mb-0.5" style={{ color: 'var(--sage)' }}>{stat.label}</p>
                  <p className="font-semibold" style={{ color: 'var(--text)', fontFamily: 'var(--font-cormorant)', fontSize: '18px' }}>{stat.value}</p>
                </div>
              ))}
            </div>
          </Animate>
          <Animate variant="slideRight" delay={0.15}>
            <div className="rounded-2xl p-10 text-center" style={{ background: 'var(--forest)' }}>
              <div className="text-7xl mb-6">🌱</div>
              <p className="text-white font-bold mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '28px' }}>The Infant Rooms</p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#a8a89e' }}>
                Our infant spaces feature natural materials, soft lighting, floor-level exploration areas, and cozy nap spaces — designed to feel like a peaceful extension of home.
              </p>
              <p className="text-xs px-4 py-2 rounded-full inline-block font-semibold" style={{ background: 'rgba(107,143,113,0.2)', color: 'var(--sage)' }}>
                Currently enrolling for 2026
              </p>
            </div>
          </Animate>
        </div>
      </section>

      <section className="py-20" style={{ background: 'var(--cream-dark)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <Animate className="max-w-xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--terracotta)' }}>What We Offer</p>
            <h2 className="font-bold" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(26px, 3.5vw, 42px)', lineHeight: 1.2, color: 'var(--text)' }}>
              Program Highlights
            </h2>
          </Animate>
          <AnimateStagger className="grid sm:grid-cols-2 gap-6">
            {HIGHLIGHTS.map((h) => (
              <AnimateItem key={h.title}>
                <div className="rounded-2xl p-8" style={{ background: '#fff', border: '1px solid var(--border)' }}>
                  <h3 className="font-bold mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '22px', color: 'var(--text)' }}>{h.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{h.body}</p>
                </div>
              </AnimateItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Tuition teaser */}
      <section className="py-20" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl p-10 grid lg:grid-cols-2 gap-10 items-center" style={{ background: 'var(--forest)' }}>
            <Animate variant="slideLeft">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--sage)' }}>2026 Tuition</p>
              <h2 className="text-white font-bold mb-4" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(26px, 3.5vw, 40px)', lineHeight: 1.2 }}>
                All-Inclusive Infant Tuition
              </h2>
              <p className="mb-6" style={{ color: '#a8a89e', fontSize: '1.1rem' }}>
                <strong style={{ color: '#fff', fontFamily: 'var(--font-cormorant)', fontSize: '32px' }}>$3,025</strong> / month<br />
                <span className="text-sm">5-day full day program</span>
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#a8a89e' }}>
                One simple tuition covers everything: enrichment programs (yoga, music, gardening), before/after-school care, snacks, and materials.
              </p>
            </Animate>
            <Animate variant="slideRight" delay={0.15} className="flex flex-col gap-4">
              <Link href="/tuition" className="block px-6 py-4 rounded-xl text-center font-semibold text-white text-sm transition-opacity hover:opacity-90" style={{ background: 'var(--sage)' }}>
                View Full Tuition Details →
              </Link>
              <Link href="/enrollment" className="block px-6 py-4 rounded-xl text-center font-semibold text-sm transition-colors border" style={{ color: '#e2ddd5', borderColor: 'rgba(255,255,255,0.2)' }}>
                Start Enrollment Process
              </Link>
            </Animate>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: 'var(--cream-dark)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <Animate className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--sage)' }}>Also Explore</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/programs/toddler" className="px-6 py-3.5 rounded-full font-semibold text-sm transition-colors border" style={{ color: 'var(--text)', borderColor: 'var(--border)', background: '#fff' }}>
                Toddler Program (18mo–3yr) →
              </Link>
              <Link href="/programs/preschool" className="px-6 py-3.5 rounded-full font-semibold text-sm transition-colors border" style={{ color: 'var(--text)', borderColor: 'var(--border)', background: '#fff' }}>
                Preschool Program (3–6yr) →
              </Link>
            </div>
          </Animate>
        </div>
      </section>

      <CTABanner
        heading="We Know How Meaningful These First Months Are"
        body="Let us partner with your family to provide a gentle, joyful start for your baby. Schedule a personal tour and see our infant rooms for yourself."
      />
    </>
  )
}
