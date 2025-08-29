"use client";

import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import Button from "./components/Button";

export default function Home() {
  return (
    <>
      {/* Yükleme Ekranı */}
      <Loading />

      {/* Navbar en üstte */}
      <Navbar />

      {/* Ana içerik */}
      <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Tekin Wear Logo"
          className="w-40 h-auto mb-6"
        />

        {/* Başlık */}
        <h1 className="text-4xl font-bold">Tekin Wear</h1>
        <p className="text-gray-400 mt-2">Güvenli Alışveriş</p>

        {/* Buton */}
        <div className="mt-6">
          <Button onClick={() => alert("Butona tıklandı!")}>
            Hemen Başla
          </Button>
        </div>
      </main>
    </>
  );
}
