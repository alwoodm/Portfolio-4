import { Project } from '../types'

export const projects: Project[] = [
  {
    id: '1',
    slug: 'example-project',
    title: 'Example Project',
    description: 'Przykładowy opis projektu',
    fullDescription: 'Pełny opis projektu...',
    image: '/images/project1.jpg',
    features: ['Feature 1', 'Feature 2'],
    technologies: ['React', 'Next.js'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    gallery: ['/images/project1.jpg', '/images/project2.jpg']
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug)
} 