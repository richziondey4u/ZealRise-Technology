import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    const isTouchDevice = window.matchMedia('(hover: none)').matches

    if (prefersReducedMotion || isTouchDevice) return

    let frame = null

    const handleMove = (e) => {
      if (frame) cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        if (glowRef.current) {
          glowRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
        }
      })
    }

    window.addEventListener('mousemove', handleMove)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-0 hidden md:block"
      style={{
        width: '380px',
        height: '380px',
        marginLeft: '-190px',
        marginTop: '-190px',
        borderRadius: '9999px',
        background:
          'radial-gradient(circle, rgba(99,102,241,0.10) 0%, rgba(99,102,241,0) 70%)',
        willChange: 'transform',
      }}
    />
  )
}