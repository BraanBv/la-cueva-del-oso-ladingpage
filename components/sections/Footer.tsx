import { business, fullAddress, whatsappLink, defaultReservationMessage } from "@/lib/site";
import { BearMark } from "../Icons";

export function Footer() {
  return (
    <footer className="bg-coal pt-16 pb-28 md:pb-12">
      <div className="container-x">
        <div className="grid gap-10 border-b border-bone/10 pb-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <BearMark className="size-10 text-brass" />
              <div>
                <p className="display text-3xl">La Cueva del Oso</p>
                <p className="eyebrow !text-[0.65rem] text-bone-dim">Steak House · San Juan del Río</p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-bone-dim">
              Cortes finos, hamburguesas artesanales, cerveza y buen ambiente familiar en San Juan del Río,
              Querétaro.
            </p>
          </div>

          <div className="text-sm md:col-span-4">
            <p className="eyebrow text-bone-dim">Dirección</p>
            <p className="mt-3 leading-relaxed">{fullAddress}</p>
            <p className="eyebrow mt-6 text-bone-dim">Horario</p>
            <p className="mt-3 leading-relaxed">
              Mar – Sáb · 1 PM – 11 PM
              <br />
              Dom · 1 PM – 10 PM
              <br />
              <span className="text-bone-dim">Lunes cerrado</span>
            </p>
          </div>

          <div className="text-sm md:col-span-3">
            <p className="eyebrow text-bone-dim">Reservaciones</p>
            <a href={`tel:${business.phoneE164}`} className="mt-3 block hover:text-brass">
              {business.phoneDisplay}
            </a>
            <a
              href={whatsappLink(defaultReservationMessage)}
              target="_blank"
              rel="noopener"
              className="mt-1 block hover:text-brass"
            >
              WhatsApp
            </a>
            <a href={business.mapsUrl} target="_blank" rel="noopener" className="mt-1 block hover:text-brass">
              Google Maps
            </a>
          </div>
        </div>

        <p className="pt-8 text-xs text-bone-dim">
          © {new Date().getFullYear()} {business.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
