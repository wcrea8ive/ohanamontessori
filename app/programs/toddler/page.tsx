import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CTABanner from '@/components/CTABanner'
import { Animate, AnimateStagger, AnimateItem } from '@/components/Animate'

export const metadata: Metadata = {
  title: 'Toddler Program (18 months–3 years) — Ohana Montessori',
  description: 'Our toddler program supports independence, language, movement, and social-emotional growth for children 18 months–3 years in Santa Ana, CA.',
}

const HIGHLIGHTS = [
  { title: 'Hands-On Activities', body: 'Practical life activities like pouring, sorting, and folding build fine motor skills and deep concentration.' },
  { title: 'Language Development', body: 'Rich language environments with songs, stories, and conversation support explosive vocabulary growth.' },
  { title: 'Guided Movement', body: 'Large motor activities, outdoor exploration, and movement-based learning honor the toddler\'s drive to move.' },
  { title: 'Toilet Learning Support', body: 'We partner with families for a positive, child-led toilet learning journey — no pressure, only encouragement.' },
]

export default function ToddlerProgramPage() {
  return (
    <>
      <PageHero
        label="Toddler Program · 18 Months–3 Years"
        title="Independence,"
        titleAccent="One Step at a Time"
        subtitle="The toddler years are a revolution. Your child is becoming themselves — and we're here to celebrate every step, word, and discovery along the way."
      />

      <section className="py-24" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Animate variant="slideLeft">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--sage)' }}>Program Overview</p>
            <h2 className="font-bold mb-6" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.2, color: 'var(--text)' }}>
              Language, Movement & Social-Emotional Growth
            </h2>
            <div className="space-y-5 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              <p>
                The Toddler Room &ldquo;River&rdquo; is a place where the power of independence is celebrated every single day. Toddlers are natural explorers — and our environment is carefully designed to meet their developmental needs.
              </p>
              <p>
                Mixed-age groupings allow younger toddlers to learn from older peers, while older toddlers develop leadership, empathy, and confidence through nurturing relationships.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { label: 'Age Range', value: '18 mo – 3 years' },
                { label: 'Ratio', value: '1:6 adult-to-child' },
                { label: 'Schedule Options', value: '3 or 5 days' },
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
              <div className="text-7xl mb-6">🌊</div>
              <p className="text-white font-bold mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '28px' }}>The River Room</p>
              <p className="text-sm leading-relaxed" style={{ color: '#a8a89e' }}>
                Named &ldquo;River,&rdquo; our toddler classroom flows with energy and purpose — low shelves stocked with inviting materials, cozy reading nooks, and outdoor access throughout the day.
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

      <section className="py-20" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl p-10 grid lg:grid-cols-2 gap-10 items-center" style={{ background: 'var(--forest)' }}>
            <Animate variant="slideLeft">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--sage)' }}>2026 Tuition</p>
              <h2 className="text-white font-bold mb-4" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(26px, 3.5vw, 40px)', lineHeight: 1.2 }}>
                All-Inclusive Toddler Tuition
              </h2>
              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-sm" style={{ color: '#a8a89e' }}>3-Day Full Day</p>
                  <p className="text-white font-bold" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '28px' }}>$2,100 <span className="text-base font-normal" style={{ color: '#a8a89e' }}>/ month</span></p>
                </div>
                <div>
                  <p className="text-sm" style={{ color: '#a8a89e' }}>5-Day Full Day</p>
                  <p className="text-white font-bold" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '28px' }}>$2,725 <span className="text-base font-normal" style={{ color: '#a8a89e' }}>/ month</span></p>
                </div>
              </div>
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
              <Link href="/programs/infant" className="px-6 py-3.5 rounded-full font-semibold text-sm border" style={{ color: 'var(--text)', borderColor: 'var(--border)', background: '#fff' }}>
                ← Infant Program (3–24mo)
              </Link>
              <Link href="/programs/preschool" className="px-6 py-3.5 rounded-full font-semibold text-sm border" style={{ color: 'var(--text)', borderColor: 'var(--border)', background: '#fff' }}>
                Preschool Program (3–6yr) →
              </Link>
            </div>
          </Animate>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
