import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ClipboardCheck, FileText, Users, Stethoscope, Building, UserCheck, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const servicios = [
  {
    icon: ClipboardCheck,
    titulo: "Diagnóstico de Habilitación",
    descripcion: "Evaluación completa del estado actual de tu institución o consultorio frente a los requisitos de habilitación.",
    incluye: [
      "Revisión de documentación existente",
      "Inspección de instalaciones físicas",
      "Evaluación de equipos biomédicos",
      "Informe detallado de hallazgos",
      "Plan de acción con prioridades"
    ]
  },
  {
    icon: FileText,
    titulo: "Elaboración de Documentación",
    descripcion: "Creación e implementación de toda la documentación requerida por la normativa vigente.",
    incluye: [
      "Manuales de procesos y procedimientos",
      "Protocolos de atención clínica",
      "Guías de manejo de residuos",
      "Formatos de historias clínicas",
      "Planes de emergencia y contingencia"
    ]
  },
  {
    icon: Users,
    titulo: "Asesoría Complementaria",
    descripcion: "Acompañamiento en condiciones adicionales y requisitos especiales según el tipo de servicio.",
    incluye: [
      "Capacitación al personal",
      "Simulacros de visita de verificación",
      "Gestión de permisos especiales",
      "Asesoría en equipamiento",
      "Apoyo en adecuaciones locativas"
    ]
  },
  {
    icon: UserCheck,
    titulo: "Habilitación Profesionales Independientes",
    descripcion: "Servicio especializado para profesionales de la salud que ejercen de forma independiente.",
    incluye: [
      "Médicos generales y especialistas",
      "Odontólogos",
      "Psicólogos y terapeutas",
      "Fisioterapeutas",
      "Enfermeros profesionales"
    ]
  },
  {
    icon: Building,
    titulo: "Habilitación IPS",
    descripcion: "Proceso integral de habilitación para Instituciones Prestadoras de Servicios de Salud.",
    incluye: [
      "Clínicas y hospitales",
      "Centros médicos",
      "Laboratorios clínicos",
      "Centros de imágenes diagnósticas",
      "Centros de rehabilitación"
    ]
  },
  {
    icon: Stethoscope,
    titulo: "Acompañamiento Post-Habilitación",
    descripcion: "Seguimiento continuo para mantener las condiciones de habilitación a lo largo del tiempo.",
    incluye: [
      "Auditorías internas periódicas",
      "Actualización documental",
      "Preparación para re-habilitación",
      "Asesoría ante cambios normativos",
      "Soporte técnico continuo"
    ]
  }
];

const Servicios = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Soluciones integrales para la habilitación de servicios de salud
            </p>
          </div>
        </section>

        {/* Servicios Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {servicios.map((servicio, index) => (
                <div key={index} className="bg-card rounded-xl shadow-healthcare p-8 hover:shadow-strong transition-all duration-300 group">
                  <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <servicio.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{servicio.titulo}</h3>
                  <p className="text-muted-foreground mb-4">{servicio.descripcion}</p>
                  
                  <h4 className="font-semibold text-foreground text-sm mb-2">Incluye:</h4>
                  <ul className="space-y-2">
                    {servicio.incluye.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Agenda una consulta gratuita y descubre cómo podemos ayudarte a obtener tu habilitación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" className="bg-gradient-cta shadow-cta">
                Diagnóstico Gratuito
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/paquetes">Ver Paquetes</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Servicios;
