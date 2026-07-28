import { client } from './client'

export interface SanityPost {
  _id: string
  title: string
  slug: string
  excerpt: string
  body: string
  publishedAt: string
}

export async function getAllSanityPosts(): Promise<SanityPost[]> {
  return client.fetch(
    `*[_type == "post" && defined(publishedAt)] | order(publishedAt desc) {
      _id, title, "slug": slug.current, excerpt, body, publishedAt
    }`
  )
}

export async function getSanityPostBySlug(slug: string): Promise<SanityPost | null> {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id, title, "slug": slug.current, excerpt, body, publishedAt
    }`,
    { slug }
  )
}
