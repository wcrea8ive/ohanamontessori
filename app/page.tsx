'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Animate, AnimateStagger, AnimateItem } from '@/components/Animate'
import CTABanner from '@/components/CTABanner'

const PROGRAMS = [
  {
    name: 'Infant Program',
    ages: '3–24 months',
    description: 'Trust, security, sensory exploration, and gentle independence in a calm, responsive environment.',
    ratio: '1:4 adult-to-child ratio',
    href: '/programs/infant',
    icon: '🌱',
  },
  {
    name: 'Toddler Program',
    ages: '18 months–3 years',
    description: 'Independence, language, movement, and social-emotional growth through hands-on discovery.',
    ratio: '1:6 adult-to-child ratio',
    href: '/programs/toddler',
    icon: '🌊',
  },
  {
    name: 'Preschool Program',
    ages: '3–6 years',
    description: 'Kindergarten readiness, self-confidence, and a deep love for learning through child-led work cycles.',
    ratio: '1:12 adult-to-child ratio',
    href: '/programs/preschool',
    icon: '🌳',
  },
]

const PILLARS = [
  { title: 'Child-Led Learning', body: 'Children select meaningful activities matching their interests, building focus and mastery through what sparks them most.' },
  { title: 'Prepared Environment', body: 'Calm spaces featuring authentic Montessori materials, natural light, and child-height furniture that fosters independence.' },
  { title: 'Certified Guides', body: 'Every lead guide is Montessori-trained, chosen with care, and committed to truly knowing each child.' },
  { title: 'Family Partnership', body: 'Parents and teachers connected in trust, with open dialogue and daily communication through the Famly app.' },
]

