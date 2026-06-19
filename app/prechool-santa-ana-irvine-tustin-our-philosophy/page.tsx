import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Animate, AnimateStagger, AnimateItem } from '@/components/Animate'

export const metadata: Metadata = {
  title: 'Our Philosophy — Ohana Montessori',
  description: "Ohana Montessori's educational philosophy: honoring each child's spirit, fostering independence, and cultivating kindness, curiosity, and courage in Santa Ana, CA.",
  alternates: { canonical: 'https://ohanamontessori.com/prechool-santa-ana-irvine-tustin-our-philosophy' },
}

const SCIENCE = [
  { title: 'Brain Development', body: "Neuroscience confirms that early experiences shape the architecture of the developing brain. Montessori's hands-on, sensory-rich environments support optimal neural growth during these formative years." },
  { title: 'Academic Success', body: 'Studies show Montessori graduates excel academically, demonstrating strong literacy, math, and problem-solving skills well into elementary and beyond.' },
  { title: 'Social-Emotional Strength', body: "Research highlights Montessori's positive impact on independence, empathy, self-regulation, and collaboration all skills essential for lifelong wellbeing and leadership." },
]

const BENEFITS = [
  'Develop an inner drive and curiosity that fuels lifelong learning',
  'Build independence, focus, and resilience, the confidence to try, fail, and try again',
  'Grow in kindness and empathy, learning to respect themselves, others, and the world',
  'Learn to think creatively and solve problems with both logic and imagination',
  'Step into elementary and beyond not just prepared, but ahead socially, emotionally, and academically',
]

const headingStyle = {
  fontFamily: 'var(--font-baskervville)',
  fontWeight: 400,
  fontSize: 'clamp(28px, 4vw, 40px)',
  lineHeight: '44px',
  color: 'var(--brown)',
} as const

