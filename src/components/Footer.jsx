import { Box, Typography, Link, IconButton, Container, Grid, Divider } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link as RouterLink } from "react-router-dom";

const Footer = () => (
  <Box
    sx={{
      bgcolor: "#0a0a0a",
      color: "#f5f0e8",
      borderTop: "1px solid rgba(201,168,76,0.15)",
      pt: 8,
      pb: 4,
    }}
  >
    <Container maxWidth="lg">
      <Grid container spacing={6} sx={{ mb: 6 }}>
        {/* Brand */}
        <Grid item xs={12} md={4}>
          <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', fontWeight: 700, color: '#f5f0e8', mb: 0.5 }}>
            Restaurant
          </Typography>
          <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: '#c9a84c', letterSpacing: '0.2em', fontSize: '0.85rem', mb: 2 }}>
            — DC —
          </Typography>
          <Typography sx={{ color: 'rgba(245,240,232,0.5)', fontSize: '0.85rem', lineHeight: 1.8, maxWidth: 260 }}>
            An Italian dining experience in the heart of Washington, D.C. Crafted with love, served with grace.
          </Typography>
          <Box sx={{ mt: 3, display: 'flex', gap: 1 }}>
            {[
              { icon: <FacebookIcon fontSize="small" />, href: "https://facebook.com", hoverColor: '#4267B2', label: 'Facebook' },
              { icon: <TwitterIcon fontSize="small" />, href: "https://twitter.com", hoverColor: '#1DA1F2', label: 'Twitter' },
              { icon: <InstagramIcon fontSize="small" />, href: "https://instagram.com", hoverColor: '#E1306C', label: 'Instagram' },
            ].map(({ icon, href, hoverColor, label }) => (
              <IconButton
                key={label}
                component="a"
                href={href}
                target="_blank"
                rel="noopener"
                aria-label={label}
                sx={{
                  border: '1px solid rgba(201,168,76,0.2)',
                  borderRadius: 0,
                  color: 'rgba(245,240,232,0.6)',
                  p: 1,
                  transition: 'all 0.3s ease',
                  '&:hover': { color: hoverColor, borderColor: hoverColor, bgcolor: 'rgba(255,255,255,0.05)' },
                }}
              >
                {icon}
              </IconButton>
            ))}
          </Box>
        </Grid>

        {/* Navigation */}
        <Grid item xs={6} md={2}>
          <Typography sx={{ fontFamily: "'Jost', sans-serif", fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a84c', mb: 2.5 }}>
            Navigate
          </Typography>
          {[{ label: 'Home', to: '/' }, { label: 'Menu', to: '/menu' }, { label: 'Reservation', to: '/reservation' }, { label: 'Contact', to: '/contact' }].map(({ label, to }) => (
            <Link key={to} component={RouterLink} to={to} sx={{ display: 'block', color: 'rgba(245,240,232,0.55)', fontSize: '0.85rem', mb: 1.25, textDecoration: 'none', transition: 'color 0.2s', '&:hover': { color: '#c9a84c' } }}>
              {label}
            </Link>
          ))}
        </Grid>

        {/* Hours */}
        <Grid item xs={6} md={3}>
          <Typography sx={{ fontFamily: "'Jost', sans-serif", fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a84c', mb: 2.5 }}>
            Hours
          </Typography>
          {[
            { day: 'Tuesday – Thursday', time: '5:00 – 10:00 PM' },
            { day: 'Friday – Saturday', time: '5:00 – 11:00 PM' },
            { day: 'Sunday', time: '4:00 – 9:30 PM' },
            { day: 'Monday', time: 'Closed' },
          ].map(({ day, time }) => (
            <Box key={day} sx={{ mb: 1.2 }}>
              <Typography sx={{ color: 'rgba(245,240,232,0.4)', fontSize: '0.72rem', letterSpacing: '0.05em' }}>{day}</Typography>
              <Typography sx={{ color: 'rgba(245,240,232,0.75)', fontSize: '0.85rem' }}>{time}</Typography>
            </Box>
          ))}
        </Grid>

        {/* Contact */}
        <Grid item xs={12} md={3}>
          <Typography sx={{ fontFamily: "'Jost', sans-serif", fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a84c', mb: 2.5 }}>
            Contact
          </Typography>
          <Typography sx={{ color: 'rgba(245,240,232,0.55)', fontSize: '0.85rem', mb: 1 }}>1234 Pennsylvania Ave NW</Typography>
          <Typography sx={{ color: 'rgba(245,240,232,0.55)', fontSize: '0.85rem', mb: 2 }}>Washington, D.C. 20004</Typography>
          <Link href="tel:+12025550174" sx={{ display: 'block', color: 'rgba(245,240,232,0.55)', fontSize: '0.85rem', textDecoration: 'none', mb: 0.75, '&:hover': { color: '#c9a84c' } }}>
            +1 (202) 555-0174
          </Link>
          <Link href="mailto:hello@restaurantdc.com" sx={{ display: 'block', color: 'rgba(245,240,232,0.55)', fontSize: '0.85rem', textDecoration: 'none', '&:hover': { color: '#c9a84c' } }}>
            hello@restaurantdc.com
          </Link>
        </Grid>
      </Grid>

      <Divider sx={{ borderColor: 'rgba(201,168,76,0.1)', mb: 3 }} />

      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
        <Typography sx={{ color: 'rgba(245,240,232,0.3)', fontSize: '0.75rem' }}>
          © {new Date().getFullYear()} Restaurant DC. All rights reserved.
        </Typography>
        <Box sx={{ display: 'flex', gap: 3 }}>
          {['Privacy Policy', 'Terms of Service'].map(label => (
            <Link key={label} href="#" sx={{ color: 'rgba(245,240,232,0.3)', fontSize: '0.75rem', textDecoration: 'none', '&:hover': { color: '#c9a84c' } }}>
              {label}
            </Link>
          ))}
        </Box>
      </Box>
    </Container>
  </Box>
);

export default Footer;