const STEPS = [
  { num: '01', label: 'Join the Interest List', desc: 'Receive updates on tour dates, openings, and important milestones.' },
  { num: '02', label: 'Schedule a Tour', desc: 'Visit our classrooms, meet the educators, and see the philosophy in action.' },
  { num: '03', label: 'Submit Your Application', desc: 'Complete the enrollment form and secure your child\'s spot.' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: 'var(--forest)', minHeight: '88vh', display: 'flex', alignItems: 'center' }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10" style={{
          background: 'radial-gradient(circle at 80% 50%, var(--sage) 0%, transparent 70%)',
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--sage)' }}>
              Santa Ana, CA · Enrollment Now Open
            </p>
            <h1 className="text-white font-bold mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.1 }}>
              Where Nature<br />
              <span style={{ color: 'var(--sage)' }}>Meets Nurture</span>
            </h1>
            <p className="leading-relaxed mb-10" style={{ color: '#c8c2b8', fontSize: '1.1rem', maxWidth: '480px' }}>
              Childhood is an adventure. At Ohana Montessori, curiosity is invited, imagination is honored, and every child&apos;s unique spirit is nurtured — from infancy through preschool.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/schedule-a-tour"
                className="px-8 py-4 text-white font-semibold rounded-full text-sm transition-opacity hover:opacity-90 text-center"
                style={{ background: 'var(--sage)' }}
              >
                Schedule a Tour →
              </Link>
              <Link
                href="/programs/infant"
                className="px-8 py-4 font-semibold rounded-full text-sm transition-colors border text-center"
                style={{ color: '#e2ddd5', borderColor: 'rgba(255,255,255,0.2)' }}
              >
                Explore Programs
              </Link>
            </div>
            <div className="flex gap-8 mt-12">
              <div>
                <p className="text-white font-bold" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '36px' }}>3</p>
                <p className="text-xs uppercase tracking-widest" style={{ color: '#a8a89e' }}>Programs</p>
              </div>
              <div>
                <p className="text-white font-bold" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '36px' }}>7am–6pm</p>
                <p className="text-xs uppercase tracking-widest" style={{ color: '#a8a89e' }}>Daily Hours</p>
              </div>
              <div>
                <p className="text-white font-bold" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '36px' }}>OC</p>
                <p className="text-xs uppercase tracking-widest" style={{ color: '#a8a89e' }}>Orange County</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(107,143,113,0.15)', border: '1px solid rgba(107,143,113,0.2)', aspectRatio: '4/3' }}>
                <div className="flex items-center justify-center h-full">
                  <div className="text-center p-12">
                    <div className="text-8xl mb-6">🌿</div>
                    <p className="text-white font-bold mb-2" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '28px' }}>Ohana Montessori</p>
                    <p className="text-sm" style={{ color: 'var(--sage)' }}>2102 N. Tustin Ave · Santa Ana, CA</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-xl p-4 shadow-lg" style={{ background: '#fff', minWidth: '180px' }}>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--sage)' }}>Ages Served</p>
                <p className="font-semibold" style={{ color: 'var(--text)', fontFamily: 'var(--font-cormorant)', fontSize: '18px' }}>3 months – 6 years</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <Animate className="max-w-2xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--sage)' }}>Programs We Offer</p>
            <h2 className="font-bold mb-4" style={{ fontSize: 'clamp(28px, 4vw, 46px)', lineHeight: 1.2, color: 'var(--text)' }}>
              A Seamless Journey From Infancy Through Preschool
            </h2>
            <p className="leading-relaxed" style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
              At Ohana Montessori, we honor every stage of your child&apos;s early development. Our programs are designed to nurture independence, curiosity, and confidence — every step of the way.
            </p>
          </Animate>

          <AnimateStagger className="grid md:grid-cols-3 gap-8">
            {PROGRAMS.map((p) => (
              <AnimateItem key={p.name}>
                <div className="rounded-2xl p-8 h-full flex flex-col transition-shadow hover:shadow-lg" style={{ background: '#fff', border: '1px solid var(--border)' }}>
                  <div className="text-4xl mb-5">{p.icon}</div>
                  <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--sage)' }}>{p.ages}</div>
                  <h3 className="font-bold mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '26px', color: 'var(--text)' }}>{p.name}</h3>
                  <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: 'var(--text-muted)' }}>{p.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-3 py-1.5 rounded-full font-medium" style={{ background: 'var(--cream-dark)', color: 'var(--sage-dark)' }}>{p.ratio}</span>
                    <Link href={p.href} className="text-sm font-semibold transition-colors hover:opacity-70" style={{ color: 'var(--sage)' }}>
                      Learn more →
                    </Link>
                  </div>
                </div>
              </AnimateItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Philosophy strip */}
      <section className="py-20" style={{ background: 'var(--cream-dark)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <Animate className="max-w-xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--terracotta)' }}>Our Approach</p>
            <h2 className="font-bold" style={{ fontSize: 'clamp(26px, 3.5vw, 42px)', lineHeight: 1.2, color: 'var(--text)' }}>
              Authentic Montessori, <em>Elevated</em>
            </h2>
          </Animate>
          <AnimateStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PILLARS.map((p, i) => (
              <AnimateItem key={p.title}>
                <div className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm" style={{ background: 'var(--sage)', color: '#fff' }}>{i + 1}</div>
                  <h3 className="font-bold" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '22px', color: 'var(--text)' }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{p.body}</p>
                </div>
              </AnimateItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Quote section */}
      <section className="py-24" style={{ background: 'var(--forest)' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Animate>
            <p className="text-xs font-semibold uppercase tracking-widest mb-8" style={{ color: 'var(--sage)' }}>The Ohana Difference</p>
            <blockquote className="font-bold text-white mb-6" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(26px, 4vw, 46px)', lineHeight: 1.3 }}>
              &ldquo;Ohana is more than a name, it&apos;s our way of being. Here, children grow in a calm, beautiful environment while parents feel supported, connected, and understood.&rdquo;
            </blockquote>
            <Link href="/welcome" className="text-sm font-semibold uppercase tracking-widest transition-colors hover:opacity-70" style={{ color: 'var(--sage)', borderBottom: '1px solid var(--sage)', paddingBottom: '2px' }}>
              Learn Our Story
            </Link>
          </Animate>
        </div>
      </section>

      {/* Enrollment Steps */}
      <section className="py-24" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <Animate className="max-w-xl mb-16 mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--sage)' }}>Enrollment Is Open</p>
            <h2 className="font-bold" style={{ fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.2, color: 'var(--text)' }}>
              Your Journey to Ohana Starts Here
            </h2>
          </Animate>
          <AnimateStagger className="grid md:grid-cols-3 gap-8 mb-12">
            {STEPS.map((s) => (
              <AnimateItem key={s.num}>
                <div className="text-center px-4">
                  <div className="text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-cormorant)', color: 'var(--sage)', opacity: 0.4 }}>{s.num}</div>
                  <h3 className="font-bold mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '24px', color: 'var(--text)' }}>{s.label}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{s.desc}</p>
                </div>
              </AnimateItem>
            ))}
          </AnimateStagger>
          <Animate className="text-center">
            <Link
              href="/enrollment"
              className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-full text-sm transition-opacity hover:opacity-90"
              style={{ background: 'var(--sage)' }}
            >
              View Full Enrollment Process →
            </Link>
          </Animate>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
