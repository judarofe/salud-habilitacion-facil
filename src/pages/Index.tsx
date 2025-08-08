import { Navigation } from "@/components/ui/navigation";
import { Hero } from "@/components/Hero";
import { ServicesPreview } from "@/components/ServicesPreview";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ServicesPreview />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
