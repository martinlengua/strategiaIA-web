import { useEffect, useState } from "react";

export default function Methodology() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => setDark(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full py-16 sm:py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight transition-colors duration-700 ${dark ? "text-white" : "text-gray-900"}`}>Metodología LIMA</h2>
          {/* Línea de pasos TIMA en una sola línea */}
          <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-4">
            <StepLabel dark={dark}>Localización</StepLabel>
            <ArrowIcon dark={dark} />
            <StepLabel dark={dark}>Implementación</StepLabel>
            <ArrowIcon dark={dark} />
            <StepLabel dark={dark}>Monitoreo</StepLabel>
            <ArrowIcon dark={dark} />
            <StepLabel dark={dark}>Autonomía</StepLabel>
          </div>
          {/* Beneficios */}
          <div className="mt-6">
            <h3 className={`text-xl font-bold transition-colors duration-700 ${dark ? "text-white" : "text-gray-900"}`}>Beneficios de ser AI Powered</h3>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li className={`transition-colors duration-700 ${dark ? "text-gray-200" : "text-gray-700"}`}>Procesos más rápidos y eficientes</li>
              <li className={`transition-colors duration-700 ${dark ? "text-gray-200" : "text-gray-700"}`}>Reducción de costos operativos</li>
              <li className={`transition-colors duration-700 ${dark ? "text-gray-200" : "text-gray-700"}`}>Decisiones basadas en datos en tiempo real</li>
              <li className={`transition-colors duration-700 ${dark ? "text-gray-200" : "text-gray-700"}`}>Escalabilidad sin fricciones</li>
              <li className={`transition-colors duration-700 ${dark ? "text-gray-200" : "text-gray-700"}`}>Independencia tecnológica</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Step
            title="Localización"
            desc="Mapeamos procesos mediante un triaje o onboarding, detectamos con precisión dónde la IA generará el mayor impacto y priorizamos acciones con ROI rápido."
            color="bg-blue-50 text-blue-700 border-blue-200"
            dark={dark}
            icon={
              <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            }
          />
          <Step
            title="Implementación"
            desc="Conectamos soluciones de IA personalizadas a tu operación para que formen parte de tu ADN empresarial."
            color="bg-green-50 text-green-700 border-green-200"
            dark={dark}
            icon={
              <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-4-4h8" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          <Step
            title="Monitoreo"
            desc="Medimos y optimizamos continuamente para mantener y mejorar resultados."
            color="bg-purple-50 text-purple-700 border-purple-200"
            dark={dark}
            icon={
              <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
              </svg>
            }
          />
          <Step
            title="Autonomía"
            desc="Transferimos el control a tu equipo para que escale y gestione la IA sin depender de terceros."
            color="bg-yellow-50 text-yellow-700 border-yellow-200"
            dark={dark}
            icon={
              <svg className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
              </svg>
            }
          />          
        </div>
      </div>
    </div>
  );
}

function Step({ title, desc, color, icon, dark }) {
  return (
    <div className={`rounded-2xl border ${color} bg-transparent p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col`}>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-gray-100 flex items-center justify-center">
          {icon}
        </div>
        <h3 className={`text-xl font-semibold transition-colors duration-700 ${dark ? "text-white" : "text-gray-900"}`}>{title}</h3>
      </div>
      <p className={`mt-3 transition-colors duration-700 ${dark ? "text-gray-200" : "text-gray-700"}`}>{desc}</p>
    </div>
  );
}

function StepLabel({ children, dark }) {
  return (
    <span className={`text-base sm:text-lg font-semibold transition-colors duration-700 ${dark ? "text-white" : "text-gray-900"}`}>
      {children}
    </span>
  );
}

function ArrowIcon({ dark }) {
  return (
    <svg className={`h-5 w-5 sm:h-6 sm:w-6 mx-1 transition-colors duration-700 ${dark ? "text-white" : "text-gray-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}