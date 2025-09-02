import { NextResponse } from "next/server";
import clientPromise from "../../lib/mongodb";
import bcrypt from "bcryptjs";

export const POST = async (req: Request) => {
  try {
    const { email, password, username, phone } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "E-posta ve şifre zorunludur!" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("shopierDB");
    const users = db.collection("users");

    // kullanıcı var mı kontrol
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Bu e-posta ile zaten kayıtlı kullanıcı var!" },
        { status: 400 }
      );
    }

    // şifreyi hashle
    const hashedPassword = await bcrypt.hash(password, 10);

    // yeni kullanıcı kaydet
    await users.insertOne({
      email,
      password: hashedPassword,
      username,
      phone,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { message: "Kayıt başarılı!" },
      { status: 201 }
    );

  } catch (error: any) {
    console.error("Register Error:", error);
    return NextResponse.json(
      { error: error.message || "Bir hata oluştu!" },
      { status: 500 }
    );
  }
};
