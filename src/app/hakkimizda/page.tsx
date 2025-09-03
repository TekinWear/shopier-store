export default function Hakkimizda() {
  return (
    <section className="bg-black text-white py-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Sol Taraf: Görsel */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/hakkimizda.jpg"
            alt="Tekin Wear Hakkımızda"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Sağ Taraf: Metin */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Hakkımızda</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Tekin Wear, modern ve yenilikçi tasarımlarıyla moda dünyasına yön veren bir markadır. 
            Müşterilerimize kaliteli, özgün ve şık ürünler sunarak tarzlarını en iyi şekilde ifade etmelerini sağlıyoruz.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Misyonumuz, herkese ulaşılabilir moda sunmak; vizyonumuz ise global ölçekte ilham veren bir marka olmaktır.
          </p>
        </div>

      </div>
    </section>
  );
}
