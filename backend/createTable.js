const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS reservations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    date TIMESTAMP NOT NULL,
    time TIME NOT NULL,
    people INTEGER NOT NULL
  );
`;

const createTable = async () => {
  try {
    console.log('Connecting to the database...');
    await client.connect();
    console.log('Connected to the database.');

    console.log('Running table creation query...');
    await client.query(createTableQuery);
    console.log('Table "reservations" created successfully.');

  } catch (err) {
    console.error('Error creating table:', err.stack);
  } finally {
    try {
      console.log('Closing database connection...');
      await client.end();
      console.log('Database connection closed.');
    } catch (endErr) {
      console.error('Error closing database connection:', endErr.stack);
    }
  }
};

createTable();
