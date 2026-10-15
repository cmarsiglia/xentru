import { ButtonLink, CheckIcon, Container, SectionLabel } from "./ui";

const stats = [
  {
    n: "001",
    value: "24/7",
    title: "Agentes AI respondiendo",
    text: "Cada lead recibe respuesta aunque estés dormido o cerrado.",
  },
  {
    n: "002",
    value: "<5 s",
    title: "Tiempo de respuesta",
    text: "El lead se siente atendido en el momento exacto de escribir.",
  },
  {
    n: "003",
    value: "5+",
    title: "Canales conectados",
    text: "Meta, TikTok, Google, WhatsApp, Instagram y tu web en un flujo.",
  },
  {
    n: "004",
    value: "100%",
    title: "Seguimiento sin fugas",
    text: "Ningún lead se pierde: calificación y follow-up automatizados.",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-3xl"
      />
      <Container className="relative pt-16 pb-14 sm:pt-24 sm:pb-20">
        <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionLabel>Automatizaciones con AI · Colombia → LatAm</SectionLabel>
            <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,5rem)] font-medium leading-[0.98] tracking-tight">
              Captura, califica y sigue cada lead <span className="text-primary">con AI</span>.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
              En Xentru implementamos agentes de AI y automatizaciones para que
              tu negocio atraiga clientes con Meta, TikTok y Google Ads, los
              aterrice en WhatsApp, Instagram o tu web, y no pierda ni un solo
              lead en el camino.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <ButtonLink href="#contacto">Agendar diagnóstico gratuito</ButtonLink>
              <ButtonLink href="#servicios" variant="outline">
                Ver servicios
              </ButtonLink>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-line bg-ink p-6 text-white shadow-[0_30px_60px_-30px_rgba(26,26,26,0.45)]">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <p className="font-display text-xs tracking-[0.2em] uppercase text-white/50">
                  (Flujo automatizado)
                </p>
                <span className="flex items-center gap-1.5 rounded-full bg-primary/15 px-2.5 py-1 text-xs text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  En vivo
                </span>
              </div>

              <div className="mt-5 space-y-3.5">
                <div className="flex justify-start">
                  <span className="rounded-2xl rounded-tl-sm border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/70">
                    Hola, vi su anuncio. ¿Cuánto cuesta?
                  </span>
                </div>
                <div className="flex justify-end">
                  <span className="rounded-2xl rounded-tr-sm bg-primary px-4 py-2.5 text-sm text-white">
                    ¡Hola! Te cuento en 30 segundos. ¿Tu negocio es para
                    servicios o productos?
                  </span>
                </div>
                <div className="flex justify-start">
                  <span className="rounded-2xl rounded-tl-sm border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/70">
                    Somos servicios, operamos en Medellín.
                  </span>
                </div>
                <div className="flex justify-end">
                  <span className="rounded-2xl rounded-tr-sm bg-primary px-4 py-2.5 text-sm text-white">
                    Perfecto. Te agendé una llamada para mañana 10:00 a. m.
                    ¿Te llega el recordatorio por WhatsApp?
                  </span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                {["Lead calificado", "Cita agendada", "WhatsApp + CRM"].map(
                  (chip) => (
                    <span
                      key={chip}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70"
                    >
                      <CheckIcon className="text-primary" />
                      {chip}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="absolute -left-4 -top-5 hidden rounded-2xl border border-line bg-white px-4 py-3 shadow-lg sm:block">
              <p className="text-xs text-muted-soft">Leads hoy</p>
              <p className="font-display text-lg font-semibold">+128</p>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-y border-line bg-cream">
        <Container className="grid grid-cols-2 gap-px bg-line sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.n} className="bg-cream px-4 py-8 sm:px-6">
              <p className="font-display text-xs text-muted-soft">({stat.n})</p>
              <p className="mt-4 font-display text-3xl font-medium tracking-tight text-primary sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 font-display text-sm font-medium">
                {stat.title}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {stat.text}
              </p>
            </div>
          ))}
        </Container>
      </div>
    </section>
  );
}

const platforms = [
  "Meta Ads",
  "TikTok Ads",
  "Google Ads",
  "WhatsApp Business",
  "Instagram DM",
  "Facebook",
  "Pixel de Meta",
  "Shopify",
  "Smart Forms",
  "Comentarios automáticos",
  "Chat embebido",
];

export function Ticker() {
  const row = [...platforms, ...platforms];

  return (
    <div className="overflow-hidden border-b border-line bg-cream py-5">
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap sm:gap-14">
        {row.map((platform, index) => (
          <span
            key={`${platform}-${index}`}
            className="flex items-center gap-10 font-display text-sm uppercase tracking-[0.18em] text-muted-soft sm:gap-14"
          >
            {platform}
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </div>
  );
}
