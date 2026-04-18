import HomeHeader from "./HomeHeader";
import Testimonials from "./Testimonials";
import LazyImg from "./LazyImg";
import { Box, Typography, Grid, Container } from "@mui/material";
import FreshIngredients from "./img/FreshIngredients.jpg";
import ExcellentService from "./img/ExcellentService.jpg";
import CozyAtmosphere from "./img/CozyAtmosphere.jpg";

const features = [
  {
    img: FreshIngredients,
    title: "Fresh Ingredients",
    description:
      "We source only the finest seasonal ingredients, building each dish around what's peak and vibrant — never compromised.",
    icon: "🌿",
  },
  {
    img: CozyAtmosphere,
    title: "Cozy Atmosphere",
    description:
      "Step into warm candlelight and the gentle hum of conversation — a space crafted for lingering over good food and great company.",
    icon: "🕯️",
  },
  {
    img: ExcellentService,
    title: "Excellent Service",
    description:
      "Our attentive team anticipates your every need with grace, ensuring each visit feels personal and effortlessly memorable.",
    icon: "✦",
  },
];

const FeatureCard = ({ feature, delay }) => (
  <Box
    className={`animate-in animate-delay-${delay} feature-card-hover`}
    sx={{
      position: "relative",
      overflow: "hidden",
      border: "1px solid rgba(201,168,76,0.15)",
      transition: "all 0.4s ease",
      "&:hover": {
        border: "1px solid rgba(201,168,76,0.45)",
        transform: "translateY(-6px)",
        "& .feature-overlay": { opacity: 0.5 },
      },
    }}
  >
    {/* Image with smooth fade-in */}
    <Box sx={{ position: "relative", height: 240 }}>
      <div className="feature-img-zoom">
        <LazyImg
          src={feature.img}
          alt={feature.title}
          height={240}
        />
      </div>
      {/* Gradient overlay */}
      <Box
        className="feature-overlay"
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, transparent, rgba(17,16,16,0.7))",
          opacity: 0.3,
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
        }}
      />
      <Typography
        sx={{
          position: "absolute",
          bottom: 12,
          left: 16,
          fontSize: "1.5rem",
          zIndex: 2,
        }}
      >
        {feature.icon}
      </Typography>
    </Box>

    <Box sx={{ p: 3, bgcolor: "#1a1a1a" }}>
      <Typography
        sx={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.15rem",
          fontWeight: 600,
          color: "#f5f0e8",
          mb: 1,
        }}
      >
        {feature.title}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "rgba(245,240,232,0.65)", lineHeight: 1.75, fontWeight: 300 }}
      >
        {feature.description}
      </Typography>
    </Box>
  </Box>
);

const Home = () => (
  <Box>
    <HomeHeader />

    {/* Features section */}
    <Box sx={{ bgcolor: "#111010", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 7 }}>
          <Typography
            sx={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              color: "#c9a84c",
              letterSpacing: "0.2em",
              fontSize: "0.9rem",
              mb: 1.5,
              textTransform: "uppercase",
            }}
          >
            Why Choose Us
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              color: "#f5f0e8",
              fontSize: { xs: "2rem", md: "2.8rem" },
            }}
          >
            Discover Our Delights
          </Typography>
          <Box
            sx={{
              width: 50,
              height: 1,
              background: "linear-gradient(90deg, transparent, #c9a84c, transparent)",
              mx: "auto",
              mt: 2.5,
            }}
          />
        </Box>
        <Grid container spacing={3}>
          {features.map((f, i) => (
            <Grid item xs={12} sm={6} md={4} key={f.title}>
              <FeatureCard feature={f} delay={i + 1} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>

    {/* Quote strip */}
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        background: "linear-gradient(135deg, #1a1510 0%, #1a1a1a 50%, #1a1510 100%)",
        borderTop: "1px solid rgba(201,168,76,0.12)",
        borderBottom: "1px solid rgba(201,168,76,0.12)",
        textAlign: "center",
        px: 3,
      }}
    >
      <Typography
        sx={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          fontSize: { xs: "1.5rem", md: "2.2rem" },
          color: "#f5f0e8",
          maxWidth: 680,
          mx: "auto",
          lineHeight: 1.5,
          mb: 2,
        }}
      >
        "Food is our common ground, a universal experience."
      </Typography>
      <Typography
        sx={{
          fontFamily: "'Jost', sans-serif",
          fontSize: "0.75rem",
          letterSpacing: "0.2em",
          color: "#c9a84c",
          textTransform: "uppercase",
        }}
      >
        — James Beard
      </Typography>
    </Box>

    {/* Testimonials */}
    <Box sx={{ bgcolor: "#111010", py: { xs: 8, md: 12 } }}>
      <Testimonials />
    </Box>
  </Box>
);

export default Home;
