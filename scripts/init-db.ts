import Database from "better-sqlite3";
import path from "path";
import fs from "fs";
import bcrypt from "bcrypt";

// ======================PEMBERITAHUAN======================
// Jika melakukan perubahan di file init-db.ts
// Maka harus menjalankan perintah `npx tsx scripts/init-db.ts`
//==========================================================

// path ke folder databases
const dbDir = path.join(__dirname, "../src/app/databases");
const dbPath = path.join(dbDir, "e-commerce.db");

// pastikan foldernya ada
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const db = new Database(dbPath);

// IF NOT EXISTS → Supaya tidak error kalau tabel users sudah ada, maka tidak akan dibuat ulang
// PRIMARY KEY → Menandakan kolom ini sebagai kunci utama tabel, artinya tidak boleh duplikat dan harus unik
// AUTOINCREMENT berarti nilai id akan otomatis bertambah setiap kali menambah produk baru
// NOT NULL = wajib diisi, tidak boleh kosong
// UNIQUE → Tidak boleh ada username yang sama, sehingga tiap user punya username berbeda
// DEFAULT CURRENT_TIMESTAMP → Secara otomatis akan menyimpan waktu sekarang saat data user ditambahkan

// ======================Tabel User======================
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

// ======================Tabel Product======================
db.prepare(
  `
  CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT,
  price REAL NOT NULL,
  category TEXT NOT NULL,
  image_url TEXT,
  rating REAL DEFAULT 0,
  sold INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`
).run();

db.prepare(
  `
  INSERT INTO products (name, description, price, category, image_url, rating, sold)
VALUES
('Headphones', 'High quality headphones', 79.99, 'Electronics', '/public/images/items_1.jpg', 5.0, 1),
('Cotton T-Shirt', 'This premium cotton t-shirt is designed for comfort and durability. Made from soft, breathable cotton, it is perfect for everyday wear. The classic fit and timeless design make it a versatile addition to any wardrobe. Available in a range of colors and sizes to suit your style.', 19.99, 'Clothing', '/public/images/items_2.jpg', 5.0, 10),
('Stainless Cookware', 'Durable stainless steel cookware', 39.99, 'Home & Kitchen', '/public/images/items_3.jpg', 5.0, 5),
('Mystery Novel', 'A thrilling mystery novel', 13.99, 'Books', '/public/images/items_4.jpg', 4.0, 3),
('Smartwatch', 'Feature-rich smartwatch', 139.99, 'Electronics', '/public/images/items_5.jpg', 5.0, 52),
('Denim Jeans', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, sequi.', 49.99, 'Clothing', '/public/images/items_6.jpg', 5.0, 50),
('Blender', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, sequi.', 139.99, 'Electronics', '/public/images/items_7.jpg', 4.2, 20),
('Fiction Book', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, sequi.', 29.99, 'Books', '/public/images/items_8.jpg', 4.2, 27),
('Bluetooth Speaker', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, sequi.', 123.99, 'Electronics', '/public/images/items_9.jpg', 5.0, 33),
('Leather Wallet', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, sequi.', 23.99, 'Clothing', '/public/images/items_10.jpg', 5.0, 13);

  `
).run();
