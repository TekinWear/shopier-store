import Navbar from "./components/Navbar";
import Loading from "./components/Loading";

export default function Home() {
  return (
    <>
      {/* Yükleme Ekranı */}
      <Loading />

      {/* Navbar en üstte */}
      <Navbar />

      {/* Ana içerik */}
      <main className="flex min-h-screen items-center justify-center bg-black text-white flex-col">
        {/* Logo */}
        <img src="/logo.png" alt="Tekin Wear Logo" className="w-40 h-auto mb-6" />

        {/* Başlık */}
        <h1 className="text-4xl font-bold">Tekin Wear</h1>
        <p className="text-gray-400 mt-2">Güvenli Alışveriş</p>
      </main>
    </>
  );
}
