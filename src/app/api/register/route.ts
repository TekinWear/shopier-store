import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { username, email, password, phone } = await req.json();

    // Alan kontrolü
    if (!username || !email || !password || !phone) {
      return NextResponse.json(
        { error: "Tüm alanlar zorunlu!" },
        { status: 400 }
      );
    }

    // DB bağlantısı
    const client = await clientPromise;
    const db = client.db("shopierdb");
    const users = db.collection("users");

    // Email zaten kayıtlı mı?
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Bu email zaten kayıtlı." },
        { status: 400 }
      );
    }

    // Şifreyi hashle
    const hashedPassword = await bcrypt.hash(password, 10);

    // Kullanıcı ekle
    await users.insertOne({
      username,
      email,
      password: hashedPassword,
      phone,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { message: "Kayıt başarılı ✅" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Bir hata oluştu ❌" },
      { status: 500 }
    );
  }
}
