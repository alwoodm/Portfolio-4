'use client'

import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import SkillsSection from './components/SkillsSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
} 