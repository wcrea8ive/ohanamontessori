import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import CTABanner from '@/components/CTABanner'
import { Animate, AnimateStagger, AnimateItem } from '@/components/Animate'

export const metadata: Metadata = {
  title: 'Our Philosophy — Ohana Montessori',
  description: "Ohana Montessori's educational philosophy: honoring each child's spirit, fostering independence, and cultivating kindness, curiosity, and courage in Santa Ana, CA.",
}

const VALUES = [
  { icon: '🌱', title: 'Kindness', body: 'We model empathy and respect in every interaction, creating a culture where children feel seen and valued.' },
  { icon: '🔍', title: 'Curiosity', body: 'Questions are celebrated. Wonder is the starting point for all great learning.' },
  { icon: '🦁', title: 'Courage', body: 'We encourage children to try, to fail, to try again — building resilience and a growth mindset.' },
  { icon: '🤝', title: 'Community', body: 'Every family is part of the Ohana village. We grow stronger together.' },
]

export default function OurPhilosophyPage() {
  return (
    <>
      <PageHero
        label="Our Philosophy"
        title="Honoring Each Child's"
        titleAccent="Unique Spirit"
        subtitle="Our philosophy is simple: every child deserves to be known, celebrated, and gently guided toward their own fullest expression."
      />

      {/* Core Philosophy */}
      <section className="py-24" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Animate variant="slideLeft">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--sage)' }}>The Foundation</p>
            <h2 className="font-bold mb-6" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.2, color: 'var(--text)' }}>
              Early Childhood Is Sacred, Not Hurried
            </h2>
            <div className="space-y-5 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              <p>
                At Ohana, we believe that children arrive in the world as whole, capable beings — not empty vessels to be filled with information. Our role is to prepare an environment where their natural love of learning can flourish.
              </p>
              <p>
                We honor the Montessori belief that the child&apos;s work is play, and that play is the highest form of learning. Each moment in the classroom is an opportunity for discovery, connection, and growth.
              </p>
              <p>
                Our philosophy extends beyond the classroom. We honor parents as the first and most important educators in a child&apos;s life — and we are here to partner with you every step of the way.
              </p>
            </div>
          </Animate>
          <Animate variant="slideRight" delay={0.15}>
            <div className="space-y-6">
              {[
                { q: 'What does "child-led" really mean?', a: 'It means the child chooses their work within a carefully prepared environment. Teachers guide and facilitate; children discover and master.' },
                { q: 'How do you balance freedom and structure?', a: 'Freedom within structure. Children choose within a thoughtfully prepared range of activities that support their developmental stage.' },
                { q: 'What does success look like at Ohana?', a: 'A child who loves to learn. Who is confident, kind, curious, and ready for whatever comes next.' },
              ].map((item) => (
                <div key={item.q} className="p-6 rounded-2xl" style={{ background: '#fff', border: '1px solid var(--border)' }}>
                  <p className="font-semibold mb-2" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '19px', color: 'var(--text)' }}>{item.q}</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.a}</p>
                </div>
              ))}
            </div>
          </Animate>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ background: 'var(--cream-dark)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <Animate className="max-w-xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--terracotta)' }}>Our Core Values</p>
            <h2 className="font-bold" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(26px, 3.5vw, 42px)', lineHeight: 1.2, color: 'var(--text)' }}>
              Kindness, Curiosity, and Courage
            </h2>
          </Animate>
          <AnimateStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((v) => (
              <AnimateItem key={v.title}>
                <div className="rounded-2xl p-8 text-center" style={{ background: '#fff', border: '1px solid var(--border)' }}>
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h3 className="font-bold mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '24px', color: 'var(--text)' }}>{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{v.body}</p>
                </div>
              </AnimateItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24" style={{ background: 'var(--forest)' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Animate>
            <blockquote className="text-white font-bold mb-6" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(26px, 4vw, 46px)', lineHeight: 1.35 }}>
              &ldquo;Our mission is to honor each child&apos;s spirit, partner with parents, and cultivate a culture of kindness, curiosity, and courage — while supporting parents in building their careers so they can create strong futures for their families.&rdquo;
            </blockquote>
          </Animate>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
