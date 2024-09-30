import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const ContactForm = () => {
  // State to hold form field values
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State to hold confirmation message after form submission
  const [confirmationMessage, setConfirmationMessage] = useState('');

  // State to hold validation errors for each form field
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle changes in form field values
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Reset errors before new validation
    setErrors({
      name: '',
      email: '',
      message: ''
    });

    // Basic validation
    let hasError = false;
    const newErrors = {};

    // Validate name
    if (!form.name) {
      newErrors.name = 'Name is required';
      hasError = true;
    }
    // Validate email
    if (!form.email) {
      newErrors.email = 'Email is required';
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email is invalid';
      hasError = true;
    }
    // Validate message
    if (!form.message) {
      newErrors.message = 'Message is required';
      hasError = true;
    }

    // If there are errors, set them in state and stop submission
    if (hasError) {
      setErrors(newErrors);
      return;
    }

    // Handle form submission (e.g., send data to a server)
    console.log('Form submitted:', form);

    // Set confirmation message to inform user
    setConfirmationMessage(`Thank you, ${form.name}! Your message has been received.`);
    
    // Clear form fields after successful submission
    setForm({
      name: '',
      email: '',
      message: ''
    });

    // Clear confirmation message after 2 seconds
    setTimeout(() => {
      setConfirmationMessage('');
    }, 2000);
  };

  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit} 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh', // Full viewport height
        px: 2
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        Contact Us
      </Typography>
      <TextField
        fullWidth
        label="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        margin="normal"
        error={!!errors.name} // Highlight field if there's an error
        helperText={errors.name} // Show error message if any
      />
      <TextField
        fullWidth
        label="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
        margin="normal"
        type="email"
        error={!!errors.email} // Highlight field if there's an error
        helperText={errors.email} // Show error message if any
      />
      <TextField
        fullWidth
        label="Message"
        name="message"
        value={form.message}
        onChange={handleChange}
        margin="normal"
        multiline
        rows={4}
        error={!!errors.message} // Highlight field if there's an error
        helperText={errors.message} // Show error message if any
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Send
      </Button>
      {confirmationMessage && (
        <Typography variant="h6" component="p" sx={{ mt: 2, color: 'green' }}>
          {confirmationMessage} {/* // Show confirmation message if present */}
        </Typography>
      )}
    </Box>
  );
};

export default ContactForm;
