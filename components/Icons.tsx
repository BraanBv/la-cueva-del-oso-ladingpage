import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/** Marca geométrica del oso (original, no reemplaza el logo oficial). */
export function BearMark(props: P) {
  return (
    <svg viewBox="0 0 64 64" width={32} height={32} aria-hidden {...props}>
      <circle cx="16" cy="17" r="9" fill="currentColor" />
      <circle cx="48" cy="17" r="9" fill="currentColor" />
      <circle cx="32" cy="36" r="22" fill="currentColor" />
      <ellipse cx="32" cy="44" rx="10" ry="8" fill="var(--color-coal, #14110f)" />
      <ellipse cx="32" cy="41" rx="3.6" ry="2.6" fill="currentColor" />
      <circle cx="24" cy="31" r="2.6" fill="var(--color-coal, #14110f)" />
      <circle cx="40" cy="31" r="2.6" fill="var(--color-coal, #14110f)" />
    </svg>
  );
}

export function WhatsAppIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" aria-hidden {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.23 8.23 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.06 0 1.22.89 2.39 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}

export function PhoneIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

export function PinIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function ClockIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function CardIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20M6 15h4" />
    </svg>
  );
}

export function StarIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" aria-hidden {...props}>
      <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2Z" />
    </svg>
  );
}

export function ArrowIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function MenuIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h10" />
    </svg>
  );
}

export function CloseIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function PlusIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function CarIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M5 17h14M3 13l2-5.5A2 2 0 0 1 6.9 6h10.2a2 2 0 0 1 1.9 1.5L21 13v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1M3 13v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1M3 13h18" />
      <circle cx="7.5" cy="15" r=".5" />
      <circle cx="16.5" cy="15" r=".5" />
    </svg>
  );
}

export function TvIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="6" width="20" height="13" rx="2" />
      <path d="m8 2 4 4 4-4" />
    </svg>
  );
}

export function SunIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

export function FamilyIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <circle cx="8" cy="6" r="2.5" />
      <circle cx="17" cy="9" r="2" />
      <path d="M4 21v-6a4 4 0 0 1 8 0v6M14 21v-4a3 3 0 0 1 6 0v4" />
    </svg>
  );
}

export function UsersIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2 21a7 7 0 0 1 14 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14.5a7 7 0 0 1 4 6.5" />
    </svg>
  );
}

export function WifiIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M2 8.8a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0" />
      <circle cx="12" cy="19.5" r=".8" fill="currentColor" />
    </svg>
  );
}

export function BagIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M6 7h12l1 14H5L6 7Z" />
      <path d="M9 7V5a3 3 0 0 1 6 0v2" />
    </svg>
  );
}
