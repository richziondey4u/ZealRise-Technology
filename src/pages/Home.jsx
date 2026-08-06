import SEO from '../components/SEO.jsx'
import Hero from '../components/home/Hero.jsx'
import Stats from '../components/home/Stats.jsx'

export default function Home() {
  return (
    <>
      <SEO
        title="Full Stack Engineer"
        description="I build fast, accessible, and visually refined web applications from concept to deployment."
        path="/"
      />
      <Hero />
      <Stats />
    </>
  )
}