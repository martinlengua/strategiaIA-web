import { useState } from "react";
import { useScroll } from "../contexts/ScrollContext.jsx";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { scrollY, isDarkMode } = useScroll();
  
  // Header elevation when scrolled past 8px
  const elevated = scrollY > 8;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors ${
        elevated
          ? isDarkMode
            ? "bg-black/90 backdrop-blur border-b border-gray-700"
            : "bg-white/90 backdrop-blur border-b border-gray-200"
          : isDarkMode
          ? "bg-black"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 group">
            <img
              src="/images/logostrategia.png" // <-- Update this path to your logo
              alt="Strategia Perú logo"
              className="h-8 w-8 rounded-md shadow-sm"
            />
            <span className={`font-semibold text-lg tracking-tight group-hover:text-blue-600 transition-colors ${isDarkMode ? "text-white" : "text-gray-900"}`}>Strategia Perú</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#metodologia" className={`transition-colors ${isDarkMode ? "text-gray-200 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"}`}>Metodología</a>
            <a href="#pilares" className={`transition-colors ${isDarkMode ? "text-gray-200 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"}`}>Pilares</a>
            <a href="#servicios" className={`transition-colors ${isDarkMode ? "text-gray-200 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"}`}>Servicios</a>
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
            className={`md:hidden inline-flex items-center justify-center p-2 rounded-md border transition-colors ${
              isDarkMode
                ? "border-gray-700 hover:border-gray-500 hover:bg-gray-800"
                : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
            }`}
          >
            <svg className={`h-6 w-6 transition-transform ${isDarkMode ? "text-white" : "text-gray-900"} ${open ? "rotate-90" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className={`md:hidden mt-3 pb-3 border-t transition-colors ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}>
            <div className="flex flex-col gap-2 pt-3">
              <a
                onClick={() => setOpen(false)}
                href="#metodologia"
                className={`px-2 py-2 rounded-md transition-colors ${isDarkMode ? "text-gray-200 hover:bg-gray-800" : "text-gray-900 hover:bg-gray-50"}`}
              >
                Metodología
              </a>
              <a
                onClick={() => setOpen(false)}
                href="#pilares"
                className={`px-2 py-2 rounded-md transition-colors ${isDarkMode ? "text-gray-200 hover:bg-gray-800" : "text-gray-900 hover:bg-gray-50"}`}
              >
                Pilares
              </a>
              <a
                onClick={() => setOpen(false)}
                href="#servicios"
                className={`px-2 py-2 rounded-md transition-colors ${isDarkMode ? "text-gray-200 hover:bg-gray-800" : "text-gray-900 hover:bg-gray-50"}`}
              >
                Servicios
              </a>
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