import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CTABanner from '@/components/CTABanner'
import { Animate, AnimateStagger, AnimateItem } from '@/components/Animate'

export const metadata: Metadata = {
  title: 'Preschool Program (3–6 years) — Ohana Montessori',
  description: 'Our Koa preschool classroom prepares children 3–6 years for kindergarten with child-led work cycles, academic exploration, and outdoor learning in Santa Ana, CA.',
}

const HIGHLIGHTS = [
  { title: 'Child-Led Work Cycles', body: 'Uninterrupted blocks of work time allow children to develop deep concentration and a true love of learning.' },
  { title: 'Academic Exploration', body: 'Language, mathematics, sensorial, science, cultural subjects, and practical life — woven together naturally.' },
  { title: 'Social-Emotional Lessons', body: 'Grace and courtesy lessons, conflict resolution practice, and community responsibilities build lifelong character.' },
  { title: 'Outdoor Learning', body: 'Regular time in natural environments connects children to the world and extends classroom learning beyond four walls.' },
]

const READINESS = [
  'Strong early literacy and numeracy foundations',
  'Confidence as an independent learner',
  'Ability to focus and sustain attention',
  'Emotional regulation and self-management skills',
  'Genuine love and curiosity for learning',
  'Social skills: collaboration, empathy, respect',
]

export default function PreschoolProgramPage() {
  return (
    <>
      <PageHero
        label="Preschool Program · 3–6 Years"
        title="Ready for Kindergarten,"
        titleAccent="Ready for Life"
        subtitle="The Koa classroom is where independence, confidence, and a deep love of learning take root — preparing children for everything that comes next."
      />

      <section className="py-24" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Animate variant="slideLeft">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--sage)' }}>Program Overview</p>
            <h2 className="font-bold mb-6" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.2, color: 'var(--text)' }}>
              Kindergarten Readiness & Self-Confidence
            </h2>
            <div className="space-y-5 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              <p>
                The preschool years are a time of remarkable growth. In the Koa classroom, children ages 3–6 work alongside peers in a multi-age environment that mirrors the real world — building academic skills and deep human character simultaneously.
              </p>
              <p>
                Our Montessori-certified guides facilitate long, uninterrupted work periods where children choose their own activities from carefully curated shelves, developing the focus and self-direction that will serve them for life.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { label: 'Age Range', value: '3 – 6 years' },
                { label: 'Ratio', value: '1:12 adult-to-child' },
                { label: 'Schedule', value: '5 days / full time' },
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
              <div className="text-7xl mb-6">🌳</div>
              <p className="text-white font-bold mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '28px' }}>The Koa Classroom</p>
              <p className="text-sm leading-relaxed" style={{ color: '#a8a89e' }}>
                Named for the mighty Hawaiian Koa tree — strong, purposeful, and deeply rooted — our preschool classroom is a place where children grow into their fullest selves.
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

      {/* Kindergarten Readiness */}
      <section className="py-24" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Animate variant="slideLeft">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--sage)' }}>Kindergarten Readiness</p>
            <h2 className="font-bold mb-6" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.2, color: 'var(--text)' }}>
              Your Child Will Leave Ohana With:
            </h2>
            <ul className="space-y-3">
              {READINESS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base" style={{ color: 'var(--text-muted)' }}>
                  <span className="mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs" style={{ background: 'var(--sage)' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </Animate>
          <Animate variant="slideRight" delay={0.15}>
            <div className="rounded-2xl p-10" style={{ background: 'var(--forest)' }}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--sage)' }}>2026 Tuition</p>
              <h3 className="text-white font-bold mb-2" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '28px' }}>$2,625 / month</h3>
              <p className="text-sm mb-6" style={{ color: '#a8a89e' }}>5-Day Full Time · All-inclusive</p>
              <p className="text-sm leading-relaxed mb-8" style={{ color: '#a8a89e' }}>
                Registration fee waived for the first 40 families to enroll. Annual Materials & Registration fee: $850.
              </p>
              <div className="flex flex-col gap-3">
                <Link href="/tuition" className="block px-6 py-3.5 rounded-xl text-center font-semibold text-white text-sm transition-opacity hover:opacity-90" style={{ background: 'var(--sage)' }}>
                  View Tuition Details →
                </Link>
                <Link href="/enrollment" className="block px-6 py-3.5 rounded-xl text-center font-semibold text-sm border" style={{ color: '#e2ddd5', borderColor: 'rgba(255,255,255,0.2)' }}>
                  Begin Enrollment
                </Link>
              </div>
            </div>
          </Animate>
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
              <Link href="/programs/toddler" className="px-6 py-3.5 rounded-full font-semibold text-sm border" style={{ color: 'var(--text)', borderColor: 'var(--border)', background: '#fff' }}>
                ← Toddler Program (18mo–3yr)
              </Link>
            </div>
          </Animate>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
