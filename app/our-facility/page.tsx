import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import CTABanner from '@/components/CTABanner'
import { Animate, AnimateStagger, AnimateItem } from '@/components/Animate'

export const metadata: Metadata = {
  title: 'Our Facility — Ohana Montessori',
  description: "Tour Ohana Montessori's nature-inspired facility in Santa Ana, CA — natural materials, abundant light, prepared classrooms, and beautiful outdoor learning spaces.",
}

const SPACES = [
  { icon: '🌱', name: 'Infant A & Sky Rooms', desc: 'Warm, softly lit infant spaces with floor exploration areas, cozy nap corners, and natural textures designed to feel like an extension of home.' },
  { icon: '🌊', name: 'River Toddler Room', desc: 'A dynamic, movement-friendly environment with low shelves, hands-on materials, and open space for active learning and discovery.' },
  { icon: '🌳', name: 'Koa Preschool Classroom', desc: 'A beautifully prepared Montessori environment with authentic learning materials organized by subject area — language, math, sensorial, science, and cultural studies.' },
  { icon: '🔥', name: 'Ember Room', desc: 'A specialized space for creative expression, art, and sensory exploration — where children\'s imaginations run free.' },
  { icon: '🌊', name: 'Cove Lactation Room', desc: 'A private, comfortable space for nursing mothers — because we honor and support every aspect of family life.' },
  { icon: '🌿', name: 'Outdoor Learning Spaces', desc: 'Thoughtfully designed outdoor areas connect children to nature daily, with opportunities for gardening, movement, and open-ended exploration.' },
]

export default function OurFacilityPage() {
  return (
    <>
      <PageHero
        label="Our Facility"
        title="A Space Designed"
        titleAccent="for Childhood"
        subtitle="Every corner of Ohana Montessori was designed with intention — natural materials, beautiful light, and environments that invite exploration and calm."
      />

      <section className="py-24" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <Animate className="max-w-xl mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--sage)' }}>Our Spaces</p>
            <h2 className="font-bold" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.2, color: 'var(--text)' }}>
              Nature-Inspired Learning Environments
            </h2>
          </Animate>
          <AnimateStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SPACES.map((s) => (
              <AnimateItem key={s.name}>
                <div className="rounded-2xl p-8 h-full" style={{ background: '#fff', border: '1px solid var(--border)' }}>
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="font-bold mb-3" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '22px', color: 'var(--text)' }}>{s.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{s.desc}</p>
                </div>
              </AnimateItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      <section className="py-20" style={{ background: 'var(--cream-dark)' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Animate>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--sage)' }}>Design Philosophy</p>
            <h2 className="font-bold mb-6" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(26px, 4vw, 44px)', lineHeight: 1.2, color: 'var(--text)' }}>
              The Environment Is the Third Teacher
            </h2>
            <p className="leading-relaxed text-lg" style={{ color: 'var(--text-muted)' }}>
              In Montessori philosophy, the prepared environment is considered the third teacher — after the parent and the guide. Every material placed on every shelf was chosen with purpose. Every space was designed to invite independence, beauty, and calm.
            </p>
          </Animate>
        </div>
      </section>

      <CTABanner
        heading="Experience It In Person"
        body="The best way to see our facility is to visit. Schedule a personal tour and walk through our classrooms yourself."
        primaryLabel="Schedule a Tour"
        primaryHref="/schedule-a-tour"
      />
    </>
  )
}
