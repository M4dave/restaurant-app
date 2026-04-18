import { useState } from "react";
import {
  TextField, Button, Grid, Typography, Container,
  CircularProgress, Alert, Box, MenuItem, Select, FormControl, InputLabel,
} from "@mui/material";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import reservationImg from "./img/Reservation.jpg";

const timeSlots = ["17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30"];
const partySizes = [1,2,3,4,5,6,7,8];

const Reservation = () => {
  const [formData, setFormData] = useState({ name: "", date: "", time: "", people: "" });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Please select a time slot";
    if (!formData.people) newErrors.people = "Party size is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      setTimeout(() => {
        setSuccessMessage(`Your table for ${formData.people} has been reserved for ${formData.date} at ${formData.time}. See you soon!`);
        setFormData({ name: "", date: "", time: "", people: "" });
        setErrors({});
        setLoading(false);
        setTimeout(() => setSuccessMessage(""), 5000);
      }, 1200);
    }
  };

  return (
    <Box sx={{ bgcolor: '#111010', minHeight: '100vh' }}>
      <Grid container sx={{ minHeight: '100vh' }}>
        {/* Image side */}
        <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Box
            sx={{
              height: '100%',
              backgroundImage: `url(${reservationImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, rgba(17,16,16,0) 60%, rgba(17,16,16,1) 100%)',
              },
            }}
          />
        </Grid>

        {/* Form side */}
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: { xs: 4, md: 8 },
              pt: { xs: 12, md: 8 },
            }}
          >
            <Box sx={{ width: '100%', maxWidth: 500 }}>
              <Box sx={{ mb: 5 }}>
                <Typography sx={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: '#c9a84c', letterSpacing: '0.2em', fontSize: '0.85rem', mb: 1.5, textTransform: 'uppercase' }}>
                  Reserve Your Evening
                </Typography>
                <Typography variant="h3" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#f5f0e8', fontSize: { xs: '2rem', md: '2.6rem' }, mb: 2 }}>
                  Book a Table
                </Typography>
                <Box sx={{ width: 50, height: 1, background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }} />
              </Box>

              {successMessage && (
                <Alert
                  icon={<EventAvailableIcon />}
                  sx={{
                    mb: 3,
                    bgcolor: 'rgba(201,168,76,0.1)',
                    border: '1px solid rgba(201,168,76,0.4)',
                    color: '#e2c97e',
                    borderRadius: 0,
                    '& .MuiAlert-icon': { color: '#c9a84c' },
                  }}
                >
                  {successMessage}
                </Alert>
              )}

              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      error={!!errors.name}
                      helperText={errors.name}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
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
                      inputProps={{ min: new Date().toISOString().split('T')[0] }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth error={!!errors.time}>
                      <InputLabel>Time</InputLabel>
                      <Select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        label="Time"
                        sx={{ borderRadius: 0 }}
                      >
                        {timeSlots.map(slot => (
                          <MenuItem key={slot} value={slot}>{slot}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl fullWidth error={!!errors.people}>
                      <InputLabel>Party Size</InputLabel>
                      <Select
                        name="people"
                        value={formData.people}
                        onChange={handleChange}
                        label="Party Size"
                        sx={{ borderRadius: 0 }}
                      >
                        {partySizes.map(n => (
                          <MenuItem key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={loading}
                      fullWidth
                      size="large"
                      sx={{ py: 1.5 }}
                    >
                      {loading ? <CircularProgress size={22} sx={{ color: '#111' }} /> : "Confirm Reservation"}
                    </Button>
                  </Grid>
                </Grid>
              </Box>

              <Typography sx={{ mt: 4, color: 'rgba(245,240,232,0.4)', fontSize: '0.75rem', letterSpacing: '0.05em', textAlign: 'center' }}>
                For parties larger than 8, please call us at +1 (202) 555-0174
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Reservation;
