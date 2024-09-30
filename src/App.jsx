// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Menu from "./components/Menu";
import ContactForm from "./components/ContactForm";
// import Footer from "./components/Footer";
import { Container, CssBaseline, Box } from "@mui/material";
import Reservation from "./components/Reservation";

// Main App component
const App = () => (
  <Router>
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Provides baseline CSS styles for Material-UI components */}
      <CssBaseline />

      {/* Header component for navigation or branding */}
      <Header />

      <Container component="main" sx={{ flex: 1, py: 8 }}>
        {/* Routing setup */}
        <Routes>
          {/* Route for the homepage */}
          <Route path="/" element={<Home />} />

          {/* Route for the menu page */}
          <Route path="/menu" element={<Menu />} />

          {/* Route for the contact form page */}
          <Route path="/contact" element={<ContactForm />} />

          {/* Route for the reservation page */}
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </Container>

      {/* Footer component for additional information or links */}
      {/* <Footer /> */}
    </Box>
  </Router>
);

export default App;
