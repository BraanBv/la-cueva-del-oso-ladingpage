# La Cueva del Oso · Landing page

Sitio en Next.js 16 + React 19 + Tailwind CSS 4. Página estática: rápida y fácil de indexar.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Antes de publicar

1. **Fotos.** Las imágenes de `public/images/` se tomaron de Google Maps (las subieron clientes) y
   son **provisionales**. Sustitúyelas por fotos propias del restaurante con el mismo nombre de
   archivo, y regenera `app/opengraph-image.jpg` y `app/twitter-image.jpg` (1200 × 630).
2. **Dominio.** Copia `.env.example` a `.env.local` (o configura la variable en Vercel) con
   `NEXT_PUBLIC_SITE_URL=https://tu-dominio.mx`.
3. **Google Business Profile.** Pon la URL del sitio en la ficha de Google Maps y da de alta el
   dominio en Google Search Console; envía `/sitemap.xml`.

## Dónde editar

- `lib/site.ts`: teléfono, dirección, horario, cortes, platillos destacados, preguntas frecuentes.
  Todo el sitio y los datos estructurados (Schema.org) se alimentan de este archivo.
- `components/sections/`: cada sección de la página.

## SEO incluido

- Metadata, Open Graph y Twitter Card en español de México, URL canónica.
- Datos estructurados `Restaurant` (dirección, coordenadas, horario, pagos, servicios) y `FAQPage`.
- `sitemap.xml`, `robots.txt`, `manifest.webmanifest` e ícono.
- Un solo `h1`, HTML semántico, textos alternativos descriptivos e imágenes optimizadas con `next/image`.
