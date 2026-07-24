import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Animate, AnimateStagger, AnimateItem } from '@/components/Animate'

export const metadata: Metadata = {
  title: 'Preschool Program (3–6 years) — Ohana Montessori',
  description: 'Our preschool program builds academic readiness, social skills, and kindergarten preparation for children 3–6 years. 1:12 adult-to-child ratio in Santa Ana, CA.',
  alternates: { canonical: 'https://ohanamontessori.com/preschool-program-santa-ana-tustin-irvine' },
}

const KINDERGARTEN_PREP = [
  'Individualized kindergarten transition plans',
  'Regular progress updates and parent-teacher conferences',
  'Support for both academic and emotional milestones',
  "Readiness portfolio and coordinated handoff to your child's new school",
]

const TYPICAL_DAY = [
  { title: 'Welcome & Routine', body: 'Welcoming morning routines' },
  { title: 'Work Cycles', body: 'Uninterrupted work cycles for deep concentration' },
  { title: 'Outdoor Play', body: 'Outdoor play and nature study' },
  { title: 'Creativity', body: 'Shared snacks and community time' },
  { title: 'Rest & Reflection', body: 'Quiet rest and reflection' },
]

const PROGRAM_DETAILS = [
  { title: 'Age Range:', body: '3–6 years' },
  { title: 'Class Size & Ratio:', body: '1:12 adult-to-child' },
  { title: 'Location:', body: 'Purposeful, beautiful, and designed for independence' },
  { title: 'Communication:', body: 'Daily updates, progress notes, and open parent partnership' },
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

export default function PreschoolProgramPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-3 sm:px-6 lg:px-12">
        <div className="max-w-[1420px] mx-auto">
          <div className="relative overflow-hidden rounded-[10px] flex items-center justify-center text-center px-3 sm:px-5 py-[50px] md:py-[60px] lg:py-[140px]">
            <Image
              src="/preschool-hero.webp"
              alt="Preschool classroom with forest mural"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)' }} />
            <Animate>
              <h1
                className="relative text-white capitalize text-[24px] md:text-[30px] max-w-2xl mx-auto"
                style={{ fontFamily: 'var(--font-nunito)', fontWeight: 400, lineHeight: 1.4, textShadow: '0 0 10px #000' }}
              >
                Confident Learners. Compassionate Friends. Ready For The World.
              </h1>
            </Animate>
          </div>
        </div>
      </section>

      {/* Preschool Program intro */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate className="text-center">
            <h2 style={headingStyle}>Preschool Program</h2>
            <p className="mt-2" style={subHeadingStyle}>Ages 3–6 years</p>
          </Animate>
          <div className="grid md:grid-cols-2 gap-10 items-center mt-10">
            <Animate variant="slideLeft">
              <div className="relative w-full h-[260px] md:h-[320px] rounded-[20px] overflow-hidden">
                <Image src="/preschool-joy.jpg" alt="Teacher and child working with Montessori materials" fill className="object-cover" />
              </div>
            </Animate>
            <Animate variant="slideRight" delay={0.15}>
              <h3 style={subHeadingStyle}>The Joy of the Preschool Years</h3>
              <p className="mt-4 leading-relaxed" style={{ color: 'var(--text)' }}>
                Our Preschool Program prepares your child for a lifetime of learning by nurturing curiosity, focus, and creativity. With hands-on activities and purposeful routines, we support growing independence and cognitive development in a warm, engaging environment. Children are encouraged to ask questions, express themselves, and discover the joy of learning.
              </p>
            </Animate>
          </div>
        </div>
      </section>

      {/* Academic Readiness, Montessori Style */}
      <section className="px-6" style={{ background: '#F0ECE9', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>Academic Readiness, Montessori Style</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              Our classrooms are filled with authentic Montessori materials that inspire curiosity and help children master foundational skills through hands-on discovery.
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-1 leading-relaxed" style={{ color: 'var(--text)' }}>
              <li><strong>Literacy:</strong> Letter sounds, early writing, and joyful reading exploration</li>
              <li><strong>Mathematics:</strong> Counting, number sense, and concrete concepts through manipulative materials</li>
              <li><strong>Science &amp; Culture:</strong> Exploring nature, geography, and the wider world</li>
              <li><strong>Creative Expression:</strong> Art, music, and imaginative storytelling</li>
            </ul>
            <p className="mt-4 leading-relaxed" style={{ color: 'var(--text)' }}>
              Children move at their own pace by gaining confidence as they experience success and mastery, never rushed or pressured.
            </p>
          </Animate>
        </div>
      </section>

      {/* Social Skills and Emotional Growth */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>Social Skills and Emotional Growth</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              Preschool is about much more than academics. Our guides gently support children as they learn to navigate friendships, resolve conflicts, and express their feelings with kindness and respect.
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-1 leading-relaxed" style={{ color: 'var(--text)' }}>
              <li>Community circle time to practice listening, sharing, and empathy</li>
              <li>Grace and courtesy lessons for real-world social skills</li>
              <li>Mixed-age classrooms encouraging mentorship and cooperation</li>
              <li>Opportunities for leadership and teamwork</li>
            </ul>
          </Animate>
        </div>
      </section>

      {/* Kindergarten Preparation and Beyond */}
      <section className="px-6" style={{ background: '#F0ECE9', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>Kindergarten Preparation and Beyond</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              Montessori graduates are known for entering elementary school with confidence, curiosity, and a deep love of learning. We partner with families to ensure each child&apos;s readiness, providing:
            </p>
          </Animate>
          <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {KINDERGARTEN_PREP.map((m) => (
              <AnimateItem key={m}>
                <div className="h-full text-center flex items-center justify-center" style={{ background: '#355E54', borderRadius: '10px', padding: '32px 24px' }}>
                  <h3 style={{ fontFamily: 'var(--font-baskervville)', fontWeight: 400, fontSize: '20px', lineHeight: 1.3, color: '#FEFAF4' }}>{m}</h3>
                </div>
              </AnimateItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* A Typical Day */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>A Typical Day</h2>
          </Animate>
          <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-10">
            {TYPICAL_DAY.map((item) => (
              <AnimateItem key={item.title}>
                <div className="h-full text-center" style={{ background: 'var(--brown)', borderRadius: '10px', padding: '32px 20px' }}>
                  <h3 style={{ fontFamily: 'var(--font-baskervville)', fontWeight: 400, fontSize: '22px', lineHeight: 1.2, color: '#FEFAF4' }}>{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed" style={{ color: '#FEFAF4' }}>{item.body}</p>
                </div>
              </AnimateItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Program Details */}
      <section className="px-6" style={{ background: '#F0ECE9', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>Program Details</h2>
          </Animate>
          <AnimateStagger className="mt-8 space-y-6">
            {PROGRAM_DETAILS.map((item) => (
              <AnimateItem key={item.title}>
                <h3 style={subHeadingStyle}>{item.title}</h3>
                <p className="mt-2 leading-relaxed" style={{ color: 'var(--text)' }}>{item.body}</p>
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
              We know how meaningful these first months are. Let us partner with your family to provide a gentle, joyful start for your child. If you&apos;re looking for a preschool in Irvine, Tustin, or Santa Ana, we proudly serve families throughout these communities, as well as Orange, Costa Mesa, Newport Beach, and the surrounding areas.
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
