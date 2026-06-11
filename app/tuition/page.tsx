import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CTABanner from '@/components/CTABanner'
import { Animate, AnimateStagger, AnimateItem } from '@/components/Animate'

export const metadata: Metadata = {
  title: 'Tuition & Hours — Ohana Montessori',
  description: '2026 tuition rates for Ohana Montessori infant, toddler, and preschool programs in Santa Ana, CA. All-inclusive pricing with enrichment programs included.',
}

const PROGRAMS = [
  {
    name: 'Infant Room',
    ages: '3–24 months',
    icon: '🌱',
    options: [
      { schedule: '5 Day Full Day', price: '$3,025/month' },
    ],
  },
  {
    name: 'Toddler Room',
    ages: '18–36 months',
    icon: '🌊',
    options: [
      { schedule: '3 Day Full Day', price: '$2,100/month' },
      { schedule: '5 Day Full Day', price: '$2,725/month' },
    ],
  },
  {
    name: 'Preschool',
    ages: '36 months–5 years',
    icon: '🌳',
    options: [
      { schedule: '5 Day Full Time', price: '$2,625/month' },
    ],
  },
]

const INCLUDED = [
  'Enrichment programs: yoga, music, gardening, creative expression, dance',
  'Before and after-school care (7:00 am – 6:00 pm)',
  'Snacks and nutritious supplemental foods',
  'All classroom materials and Montessori supplies',
  'Famly app access for daily updates and communication',
  'Parent-teacher conferences and progress updates',
]

export default function TuitionPage() {
  return (
    <>
      <PageHero
        label="Tuition & Hours"
        title="Transparent,"
        titleAccent="All-Inclusive Pricing"
        subtitle="One simple tuition covers it all. No hidden fees, no surprise add-ons — just clear, honest pricing for exceptional care."
      />

      {/* Hours */}
      <section className="py-16" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <Animate>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: 'Facility Hours', value: '7:00 am – 6:00 pm', sub: 'Monday through Friday' },
                { label: 'Montessori School Day', value: '8:30 am – 3:30 pm', sub: 'Core program hours' },
                { label: 'Extended Care', value: 'Included', sub: 'Before and after school' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl p-8 text-center" style={{ background: '#fff', border: '1px solid var(--border)' }}>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--sage)' }}>{item.label}</p>
                  <p className="font-bold mb-1" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '28px', color: 'var(--text)' }}>{item.value}</p>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.sub}</p>
                </div>
              ))}
            </div>
          </Animate>
        </div>
      </section>

      {/* Tuition cards */}
      <section className="py-20" style={{ background: 'var(--cream-dark)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <Animate className="max-w-xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--terracotta)' }}>2026 Rates</p>
            <h2 className="font-bold" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(26px, 3.5vw, 42px)', lineHeight: 1.2, color: 'var(--text)' }}>
              Program Tuition
            </h2>
          </Animate>
          <AnimateStagger className="grid md:grid-cols-3 gap-8">
            {PROGRAMS.map((p) => (
              <AnimateItem key={p.name}>
                <div className="rounded-2xl overflow-hidden h-full flex flex-col" style={{ background: '#fff', border: '1px solid var(--border)' }}>
                  <div className="p-8 text-center" style={{ background: 'var(--forest)' }}>
                    <div className="text-5xl mb-3">{p.icon}</div>
                    <h3 className="text-white font-bold mb-1" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '26px' }}>{p.name}</h3>
                    <p className="text-sm" style={{ color: 'var(--sage)' }}>{p.ages}</p>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex-1 space-y-4 mb-6">
                      {p.options.map((opt) => (
                        <div key={opt.schedule} className="flex items-center justify-between py-3" style={{ borderBottom: '1px solid var(--border)' }}>
                          <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{opt.schedule}</span>
                          <span className="font-bold" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '22px', color: 'var(--text)' }}>{opt.price}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/schedule-a-tour"
                      className="block text-center py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
                      style={{ background: 'var(--sage)' }}
                    >
                      Schedule a Tour →
                    </Link>
                  </div>
                </div>
              </AnimateItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Fees */}
      <section className="py-20" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <Animate variant="slideLeft">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--sage)' }}>Additional Fees</p>
            <h2 className="font-bold mb-6" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(26px, 3.5vw, 40px)', lineHeight: 1.2, color: 'var(--text)' }}>
              Fee Details
            </h2>
            <div className="space-y-4">
              {[
                { label: 'Annual Materials & Registration', value: '$850', note: 'Non-refundable' },
                { label: 'Enrollment Deposit', value: '1 month', note: 'Applied to final month' },
                { label: 'Tuition Due Date', value: '1st of month', note: 'Monthly billing via Famly' },
              ].map((fee) => (
                <div key={fee.label} className="flex items-start justify-between py-4" style={{ borderBottom: '1px solid var(--border)' }}>
                  <div>
                    <p className="font-medium" style={{ color: 'var(--text)' }}>{fee.label}</p>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{fee.note}</p>
                  </div>
                  <p className="font-bold" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '22px', color: 'var(--text)' }}>{fee.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-5 rounded-xl" style={{ background: 'var(--cream-dark)', border: '1px solid var(--border)' }}>
              <p className="text-sm font-semibold mb-1" style={{ color: 'var(--terracotta)' }}>Limited-Time Offer</p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>Registration fee waived for the first 40 families to enroll. Contact us to learn more.</p>
            </div>
          </Animate>

          <Animate variant="slideRight" delay={0.15}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--sage)' }}>What&apos;s Included</p>
            <h2 className="font-bold mb-6" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(26px, 3.5vw, 40px)', lineHeight: 1.2, color: 'var(--text)' }}>
              Everything Covered
            </h2>
            <ul className="space-y-3">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs" style={{ background: 'var(--sage)' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </Animate>
        </div>
      </section>

      <CTABanner
        heading="Questions About Tuition?"
        body="We're happy to walk you through all the details. Schedule a tour or reach out directly."
      />
    </>
  )
}
