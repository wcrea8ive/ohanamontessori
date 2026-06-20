import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Animate } from '@/components/Animate'
import { BLOG_POSTS, getPost, type InlineLink } from '@/lib/blogPosts'

function renderText(text: string, links?: InlineLink[]) {
  if (!links?.length) return <>{text}</>

  type Part = string | InlineLink
  let parts: Part[] = [text]

  for (const link of links) {
    const next: Part[] = []
    for (const part of parts) {
      if (typeof part !== 'string') { next.push(part); continue }
      const idx = part.indexOf(link.text)
      if (idx === -1) { next.push(part); continue }
      if (idx > 0) next.push(part.slice(0, idx))
      next.push(link)
      const after = part.slice(idx + link.text.length)
      if (after) next.push(after)
    }
    parts = next
  }

  return (
    <>
      {parts.map((part, i) =>
        typeof part === 'string' ? (
          <span key={i}>{part}</span>
        ) : (
          <Link
            key={i}
            href={part.href}
            style={{ color: '#663D22', textDecoration: 'underline', textUnderlineOffset: '3px' }}
          >
            {part.text}
          </Link>
        )
      )}
    </>
  )
}

export function generateStaticParams() {
  return BLOG_POSTS.map(post => ({ slug: post.slug }))
}

const SITE_NAME = 'Preschool & Daycare in Santa Ana, Tustin, Irvine | Ohana Montessori'
const OG_IMAGE = 'https://ohanamontessori.com/og-image.webp'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: `${post.title} - ${SITE_NAME}`,
    description: post.excerpt,
    alternates: { canonical: `https://ohanamontessori.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      siteName: SITE_NAME,
      images: [{ url: OG_IMAGE }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [OG_IMAGE],
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
      {/* Article — white background, 970px max-width, matches live site single post layout */}
      <div style={{ background: '#fff', minHeight: '60vh' }}>
        <div
          className="mx-auto px-[20px] py-[60px] md:py-[80px]"
          style={{ maxWidth: '970px' }}
        >
          <Animate>
            {/* Back link */}
            <Link
              href="/blog"
              style={{
                display: 'inline-block',
                marginBottom: '30px',
                fontFamily: 'var(--font-work-sans)',
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
              }}
              className="transition-colors hover:text-[var(--brown)]"
            >
              ← All articles
            </Link>

            {/* Date */}
            <time
              dateTime={post.date}
              style={{
                display: 'block',
                fontFamily: 'var(--font-work-sans)',
                fontSize: '13px',
                color: '#adadad',
                marginBottom: '18px',
              }}
            >
              {formatDate(post.date)}
            </time>

            {/* Title — h1, Baskervville, matches live site */}
            <h1
              style={{
                fontFamily: 'var(--font-baskervville)',
                fontWeight: 400,
                fontSize: 'clamp(28px, 4vw, 42px)',
                lineHeight: 1.2,
                color: '#000',
                margin: '0 0 30px 0',
              }}
            >
              {post.title}
            </h1>

            {/* Divider */}
            <hr style={{ border: 'none', borderTop: '1px solid #e8e8e8', marginBottom: '40px' }} />
          </Animate>

          {/* Body */}
          <Animate>
            {post.body.map((section, i) => {
              if (section.type === 'h2') {
                return (
                  <h2
                    key={i}
                    style={{
                      fontFamily: 'var(--font-baskervville)',
                      fontWeight: 400,
                      fontSize: '24px',
                      lineHeight: 1.3,
                      color: '#000',
                      margin: '40px 0 15px 0',
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
                      fontSize: '20px',
                      lineHeight: 1.3,
                      color: '#000',
                      margin: '30px 0 12px 0',
                    }}
                  >
                    {section.text}
                  </h3>
                )
              }
              return (
                <p
                  key={i}
                  style={{
                    fontFamily: 'var(--font-work-sans)',
                    fontSize: '17px',
                    lineHeight: '1.6em',
                    color: '#000',
                    margin: '0 0 20px 0',
                  }}
                >
                  {renderText(section.text, section.links)}
                </p>
              )
            })}
          </Animate>

          {/* Back link bottom */}
          <div style={{ borderTop: '1px solid #e8e8e8', marginTop: '60px', paddingTop: '30px' }}>
            <Link
              href="/blog"
              style={{
                fontFamily: 'var(--font-work-sans)',
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
              }}
              className="transition-colors hover:text-[var(--brown)]"
            >
              ← Back to all articles
            </Link>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section style={{ background: '#F0F5F4', padding: '60px 10px 75px' }}>
        <div className="max-w-[700px] mx-auto text-center px-6">
          <Animate>
            <h2 style={{ fontFamily: 'var(--font-baskervville)', fontWeight: 400, fontSize: 'clamp(28px, 4vw, 40px)', color: '#000' }}>
              Ready to Visit Ohana Montessori?
            </h2>
            <p
              className="mt-5 leading-relaxed"
              style={{ fontFamily: 'var(--font-work-sans)', fontSize: '17px', color: 'var(--text)' }}
            >
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
