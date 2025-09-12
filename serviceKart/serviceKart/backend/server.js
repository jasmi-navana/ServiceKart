const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection config (change user, password as needed)
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'Aish@2006',
  database: 'servicekart'
};

async function getConnection() {
  return await mysql.createConnection(dbConfig);
}

// POST /api/bookings - save booking
app.post('/api/bookings', async (req, res) => {
  const { address, paymentOnCompletion, status = 'Pending' } = req.body;

  if (!address) {
    return res.status(400).json({ message: 'Address is required' });
  }

  try {
    const conn = await getConnection();
    const [result] = await conn.execute(
      `INSERT INTO bookings (address, paymentOnCompletion, status) VALUES (?, ?, ?)`,
      [address, paymentOnCompletion ? 1 : 0, status]
    );
    await conn.end();

    res.status(201).json({ message: 'Booking saved', id: result.insertId });
  } catch (err) {
    res.status(500).json({ message: 'Database error', error: err.message });
  }
});

// GET /api/bookings - fetch all bookings
app.get('/api/bookings', async (req, res) => {
  try {
    const conn = await getConnection();
   const [rows] = await conn.execute(`SELECT * FROM bookings ORDER BY id DESC`);

    await conn.end();

    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: 'Database error', error: err.message });
  }
});

// Start server
const PORT = 3000;
app.listen(PORT, '0.0.0.0',() => {
  console.log(`Server running on port ${PORT}`);
});
