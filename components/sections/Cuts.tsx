import { cuts } from "@/lib/site";

const doneness = [
  { label: "Rojo", color: "#9b2226" },
  { label: "Medio", color: "#b5483a" },
  { label: "Tres cuartos", color: "#a0654a" },
  { label: "Bien cocido", color: "#6b4a37" },
];

export function Cuts() {
  return (
    <section id="cortes" className="grain bg-paper py-20 text-ink md:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="reveal lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow text-oxide">La parrilla</p>
            <h2 className="display mt-4 text-5xl md:text-6xl">Cortes finos, al término que tú pidas</h2>
            <p className="mt-6 max-w-md leading-relaxed text-ink-dim">
              Ribeye, New York, T-Bone o un Porter House para los de buen diente. Cada corte se prepara a la
              parrilla y llega a tu mesa justo como lo pediste. ¿Vienen en grupo? La arrachera de un kilo es
              para compartir.
            </p>

            <div className="mt-10">
              <p className="eyebrow text-ink-dim">Elige tu término</p>
              <ol className="mt-3 grid grid-cols-4 gap-1.5" aria-label="Términos de cocción">
                {doneness.map((d) => (
                  <li key={d.label}>
                    <span className="block h-2.5 rounded-sm" style={{ background: d.color }} />
                    <span className="mt-2 block text-xs text-ink-dim">{d.label}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <div className="reveal lg:col-span-7">
          <ul className="border-t-2 border-ink">
            {cuts.map((c) => (
              <li key={c.name} className="group border-b border-ink/15 py-5">
                <div className="flex items-baseline gap-3">
                  <h3 className="display text-[1.9rem] transition-colors group-hover:text-oxide md:text-4xl">
                    {c.name}
                  </h3>
                  <span className="leader text-ink" aria-hidden />
                  <span className="shrink-0 font-display text-xl font-semibold tabular-nums text-ink-dim">
                    {c.weight}
                  </span>
                </div>
                <p className="mt-1 text-sm text-ink-dim">{c.detail}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-ink-dim">
            Las carnes se preparan conforme a la solicitud de cada cliente.
          </p>
        </div>
      </div>
    </section>
  );
}
