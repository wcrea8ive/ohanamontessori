import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Animate, AnimateStagger, AnimateItem } from '@/components/Animate'

export const metadata: Metadata = {
  title: 'Our Montessori Approach | Child-Led Learning in Santa Ana, CA',
  description: "Discover Ohana Montessori's authentic Montessori approach — child-led learning, prepared environments, and Montessori-certified educators in Santa Ana, CA.",
  alternates: { canonical: 'https://ohanamontessori.com/daycare-santaana-tustin-irvine' },
}

const CHILD_LED = [
  { title: 'Self-Chosen Work', body: 'Children follow their curiosity, building focus and mastery through what sparks them most.' },
  { title: 'Gentle Guidance', body: 'Guides observe with care, offering lessons when the moment is right, never before, never too late.' },
  { title: 'Progress, Not Comparison', body: "Growth is measured only against each child's journey, celebrated in ways that build pride and self-belief." },
]

const ENVIRONMENT_POINTS = [
  'Authentic Montessori materials for hands-on discovery',
  'Natural light, soft colors, and textures that soothe and inspire',
  'Child-height furniture and open shelves that foster independence',
  'Quiet spaces for rest, reflection, and self-regulation',
  'Outdoor environments that connect children to nature every day',
]

const AUTHENTIC_POINTS = [
  { label: 'Montessori-Certified Educators:', body: ' Every lead guide is trained and certified in Montessori philosophy and practice.' },
  { label: 'Teachers Chosen With Care:', body: ' Individual attention ensures each child is truly seen and supported.' },
  { label: 'Hands-On Curriculum:', body: ' Real materials, real learning, not worksheets or screens.' },
  { label: 'Respect for Individual Pace:', body: ' We never rush children into academics; we support their natural growth and readiness.' },
  { label: 'Ongoing Professional Development:', body: ' Our team is dedicated to lifelong learning, just like the children we serve.' },
]

