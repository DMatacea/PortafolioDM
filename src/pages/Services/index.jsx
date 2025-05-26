function Services() {
  const services = [
    {
      title: "Landing Pages Impactantes",
      description: "Diseño y desarrollo de páginas de alto impacto para convertir visitantes en clientes. Optimizadas para SEO y velocidad de carga.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      features: ["Diseño responsive", "Optimización SEO", "Integración con Analytics", "Formularios de contacto"]
    },
    {
      title: "Aplicaciones Web con React",
      description: "Desarrollo de aplicaciones modernas, escalables y de alto rendimiento con React.js y ecosistema tecnológico actual.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      features: ["SPAs y PWAs", "Integración con APIs", "Estado global", "Testing automatizado"]
    },
    {
      title: "Soluciones Ecommerce",
      description: "Tiendas online completas con carrito de compras, pasarelas de pago y panel de administración.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      features: ["Checkout seguro", "Gestión de productos", "Integración con Shopify/WordPress", "Analítica de ventas"]
    },
    {
      title: "Consultoría Tecnológica",
      description: "Asesoramiento profesional para elegir las mejores soluciones tecnológicas para tu negocio.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      features: ["Arquitectura de software", "Selección de tecnologías", "Plan de migración", "Optimización de procesos"]
    }
  ]

  return (
    <section className="px-6 md:px-20 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Servicios de Desarrollo Profesional</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluciones tecnológicas a medida para impulsar tu presencia digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <div className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-blue-100">
                          <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl text-white font-semibold mb-6">¿Necesitas algo diferente?</h3>
          <button className="bg-blue-500 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=davde40@gmail.com&su=Consulta%20sobre%20tu%20portfolio&body=Hola,%20me%20interesa%20tu%20trabajo..."
                target="_blank"
                rel="noopener noreferrer"
              >
                Hablemos sobre tu proyecto
              </a>
          </button>
        </div>
      </div>  
    </section>
  )
}

export { Services }