"use client";

import Navbar from "./components/Navbar";
import Slideshow from "./components/Slideshow";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Slideshow (buton burada var) */}
      <Slideshow />

      {/* Hero Section */}
      <section className="py-16">
        <Hero />
      </section>

      {/* Features / Products */}
      <section className="py-16">
        <Features />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
