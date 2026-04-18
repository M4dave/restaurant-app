import { Box, Typography, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import restaurantImage from '../components/img/restaurant.jpg';

const HomeHeader = () => (
  <Box
    sx={{
      position: 'relative',
      overflow: 'hidden',
      color: '#fff',
      textAlign: 'center',
      height: '100vh',
      minHeight: 600,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {/* Animated background */}
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${restaurantImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        animation: 'zoomInOut 14s ease-in-out infinite',
        zIndex: 0,
      }}
    />
    {/* Dark overlay with gradient */}
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(17,16,16,0.3) 0%, rgba(17,16,16,0.65) 60%, rgba(17,16,16,0.95) 100%)',
        zIndex: 1,
      }}
    />
    {/* Grain texture overlay */}
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.04\'/%3E%3C/svg%3E")',
        zIndex: 2,
        opacity: 0.5,
        pointerEvents: 'none',
      }}
    />

    <Container sx={{ position: 'relative', zIndex: 3 }}>
      {/* Eyebrow */}
      <Typography
        className="animate-in animate-delay-1"
        sx={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: { xs: '1rem', md: '1.2rem' },
          color: '#c9a84c',
          letterSpacing: '0.3em',
          mb: 2,
          display: 'block',
        }}
      >
        Est. 2018 · Washington, D.C.
      </Typography>

      {/* Main heading */}
      <Typography
        className="animate-in animate-delay-2"
        variant="h1"
        sx={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: { xs: '3rem', sm: '4.5rem', md: '6rem' },
          lineHeight: 1.05,
          color: '#f5f0e8',
          letterSpacing: '-0.01em',
          mb: 1,
        }}
      >
        An Italian
        <Box component="em" sx={{ display: 'block', color: '#c9a84c', fontStyle: 'italic' }}>
          Experience
        </Box>
      </Typography>

      {/* Gold divider */}
      <Box
        className="animate-in animate-delay-3"
        sx={{
          width: '60px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)',
          mx: 'auto',
          my: 3,
        }}
      />

      {/* Subtitle */}
      <Typography
        className="animate-in animate-delay-3"
        sx={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: { xs: '1.1rem', md: '1.35rem' },
          color: 'rgba(245,240,232,0.8)',
          letterSpacing: '0.05em',
          mb: 5,
          maxWidth: 480,
          mx: 'auto',
        }}
      >
        Fresh ingredients, timeless recipes, and a warm welcome — every single evening.
      </Typography>

      {/* CTAs */}
      <Box className="animate-in animate-delay-4" sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/menu"
          size="large"
          sx={{ minWidth: 160 }}
        >
          View Menu
        </Button>
        <Button
          variant="outlined"
          color="primary"
          component={Link}
          to="/reservation"
          size="large"
          sx={{ minWidth: 160 }}
        >
          Reserve a Table
        </Button>
      </Box>
    </Container>

    {/* Scroll indicator */}
    <Box
      sx={{
        position: 'absolute',
        bottom: 32,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1,
        opacity: 0.6,
      }}
    >
      <Typography sx={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: '#c9a84c', textTransform: 'uppercase' }}>
        Scroll
      </Typography>
      <Box
        sx={{
          width: 1,
          height: 48,
          background: 'linear-gradient(to bottom, #c9a84c, transparent)',
          animation: 'fadeIn 2s ease infinite alternate',
        }}
      />
    </Box>
  </Box>
);

export default HomeHeader;
