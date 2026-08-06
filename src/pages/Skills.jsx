import SEO from '../components/SEO.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import SkillCategories from '../components/skills/SkillCategories.jsx'
import TechMarquee from '../components/skills/TechMarquee.jsx'

export default function Skills() {
  return (
    <>
      <SEO
        title="Skills"
        description="An overview of the languages, frameworks, and tools I use to build modern web applications."
        path="/skills"
      />
      <div className="container-custom pt-16 pb-4 md:pt-24">
        <SectionHeading
          eyebrow="My Toolkit"
          title="Skills & Technologies"
          description="A snapshot of the languages, frameworks, and tools I use to bring products to life."
        />
      </div>
      <TechMarquee />
      <SkillCategories />
    </>
  )
}