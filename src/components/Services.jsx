import { useScroll } from "../contexts/ScrollContext.jsx";

export default function Services() {
  const { isDarkMode } = useScroll();

  return (
    <section className="w-full py-16 sm:py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Nuestros Servicios</p>
          <h2 className={`mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight transition-colors duration-700 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Consultoría Integral de IA</h2>
          <p className={`mt-4 text-lg transition-colors duration-700 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
            No vendemos chatbots genéricos. Analizamos tu empresa, identificamos oportunidades reales de IA, capacitamos equipos internos y desarrollamos infraestructura de agentes personalizada.
          </p>
        </header>

        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <ServiceBlock
              title="Auditoría y Roadmap AI Powered"
              desc="Mapeamos procesos, detectamos cuellos de botella y diseñamos un plan estratégico de IA con ROI claro."
              items={[
                "Dashboards con Resultados",
                "Automatización de Soporte",
                "Optimización de Procesos",
                "Escalabilidad de Operaciones",
                "Integración de Sistemas",
                "Desarrollo de Agentes",
                "Análisis Predictivo",
                "Gestión de Proyectos",
                "Análisis de Sentimiento",
                "Entrega del Servicio",                
                "Servicio al cliente automatizado 24/7",
              ]}
              color="blue"
              dark={isDarkMode}
            />

            <ServiceBlock
              title="Implementación de Infraestructura de IA"
              desc="Desarrollamos e integramos agentes y flujos de IA a tu stack actual, garantizando que se adapten a tus procesos clave y generen valor desde el día uno."
              items={[]}
              color="purple"
              dark={isDarkMode}
            />

            <ServiceBlock
              title="Automatización de Procesos Complejos"
              desc="Eliminamos tareas repetitivas y optimizamos flujos críticos como atención al cliente, gestión documental, control de calidad y más, con integración directa a tus sistemas."
              items={[]}
              color="emerald"
              dark={isDarkMode}
            />

            <ServiceBlock
              title="Formación y Capacitación AI-First"
              desc="Entrenamos a líderes, mandos medios y equipos operativos para operar con IA. Creamos cultura AI-First con políticas, mejores prácticas y champions internos."
              items={[]}
              color="silver"
              dark={isDarkMode}
            />

            <ServiceBlock
              title="Monitoreo y Optimización Continua"
              desc="Medimos el rendimiento de las soluciones de IA, optimizamos modelos y ajustamos procesos para mantener y mejorar resultados con el tiempo."
              items={[]}
              color="green"
              dark={isDarkMode}
            />

            <ServiceBlock
              title="Acompañamiento a la Autonomía"
              desc="Acompañamos a tu empresa hasta lograr independencia tecnológica total, con mentoría directa y soporte especializado en cada etapa."
              items={[]}
              color="yellow"
              dark={isDarkMode}
            />
          </div>

          <div className="space-y-6">
            <div className={`rounded-2xl border border-gray-200 bg-transparent p-6 shadow-sm`}>
              <h3 className={`text-xl font-semibold transition-colors duration-700 ${isDarkMode ? "text-white" : "text-gray-900"}`}>Desarrollo Personalizado</h3>
              <p className={`mt-2 transition-colors duration-700 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                Infraestructura de Inteligencia Artificial de alto rendimiento, On-Premise o en la nube, respaldada por Microsoft y Google. Mejora continua garantizada mediante observabilidad avanzada con Prometheus.
              </p>

              <div className="mt-4 rounded-xl bg-transparent border border-gray-200 overflow-hidden">
                <div className={`px-4 py-3 border-b border-gray-200 flex items-center gap-2`}>
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  <span className={`text-sm font-medium transition-colors duration-700 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>Ejemplo</span>
                </div>
                <div className="p-4 space-y-4">
                  <ChatMessage
                    avatar="/images/bot.png"
                    name="Agente de IA"
                    text="te gustaría agendar una llamada para discutir cómo podemos ayudarte a implementar IA en tu empresa?"
                    align="left"
                    dark={isDarkMode}
                  />
                  <ChatMessage
                    avatar="/images/person.png"
                    name="Thiago Severino"
                    text="Sí, me interesa mucho. ¿Cómo funciona el proceso? @Larry Maravi, qué te parece?"
                    align="right"
                    dark={isDarkMode}
                  />
                  <ChatMessage
                    avatar="/images/bot.png"
                    name="Agente de IA"
                    text="Se los explico el día de mañana a las 9am. ¿Te parece bien?"
                    align="left"
                    dark={isDarkMode}
                  />
                  <ChatMessage
                    avatar="/images/person.png"
                    name="Larry Maravi"
                    text="Cerrado! Por fa... agrega a todo el directorio para que estén enterados..."
                    align="right"
                    dark={isDarkMode}
                  />
                  <ChatMessage
                    avatar="/images/bot.png"
                    name="Agente de IA"
                    text="Vale, yo me encargo de enviar un resumen a todos los interesados. ¿Algo más que quieras agregar?"
                    align="left"
                    dark={isDarkMode}
                  />
                  <ChatMessage
                    avatar="/images/bot.png"
                    name="Larry Maravi"
                    text="Perfecto, gracias!"
                    align="right"
                    dark={isDarkMode}
                  />                  
                </div>
              </div>

              <a
                href="https://cal.com/strategiaperu/interview"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition-all"
              >
                Agendar Llamada
              </a>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceBlock({ title, desc, items, color, dark }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-transparent p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 rounded-xl bg-gray-100 flex items-center justify-center">
          <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
          </svg>
        </div>
        <div>
          <h3 className={`text-xl font-semibold transition-colors duration-700 ${isDarkMode ? "text-white" : "text-gray-900"}`}>{title}</h3>
          <p className={`mt-2 transition-colors duration-700 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>{desc}</p>
          {items && items.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((it) => (
                <span key={it} className={`px-3 py-1 rounded-full border border-gray-200 bg-transparent text-sm transition-colors duration-700 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                  {it}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ChatMessage({ avatar, name, text, align = "left", dark }) {
  const isRight = align === "right";
  return (
    <div className={`flex items-start gap-3 ${isRight ? "flex-row-reverse text-right" : ""}`}>
      <img src={avatar} alt={`${name} avatar`} className="h-8 w-8 rounded-full border border-gray-200 shadow-sm" />
      <div className={`max-w-[80%] ${isRight ? "items-end" : ""} flex flex-col`}>
        <span className={`text-xs font-medium transition-colors duration-700 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>{name}</span>
        <div
          className={`mt-1 inline-block rounded-2xl px-4 py-2 shadow-sm border transition-colors duration-700 ${
            isRight
              ? "bg-blue-600 text-white border-blue-600"
              : dark
              ? "bg-gray-800 text-white border-gray-700"
              : "bg-gray-100 text-gray-900 border-gray-200"
          }`}
        >
          {text}
        </div>
      </div>
    </div>
  );
}