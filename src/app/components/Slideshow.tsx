"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = ["/model1.jpg", "/model2.jpg", "/model3.jpg"];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((p) => (p + 1) % images.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Slide ${index + 1}`}
          fill
          priority={index === 0}
          className={`absolute inset-0 object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          // SADECE model2.jpg için dikey hizayı biraz aşağı çekiyoruz:
          style={src.includes("model2.jpg") ? { objectPosition: "center 35%" } : undefined}
        />
      ))}
    </div>
  );
}
<div className="relative w-full h-[900px] overflow-hidden">
  ...
</div>
