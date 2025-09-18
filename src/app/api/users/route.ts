import { NextResponse } from "next/server";
import Database from "better-sqlite3";
import path from "path";
import bcrypt from "bcrypt";

// Path ke database
const dbPath = path.join(process.cwd(), "src/app/databases/e-commerce.db");
const db = new Database(dbPath);

interface User {
  id: number;
  username: string;
  password_hash: string;
  created_at: string;
}

// ========================
// Ambil semua user (GET)
// ========================
export async function GET() {
  const stmt = db.prepare("SELECT id, username, created_at FROM users");
  const users = stmt.all();
  return NextResponse.json(users);
}

// ========================
// Register user baru (POST)
// ========================
export async function POST(req: Request) {
  const body = await req.json();

  // kalau body ada "username" dan "password" → anggap REGISTER
  if (body.username && body.password && !body.login) {
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json(
        { error: "Username & password required" },
        { status: 400 }
      );
    }

    const passwordHash = await bcrypt.hash(password, 10);

    try {
      const stmt = db.prepare(
        "INSERT INTO users (username, password_hash) VALUES (?, ?)"
      );
      stmt.run(username, passwordHash);

      return NextResponse.json({ message: "User created successfully" });
    } catch (err: unknown) {
      if (err instanceof Error) {
        return NextResponse.json({ error: err.message }, { status: 500 });
      }
      return NextResponse.json({ error: "Unknown error" }, { status: 500 });
    }
  }

  // kalau body ada "username" dan "password" + "login" → anggap LOGIN
  if (body.username && body.password && body.login) {
    const { username, password } = body;

    const stmt = db.prepare("SELECT * FROM users WHERE username = ?");
    const user = stmt.get(username) as User | undefined;

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 401 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    return NextResponse.json({ message: "Login success", user });
  }

  return NextResponse.json({ error: "Invalid request" }, { status: 400 });
}
