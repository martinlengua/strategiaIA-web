import { useScroll } from "../contexts/ScrollContext.jsx";

export default function Hero() {
  const { isDarkMode } = useScroll();

  return (
    <section id="top" className="w-full pt-28 sm:pt-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-sm font-medium mb-4">
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              IA Empresarial en LATAM
            </div>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight transition-colors duration-700 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Convertimos tu empresa en una organización AI Powered
            </h1>
            <p className={`mt-5 text-lg sm:text-xl leading-relaxed transition-colors duration-700 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
              De cuellos de botella a operaciones inteligentes y autónomas. Implementamos inteligencia artificial en el corazón de tu negocio para optimizar procesos, eliminar tareas repetitivas y escalar resultados, asegurando independencia tecnológica en pocos meses.

            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://cal.com/strategiaperu/interview"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl transform hover:scale-105 transition-all"
              >
                Agendar Llamada
              </a>
              <a
                href="#servicios"
                className={`inline-flex items-center justify-center px-6 py-3 rounded-xl bg-transparent font-semibold border border-gray-300 hover:border-gray-400 hover:bg-gray-100 transition-all transition-colors duration-700 ${isDarkMode ? "text-white border-gray-500" : "text-gray-900"}`}
              >
                Ver Servicios
              </a>
            </div>

          </div>
          <div className="relative">
            <div className="relative rounded-2xl border border-gray-200 bg-transparent shadow-xl overflow-hidden">
              <video
                src="/images/video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-72 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
 
              </div>
            </div>
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-40 h-40 bg-blue-100 rounded-2xl rotate-6 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureStat({ label, value, sub, isDarkMode }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-transparent p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className={`text-sm transition-colors duration-700 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{label}</div>
      <div className={`text-2xl font-bold transition-colors duration-700 ${isDarkMode ? "text-white" : "text-gray-900"}`}>{value}</div>
      <div className={`text-xs transition-colors duration-700 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{sub}</div>
    </div>
  );
}