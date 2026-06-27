"use client";

import React from "react";
import {
  Badge,
  Button,
  Card,
  CardContent,
  Separator,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "silicon-system/packages/silicon-ui/dist/index.mjs";

// ── Icons ─────────────────────────────────────────────────────────────────────

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-5 h-5 text-[--si-primary]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" strokeWidth="2" />
      <polyline points="12 6 12 12 16 14" strokeWidth="2" />
    </svg>
  );
}

// ── Logo ──────────────────────────────────────────────────────────────────────

function AudioColorsLogo() {
  return (
    <a href="#" className="shrink-0 flex items-baseline gap-0" style={{ textDecoration: "none" }}>
      <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--si-heading-color)", letterSpacing: "-0.01em" }}>
        audio
      </span>
      <span
        style={{
          fontSize: "1.35rem",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          background: "linear-gradient(90deg,#ef4444,#f97316,#eab308,#22c55e,#3b82f6,#a855f7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        COLORS
      </span>
    </a>
  );
}

// ── Navbar ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Recetas CCSS", href: "#recetas-ccss" },
  { label: "Servicios", href: "#servicios" },
  { label: "Productos", href: "#productos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Ubicación", href: "#ubicacion" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full" style={{ backgroundColor: "var(--si-body-bg)", borderBottom: "1px solid var(--si-border-color)", boxShadow: "var(--si-shadow-sm)" }}>
      {/* Rainbow stripe */}
      <div style={{ height: "5px", display: "flex", width: "100%" }}>
        {["#ef4444", "#f97316", "#eab308", "#22c55e", "#3b82f6", "#a855f7"].map((c) => (
          <div key={c} style={{ flex: 1, backgroundColor: c }} />
        ))}
      </div>

      {/* Main bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
        <AudioColorsLogo />

        {/* Desktop nav */}
        <nav className="hidden md:flex" style={{ alignItems: "center", gap: "1.75rem" }}>
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--si-body-color)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--si-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--si-body-color)")}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <a href="https://wa.me/50688479893" target="_blank" rel="noopener noreferrer" className="hidden sm:block">
            <Button variant="primary" size="md" iconLeft={<WhatsAppIcon />}>
              Agendar cita
            </Button>
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden"
            aria-label="Abrir menú"
            onClick={() => setMenuOpen((v) => !v)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", color: "var(--si-heading-color)" }}
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden" style={{ borderTop: "1px solid var(--si-border-color)", backgroundColor: "var(--si-body-bg)", padding: "1rem 1.25rem 1.25rem" }}>
          <nav style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--si-body-color)", textDecoration: "none", padding: "0.75rem 0", borderBottom: "1px solid var(--si-border-color)" }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div style={{ marginTop: "1rem" }}>
            <a href="https://wa.me/50688479893" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
              <Button variant="primary" size="md" iconLeft={<WhatsAppIcon />} style={{ width: "100%" }}>
                Agendar cita
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="bg-[--si-body-bg]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div className="flex flex-col gap-5">
            <Badge variant="info" size="sm" className="self-start uppercase tracking-wide">
              Más allá de tus necesidades auditivas
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-[--si-heading-color]">
              Expertos en soluciones auditivas personalizadas
            </h1>
            <p className="text-[--si-body-color]">
              ¿Querés saber qué servicios ofrecemos?{" "}
              <a href="#servicios" className="text-[--si-primary] font-semibold hover:underline">
                Leer más
              </a>
            </p>
            <div className="rounded-[--si-border-radius-xl] overflow-hidden mt-2 lg:hidden aspect-[4/3] bg-[--si-gray-100] relative flex items-center justify-center">
              <img
                src="/images/team.jpg"
                alt="Equipo de audiólogos de AudioColors en Costa Rica"
                className="w-full h-full object-cover absolute inset-0"
                style={{ display: "none" }}
                onLoad={(e) => { (e.target as HTMLImageElement).style.display = "block"; }}
              />
              <span className="text-[--si-gray-400] text-sm font-medium select-none">Foto del equipo</span>
            </div>
          </div>

          {/* Right */}
          <div className="hidden lg:block">
            <div className="relative w-full rounded-[--si-border-radius-xl] overflow-hidden aspect-[4/3] bg-[--si-gray-100]">
              <img
                src="/images/hero-right.jpg"
                alt="Especialista en audiología atendiendo a paciente en AudioColors Costa Rica"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ display: "none" }} onLoad={(e) => { (e.target as HTMLImageElement).style.display = "block"; }}
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                <span className="text-[--si-gray-400] text-sm font-medium">Foto del especialista</span>
              </div>
              {/* Orange card */}
              <div
                className="absolute left-4 bottom-4 rounded-[--si-border-radius-xl] p-5 shadow-[--si-shadow-xl]"
                style={{ backgroundColor: "#f97316", width: "240px" }}
              >
              <p className="text-white text-xs font-semibold uppercase tracking-widest">audio</p>
              <p className="text-white text-xl font-extrabold">COLORS</p>
              <p className="text-white/70 text-[10px] uppercase tracking-widest mb-4">
                Especialidades Audiológicas
              </p>
              <p className="text-white text-sm leading-relaxed">
                Nos encargamos de combinar tecnología avanzada con un enfoque clínico especializado
                para brindarte un diagnóstico preciso y un tratamiento adaptado a tus necesidades.
              </p>
              <p className="text-white text-sm leading-relaxed mt-3">
                Siempre comprometidos con tu bienestar auditivo y tu calidad de vida.
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info strip */}
      <div className="border-t border-[--si-border-color]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[--si-body-color]">
            <ClockIcon />
            <span>
              <strong className="text-[--si-heading-color]">Lun – Vie:</strong> 8:00 am – 4:00 pm
            </span>
            <a href="#ubicacion" className="text-[--si-primary] hover:underline ml-2">
              Ver sucursales
            </a>
          </div>
          <a href="https://wa.me/50688479893" target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="sm" iconLeft={<WhatsAppIcon />}>
              Agendar cita
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

