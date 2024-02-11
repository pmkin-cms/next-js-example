import Link from 'next/link'
import type { ReactElement } from 'react'

import { listPosts } from '../lib/posts'

export default async function ListPosts(): Promise<ReactElement> {
  const posts = await listPosts()

  return (
    <div className="w-full max-w-3xl mx-auto p-4 md:p-8 box-border space-y-6 text-gray-700">
      {posts.map((post) => (
        <Link
          className="block border-b border-l-slate-200 pb-4"
          key={post.slug}
          href={`/blog/${post.slug}`}
        >
          <h2 className="text-lg font-medium">{post.title}</h2>
          <p className="text-gray-600">{post.subtitle}</p>
        </Link>
      ))}
    </div>
  )
}
