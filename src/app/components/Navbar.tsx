"use client";

import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Tekin Wear Logo" width={40} height={40} />
          <span className="text-xl font-bold">Tekin Wear</span>
        </Link>

        {/* Menü */}
        <ul className="flex items-center gap-8">
          <li>
            <Link href="/" className="hover:text-gray-300 transition">
              Ana Sayfa
            </Link>
          </li>

          <li>
            <Link href="/hakkimizda" className="hover:text-gray-300 transition">
              Hakkımızda
            </Link>
          </li>

          <li>
            <Link href="/urunler" className="hover:text-gray-300 transition">
              Ürünler
            </Link>
          </li>

          {/* İletişim (Dropdown) */}
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
                  className="flex items-center gap-2 hover:text-green-400 transition mb-2"
                >
                  <FaWhatsapp className="text-lg" />
                  <span>0543 108 0766</span>
                </Link>

                {/* Mail */}
                <Link
                  href="mailto:selcuktekinbr@gmail.com"
                  className="flex items-center gap-2 hover:text-red-400 transition"
                >
                  <FaEnvelope className="text-lg" />
                  <span>selcuktekinbr@gmail.com</span>
                </Link>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
