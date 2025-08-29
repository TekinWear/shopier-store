export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white px-8 py-4 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Tekin Wear Logo" className="w-12 h-auto" />
        <span className="text-xl font-bold">Tekin Wear</span>
      </div>

      {/* Menü */}
      <ul className="flex gap-6">
        <li className="hover:text-gray-400 cursor-pointer">Ana Sayfa</li>
        <li className="hover:text-gray-400 cursor-pointer">Ürünler</li>
        <li className="hover:text-gray-400 cursor-pointer">Hakkımızda</li>
        <li className="hover:text-gray-400 cursor-pointer">İletişim</li>
        <li className="hover:text-green-400 cursor-pointer">🛒 Sepet</li>
      </ul>
    </nav>
  )
}
