import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { title, slug, description, content, date, secret } = body

    if (!secret || secret !== process.env.API_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    if (!title || !slug || !content) {
      return NextResponse.json({ error: 'Missing required fields: title, slug, content' }, { status: 400 })
    }

    const postDate = date || new Date().toISOString().split('T')[0]

    const mdxContent = `---
title: "${title.replace(/"/g, '\\"')}"
date: "${postDate}"
description: "${(description || '').replace(/"/g, '\\"')}"
slug: "${slug}"
keywords: "montessori, preschool, daycare, santa ana, orange county"
---

${content}
`

    const encoded = Buffer.from(mdxContent).toString('base64')
    const filePath = `content/blog/${slug}.mdx`
    const repo = process.env.GITHUB_REPO
    const branch = process.env.GITHUB_BRANCH || 'main'
    const token = process.env.GITHUB_TOKEN

    if (!repo || !token) {
      return NextResponse.json({ error: 'GitHub env vars not configured' }, { status: 500 })
    }

    // Check if file exists to get SHA (needed for updates)
    let sha: string | undefined
    const checkRes = await fetch(
      `https://api.github.com/repos/${repo}/contents/${filePath}?ref=${branch}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28',
        },
      }
    )
    if (checkRes.ok) {
      const existing = await checkRes.json() as { sha: string }
      sha = existing.sha
    }

    const putRes = await fetch(
      `https://api.github.com/repos/${repo}/contents/${filePath}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `blog: add ${slug}`,
          content: encoded,
          branch,
          ...(sha ? { sha } : {}),
        }),
      }
    )

    if (!putRes.ok) {
      const err = await putRes.text()
      return NextResponse.json({ error: 'GitHub API error', details: err }, { status: 500 })
    }

    return NextResponse.json({ success: true, slug, path: filePath })
  } catch (err) {
    return NextResponse.json({ error: 'Internal server error', details: String(err) }, { status: 500 })
  }
}
