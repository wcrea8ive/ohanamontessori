import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Animate, AnimateStagger, AnimateItem } from '@/components/Animate'
import { BLOG_POSTS } from '@/lib/blogPosts'

export const metadata: Metadata = {
  title: 'Blog — Ohana Montessori',
  description: 'Guides and insights for Orange County families navigating preschool, Montessori education, and early childhood development.',
  alternates: { canonical: 'https://ohanamontessori.com/blog' },
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogPage() {
  const sorted = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <>
      {/* Hero — matches live site: DSCF6989-HDR.webp, 40% overlay, 140px padding, rounded 10px */}
      <section className="px-3 sm:px-6 lg:px-12">
        <div className="max-w-[1420px] mx-auto">
          <div className="relative overflow-hidden rounded-[10px] flex items-end justify-center text-center px-3 sm:px-5 py-[80px] md:py-[140px]">
            <Image
              src="/blog-hero.webp"
              alt="Ohana Montessori classroom"
              fill
              priority
              sizes="(min-width: 1420px) 1420px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)' }} />
            <Animate>
              <h1
                className="relative text-white capitalize"
                style={{
                  fontFamily: 'var(--font-nunito)',
                  fontWeight: 400,
                  fontSize: '40px',
                  textShadow: '0 0 10px #000',
                }}
              >
                Ohana Blog
              </h1>
            </Animate>
          </div>
        </div>
      </section>

      {/* Post list */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
        <div className="max-w-[800px] mx-auto">
          <AnimateStagger className="space-y-0">
            {sorted.map((post, i) => (
              <AnimateItem key={post.slug}>
                <article
                  style={{
                    borderTop: '1px solid var(--border)',
                    paddingTop: '36px',
                    paddingBottom: '36px',
                    ...(i === sorted.length - 1 ? { borderBottom: '1px solid var(--border)' } : {}),
                  }}
                >
                  <time
                    dateTime={post.date}
                    style={{
                      fontFamily: 'var(--font-work-sans)',
                      fontSize: '12px',
                      fontWeight: 500,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {formatDate(post.date)}
                  </time>
                  <h2
                    className="mt-3"
                    style={{
                      fontFamily: 'var(--font-baskervville)',
                      fontWeight: 400,
                      fontSize: 'clamp(22px, 3vw, 28px)',
                      lineHeight: 1.25,
                      color: '#1E2820',
                    }}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition-colors hover:text-[var(--brown)]"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 leading-relaxed" style={{ color: 'var(--text-muted)', fontSize: '15px' }}>
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 mt-5 transition-colors hover:text-[var(--brown)]"
                    style={{
                      fontFamily: 'var(--font-work-sans)',
                      fontSize: '13px',
                      fontWeight: 500,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: 'var(--brown)',
                    }}
                  >
                    Read article →
                  </Link>
                </article>
              </AnimateItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#F0F5F4', padding: '60px 10px 75px' }}>
        <div className="max-w-[700px] mx-auto text-center px-6">
          <Animate>
            <h2 style={{ fontFamily: 'var(--font-baskervville)', fontWeight: 400, fontSize: 'clamp(28px, 4vw, 40px)', color: '#000' }}>
              Ready to See Ohana in Person?
            </h2>
            <p className="mt-5 leading-relaxed" style={{ color: 'var(--text)' }}>
              Visit our campus at 2102 N. Tustin Avenue, Santa Ana — we&apos;d love to show you the classrooms.
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
              Schedule a Tour
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
