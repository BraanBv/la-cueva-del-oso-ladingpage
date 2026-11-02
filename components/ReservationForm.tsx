"use client";

import { useMemo, useState } from "react";
import { hours, whatsappLink } from "@/lib/site";
import { format12 } from "@/lib/hours";
import { WhatsAppIcon } from "./Icons";

const occasions = ["Comida o cena", "Cumpleaños", "Ver el partido", "Grupo o empresa", "Otra ocasión"];

function todayISO() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}

/** Horarios cada 30 min desde que abre hasta 1 h antes de cerrar. */
function slotsFor(dateISO: string) {
  if (!dateISO) return [];
  const day = new Date(`${dateISO}T12:00:00`).getDay();
  const h = hours.find((x) => x.day === day);
  if (!h?.open || !h.close) return [];
  const [oh] = h.open.split(":").map(Number);
  const [ch] = h.close.split(":").map(Number);
  const out: string[] = [];
  for (let m = oh * 60; m <= (ch - 1) * 60; m += 30) {
    out.push(`${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`);
  }
  return out;
}

function longDate(dateISO: string) {
  return new Intl.DateTimeFormat("es-MX", { weekday: "long", day: "numeric", month: "long" }).format(
    new Date(`${dateISO}T12:00:00`),
  );
}

const field =
  "mt-1.5 block w-full rounded-lg border border-bone/15 bg-coal px-3.5 py-3 text-bone placeholder:text-bone-dim/60 transition-colors focus:border-brass focus:outline-none";
const label = "text-sm text-bone-dim";

export function ReservationForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState("4");
  const [occasion, setOccasion] = useState(occasions[0]);
  const [notes, setNotes] = useState("");

  const slots = useMemo(() => slotsFor(date), [date]);
  const closedDay = date !== "" && slots.length === 0;

  const message = useMemo(() => {
    const lines = [
      "¡Hola, La Cueva del Oso! Quiero reservar una mesa:",
      name && `• Nombre: ${name}`,
      date && `• Día: ${longDate(date)}`,
      time && `• Hora: ${format12(time)}`,
      `• Personas: ${people}`,
      `• Ocasión: ${occasion}`,
      notes && `• Notas: ${notes}`,
    ];
    return lines.filter(Boolean).join("\n");
  }, [name, date, time, people, occasion, notes]);

  const ready = name.trim() && date && time && !closedDay;

  return (
    <form
      className="grid gap-4 sm:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        if (!ready) return;
        window.open(whatsappLink(message), "_blank", "noopener");
      }}
    >
      <label className="sm:col-span-2">
        <span className={label}>Nombre</span>
        <input
          className={field}
          name="nombre"
          autoComplete="name"
          required
          placeholder="¿A nombre de quién?"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        <span className={label}>Día</span>
        <input
          className={`${field} [color-scheme:dark]`}
          type="date"
          name="dia"
          required
          min={todayISO()}
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            setTime("");
          }}
        />
      </label>

      <label>
        <span className={label}>Hora</span>
        <select
          className={field}
          name="hora"
          required
          disabled={!date || closedDay}
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          <option value="">{date ? (closedDay ? "Cerrado ese día" : "Elige una hora") : "Primero elige el día"}</option>
          {slots.map((s) => (
            <option key={s} value={s}>
              {format12(s)}
            </option>
          ))}
        </select>
      </label>

      {closedDay && (
        <p className="-mt-1 text-sm text-brass sm:col-span-2" role="alert">
          Los lunes descansamos. Elige otro día y te esperamos.
        </p>
      )}

      <label>
        <span className={label}>Personas</span>
        <select className={field} name="personas" value={people} onChange={(e) => setPeople(e.target.value)}>
          {Array.from({ length: 11 }, (_, i) => String(i + 2)).map((n) => (
            <option key={n}>{n}</option>
          ))}
          <option value="Más de 12">Más de 12</option>
        </select>
      </label>

      <label>
        <span className={label}>Ocasión</span>
        <select className={field} name="ocasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
          {occasions.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </label>

      <label className="sm:col-span-2">
        <span className={label}>
          Notas <span className="text-bone-dim/60">(opcional)</span>
        </span>
        <input
          className={field}
          name="notas"
          placeholder="Silla alta, terraza, pastel de cumpleaños…"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </label>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={!ready}
          className="btn w-full bg-whatsapp text-white hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-45"
        >
          <WhatsAppIcon /> Enviar reservación por WhatsApp
        </button>
        <p className="mt-3 text-center text-xs text-bone-dim">
          Se abrirá WhatsApp con tu mensaje listo. Te confirmamos en cuanto lo recibamos.
        </p>
      </div>
    </form>
  );
}
