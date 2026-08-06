import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function AnimatedCounter({ value, duration = 2, suffix = '', prefix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const end = value
    const totalFrames = Math.round(duration * 60)
    let frame = 0

    const counter = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(end * Math.min(eased, 1))
      setCount(current)

      if (frame >= totalFrames) {
        setCount(end)
        clearInterval(counter)
      }
    }, 1000 / 60)

    return () => clearInterval(counter)
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}