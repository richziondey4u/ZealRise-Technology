import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const VARIANTS = {
  primary: 'bg-primary text-white hover:bg-primary-light shadow-lg shadow-primary/25',
  secondary: 'glass text-text hover:border-primary-light/50',
  outline: 'border border-border text-text hover:bg-white/5',
}

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  showArrow = false,
  className = '',
  type = 'button',
  target,
  ...rest
}) {
  const baseClasses = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 group ${VARIANTS[variant]} ${className}`

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={baseClasses} {...rest}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      
        <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={baseClasses}
        {...rest}
      >
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses} {...rest}>
      {content}
    </button>
  )
}