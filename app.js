const express = require('express');
const db = require('./db');
const config = require('./config/config.json');
const bookRoutes = require('./routes/books');
const { initializeDatabase } = require('./database');

const app = express();
const port = config.server.port;

app.use(express.json());

initializeDatabase();

app.use('/api', bookRoutes);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
