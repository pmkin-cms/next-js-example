import Link from 'next/link'
import type { ReactElement } from 'react'

import { pmkin } from '../lib/pmkin'

export default async function ListPosts(): Promise<ReactElement> {
  const posts = await pmkin.listDocuments()

  return (
    <div className="w-full mx-auto p-4 md:p-8 box-border space-y-6 prose lg:prose-xl">
      {posts.map((post) => (
        <Link
          className="block border-b border-l-slate-200 pb-4"
          key={post.slug}
          href={`/blog/${post.slug}`}
        >
          <div>{post.title}</div>

          {post.subtitle && <p className="text-gray-600">{post.subtitle}</p>}
        </Link>
      ))}
    </div>
  )
}
