import Image from "next/image";
import { business, whatsappLink, defaultReservationMessage } from "@/lib/site";
import { OpenStatus } from "../OpenStatus";
import { ArrowIcon, StarIcon, WhatsAppIcon } from "../Icons";

export function Hero() {
  return (
    <section id="inicio" className="grain relative overflow-hidden pt-24 pb-14 md:pt-32 md:pb-20">
      {/* luz cálida de fondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-20%] -z-10 size-[42rem] rounded-full bg-brass/10 blur-3xl"
      />

      <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <span className="plate text-brass">San Juan del Río · Qro.</span>

          <h1 className="display mt-6 text-[3.1rem] sm:text-7xl lg:text-[5.6rem]">
            Vive la experiencia de un auténtico <span className="text-brass">Steak House</span> en San Juan del
            Río.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-bone-dim">
            Disfruta de los mejores cortes de carne, hamburguesas, excelente ambiente familiar, música y
            transmisiones deportivas.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink(defaultReservationMessage)}
              target="_blank"
              rel="noopener"
              className="btn btn-brass"
            >
              <WhatsAppIcon /> Reservar mesa
            </a>
            <a href="#cortes" className="btn btn-ghost">
              Ver cortes <ArrowIcon className="size-4" />
            </a>
          </div>

          <dl className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-bone/10 pt-6 text-sm text-bone-dim">
            <div className="flex items-center gap-2">
              <dt className="sr-only">Calificación en Google</dt>
              <dd className="flex items-center gap-1.5">
                <span className="flex text-brass" aria-hidden>
                  {Array.from({ length: 5 }, (_, i) => (
                    <StarIcon key={i} className={i === 4 ? "opacity-50" : ""} />
                  ))}
                </span>
                <span>
                  <strong className="font-semibold text-bone">{business.rating.value}</strong> en Google ·{" "}
                  {business.rating.count.toLocaleString("es-MX")} opiniones
                </span>
              </dd>
            </div>
            <div>
              <dt className="sr-only">Horario</dt>
              <dd>
                <OpenStatus className="text-bone-dim [&_strong]:text-bone" />
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[3px] sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/corte-a-la-parrilla.jpg"
              alt="Corte de carne a la parrilla servido en tabla de madera en La Cueva del Oso, San Juan del Río"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coal/70 via-transparent to-transparent" />
            <p className="absolute right-4 bottom-4 text-xs tracking-wide text-bone/85">
              Cortes a la parrilla, servidos en tabla
            </p>
          </div>

          <div className="absolute -bottom-8 -left-6 hidden w-40 overflow-hidden rounded-[3px] border-4 border-coal shadow-2xl shadow-black/50 sm:block xl:-left-14 xl:w-48">
            <div className="relative aspect-[3/4]">
              <Image
                src="/images/hamburguesa-de-camaron.jpg"
                alt="Hamburguesa de camarón con chips y bebida en la terraza"
                fill
                sizes="12rem"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