const DIFFERENT_POINTS = [
  'Peaceful, purposeful classrooms designed to support calm focus.',
  "Learning that follows each child's curiosity, not a pre-set script.",
  'A carefully chosen, deeply committed team that builds lasting relationships with families.',
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

export default function OurApproachPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-3 sm:px-6 lg:px-12">
        <div className="max-w-[1420px] mx-auto">
          <div className="relative overflow-hidden rounded-[10px] flex items-center justify-center text-center px-3 sm:px-5 py-[50px] md:py-[60px] lg:py-[140px]">
            <Image
              src="/our-approach-hero.webp"
              alt="Child engaged in Montessori work at Ohana"
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: 'center 35%' }}
            />
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)' }} />
            <Animate>
              <h1
                className="relative text-white capitalize text-[24px] md:text-[30px] max-w-[300px] md:max-w-2xl mx-auto"
                style={{ fontFamily: 'var(--font-nunito)', fontWeight: 400, lineHeight: 1.4, textShadow: '0 0 10px #000' }}
              >
                A Journey Of Discovery, Independence, And Confidence
              </h1>
            </Animate>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto text-center">
          <Animate>
            <h2 style={headingStyle}>Our Approach</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              At Ohana Montessori, we believe early childhood is sacred. That&apos;s why we&apos;ve created a private Montessori program in Santa Ana where children feel safe, seen, and inspired to grow. Ohana Montessori is your child&apos;s home away from home, a calm, thoughtfully prepared space designed to nurture the whole child: socially, emotionally, intellectually, and physically. Our serene classrooms are designed to meet children where they are, encouraging exploration, focus, and independence. We understand that the early years are the most formative, and our Montessori curriculum is intentionally built to inspire curiosity, confidence, and a lifelong love of learning.
            </p>
          </Animate>
        </div>
      </section>

      {/* Why Montessori Matters */}
      <section className="px-6" style={{ background: '#F0ECE9', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>Why Montessori Matters</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              Choosing your child&apos;s first school is choosing the foundation for their future. Montessori isn&apos;t just a method, it&apos;s a philosophy that respects each child&apos;s unique journey. We invite you to explore why generations of families trust this approach to nurture lifelong learners.
            </p>
          </Animate>
        </div>
      </section>

      {/* Child-Led Learning: Every Child, Every Moment */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>Child-Led Learning: Every Child, Every Moment</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              At Ohana, we believe childhood is not a race, it&apos;s an unfolding. Every child carries an inner compass, and our role is to honor it. Learning here isn&apos;t pushed, hurried, or compared. It&apos;s discovered. Each child chooses purposeful work from an environment designed for wonder, while our guides step in with gentle lessons the moment curiosity calls. The result? Independence, confidence, and a love of learning that carries into every stage of life.
            </p>
          </Animate>
        </div>
      </section>

      {/* What does child-led learning look like at Ohana? */}
      <section className="px-6" style={{ background: '#F0ECE9', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>What does child-led learning look like at Ohana?</h2>
          </Animate>
          <AnimateStagger className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {CHILD_LED.map((item) => (
              <AnimateItem key={item.title}>
                <h3 style={subHeadingStyle}>{item.title}</h3>
                <p className="mt-3 leading-relaxed" style={{ color: 'var(--text)' }}>{item.body}</p>
              </AnimateItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* The Prepared Environment */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>The Prepared Environment: Simple, Natural, and Purposeful</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              At Ohana, the classroom is a place where children feel at home. Calm and welcoming, each space is arranged with intention with every shelf, material, and corner designed to support independence and concentration. Surrounded by natural light, soft colors, and organic textures, children are invited to move freely, choose their work, and care for the world around them.
            </p>
            <h3 className="mt-8" style={subHeadingStyle}>In our environments, you&apos;ll find:</h3>
            <ul className="list-disc pl-5 mt-4 space-y-1 leading-relaxed" style={{ color: 'var(--text)' }}>
              {ENVIRONMENT_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/schedule-a-tour-santa-ana-daycare-preschool"
                className="inline-block transition-colors hover:bg-[var(--cream-dark)] hover:text-[var(--brown)]"
                style={{
                  fontFamily: 'var(--font-work-sans)',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  fontSize: '14px',
                  color: '#fff',
                  background: 'var(--brown)',
                  border: '1px solid var(--brown)',
                  borderRadius: '100px',
                  padding: '15px 40px',
                }}
              >
                Schedule a Personal Tour
              </Link>
            </div>
          </Animate>
        </div>
      </section>

      {/* What Makes Us Authentic */}
      <section className="px-6" style={{ background: '#F0ECE9', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>What Makes Us Authentic</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              With many schools use the Montessori name. few honor its principles.
            </p>
            <h3 className="mt-8" style={subHeadingStyle}>At Ohana Montessori, authenticity means:</h3>
            <ul className="list-disc pl-5 mt-4 space-y-1 leading-relaxed" style={{ color: 'var(--text)' }}>
              {AUTHENTIC_POINTS.map((point) => (
                <li key={point.label}><strong>{point.label}</strong>{point.body}</li>
              ))}
            </ul>
            <h3 className="mt-8" style={subHeadingStyle}>How we&apos;re different:</h3>
            <ul className="list-disc pl-5 mt-4 space-y-1 leading-relaxed" style={{ color: 'var(--text)' }}>
              {DIFFERENT_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Animate>
        </div>
      </section>

      {/* Ready to See Our Philosophy in Action? */}
      <section style={{ background: '#F0F5F4', padding: '60px 10px 75px' }}>
        <div className="max-w-[1000px] mx-auto text-center px-6">
          <Animate>
            <h2 style={{ fontFamily: 'var(--font-baskervville)', fontWeight: 400, fontSize: 'clamp(28px, 4vw, 40px)', color: '#000' }}>
              Ready to See Our Philosophy in Action?
            </h2>
            <p className="mt-6 leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--text)' }}>
              We invite you to experience what authentic Montessori truly looks and feels like. Tour our classrooms, meet our educators, and see how our approach nurtures confident, kind, and capable children.
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
              href="/request-information-daycare-santa-ana"
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
