import { useScroll } from "../contexts/ScrollContext.jsx";

export default function Footer() {
  const { isDarkMode } = useScroll();

  return (
    <footer className={`w-full bg-transparent transition-colors duration-700 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <img
                src="/images/logostrategia.png"
                alt="Strategia Perú logo"
                className="h-8 w-8 rounded-md"
              />
              <span className={`font-semibold transition-colors duration-700 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Strategia Perú</span>
            </div>
            <p className={`mt-3 transition-colors duration-700 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
              Convertimos tu empresa en una organización AI Powered.
            </p>
          </div>

          <div className="md:col-span-2 grid sm:grid-cols-3 gap-8">
            <div>
              <h4 className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-700 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Secciones</h4>
              <ul className="mt-3 space-y-2">
                <li><a href="#metodologia" className={`hover:text-white transition-colors ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>Metodología</a></li>
                <li><a href="#pilares" className={`hover:text-white transition-colors ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>Pilares</a></li>
                <li><a href="#servicios" className={`hover:text-white transition-colors ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>Servicios</a></li>
              </ul>
            </div>
            <div>
              <h4 className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-700 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Acciones</h4>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href="https://cal.com/strategiaperu/interview"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:text-white transition-colors ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}
                  >
                    Agendar Llamada
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-700 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Legal</h4>
              <ul className="mt-3 space-y-2">
                <li>
                  <span className={`transition-colors duration-700 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                    © {new Date().getFullYear()} Strategia Perú
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`mt-10 border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors duration-700 ${isDarkMode ? "border-gray-700" : "border-gray-300"}`}>
          <p className={`text-sm transition-colors duration-700 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Sé una empresa AI Powered</p>
          <a
            href="https://cal.com/strategiaperu/interview"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
          >
            Agendar Llamada
          </a>
        </div>
      </div>
    </footer>
  );
}