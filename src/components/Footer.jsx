import { Box, Typography, Link, IconButton, Container } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => (
  <Box
    sx={{
      bgcolor: "black",
      color: "white",
      p: 2,
      mt: "auto",
      textAlign: "center",
      borderTop: "1px solid",
      borderColor: "divider",
    }}
  >
    <Container>
      <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
        &copy; {new Date().getFullYear()} Restaurant App. All rights reserved.
      </Typography>
      <Box sx={{ mt: 1 }}>
        <Link href="/privacy" variant="body2" color="inherit" sx={{ mx: 1, fontSize: '0.875rem' }}>
          Privacy Policy
        </Link>
        <Link href="/terms" variant="body2" color="inherit" sx={{ mx: 1, fontSize: '0.875rem' }}>
          Terms of Service
        </Link>
      </Box>
      <Box sx={{ mt: 1 }}>
        <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
          Contact us: <Link href="mailto:contact@restaurantapp.com" color="inherit">contact@restaurantapp.com</Link>
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
          Phone: <Link href="tel:+1234567890" color="inherit">+123 456 7890</Link>
        </Typography>
      </Box>
      <Box sx={{ mt: 1 }}>
        <IconButton
          component="a"
          href="https://facebook.com"
          target="_blank"
          rel="noopener"
          color="inherit"
          aria-label="Facebook"
          sx={{
            '&:hover': {
              color: '#3b5998',
            },
          }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://twitter.com"
          target="_blank"
          rel="noopener"
          color="inherit"
          aria-label="Twitter"
          sx={{
            '&:hover': {
              color: '#1da1f2',
            },
          }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://instagram.com"
          target="_blank"
          rel="noopener"
          color="inherit"
          aria-label="Instagram"
          sx={{
            '&:hover': {
              color: '#c13584',
            },
          }}
        >
          <InstagramIcon />
        </IconButton>
      </Box>
    </Container>
  </Box>
);

export default Footer;