import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Detecta si el fondo principal es oscuro
  const isDark = typeof window !== "undefined" && window.scrollY > 50;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors ${
        elevated
          ? isDark
            ? "bg-black/90 backdrop-blur border-b border-gray-700"
            : "bg-white/90 backdrop-blur border-b border-gray-200"
          : isDark
          ? "bg-black"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 group">
            <img
              src="/images/logostrategia.png"
              alt="Strategia Perú logo"
              className="h-8 w-8 rounded-md shadow-sm"
            />
            <span className="font-semibold text-lg tracking-tight group-hover:text-blue-600 transition-colors">Strategia Perú</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#metodologia" className="text-gray-700 hover:text-blue-600 transition-colors">Metodología</a>
            <a href="#pilares" className="text-gray-700 hover:text-blue-600 transition-colors">Pilares</a>
            <a href="#servicios" className="text-gray-700 hover:text-blue-600 transition-colors">Servicios</a>
            <a
              href="https://cal.com/strategiaperu/interview"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Agendar Llamada
            </a>
          </nav>

          <button
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
          >
            <svg className={`h-6 w-6 text-gray-900 transition-transform ${open ? "rotate-90" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-3 pb-3 border-t border-gray-200">
            <div className="flex flex-col gap-2 pt-3">
              <a onClick={() => setOpen(false)} href="#metodologia" className="px-2 py-2 rounded-md hover:bg-gray-50 transition-colors">Metodología</a>
              <a onClick={() => setOpen(false)} href="#pilares" className="px-2 py-2 rounded-md hover:bg-gray-50 transition-colors">Pilares</a>
              <a onClick={() => setOpen(false)} href="#servicios" className="px-2 py-2 rounded-md hover:bg-gray-50 transition-colors">Servicios</a>
              <a
                href="https://cal.com/strategiaperu/interview"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 shadow-md transition-colors"
              >
                Agendar Llamada
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}