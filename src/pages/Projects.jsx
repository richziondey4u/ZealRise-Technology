import { useMemo, useState } from 'react'
import SEO from '../components/SEO.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import ProjectFilter from '../components/projects/ProjectFilter.jsx'
import ProjectGrid from '../components/projects/ProjectGrid.jsx'
import { PROJECT_CATEGORIES, PROJECTS } from '../data/projects.js'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS
    return PROJECTS.filter((project) => project.category === activeCategory)
  }, [activeCategory])

  return (
    <section className="container-custom pt-16 pb-24 md:pt-24 md:pb-32">
      <SEO
        title="Projects"
        description="A collection of products I've designed, engineered, and shipped end to end."
        path="/projects"
      />
      <SectionHeading
        eyebrow="My Work"
        title="Selected Projects"
        description="A collection of products I've designed, engineered, and shipped end to end."
      />

      <ProjectFilter
        categories={PROJECT_CATEGORIES}
        active={activeCategory}
        onChange={setActiveCategory}
      />

      <ProjectGrid projects={filteredProjects} />
    </section>
  )
}