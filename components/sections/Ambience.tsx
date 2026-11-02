import Image from "next/image";
import { CarIcon, FamilyIcon, SunIcon, TvIcon, UsersIcon, WifiIcon } from "../Icons";

const features = [
  { icon: FamilyIcon, title: "Para toda la familia", text: "Sillas altas, cambiadores y un ambiente seguro para los peques." },
  { icon: UsersIcon, title: "Grupos grandes", text: "Mesas para festejos, reuniones y comidas de fin de semana." },
  { icon: TvIcon, title: "Partidos en vivo", text: "Pantallas, cerveza fría y el ambiente que pide cada juego." },
  { icon: SunIcon, title: "Terraza y jardín", text: "Mesas al aire libre para las tardes y noches queretanas." },
  { icon: CarIcon, title: "Estacionamiento gratis", text: "Lote y cochera amplios dentro del lugar, sin costo." },
  { icon: WifiIcon, title: "Wi-Fi gratis", text: "Conéctate mientras esperas tu corte." },
];

const gallery = [
  {
    src: "/images/interior-steak-house.jpg",
    alt: "Interior rústico de La Cueva del Oso con mesas de madera, barra iluminada y decoración vintage",
    className: "col-span-2 row-span-2",
    sizes: "(min-width: 1024px) 50vw, 100vw",
  },
  {
    src: "/images/decoracion-vintage.jpg",
    alt: "Bicicletas antiguas colgadas del techo y placas de auto en los muros del restaurante",
    className: "row-span-2",
    sizes: "(min-width: 1024px) 25vw, 50vw",
  },
  {
    src: "/images/terraza-al-aire-libre.jpg",
    alt: "Terraza al aire libre iluminada con faroles por la noche",
    className: "",
    sizes: "(min-width: 1024px) 25vw, 50vw",
  },
  {
    src: "/images/jardin.jpg",
    alt: "Jardín con cactus y figuras de osos a la entrada",
    className: "",
    sizes: "(min-width: 1024px) 25vw, 50vw",
  },
];

export function Ambience() {
  return (
    <section id="ambiente" className="border-t border-bone/10 bg-coal-2 py-20 md:py-28">
      <div className="container-x">
        <div className="reveal grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow text-brass">El lugar</p>
            <h2 className="display mt-4 text-5xl md:text-6xl">Una cueva llena de historias</h2>
          </div>
          <p className="leading-relaxed text-bone-dim lg:col-span-5 lg:col-start-8 lg:self-end">
            Techos de lámina, placas de auto en los muros, bicicletas colgadas del techo y faroles encendidos
            en la terraza. Cada rincón tiene algo que ver mientras llega tu comida: aquí la decoración también
            es parte del menú.
          </p>
        </div>

        <div className="reveal mt-12 grid auto-rows-[9.5rem] grid-cols-2 gap-2.5 sm:auto-rows-[12rem] lg:grid-cols-4 lg:auto-rows-[13rem]">
          {gallery.map((g) => (
            <div key={g.src} className={`relative overflow-hidden rounded-[3px] ${g.className}`}>
              <Image src={g.src} alt={g.alt} fill sizes={g.sizes} className="object-cover" />
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <ul className="reveal grid content-center gap-x-8 gap-y-9 sm:grid-cols-2 lg:col-span-7">
            {features.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-brass/40 text-brass">
                  <Icon className="size-[18px]" />
                </span>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-bone-dim">{text}</p>
                </div>
              </li>
            ))}
          </ul>

          <figure className="reveal lg:col-span-5">
            <div className="rotate-[-1.2deg] rounded-md border-[10px] border-[#5b3b22] bg-chalk px-7 py-8 font-hand text-[#ece7d8] shadow-2xl shadow-black/40">
              <p className="text-center font-display text-4xl font-extrabold tracking-wide uppercase">Aviso de bar</p>
              <p className="mt-4 text-center text-2xl leading-snug text-[#f2d67a]">
                Si alguna esposa o novia llama y pregunta por usted, nuestras tarifas por respuesta son:
              </p>
              <ul className="mt-5 space-y-1.5 text-2xl">
                {[
                  ["Se acaba de ir", "$5"],
                  ["Va camino a casa", "$10"],
                  ["Aquí no está", "$15"],
                  ["No lo conocemos", "$20"],
                ].map(([t, p]) => (
                  <li key={t} className="flex items-baseline gap-2">
                    <span>{t}</span>
                    <span className="leader" aria-hidden />
                    <span className="text-[#f2d67a]">{p}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-center text-3xl text-[#9fd3e6]">La cueva del oso</p>
            </div>
            <figcaption className="mt-5 text-center text-sm text-bone-dim">
              Visto en nuestra entrada. El buen humor también es de la casa.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
