"use client";

import { useState } from "react";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#sistema", label: "Sistema" },
  { href: "#proceso", label: "Proceso" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#"
          className="font-display text-xl font-semibold tracking-tight"
        >
          xentru<span className="text-primary">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-sm text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="group hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-display text-sm font-medium text-white transition-colors hover:bg-primary sm:inline-flex"
          >
            Hablemos
            <span className="text-primary transition-colors group-hover:text-white">
              →
            </span>
          </a>

          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 block h-px w-4 bg-ink transition-transform ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-4 bg-ink transition-transform ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-cream md:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col px-5 py-4 sm:px-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/70 py-3.5 font-display text-base text-ink last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-ink px-5 py-3 text-center font-display text-sm font-medium text-white"
            >
              Hablemos
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
