"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setMessage(data.message);

    if (res.ok) {
      console.log("Giriş başarılı:", data.user);
      // burada örn. yönlendirme yapabilirsin: window.location.href = "/";
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-purple-900">
      <form
        onSubmit={handleLogin}
        className="bg-purple-800 p-6 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-center text-2xl font-bold text-white mb-4">Giriş Yap</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 p-2 rounded bg-purple-700 text-white"
          required
        />

        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 p-2 rounded bg-purple-700 text-white"
          required
        />

        <button
          type="submit"
          className="w-full bg-white text-purple-900 font-bold py-2 rounded hover:bg-gray-200"
        >
          Giriş Yap
        </button>

        {message && (
          <p className="text-center text-sm text-white mt-3">{message}</p>
        )}
      </form>
    </div>
  );
}
