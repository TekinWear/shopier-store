"use client";

import { useState } from "react";

export default function SignupPage() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
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
      if (!res.ok) throw new Error(data?.error || "Hata");
      setMsg(data.message || "Kayıt başarılı");
      setForm({ username: "", email: "", password: "", phone: "" });
    } catch (err: any) {
      setMsg(err.message || "Bir hata oluştu");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-[calc(100vh-64px)] flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4 bg-black/60 text-white p-6 rounded-xl"
      >
        <h1 className="text-2xl font-bold text-center">Kayıt Ol</h1>

        <input
          className="w-full px-3 py-2 rounded bg-neutral-800"
          placeholder="Kullanıcı adı"
          name="username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
          className="w-full px-3 py-2 rounded bg-neutral-800"
          placeholder="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          className="w-full px-3 py-2 rounded bg-neutral-800"
          placeholder="Şifre"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <input
          className="w-full px-3 py-2 rounded bg-neutral-800"
          placeholder="Telefon"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <button
          disabled={loading}
          className="w-full py-2 rounded bg-white text-black font-semibold disabled:opacity-60"
        >
          {loading ? "Gönderiliyor..." : "Kayıt Ol"}
        </button>

        {msg && (
          <p className="text-center text-sm opacity-90">{msg}</p>
        )}
      </form>
    </main>
  );
}
