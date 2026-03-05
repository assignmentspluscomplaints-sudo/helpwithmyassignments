import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAdminSession } from '@/lib/auth'
import { marked } from 'marked'

export async function POST(req: NextRequest) {
  const session = await getAdminSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json()

  // Convert markdown to HTML for storage
  const contentHtml = body.content ? await marked(body.content) : ''

  const post = await prisma.post.create({
    data: {
      title: body.title,
      slug: body.slug,
      excerpt: body.excerpt || null,
      content: contentHtml,
      published: body.published || false,
      author: body.author || null,
      category: body.category || null,
      tags: body.tags || null,
      readTime: body.readTime || null,
      metaTitle: body.metaTitle || null,
      metaDescription: body.metaDescription || null,
      metaKeywords: body.metaKeywords || null,
      ogTitle: body.ogTitle || null,
      ogDescription: body.ogDescription || null,
    },
  })

  return NextResponse.json(post)
}