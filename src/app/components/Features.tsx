"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Truck, ShieldCheck, Headphones } from "lucide-react";

const features = [
  {
    icon: ShoppingBag,
    title: "Geniş Ürün Yelpazesi",
    description: "Binlerce üründen ihtiyacına en uygununu kolayca bulabilirsin.",
  },
  {
    icon: Truck,
    title: "Hızlı ve Güvenilir Kargo",
    description: "Siparişlerin en kısa sürede özenle paketlenir ve adresine ulaşır.",
  },
  {
    icon: ShieldCheck,
    title: "Güvenli Alışveriş",
    description: "Tüm ödemeler SSL sertifikalı, %100 güvenli altyapı ile korunur.",
  },
  {
    icon: Headphones,
    title: "7/24 Müşteri Desteği",
    description: "Her zaman yanındayız. Sorularını anında çözmek için buradayız.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Başlık */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Neden Bizi Tercih Etmelisin?
        </motion.h2>

        <motion.p
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Shopier Store olarak sana en iyi alışveriş deneyimini sunmak için buradayız.
        </motion.p>

        {/* Özellikler Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="p-8 bg-gray-800 rounded-2xl shadow-lg hover:shadow-purple-500/20 transition transform hover:scale-105"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="flex justify-center mb-6">
                  <Icon className="w-12 h-12 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
