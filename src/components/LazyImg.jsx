import React, { useRef, useEffect, useState } from 'react';
import { Box } from '@mui/material';

/**
 * LazyImg — smooth native lazy-loading image component.
 * Uses IntersectionObserver to start loading only when near viewport,
 * then fades in once loaded. Shows a gold shimmer skeleton while loading.
 */
const LazyImg = ({ src, alt = '', height = 220, sx = {} }) => {
  const ref = useRef(null);
  const [src_, setSrc] = useState('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSrc(src);
          observer.disconnect();
        }
      },
      { rootMargin: '120px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [src]);

  return (
    <Box
      ref={ref}
      className={`img-wrap${loaded ? ' loaded' : ''}`}
      sx={{ height, ...sx }}
    >
      {src_ && (
        <img
          className="lazy-img"
          src={src_}
          alt={alt}
          onLoad={() => setLoaded(true)}
        />
      )}
    </Box>
  );
};

export default LazyImg;
