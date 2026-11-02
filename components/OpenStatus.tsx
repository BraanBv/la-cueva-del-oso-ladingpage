"use client";

import { useEffect, useState } from "react";
import { getOpenState, type OpenState } from "@/lib/hours";

/** Estado en vivo "Abierto / Cerrado" según la hora del centro de México. */
export function OpenStatus({ className = "" }: { className?: string }) {
  const [state, setState] = useState<OpenState | null>(null);

  useEffect(() => {
    const update = () => setState(getOpenState());
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  if (!state) {
    return <span className={`inline-flex h-5 w-40 animate-pulse rounded bg-current/10 ${className}`} aria-hidden />;
  }

  return (
    <span className={`inline-flex items-center gap-2 ${className}`} role="status">
      <span className="relative flex size-2.5">
        {state.open && (
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
        )}
        <span className={`relative inline-flex size-2.5 rounded-full ${state.open ? "bg-emerald-400" : "bg-oxide"}`} />
      </span>
      {state.open ? (
        <span>
          <strong className="font-semibold">Abierto ahora</strong> · cierra a las {state.closesAt}
        </span>
      ) : (
        <span>
          <strong className="font-semibold">Cerrado</strong> · {state.nextLabel}
        </span>
      )}
    </span>
  );
}
