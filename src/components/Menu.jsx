import React, { useState } from 'react'; // Import React and useState hook for state management
import { Grid, Box, Typography, Paper, Button, TextField } from '@mui/material'; // Import Material-UI components
import menuItems from './menuItems.js'; // Import menu items data
import LazyLoad from 'react-lazyload'; // Import LazyLoad component for lazy loading images

const Menu = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State to manage the search query

  // Filter menu items based on the search query
  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ flexGrow: 1, mt: 4 }}>
      {/* Main container for the Menu section */}
      <Typography variant="h4" component="h2" gutterBottom>
        Menu
      </Typography>
      {/* Main title for the menu section */}
      
      <Box sx={{ mb: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search for a dish..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query on change
          sx={{ mb: 2 }} // Margin bottom for spacing
        />
      </Box>
      {/* Search bar for filtering menu items */}
      
      <Grid container spacing={3}>
        {/* Grid container for menu items */}
        {filteredItems.length > 0 ? (
          // Check if there are filtered items
          filteredItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              {/* Grid item for each menu item */}
              <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', height: '100%', padding: 2 }}>
                {/* Paper component to display menu item details */}
                <LazyLoad height={200} offset={100}>
                  {/* LazyLoad component to optimize image loading */}
                  <Box
                    sx={{
                      height: 200,
                      width: '100%',
                      backgroundImage: `url(${item.imageUrl})`, // Background image from menu item data
                      backgroundSize: 'cover', // Cover the entire container
                      backgroundPosition: 'center', // Center the image
                      borderRadius: 1, // Border radius for rounded corners
                      mb: 2, // Margin bottom for spacing
                    }}
                  />
                </LazyLoad>
                <Box sx={{ flexGrow: 1 }}>
                  {/* Container for text content */}
                  <Typography variant="h6" component="div" sx={{ mb: 1 }}>
                    {item.name}
                  </Typography>
                  {/* Item name */}
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {item.description}
                  </Typography>
                  {/* Item description */}
                  <Typography variant="h6" component="div">
                    {item.price}
                  </Typography>
                  {/* Item price */}
                </Box>
                <Box sx={{ textAlign: 'center', mt: 2 }}>
                  {/* Container for the order button */}
                  <Button size="small" variant="contained" color="primary">
                    Order
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))
        ) : (
          // Display message if no items match the search query
          <Grid item xs={12}>
            <Typography variant="h6" color="text.secondary">
              No items found.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Menu;
