import { useRef, useEffect, useState } from 'react';

/**
 * LazyImg — smooth image loader.
 * - img tag always exists in DOM so the browser can pre-decode
 * - IntersectionObserver sets the src when near viewport
 * - CSS transition fades in on onLoad, no animation conflict
 */
const LazyImg = ({ src, alt = '', height = 220, style = {} }) => {
  const wrapRef = useRef(null);
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    const wrap = wrapRef.current;
    if (!img || !wrap) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!img.src) img.src = src;
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(wrap);
    return () => observer.disconnect();
  }, [src]);

  return (
    <div
      ref={wrapRef}
      style={{
        position: 'relative',
        overflow: 'hidden',
        height,
        background: '#1e1c1a',
        ...style,
      }}
    >
      {/* Shimmer skeleton — always visible until image loads */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, #1e1c1a 0%, #2a2620 40%, #1e1c1a 80%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 1.4s ease-in-out infinite',
          opacity: loaded ? 0 : 1,
          transition: 'opacity 0.4s ease',
          zIndex: 1,
        }}
      />
      {/* Image — always in DOM, src set on intersection */}
      <img
        ref={imgRef}
        alt={alt}
        onLoad={() => setLoaded(true)}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.6s ease',
          position: 'relative',
          zIndex: 2,
        }}
      />
    </div>
  );
};

export default LazyImg;
