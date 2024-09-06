import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  CircularProgress,
  Alert,
} from "@mui/material";
import axios from 'axios';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    people: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.date) {
      newErrors.date = "Date is required";
      valid = false;
    }

    if (!formData.time) {
      newErrors.time = "Time is required";
      valid = false;
    } else {
      const timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/;
      if (!timePattern.test(formData.time)) {
        newErrors.time = "Time must be in HH:mm format";
        valid = false;
      }
    }

    if (!formData.people || isNaN(formData.people) || formData.people <= 0) {
      newErrors.people = "Number of people must be a positive number";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      handleConfirmSubmit();
    }
  };

  const handleConfirmSubmit = async () => {
    setLoading(true);
    try {
      // Send the form data to the server
      const response = await axios.post('http://localhost:5000/api/reservations', formData);
      
      // Handle success response
      setSuccessMessage("Reservation made successfully!");
      setFormData({
        name: "",
        date: "",
        time: "",
        people: "",
      });
      setErrors({});
    } catch (error) {
      if (error.response) {
        if (error.response.data.errors) {
          // Process validation errors from the server
          const validationErrors = error.response.data.errors.reduce((acc, err) => {
            acc[err.param] = err.msg;
            return acc;
          }, {});
          setErrors(validationErrors);
        } else if (error.response.data.error === 'Time slot already booked') {
          // Handle specific double-booking error
          setErrors({ general: 'This time slot is already booked. Please choose a different time.' });
        } else {
          // General error handling
          setErrors({ general: "An unexpected error occurred. Please try again later." });
        }
      } else {
        // Network error handling
        setErrors({ general: "Network error. Please check your connection." });
      }
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: "600px" }}>
        <Typography variant="h4" gutterBottom align="center">
          Make a Reservation
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="date"
                label="Date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                error={!!errors.date}
                helperText={errors.date}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="time"
                label="Time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                error={!!errors.time}
                helperText={errors.time}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="number"
                label="Number of People"
                name="people"
                value={formData.people}
                onChange={handleChange}
                error={!!errors.people}
                helperText={errors.people}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={loading}
                fullWidth
              >
                {loading ? <CircularProgress size={24} /> : "Reserve Table"}
              </Button>
            </Grid>

            {errors.general && (
              <Grid item xs={12}>
                <Alert severity="error">{errors.general}</Alert>
              </Grid>
            )}

            {successMessage && !errors.general && (
              <Grid item xs={12}>
                <Alert severity="success">{successMessage}</Alert>
              </Grid>
            )}
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Reservation;
