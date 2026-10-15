import { Container } from "./ui";

const nav = [
  { href: "#servicios", label: "Servicios" },
  { href: "#sistema", label: "Sistema" },
  { href: "#proceso", label: "Proceso" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

const social = [
  { href: "https://instagram.com/", label: "Instagram" },
  { href: "https://www.linkedin.com/", label: "LinkedIn" },
  { href: "https://x.com/", label: "X" },
];

export function Footer() {
  return (
    <footer className="bg-ink pb-10 text-white">
      <Container>
        <div className="flex flex-col gap-8 border-t border-white/10 pt-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <a href="#" className="font-logo text-xl font-semibold tracking-tight">
              xentru<span className="text-primary">.</span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/50">
              Automatizaciones con AI y agentes de AI para captar, calificar y
              hacer seguimiento a tus leads. Colombia → LatAm.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-8">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.2em] text-white/40">
                Navegación
              </p>
              <ul className="mt-4 space-y-2.5">
                {nav.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-display text-xs uppercase tracking-[0.2em] text-white/40">
                Redes
              </p>
              <ul className="mt-4 space-y-2.5">
                {social.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/70 transition-colors hover:text-primary"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-display text-xs uppercase tracking-[0.2em] text-white/40">
                Contacto
              </p>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href="mailto:hola@xentru.pro"
                    className="text-sm text-white/70 transition-colors hover:text-primary"
                  >
                    hola@xentru.pro
                  </a>
                </li>
                <li className="text-sm text-white/70">Bogotá, Colombia</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Xentru. Todos los derechos reservados.</p>
          <p>Hecho en Colombia para LatAm.</p>
        </div>
      </Container>
    </footer>
  );
}
