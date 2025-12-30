import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Users, Target, Award, Heart } from "lucide-react";

const QuienesSomos = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Quiénes Somos</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Expertos en habilitación de servicios de salud con más de 10 años de experiencia
            </p>
          </div>
        </section>

        {/* Historia */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Nuestra Historia</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                CAMISALUD S.A.S nació con el propósito de acompañar a profesionales e instituciones de salud 
                en el cumplimiento de los requisitos de habilitación establecidos por la normatividad colombiana. 
                Desde nuestros inicios, hemos trabajado de la mano con médicos, odontólogos, psicólogos y 
                centros de salud para garantizar que sus servicios cumplan con los más altos estándares de calidad.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nuestra experiencia nos ha permitido desarrollar metodologías eficientes y documentación 
                estandarizada que facilita el proceso de habilitación, reduciendo tiempos y optimizando recursos.
              </p>
            </div>
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-card p-8 rounded-xl shadow-healthcare">
                <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Misión</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Brindar asesoría integral y acompañamiento especializado a profesionales e instituciones 
                  de salud en el proceso de habilitación, garantizando el cumplimiento normativo y la 
                  prestación segura de servicios de salud.
                </p>
              </div>
              <div className="bg-card p-8 rounded-xl shadow-healthcare">
                <div className="w-14 h-14 bg-gradient-secondary rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Visión</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser la empresa líder en consultoría de habilitación en salud en Colombia, reconocida 
                  por nuestra excelencia, compromiso y alto índice de éxito en los procesos de habilitación.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Nuestros Valores</h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Heart, title: "Compromiso", desc: "Con el éxito de nuestros clientes" },
                { icon: Award, title: "Excelencia", desc: "En cada proceso que realizamos" },
                { icon: Users, title: "Trabajo en Equipo", desc: "Colaboración constante" },
                { icon: Target, title: "Integridad", desc: "Transparencia en todo momento" },
              ].map((valor, index) => (
                <div key={index} className="text-center p-6 rounded-xl hover:bg-muted transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <valor.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{valor.title}</h3>
                  <p className="text-sm text-muted-foreground">{valor.desc}</p>
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

export default QuienesSomos;
