"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden">
      {/* Arka plan animasyonu */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-800/30 via-transparent to-purple-600/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        {/* Başlık */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold leading-tight"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Alışverişin <span className="text-purple-500">Yeni Dünyası</span>
        </motion.h1>

        {/* Açıklama */}
        <motion.p
          className="mt-6 text-lg md:text-2xl text-gray-300"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          En kaliteli ürünleri, en uygun fiyatlarla bulabileceğiniz modern e-ticaret deneyimine hoş geldiniz.
        </motion.p>

        {/* Butonlar */}
        <motion.div
          className="mt-10 flex flex-col md:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a
            href="#urunler"
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-lg rounded-xl shadow-lg transition transform hover:scale-105"
          >
            Şimdi Keşfet
          </a>
          <a
            href="#hakkimizda"
            className="px-8 py-4 border border-gray-400 hover:border-purple-500 hover:text-purple-400 text-lg rounded-xl transition transform hover:scale-105"
          >
            Daha Fazla Bilgi
          </a>
        </motion.div>
      </div>
    </section>
  );
}
