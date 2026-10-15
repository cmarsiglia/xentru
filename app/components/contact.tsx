"use client";

import { useState } from "react";
import { ArrowIcon, Container, SectionLabel } from "./ui";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contacto" className="bg-ink pt-20 text-white sm:pt-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <SectionLabel dark>Hablemos</SectionLabel>
            <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,3.75rem)] font-medium leading-[1.02] tracking-tight text-white">
              ¿Cuántos leads estás <span className="text-primary">perdiendo</span> al mes?
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/60">
              Agenda un diagnóstico gratuito. Revisamos tus canales, te
              mostramos dónde se escapan los leads y qué automatizar primero.
              Sin compromiso.
            </p>

            <div className="mt-10 space-y-4 border-t border-white/10 pt-8">
              <a
                href="mailto:hola@xentru.pro"
                className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-primary"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      d="M2 4.5h12v7H2v-7Zm0 .5 6 4 6-4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                hola@xentru.pro
              </a>
              <p className="flex items-center gap-3 text-sm text-white/70">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12Zm0-9v3l2 1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Atención en Colombia y toda LatAm
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            {sent ? (
              <div className="flex h-full min-h-[22rem] flex-col items-start justify-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    aria-hidden="true"
                    className="h-5 w-5"
                  >
                    <path
                      d="m3.5 8.5 3 3 6-7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 className="font-display text-2xl font-medium tracking-tight">
                  ¡Mensaje enviado!
                </h3>
                <p className="max-w-sm text-sm leading-relaxed text-white/60">
                  Gracias por escribir. Te contactamos en menos de 24 horas
                  hábiles para agendar tu diagnóstico.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-2 font-display text-sm text-primary underline underline-offset-4"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setSent(true);
                }}
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="font-display text-xs uppercase tracking-[0.15em] text-white/50">
                      Nombre*
                    </span>
                    <input
                      required
                      type="text"
                      name="name"
                      autoComplete="name"
                      placeholder="Tu nombre"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-primary focus:outline-none"
                    />
                  </label>
                  <label className="block">
                    <span className="font-display text-xs uppercase tracking-[0.15em] text-white/50">
                      WhatsApp o email*
                    </span>
                    <input
                      required
                      type="text"
                      name="contact"
                      placeholder="+57 300 000 0000"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-primary focus:outline-none"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="font-display text-xs uppercase tracking-[0.15em] text-white/50">
                    Empresa
                  </span>
                  <input
                    type="text"
                    name="company"
                    placeholder="Nombre de tu negocio"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-primary focus:outline-none"
                  />
                </label>

                <label className="block">
                  <span className="font-display text-xs uppercase tracking-[0.15em] text-white/50">
                    ¿Qué necesitas automatizar?*
                  </span>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Ej: contestar WhatsApp de mis anuncios y agendar citas..."
                    className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-primary focus:outline-none"
                  />
                </label>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-primary px-6 py-3.5 font-display text-sm font-medium text-white transition-colors hover:bg-white hover:text-ink sm:w-auto"
                >
                  Solicitar diagnóstico gratuito
                  <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>

      <Container className="mt-20 border-t border-white/10 py-8">
        <p className="font-display text-[clamp(3rem,13vw,10rem)] font-semibold leading-none tracking-tight text-white/10 select-none">
          xentru.
        </p>
      </Container>
    </section>
  );
}
