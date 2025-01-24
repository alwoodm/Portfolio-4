export interface Project {
  id: string
  slug: string
  title: string
  description: string
  fullDescription: string
  image: string
  features: string[]
  technologies: string[]
  githubUrl: string
  liveUrl: string
  gallery: string[]
}

export interface PageProps {
  params: {
    slug: string
  }
}

export interface SearchParams {
  [key: string]: string | string[] | undefined
}

export interface ProjectPageProps {
  params: PageProps['params']
  searchParams: SearchParams
} 