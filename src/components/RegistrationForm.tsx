import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Lock,
  User,
  Phone,
  MapPin,
  Building2,
  FileText,
  Eye,
  EyeOff,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const departamentos: Record<string, string[]> = {
  Antioquia: ["Medellín", "Envigado", "Bello", "Itagüí"],
  "Bogotá D.C.": ["Bogotá"],
  "Valle del Cauca": ["Cali", "Palmira", "Buenaventura"],
  Atlántico: ["Barranquilla", "Soledad", "Malambo"],
  Santander: ["Bucaramanga", "Floridablanca", "Girón"],
  Cundinamarca: ["Soacha", "Zipaquirá", "Facatativá"],
  Bolívar: ["Cartagena", "Magangué"],
  "Norte de Santander": ["Cúcuta", "Ocaña"],
};

const idiomas = [
  { value: "es", label: "Español" },
  { value: "en", label: "English" },
  { value: "pt", label: "Português" },
];

interface FormErrors {
  [key: string]: string;
}

const SectionHeader = ({
  icon: Icon,
  title,
}: {
  icon: React.ElementType;
  title: string;
}) => (
  <div className="flex items-center gap-2 mb-4 pb-2 border-b border-border">
    <div className="p-1.5 rounded-md bg-primary/10">
      <Icon className="h-4 w-4 text-primary" />
    </div>
    <h3 className="text-base font-semibold text-foreground">{title}</h3>
  </div>
);

