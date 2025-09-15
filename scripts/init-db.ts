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
// IF NOT EXISTS → Supaya tidak error kalau tabel users sudah ada, maka tidak akan dibuat ulang
// PRIMARY KEY → Menandakan kolom ini sebagai kunci utama tabel, artinya tidak boleh duplikat dan harus unik
// AUTOINCREMENT berarti nilai id akan otomatis bertambah setiap kali menambah produk baru
// NOT NULL = wajib diisi, tidak boleh kosong
// UNIQUE → Tidak boleh ada username yang sama, sehingga tiap user punya username berbeda
// DEFAULT CURRENT_TIMESTAMP → Secara otomatis akan menyimpan waktu sekarang saat data user ditambahkan
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
