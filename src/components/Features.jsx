import { useScroll } from "../contexts/ScrollContext.jsx";

export default function Features() {
  const { isDarkMode } = useScroll();

  return (
    <section className="w-full py-16 sm:py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Nuestros Pilares</p>
          <h2 className={`mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight transition-colors duration-700 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Transformación AI Integral
          </h2>
          <p className={`mt-4 text-lg transition-colors duration-700 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
            Nuestro enfoque se basa en cuatro pilares fundamentales que garantizan una implementación exitosa de IA en tu organización.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeaturePillar
            title="Estrategia"
            description="Análisis profundo de procesos actuales y diseño de roadmap personalizado para maximizar el ROI."
            icon={
              <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            isDarkMode={isDarkMode}
          />
          
          <FeaturePillar
            title="Implementación"
            description="Desarrollo e integración de soluciones de IA personalizadas que se adaptan a tu infraestructura."
            icon={
              <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            isDarkMode={isDarkMode}
          />
          
          <FeaturePillar
            title="Capacitación"
            description="Formación integral de equipos para crear una cultura AI-First en toda la organización."
            icon={
              <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            }
            isDarkMode={isDarkMode}
          />
          
          <FeaturePillar
            title="Autonomía"
            description="Transferencia de conocimiento para lograr independencia tecnológica y escalabilidad sostenible."
            icon={
              <svg className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            }
            isDarkMode={isDarkMode}
          />
        </div>
      </div>
    </section>
  );
}

function FeaturePillar({ title, description, icon, isDarkMode }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-transparent p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-xl bg-gray-100 flex items-center justify-center">
          {icon}
        </div>
        <h3 className={`text-xl font-semibold transition-colors duration-700 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
          {title}
        </h3>
      </div>
      <p className={`flex-1 transition-colors duration-700 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
        {description}
      </p>
    </div>
  );
}