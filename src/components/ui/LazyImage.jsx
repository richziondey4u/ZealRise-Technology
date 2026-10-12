import { useState } from "react";
import { SkeletonBlock } from "./Skeleton.jsx";

export default function LazyImage({
  src,
  alt = "",
  className = "",
  wrapperClassName = "",
  aspectRatio = "aspect-video",
  objectFit = "cover", // "cover" | "contain" | "fill" | "none" | "scale-down"
  objectPosition = "center", // "center" | "top" | "bottom" | "left" | "right" | "top left" | etc.
  eager = false, // set true for above-the-fold images (e.g., hero)
}) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div
      className={`
        relative overflow-hidden
        ${aspectRatio}
        ${wrapperClassName}
      `}
    >
      {/* ---------- Loading skeleton ---------- */}
      {!loaded && !errored && (
        <SkeletonBlock className="absolute inset-0 rounded-none" />
      )}

      {/* ---------- Image or fallback ---------- */}
      {!errored ? (
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={eager ? "high" : "auto"}
          draggable={false}
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className={`
            absolute inset-0
            w-full h-full
            object-${objectFit}
            object-${objectPosition}
            select-none
            transition-opacity duration-500 ease-out
            ${loaded ? "opacity-100" : "opacity-0"}
            ${className}
          `}
        />
      ) : (
        <div
          className="
            absolute inset-0
            flex items-center justify-center
            bg-ink-900/5 dark:bg-white/5
            text-ink-700/50 dark:text-cream-50/50
            text-xs
            px-4 text-center
          "
        >
          Image unavailable
        </div>
      )}
    </div>
  );
}
