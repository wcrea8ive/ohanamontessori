import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Animate, AnimateStagger, AnimateItem } from '@/components/Animate'

export const metadata: Metadata = {
  title: 'Daily Experience — Ohana Montessori',
  description: 'Discover what a typical day looks like at Ohana Montessori, from our infant program through preschool, in Santa Ana, CA.',
  alternates: { canonical: 'https://ohanamontessori.com/daily-experience' },
}

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

const INFANT_SCHEDULE = [
  { time: '7:30–8:30 am', activity: 'Warm welcomes, gentle drop-off, and individualized care' },
  { time: '8:30–9:30 am', activity: 'Sensory exploration with soft music, tactile materials, tummy time' },
  { time: '9:30–10:00 am', activity: "Snack and bottle time, responsive to each baby's needs" },
  { time: '10:00–11:00 am', activity: 'Outdoor strolls, fresh air, and nature sounds' },
  { time: '11:00–12:00 pm', activity: 'Stories, songs, and quiet bonding' },
  { time: '12:00–2:00 pm', activity: 'Rest and naps (individualized)' },
  { time: '2:00–4:00 pm', activity: 'Gentle movement, social play, and discovery' },
  { time: '4:00–5:30 pm', activity: 'Pickup and loving goodbyes' },
]

const TODDLER_SCHEDULE = [
  { time: '7:30–8:30 am', activity: 'Arrival and calm transition into the classroom' },
  { time: '8:30–9:00 am', activity: 'Community circle with songs, stories, and greetings' },
  { time: '9:00–10:30 am', activity: 'Montessori work cycle with hands-on exploration and practical life activities' },
  { time: '10:30–11:00 am', activity: 'Snack and independent cleanup' },
  { time: '11:00–12:00 pm', activity: 'Outdoor play with movement, nature, and gross motor skills' },
  { time: '12:00–12:30 pm', activity: 'Lunch and social time' },
  { time: '12:30–2:30 pm', activity: 'Rest/nap time with soft music and cozy spaces' },
  { time: '2:30–3:30 pm', activity: 'Afternoon work cycle or creative art' },
  { time: '3:30–5:30 pm', activity: 'Outdoor play, story time, and pickup' },
]

const PRESCHOOL_SCHEDULE = [
  { time: '7:30–8:30 am', activity: 'Arrival, greetings, and free choice' },
  { time: '8:30–9:00 am', activity: 'Group circle with community building, grace, and courtesy' },
  { time: '9:00–11:00 am', activity: 'Child-chosen Montessori activities of literacy, math, science, culture, sensorial with individualized teacher guidance' },
  { time: '11:00–11:45 am', activity: 'Outdoor exploration and group games' },
  { time: '11:45–12:15 pm', activity: 'Lunch and conversation' },
  { time: '12:15–1:00 pm', activity: 'Story time, music, and creative arts' },
  { time: '1:00–2:30 pm', activity: 'Rest or quiet work (depending on age/need)' },
  { time: '2:30–3:30 pm', activity: 'Second work cycle or project-based learning' },
  { time: '3:30–5:30 pm', activity: 'Outdoor play, community cleanup, farewells' },
]

const MONTESSORI_DAY_ITEMS = [
  {
    title: 'The Work Cycle—Purposeful, Uninterrupted Learning',
    body: 'Children enjoy long, uninterrupted periods (the Montessori work cycle) where they choose activities that match their curiosity and developmental stage. Teachers observe, gently introduce new lessons, and allow children to explore at their own pace. Materials are self-correcting and designed for hands-on mastery. Children learn focus, independence, and confidence through real work not busywork.',
  },
  {
    title: 'Prepared Environments',
    body: 'Every classroom is calm, beautiful, and filled with authentic Montessori materials, encouraging children to move freely, care for their space, and choose meaningful work. Low shelves and inviting displays foster independence, while spaces for quiet reflection and cozy corners provide comfort. Natural light and organic materials support sensory development.',
  },
  {
    title: 'Individual Needs in a Community',
    body: 'Every child is honored as an individual, with routines and activities adapted to support their unique personality, interests, and pace. Multi-age groups allow younger children to observe and older children to mentor, building empathy and leadership. Teachers model respect, patience, and gentle guidance throughout the day.',
  },
  {
    title: 'Outdoor Time, Meals, and Rest',
    body: 'Daily outdoor play and nature exploration are essential to our routine. Shared meals build community and practical life skills. Rest and quiet time are honored, never rushed or skipped.',
  },
  {
    title: 'Teacher Interactions and Guidance',
    body: "Montessori guides at Ohana Montessori nurture children with warmth and respect, utilizing positive language and modeling emotional regulation. Their guidance is centered on empowering children to solve problems, foster friendships, and confidently express their needs. Through daily observations, teachers are able to personalize lessons and acknowledge each child's individual progress.",
  },
]

