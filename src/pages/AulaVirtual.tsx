import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ShoppingCart,
  X,
  Plus,
  Minus,
  LogIn,
  User,
  
  BookOpen,
  Clock,
  Award,
  Trash2,
} from "lucide-react";

interface Course {
  id: number;
  title: string;
  category: string;
  description: string;
  price: number;
  duration: string;
  level: string;
  image?: string;
}

interface CartItem extends Course {
  quantity: number;
}

const courses: Course[] = [
  // Habilitación en Salud
  {
    id: 1,
    title: "Habilitación de Servicios de Salud - Resolución 3100",
    category: "Habilitación en Salud",
    description: "Aprende los requisitos y estándares de habilitación según la normativa vigente colombiana.",
    price: 250000,
    duration: "40 horas",
    level: "Intermedio",
  },
  {
    id: 2,
    title: "Estándares de Habilitación: Talento Humano e Infraestructura",
    category: "Habilitación en Salud",
    description: "Profundiza en los estándares de talento humano e infraestructura para IPS.",
    price: 180000,
    duration: "20 horas",
    level: "Básico",
  },
  {
    id: 3,
    title: "Procesos Prioritarios e Historia Clínica",
    category: "Habilitación en Salud",
    description: "Estándares de procesos prioritarios, historia clínica y registros asistenciales.",
    price: 200000,
    duration: "25 horas",
    level: "Intermedio",
  },
  // Auditoría en Salud
  {
    id: 4,
    title: "Auditoría en Salud y Mejoramiento Continuo",
    category: "Auditoría en Salud",
    description: "Metodologías de auditoría para el mejoramiento de la calidad en servicios de salud.",
    price: 300000,
    duration: "50 horas",
    level: "Avanzado",
  },
  {
    id: 5,
    title: "Auditoría de Historias Clínicas",
    category: "Auditoría en Salud",
    description: "Técnicas para auditar historias clínicas según la normativa colombiana.",
    price: 150000,
    duration: "15 horas",
    level: "Básico",
  },
  // Seguridad del Paciente
  {
    id: 6,
    title: "Seguridad del Paciente y Gestión del Riesgo",
    category: "Seguridad del Paciente",
    description: "Políticas y prácticas para garantizar la seguridad del paciente en instituciones de salud.",
    price: 220000,
    duration: "30 horas",
    level: "Intermedio",
  },
  {
    id: 7,
    title: "Eventos Adversos: Identificación y Gestión",
    category: "Seguridad del Paciente",
    description: "Cómo identificar, reportar y gestionar eventos adversos en servicios de salud.",
    price: 180000,
    duration: "20 horas",
    level: "Básico",
  },
  // PAMEC
  {
    id: 8,
    title: "PAMEC - Programa de Auditoría para el Mejoramiento",
    category: "PAMEC",
    description: "Diseño e implementación del PAMEC en instituciones prestadoras de servicios de salud.",
    price: 280000,
    duration: "35 horas",
    level: "Avanzado",
  },
  // Normativa en Salud
  {
    id: 9,
    title: "Marco Normativo del Sistema de Salud Colombiano",
    category: "Normativa en Salud",
    description: "Resoluciones, decretos y leyes que regulan la prestación de servicios de salud.",
    price: 160000,
    duration: "18 horas",
    level: "Básico",
  },
  {
    id: 10,
    title: "REPS y Registro de Prestadores de Salud",
    category: "Normativa en Salud",
    description: "Todo sobre el Registro Especial de Prestadores de Servicios de Salud.",
    price: 120000,
    duration: "12 horas",
    level: "Básico",
  },
];

const categories = [...new Set(courses.map((c) => c.category))];

const formatPrice = (price: number) =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 }).format(price);

const levelColor = (level: string) => {
  switch (level) {
    case "Básico": return "bg-secondary text-secondary-foreground";
    case "Intermedio": return "bg-accent text-accent-foreground";
    case "Avanzado": return "bg-primary text-primary-foreground";
    default: return "";
  }
};

