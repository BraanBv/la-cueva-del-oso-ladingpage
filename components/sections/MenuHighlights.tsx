import Image from "next/image";
import { business, menuHighlights, whatsappLink } from "@/lib/site";
import { PhoneIcon, TvIcon, WhatsAppIcon } from "../Icons";

export function MenuHighlights() {
  return (
    <section id="menu" className="py-20 md:py-28">
      <div className="container-x">
        <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-brass">El menú</p>
            <h2 className="display mt-4 text-5xl md:text-6xl">Más allá del corte</h2>
          </div>
          <p className="max-w-md leading-relaxed text-bone-dim">
            Hamburguesas artesanales, alitas, mariscos y platillos casuales para compartir en familia o con
            amigos. También tenemos menú infantil.
          </p>
        </div>

        <ul className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {menuHighlights.map((m) =>
            m.image ? (
              <li key={m.title} className="reveal group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[3px] bg-coal-2">
                  <Image
                    src={m.image.src}
                    alt={m.image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <h3 className="display mt-5 text-3xl">{m.title}</h3>
                <p className="mt-2 leading-relaxed text-bone-dim">{m.text}</p>
                <p className="mt-3 text-sm text-bone/80">{m.items.join(" · ")}</p>
              </li>
            ) : (
              <li
                key={m.title}
                className="reveal flex aspect-auto flex-col justify-between rounded-[3px] bg-brass p-7 text-ink sm:aspect-[4/5] lg:row-auto"
              >
                <div>
                  <span className="plate">
                    <TvIcon className="size-4" /> Día de partido
                  </span>
                </div>
                <div className="mt-16 sm:mt-0">
                  <h3 className="display text-5xl">{m.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink/80">{m.text}</p>
                  <p className="mt-4 text-sm font-medium">{m.items.join(" · ")}</p>
                </div>
              </li>
            ),
          )}
        </ul>

        <div className="reveal mt-16 flex flex-col items-start justify-between gap-6 rounded-[3px] border border-bone/10 bg-coal-2 p-7 md:flex-row md:items-center md:p-9">
          <div>
            <h3 className="display text-3xl md:text-4xl">¿Se te antojó? Pide para llevar.</h3>
            <p className="mt-2 text-bone-dim">Llámanos o escríbenos y pasa por tu pedido.</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={whatsappLink("¡Hola! Quiero hacer un pedido para llevar.")}
              target="_blank"
              rel="noopener"
              className="btn btn-brass"
            >
              <WhatsAppIcon /> Pedir por WhatsApp
            </a>
            <a href={`tel:${business.phoneE164}`} className="btn btn-ghost">
              <PhoneIcon className="size-4" /> {business.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
