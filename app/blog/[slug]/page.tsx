import { Metadata } from 'next'

import { Post } from '@/app/components/post'
import { pmkin } from '@/app/lib/pmkin'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await pmkin.findDocumentBySlug(decodeURIComponent(params.slug))

  if (!post) {
    return { title: 'Post not found' }
  }

  return {
    title: post.title,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: 'https://maxleiter.com',
      siteName: 'PMKIN - Next Blog Example',
      locale: 'en_US',
      type: 'website'
    }
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  return <Post slug={params.slug} />
}
