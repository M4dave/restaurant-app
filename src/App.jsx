import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";
import Header from "./components/Header";
import Home from "./components/Home";
import Menu from "./components/Menu";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Reservation from "./components/Reservation";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#c9a84c", light: "#e2c97e", dark: "#a07830" },
    secondary: { main: "#f5f0e8" },
    background: { default: "#111010", paper: "#1a1a1a" },
    text: { primary: "#f5f0e8", secondary: "rgba(245,240,232,0.65)" },
    divider: "rgba(201,168,76,0.2)",
  },
  typography: {
    fontFamily: "'Jost', sans-serif",
    h1: { fontFamily: "'Playfair Display', serif" },
    h2: { fontFamily: "'Playfair Display', serif" },
    h3: { fontFamily: "'Playfair Display', serif" },
    h4: { fontFamily: "'Playfair Display', serif" },
    h5: { fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          letterSpacing: "0.12em",
          fontFamily: "'Jost', sans-serif",
          fontWeight: 500,
          textTransform: "uppercase",
          fontSize: "0.75rem",
          padding: "10px 28px",
        },
        containedPrimary: {
          background: "linear-gradient(135deg, #c9a84c, #a07830)",
          color: "#111010",
          "&:hover": {
            background: "linear-gradient(135deg, #e2c97e, #c9a84c)",
            boxShadow: "0 4px 20px rgba(201,168,76,0.35)",
          },
        },
        outlinedPrimary: {
          borderColor: "#c9a84c",
          color: "#c9a84c",
          "&:hover": { borderColor: "#e2c97e", color: "#e2c97e", background: "rgba(201,168,76,0.08)" },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 0,
            "& fieldset": { borderColor: "rgba(201,168,76,0.3)" },
            "&:hover fieldset": { borderColor: "rgba(201,168,76,0.6)" },
            "&.Mui-focused fieldset": { borderColor: "#c9a84c" },
          },
          "& label.Mui-focused": { color: "#c9a84c" },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "#1a1a1a",
          border: "1px solid rgba(201,168,76,0.12)",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: { borderRadius: 0 },
      },
    },
  },
});

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <MainContent cartCount={cartCount} setCartCount={setCartCount} />
      </Router>
    </ThemeProvider>
  );
};

const MainContent = ({ cartCount, setCartCount }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "background.default" }}>
      <CssBaseline />
      <Header cartCount={cartCount} />
      <Box component="main" sx={{ flex: 1, pt: "64px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu setCartCount={setCartCount} />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
