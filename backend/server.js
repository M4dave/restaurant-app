const express = require('express');
const cors = require('cors');
const pgp = require('pg-promise')();
const morgan = require('morgan');
const { body, validationResult } = require('express-validator');

// Load environment variables
require('dotenv').config();

// Initialize PostgreSQL connection
const db = pgp(process.env.DATABASE_URL);

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev')); // HTTP request logger middleware

// Data validation and sanitation middleware
const validateReservation = [
  body('name').isString().trim().notEmpty().withMessage('Name is required'),
  body('date').isISO8601().toDate().withMessage('Invalid date format'),
  body('time').matches(/^([01]\d|2[0-3]):([0-5]\d)$/).withMessage('Invalid time format'),
  body('people').isInt({ gt: 0 }).withMessage('Number of people must be a positive integer')
];

// API endpoints
app.post('/api/reservations', validateReservation, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    try {
      const { name, date, time, people } = req.body;

      const existingReservation = await db.oneOrNone(
        'SELECT * FROM reservations WHERE date = $1 AND time = $2',
        [date, time]
      );

      if (existingReservation) {
        return res.status(409).json({ error: 'Time slot already booked' });
      }

      await db.none('INSERT INTO reservations(name, date, time, people) VALUES($1, $2, $3, $4)', [name, date, time, people]);
      res.status(201).json({ message: 'Reservation created successfully' });
    } catch (error) {
      console.error('Error creating reservation:', error.message);
      res.status(500).json({ error: 'Failed to create reservation', details: error.message });
    }
});

app.get('/api/reservations', async (req, res) => {
  try {
    const reservations = await db.any('SELECT * FROM reservations ORDER BY date, time');
    res.status(200).json(reservations);
  } catch (error) {
    console.error('Error fetching reservations:', error.message);
    res.status(500).json({ error: 'Failed to fetch reservations', details: error.message });
  }
});

app.get('/api/reservations/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const reservation = await db.oneOrNone('SELECT * FROM reservations WHERE id = $1', [id]);

    if (reservation) {
      res.status(200).json(reservation);
    } else {
      res.status(404).json({ error: 'Reservation not found' });
    }
  } catch (error) {
    console.error('Error fetching reservation:', error.message);
    res.status(500).json({ error: 'Failed to fetch reservation', details: error.message });
  }
});

app.put('/api/reservations/:id', validateReservation, async (req, res) => {
  const { id } = req.params;
  const { name, date, time, people } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const result = await db.result('UPDATE reservations SET name=$1, date=$2, time=$3, people=$4 WHERE id=$5', [name, date, time, people, id]);

    if (result.rowCount > 0) {
      res.status(200).json({ message: 'Reservation updated successfully' });
    } else {
      res.status(404).json({ error: 'Reservation not found' });
    }
  } catch (error) {
    console.error('Error updating reservation:', error.message);
    res.status(500).json({ error: 'Failed to update reservation', details: error.message });
  }
});

app.delete('/api/reservations/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.result('DELETE FROM reservations WHERE id = $1', [id]);

    if (result.rowCount > 0) {
      res.status(200).json({ message: 'Reservation deleted successfully' });
    } else {
      res.status(404).json({ error: 'Reservation not found' });
    }
  } catch (error) {
    console.error('Error deleting reservation:', error.message);
    res.status(500).json({ error: 'Failed to delete reservation', details: error.message });
  }
});

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.message);
  res.status(500).json({ error: 'Internal Server Error', details: err.message });
});

// Use environment variable PORT, default to 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
