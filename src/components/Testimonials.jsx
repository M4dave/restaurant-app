import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Paper, IconButton, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Rating from '@mui/material/Rating';
import testimonials from './testimonials.js';

// Number of testimonials to display per page
const ITEMS_PER_PAGE = 3;
const AUTOPLAY_INTERVAL = 5000; // Autoplay interval in milliseconds

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0); // Initial page is 0
  const [sortOrder, setSortOrder] = useState('dateDesc'); // Default sorting by date descending

  // Handler to go to the next page of testimonials
  const handleNext = () => {
    if ((currentPage + 1) * ITEMS_PER_PAGE < sortedTestimonials.length) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(0); // Reset to first page if at the end
    }
  };

  // Handler to go to the previous page of testimonials
  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handler to change the sorting order
  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
    setCurrentPage(0);
  };

  // Function to sort testimonials based on the selected sortOrder
  const sortTestimonials = (testimonials) => {
    switch (sortOrder) {
      case 'ratingAsc':
        return [...testimonials].sort((a, b) => a.rating - b.rating);
      case 'ratingDesc':
        return [...testimonials].sort((a, b) => b.rating - a.rating);
      case 'nameAsc':
        return [...testimonials].sort((a, b) => a.name.localeCompare(b.name));
      case 'nameDesc':
        return [...testimonials].sort((a, b) => b.name.localeCompare(a.name));
      case 'dateAsc':
        return [...testimonials].sort((a, b) => new Date(a.date) - new Date(b.date));
      case 'dateDesc':
        return [...testimonials].sort((a, b) => new Date(b.date) - new Date(a.date));
      default:
        return testimonials;
    }
  };

  // Calculate the sorted testimonials
  const sortedTestimonials = sortTestimonials(testimonials);

  // Calculate the range of testimonials to display based on currentPage
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentTestimonials = sortedTestimonials.slice(startIndex, endIndex);

  // Autoplay functionality
  useEffect(() => {
    const intervalId = setInterval(handleNext, AUTOPLAY_INTERVAL);
    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [currentPage]); // Run effect on currentPage change

  return (
    <Box sx={{ flexGrow: 1, py: 8 }}>
      {/* Title of the testimonials section */}
      <Typography variant="h4" component="h2" gutterBottom align="center">
        What Our Guests Are Saying
      </Typography>

      {/* Sorting controls */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <FormControl variant="outlined" sx={{ minWidth: 120 }}>
          <InputLabel>Sort By</InputLabel>
          <Select
            value={sortOrder}
            onChange={handleSortChange}
            label="Sort By"
          >
            <MenuItem value="ratingAsc">Rating: Low to High</MenuItem>
            <MenuItem value="ratingDesc">Rating: High to Low</MenuItem>
            <MenuItem value="nameAsc">Name: A to Z</MenuItem>
            <MenuItem value="nameDesc">Name: Z to A</MenuItem>
            <MenuItem value="dateAsc">Date: Old to New</MenuItem>
            <MenuItem value="dateDesc">Date: New to Old</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Testimonials grid display */}
      <Grid container spacing={4}>
        {currentTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={3} sx={{ padding: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
              {/* Testimonial image */}
              <Box
                sx={{
                  height: 140,
                  width: '100%',
                  backgroundImage: `url(${testimonial.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: 1,
                  mb: 2,
                }}
              />
              
              {/* Testimonial content */}
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div" sx={{ mb: 1 }}>
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {testimonial.testimonial}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {/* Testimonial rating */}
                  <Rating
                    name="read-only"
                    value={testimonial.rating}
                    readOnly
                    precision={0.5}
                    size="small"
                    sx={{ mr: 1 }}
                  />
                  <Typography variant="body2" color="text.primary">
                    {testimonial.rating} / 5
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
      
      {/* Pagination controls */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
        <IconButton onClick={handlePrevious} disabled={currentPage === 0}>
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton onClick={handleNext} disabled={(currentPage + 1) * ITEMS_PER_PAGE >= sortedTestimonials.length}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Testimonials;
