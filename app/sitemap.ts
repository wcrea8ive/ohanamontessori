import { MetadataRoute } from 'next'
import { BLOG_POSTS } from '@/lib/blogPosts'

const BASE = 'https://ohanamontessori.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map(post => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const routes: { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { url: '/',                                                                  priority: 1.0,  changeFrequency: 'weekly' },
    { url: '/daycare-santaana-tustin-irvine',                                    priority: 0.9,  changeFrequency: 'monthly' },
    { url: '/daycare-toddler-preschool-programs-santa-ana-tustin-irvine',        priority: 0.9,  changeFrequency: 'monthly' },
    { url: '/daycare-infant-program-santa-ana-tustin-irvine',                    priority: 0.9,  changeFrequency: 'monthly' },
    { url: '/toddler-program-santa-ana-tustin-irvine',                           priority: 0.9,  changeFrequency: 'monthly' },
    { url: '/preschool-program-santa-ana-tustin-irvine',                         priority: 0.9,  changeFrequency: 'monthly' },
    { url: '/schedule-a-tour-santa-ana-daycare-preschool',                       priority: 0.85, changeFrequency: 'monthly' },
    { url: '/daycare-preschool-enrollment',                                      priority: 0.85, changeFrequency: 'monthly' },
    { url: '/preschool-daycare-tuition-and-school-hours',                        priority: 0.8,  changeFrequency: 'monthly' },
    { url: '/our-facility',                                                      priority: 0.8,  changeFrequency: 'monthly' },
    { url: '/prechool-santa-ana-irvine-tustin-our-philosophy',                   priority: 0.75, changeFrequency: 'monthly' },
    { url: '/daily-experience',                                                  priority: 0.75, changeFrequency: 'monthly' },
    { url: '/welcome-to-montessori-preschool-childcare-santa-ana',               priority: 0.7,  changeFrequency: 'monthly' },
    { url: '/safety-and-care',                                                   priority: 0.7,  changeFrequency: 'monthly' },
    { url: '/school-calendar-and-hours',                                         priority: 0.7,  changeFrequency: 'monthly' },
    { url: '/request-information-daycare-santa-ana',                        priority: 0.7,  changeFrequency: 'monthly' },
    { url: '/request-information-daycare-santa-ana',                             priority: 0.7,  changeFrequency: 'monthly' },
    { url: '/daycare-santa-ana-faqs',                                            priority: 0.65, changeFrequency: 'monthly' },
    { url: '/join-our-mailing-list-daycare-santa-ana',                           priority: 0.6,  changeFrequency: 'monthly' },
    { url: '/career-opportunities',                                              priority: 0.6,  changeFrequency: 'monthly' },
    { url: '/blog',                                                               priority: 0.75, changeFrequency: 'weekly' },
  ]

  const staticRoutes = routes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))

  return [...staticRoutes, ...blogRoutes]
}