// ── CCSS Section ──────────────────────────────────────────────────────────────

function CCSSSection() {
  return (
    <section id="recetas-ccss" className="relative w-full" style={{ backgroundColor: "#1e293b" }}>
      <div className="grid lg:grid-cols-2 min-h-[500px]">
        <div className="relative overflow-hidden min-h-[300px] flex items-center justify-center" style={{ backgroundColor: "#374151" }}>
          <img
            src="/images/ccss.jpg"
            alt="AudioColors tramita recetas de audífonos de la CCSS en Costa Rica"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ display: "none" }} onLoad={(e) => { (e.target as HTMLImageElement).style.display = "block"; }}
          />
          <span className="relative text-gray-400 text-sm font-medium select-none">Foto Recetas CCSS</span>
        </div>
        <div className="flex items-center justify-center lg:justify-end px-6 lg:px-12 py-16">
          <div className="bg-white rounded-[--si-border-radius-xl] p-8 w-full max-w-md shadow-[--si-shadow-xl]">
            <h2 className="text-3xl font-extrabold text-[--si-heading-color] mb-4">
              Tramitamos recetas de audífonos de la CCSS
            </h2>
            <div className="flex gap-2 mb-5">
              {["#ef4444", "#f97316", "#eab308", "#22c55e", "#3b82f6", "#a855f7"].map((c) => (
                <div key={c} className="w-5 h-5 rounded-full" style={{ backgroundColor: c }} />
              ))}
            </div>
            <p className="text-[--si-body-color] text-sm leading-relaxed mb-6">
              En AudioColors te ayudamos a gestionar tus recetas de la Caja Costarricense del
              Seguro Social de forma rápida y sencilla, para que obtengás tus audífonos sin
              complicaciones.
            </p>
            <a href="https://wa.me/50688479893" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="md" iconLeft={<WhatsAppIcon />}>
                Agendar cita
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Reviews ───────────────────────────────────────────────────────────────────

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "#f59e0b" : "none"} stroke="#f59e0b" strokeWidth="1.5" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-label="Google" role="img">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

