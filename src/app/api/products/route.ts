import { NextResponse } from "next/server";
import db from "@/lib/db";

// Ambil semua produk
export async function GET() {
  try {
    const stmt = db.prepare("SELECT * FROM products");
    const products = stmt.all();
    return NextResponse.json(products, { status: 200 });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
}

// Tambah produk baru
export async function POST(req: Request) {
  try {
    const { name, description, price, category, image_url } = await req.json();

    if (!name || !price || !category) {
      return NextResponse.json(
        { error: "Name, price, and category are required" },
        { status: 400 }
      );
    }

    const stmt = db.prepare(`
      INSERT INTO products (name, description, price, category, image_url)
      VALUES (?, ?, ?, ?, ?)
    `);

    const result = stmt.run(name, description, price, category, image_url);

    return NextResponse.json(
      { id: result.lastInsertRowid, name },
      { status: 201 }
    );
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
}
