import type { Metadata, Viewport } from "next";
import { Archivo, Big_Shoulders, Caveat } from "next/font/google";
import { SITE_URL, business } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const bigShoulders = Big_Shoulders({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-big-shoulders",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["Arial Narrow", "sans-serif"],
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const title = "La Cueva del Oso | Steak House en San Juan del Río, Qro.";
const description =
  "Cortes finos, hamburguesas artesanales, alitas y cerveza artesanal en un steak house familiar en San Juan del Río. Terraza, partidos en vivo y estacionamiento gratis. Reserva al 427 244 0303.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s | La Cueva del Oso",
  },
  description,
  applicationName: business.name,
  keywords: [
    "steak house San Juan del Río",
    "cortes de carne San Juan del Río",
    "restaurante San Juan del Río",
    "arrachera San Juan del Río",
    "hamburguesas San Juan del Río",
    "restaurante familiar Querétaro",
    "dónde ver partidos San Juan del Río",
    "restaurante con terraza San Juan del Río",
    "La Cueva del Oso",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: business.name,
    title: "La Cueva del Oso · Steak House en San Juan del Río",
    description:
      "Los mejores cortes, hamburguesas y cerveza artesanal en un ambiente familiar con terraza y partidos en vivo.",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Cueva del Oso · Steak House en San Juan del Río",
    description:
      "Los mejores cortes, hamburguesas y cerveza artesanal en un ambiente familiar con terraza y partidos en vivo.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: true, address: true },
  other: {
    "geo.region": "MX-QUE",
    "geo.placename": "San Juan del Río",
    "geo.position": `${business.geo.lat};${business.geo.lng}`,
    ICBM: `${business.geo.lat}, ${business.geo.lng}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#14110f",
  colorScheme: "dark",
};

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${SITE_URL}/#restaurant`,
  name: business.name,
  alternateName: "Steak House La Cueva del Oso",
  description,
  url: SITE_URL,
  telephone: business.phoneE164,
  image: [
    `${SITE_URL}/opengraph-image.jpg`,
    `${SITE_URL}/images/corte-a-la-parrilla.jpg`,
    `${SITE_URL}/images/interior-steak-house.jpg`,
    `${SITE_URL}/images/hamburguesa-artesanal.jpg`,
  ],
  priceRange: business.priceRange,
  servesCuisine: ["Steak House", "Cortes de carne", "Hamburguesas", "Mexicana", "Mariscos"],
  acceptsReservations: "True",
  menu: `${SITE_URL}/#menu`,
  paymentAccepted: "Tarjeta de crédito, Tarjeta de débito, Pagos móviles NFC",
  currenciesAccepted: "MXN",
  hasMap: business.mapsUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    addressRegion: "Querétaro",
    postalCode: business.address.postalCode,
    addressCountry: business.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.geo.lat,
    longitude: business.geo.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "13:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "13:00",
      closes: "22:00",
    },
  ],
  amenityFeature: [
    "Estacionamiento gratuito",
    "Terraza al aire libre",
    "Wi-Fi gratuito",
    "Transmisión de eventos deportivos",
    "Sillas altas para niños",
    "Cambiadores",
    "Comida para llevar",
  ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
  areaServed: { "@type": "City", name: "San Juan del Río" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${bigShoulders.variable} ${archivo.variable} ${caveat.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <JsonLd data={restaurantSchema} />
        {children}
      </body>
    </html>
  );
}