const MATERIALS_ITEMS = [
  { title: 'Practical life', body: 'Pouring, sweeping, arranging flowers, and preparing snacks' },
  { title: 'Sensorial', body: 'Matching, sorting, sound cylinders, and color tablets' },
  { title: 'Literacy', body: 'Sandpaper letters, movable alphabets, and storytelling' },
  { title: 'Math', body: 'Counting beads, number rods, and hands-on math games' },
  { title: 'Science and culture', body: 'Plant care, maps, animal studies, and seasonal changes' },
  { title: 'Art and music', body: 'Drawing, painting, singing, and movement' },
]

function ScheduleCard({ items }: { items: { time: string; activity: string }[] }) {
  return (
    <div style={{ background: '#663D22', borderRadius: '10px', padding: '40px' }}>
      <h4 style={{ ...subHeadingStyle, color: '#fff' }}>Sample Schedule</h4>
      <dl className="mt-4 space-y-3">
        {items.map((item) => (
          <div key={item.time} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
            <dt className="text-sm font-semibold whitespace-nowrap" style={{ color: '#FEFAF4', minWidth: '120px' }}>
              {item.time}
            </dt>
            <dd className="text-sm leading-relaxed" style={{ color: '#fff' }}>{item.activity}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default function DailyExperiencePage() {
  return (
    <>
      {/* Hero */}
      <section className="px-3 sm:px-6 lg:px-12">
        <div className="max-w-[1420px] mx-auto">
          <div className="relative overflow-hidden rounded-[10px] flex items-center justify-center text-center px-3 sm:px-5 py-[50px] md:py-[60px] lg:py-[140px]">
            <Image
              src="/daily-experience-hero.webp"
              alt="Children running through a field of wildflowers at sunset"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)' }} />
            <Animate>
              <h1
                className="relative text-white capitalize text-[20px] sm:text-[28px] md:text-[30px] whitespace-nowrap"
                style={{ fontFamily: 'var(--font-nunito)', fontWeight: 400, lineHeight: 1.4, textShadow: '0 0 10px #000' }}
              >
                Discover, Create, Grow—Every Day
              </h1>
            </Animate>
          </div>
        </div>
      </section>

      {/* A Day at Ohana Montessori */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto text-center">
          <Animate>
            <h2 style={headingStyle}>A Day at Ohana Montessori</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              At Ohana Montessori, every day is intentionally designed to nurture your child&apos;s independence, curiosity, and joy. Here&apos;s how Montessori principles come alive in our classrooms for infants, toddlers, and preschoolers.
            </p>
          </Animate>
        </div>
      </section>

      {/* What Does a Typical Day Look Like? */}
      <section className="px-6" style={{ background: '#F0ECE9', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto text-center">
          <Animate>
            <h2 style={headingStyle}>What Does a Typical Day Look Like?</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              Our daily routines balance structure with freedom, blending individual exploration, group connection, and the gentle rhythms that help children feel secure and celebrated.
            </p>
          </Animate>
        </div>
      </section>

      {/* Infant Program */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate className="text-center">
            <h2 style={headingStyle}>Infant Program (3–24 months)</h2>
          </Animate>
          <Animate className="mt-10">
            <ScheduleCard items={INFANT_SCHEDULE} />
          </Animate>
        </div>
      </section>

      {/* Toddler Program */}
      <section className="px-6" style={{ background: '#F0ECE9', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate className="text-center">
            <h2 style={headingStyle}>Toddler Program (18 months–3 years)</h2>
          </Animate>
          <Animate className="mt-10">
            <ScheduleCard items={TODDLER_SCHEDULE} />
          </Animate>
        </div>
      </section>

      {/* Preschool Program */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate className="text-center">
            <h2 style={headingStyle}>Preschool Program (3–6 years)</h2>
          </Animate>
          <Animate className="mt-10">
            <ScheduleCard items={PRESCHOOL_SCHEDULE} />
          </Animate>
        </div>
      </section>

      {/* What Makes the Montessori Day Different? */}
      <section className="px-6" style={{ background: '#F0ECE9', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate className="text-center">
            <h2 style={headingStyle}>What Makes the Montessori Day Different?</h2>
          </Animate>
          <AnimateStagger className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {MONTESSORI_DAY_ITEMS.map((item) => (
              <AnimateItem key={item.title} className={item.title.startsWith('Teacher') ? 'md:col-span-2' : undefined}>
                <div className="h-full" style={{ background: '#663D22', borderRadius: '10px', padding: '40px' }}>
                  <h3 style={{ ...subHeadingStyle, color: '#fff' }}>{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed" style={{ color: '#fff' }}>{item.body}</p>
                </div>
              </AnimateItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Materials and Learning Opportunities Throughout the Day */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate className="text-center">
            <h2 style={headingStyle}>Materials and Learning Opportunities Throughout the Day</h2>
          </Animate>
          <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {MATERIALS_ITEMS.map((item) => (
              <AnimateItem key={item.title}>
                <div className="h-full" style={{ background: '#F0ECE9', borderRadius: '10px', padding: '40px' }}>
                  <h3 style={subHeadingStyle}>{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--text)' }}>{item.body}</p>
                </div>
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
