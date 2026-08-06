import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

export default function NotFound() {
  return (
    <section className="container-custom min-h-[70vh] flex flex-col items-center justify-center text-center">
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist or has been moved."
        path="/404"
      />
      <p className="text-8xl font-bold gradient-text mb-4">404</p>
      <h1 className="text-2xl font-semibold mb-3">Page not found</h1>
      <p className="text-text-muted mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white bg-primary hover:bg-primary-light transition-colors duration-200"
      >
        Back to Home
      </Link>
    </section>
  )
}