import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@sanity/client'

const sanity = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

function toSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { title, description, content, secret } = body

    if (!secret || secret !== process.env.API_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    if (!title || !content) {
      return NextResponse.json({ error: 'Missing required fields: title, content' }, { status: 400 })
    }

    const slug = toSlug(title)

    // Create as draft in Sanity (no publishedAt = draft)
    const doc = await sanity.create({
      _type: 'post',
      title,
      slug: { _type: 'slug', current: slug },
      excerpt: description || '',
      body: content,
      // publishedAt intentionally omitted — stays as draft until you publish in Studio
    })

    return NextResponse.json({ success: true, id: doc._id, slug })
  } catch (err) {
    return NextResponse.json({ error: 'Internal server error', details: String(err) }, { status: 500 })
  }
}
