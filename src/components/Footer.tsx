import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl">CAMISALUD S.A.S</span>
                <span className="text-sm text-white/80">Habilitación en Salud</span>
              </div>
            </div>
            <p className="text-white/90 mb-6 leading-relaxed max-w-md">
              Especialistas en asesoría para habilitación de servicios de salud. 
              Acompañamos a profesionales independientes e IPS en el cumplimiento 
              de la normativa vigente.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <span>302 856 6767 - 301 289 2534</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <span>camisaludsas@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li><Link to="/servicios" className="text-white/80 hover:text-accent transition-colors">Servicios</Link></li>
              <li><Link to="/normativa" className="text-white/80 hover:text-accent transition-colors">Normativa</Link></li>
              <li><Link to="/metodologia" className="text-white/80 hover:text-accent transition-colors">Metodología</Link></li>
              <li><Link to="/paquetes" className="text-white/80 hover:text-accent transition-colors">Paquetes</Link></li>
              <li><Link to="/contacto" className="text-white/80 hover:text-accent transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li className="text-white/80">Diagnóstico de Requisitos</li>
              <li className="text-white/80">Documentación Estandarizada</li>
              <li className="text-white/80">Asesoría Complementaria</li>
              <li className="text-white/80">Habilitación Profesionales</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/80 text-sm">
              © 2024 CAMISALUD S.A.S. Todos los derechos reservados.
            </div>
            <div className="flex items-center gap-6 text-sm text-white/80">
              <span>Resolución 3100 de 2019</span>
              <span>Decreto 1011 de 2006</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}