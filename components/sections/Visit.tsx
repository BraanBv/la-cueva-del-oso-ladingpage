import { business, fullAddress } from "@/lib/site";
import { HoursTable } from "../HoursTable";
import { CardIcon, ClockIcon, PhoneIcon, PinIcon } from "../Icons";

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  `La Cueva del Oso, ${fullAddress}`,
)}&z=16&output=embed`;

export function Visit() {
  return (
    <section id="visitanos" className="bg-paper-2 py-20 text-ink md:py-28">
      <div className="container-x">
        <div className="reveal max-w-2xl">
          <p className="eyebrow text-oxide">Visítanos</p>
          <h2 className="display mt-4 text-5xl md:text-6xl">En el centro de San Juan del Río</h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <address className="reveal not-italic lg:col-span-5">
            <div className="flex gap-4">
              <PinIcon className="mt-0.5 size-5 shrink-0 text-oxide" />
              <div>
                <p className="font-semibold">{business.address.street}</p>
                <p className="text-ink-dim">
                  {business.address.neighborhood}, {business.address.postalCode} {business.address.city},{" "}
                  {business.address.region}
                </p>
                <a
                  href={business.directionsUrl}
                  target="_blank"
                  rel="noopener"
                  className="mt-2 inline-block text-sm font-semibold text-oxide underline-offset-4 hover:underline"
                >
                  Cómo llegar
                </a>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <PhoneIcon className="mt-0.5 size-5 shrink-0 text-oxide" />
              <div>
                <p className="text-sm text-ink-dim">Reservaciones</p>
                <a href={`tel:${business.phoneE164}`} className="font-semibold hover:text-oxide">
                  {business.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <ClockIcon className="mt-0.5 size-5 shrink-0 text-oxide" />
              <div className="flex-1">
                <p className="text-sm text-ink-dim">Horario</p>
                <HoursTable />
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <CardIcon className="mt-0.5 size-5 shrink-0 text-oxide" />
              <div>
                <p className="text-sm text-ink-dim">Formas de pago</p>
                <p className="font-medium">Crédito, débito y pagos móviles NFC</p>
              </div>
            </div>
          </address>

          <div className="reveal lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[3px] border border-ink/10 bg-paper lg:aspect-auto lg:h-full lg:min-h-[28rem]">
              <iframe
                title="Mapa de ubicación de La Cueva del Oso en San Juan del Río"
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 size-full border-0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
