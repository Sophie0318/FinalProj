import mysql from 'mysql2/promise';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
// import dotenv from 'dotenv';

// dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function runSqlFile(connection, filePath) {
  const sqlFile = await fs.readFile(filePath, 'utf8');
  const sqlStatements = sqlFile.split(';').filter(statement => statement.trim() !== '');

  for (const statement of sqlStatements) {
    await connection.query(statement);
  }

  console.log(`Executed SQL file: ${path.basename(filePath)}`);
}

async function initDB() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
  });

  try {
    const sqlDir = __dirname;
    // const sqlDir = path.join(__dirname, 'data');
    const files = await fs.readdir(sqlDir);

    // Sort files to ensure they're executed in order
    const sqlFiles = files.filter(file => file.endsWith('.sql')).sort();

    for (const file of sqlFiles) {
      await runSqlFile(connection, path.join(sqlDir, file));
    }

    console.log('All SQL scripts executed successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  } finally {
    await connection.end();
  }
}

initDB();