"use client";

import { useEffect, useState } from "react";
import { hours } from "@/lib/site";
import { format12, nowInMexico } from "@/lib/hours";

export function HoursTable() {
  const [today, setToday] = useState<number | null>(null);

  useEffect(() => setToday(nowInMexico().day), []);

  return (
    <table className="w-full text-left">
      <caption className="sr-only">Horario de servicio</caption>
      <tbody>
        {hours.map((h) => {
          const isToday = h.day === today;
          return (
            <tr key={h.day} className={`border-b border-ink/10 ${isToday ? "font-semibold text-ink" : "text-ink-dim"}`}>
              <th scope="row" className="py-2.5 font-[inherit]">
                {h.label}
                {isToday && <span className="ml-2 rounded-sm bg-oxide px-1.5 py-0.5 text-[0.65rem] tracking-wider text-paper uppercase">Hoy</span>}
              </th>
              <td className="py-2.5 text-right tabular-nums">
                {h.open && h.close ? `${format12(h.open)} – ${format12(h.close)}` : "Cerrado"}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
