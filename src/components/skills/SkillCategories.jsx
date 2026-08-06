import { Code2, Server, Database, Wrench } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal.jsx'
import SkillBar from './SkillBar.jsx'

const CATEGORIES = [
  {
    icon: Code2,
    title: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'JavaScript / TypeScript', level: 92 },
      { name: 'Tailwind CSS', level: 94 },
      { name: 'Framer Motion', level: 88 },
    ],
  },
  {
    icon: Server,
    title: 'Backend',
    skills: [
      { name: 'Node.js / Express', level: 90 },
      { name: 'REST & GraphQL APIs', level: 87 },
      { name: 'Authentication & Security', level: 85 },
      { name: 'Microservices', level: 78 },
    ],
  },
  {
    icon: Database,
    title: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 85 },
      { name: 'Redis', level: 75 },
      { name: 'Prisma / ORMs', level: 86 },
    ],
  },
  {
    icon: Wrench,
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git / GitHub', level: 95 },
      { name: 'Docker', level: 80 },
      { name: 'CI/CD Pipelines', level: 78 },
      { name: 'AWS / Vercel', level: 82 },
    ],
  },
]

export default function SkillCategories() {
  return (
    <section className="container-custom pb-20 md:pb-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {CATEGORIES.map((category, i) => (
          <ScrollReveal key={category.title} delay={i * 0.1}>
            <div className="glass rounded-2xl p-6 md:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary-light">
                  <category.icon size={18} />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              {category.skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}