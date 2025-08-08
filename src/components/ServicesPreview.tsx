import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  FileText, 
  Users, 
  ShieldCheck,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Diagnóstico de Requisitos",
    description: "Evaluación completa de condiciones actuales según Resolución 3100/2019 y normativas vigentes.",
    features: ["Auditoría inicial", "Identificación de brechas", "Plan de acción personalizado"]
  },
  {
    icon: FileText,
    title: "Documentación Estandarizada",
    description: "Elaboración de toda la documentación necesaria para cumplir requisitos de habilitación.",
    features: ["Manuales de procesos", "Protocolos de atención", "Políticas institucionales"]
  },
  {
    icon: Users,
    title: "Asesoría Complementaria",
    description: "Acompañamiento especializado en condiciones adicionales y requisitos específicos.",
    features: ["Consultoría técnica", "Capacitación del personal", "Seguimiento continuo"]
  },
  {
    icon: ShieldCheck,
    title: "Habilitación Profesionales",
    description: "Proceso integral para médicos, odontólogos, psicólogos y otros profesionales independientes.",
    features: ["Trámites completos", "Seguimiento de expedientes", "Respuesta a observaciones"]
  }
];

export function ServicesPreview() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluciones integrales para el cumplimiento normativo en el sector salud
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-lift shadow-healthcare border-none">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-foreground flex items-center justify-center gap-2">
                      <div className="w-1.5 h-1.5 bg-healthcare-green rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="sm" className="group">
                  Saber más
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="cta" size="lg" className="px-8">
            Ver Todos Nuestros Servicios
          </Button>
        </div>
      </div>
    </section>
  );
}