export default function OurPhilosophyPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-3 sm:px-6 lg:px-12">
        <div className="max-w-[1420px] mx-auto">
          <div className="relative overflow-hidden rounded-[10px] flex items-center justify-center text-center px-3 sm:px-5 py-[50px] md:py-[60px] lg:py-[140px]">
            <Image
              src="/philosophy-hero.jpg"
              alt="Child watering plants in the garden at Ohana"
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: 'center 35%' }}
            />
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)' }} />
            <Animate>
              <h1
                className="relative text-white capitalize text-[32px] md:text-[40px] max-w-[300px] md:max-w-2xl mx-auto"
                style={{ fontFamily: 'var(--font-nunito)', fontWeight: 400, lineHeight: 1.4, textShadow: '0 0 10px #000' }}
              >
                Honoring A Legacy, Embracing The Future
              </h1>
            </Animate>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto text-center">
          <Animate>
            <h2 style={headingStyle}>Our Philosophy</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              At Ohana Montessori, we draw on more than 100 years of proven Montessori practice, paired with the latest understanding of how children grow and learn. The result is an approach that feels timeless and modern all at once.
            </p>
          </Animate>
        </div>
      </section>

      {/* The Visionary: Dr. Maria Montessori */}
      <section className="px-6" style={{ background: '#F0ECE9', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-10 items-center">
          <Animate variant="slideLeft">
            <div className="relative w-full h-[260px] md:h-[320px] rounded-[20px] overflow-hidden">
              <Image src="/philosophy-01.webp" alt="Planting a seedling" fill className="object-cover" />
            </div>
          </Animate>
          <Animate variant="slideRight" delay={0.15}>
            <h2 style={headingStyle}>The Visionary:<br />Dr. Maria Montessori</h2>
            <div className="mt-6 space-y-4 leading-relaxed" style={{ color: 'var(--text)' }}>
              <p>
                Dr. Maria Montessori was more than an educator, she was a scientist, physician, and pioneer who saw what others missed: Children are naturally eager to learn, and thrive when given the freedom to explore in a thoughtfully prepared environment.
              </p>
              <p>
                Over 100 years ago, Dr. Montessori&apos;s revolutionary observations changed the world&apos;s understanding of childhood. Her methods respected children&apos;s individuality, innate curiosity, and profound capacity for growth&mdash;principles that remain at the heart of our school today.
              </p>
            </div>
          </Animate>
        </div>
      </section>

      {/* Backed by Modern Science */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>Backed by Modern Science</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              Today, extensive research continues to validate Dr. Montessori&apos;s discoveries.
            </p>
          </Animate>
          <AnimateStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {SCIENCE.map((s) => (
              <AnimateItem key={s.title}>
                <div
                  className="h-full text-center"
                  style={{ background: '#355E54', border: '1px solid #fff', borderRadius: '10px', padding: '40px' }}
                >
                  <h3 style={{ fontFamily: 'var(--font-baskervville)', fontWeight: 400, fontSize: '24px', lineHeight: 1.2, color: '#FEFAF4' }}>{s.title}</h3>
                  <p className="mt-4 leading-relaxed" style={{ color: '#FEFAF4' }}>{s.body}</p>
                </div>
              </AnimateItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Koa's Story */}
      <section className="px-6" style={{ background: '#F0ECE9', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-10 items-center">
          <Animate variant="slideLeft">
            <div className="relative w-full aspect-[500/599] rounded-[20px] overflow-hidden">
              <Image src="/koa.webp" alt="Koa, the wooden turtle" fill className="object-cover" />
            </div>
          </Animate>
          <Animate variant="slideRight" delay={0.15}>
            <h2 style={headingStyle}>Koa&apos;s Story</h2>
            <div className="mt-6 space-y-4 leading-relaxed" style={{ color: 'var(--text)' }}>
              <p>
                Every child at Ohana has a friend who reminds them to be brave, connected, and kind. His name is Koa.
              </p>
              <p>
                Koa is a wooden turtle, carved from a single piece of wood, strong, simple, and steady. Long before he found his way to our school, Koa traveled far across oceans and forests. Along the way, he listened. He listened to the waves, to the wind in the trees, and most importantly, to the dreams of children.
              </p>
              <p>
                Each dream became a story he carries on his back, woven into the lines of his shell. When children meet Koa, they see a reminder that their stories matter too, that they are safe, cared for, and part of something larger.
              </p>
              <p>
                Koa moves slowly, but with purpose. He teaches us that growth doesn&apos;t need to be rushed. He shows us that courage can be quiet, and that strength often looks like kindness.
              </p>
              <p>
                At Ohana Montessori, Koa is more than a symbol. His story shapes the way we create our classrooms, the way we care for each child, and the way we remind families: this is a place where children grow rooted in nature, nurtured with heart.
              </p>
            </div>
          </Animate>
        </div>
      </section>

      {/* Lifelong Benefits for Your Child */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>Lifelong Benefits for Your Child</h2>
            <div className="mt-6 space-y-4 leading-relaxed" style={{ color: 'var(--text)' }}>
              <p>
                Montessori isn&apos;t just a preschool choice, it&apos;s a life choice. At Ohana, children grow up seeing learning not as something they have to do, but as something they get to do. They carry that perspective into every stage of life, shaping who they become as students, leaders, and human beings.
              </p>
              <p>Children who experience authentic Montessori education:</p>
              <ul className="list-disc pl-5 space-y-1">
                {BENEFITS.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </Animate>
        </div>
      </section>

      {/* Where Tradition Meets Today */}
      <section className="px-6" style={{ background: '#F0ECE9', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>Where Tradition Meets Today</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              At Ohana Montessori, we carry forward Dr. Montessori&apos;s legacy with fresh eyes, blending timeless principles with the latest research in child development. Our environments are designed as ecosystems for growth, places where children are challenged intellectually, supported emotionally, guided socially, and strengthened physically. The result is not just school readiness, but a foundation for confident learning and meaningful contribution throughout life.
            </p>
          </Animate>
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