const REVIEWS = [
  {
    name: "Ana Rodríguez",
    rating: 5,
    date: "Hace 2 semanas",
    text: "Excelente atención de parte de todo el equipo. Me realizaron la audiometría de manera muy profesional y me explicaron cada paso del proceso. Totalmente recomendados.",
    location: "Pérez Zeledón",
  },
  {
    name: "Carlos Méndez",
    rating: 5,
    date: "Hace 1 mes",
    text: "Muy buena experiencia. Tramitaron mi receta de la CCSS sin ningún problema y en poco tiempo ya tenía mis audífonos. El seguimiento post-adaptación también fue muy bueno.",
    location: "Río Claro",
  },
  {
    name: "Ligia Brenes",
    rating: 5,
    date: "Hace 1 mes",
    text: "Profesionales de primer nivel. Me atendieron con mucha paciencia y me dieron todas las opciones disponibles para mi caso. Muy satisfecha con el servicio.",
    location: "Ciudad Neily",
  },
  {
    name: "Roberto Elizondo",
    rating: 5,
    date: "Hace 2 meses",
    text: "Gran equipo de audiólogos. El servicio de mantenimiento de mis audífonos fue rápido y efectivo. Sin duda volvería y los recomendaría a cualquier persona que necesite atención auditiva.",
    location: "Quepos",
  },
];

