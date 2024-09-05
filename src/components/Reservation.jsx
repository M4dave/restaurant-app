import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  Snackbar,
  Alert,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  CircularProgress,
} from "@mui/material";


const Reservation = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    people: "",
  });

  // State to manage form validation errors
  const [errors, setErrors] = useState({
    name: "",
    date: "",
    time: "",
    people: "",
  });

  // State to manage success message and Snackbar visibility
  const [successMessage, setSuccessMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // State to manage the confirmation dialog visibility
  const [openDialog, setOpenDialog] = useState(false);

  // State to manage loading indicator visibility
  const [loading, setLoading] = useState(false);

  // Handler for input field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form fields and return if valid
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
    }

    if (!formData.people || isNaN(formData.people) || formData.people <= 0) {
      newErrors.people = "Number of people must be a positive number";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setOpenDialog(true); // Open confirmation dialog if form is valid
    }
  };

  // Handle confirmation of form submission
  const handleConfirmSubmit = () => {
    setLoading(true); // Show loading spinner

    // Simulate form submission with a delay
    setTimeout(() => {
      console.log("Reservation details:", formData);

      // Set success message and show Snackbar
      setSuccessMessage("Reservation made successfully!");
      setOpenSnackbar(true);

      // Reset form data
      setFormData({
        name: "",
        date: "",
        time: "",
        people: "",
      });

      setOpenDialog(false); // Close confirmation dialog
      setLoading(false); // Hide loading spinner

      // Hide Snackbar after a few seconds
      setTimeout(() => setOpenSnackbar(false), 3000);
    }, 2000); // Simulate delay
  };

  return (
    <>

      <Container
        sx={{
          height: "100vh", // Full viewport height
          display: "flex", // Flexbox layout
          alignItems: "center", // Center items vertically
          justifyContent: "center", // Center items horizontally
        }}
      >
        <div style={{ width: "100%", maxWidth: "600px" }}>
          {/* Header for the reservation form */}
          <Typography variant="h4" gutterBottom align="center">
            Make a Reservation
          </Typography>
    
          {/* Form for making a reservation */}
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              {/* Name field */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={!!errors.name} // Show error state if there's an error
                  helperText={errors.name} // Show error message
                />
              </Grid>
    
              {/* Date field */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  type="date"
                  label="Date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  error={!!errors.date} // Show error state if there's an error
                  helperText={errors.date} // Show error message
                  InputLabelProps={{ shrink: true }} // Ensure label is properly displayed for date input
                />
              </Grid>
    
              {/* Time field */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  type="time"
                  label="Time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  error={!!errors.time} // Show error state if there's an error
                  helperText={errors.time} // Show error message
                  InputLabelProps={{ shrink: true }} // Ensure label is properly displayed for time input
                />
              </Grid>
    
              {/* Number of people field */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  type="number"
                  label="Number of People"
                  name="people"
                  value={formData.people}
                  onChange={handleChange}
                  error={!!errors.people} // Show error state if there's an error
                  helperText={errors.people} // Show error message
                />
              </Grid>
    
              {/* Submit button */}
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={loading} // Disable button while loading
                  fullWidth
                >
                  {loading ? <CircularProgress size={24} /> : "Reserve Table"} {/* Show loading spinner if loading */}
                </Button>
              </Grid>
            </Grid>
          </form>
    
          {/* Snackbar for displaying success messages */}
          <Snackbar
            open={openSnackbar} // Open or close the Snackbar
            autoHideDuration={3000} // Auto-hide duration in milliseconds
            onClose={() => setOpenSnackbar(false)} // Close Snackbar when clicked outside or after auto-hide
          >
            <Alert onClose={() => setOpenSnackbar(false)} severity="success">
              {successMessage} {/* Display success message */}
            </Alert>
          </Snackbar>
    
          {/* Dialog for reservation confirmation */}
          <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
            <DialogTitle>Confirm Reservation</DialogTitle>
            <DialogContent>
              <Typography>
                Are you sure you want to make this reservation? {/* Confirmation message */}
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenDialog(false)} color="primary">
                Cancel {/* Cancel button */}
              </Button>
              <Button onClick={handleConfirmSubmit} color="primary">
                Confirm {/* Confirm button */}
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Container>
    </>
  );
};

export default Reservation;
