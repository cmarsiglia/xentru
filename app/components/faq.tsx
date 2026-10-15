import { Container, SectionLabel, SectionTitle, Slash } from "./ui";

const faqs = [
  {
    q: "¿Qué es un agente de AI y en qué me ayuda?",
    a: "Es un asistente entrenado con la información de tu negocio que conversa con tus clientes por WhatsApp, Instagram y Facebook. Responde dudas, califica al prospecto, agenda citas y avisa a tu equipo solo cuando hay una venta real en juego.",
  },
  {
    q: "¿Cuánto tarda la implementación?",
    a: "Un flujo básico (respuesta automatizada en WhatsApp + captación de un canal) suele estar funcionando en 1 a 2 semanas. Un sistema completo con campañas, landing page o tienda Shopify y agentes toma entre 3 y 6 semanas según el alcance.",
  },
  {
    q: "¿Necesito un equipo técnico para mantenerlo?",
    a: "No. Nosotros configuramos, documentamos y damos soporte. Tu equipo solo recibe los leads calificados y las citas agendadas en el canal que ya usa.",
  },
  {
    q: "¿Con qué canales y herramientas se integra?",
    a: "Meta Ads, TikTok Ads y Google Ads con pixel de Meta; WhatsApp, Instagram y Facebook; landing pages, smart forms y chat embebido en tu web; y tiendas virtuales Shopify.",
  },
  {
    q: "¿Trabajan solo en Colombia?",
    a: "Somos de Colombia y trabajamos con negocios de toda LatAm. Todos los procesos se manejan de forma remota, con horarios adaptados a tu zona.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionLabel>Preguntas frecuentes</SectionLabel>
            <SectionTitle className="mt-5">
              Dudas <Slash>comunes</Slash>
            </SectionTitle>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-muted">
              Lo que suelen preguntarnos antes de arrancar. Si tu duda no está
              aquí, escríbenos y te respondemos el mismo día.
            </p>
          </div>

          <div className="divide-y divide-line border-y border-line">
            {faqs.map((faq, index) => (
              <details key={faq.q} className="group" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 font-display text-base font-medium tracking-tight marker:hidden sm:text-lg">
                  <span className="flex gap-4">
                    <span className="font-display text-sm font-normal text-muted-soft">
                      ({String(index + 1).padStart(3, "0")})
                    </span>
                    {faq.q}
                  </span>
                  <span className="relative mt-1.5 h-3.5 w-3.5 shrink-0 text-primary">
                    <span className="absolute left-0 top-1.5 h-px w-3.5 bg-current" />
                    <span className="absolute left-1.5 top-0 h-3.5 w-px bg-current transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 pl-0 text-sm leading-relaxed text-muted sm:pl-10">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
