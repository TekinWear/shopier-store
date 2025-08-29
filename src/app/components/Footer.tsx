"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 relative">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Logo ve Açıklama */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">TekinWear</h2>
          <p className="text-gray-400">
            En trend kıyafetleri ve ayakkabıları sana en hızlı şekilde ulaştırıyoruz.  
            Güvenli ödeme ve kaliteli hizmet bizim önceliğimizdir.
          </p>
        </motion.div>

        {/* Linkler */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col space-y-3"
        >
          <h3 className="text-lg font-semibold text-white mb-2">Hızlı Erişim</h3>
          <a href="#" className="hover:text-white transition">Ana Sayfa</a>
          <a href="#" className="hover:text-white transition">Ürünler</a>
          <a href="#" className="hover:text-white transition">Hakkımızda</a>
          <a href="#" className="hover:text-white transition">İletişim</a>
        </motion.div>

        {/* Sosyal Medya */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col space-y-4"
        >
          <h3 className="text-lg font-semibold text-white mb-2">Bizi Takip Et</h3>
          <div className="flex space-x-5">
            <a href="#" className="hover:text-white transition">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white transition">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white transition">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Alt Telif Yazısı */}
      <motion.div
        className="mt-10 text-center text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        © {new Date().getFullYear()} TekinWear. Tüm hakları saklıdır.
      </motion.div>
    </footer>
  );
}
