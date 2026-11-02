import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "La Cueva del Oso · Steak House",
    short_name: "Cueva del Oso",
    description: "Steak house familiar en San Juan del Río, Querétaro.",
    start_url: "/",
    display: "standalone",
    background_color: "#14110f",
    theme_color: "#14110f",
    lang: "es-MX",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
