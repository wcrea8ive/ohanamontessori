import { client } from './client'

export interface SanityPost {
  _id: string
  title: string
  slug: string
  excerpt: string
  body: string
  publishedAt: string | null
  _createdAt: string
}

export async function getAllSanityPosts(): Promise<SanityPost[]> {
  return client.fetch(
    `*[_type == "post"] | order(coalesce(publishedAt, _createdAt) desc) {
      _id, title, "slug": slug.current, excerpt, body, publishedAt, _createdAt
    }`
  )
}

export async function getSanityPostBySlug(slug: string): Promise<SanityPost | null> {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id, title, "slug": slug.current, excerpt, body, publishedAt, _createdAt
    }`,
    { slug }
  )
}