const FieldLabel = ({
  htmlFor,
  required,
  children,
}: {
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) => (
  <Label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
    {children}
    {required && <span className="text-destructive ml-0.5">*</span>}
  </Label>
);

export const RegistrationForm = ({ onCancel }: { onCancel?: () => void }) => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    secondName: "",
    firstLastName: "",
    secondLastName: "",
    alias: "",
    idNumber: "",
    phone1: "",
    phone2: "",
    address: "",
    department: "",
    city: "",
    institution: "",
    description: "",
    language: "es",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const cities = form.department ? departamentos[form.department] || [] : [];

  const update = (field: string, value: string) => {
    setForm((prev) => {
      const next = { ...prev, [field]: value };
      if (field === "department") next.city = "";
      return next;
    });
    if (touched[field]) validateField(field, value);
  };

  const markTouched = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validateField(field, form[field as keyof typeof form]);
  };

  const validateField = (field: string, value: string) => {
    let error = "";
    switch (field) {
      case "username":
        if (!value.trim()) error = "Usuario es obligatorio";
        break;
      case "email":
        if (!value.trim()) error = "Correo es obligatorio";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = "Correo inválido";
        break;
      case "password":
        if (!value) error = "Contraseña es obligatoria";
        else if (value.length < 8) error = "Mínimo 8 caracteres";
        break;
      case "confirmPassword":
        if (value !== form.password) error = "Las contraseñas no coinciden";
        break;
      case "firstName":
        if (!value.trim()) error = "Primer nombre es obligatorio";
        break;
      case "firstLastName":
        if (!value.trim()) error = "Primer apellido es obligatorio";
        break;
      case "idNumber":
        if (!value.trim()) error = "Número de identificación es obligatorio";
        break;
    }
    setErrors((prev) => {
      const next = { ...prev };
      if (error) next[field] = error;
      else delete next[field];
      return next;
    });
    return error;
  };

  const passwordChecks = [
    { label: "Mínimo 8 caracteres", ok: form.password.length >= 8 },
    { label: "Al menos una mayúscula", ok: /[A-Z]/.test(form.password) },
    { label: "Al menos un número", ok: /\d/.test(form.password) },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const requiredFields = [
      "username",
      "email",
      "password",
      "confirmPassword",
      "firstName",
      "firstLastName",
      "idNumber",
    ];
    let hasErrors = false;
    const allTouched: Record<string, boolean> = {};
    requiredFields.forEach((f) => {
      allTouched[f] = true;
      if (validateField(f, form[f as keyof typeof form])) hasErrors = true;
    });
    setTouched((prev) => ({ ...prev, ...allTouched }));
    if (hasErrors) return;
    // Submit logic here
    console.log("Form submitted", form);
  };

  const inputClass = (field: string) =>
    `bg-background transition-colors ${
      touched[field] && errors[field]
        ? "border-destructive focus-visible:ring-destructive"
        : touched[field] && !errors[field] && form[field as keyof typeof form]
        ? "border-secondary focus-visible:ring-secondary"
        : ""
    }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* SECCIÓN 1: Información de acceso */}
      <section>
        <SectionHeader icon={Lock} title="Información de acceso" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <FieldLabel htmlFor="username" required>
              Usuario
            </FieldLabel>
            <Input
              id="username"
              placeholder="Nombre de usuario"
              value={form.username}
              onChange={(e) => update("username", e.target.value)}
              onBlur={() => markTouched("username")}
              className={inputClass("username")}
            />
            {touched.username && errors.username && (
              <p className="text-xs text-destructive">{errors.username}</p>
            )}
          </div>
          <div className="space-y-1.5">
            <FieldLabel htmlFor="email" required>
              Correo electrónico
            </FieldLabel>
            <Input
              id="email"
              type="email"
              placeholder="correo@ejemplo.com"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              onBlur={() => markTouched("email")}
              className={inputClass("email")}
            />
            {touched.email && errors.email && (
              <p className="text-xs text-destructive">{errors.email}</p>
            )}
          </div>
          <div className="space-y-1.5">
            <FieldLabel htmlFor="password" required>
              Contraseña
            </FieldLabel>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Mínimo 8 caracteres"
                value={form.password}
                onChange={(e) => update("password", e.target.value)}
                onBlur={() => markTouched("password")}
                className={`pr-10 ${inputClass("password")}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            {form.password && (
              <div className="space-y-1 mt-1">
                {passwordChecks.map((c) => (
                  <div
                    key={c.label}
                    className="flex items-center gap-1.5 text-xs"
                  >
                    {c.ok ? (
                      <CheckCircle2 className="h-3 w-3 text-secondary" />
                    ) : (
                      <XCircle className="h-3 w-3 text-muted-foreground" />
                    )}
                    <span
                      className={
                        c.ok ? "text-secondary" : "text-muted-foreground"
                      }
                    >
                      {c.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="space-y-1.5">
            <FieldLabel htmlFor="confirmPassword" required>
              Confirmar contraseña
            </FieldLabel>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirm ? "text" : "password"}
                placeholder="Repite tu contraseña"
                value={form.confirmPassword}
                onChange={(e) => update("confirmPassword", e.target.value)}
                onBlur={() => markTouched("confirmPassword")}
                className={`pr-10 ${inputClass("confirmPassword")}`}
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showConfirm ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            {touched.confirmPassword && errors.confirmPassword && (
              <p className="text-xs text-destructive">
                {errors.confirmPassword}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: Información personal */}
      <section>
        <SectionHeader icon={User} title="Información personal" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <FieldLabel htmlFor="firstName" required>
              Primer nombre
            </FieldLabel>
            <Input
              id="firstName"
              placeholder="Primer nombre"
              value={form.firstName}
              onChange={(e) => update("firstName", e.target.value)}
              onBlur={() => markTouched("firstName")}
              className={inputClass("firstName")}
            />
            {touched.firstName && errors.firstName && (
              <p className="text-xs text-destructive">{errors.firstName}</p>
            )}
          </div>
          <div className="space-y-1.5">
            <FieldLabel htmlFor="secondName">Segundo nombre</FieldLabel>
            <Input
              id="secondName"
              placeholder="Segundo nombre (opcional)"
              value={form.secondName}
              onChange={(e) => update("secondName", e.target.value)}
            />
          </div>
          <div className="space-y-1.5">
            <FieldLabel htmlFor="firstLastName" required>
              Primer apellido
            </FieldLabel>
            <Input
              id="firstLastName"
              placeholder="Primer apellido"
              value={form.firstLastName}
              onChange={(e) => update("firstLastName", e.target.value)}
              onBlur={() => markTouched("firstLastName")}
              className={inputClass("firstLastName")}
            />
            {touched.firstLastName && errors.firstLastName && (
              <p className="text-xs text-destructive">
                {errors.firstLastName}
              </p>
            )}
          </div>
          <div className="space-y-1.5">
            <FieldLabel htmlFor="secondLastName">Segundo apellido</FieldLabel>
            <Input
              id="secondLastName"
              placeholder="Segundo apellido (opcional)"
              value={form.secondLastName}
              onChange={(e) => update("secondLastName", e.target.value)}
            />
          </div>
          <div className="space-y-1.5">
            <FieldLabel htmlFor="alias">Nombre alternativo / alias</FieldLabel>
            <Input
              id="alias"
              placeholder="Alias (opcional)"
              value={form.alias}
              onChange={(e) => update("alias", e.target.value)}
            />
          </div>
          <div className="space-y-1.5">
            <FieldLabel htmlFor="idNumber" required>
              Número de identificación
            </FieldLabel>
            <Input
              id="idNumber"
              placeholder="Número de documento"
              value={form.idNumber}
              onChange={(e) => update("idNumber", e.target.value)}
              onBlur={() => markTouched("idNumber")}
              className={inputClass("idNumber")}
            />
            {touched.idNumber && errors.idNumber && (
              <p className="text-xs text-destructive">{errors.idNumber}</p>
            )}
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: Información de contacto */}
      <section>
        <SectionHeader icon={Phone} title="Información de contacto" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <FieldLabel htmlFor="phone1">Teléfono principal</FieldLabel>
            <Input
              id="phone1"
              type="tel"
              placeholder="300 000 0000"
              value={form.phone1}
              onChange={(e) => update("phone1", e.target.value)}
            />
          </div>
          <div className="space-y-1.5">
            <FieldLabel htmlFor="phone2">Teléfono secundario</FieldLabel>
            <Input
              id="phone2"
              type="tel"
              placeholder="300 000 0000 (opcional)"
              value={form.phone2}
              onChange={(e) => update("phone2", e.target.value)}
            />
          </div>
          <div className="space-y-1.5 md:col-span-2">
            <FieldLabel htmlFor="address">Dirección</FieldLabel>
            <Input
              id="address"
              placeholder="Dirección completa"
              value={form.address}
              onChange={(e) => update("address", e.target.value)}
            />
          </div>
          <div className="space-y-1.5">
            <FieldLabel htmlFor="department">Departamento</FieldLabel>
            <Select
              value={form.department}
              onValueChange={(v) => update("department", v)}
            >
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Seleccionar departamento" />
              </SelectTrigger>
              <SelectContent className="bg-background z-50">
                {Object.keys(departamentos).map((dep) => (
                  <SelectItem key={dep} value={dep}>
                    {dep}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <FieldLabel htmlFor="city">Ciudad</FieldLabel>
            <Select
              value={form.city}
              onValueChange={(v) => update("city", v)}
              disabled={!form.department}
            >
              <SelectTrigger className="bg-background">
                <SelectValue
                  placeholder={
                    form.department
                      ? "Seleccionar ciudad"
                      : "Primero selecciona departamento"
                  }
                />
              </SelectTrigger>
              <SelectContent className="bg-background z-50">
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: Información institucional */}
      <section>
        <SectionHeader icon={Building2} title="Información institucional" />
        <div className="space-y-1.5">
          <FieldLabel htmlFor="institution">Institución</FieldLabel>
          <Input
            id="institution"
            placeholder="Nombre de la institución"
            value={form.institution}
            onChange={(e) => update("institution", e.target.value)}
          />
        </div>
      </section>

      {/* SECCIÓN 5: Información adicional */}
      <section>
        <SectionHeader icon={FileText} title="Información adicional" />
        <div className="space-y-4">
          <div className="space-y-1.5">
            <FieldLabel htmlFor="description">Descripción</FieldLabel>
            <Textarea
              id="description"
              placeholder="Cuéntanos sobre ti..."
              value={form.description}
              onChange={(e) => update("description", e.target.value)}
              className="min-h-[100px] bg-background"
            />
          </div>
          <div className="space-y-1.5 max-w-xs">
            <FieldLabel htmlFor="language">Idioma preferido</FieldLabel>
            <Select
              value={form.language}
              onValueChange={(v) => update("language", v)}
            >
              <SelectTrigger className="bg-background">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-background z-50">
                {idiomas.map((i) => (
                  <SelectItem key={i.value} value={i.value}>
                    {i.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
        <Button type="submit" variant="cta" size="lg" className="flex-1 sm:flex-none sm:min-w-[200px]">
          <User className="h-4 w-4 mr-2" />
          Crear usuario
        </Button>
        {onCancel && (
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={onCancel}
          >
            Cancelar
          </Button>
        )}
      </div>
    </form>
  );
};
