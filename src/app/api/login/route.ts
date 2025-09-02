import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";
import bcrypt from "bcryptjs";

export const POST = async (req: Request) => {
  try {
    const { emailOrUsername, password } = await req.json();

    const client = await clientPromise;
    const db = client.db("test"); // kendi DB adını yazabilirsin
    const users = db.collection("users");

    // Hem email hem username ile kontrol et
    const user = await users.findOne({
      $or: [{ email: emailOrUsername }, { username: emailOrUsername }],
    });

    if (!user) {
      return NextResponse.json(
        { message: "Kullanıcı bulunamadı" },
        { status: 404 }
      );
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return NextResponse.json(
        { message: "Şifre hatalı" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        message: "Giriş başarılı",
        user: { email: user.email, username: user.username },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Sunucu hatası" }, { status: 500 });
  }
};
