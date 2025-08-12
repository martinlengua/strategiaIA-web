import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Methodology from "./components/Methodology.jsx";
import Features from "./components/Features.jsx";
import Services from "./components/Services.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-700 ${
        scrolled ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      <Header />
      <main className="w-full">
        <Hero />
        <section id="metodologia" className="w-full">
          <Methodology />
        </section>
        <section id="pilares" className="w-full">
          <Features />
        </section>
        <section id="servicios" className="w-full">
          <Services />
        </section>
      </main>
      <Footer />
    </div>
  );
}