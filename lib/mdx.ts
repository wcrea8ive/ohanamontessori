import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export interface MdxPost {
  slug: string
  title: string
  date: string
  description: string
  keywords?: string
  content: string
}

export function getAllMdxPosts(): MdxPost[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter(f => f.endsWith('.mdx'))
    .map(file => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8')
      const { data, content } = matter(raw)
      return {
        slug: (data.slug as string) || file.replace('.mdx', ''),
        title: data.title as string,
        date: data.date as string,
        description: data.description as string,
        keywords: data.keywords as string | undefined,
        content,
      }
    })
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function getMdxPostBySlug(slug: string): MdxPost | undefined {
  return getAllMdxPosts().find(p => p.slug === slug)
}
