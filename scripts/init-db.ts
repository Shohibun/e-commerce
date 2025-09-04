import Database from "better-sqlite3";
import path from "path";
import fs from "fs";
import bcrypt from "bcrypt";

// path ke folder databases
const dbDir = path.join(__dirname, "../src/app/databases");
const dbPath = path.join(dbDir, "e-commerce.db");

// pastikan foldernya ada
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const db = new Database(dbPath);

// Buat tabel users
db.prepare(
  `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`
).run();

// Hash password default
const defaultPassword = "shohibun123";
const passwordHash = bcrypt.hashSync(defaultPassword, 10);

// Insert user default (jika belum ada)
db.prepare(
  `
  INSERT OR IGNORE INTO users (username, password_hash)
  VALUES (?, ?)
`
).run("shohibun", passwordHash);

console.log("Database initialized at:", dbPath);
console.log("Default login → username: shohibun, password:", defaultPassword);
