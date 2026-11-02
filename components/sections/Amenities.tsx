import { BagIcon, CardIcon, CarIcon, FamilyIcon, SunIcon, TvIcon, WifiIcon } from "../Icons";

const items = [
  { icon: CarIcon, label: "Estacionamiento gratis" },
  { icon: SunIcon, label: "Terraza al aire libre" },
  { icon: TvIcon, label: "Partidos en vivo" },
  { icon: FamilyIcon, label: "Ambiente familiar" },
  { icon: WifiIcon, label: "Wi-Fi gratis" },
  { icon: BagIcon, label: "Para llevar" },
  { icon: CardIcon, label: "Tarjeta y NFC" },
];

export function Amenities() {
  return (
    <section aria-label="Servicios" className="border-y border-bone/10 bg-coal-2">
      <ul className="container-x flex flex-wrap justify-center gap-x-8 gap-y-4 py-6 md:justify-between">
        {items.map(({ icon: Icon, label }) => (
          <li key={label} className="flex items-center gap-2.5 text-sm text-bone-dim">
            <Icon className="size-[18px] text-brass" />
            {label}
          </li>
        ))}
      </ul>
    </section>
  );
}
