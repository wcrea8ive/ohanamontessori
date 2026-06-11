import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import CTABanner from '@/components/CTABanner'
import { Animate } from '@/components/Animate'

export const metadata: Metadata = {
  title: 'School Calendar & Hours — Ohana Montessori',
  description: 'Ohana Montessori school hours, calendar, and schedule information for Santa Ana, CA. Open 7:00 am – 6:00 pm Monday through Friday.',
}

export default function SchoolCalendarPage() {
  return (
    <>
      <PageHero
        label="Info"
        title="School Calendar"
        titleAccent="& Hours"
        subtitle="Everything you need to plan your family's schedule — daily hours, program schedules, and important dates."
      />

      <section className="py-24" style={{ background: 'var(--cream)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <Animate>
            <div className="grid sm:grid-cols-2 gap-8 mb-16">
              <div className="rounded-2xl p-8" style={{ background: '#fff', border: '1px solid var(--border)' }}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--sage)' }}>Daily Hours</p>
                <h2 className="font-bold mb-4" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '28px', color: 'var(--text)' }}>Monday – Friday</h2>
                <div className="space-y-3 text-sm" style={{ color: 'var(--text-muted)' }}>
                  <div className="flex justify-between py-2" style={{ borderBottom: '1px solid var(--border)' }}>
                    <span>Facility Opens</span>
                    <span className="font-semibold" style={{ color: 'var(--text)' }}>7:00 am</span>
                  </div>
                  <div className="flex justify-between py-2" style={{ borderBottom: '1px solid var(--border)' }}>
                    <span>Montessori School Day Begins</span>
                    <span className="font-semibold" style={{ color: 'var(--text)' }}>8:30 am</span>
                  </div>
                  <div className="flex justify-between py-2" style={{ borderBottom: '1px solid var(--border)' }}>
                    <span>Montessori School Day Ends</span>
                    <span className="font-semibold" style={{ color: 'var(--text)' }}>3:30 pm</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Facility Closes</span>
                    <span className="font-semibold" style={{ color: 'var(--text)' }}>6:00 pm</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl p-8" style={{ background: 'var(--forest)' }}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--sage)' }}>Schedule Options</p>
                <h2 className="font-bold mb-4 text-white" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '28px' }}>Flexible Schedules</h2>
                <div className="space-y-3 text-sm" style={{ color: '#a8a89e' }}>
                  <p>We offer 3-day and 5-day schedule options for the Toddler program, and 5-day full time for Infant and Preschool.</p>
                  <p>Extended care before and after the Montessori school day is included in all tuition.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-8" style={{ background: '#fff', border: '1px solid var(--border)' }}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--sage)' }}>A Typical Day</p>
              <h2 className="font-bold mb-6" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '28px', color: 'var(--text)' }}>Daily Flow</h2>
              <div className="space-y-1">
                {[
                  { time: '7:00–8:30 am', activity: 'Morning Welcome & Early Care' },
                  { time: '8:30 am', activity: 'Montessori Work Cycles Begin' },
                  { time: 'Mid-Morning', activity: 'Outdoor Exploration & Movement' },
                  { time: 'Late Morning', activity: 'Community Snack & Social Time' },
                  { time: 'Midday', activity: 'Lunch & Rest/Quiet Time' },
                  { time: 'Afternoon', activity: 'Work Cycles Continue & Reflection' },
                  { time: '3:30 pm', activity: 'Montessori School Day Ends' },
                  { time: '3:30–6:00 pm', activity: 'Extended Care & Pick-Up' },
                ].map((item) => (
                  <div key={item.time} className="flex gap-6 py-3" style={{ borderBottom: '1px solid var(--border)' }}>
                    <span className="text-sm font-medium w-36 shrink-0" style={{ color: 'var(--sage)' }}>{item.time}</span>
                    <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </Animate>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
