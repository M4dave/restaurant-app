import React, { useState } from 'react';
import { Grid, Box, Typography, Container, TextField, InputAdornment, Chip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CheckIcon from '@mui/icons-material/Check';
import menuItems from './menuItems.js';
import LazyLoad from 'react-lazyload';

const categories = ["All", ...new Set(menuItems.map(i => i.category))];

const MenuCard = ({ item, onAdd }) => {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    onAdd();
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        border: '1px solid rgba(201,168,76,0.12)',
        overflow: 'hidden',
        transition: 'all 0.35s ease',
        bgcolor: '#1a1a1a',
        '&:hover': {
          border: '1px solid rgba(201,168,76,0.4)',
          transform: 'translateY(-4px)',
          boxShadow: '0 16px 40px rgba(0,0,0,0.5)',
          '& .menu-img': { transform: 'scale(1.05)' },
        },
      }}
    >
      <LazyLoad height={220} offset={100}>
        <Box sx={{ height: 220, overflow: 'hidden', position: 'relative' }}>
          <Box
            className="menu-img"
            sx={{
              height: '100%',
              width: '100%',
              backgroundImage: `url(${item.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'transform 0.5s ease',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              bgcolor: 'rgba(17,16,16,0.75)',
              border: '1px solid rgba(201,168,76,0.4)',
              px: 1.5,
              py: 0.4,
            }}
          >
            <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", color: '#c9a84c', fontSize: '0.8rem', letterSpacing: '0.05em' }}>
              {item.category}
            </Typography>
          </Box>
        </Box>
      </LazyLoad>

      <Box sx={{ p: 2.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography
          sx={{ fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', fontWeight: 600, color: '#f5f0e8', mb: 0.75 }}
        >
          {item.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: 'rgba(245,240,232,0.6)', lineHeight: 1.7, fontWeight: 300, flexGrow: 1, mb: 2 }}
        >
          {item.description}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography
            sx={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.4rem',
              fontWeight: 500,
              color: '#c9a84c',
            }}
          >
            {item.price}
          </Typography>
          <Box
            component="button"
            onClick={handleAdd}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.75,
              background: added
                ? 'linear-gradient(135deg, #3a7a3a, #2d5f2d)'
                : 'linear-gradient(135deg, #c9a84c, #a07830)',
              color: added ? '#f5f0e8' : '#111010',
              border: 'none',
              cursor: 'pointer',
              px: 2,
              py: 1,
              fontSize: '0.7rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontFamily: "'Jost', sans-serif",
              fontWeight: 500,
              transition: 'all 0.3s ease',
              '&:hover': {
                background: added
                  ? 'linear-gradient(135deg, #3a7a3a, #2d5f2d)'
                  : 'linear-gradient(135deg, #e2c97e, #c9a84c)',
              },
            }}
          >
            {added ? <CheckIcon sx={{ fontSize: 14 }} /> : <AddShoppingCartIcon sx={{ fontSize: 14 }} />}
            {added ? 'Added' : 'Order'}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const Menu = ({ setCartCount }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const handleAdd = () => setCartCount(c => c + 1);

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Box sx={{ bgcolor: '#111010', minHeight: '100vh', pt: 4, pb: 10 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', py: { xs: 6, md: 8 }, mb: 2 }}>
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
            À La Carte
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              color: '#f5f0e8',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              mb: 2,
            }}
          >
            Our Menu
          </Typography>
          <Box sx={{ width: 50, height: 1, background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)', mx: 'auto' }} />
        </Box>

        {/* Filters */}
        <Box sx={{ mb: 5 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search for a dish..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'rgba(201,168,76,0.5)' }} />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 3 }}
          />
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
            {categories.map((cat) => (
              <Chip
                key={cat}
                label={cat}
                onClick={() => setActiveCategory(cat)}
                sx={{
                  borderRadius: 0,
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  border: '1px solid',
                  borderColor: activeCategory === cat ? '#c9a84c' : 'rgba(201,168,76,0.25)',
                  bgcolor: activeCategory === cat ? 'rgba(201,168,76,0.15)' : 'transparent',
                  color: activeCategory === cat ? '#c9a84c' : 'rgba(245,240,232,0.6)',
                  '&:hover': { bgcolor: 'rgba(201,168,76,0.1)', borderColor: 'rgba(201,168,76,0.5)' },
                  transition: 'all 0.25s ease',
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Items grid */}
        <Grid container spacing={3}>
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <MenuCard item={item} onAdd={handleAdd} />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Box sx={{ textAlign: 'center', py: 8 }}>
                <Typography sx={{ color: 'rgba(245,240,232,0.4)', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '1.2rem' }}>
                  No dishes found matching your search.
                </Typography>
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Menu;
