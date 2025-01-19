const { Sequelize } = require('sequelize');
const { Client } = require('pg');
const config = require('./config/config.json');

const db = new Sequelize(config.database.database, config.database.username, config.database.password, {
  host: config.database.host,
  port: config.database.port,
  dialect: config.database.dialect,
  logging: false
});

async function checkAndCreateDatabase() {
  const client = new Client({
    user: config.database.username,
    host: config.database.host,
    password: config.database.password,
    port: config.database.port,
    database: 'postgres'
  });

  await client.connect();

  const res = await client.query('SELECT 1 FROM pg_database WHERE datname = $1', [config.database.database]);
  if (res.rowCount === 0) {
    await client.query(`CREATE DATABASE ${config.database.database}`);
    console.log(`Database ${config.database.database} created!`);
  } else {
    console.log(`Database ${config.database.database} already exists!`);
  }

  await client.end();
}

module.exports = {
  db,
  checkAndCreateDatabase
};
