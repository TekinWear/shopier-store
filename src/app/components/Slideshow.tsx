const IMAGES = ["/model1.jpg", "/model2.jpg", "/model3.jpg"] as const;

import { useState, useEffect } from "react";

export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((p) => (p + 1) % IMAGES.length);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  return (
   <section className="relative w-full bg-purple-900">
      {/* Slides */}
      <div className="relative w-full h-[90vh] overflow-hidden">
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
    </section>
  );
}
