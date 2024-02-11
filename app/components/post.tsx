import { marked } from 'marked'
import type { ReactElement } from 'react'

import { findPost } from '../lib/posts'

import '../markdown.css'

interface PostProps {
  slug: string
}

export async function Post({ slug }: PostProps): Promise<ReactElement> {
  const post = await findPost(slug)

  const html = marked.parse(post.markdown)

  return (
    <div className="w-full max-w-3xl mx-auto p-4 md:p-8 box-border space-y-6 text-gray-700">
      <h1 className="text-xl font-semibold text-black">{post.title}</h1>

      <div
        className="markdown"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
