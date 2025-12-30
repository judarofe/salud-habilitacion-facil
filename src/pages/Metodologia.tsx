import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Search, FileEdit, Users, Send, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const pasos = [
  {
    numero: "01",
    icon: Search,
    titulo: "Diagnóstico Inicial",
    descripcion: "Realizamos una evaluación exhaustiva del estado actual de tu establecimiento frente a los requisitos de habilitación.",
    duracion: "1-2 días",
    actividades: [
      "Visita técnica a las instalaciones",
      "Revisión de documentación existente",
      "Evaluación de equipos y dotación",
      "Identificación de brechas normativas"
    ]
  },
  {
    numero: "02",
    icon: FileEdit,
    titulo: "Documentación",
    descripcion: "Elaboramos e implementamos toda la documentación requerida según la normativa vigente.",
    duracion: "2-4 semanas",
    actividades: [
      "Creación de manuales y protocolos",
      "Diseño de formatos institucionales",
      "Elaboración de planes de gestión",
      "Implementación de registros"
    ]
  },
  {
    numero: "03",
    icon: Users,
    titulo: "Acompañamiento",
    descripcion: "Brindamos capacitación y preparación al equipo para la visita de verificación.",
    duracion: "1-2 semanas",
    actividades: [
      "Capacitación al personal",
      "Simulacro de visita de verificación",
      "Ajustes finales de documentación",
      "Preparación de evidencias"
    ]
  },
  {
    numero: "04",
    icon: Send,
    titulo: "Radicación",
    descripcion: "Gestionamos el proceso de inscripción y radicación ante la Secretaría de Salud.",
    duracion: "1-2 días",
    actividades: [
      "Preparación del expediente",
      "Radicación de documentos",
      "Seguimiento al trámite",
      "Acompañamiento en visita de verificación"
    ]
  },
  {
    numero: "05",
    icon: CheckCircle,
    titulo: "Habilitación",
    descripcion: "Celebramos tu habilitación y te preparamos para mantener las condiciones en el tiempo.",
    duracion: "Continuo",
    actividades: [
      "Obtención del certificado",
      "Plan de mantenimiento",
      "Asesoría continua",
      "Preparación para re-habilitación"
    ]
  }
];

const Metodologia = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestra Metodología</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Un proceso estructurado y probado para garantizar tu habilitación
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {pasos.map((paso, index) => (
                <div key={index} className="relative">
                  {/* Connector Line */}
                  {index < pasos.length - 1 && (
                    <div className="absolute left-7 top-24 w-0.5 h-full bg-gradient-to-b from-primary to-secondary hidden md:block" />
                  )}
                  
                  <div className="flex gap-8 mb-12">
                    {/* Number Badge */}
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center shadow-healthcare">
                        <span className="text-white font-bold text-lg">{paso.numero}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-card rounded-xl shadow-healthcare p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <paso.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-foreground">{paso.titulo}</h3>
                            <span className="text-sm text-secondary font-medium">Duración: {paso.duracion}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{paso.descripcion}</p>
                      
                      <div className="grid sm:grid-cols-2 gap-2">
                        {paso.actividades.map((actividad, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <ArrowRight className="h-4 w-4 text-secondary" />
                            {actividad}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Garantías */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">¿Por qué nuestra metodología funciona?</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { valor: "98%", label: "Tasa de éxito en habilitaciones" },
                { valor: "500+", label: "Profesionales habilitados" },
                { valor: "10+", label: "Años de experiencia" }
              ].map((stat, index) => (
                <div key={index} className="bg-card rounded-xl p-8 text-center shadow-healthcare">
                  <div className="text-4xl font-bold text-gradient-primary mb-2">{stat.valor}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Comienza tu proceso hoy</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              El primer paso es un diagnóstico gratuito. Conoce el estado actual de tu establecimiento.
            </p>
            <Button variant="cta" size="lg" className="bg-gradient-cta shadow-cta">
              Solicitar Diagnóstico Gratuito
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Metodologia;
