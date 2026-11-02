import Image from "next/image";
import { business } from "@/lib/site";
import { ReservationForm } from "../ReservationForm";
import { PhoneIcon } from "../Icons";

export function Reservation() {
  return (
    <section id="reservar" className="relative isolate overflow-hidden py-20 md:py-28">
      <Image
        src="/images/barra.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover opacity-25"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-coal via-coal/85 to-coal" />

      <div className="container-x grid items-start gap-12 lg:grid-cols-12">
        <div className="reveal lg:col-span-5 lg:pt-6">
          <p className="eyebrow text-brass">Reservaciones</p>
          <h2 className="display mt-4 text-5xl md:text-6xl">Aparta tu mesa en un minuto</h2>
          <p className="mt-6 max-w-md leading-relaxed text-bone-dim">
            Los fines de semana y los días de partido la cueva se llena. Reserva por WhatsApp y llega directo a
            disfrutar.
          </p>

          <div className="mt-10 border-t border-bone/10 pt-8">
            <p className="text-sm text-bone-dim">¿Prefieres llamar?</p>
            <a
              href={`tel:${business.phoneE164}`}
              className="display mt-2 inline-flex items-center gap-3 text-4xl text-bone transition-colors hover:text-brass md:text-5xl"
            >
              <PhoneIcon className="size-7 text-brass" />
              {business.phoneDisplay}
            </a>
            <p className="mt-3 text-sm text-bone-dim">Martes a domingo desde la 1 PM.</p>
          </div>
        </div>

        <div className="reveal rounded-md border border-bone/10 bg-coal-2/90 p-6 shadow-2xl shadow-black/30 backdrop-blur-sm md:p-9 lg:col-span-6 lg:col-start-7">
          <ReservationForm />
        </div>
      </div>
    </section>
  );
}
