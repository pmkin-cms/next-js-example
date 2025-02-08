import { marked } from 'marked'
import type { ReactElement } from 'react'

import { pmkin } from '../lib/pmkin'

import '../markdown.css'

interface PostProps {
  slug: string
}

export async function Post({ slug }: PostProps): Promise<ReactElement> {
  const post = await pmkin.findDocumentBySlug(decodeURIComponent(slug))

  if (!post) {
    return <div>Post not found</div>
  }

  const html = marked.parse(post.markdown)

  return (
    <div className="w-full mx-auto p-4 md:p-8 box-border space-y-6 prose lg:prose-xl">
      <h1 className="text-xl font-semibold text-black">{post.title}</h1>

      <div
        className="markdown"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
