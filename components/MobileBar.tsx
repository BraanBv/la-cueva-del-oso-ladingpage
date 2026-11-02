import { business, whatsappLink, defaultReservationMessage } from "@/lib/site";
import { PhoneIcon, PinIcon, WhatsAppIcon } from "./Icons";

/** Barra fija en móvil: las tres acciones que más venden. */
export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-bone/10 bg-coal/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden">
      <div className="grid grid-cols-[1fr_1fr_1.6fr] gap-2 px-3 py-2.5">
        <a
          href={`tel:${business.phoneE164}`}
          className="flex flex-col items-center justify-center gap-0.5 rounded-xl py-1.5 text-[0.7rem] text-bone-dim"
        >
          <PhoneIcon className="size-5 text-bone" />
          Llamar
        </a>
        <a
          href={business.directionsUrl}
          target="_blank"
          rel="noopener"
          className="flex flex-col items-center justify-center gap-0.5 rounded-xl py-1.5 text-[0.7rem] text-bone-dim"
        >
          <PinIcon className="size-5 text-bone" />
          Cómo llegar
        </a>
        <a
          href={whatsappLink(defaultReservationMessage)}
          target="_blank"
          rel="noopener"
          className="flex items-center justify-center gap-2 rounded-xl bg-brass text-sm font-semibold text-ink"
        >
          <WhatsAppIcon className="size-5" />
          Reservar
        </a>
      </div>
    </div>
  );
}
