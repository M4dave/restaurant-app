import React, { useState, useEffect } from "react";
import {
  Box, Toolbar, Typography, Button, Container,
  IconButton, Drawer, List, ListItem, ListItemText, Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Menu", path: "/menu" },
  { label: "Reservation", path: "/reservation" },
  { label: "Contact", path: "/contact" },
];

const Header = ({ cartCount = 0 }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setScrolled(currentScrollPos > 20);
      setShowHeader(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1100,
        transition: "all 0.4s ease",
        transform: showHeader ? "translateY(0)" : "translateY(-100%)",
        background: scrolled
          ? "rgba(17,16,16,0.97)"
          : "linear-gradient(to bottom, rgba(17,16,16,0.9), transparent)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "none",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 0.5 }}>
          {/* Logo */}
          <Box
            component={Link}
            to="/"
            sx={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 1 }}
          >
            <Box sx={{ textAlign: "left" }}>
              <Typography
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "1.4rem",
                  color: "#f5f0e8",
                  letterSpacing: "0.04em",
                  lineHeight: 1.1,
                }}
              >
                Restaurant
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "0.8rem",
                  color: "#c9a84c",
                  letterSpacing: "0.2em",
                  lineHeight: 1,
                }}
              >
                — DC —
              </Typography>
            </Box>
          </Box>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 0.5 }}>
            {navLinks.map((link) => (
              <Button
                key={link.path}
                component={Link}
                to={link.path}
                sx={{
                  color: location.pathname === link.path ? "#c9a84c" : "#f5f0e8",
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.72rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontWeight: location.pathname === link.path ? 600 : 400,
                  px: 2,
                  py: 1,
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 4,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: location.pathname === link.path ? "20px" : "0",
                    height: "1px",
                    background: "#c9a84c",
                    transition: "width 0.3s ease",
                  },
                  "&:hover": { color: "#c9a84c" },
                  "&:hover::after": { width: "20px" },
                }}
              >
                {link.label}
              </Button>
            ))}
            <IconButton aria-label="Shopping bag" sx={{ ml: 1, color: "#f5f0e8", "&:hover": { color: "#c9a84c" } }}>
              <Badge badgeContent={cartCount} color="primary" sx={{ "& .MuiBadge-badge": { bgcolor: "#c9a84c", color: "#111" } }}>
                <ShoppingBagOutlinedIcon fontSize="small" />
              </Badge>
            </IconButton>
          </Box>

          {/* Mobile menu button */}
          <IconButton
            color="inherit"
            sx={{ display: { xs: "flex", md: "none" }, color: "#f5f0e8" }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 280,
            bgcolor: "#111010",
            borderLeft: "1px solid rgba(201,168,76,0.2)",
            p: 3,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
          <Typography sx={{ fontFamily: "'Playfair Display', serif", color: "#c9a84c", fontSize: "1.1rem" }}>
            Menu
          </Typography>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: "#f5f0e8" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ p: 0 }}>
          {navLinks.map((link) => (
            <ListItem
              key={link.path}
              component={Link}
              to={link.path}
              onClick={() => setDrawerOpen(false)}
              sx={{
                px: 0,
                py: 1.5,
                borderBottom: "1px solid rgba(201,168,76,0.1)",
                textDecoration: "none",
                color: location.pathname === link.path ? "#c9a84c" : "#f5f0e8",
                "&:hover": { color: "#c9a84c" },
              }}
            >
              <ListItemText
                primary={link.label}
                primaryTypographyProps={{
                  fontFamily: "'Jost', sans-serif",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontSize: "0.85rem",
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Header;
