import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${SITE_URL}/images/corte-a-la-parrilla.jpg`,
        `${SITE_URL}/images/hamburguesa-artesanal.jpg`,
        `${SITE_URL}/images/interior-steak-house.jpg`,
        `${SITE_URL}/images/terraza-al-aire-libre.jpg`,
      ],
    },
  ];
}
