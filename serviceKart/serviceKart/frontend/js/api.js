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
  password: 'your_mysql_password',
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
    const [rows] = await conn.execute(`SELECT * FROM bookings ORDER BY createdAt DESC`);
    await conn.end();

    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: 'Database error', error: err.message });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.post('/api/agent-login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const conn = await getConnection();
    const [rows] = await conn.execute(
      'SELECT * FROM agents WHERE email = ? AND password = ?',
      [email, password]
    );
    await conn.end();

    if (rows.length > 0) {
      res.json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Database error', error: err.message });
  }
});

