import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Animate, AnimateStagger, AnimateItem } from '@/components/Animate'
import PhotoGalleryLightbox from '@/components/PhotoGalleryLightbox'

export const metadata: Metadata = {
  title: 'Our Facility — Ohana Montessori',
  description: "Tour Ohana Montessori's nature-inspired facility in Santa Ana, CA — natural materials, abundant light, prepared classrooms, and beautiful outdoor learning spaces.",
  alternates: { canonical: 'https://ohanamontessori.com/our-facility' },
}

const CLASSROOMS = [
  { img: '/growing-together-icons-cove-1.webp', name: 'The Cove', body: "Our private lactation room. A space created for families. Like a sheltered inlet along Koa's journey, it is a place of nurture and renewal, where children are fed and parents find comfort." },
  { img: '/growing-together-icons-willow-1.webp', name: 'Willow', body: 'For our youngest learners, like the tree that bends and grows, this room is a place of gentle beginnings, stability, and early exploration.' },
  { img: '/growing-together-icons-sky-1.webp', name: 'Sky', body: 'Sky the Bird – Infant B. Still in the infant stage, just more expansive. Sky is gentle and calm, representing openness and possibility. Babies begin to look outward and explore beyond immediate needs.' },
  { img: '/growing-together-icons-river-1.webp', name: 'River', body: 'River the Fish – Toddler. Toddlers are natural explorers. River is playful, fast, and curious, splashing out of bounds as they learn to test limits and discover the world.' },
  { img: '/growing-together-icons-koa-1.webp', name: 'Koa', body: 'Preschoolers are ready for guidance and courage. Here, they finally meet Koa directly. He is steady, brave, and wise, modeling how to try new things slowly and surely. This will be a very special classroom that every child will look forward to entering.' },
  { img: '/growing-together-icons-ember-1.webp', name: 'Ember', body: 'For our oldest children preparing for the next stage, this room glows with curiosity and resilience. Like a flame, it nurtures focus, creativity, and a sense of responsibility.' },
]

const SAFETY_POINTS = [
  { title: 'Secure entrances', body: 'Monitored access and clear child release protocols ensure families feel confident every day.' },
  { title: 'Visibility', body: "Open sightlines throughout the school allow for constant supervision while still respecting each child's independence." },
  { title: 'Emergency preparedness', body: 'Our campus is equipped with modern safety systems, and every staff member is trained to respond calmly and effectively in any situation.' },
]

const GALLERY = Array.from({ length: 23 }, (_, i) => `/facility-gallery-${i + 1}.webp`)

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

export default function OurFacilityPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-3 sm:px-6 lg:px-12">
        <div className="max-w-[1420px] mx-auto">
          <div className="relative overflow-hidden rounded-[10px] flex items-center justify-center text-center px-3 sm:px-5 py-[50px] md:py-[60px] lg:py-[140px]">
            <Image
              src="/facility-hero.webp"
              alt="Ohana Montessori lobby"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)' }} />
            <Animate>
              <h1
                className="relative text-white capitalize text-[24px] md:text-[30px] lg:text-[40px] max-w-[300px] md:max-w-full mx-auto"
                style={{ fontFamily: 'var(--font-nunito)', fontWeight: 400, lineHeight: 1.4, textShadow: '0 0 10px #000' }}
              >
                Home Is Where Love Begins.
              </h1>
            </Animate>
          </div>
        </div>
      </section>

      {/* Our Facility */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto text-center">
          <Animate>
            <h2 style={headingStyle}>Our Facility</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              Ohana is where it continues, a second home where children are known, families are welcomed, and the village grows. Each classroom and space is designed for a stage of growth where children feel rooted, free, curious, and cared for.
            </p>
          </Animate>
        </div>
      </section>

      {/* Classrooms */}
      <section className="px-6" style={{ background: '#F0ECE9', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>Classrooms</h2>
          </Animate>
          <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {CLASSROOMS.map((c) => (
              <AnimateItem key={c.name}>
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ borderRadius: '10px', overflow: 'hidden', lineHeight: 0 }}>
                    <Image src={c.img} alt={c.name} width={500} height={599} style={{ width: '100%', height: 'auto', display: 'block' }} />
                  </div>
                  <div style={{ flex: 1, background: 'var(--brown)', padding: '24px', borderRadius: '0 0 10px 10px', marginTop: '-12px', position: 'relative' }}>
                    <p className="text-sm leading-relaxed text-center" style={{ color: '#FEFAF4' }}>{c.body}</p>
                  </div>
                </div>
              </AnimateItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Our outdoor space */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>Our outdoor space</h2>
            <div className="mt-6 space-y-4 leading-relaxed" style={{ color: 'var(--text)' }}>
              <p>
                Outdoor is an extension of the classroom, designed for imagination and exploration. Children make music on the sound wall, dig and create in the mud kitchen, share meals in the open air, and curl up with books in the cabin. They also tend to the garden, exploring the cycle of growth, from seed to harvest, nurturing both wonder and responsibility. Every corner invites connection, creativity, and engagement, showing children that even simple spaces can hold endless wonder.
              </p>
              <p>
                We&apos;ve also created a special outdoor setting just for infants, where the environment is scaled to their needs and filled with gentle opportunities to explore.
              </p>
              <p>
                At Ohana Montessori, every child is held by a village. Our school offers the comfort of home and the strength of community, with families and teachers working together. We also honor parents, recognizing that building a career and a future is part of the same journey as raising children.
              </p>
            </div>
          </Animate>
        </div>
      </section>

      {/* Safety and security */}
      <section className="px-6" style={{ background: '#F0ECE9', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <h2 style={headingStyle}>Safety and security</h2>
            <p className="mt-6 leading-relaxed" style={{ color: 'var(--text)' }}>
              Your child&apos;s safety is our highest priority, and our campus is designed with both security and peace of mind.
            </p>
          </Animate>
          <AnimateStagger className="mt-8 space-y-6">
            {SAFETY_POINTS.map((s) => (
              <AnimateItem key={s.title}>
                <h3 style={subHeadingStyle}>{s.title}</h3>
                <p className="mt-2 leading-relaxed" style={{ color: 'var(--text)' }}>{s.body}</p>
              </AnimateItem>
            ))}
          </AnimateStagger>
          <Animate>
            <p className="mt-8 leading-relaxed" style={{ color: 'var(--text)' }}>
              We created each space to feel safe, warm, and alive with possibility. We partner with parents as true collaborators. And we nurture a community where kindness and connection shape every day.
            </p>
          </Animate>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1000px] mx-auto">
          <Animate>
            <PhotoGalleryLightbox images={GALLERY} alt="Ohana Montessori facility" />
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
              We know how meaningful these first months are. Let us partner with your family to provide a gentle, joyful start for your child.
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
