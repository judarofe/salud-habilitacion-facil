import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import camisaludLogo from "@/assets/camisalud-logo.png";

const navigationItems = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Quiénes Somos" },
  { href: "/normativa", label: "Normativa" },
  { href: "/servicios", label: "Servicios" },
  { href: "/metodologia", label: "Metodología" },
  { href: "/beneficios", label: "Beneficios" },
  { href: "/contacto", label: "Contacto" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-healthcare">
      {/* Top contact bar */}
      <div className="bg-gradient-hero text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-center md:justify-end items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>302 856 6767</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>camisaludsas@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={camisaludLogo} alt="CAMISALUD Logo" className="w-10 h-10 rounded-lg object-contain" />
            <div className="flex flex-col">
              <span className="font-bold text-lg text-gradient-primary">CAMISALUD</span>
              <span className="text-xs text-muted-foreground">Habilitación en Salud</span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-muted",
                  location.pathname === item.href
                    ? "text-primary bg-muted"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              asChild
            >
              <a href="https://aula.camisalud.com" target="_blank" rel="noopener noreferrer">
                Aula Virtual
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="outline"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-muted rounded-lg mb-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                    location.pathname === item.href
                      ? "text-primary bg-background"
                      : "text-muted-foreground hover:text-primary hover:bg-background"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href="https://aula.camisalud.com" target="_blank" rel="noopener noreferrer">
                    Aula Virtual
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}