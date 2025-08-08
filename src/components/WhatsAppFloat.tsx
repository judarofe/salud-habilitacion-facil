import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatsAppFloat() {
  const phoneNumber = "3028566767";
  const message = "Hola! Me interesa información sobre los servicios de habilitación en salud de CAMISALUD.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/57${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="whatsapp-float"
      size="icon"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
}