import SEO from '../components/SEO.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import TimelineItem from '../components/experience/TimelineItem.jsx'
import EducationCard from '../components/experience/EducationCard.jsx'
import { EXPERIENCE, EDUCATION } from '../data/experience.js'

export default function Experience() {
  return (
    <section className="container-custom pt-16 pb-24 md:pt-24 md:pb-32">
      <SEO
        title="Experience"
        description="A timeline of the roles and companies that shaped my engineering career."
        path="/experience"
      />
      <SectionHeading
        eyebrow="Career Path"
        title="Work Experience"
        description="A timeline of the roles and companies that shaped my engineering career."
      />

      <div className="max-w-3xl mx-auto">
        {EXPERIENCE.map((item, i) => (
          <TimelineItem
            key={item.id}
            item={item}
            index={i}
            isLast={i === EXPERIENCE.length - 1}
          />
        ))}
      </div>

      <div className="max-w-3xl mx-auto mt-16">
        <h3 className="text-xl font-semibold mb-6">Education</h3>
        <div className="space-y-4">
          {EDUCATION.map((item) => (
            <EducationCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}