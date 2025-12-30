import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import QuienesSomos from "./pages/QuienesSomos";
import Normativa from "./pages/Normativa";
import Servicios from "./pages/Servicios";
import Metodologia from "./pages/Metodologia";
import Beneficios from "./pages/Beneficios";
import Paquetes from "./pages/Paquetes";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/nosotros" element={<QuienesSomos />} />
          <Route path="/normativa" element={<Normativa />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/metodologia" element={<Metodologia />} />
          <Route path="/beneficios" element={<Beneficios />} />
          <Route path="/paquetes" element={<Paquetes />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
