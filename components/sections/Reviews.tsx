import { business, reviewTopics } from "@/lib/site";
import { ArrowIcon, StarIcon } from "../Icons";

export function Reviews() {
  return (
    <section aria-labelledby="opiniones" className="border-y border-bone/10 bg-coal-2 py-16 md:py-20">
      <div className="container-x reveal grid items-center gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 id="opiniones" className="sr-only">
            Opiniones en Google
          </h2>
          <p className="display text-8xl text-brass md:text-9xl">{business.rating.value}</p>
          <div className="mt-2 flex text-brass" aria-label={`${business.rating.value} de 5 estrellas`}>
            {Array.from({ length: 5 }, (_, i) => (
              <StarIcon key={i} className={`size-5 ${i === 4 ? "opacity-50" : ""}`} />
            ))}
          </div>
          <p className="mt-3 text-bone-dim">
            {business.rating.count.toLocaleString("es-MX")} opiniones en Google
          </p>
        </div>

        <div className="md:col-span-8">
          <p className="eyebrow text-bone-dim">Lo que más mencionan nuestros clientes</p>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {reviewTopics.map((t) => (
              <li key={t} className="rounded-full border border-bone/15 px-4 py-2 text-sm">
                {t}
              </li>
            ))}
          </ul>
          <a
            href={business.reviewsUrl}
            target="_blank"
            rel="noopener"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brass hover:underline"
          >
            Leer opiniones en Google <ArrowIcon className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
