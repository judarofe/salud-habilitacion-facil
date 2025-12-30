import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { FileText, Download, ExternalLink, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

const normativas = [
  {
    titulo: "Resolución 3100 de 2019",
    descripcion: "Define los procedimientos y condiciones de inscripción de los prestadores de servicios de salud y de habilitación de los servicios de salud.",
    puntosClave: [
      "Requisitos de habilitación por servicio",
      "Condiciones de capacidad técnico-administrativa",
      "Condiciones de suficiencia patrimonial y financiera",
      "Condiciones de capacidad tecnológica y científica"
    ],
    enlace: "https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.%203100%20de%202019.pdf"
  },
  {
    titulo: "Resolución 2003 de 2014",
    descripcion: "Define los procedimientos y condiciones de inscripción de los Prestadores de Servicios de Salud y de habilitación de servicios de salud (antecedente normativo).",
    puntosClave: [
      "Marco general de habilitación",
      "Estándares por grupos de servicios",
      "Procesos de autoevaluación",
      "Procedimientos de inscripción"
    ],
    enlace: "https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%202003%20de%202014.pdf"
  },
  {
    titulo: "Decreto 1011 de 2006",
    descripcion: "Establece el Sistema Obligatorio de Garantía de Calidad de la Atención de Salud del Sistema General de Seguridad Social en Salud.",
    puntosClave: [
      "Sistema Único de Habilitación",
      "Auditoría para el Mejoramiento de la Calidad",
      "Sistema Único de Acreditación",
      "Sistema de Información para la Calidad"
    ],
    enlace: "https://www.minsalud.gov.co/Normatividad_Nuevo/DECRETO%201011%20DE%202006.pdf"
  }
];

const Normativa = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Normativa Vigente</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Conoce el marco legal que rige la habilitación de servicios de salud en Colombia
            </p>
          </div>
        </section>

        {/* Introducción */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Scale className="h-8 w-8 text-primary" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                La habilitación de servicios de salud en Colombia está regulada por el Ministerio de Salud 
                y Protección Social. A continuación, presentamos las principales normas que todo prestador 
                de servicios de salud debe conocer y cumplir.
              </p>
            </div>
          </div>
        </section>

        {/* Normativas */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-8">
              {normativas.map((norma, index) => (
                <div key={index} className="bg-card rounded-xl shadow-healthcare overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-2">{norma.titulo}</h3>
                        <p className="text-muted-foreground mb-4">{norma.descripcion}</p>
                        
                        <h4 className="font-semibold text-foreground mb-2">Puntos Clave:</h4>
                        <ul className="grid md:grid-cols-2 gap-2 mb-6">
                          {norma.puntosClave.map((punto, i) => (
                            <li key={i} className="flex items-center gap-2 text-muted-foreground">
                              <div className="w-2 h-2 bg-secondary rounded-full" />
                              {punto}
                            </li>
                          ))}
                        </ul>
                        
                        <div className="flex gap-4">
                          <Button variant="outline" asChild>
                            <a href={norma.enlace} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Ver documento
                            </a>
                          </Button>
                          <Button variant="ghost" asChild>
                            <a href={norma.enlace} download>
                              <Download className="h-4 w-4 mr-2" />
                              Descargar PDF
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">¿Necesitas ayuda para cumplir con la normativa?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Nuestro equipo de expertos te guía paso a paso en el cumplimiento de todos los requisitos legales.
            </p>
            <Button variant="cta" size="lg" className="bg-gradient-cta shadow-cta">
              Solicita Asesoría Gratuita
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Normativa;
