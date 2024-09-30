// import React from 'react';
import HomeHeader from "./HomeHeader"; // Importing the HomeHeader component
import Testimonials from "./Testimonials"; // Importing the Testimonials component
import { Box, Typography, Grid, Paper } from "@mui/material"; // Importing Material-UI components
import FreshIngredients from "./img/FreshIngredients.jpg"; // Importing image assets
import ExcellentService from "./img/ExcellentService.jpg";
import CozyAtmosphere from "./img/CozyAtmosphere.jpg";
import LazyLoad from "react-lazyload"; // Importing lazy loading for images
import Footer from "./Footer";

const Home = () => (
  <div>
    <HomeHeader /> {/* Render the HomeHeader component at the top */}
    <Box sx={{ flexGrow: 1, py: 8 }}>
      {/* Main section container with padding */}
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Discover Our Delights
      </Typography>
      {/* Title for the section */}
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {/* Grid container for layout with spacing */}

        {/* Grid item for Fresh Ingredients */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={3} // Shadow depth
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%", // Full height of the container
              overflow: "hidden", // Hide overflow content
              transition: "transform 0.3s ease-in-out", // Smooth scale transition on hover
              "&:hover": {
                transform: "scale(1.05)", // Scale up on hover
              },
            }}
          >
            <LazyLoad height={140} offset={100}>
              {/* Lazy load the image to improve performance */}
              <Box
                sx={{
                  height: 140, // Fixed height for the image container
                  width: "100%", // Full width of the container
                  backgroundImage: `url(${FreshIngredients})`, // Background image
                  backgroundSize: "cover", // Cover the entire container
                  backgroundPosition: "center", // Center the image
                  borderBottom: "1px solid #ddd", // Light border at the bottom
                }}
              />
            </LazyLoad>
            <Box sx={{ p: 2 }}>
              {/* Content box with padding */}
              <Typography variant="h6" component="div" sx={{ mb: 1 }}>
                Fresh Ingredients
              </Typography>
              {/* Heading for the content */}
              <Typography variant="body2" color="text.secondary">
                We use only the freshest ingredients to ensure that every meal
                is both delicious and nutritious.
              </Typography>
              {/* Description text */}
            </Box>
          </Paper>
        </Grid>

        {/* Grid item for Cozy Atmosphere */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={3} // Shadow depth
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%", // Full height of the container
              overflow: "hidden", // Hide overflow content
              transition: "transform 0.3s ease-in-out", // Smooth scale transition on hover
              "&:hover": {
                transform: "scale(1.05)", // Scale up on hover
              },
            }}
          >
            <LazyLoad height={140} offset={100}>
              {/* Lazy load the image to improve performance */}
              <Box
                sx={{
                  height: 140, // Fixed height for the image container
                  width: "100%", // Full width of the container
                  backgroundImage: `url(${CozyAtmosphere})`, // Background image
                  backgroundSize: "cover", // Cover the entire container
                  backgroundPosition: "center", // Center the image
                  borderBottom: "1px solid #ddd", // Light border at the bottom
                }}
              />
            </LazyLoad>
            <Box sx={{ p: 2 }}>
              {/* Content box with padding */}
              <Typography variant="h6" component="div" sx={{ mb: 1 }}>
                Cozy Atmosphere
              </Typography>
              {/* Heading for the content */}
              <Typography variant="body2" color="text.secondary">
                Enjoy a cozy and comfortable atmosphere that&apos;s perfect for
                dining with friends and family.
              </Typography>
              {/* Description text */}
            </Box>
          </Paper>
        </Grid>

        {/* Grid item for Excellent Service */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={3} // Shadow depth
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%", // Full height of the container
              overflow: "hidden", // Hide overflow content
              transition: "transform 0.3s ease-in-out", // Smooth scale transition on hover
              "&:hover": {
                transform: "scale(1.05)", // Scale up on hover
              },
            }}
          >
            <LazyLoad height={140} offset={100}>
              {/* Lazy load the image to improve performance */}
              <Box
                sx={{
                  height: 140, // Fixed height for the image container
                  width: "100%", // Full width of the container
                  backgroundImage: `url(${ExcellentService})`, // Background image
                  backgroundSize: "cover", // Cover the entire container
                  backgroundPosition: "center", // Center the image
                  borderBottom: "1px solid #ddd", // Light border at the bottom
                }}
              />
            </LazyLoad>
            <Box sx={{ p: 2 }}>
              {/* Content box with padding */}
              <Typography variant="h6" component="div" sx={{ mb: 1 }}>
                Excellent Service
              </Typography>
              {/* Heading for the content */}
              <Typography variant="body2" color="text.secondary">
                Our friendly staff is dedicated to providing you with excellent
                service and a memorable dining experience.
              </Typography>
              {/* Description text */}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
    <Testimonials /> {/* Render the Testimonials component at the bottom */}
    {/* Footer component for additional information or links */}
    {/* <Footer /> */}
  </div>
  
);

export default Home;
