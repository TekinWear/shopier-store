"use client";

import { useState, useEffect } from "react";

const IMAGES = ["/model1.jpg", "/model2.jpg", "/model3.jpg"] as const;

export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((p) => (p + 1) % IMAGES.length);
    }, 3500);

    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative w-full bg-black">
      {/* Üst siyah alan */}
      <div className="w-full h-16 bg-black"></div>

      {/* Slides */}
      <div className="relative w-full h-[calc(100vh-8rem)] overflow-hidden">
        {IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Slide ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex space-x-2">
        {IMAGES.map((_, i) => (
          <span
            key={i}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              i === current ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>

      {/* Alt siyah alan */}
      <div className="w-full h-16 bg-black"></div>
    </section>
  );
}
