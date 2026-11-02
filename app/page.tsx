import { Header } from "@/components/Header";
import { MobileBar } from "@/components/MobileBar";
import { RevealObserver } from "@/components/Reveal";
import { Hero } from "@/components/sections/Hero";
import { Amenities } from "@/components/sections/Amenities";
import { Cuts } from "@/components/sections/Cuts";
import { MenuHighlights } from "@/components/sections/MenuHighlights";
import { Ambience } from "@/components/sections/Ambience";
import { Reviews } from "@/components/sections/Reviews";
import { Reservation } from "@/components/sections/Reservation";
import { Faq } from "@/components/sections/Faq";
import { Visit } from "@/components/sections/Visit";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#cortes"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded focus:bg-brass focus:px-4 focus:py-2 focus:text-ink"
      >
        Saltar al contenido
      </a>
      <Header />
      <main>
        <Hero />
        <Amenities />
        <Cuts />
        <MenuHighlights />
        <Ambience />
        <Reviews />
        <Reservation />
        <Faq />
        <Visit />
      </main>
      <Footer />
      <MobileBar />
      <RevealObserver />
    </>
  );
}
