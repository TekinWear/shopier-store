import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { email, password, username } = await req.json();

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const users = db.collection("users");

    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "Bu email zaten kayıtlı" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await users.insertOne({
      email,
      password: hashedPassword,
      username,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "Kayıt başarılı" }, { status: 201 });
  } catch (error) {
    console.error("Register API error:", error);
    return NextResponse.json({ message: "Sunucu hatası" }, { status: 500 });
  }
}
