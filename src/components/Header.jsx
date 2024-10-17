import React, { useState, useEffect } from "react";
import {
  Box,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Header = () => {
  // State to manage the open/close state of the drawer
  const [drawerOpen, setDrawerOpen] = useState(false);

  // State to keep track of the previous scroll position for hiding/showing the header
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // State to manage whether the header should be visible or hidden based on scrolling
  const [showHeader, setShowHeader] = useState(true);

  // Function to open the drawer
  const handleDrawerOpen = () => setDrawerOpen(true);

  // Function to close the drawer
  const handleDrawerClose = () => setDrawerOpen(false);

  useEffect(() => {
    // Function to handle scroll events and toggle header visibility
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      // Show header when scrolling up or when at the top of the page
      setShowHeader(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]); // Dependency array: effect depends on prevScrollPos

  return (
    <Box
      sx={{
        bgcolor: "black", // Background color of the header
        color: "white", // Text color in the header
        position: "fixed", // Fix the header to the top of the page
        top: 0, // Position the header at the top
        width: "100%", // Full width of the viewport
        transition: "transform 0.3s ease-in-out", // Smooth transition for header visibility
        transform: showHeader ? "translateY(0)" : "translateY(-100%)", // Show/hide the header based on scroll position
        zIndex: 1100, // Ensure the header is above other content
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Title or brand name */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Restaurant DC
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* Navigation buttons for larger screens */}
            <Button color="inherit" component={Link} to="/" aria-label="Home">
              Home
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/menu"
              aria-label="Menu"
            >
              Menu
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/contact"
              aria-label="Contact"
            >
              Contact
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/reservation"
              aria-label="Reservation"
            >
              Reservation
            </Button>
          </Box>
          <IconButton
            color="inherit"
            sx={{ display: { xs: "flex", md: "none" } }} // Show only on small screens
            onClick={handleDrawerOpen}
            aria-label="Open menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Drawer component for mobile navigation */}
      <Drawer
        anchor="right" // Position the drawer on the right side
        open={drawerOpen} // Open state controlled by the drawerOpen state
        onClose={handleDrawerClose} // Close the drawer when clicking outside or pressing the escape key
        sx={{
          "& .MuiDrawer-paper": {
            width: 240,
            bgcolor: "black",
            color: "white",
          },
        }} // Styling for the drawer paper
      >
        <List>
          {/* Navigation items in the drawer */}
          <ListItem
            component={Link}
            to="/"
            onClick={handleDrawerClose}
            aria-label="Home"
          >
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            component={Link}
            to="/menu"
            onClick={handleDrawerClose}
            aria-label="Menu"
          >
            <ListItemText primary="Menu" />
          </ListItem>
          <ListItem
            component={Link}
            to="/contact"
            onClick={handleDrawerClose}
            aria-label="Contact"
          >
            <ListItemText primary="Contact" />
          </ListItem>
          <ListItem
            component={Link}
            to="/reservation"
            onClick={handleDrawerClose}
            aria-label="Reservation"
          >
            <ListItemText primary="Reservation" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Header;
