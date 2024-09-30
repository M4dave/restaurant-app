import { Box, Typography, Container, Button } from '@mui/material'; // Importing Material-UI components
import { Link } from 'react-router-dom'; // Importing Link component for navigation
import restaurantImage from '../components/img/restaurant.jpg'; // Import the image


const HomeHeader = () => (
  <Box
    sx={{
      position: 'relative', // Positioning relative for absolute child elements
      overflow: 'hidden', // Hide overflow content
      color: '#fff', // Text color
      textAlign: 'center', // Center-align text
      py: 10, // Padding on top and bottom
      '&::before': {
        content: '""', // Empty content to create the pseudo-element
        position: 'absolute', // Absolute positioning
        top: 0, // Align to the top of the parent
        left: 0, // Align to the left of the parent
        width: '100%', // Full width
        height: '100%', // Full height
        backgroundImage: `url(${restaurantImage})`, // Background image
        backgroundSize: 'cover', // Cover the container
        backgroundPosition: 'center', // Center the background image
        animation: 'zoomInOut 10s infinite', // Apply animation
        zIndex: -1, // Send the pseudo-element behind other content
        opacity: 0.8, // Semi-transparent background
      },
      '& h1, & h2': {
        position: 'relative', // Relative positioning to ensure zIndex works
        zIndex: 1, // Bring headings above the pseudo-element
      },
    }}
  >
    <Container>
      {/* Container for centered content */}
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to Our Restaurant
      </Typography>
      {/* Main heading for the header section */}
      <Typography variant="h5" component="h2" gutterBottom>
        Experience the best dishes made with love and fresh ingredients.
      </Typography>
      {/* Subheading for additional information */}
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/menu"
        sx={{ mt: 2, mr: 2 }} // Margin top and right for spacing
      >
        View Menu
      </Button>
      {/* Button to view the menu */}
      <Button
        variant="outlined"
        color="inherit"
        component={Link}
        to="/contact"
        sx={{ mt: 2 }} // Margin top for spacing
      >
        Contact Us
      </Button>
      {/* Button to contact the restaurant */}
    </Container>
    <style>
      {`
        @keyframes zoomInOut {
          0% {
            background-size: 100% 100%; // Start with the background size at 100%
          }
          50% {
            background-size: 120% 120%; // Scale up the background size
          }
          100% {
            background-size: 100% 100%; // Return to the original size
          }
        }
      `}
    </style>
  </Box>
);

export default HomeHeader;
