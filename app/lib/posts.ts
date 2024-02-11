import { GraphQLClient, gql } from 'graphql-request'

if (!process.env.PMKIN_API_KEY) {
  throw new Error(
    `PMKIN_API_KEY is not defined. Make sure that it is defined in your .env file.`
  )
}

const pmkinClient = new GraphQLClient(
  'https://pmkin-delivery.onrender.com/graphql',
  {
    headers: {
      Authorization: `Bearer ${process.env.PMKIN_API_KEY}`
    }
  }
)

interface DocumentsResponse {
  documents: {
    slug: string
    subtitle: string
    title: string
  }[]
}

export async function listPosts() {
  const query = gql`
    query {
      documents {
        slug
        subtitle
        title
      }
    }
  `
  const response = await pmkinClient.request<DocumentsResponse>(query)

  return response.documents
}

interface DocumentResponse {
  documentBySlug: {
    markdown: string
    metaDescription: string
    metaTitle: string
    slug: string
    subtitle: string
    title: string
  }
}

export async function findPost(slug: string) {
  const query = gql`
    query getDocument($slug: String!) {
      documentBySlug(slug: $slug) {
        markdown
        metaDescription
        metaTitle
        slug
        subtitle
        title
      }
    }
  `
  const response = await pmkinClient.request<DocumentResponse>(query, {
    slug
  })

  return response.documentBySlug
}
