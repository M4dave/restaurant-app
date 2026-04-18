import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container, IconButton, Rating } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import testimonials from './testimonials.js';

const AUTOPLAY_INTERVAL = 5000;

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef(null);

  const sorted = [...testimonials].sort((a, b) => b.rating - a.rating);

  const goTo = (idx) => {
    if (animating) return;
    setAnimating(true);
    setCurrent((idx + sorted.length) % sorted.length);
    setTimeout(() => setAnimating(false), 400);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % sorted.length);
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(intervalRef.current);
  }, [sorted.length]);

  const t = sorted[current];

  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', mb: 7 }}>
        <Typography
          sx={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            color: '#c9a84c',
            letterSpacing: '0.25em',
            fontSize: '0.85rem',
            mb: 1.5,
            textTransform: 'uppercase',
          }}
        >
          Guest Stories
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            color: '#f5f0e8',
            fontSize: { xs: '2rem', md: '2.8rem' },
          }}
        >
          What Our Guests Are Saying
        </Typography>
        <Box sx={{ width: 50, height: 1, background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)', mx: 'auto', mt: 2.5 }} />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 4 }, mb: 6 }}>
        <IconButton
          aria-label="Previous testimonial"
          onClick={() => goTo(current - 1)}
          sx={{
            color: '#c9a84c',
            border: '1px solid rgba(201,168,76,0.3)',
            borderRadius: 0,
            flexShrink: 0,
            '&:hover': { bgcolor: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.6)' },
          }}
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>

        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            alignItems: 'center',
            opacity: animating ? 0 : 1,
            transform: animating ? 'translateY(8px)' : 'translateY(0)',
            transition: 'all 0.35s ease',
          }}
        >
          <Box sx={{ flexShrink: 0, textAlign: 'center' }}>
            <Box
              sx={{
                width: { xs: 100, md: 140 },
                height: { xs: 100, md: 140 },
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid rgba(201,168,76,0.4)',
                mx: 'auto',
                mb: 1.5,
                boxShadow: '0 0 30px rgba(201,168,76,0.15)',
              }}
            >
              <Box
                component="img"
                src={t.imageUrl}
                alt={t.name}
                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
            <Typography sx={{ fontFamily: "'Playfair Display', serif", color: '#f5f0e8', fontSize: '1rem', fontWeight: 600 }}>
              {t.name}
            </Typography>
            <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: '#c9a84c', fontSize: '0.8rem' }}>
              {t.date}
            </Typography>
          </Box>

          <Box sx={{ flex: 1 }}>
            <FormatQuoteIcon sx={{ color: 'rgba(201,168,76,0.25)', fontSize: 60, mb: -1, ml: -1 }} />
            <Typography
              sx={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: { xs: '1.2rem', md: '1.55rem' },
                fontStyle: 'italic',
                color: '#f5f0e8',
                lineHeight: 1.6,
                mb: 2.5,
              }}
            >
              {t.testimonial}
            </Typography>
            <Rating
              value={t.rating}
              readOnly
              precision={0.5}
              sx={{
                '& .MuiRating-iconFilled': { color: '#c9a84c' },
                '& .MuiRating-iconEmpty': { color: 'rgba(201,168,76,0.25)' },
              }}
            />
          </Box>
        </Box>

        <IconButton
          aria-label="Next testimonial"
          onClick={() => goTo(current + 1)}
          sx={{
            color: '#c9a84c',
            border: '1px solid rgba(201,168,76,0.3)',
            borderRadius: 0,
            flexShrink: 0,
            '&:hover': { bgcolor: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.6)' },
          }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
        {sorted.map((_, i) => (
          <Box
            key={i}
            onClick={() => goTo(i)}
            sx={{
              width: i === current ? 24 : 6,
              height: 6,
              borderRadius: 3,
              bgcolor: i === current ? '#c9a84c' : 'rgba(201,168,76,0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Testimonials;
