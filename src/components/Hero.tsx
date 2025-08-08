import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, FileCheck } from "lucide-react";
import heroImage from "@/assets/hero-healthcare-team.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Equipo profesional de salud de CAMISALUD"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Shield className="h-5 w-5 text-healthcare-green-light" />
            <span className="text-sm font-medium">Resolución 3100 de 2019 | Decreto 1011 de 2006</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Acompañamos tu{" "}
            <span className="text-gradient-primary bg-gradient-to-r from-white to-accent-light bg-clip-text text-transparent">
              habilitación en salud
            </span>{" "}
            de principio a fin
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Asesoría especializada en requisitos normativos, documentación estandarizada 
            y acompañamiento integral para profesionales independientes e IPS.
          </p>

          {/* Trust Points */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <CheckCircle className="h-5 w-5 text-healthcare-green-light" />
              <span className="text-sm font-medium">95% de habilitaciones aprobadas</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <FileCheck className="h-5 w-5 text-healthcare-green-light" />
              <span className="text-sm font-medium">Documentación estandarizada</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Shield className="h-5 w-5 text-healthcare-green-light" />
              <span className="text-sm font-medium">Expertos en normativa vigente</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="cta"
              className="text-lg px-8 py-4 min-w-[240px]"
            >
              Solicita Diagnóstico Gratuito
            </Button>
            <Button 
              size="lg" 
              variant="hero"
              className="text-lg px-8 py-4 min-w-[200px]"
            >
              Conoce Nuestros Servicios
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <span className="text-sm">📞</span>
              <span className="text-sm font-medium">302 856 6767 / 301 289 2534</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">✉️</span>
              <span className="text-sm font-medium">camisaludsas@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}