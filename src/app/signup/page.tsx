"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type LoginForm = {
  username: string;
  password: string;
};

export default function LoginPage() {
  const [form, setForm] = useState<LoginForm>({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMsg(null);
    setLoading(true);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data?.error || "Giriş başarısız ❌");

      setMsg("Giriş başarılı ✅");

      // ✅ Başarılı giriş → anasayfaya yönlendir
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (err: any) {
      setMsg(err?.message || "Bir hata oluştu ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[100vh] bg-animated relative">
      {/* Grid efektli arka plan */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <main className="container mx-auto px-4 py-16 flex flex-col items-center">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="TEKİN WEAR"
          className="w-24 h-24 rounded-md shadow-lg mb-4"
        />

        {/* Marka adı */}
        <h1 className="text-white/90 text-2xl font-bold tracking-wide mb-6">
          TEKİN WEAR
        </h1>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-black/55 backdrop-blur-sm rounded-2xl shadow-xl p-6 space-y-4 text-white"
        >
          {/* Kullanıcı adı */}
          <div>
            <label className="block mb-1 text-sm text-white/85">
              Kullanıcı Adı
            </label>
            <input
              className="w-full rounded-lg bg-neutral-900 border border-white/10 px-3 py-2 outline-none 
              focus:ring-2 focus:ring-white/20 focus:border-white/30 placeholder-white/40"
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="ör. tekinwear"
              required
            />
          </div>

          {/* Şifre */}
          <div>
            <label className="block mb-1 text-sm text-white/85">Şifre</label>
            <input
              className="w-full rounded-lg bg-neutral-900 border border-white/10 px-3 py-2 outline-none 
              focus:ring-2 focus:ring-white/20 focus:border-white/30 placeholder-white/40"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
            />
          </div>

          {/* Mesaj */}
          {msg && (
            <p className="text-center text-sm opacity-90 pt-1">{msg}</p>
          )}

          {/* Buton */}
          <button
            disabled={loading}
            className="w-full rounded-lg bg-white text-black font-semibold py-2 disabled:opacity-60"
            type="submit"
          >
            {loading ? "Gönderiliyor..." : "Giriş Yap"}
          </button>
        </form>
      </main>
    </div>
  );
}
