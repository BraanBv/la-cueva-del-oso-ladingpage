import { TIMEZONE, hours } from "./site";

export type OpenState =
  | { open: true; closesAt: string }
  | { open: false; nextLabel: string };

function toMinutes(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

export function format12(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return m ? `${h12}:${String(m).padStart(2, "0")} ${suffix}` : `${h12} ${suffix}`;
}

/** "a la 1 PM" / "a las 11 PM" */
export function atTime(hhmm: string) {
  const h = Number(hhmm.split(":")[0]) % 12;
  return `${h === 1 ? "a la" : "a las"} ${format12(hhmm)}`;
}

/** Día y minutos actuales en la hora del centro de México. */
export function nowInMexico(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIMEZONE,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  const minutes = (Number(get("hour")) % 24) * 60 + Number(get("minute"));
  return { day, minutes };
}

export function getOpenState(date = new Date()): OpenState {
  const { day, minutes } = nowInMexico(date);
  const today = hours.find((h) => h.day === day);

  if (today?.open && today.close) {
    const o = toMinutes(today.open);
    const c = toMinutes(today.close);
    if (minutes >= o && minutes < c) return { open: true, closesAt: format12(today.close) };
    if (minutes < o) return { open: false, nextLabel: `Abre hoy ${atTime(today.open)}` };
  }

  for (let i = 1; i <= 7; i++) {
    const d = (day + i) % 7;
    const next = hours.find((h) => h.day === d);
    if (next?.open) {
      const when = i === 1 ? "mañana" : `el ${next.label.toLowerCase()}`;
      return { open: false, nextLabel: `Abre ${when} ${atTime(next.open)}` };
    }
  }
  return { open: false, nextLabel: "Cerrado" };
}