const AulaVirtual = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [loginTab, setLoginTab] = useState<"login" | "register">("login");
  

  const addToCart = (course: Course) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === course.id);
      if (existing) return prev;
      return [...prev, { ...course, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const totalCart = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const filteredCourses = activeCategory === "all" ? courses : courses.filter((c) => c.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Aula Virtual CAMISALUD</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Capacítate en habilitación, auditoría y calidad en salud con nuestros cursos especializados.
            </p>
            {/* Login/Register inline */}
            <div className="max-w-md mx-auto mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Tabs value={loginTab} onValueChange={(v) => setLoginTab(v as "login" | "register")}>
                <TabsList className="w-full bg-white/20">
                  <TabsTrigger value="login" className="flex-1 data-[state=active]:bg-white data-[state=active]:text-primary">Iniciar Sesión</TabsTrigger>
                  <TabsTrigger value="register" className="flex-1 data-[state=active]:bg-white data-[state=active]:text-primary">Registrarse</TabsTrigger>
                </TabsList>
                <TabsContent value="login" className="space-y-3 mt-4">
                  <Input type="email" placeholder="Correo electrónico" className="bg-white/90 text-foreground" />
                  <Input type="password" placeholder="Contraseña" className="bg-white/90 text-foreground" />
                  <Button className="w-full" variant="cta">
                    <LogIn className="mr-2 h-4 w-4" /> Ingresar
                  </Button>
                  <p className="text-xs text-center opacity-80">
                    ¿Olvidaste tu contraseña? <a href="#" className="underline">Recupérala aquí</a>
                  </p>
                </TabsContent>
                <TabsContent value="register" className="space-y-3 mt-4">
                  <Input placeholder="Nombre completo" className="bg-white/90 text-foreground" />
                  <Input type="email" placeholder="Correo electrónico" className="bg-white/90 text-foreground" />
                  <Input type="password" placeholder="Contraseña" className="bg-white/90 text-foreground" />
                  <Button className="w-full" variant="cta">
                    <User className="mr-2 h-4 w-4" /> Crear Cuenta
                  </Button>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main content */}
            <div className="flex-1">
              {/* Category filter */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Catálogo de Cursos</h2>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={activeCategory === "all" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory("all")}
                  >
                    Todos
                  </Button>
                  {categories.map((cat) => (
                    <Button
                      key={cat}
                      variant={activeCategory === cat ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveCategory(cat)}
                    >
                      {cat}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Courses grid */}
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCourses.map((course) => {
                  const inCart = cart.some((item) => item.id === course.id);
                  return (
                    <Card key={course.id} className="hover-lift flex flex-col">
                      <div className="h-3 rounded-t-lg bg-gradient-hero" />
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start gap-2">
                          <Badge className={levelColor(course.level)}>{course.level}</Badge>
                          <span className="text-xs text-muted-foreground">{course.category}</span>
                        </div>
                        <CardTitle className="text-lg leading-tight mt-2">{course.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" /> {course.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Award className="h-4 w-4" /> Certificado
                          </span>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center border-t pt-4">
                        <span className="text-xl font-bold text-primary">{formatPrice(course.price)}</span>
                        <Button
                          variant={inCart ? "secondary" : "cta"}
                          size="sm"
                          onClick={() => (inCart ? removeFromCart(course.id) : addToCart(course))}
                        >
                          {inCart ? (
                            <>
                              <X className="h-4 w-4 mr-1" /> Quitar
                            </>
                          ) : (
                            <>
                              <Plus className="h-4 w-4 mr-1" /> Agregar
                            </>
                          )}
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Sidebar: Cart + Login */}
            <aside className="w-full lg:w-96 space-y-6">
              {/* Shopping Cart */}
              <Card className={`sticky top-32 ${cartOpen ? "" : "hidden lg:block"}`}>
                <CardHeader className="bg-primary rounded-t-lg">
                  <CardTitle className="text-primary-foreground flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5" /> Carrito de Compras
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  {cart.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      <BookOpen className="h-12 w-12 mx-auto mb-3 opacity-40" />
                      <p>Tu carrito está vacío</p>
                      <p className="text-xs mt-1">Agrega cursos para comenzar</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {cart.map((item) => (
                        <div key={item.id} className="flex items-start justify-between gap-2 p-3 bg-muted rounded-lg">
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{item.title}</p>
                            <p className="text-sm font-bold text-primary">{formatPrice(item.price)}</p>
                          </div>
                          <Button variant="ghost" size="icon" className="shrink-0 h-8 w-8 text-destructive" onClick={() => removeFromCart(item.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
                {cart.length > 0 && (
                  <CardFooter className="flex-col gap-3 border-t pt-4">
                    <div className="flex justify-between w-full text-lg font-bold">
                      <span>Total:</span>
                      <span className="text-primary">{formatPrice(totalCart)}</span>
                    </div>
                    <Button variant="cta" className="w-full" size="lg">
                      Proceder al Pago
                    </Button>
                  </CardFooter>
                )}
              </Card>

            </aside>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default AulaVirtual;
