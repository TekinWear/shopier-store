"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

type SignupForm = {
  username: string;
  email: string;
  phone: string;
  password: string;
};

export default function SignupPage() {
  const [form, setForm] = useState<SignupForm>({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMsg(null);
    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Kayıt başarısız ❌");

      setMsg("Kayıt başarılı ✅");
      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } catch (err: any) {
      setMsg(err.message || "Bir hata oluştu ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 to-purple-900 px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/20">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="/logo.png"
            alt="TEKİN WEAR"
            className="w-20 h-20 rounded-md shadow-md"
          />
          <h1 className="text-white text-2xl font-bold mt-3 tracking-wide">
            TEKİN WEAR
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Kullanıcı Adı */}
          <div>
            <label className="block text-sm text-white/80 mb-1">
              Kullanıcı Adı
            </label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="örn. selcuk12"
              required
              className="w-full rounded-lg bg-white/15 border border-white/20 px-3 py-2 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-white/80 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="ornek@email.com"
              required
              className="w-full rounded-lg bg-white/15 border border-white/20 px-3 py-2 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Telefon */}
          <div>
            <label className="block text-sm text-white/80 mb-1">Telefon</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="05xx xxx xx xx"
              required
              className="w-full rounded-lg bg-white/15 border border-white/20 px-3 py-2 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Şifre */}
          <div>
            <label className="block text-sm text-white/80 mb-1">Şifre</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full rounded-lg bg-white/15 border border-white/20 px-3 py-2 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Mesaj */}
          {msg && (
            <p className="text-center text-sm text-white mt-2">{msg}</p>
          )}

          {/* Buton */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 mt-4 bg-purple-500 hover:bg-purple-600 rounded-lg text-white font-semibold shadow-lg transition disabled:opacity-60"
          >
            {loading ? "Gönderiliyor..." : "Kayıt Ol"}
          </button>
        </form>
      </div>
    </div>
  );
}
