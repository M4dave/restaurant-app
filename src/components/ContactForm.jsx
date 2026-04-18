import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Grid, Container, Alert } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const InfoItem = ({ icon, label, value }) => {
  const IconComp = icon;
  return (
  <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
    <Box sx={{ width: 40, height: 40, border: '1px solid rgba(201,168,76,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <IconComp sx={{ color: '#c9a84c', fontSize: 18 }} />
    </Box>
    <Box>
      <Typography sx={{ color: 'rgba(245,240,232,0.5)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', mb: 0.3 }}>
        {label}
      </Typography>
      <Typography sx={{ color: '#f5f0e8', fontSize: '0.9rem' }}>{value}</Typography>
    </Box>
  </Box>
  );
};

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email address';
    if (!form.message) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }

    setConfirmationMessage(`Thank you, ${form.name}! We've received your message and will be in touch shortly.`);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setConfirmationMessage(''), 4000);
  };

  return (
    <Box sx={{ bgcolor: '#111010', minHeight: '100vh', pt: { xs: 10, md: 4 }, pb: 10 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', py: { xs: 6, md: 8 }, mb: 2 }}>
          <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: '#c9a84c', letterSpacing: '0.25em', fontSize: '0.85rem', mb: 1.5, textTransform: 'uppercase' }}>
            Get In Touch
          </Typography>
          <Typography variant="h2" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#f5f0e8', fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 2 }}>
            Contact Us
          </Typography>
          <Box sx={{ width: 50, height: 1, background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)', mx: 'auto' }} />
        </Box>

        <Grid container spacing={6} alignItems="flex-start">
          {/* Info column */}
          <Grid item xs={12} md={4}>
            <Box sx={{ p: 4, border: '1px solid rgba(201,168,76,0.15)', bgcolor: '#1a1a1a' }}>
              <Typography sx={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', color: '#f5f0e8', mb: 3, fontWeight: 600 }}>
                Visit Us
              </Typography>
              <InfoItem icon={LocationOnIcon} label="Address" value="1234 Pennsylvania Ave NW, Washington, D.C. 20004" />
              <InfoItem icon={PhoneIcon} label="Phone" value="+1 (202) 555-0174" />
              <InfoItem icon={EmailIcon} label="Email" value="hello@restaurantdc.com" />
              <InfoItem icon={AccessTimeIcon} label="Hours" value="Tue–Sun: 5:00 PM – 10:30 PM" />
            </Box>
          </Grid>

          {/* Form column */}
          <Grid item xs={12} md={8}>
            {confirmationMessage && (
              <Alert
                sx={{
                  mb: 3,
                  bgcolor: 'rgba(201,168,76,0.1)',
                  border: '1px solid rgba(201,168,76,0.4)',
                  color: '#e2c97e',
                  borderRadius: 0,
                  '& .MuiAlert-icon': { color: '#c9a84c' },
                }}
              >
                {confirmationMessage}
              </Alert>
            )}
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Your Name" name="name" value={form.name} onChange={handleChange} error={!!errors.name} helperText={errors.name} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} error={!!errors.email} helperText={errors.email} />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Your Message" name="message" value={form.message} onChange={handleChange} multiline rows={6} error={!!errors.message} helperText={errors.message} />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" size="large" sx={{ minWidth: 180, py: 1.5 }}>
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactForm;
