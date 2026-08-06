import { useState } from 'react'
import { SkeletonBlock } from './Skeleton.jsx'

export default function LazyImage({
  src,
  alt,
  className = '',
  wrapperClassName = '',
  aspectRatio = 'aspect-video',
}) {
  const [loaded, setLoaded] = useState(false)
  const [errored, setErrored] = useState(false)

  return (
    <div className={`relative overflow-hidden ${aspectRatio} ${wrapperClassName}`}>
      {!loaded && !errored && (
        <SkeletonBlock className="absolute inset-0 rounded-none" />
      )}
      {!errored ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-surface-light text-text-muted text-xs">
          Image unavailable
        </div>
      )}
    </div>
  )
}