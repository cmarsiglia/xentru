import { ArrowIcon, Container, SectionLabel, SectionTitle, Slash } from "./ui";

const services = [
  {
    n: "001",
    title: "Captación con Ads",
    text: "Meta Ads, TikTok Ads y Google Ads con pixel de Meta para atraer tráfico de calidad y aterrizarlo en el canal donde tu cliente sí responde.",
    tags: ["Meta", "TikTok", "Google"],
    icon: (
      <path
        d="M3 9v3a1 1 0 0 0 1 1h1.5L9 15V5L5.5 7H4a1 1 0 0 0-1 1v1Zm11.5-2.5a4 4 0 0 1 0 7M13 10a1.5 1.5 0 0 1 0-2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    n: "002",
    title: "Agentes de AI",
    text: "Agentes que conversan por WhatsApp, DM de Instagram y Facebook, y comentarios automatizados: responden, califican y agendan por ti.",
    tags: ["WhatsApp", "Instagram", "Facebook"],
    icon: (
      <path
        d="M8 3.5a4.5 4.5 0 0 1 4.5 4.5v1.2c0 .8.3 1.6.9 2.1l.6.6c.5.5.2 1.4-.6 1.4H4.6c-.8 0-1.1-.9-.6-1.4l.6-.6c.6-.5.9-1.3.9-2.1V8A4.5 4.5 0 0 1 8 3.5ZM6.5 16.5h3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    n: "003",
    title: "Landing pages & Shopify",
    text: "Landing pages y tiendas virtuales en Shopify diseñadas para convertir: mensaje claro, velocidad y seguimiento de cada visita.",
    tags: ["Shopify", "CRO", "Diseño"],
    icon: (
      <path
        d="M2.5 5.5 8 2.5l5.5 3v6L8 14.5l-5.5-3v-6ZM2.5 5.5 8 8.5m0 0 5.5-3M8 8.5v6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    n: "004",
    title: "Smart Forms & Chat widget",
    text: "Formularios inteligentes y chat embebido en tu web que captan leads sin fricción y los envían directo a tu flujo automatizado.",
    tags: ["Web", "Lead capture"],
    icon: (
      <path
        d="M3 4.5h10v7H8l-3 2.5V11.5H3v-7ZM5.5 7h5M5.5 9h3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    n: "005",
    title: "Traffic er Meta",
    text: "Gestión de tus creativos y anuncios en redes sociales: producción, prueba de variantes y reportes claros de rendimiento.",
    tags: ["Creativos", "Media buying"],
    icon: (
      <path
        d="M3 12.5V8m3.5 4.5V5m3.5 7.5V9m3.5 3.5V3.5M2.5 14.5h11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    n: "006",
    title: "Seguimiento y calificación",
    text: "Nurturing, recordatorios y handoff a tu equipo comercial. Cada lead recibe el siguiente paso hasta cerrar la venta.",
    tags: ["CRM", "Follow-up"],
    icon: (
      <path
        d="M8 14a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-9v3.2l2.2 1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export function Services() {
  return (
    <section id="servicios" className="bg-ink py-20 text-white sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel dark>Lo que hacemos</SectionLabel>
            <SectionTitle className="mt-5 text-white">
              Servicios <Slash>Xentru</Slash>
            </SectionTitle>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/60">
            Soluciones e implementación completa: de la atracción con anuncios
            al agente de AI que cierra el ciclo con cada prospecto.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.n}
              className="group relative flex flex-col bg-ink p-7 transition-colors duration-300 hover:bg-ink-soft sm:p-8"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-primary transition-colors group-hover:border-primary/40 group-hover:bg-primary group-hover:text-white">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    aria-hidden="true"
                    className="h-5 w-5"
                  >
                    {service.icon}
                  </svg>
                </span>
                <span className="font-display text-xs text-white/40">
                  ({service.n})
                </span>
              </div>

              <h3 className="mt-6 font-display text-xl font-medium tracking-tight">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
                {service.text}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50"
                  >
                    {tag}
                  </span>
                ))}
                <span className="ml-auto text-white/30 transition-all duration-300 group-hover:text-primary">
                  <ArrowIcon />
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
