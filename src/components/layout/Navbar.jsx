import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Anchor = 'a'

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Services', path: '/services' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="container-custom flex items-center justify-between h-16 md:h-20">
        <NavLink
          to="/"
          onClick={() => setIsOpen(false)}
          className="text-lg md:text-xl font-semibold tracking-tight text-text"
        >
          <span className="gradient-text">Dev</span>Folio
        </NavLink>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-text' : 'text-text-muted hover:text-text'
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="relative py-1">
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-0 right-0 -bottom-1 h-[2px] rounded-full bg-primary-light"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Anchor
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-white bg-primary hover:bg-primary-light transition-colors duration-200 shadow-lg shadow-primary/20"
          >
            Resume
          </Anchor>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full glass text-text"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden glass border-t border-border"
          >
            <ul className="flex flex-col gap-1 px-6 py-6">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 text-base font-medium border-b border-white/5 transition-colors ${
                        isActive ? 'text-text' : 'text-text-muted'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05 }}
                className="pt-4"
              >
                <Anchor
                  href="/resume.pdf"
                  download
                  className="inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-medium text-white bg-primary"
                >
                  Download Resume
                </Anchor>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}