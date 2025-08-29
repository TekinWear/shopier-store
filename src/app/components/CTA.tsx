"use client";

import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-purple-600 to-indigo-600 text-white relative overflow-hidden">
      {/* Arka Plan Efekti */}
      <motion.div
        className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
      />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Başlık */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Haydi, Alışverişe Başla! 🛒
        </motion.h2>

        {/* Açıklama */}
        <motion.p
          className="text-lg text-gray-100 mb-10 max-w-2xl mx-auto"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          En trend kıyafetler, ayakkabılar ve aksesuarlar seni bekliyor. Hemen
          Shopier üzerinden güvenle sipariş verebilirsin.
        </motion.p>

        {/* Buton */}
        <motion.a
          href="https://shopier.com" // 🔴 Buraya senin Shopier mağaza linkin gelecek!
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold bg-white text-purple-600 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ShoppingCart className="w-6 h-6" />
          Şimdi Alışveriş Yap
        </motion.a>
      </div>
    </section>
  );
}
