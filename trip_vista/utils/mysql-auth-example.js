// utilities/mysql-auth-example.js (optional)
// This file is a short example showing how you could set up a MySQL connection
// for storing users while using MongoDB for listings. It's intentionally simple.
// Use environment variables and proper hashing/sanitization in production.

const mysql = require('mysql2/promise');
require('dotenv').config();

async function getConnection(){
  const conn = await mysql.createConnection({
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DATABASE || 'trip_vista_users'
  });
  return conn;
}

module.exports = { getConnection };
