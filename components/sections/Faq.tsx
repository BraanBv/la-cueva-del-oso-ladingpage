import { faqs } from "@/lib/site";
import { JsonLd } from "../JsonLd";
import { PlusIcon } from "../Icons";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function Faq() {
  return (
    <section id="preguntas" className="bg-paper py-20 text-ink md:py-28">
      <JsonLd data={faqSchema} />
      <div className="container-x grid gap-10 lg:grid-cols-12">
        <div className="reveal lg:col-span-4">
          <p className="eyebrow text-oxide">Antes de venir</p>
          <h2 className="display mt-4 text-5xl md:text-6xl">Preguntas frecuentes</h2>
        </div>
        <div className="reveal border-t-2 border-ink lg:col-span-8">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-ink/15">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {f.q}
                <PlusIcon className="size-5 shrink-0 text-oxide transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="max-w-2xl pb-6 leading-relaxed text-ink-dim">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
