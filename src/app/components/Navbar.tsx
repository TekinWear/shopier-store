"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Tekin Wear Logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold">Tekin Wear</span>
        </Link>

        {/* Menü */}
        <ul className="flex items-center gap-8">
          {/* Ana Sayfa */}
          <li>
            <Link href="/" className="hover:text-gray-300 transition">
              Ana Sayfa
            </Link>
          </li>

          {/* Hakkımızda */}
          <li className="relative">
            <span
              onClick={() => toggleMenu("hakkimizda")}
              className="cursor-pointer hover:text-gray-300 transition"
            >
              Hakkımızda
            </span>
            {openMenu === "hakkimizda" && (
              <div className="absolute left-0 mt-2 bg-black text-white p-4 rounded-lg shadow-lg">
                <p>Hakkımızda içeriği buraya gelecek</p>
              </div>
            )}
          </li>

          {/* Ürünler */}
          <li className="relative">
            <span
              onClick={() => toggleMenu("urunler")}
              className="cursor-pointer hover:text-gray-300 transition"
            >
              Ürünler
            </span>
            {openMenu === "urunler" && (
              <div className="absolute left-0 mt-2 bg-black text-white p-4 rounded-lg shadow-lg">
                <p>Ürünler içeriği buraya gelecek</p>
              </div>
            )}
          </li>

          {/* İletişim */}
          <li className="relative">
            <span
              onClick={() => toggleMenu("iletisim")}
              className="cursor-pointer hover:text-gray-300 transition"
            >
              İletişim
            </span>
            {openMenu === "iletisim" && (
              <div className="absolute left-0 mt-2 bg-black text-white p-4 rounded-lg shadow-lg w-64">
                {/* WhatsApp */}
                <Link
                  href="https://wa.me/905431080766"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-green-400 transition"
                >
                  <FaWhatsapp className="text-lg" />
                  <span>0543 108 0766</span>
                </Link>

                {/* Mail */}
                <Link
                  href="mailto:selcuktekinbnr@gmail.com"
                  className="flex items-center gap-2 hover:text-red-400 transition mt-2"
                >
                  <FaEnvelope className="text-lg" />
                  <span>selcuktekinbnr@gmail.com</span>
                </Link>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
