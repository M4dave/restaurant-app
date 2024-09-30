import { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  CircularProgress,
  Alert,
} from "@mui/material";

const Reservation = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    people: "",
  });

  // State to hold validation errors
  const [errors, setErrors] = useState({});
  // State to manage success message after form submission
  const [successMessage, setSuccessMessage] = useState("");
  // State to manage loading state during submission
  const [loading, setLoading] = useState(false);

  // Function to handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to validate form inputs
  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Validate name
    if (!formData.name) {
      newErrors.name = "Name is required";
      valid = false;
    }

    // Validate date
    if (!formData.date) {
      newErrors.date = "Date is required";
      valid = false;
    }

    // Validate time and check format
    if (!formData.time) {
      newErrors.time = "Time is required";
      valid = false;
    } else {
      const timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/; // HH:mm format
      if (!timePattern.test(formData.time)) {
        newErrors.time = "Time must be in HH:mm format";
        valid = false;
      }
    }

    // Validate number of people
    if (!formData.people || isNaN(formData.people) || formData.people <= 0) {
      newErrors.people = "Number of people must be a positive number";
      valid = false;
    }

    setErrors(newErrors); // Update errors state
    return valid; // Return validation result
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (validateForm()) {
      handleConfirmSubmit(); // If valid, proceed to submit
    }
  };

  // Function to simulate form submission
  const handleConfirmSubmit = () => {
    setLoading(true); // Set loading state
    // Simulate a successful submission with a timeout
    setTimeout(() => {
      setSuccessMessage("Reservation made successfully!"); // Set success message
      // Reset form data
      setFormData({
        name: "",
        date: "",
        time: "",
        people: "",
      });
      setErrors({}); // Clear any errors
      setLoading(false); // Reset loading state
    }, 1000); // Simulated delay of 1 second
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
                error={!!errors.name} // Show error if exists
                helperText={errors.name} // Display error message
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
                error={!!errors.date} // Show error if exists
                helperText={errors.date} // Display error message
                InputLabelProps={{ shrink: true }} // Keep label above input
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
                error={!!errors.time} // Show error if exists
                helperText={errors.time} // Display error message
                InputLabelProps={{ shrink: true }} // Keep label above input
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
                error={!!errors.people} // Show error if exists
                helperText={errors.people} // Display error message
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={loading} // Disable button when loading
                fullWidth
              >
                {loading ? <CircularProgress size={24} /> : "Reserve Table"}{" "}
                {/*  Show loading spinner or button text */}
              </Button>
            </Grid>

            {errors.general && ( // Show general error if exists
              <Grid item xs={12}>
                <Alert severity="error">{errors.general}</Alert>
              </Grid>
            )}

            {successMessage &&
              !errors.general && ( // Show success message if exists
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
