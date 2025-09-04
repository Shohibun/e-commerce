import { NextResponse } from "next/server";
import db from "@/lib/db";
import bcrypt from "bcrypt";

interface User {
  id: number;
  username: string;
  password_hash: string;
  created_at: string;
}

export async function POST(req: Request) {
  const { username, password } = await req.json();

  // Ambil user, tapi force typing manual
  const stmt = db.prepare("SELECT * FROM users WHERE username = ?");
  const user = stmt.get(username) as User | undefined;

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 401 });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password_hash);

  if (!isPasswordValid) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  return NextResponse.json({ message: "Login success", user });
}
