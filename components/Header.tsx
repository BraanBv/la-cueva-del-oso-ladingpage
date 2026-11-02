"use client";

import { useEffect, useState } from "react";
import { business, whatsappLink, defaultReservationMessage } from "@/lib/site";
import { BearMark, CloseIcon, MenuIcon, WhatsAppIcon } from "./Icons";

const links = [
  { href: "#cortes", label: "Cortes" },
  { href: "#menu", label: "Menú" },
  { href: "#ambiente", label: "Ambiente" },
  { href: "#visitanos", label: "Visítanos" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-b border-bone/10 bg-coal/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-18">
        <a href="#inicio" className="group flex items-center gap-2.5" aria-label={`${business.name}, ir al inicio`}>
          <BearMark className="size-7 text-brass transition-transform duration-500 group-hover:-rotate-6" />
          <span className="leading-none">
            <span className="display block text-[1.35rem] tracking-wide">La Cueva del Oso</span>
            <span className="eyebrow mt-0.5 block !text-[0.6rem] text-bone-dim">Steak House · SJR</span>
          </span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-bone-dim transition-colors hover:text-bone">
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink(defaultReservationMessage)}
            target="_blank"
            rel="noopener"
            className="btn btn-brass !min-h-10 !px-5 text-sm"
          >
            Reservar
          </a>
        </nav>

        <button
          type="button"
          className="-mr-2 grid size-11 place-items-center md:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
        </button>
      </div>

      <div
        id="menu-movil"
        hidden={!open}
        className="h-[calc(100dvh-4rem)] border-t border-bone/10 bg-coal md:hidden"
      >
        <nav aria-label="Móvil" className="container-x flex flex-col py-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="display border-b border-bone/10 py-4 text-4xl"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink(defaultReservationMessage)}
            target="_blank"
            rel="noopener"
            className="btn btn-brass mt-8"
          >
            <WhatsAppIcon /> Reservar por WhatsApp
          </a>
          <a href={`tel:${business.phoneE164}`} className="btn btn-ghost mt-3">
            Llamar al {business.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
