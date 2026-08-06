import { Component } from 'react'
import ErrorState from './ui/ErrorState.jsx'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught an error:', error, info)
  }

  handleRetry = () => {
    this.setState({ hasError: false })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container-custom min-h-[70vh] flex items-center justify-center">
          <ErrorState
            title="Something broke on our end"
            description="Try reloading the page. If the problem continues, please reach out via the contact page."
            onRetry={this.handleRetry}
          />
        </div>
      )
    }

    return this.props.children
  }
}