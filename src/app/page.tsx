import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import Button from "./components/Button";
import Slideshow from "./components/Slideshow"; // ✅ burayı ekle

export default function Home() {
  return (
    <>
      <Loading />
      <Navbar />

      <Slideshow />   {/* ✅ burada çağırdık */}

      <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
        <img
          src="/logo.png"
          alt="Tekin Wear Logo"
          className="w-40 h-auto mb-6"
        />
        <h1 className="text-4xl font-bold">Tekin Wear</h1>
        <p className="text-gray-400 mt-2">Güvenli Alışveriş</p>
        <div className="mt-6">
          <Button>Hemen Başla</Button>
        </div>
      </div>
    </>
  );
}
