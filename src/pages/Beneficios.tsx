import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Shield, Clock, TrendingUp, Award, Users, CheckCircle, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const beneficios = [
  {
    icon: Shield,
    titulo: "Seguridad Jurídica",
    descripcion: "Opera con tranquilidad cumpliendo todos los requisitos legales y evitando sanciones."
  },
  {
    icon: Clock,
    titulo: "Ahorro de Tiempo",
    descripcion: "Nuestro proceso optimizado reduce significativamente los tiempos de habilitación."
  },
  {
    icon: TrendingUp,
    titulo: "Mayor Competitividad",
    descripcion: "Accede a contratos con EPS, aseguradoras y entidades públicas."
  },
  {
    icon: Award,
    titulo: "Calidad Certificada",
    descripcion: "Demuestra a tus pacientes tu compromiso con estándares de calidad."
  },
  {
    icon: Users,
    titulo: "Acompañamiento Experto",
    descripcion: "Equipo especializado con años de experiencia en habilitación."
  },
  {
    icon: CheckCircle,
    titulo: "Garantía de Resultado",
    descripcion: "98% de éxito en procesos de habilitación gestionados."
  }
];

const testimonios = [
  {
    nombre: "Dra. María González",
    cargo: "Médico General",
    ciudad: "Bogotá",
    texto: "Gracias a CAMISALUD pude habilitar mi consultorio en tiempo récord. El proceso fue claro y siempre tuve acompañamiento.",
    estrellas: 5
  },
  {
    nombre: "Dr. Carlos Ramírez",
    cargo: "Odontólogo",
    ciudad: "Medellín",
    texto: "Excelente servicio. La documentación que elaboraron fue impecable y pasamos la visita de verificación sin observaciones.",
    estrellas: 5
  },
  {
    nombre: "Centro Médico Salud Total",
    cargo: "IPS",
    ciudad: "Cali",
    texto: "Habilitamos 8 servicios con su asesoría. Profesionales muy competentes que conocen a fondo la normativa.",
    estrellas: 5
  }
];

const metricas = [
  { valor: "500+", label: "Habilitaciones exitosas" },
  { valor: "98%", label: "Tasa de aprobación" },
  { valor: "15", label: "Días promedio de gestión" },
  { valor: "10+", label: "Años de experiencia" }
];

const Beneficios = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Beneficios y Casos de Éxito</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Descubre por qué cientos de profesionales confían en nosotros
            </p>
          </div>
        </section>

        {/* Métricas */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {metricas.map((metrica, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-gradient-primary mb-1">{metrica.valor}</div>
                  <p className="text-muted-foreground text-sm">{metrica.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beneficios Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">¿Por qué habilitarte con nosotros?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {beneficios.map((beneficio, index) => (
                <div key={index} className="bg-card rounded-xl shadow-healthcare p-8 hover:shadow-strong transition-all duration-300 group">
                  <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <beneficio.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{beneficio.titulo}</h3>
                  <p className="text-muted-foreground">{beneficio.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Lo que dicen nuestros clientes</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonios.map((testimonio, index) => (
                <div key={index} className="bg-card rounded-xl shadow-healthcare p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonio.estrellas)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                    ))}
                  </div>
                  <div className="relative mb-4">
                    <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                    <p className="text-muted-foreground italic pl-4">{testimonio.texto}</p>
                  </div>
                  <div className="border-t pt-4">
                    <p className="font-bold text-foreground">{testimonio.nombre}</p>
                    <p className="text-sm text-muted-foreground">{testimonio.cargo} - {testimonio.ciudad}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Únete a nuestra lista de casos exitosos</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Comienza hoy tu proceso de habilitación con el respaldo de expertos.
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

export default Beneficios;
