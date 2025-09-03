"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type LoginForm = {
  identifier: string; // e-posta veya kullanıcı adı
  password: string;
};

export default function LoginPage() {
  const [form, setForm] = useState<LoginForm>({ identifier: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMsg(null);
    setLoading(true);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identifier: form.identifier, // backend ile aynı isim
          password: form.password,
        }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data?.message || "Giriş başarısız");

      setMsg(data?.message || "Giriş başarılı ✅");

      // ✅ Başarılı girişten sonra ürünler sayfasına yönlendir
      // Eğer /products yoksa burayı "/" yap.
      setTimeout(() => {
        router.push("/products");
      }, 1200);
    } catch (err: any) {
      setMsg(err?.message || "Bir hata oluştu ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[100vh] bg-animated relative">
      {/* Yumuşak grid efektli overlay */}
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

        {/* Form kartı */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-black/55 backdrop-blur-sm rounded-2xl shadow-xl p-6 space-y-4 text-white"
        >
          {/* E-posta veya kullanıcı adı */}
          <div>
            <label className="block mb-1 text-sm text-white/85">
              E-posta veya Kullanıcı Adı
            </label>
            <input
              className="w-full rounded-lg bg-neutral-900 border border-white/10 px-3 py-2 outline-none
                         focus:ring-2 focus:ring-white/20 focus:border-white/30 placeholder-white/40"
              type="text"
              name="identifier"
              value={form.identifier}
              onChange={handleChange}
              placeholder="ornek@mail.com / tekinwear"
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
          {msg && <p className="text-center text-sm opacity-90 pt-1">{msg}</p>}

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
