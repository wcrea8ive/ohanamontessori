import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Animate, AnimateStagger, AnimateItem } from '@/components/Animate'

export const metadata: Metadata = {
  title: 'Toddler Program (18 months–3 years) — Ohana Montessori',
  description: 'Our toddler program fosters independence, language, and social-emotional growth for children 18 months–3 years. 1:6 adult-to-child ratio in Santa Ana, CA.',
  alternates: { canonical: 'https://ohanamontessori.com/toddler-program-santa-ana-tustin-irvine' },
}

const PRACTICAL_LIFE = [
  'Pouring, scooping, sorting, and cleaning',
  'Watering plants and caring for our environment',
  'Grace and courtesy lessons like learning to greet, taking turns, and expressing needs respectfully',
  'Self-care routines: handwashing and putting on shoes and coats',
]

const TYPICAL_DAY = [
  { title: 'Welcome', body: 'Warm, welcoming drop-off' },
  { title: 'Routine', body: 'Child-led work cycles with hands-on materials' },
  { title: 'Outdoor Play', body: 'Outdoor play and nature exploration' },
  { title: 'Snacks', body: 'Shared snacks and community time' },
  { title: 'Movement & Music', body: 'Music, movement, and creative expression' },
]

const PROGRAM_DETAILS = [
  { title: 'Age Range:', body: '18 months–3 years' },
  { title: 'Class Size & Ratio:', body: '1:6 adult-to-child' },
  { title: 'Location:', body: 'Safe, beautiful, and designed for toddler-sized success' },
  { title: 'Communication:', body: 'Daily updates and photos through our secure parent app' },
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

export default function ToddlerProgramPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-3 sm:px-6 lg:px-12">
        <div className="max-w-[1420px] mx-auto">
          <div className="relative overflow-hidden rounded-[10px] flex items-center justify-center text-center px-3 sm:px-5 py-[50px] md:py-[60px] lg:py-[140px]">
            <Image
              src="/toddler-hero.webp"
              alt="Outdoor play area with slide and playground equipment"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)' }} />
            <Animate>
              <h1
                className="relative text-white capitalize text-[28px] md:text-[36px] max-w-2xl mx-auto"
                style={{ fontFamily: 'var(--font-nunito)', fontWeight: 400, lineHeight: 1.4, textShadow: '0 0 10px #000' }}
              >
                Growing Independence. Joyful Exploration.
              </h1>
            </Animate>
          </div>
        </div>
      </section>

      {/* Toddler Program intro */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate className="text-center">
            <h2 style={headingStyle}>Toddler Program</h2>
            <p className="mt-2" style={subHeadingStyle}>Ages 18 months–3 years</p>
          </Animate>
          <div className="grid md:grid-cols-2 gap-10 items-center mt-10">
            <Animate variant="slideLeft">
              <div className="relative w-full h-[260px] md:h-[320px] rounded-[20px] overflow-hidden">
                <Image src="/toddler-wonder.jpg" alt="Toddlers exploring practical life activities" fill className="object-cover" />
              </div>
            </Animate>
            <Animate variant="slideRight" delay={0.15}>
              <h3 style={subHeadingStyle}>The Wonder of Toddlerhood</h3>
              <p className="mt-4 leading-relaxed" style={{ color: 'var(--text)' }}>
                Our Toddler Program follows your child into their next stage of exploration, offering space to move, discover, and grow with confidence. Through purposeful play and gentle guidance, we help toddlers begin to understand the world around them and their relationships within it. With a thoughtful balance of structure and freedom, we support emerging independence, social development, and early learning in a way that builds confidence, connection, and a strong sense of self.
              </p>
            </Animate>
          </div>
        </div>
      </section>

      {/* Fostering Independence */}
      <section className="px-6" style={{ background: '#F0ECE9', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>Fostering Independence</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              Our Montessori toddler environment is specially designed to empower young children to &ldquo;do it myself.&rdquo; With child-sized furniture, accessible materials, and gentle guidance, toddlers gain confidence through everyday accomplishments.
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-1 leading-relaxed" style={{ color: 'var(--text)' }}>
              <li>Self-care activities like handwashing, dressing, and caring for personal belongings</li>
              <li>Snack and meal routines that foster choice and table manners</li>
              <li>Opportunities to help care for the classroom and environment</li>
            </ul>
          </Animate>
        </div>
      </section>

      {/* Language Blossoms Here */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>Language Blossoms Here</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              Toddlers are eager to communicate and understand the world around them. We immerse children in rich language experiences throughout the day, supporting vocabulary growth and self-expression.
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-1 leading-relaxed" style={{ color: 'var(--text)' }}>
              <li>Songs, stories, and conversation circles</li>
              <li>Naming objects, feelings, and actions in daily routines</li>
              <li>Encouragement for both verbal and nonverbal communication</li>
            </ul>
          </Animate>
        </div>
      </section>

      {/* Practical Life Skills for Everyday Success */}
      <section className="px-6" style={{ background: '#F0ECE9', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>Practical Life Skills for Everyday Success</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              Hands-on learning is at the heart of Montessori. Our practical life activities help toddlers develop coordination, concentration, and a sense of responsibility.
            </p>
          </Animate>
          <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {PRACTICAL_LIFE.map((m) => (
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