function ReviewsSection() {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const [active, setActive] = React.useState(0);
  const pausedRef = React.useRef(false);

  // Auto-advance every 4 s; pause on hover/touch
  React.useEffect(() => {
    const id = setInterval(() => {
      if (pausedRef.current) return;
      setActive((prev) => {
        const next = (prev + 1) % REVIEWS.length;
        scrollTo(next);
        return next;
      });
    }, 4000);
    return () => clearInterval(id);
  }, []);

  function scrollTo(index: number) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement;
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
  }

  function handleDotClick(i: number) {
    setActive(i);
    scrollTo(i);
  }

  // Sync active dot when user manually swipes
  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = (track.children[0] as HTMLElement)?.offsetWidth ?? 1;
    const idx = Math.round(track.scrollLeft / cardWidth);
    setActive(Math.min(idx, REVIEWS.length - 1));
  }

  return (
    <section className="py-16 lg:py-24 bg-[--si-body-bg] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-start justify-between gap-6 mb-10">
          <div>
            <Badge variant="info" size="sm" className="uppercase tracking-wide mb-4">
              Reseñas
            </Badge>
            <h2 className="text-3xl font-extrabold text-[--si-heading-color] mb-2">
              Qué opinan nuestros clientes
            </h2>
            <p className="text-[--si-body-color] max-w-xl">
              La experiencia de nuestros pacientes nos inspira a seguir mejorando cada día.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <GoogleIcon />
            <span className="text-sm font-semibold text-[--si-heading-color]">Google Reviews</span>
          </div>
        </div>
      </div>

      {/* Full-bleed scrollable track */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
        onTouchStart={() => { pausedRef.current = true; }}
        onTouchEnd={() => { pausedRef.current = false; }}
        style={{
          display: "flex",
          gap: "1.25rem",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
          paddingLeft: "max(1rem, calc((100vw - 80rem) / 2 + 1rem))",
          paddingRight: "max(1rem, calc((100vw - 80rem) / 2 + 1rem))",
          paddingBottom: "0.5rem",
        }}
      >
        {REVIEWS.map((r) => (
          <div
            key={r.name}
            style={{
              flex: "0 0 min(320px, 80vw)",
              scrollSnapAlign: "start",
            }}
            className="flex flex-col gap-3 rounded-[--si-border-radius-xl] p-5 border border-[--si-border-color] bg-[--si-body-bg] shadow-[--si-shadow-sm]"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                style={{ backgroundColor: "var(--si-primary)" }}
              >
                {r.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-[--si-heading-color] text-sm truncate">{r.name}</p>
                <p className="text-xs text-[--si-body-color]">{r.date}</p>
              </div>
            </div>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <StarIcon key={i} filled={i <= r.rating} />
              ))}
            </div>
            <p className="text-sm text-[--si-body-color] leading-relaxed flex-1">{r.text}</p>
            <div className="flex items-center gap-1.5 pt-1 border-t border-[--si-border-color]">
              <GoogleIcon />
              <span className="text-xs text-[--si-body-color]">{r.location}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {REVIEWS.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir a reseña ${i + 1}`}
            onClick={() => handleDotClick(i)}
            style={{
              width: i === active ? "1.5rem" : "0.5rem",
              height: "0.5rem",
              borderRadius: "9999px",
              border: "none",
              cursor: "pointer",
              transition: "width 0.3s, background-color 0.3s",
              backgroundColor: i === active ? "var(--si-primary)" : "var(--si-gray-300)",
              padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
}

// ── Services ──────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    image: "/images/service-audiometria-clinica.jpg",
    title: "Audiometría Clínica",
    description:
      "Comprende una prueba detallada que nos permite conocer con precisión tu nivel de audición y, de esta forma, detectar cualquier tipo de pérdida auditiva.",
    color: "#ef4444",
  },
  {
    image: "/images/service-audiometria-rastreo.jpg",
    title: "Audiometría de Rastreo",
    description:
      "Prueba auditiva rápida que ayuda a identificar si existe algún problema auditivo y evaluar si es necesario hacer estudios más detallados.",
    color: "#f97316",
  },
  {
    image: "/images/service-impedanciometria.jpg",
    title: "Impedanciometría",
    description:
      "Este estudio nos ayuda a revisar cómo está el funcionamiento de tu oído medio, detectando posibles infecciones, tapones o problemas en el tímpano.",
    color: "#eab308",
  },
  {
    image: "/images/service-salud-ocupacional.jpg",
    title: "Salud Auditiva Ocupacional",
    description:
      "Ofrecemos planes para empresas que buscan cuidar la audición de sus colaboradores, cumpliendo con los requisitos de salud laboral.",
    color: "#22c55e",
  },
  {
    image: "/images/service-protesis.jpg",
    title: "Prótesis Auditivas",
    description:
      "Adaptamos audífonos según tus necesidades y damos seguimiento para asegurar su buen funcionamiento. También recibimos recetas de audífonos de la CCSS.",
    color: "#3b82f6",
  },
  {
    image: "/images/service-mantenimiento.jpg",
    title: "Servicio de Mantenimiento",
    description:
      "Realizamos servicios de limpieza, revisión y ajustes de tus audífonos, garantizando su correcto funcionamiento y prolongando su vida útil.",
    color: "#a855f7",
  },
];

function ServicesSection() {
  return (
    <section id="servicios" className="py-16 lg:py-24 bg-[--si-body-bg]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-[--si-heading-color] mb-2">
          Conocé los servicios que ofrecemos
        </h2>
        <p className="text-[--si-body-color] mb-10 max-w-xl">
          Descubrí cómo podemos ayudarte a escuchar mejor, con soluciones diseñadas según tus
          necesidades auditivas.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s) => (
            <div key={s.title} className="flex flex-col">
              <div className="rounded-[--si-border-radius-lg] overflow-hidden aspect-[4/3] mb-4 bg-[--si-gray-100] relative flex items-center justify-center">
                <img
                  src={s.image}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ display: "none" }} onLoad={(e) => { (e.target as HTMLImageElement).style.display = "block"; }}
                />
                <div className="flex flex-col items-center gap-2 pointer-events-none select-none">
                  <div className="w-8 h-8 rounded-full" style={{ backgroundColor: s.color, opacity: 0.3 }} />
                  <span className="text-xs text-[--si-gray-400]">{s.title}</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-[--si-heading-color] mb-1">{s.title}</h3>
              <div className="h-1 w-16 rounded-full mb-3" style={{ backgroundColor: s.color }} />
              <p className="text-sm text-[--si-body-color] leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Products ──────────────────────────────────────────────────────────────────

const PRODUCTS = [
  {
    image: "/images/product-audifonos.jpg",
    title: "Audífonos",
    description:
      "Prótesis auditivas diseñadas para mejorar tu audición y tu calidad de vida. Contamos con modelos con conectividad al teléfono.",
  },
  {
    image: "/images/product-deshumidificador.jpg",
    title: "Deshumidificador",
    description:
      "Deshumidificador para audífonos, ideal para protegerlos de la humedad y alargar su vida útil. Fácil de usar y compatible con todo tipo de audífonos.",
  },
  {
    image: "/images/product-baterias.jpg",
    title: "Baterías para audífonos",
    description:
      "Pilas especiales para audífonos, ideales para brindar energía duradera a lo largo del día. Disponibles en distintos tamaños.",
  },
];

function ProductsSection() {
  return (
    <section id="productos" className="py-16 lg:py-24" style={{ backgroundColor: "#1e293b" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-start justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-2">Productos audiológicos</h2>
            <p className="text-white/70 max-w-lg">
              Encontrá productos audiológicos que complementan tu cuidado auditivo diario. Explorá
              nuestras opciones y solicitá más información para encontrar la solución ideal para vos.
            </p>
          </div>
          <a href="https://wa.me/50688479893" target="_blank" rel="noopener noreferrer">
            <Button variant="light" size="md">
              Solicitar información
            </Button>
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <Card key={p.title} className="overflow-hidden border-0 shadow-[--si-shadow]">
              <div className="aspect-[4/3] overflow-hidden relative flex items-center justify-center" style={{ backgroundColor: "#f59e0b" }}>
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ display: "none" }} onLoad={(e) => { (e.target as HTMLImageElement).style.display = "block"; }}
                />
                <span className="text-white/80 text-sm font-medium select-none">{p.title}</span>
              </div>
              <CardContent className="p-5">
                <h3 className="text-base font-bold text-[--si-heading-color] mb-2">{p.title}</h3>
                <p className="text-sm text-[--si-body-color] leading-relaxed">{p.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Sponsors ──────────────────────────────────────────────────────────────────

function SponsorsSection() {
  const logos = [
    { name: "CCSS", src: "/images/logo-ccss.png" },
    { name: "Banco Popular", src: "/images/logo-banco-popular.png" },
    { name: "Magisterio Nacional", src: "/images/logo-magisterio.png" },
  ];
  return (
    <section className="py-12 bg-[--si-body-bg] border-b border-[--si-border-color]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-[--si-body-color] uppercase tracking-widest mb-8">
          Sponsored by:
        </p>
        <div className="flex flex-wrap items-center gap-10">
          {logos.map((l) => (
            <div key={l.name} className="h-20 w-20 relative flex items-center justify-center bg-[--si-gray-100] rounded-[--si-border-radius]">
              <img
                src={l.src}
                alt={l.name}
                className="absolute inset-0 w-full h-full object-contain p-2"
                style={{ display: "none" }} onLoad={(e) => { (e.target as HTMLImageElement).style.display = "block"; }}
              />
              <span className="text-[10px] text-[--si-gray-500] font-semibold text-center leading-tight px-1 select-none">{l.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Team ──────────────────────────────────────────────────────────────────────

const TEAM = [
  { name: "Matthew Arias Mena", role: "MSc. Audiología", image: "/images/team-matthew.jpg", alt: "Matthew Arias Mena, Audiólogo MSc. en AudioColors Costa Rica" },
  { name: "María José Durán Arias", role: "MSc. Audiología", image: "/images/team-mariajose.jpg", alt: "María José Durán Arias, Audióloga MSc. en AudioColors Costa Rica" },
];

function TeamSection() {
  return (
    <section id="nosotros" className="py-16 lg:py-24 bg-[--si-body-bg]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Badge variant="info" size="sm" className="uppercase tracking-wide mb-4">
          Nuestros Audiólogos
        </Badge>
        <h2 className="text-3xl font-extrabold text-[--si-heading-color] mb-2">
          Conocé a nuestros especialistas en salud auditiva
        </h2>
        <p className="text-[--si-body-color] mb-10">
          En AudioColors contamos con especialistas comprometidos en brindarte una atención cercana
          y personalizada.
        </p>
        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl">
          {TEAM.map((m) => (
            <div key={m.name} className="flex flex-col items-center text-center">
              <div className="w-full rounded-[--si-border-radius-xl] overflow-hidden mb-4 aspect-[4/3] bg-[--si-gray-100] relative flex items-center justify-center">
                <img
                  src={m.image}
                  alt={m.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ display: "none" }} onLoad={(e) => { (e.target as HTMLImageElement).style.display = "block"; }}
                />
                <div className="flex flex-col items-center gap-2 select-none pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-[--si-gray-200] flex items-center justify-center text-2xl text-[--si-gray-400] font-bold">
                    {m.name.charAt(0)}
                  </div>
                  <span className="text-xs text-[--si-gray-400]">Foto próximamente</span>
                </div>
              </div>
              <p className="text-sm text-[--si-body-color]">{m.role}</p>
              <p className="font-bold text-[--si-heading-color]">{m.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Locations ─────────────────────────────────────────────────────────────────

const LOCATIONS = [
  {
    id: "perez-zeledon",
    label: "Perez Zeledón",
    clinic: "Clínica AudioColors Pérez Zeledón",
    address: "San Isidro de El General, Pérez Zeledón, San José",
    phone: "+506 8447-9893",
    email: "audiocolors@gmail.com",
    mapSrc: "https://maps.google.com/maps?q=Perez+Zeledon+Costa+Rica&output=embed",
  },
  {
    id: "rio-claro",
    label: "Río Claro",
    clinic: "Centro Médico Yireh, Río Claro",
    address: "Detrás de la Ferretería Impala, Provincia de Puntarenas, Río Claro, 60703",
    phone: "+506 8447-9893",
    email: "audiocolors@gmail.com",
    mapSrc: "https://maps.google.com/maps?q=Rio+Claro+Puntarenas+Costa+Rica&output=embed",
  },
  {
    id: "ciudad-neily",
    label: "Ciudad Neily",
    clinic: "AudioColors Ciudad Neily",
    address: "Ciudad Neily, Corredores, Puntarenas",
    phone: "+506 8447-9893",
    email: "audiocolors@gmail.com",
    mapSrc: "https://maps.google.com/maps?q=Ciudad+Neily+Costa+Rica&output=embed",
  },
  {
    id: "quepos",
    label: "Quepos",
    clinic: "AudioColors Quepos",
    address: "Quepos, Puntarenas, Costa Rica",
    phone: "+506 8447-9893",
    email: "audiocolors@gmail.com",
    mapSrc: "https://maps.google.com/maps?q=Quepos+Puntarenas+Costa+Rica&output=embed",
  },
  {
    id: "uvita",
    label: "Uvita",
    clinic: "AudioColors Uvita",
    address: "Uvita, Osa, Puntarenas, Costa Rica",
    phone: "+506 8447-9893",
    email: "audiocolors@gmail.com",
    mapSrc: "https://maps.google.com/maps?q=Uvita+Osa+Puntarenas+Costa+Rica&output=embed",
  },
];

function LocationsSection() {
  return (
    <section id="ubicacion" className="py-16 lg:py-24 bg-[--si-body-bg]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Badge variant="info" size="sm" className="uppercase tracking-wide mb-4">
          Ubicación
        </Badge>
        <h2 className="text-3xl font-extrabold text-[--si-heading-color] mb-2">
          Ubicá nuestros centros de servicio
        </h2>
        <p className="text-[--si-body-color] mb-8 max-w-xl">
          Contamos con 5 puntos de atención en la zona sur de Costa Rica. Explorá nuestras sedes y
          descubrí la dirección e información de contacto de cada una.
        </p>
        <Tabs defaultValue="perez-zeledon">
          <TabsList className="mb-8">
            {LOCATIONS.map((loc) => (
              <TabsTrigger key={loc.id} value={loc.id}>
                {loc.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {LOCATIONS.map((loc) => (
            <TabsContent key={loc.id} value={loc.id}>
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Info */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[--si-primary-faded] flex items-center justify-center font-bold text-[--si-primary]">
                      AC
                    </div>
                    <h3 className="text-xl font-bold text-[--si-heading-color]">{loc.clinic}</h3>
                  </div>
                  <div className="flex flex-col gap-4 text-sm">
                    {[
                      { label: "Dirección", value: loc.address, href: undefined },
                      { label: "Teléfono", value: loc.phone, href: `tel:${loc.phone.replace(/\s/g, "")}` },
                      { label: "Correo electrónico", value: loc.email, href: `mailto:${loc.email}` },
                    ].map(({ label, value, href }) => (
                      <div key={label}>
                        <p className="text-[--si-body-color] text-xs uppercase tracking-wide mb-1">
                          {label}
                        </p>
                        {href ? (
                          <a href={href} className="font-semibold text-[--si-heading-color] hover:text-[--si-primary]">
                            {value}
                          </a>
                        ) : (
                          <p className="font-semibold text-[--si-heading-color]">{value}</p>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-col gap-3 items-start">
                    <a href="https://wa.me/50688479893" target="_blank" rel="noopener noreferrer">
                      <Button variant="primary" size="md" iconLeft={<WhatsAppIcon />}>
                        Agendar cita
                      </Button>
                    </a>
                    <Separator className="w-full" />
                    <p className="text-sm text-[--si-body-color]">
                      ¿Te gustó tu visita? Ayudanos dejando un comentario en Google sobre tu
                      experiencia en AudioColors.
                    </p>
                    <Button variant="outline" size="sm">
                      Añadir reseña
                    </Button>
                  </div>
                </div>

                {/* Map */}
                <div>
                  <div className="rounded-[--si-border-radius-xl] overflow-hidden border border-[--si-border-color] aspect-[4/3]">
                    <iframe
                      src={loc.mapSrc}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Mapa ${loc.clinic}`}
                    />
                  </div>
                  <p className="text-sm text-[--si-body-color] mt-4">
                    También podés encontrar la dirección exacta ingresando a Waze o Google Maps:
                  </p>
                  <div className="flex gap-3 mt-3">
                    <a
                      href="https://waze.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[--si-gray-100] flex items-center justify-center hover:bg-[--si-gray-200] transition-colors"
                      title="Waze"
                    >
                      <span className="text-xs font-bold text-[#33CCFF]">W</span>
                    </a>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[--si-gray-100] flex items-center justify-center hover:bg-[--si-gray-200] transition-colors"
                      title="Google Maps"
                    >
                      <span className="text-xs font-bold text-[#4285F4]">G</span>
                    </a>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────

const FOOTER_COLUMNS = [
  {
    title: "Enlaces rápidos",
    links: [
      { label: "Recetas CCSS", href: "#recetas-ccss" },
      { label: "Servicios", href: "#servicios" },
      { label: "Productos", href: "#productos" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Ubicación", href: "#ubicacion" },
    ],
  },
  {
    title: "Seguínos",
    links: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Facebook", href: "https://facebook.com" },
    ],
  },
  {
    title: "Contactanos",
    links: [
      { label: "+506 8447-9893", href: "https://wa.me/50688479893" },
      { label: "audiocolors@gmail.com", href: "mailto:audiocolors@gmail.com" },
    ],
  },
];

function SiteFooter() {
  return (
    <footer style={{ backgroundColor: "#0b0f19" }} className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 py-12 lg:grid-cols-5 lg:py-16">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-0.5 mb-4">
              <span className="text-sm font-semibold text-white">audio</span>
              <span
                className="text-xl font-extrabold tracking-tight"
                style={{
                  background: "linear-gradient(90deg,#ef4444,#f97316,#eab308,#22c55e,#3b82f6,#a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                COLORS
              </span>
            </a>
            <p className="text-sm text-gray-400">
              En AudioColors trabajamos por una mejor salud auditiva, acercando nuestros servicios a
              la población costarricense y creando conciencia sobre la importancia de cuidar tu
              audición.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { label: "Instagram", href: "https://instagram.com", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
                { label: "Facebook", href: "https://facebook.com", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full transition-all"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--si-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-gray-400" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors duration-150 hover:text-[--si-primary]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 py-6 text-sm text-gray-400 flex flex-wrap items-center justify-between gap-2">
          <p>© AudioColors {new Date().getFullYear()}. Todos los derechos reservados.</p>
          <p>
            Diseño y desarrollo por{" "}
            <a
              href="https://github.com/fvillacis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[--si-primary] transition-colors"
            >
              Farid Villacis
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <CCSSSection />
      <ReviewsSection />
      <ServicesSection />
      <ProductsSection />
      <SponsorsSection />
      <TeamSection />
      <LocationsSection />
      <SiteFooter />
    </main>
  );
}
