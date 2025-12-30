import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Check, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const paquetes = [
  {
    nombre: "Básico",
    descripcion: "Ideal para profesionales independientes",
    precio: "1.200.000",
    popular: false,
    caracteristicas: [
      { item: "Diagnóstico inicial", incluido: true },
      { item: "Documentación básica", incluido: true },
      { item: "Acompañamiento en radicación", incluido: true },
      { item: "Capacitación al personal", incluido: false },
      { item: "Simulacro de visita", incluido: false },
      { item: "Acompañamiento post-habilitación", incluido: false },
      { item: "Soporte prioritario", incluido: false }
    ]
  },
  {
    nombre: "Estándar",
    descripcion: "El más elegido por consultorios",
    precio: "2.500.000",
    popular: true,
    caracteristicas: [
      { item: "Diagnóstico inicial", incluido: true },
      { item: "Documentación completa", incluido: true },
      { item: "Acompañamiento en radicación", incluido: true },
      { item: "Capacitación al personal", incluido: true },
      { item: "Simulacro de visita", incluido: true },
      { item: "Acompañamiento post-habilitación", incluido: false },
      { item: "Soporte prioritario", incluido: false }
    ]
  },
  {
    nombre: "Premium",
    descripcion: "Servicio integral para IPS",
    precio: "4.500.000",
    popular: false,
    caracteristicas: [
      { item: "Diagnóstico inicial", incluido: true },
      { item: "Documentación completa", incluido: true },
      { item: "Acompañamiento en radicación", incluido: true },
      { item: "Capacitación al personal", incluido: true },
      { item: "Simulacro de visita", incluido: true },
      { item: "Acompañamiento post-habilitación (3 meses)", incluido: true },
      { item: "Soporte prioritario 24/7", incluido: true }
    ]
  }
];

const Paquetes = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Paquetes y Precios</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Planes diseñados para cada necesidad y presupuesto
            </p>
          </div>
        </section>

        {/* Paquetes Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {paquetes.map((paquete, index) => (
                <div 
                  key={index} 
                  className={`relative bg-card rounded-xl shadow-healthcare overflow-hidden transition-all duration-300 hover:shadow-strong ${
                    paquete.popular ? 'ring-2 ring-primary scale-105' : ''
                  }`}
                >
                  {paquete.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-primary text-white text-center py-2 text-sm font-medium flex items-center justify-center gap-2">
                      <Star className="h-4 w-4 fill-white" />
                      Más Popular
                    </div>
                  )}
                  
                  <div className={`p-8 ${paquete.popular ? 'pt-14' : ''}`}>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{paquete.nombre}</h3>
                    <p className="text-muted-foreground mb-6">{paquete.descripcion}</p>
                    
                    <div className="mb-6">
                      <span className="text-sm text-muted-foreground">Desde</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-gradient-primary">${paquete.precio}</span>
                        <span className="text-muted-foreground">COP</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {paquete.caracteristicas.map((caracteristica, i) => (
                        <li key={i} className="flex items-center gap-3">
                          {caracteristica.incluido ? (
                            <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                          ) : (
                            <X className="h-5 w-5 text-muted-foreground/40 flex-shrink-0" />
                          )}
                          <span className={caracteristica.incluido ? 'text-foreground' : 'text-muted-foreground/60'}>
                            {caracteristica.item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      variant={paquete.popular ? "cta" : "outline"} 
                      className={`w-full ${paquete.popular ? 'bg-gradient-cta shadow-cta' : ''}`}
                    >
                      Solicitar Cotización
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nota */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-xl font-bold text-foreground mb-4">¿Necesitas un plan personalizado?</h3>
              <p className="text-muted-foreground mb-6">
                Cada establecimiento es único. Si requieres una cotización especial o tienes necesidades 
                específicas, contáctanos y diseñamos un plan a tu medida.
              </p>
              <Button variant="outline" size="lg">
                Solicitar Plan Personalizado
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Básico */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Preguntas Frecuentes</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                { 
                  pregunta: "¿Qué incluye el diagnóstico inicial?", 
                  respuesta: "Incluye una visita técnica a tus instalaciones, revisión de documentación existente, evaluación de equipos y un informe detallado con el plan de acción." 
                },
                { 
                  pregunta: "¿Cuánto tiempo toma el proceso de habilitación?", 
                  respuesta: "El tiempo varía según el tipo de servicio y el estado actual. En promedio, el proceso completo toma entre 15 y 30 días hábiles." 
                },
                { 
                  pregunta: "¿Ofrecen facilidades de pago?", 
                  respuesta: "Sí, ofrecemos planes de pago flexibles. Puedes pagar el 50% al inicio y el 50% al obtener la habilitación." 
                }
              ].map((faq, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-healthcare">
                  <h4 className="font-bold text-foreground mb-2">{faq.pregunta}</h4>
                  <p className="text-muted-foreground">{faq.respuesta}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Paquetes;
