import { useState, useRef, useEffect } from 'react';
import './ProgressiveImage.css';

/**
 * ProgressiveImage — Loads a tiny blur placeholder first,
 * then fades in the full-size image once loaded.
 */
export default function ProgressiveImage({
  src,
  tinySrc,
  alt,
  className = '',
  style = {},
  ...props
}) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // Reset loaded state when src changes
    setLoaded(false);

    // Check if image is already cached
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, [src]);

  return (
    <div className={`progressive-image ${className}`} style={style}>
      {/* Tiny blur placeholder */}
      {tinySrc && (
        <img
          src={tinySrc}
          alt=""
          aria-hidden="true"
          className="progressive-image__placeholder"
        />
      )}

      {/* Shimmer skeleton when no tiny src */}
      {!tinySrc && !loaded && (
        <div className="progressive-image__skeleton" />
      )}

      {/* Full image */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`progressive-image__full ${loaded ? 'progressive-image__full--loaded' : ''}`}
        onLoad={() => setLoaded(true)}
        loading="lazy"
        decoding="async"
        {...props}
      />
    </div>
  );
}
