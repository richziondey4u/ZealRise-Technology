export function SkeletonBlock({ className = '' }) {
  return (
    <div
      className={`animate-pulse rounded-lg bg-white/5 ${className}`}
      aria-hidden="true"
    />
  )
}

export function ProjectCardSkeleton() {
  return (
    <div className="glass rounded-2xl overflow-hidden">
      <SkeletonBlock className="aspect-video w-full rounded-none" />
      <div className="p-6 space-y-3">
        <SkeletonBlock className="h-5 w-2/3" />
        <SkeletonBlock className="h-4 w-full" />
        <SkeletonBlock className="h-4 w-5/6" />
        <div className="flex gap-2 pt-2">
          <SkeletonBlock className="h-6 w-16" />
          <SkeletonBlock className="h-6 w-16" />
          <SkeletonBlock className="h-6 w-16" />
        </div>
      </div>
    </div>
  )
}

export function ProjectGridSkeleton({ count = 6 }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <ProjectCardSkeleton key={i} />
      ))}
    </div>
  )
}