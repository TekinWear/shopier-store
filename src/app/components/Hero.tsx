"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  // Şimdilik sahte kullanıcı kontrolü
  const isLoggedIn = false;

  const handleStartShopping = () => {
    if (isLoggedIn) {
      router.push("/login"); // Kullanıcı zaten kayıtlıysa login sayfası
    } else {
      router.push("/signup"); // Kayıtlı değilse signup sayfası
    }
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden">
      {/* Arka plan efekti */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-purple-800/30 via-transparent to-purple-600/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      {/* İçerik */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        {/* Başlık */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold leading-tight"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Alışverişin{" "}
          <span className="text-purple-500">Yeni Dünyası</span>
        </motion.h1>

        {/* Açıklama */}
        <motion.p
         
         className="mt-6 text-lg md:text-2xl text-purple-200"

          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          En kaliteli ürünleri, en uygun fiyatlarla bulabileceğiniz modern
          e-ticaret deneyimine hoş geldiniz.
        </motion.p>

        {/* Buton */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <button
            onClick={handleStartShopping}
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-lg rounded-xl shadow-lg transition transform hover:scale-105"
          >
            Alışverişe Başla
          </button>
        </motion.div>
      </div>
    </section>
  );
}
