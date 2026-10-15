import { CheckIcon, Container, SectionLabel, SectionTitle, Slash } from "./ui";

const stages = [
  {
    n: "01",
    title: "Atracción",
    text: "Campañas en Meta Ads, TikTok Ads y Google Ads con pixel de Meta instalado para medir de verdad qué anuncio trae clientes.",
    items: ["Creativos y copy", "Píxel y eventos de conversión", "Públicos y retargeting"],
  },
  {
    n: "02",
    title: "Captación",
    text: "El lead aterriza donde convierte mejor: landing page, tienda Shopify, smart form, chat widget o directo a WhatsApp.",
    items: ["Landing pages", "Tiendas Shopify", "Smart forms y chat embebido"],
  },
  {
    n: "03",
    title: "Seguimiento y cierre",
    text: "Los agentes de AI responden en segundos por WhatsApp, DM y comentarios, califican al prospecto y agendan la venta.",
    items: ["Respuesta 24/7", "Calificación automática", "Agenda y CRM"],
  },
];

const steps = [
  {
    n: "001",
    title: "Diagnóstico",
    subtitle: "Claridad antes que código.",
    text: "Revisamos tus canales, oferta y embudo actual. Definimos qué automatizar primero para que tenga impacto en ventas, no en vanidad.",
  },
  {
    n: "002",
    title: "Implementación",
    subtitle: "Construimos el sistema completo.",
    text: "Instalamos pixel, montamos landing o tienda, configuramos agentes de AI, conectamos WhatsApp e Instagram y dejamos todo probado.",
  },
  {
    n: "003",
    title: "Optimización",
    subtitle: "Lanzar es el comienzo.",
    text: "Medimos conversiones, afinamos creativos y respuestas del agente, y escalamos lo que funciona. Reportes claros cada mes.",
  },
];

export function System() {
  return (
    <>
      <section id="sistema" className="py-20 sm:py-28">
        <Container>
          <div className="max-w-2xl">
            <SectionLabel>Cómo funciona</SectionLabel>
            <SectionTitle className="mt-5">
              Un sistema, <Slash>tres etapas</Slash>
            </SectionTitle>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Conectamos la atracción con la atención: el mismo lead pasa de
              ver tu anuncio a hablar con un agente de AI sin que se caiga en
              ningún punto intermedio.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {stages.map((stage) => (
              <article
                key={stage.n}
                className="flex flex-col rounded-3xl border border-line bg-white p-7 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <span className="font-display text-sm font-medium text-primary">
                    {stage.n}
                  </span>
                  <span className="h-px flex-1 bg-line" />
                </div>
                <h3 className="mt-5 font-display text-xl font-medium tracking-tight">
                  {stage.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {stage.text}
                </p>
                <ul className="mt-6 space-y-2.5 border-t border-line pt-5">
                  {stage.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-ink"
                    >
                      <CheckIcon className="text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="proceso" className="border-t border-line bg-sand/60 py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionLabel>Cómo trabajamos</SectionLabel>
              <SectionTitle className="mt-5">
                Cada proyecto <br />
                <Slash>hecho para durar</Slash>
              </SectionTitle>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
                Trabajamos con empresas y negocios de Colombia y LatAm que
                quieren dejar de perder leads por no contestar a tiempo.
              </p>
            </div>

            <div className="divide-y divide-line border-y border-line">
              {steps.map((step) => (
                <div
                  key={step.n}
                  className="group grid gap-3 py-7 sm:grid-cols-[auto_1fr] sm:gap-8"
                >
                  <span className="font-display text-sm text-muted-soft">
                    ({step.n})
                  </span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="font-display text-xl font-medium tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-sm text-primary">{step.subtitle}</p>
                    </div>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
