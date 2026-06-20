import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Animate } from '@/components/Animate'
import { BLOG_POSTS, getPost } from '@/lib/blogPosts'

export function generateStaticParams() {
  return BLOG_POSTS.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: `${post.title} — Ohana Montessori`,
    description: post.excerpt,
    alternates: { canonical: `https://ohanamontessori.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return (
    <>
      {/* Hero */}
      <section style={{ background: '#F0ECE9', paddingTop: '80px', paddingBottom: '60px' }}>
        <div className="max-w-[800px] mx-auto px-6">
          <Animate>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 mb-8 transition-colors hover:text-[var(--brown)]"
              style={{
                fontFamily: 'var(--font-work-sans)',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
              }}
            >
              ← All articles
            </Link>
            <time
              dateTime={post.date}
              style={{
                display: 'block',
                fontFamily: 'var(--font-work-sans)',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '16px',
              }}
            >
              {formatDate(post.date)}
            </time>
            <h1
              style={{
                fontFamily: 'var(--font-baskervville)',
                fontWeight: 400,
                fontSize: 'clamp(28px, 4vw, 44px)',
                lineHeight: 1.2,
                color: '#1E2820',
              }}
            >
              {post.title}
            </h1>
            <p
              className="mt-5 leading-relaxed"
              style={{ color: 'var(--text-muted)', fontSize: '17px', maxWidth: '600px' }}
            >
              {post.excerpt}
            </p>
          </Animate>
        </div>
      </section>

      {/* Article body */}
      <section className="px-6" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
        <div className="max-w-[720px] mx-auto">
          <Animate>
            <div className="prose-ohana">
              {post.body.map((section, i) => {
                if (section.type === 'h2') {
                  return (
                    <h2
                      key={i}
                      style={{
                        fontFamily: 'var(--font-baskervville)',
                        fontWeight: 400,
                        fontSize: 'clamp(22px, 3vw, 30px)',
                        lineHeight: 1.25,
                        color: 'var(--brown)',
                        marginTop: '48px',
                        marginBottom: '16px',
                      }}
                    >
                      {section.text}
                    </h2>
                  )
                }
                if (section.type === 'h3') {
                  return (
                    <h3
                      key={i}
                      style={{
                        fontFamily: 'var(--font-baskervville)',
                        fontWeight: 400,
                        fontSize: 'clamp(18px, 2.5vw, 24px)',
                        lineHeight: 1.3,
                        color: 'var(--brown)',
                        marginTop: '36px',
                        marginBottom: '12px',
                      }}
                    >
                      {section.text}
                    </h3>
                  )
                }
                return (
                  <p
                    key={i}
                    className="leading-relaxed"
                    style={{ color: 'var(--text)', fontSize: '16px', marginBottom: '20px' }}
                  >
                    {section.text}
                  </p>
                )
              })}
            </div>
          </Animate>
        </div>
      </section>

      {/* Back to blog */}
      <section className="px-6 pb-16">
        <div className="max-w-[720px] mx-auto">
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '32px' }}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 transition-colors hover:text-[var(--brown)]"
              style={{
                fontFamily: 'var(--font-work-sans)',
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
              }}
            >
              ← Back to all articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#F0F5F4', padding: '60px 10px 75px' }}>
        <div className="max-w-[700px] mx-auto text-center px-6">
          <Animate>
            <h2 style={{ fontFamily: 'var(--font-baskervville)', fontWeight: 400, fontSize: 'clamp(28px, 4vw, 40px)', color: '#000' }}>
              Ready to Visit Ohana Montessori?
            </h2>
            <p className="mt-5 leading-relaxed" style={{ color: 'var(--text)' }}>
              Located at 2102 N. Tustin Avenue, Santa Ana — serving families from Irvine, Tustin, Orange, and across Orange County.
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
              href="/daycare-preschool-enrollment"
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
              Enroll Now
            </Link>
          </Animate>
        </div>
      </section>
    </>
  )
}
