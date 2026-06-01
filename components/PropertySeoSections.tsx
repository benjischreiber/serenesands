import Link from "next/link";
import type { PropertySlug } from "@/lib/site";
import { propertySeoContent } from "@/lib/seo-content";

interface Props {
  slug: PropertySlug;
}

export default function PropertySeoSections({ slug }: Props) {
  const content = propertySeoContent[slug];

  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12">
          <div>
            <p className="text-ocean-500 text-xs tracking-[0.2em] uppercase font-medium mb-2">
              Holiday accommodation
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-ocean-950 mb-6">
              {content.searchTitle}
            </h2>
            <div className="space-y-4 text-ocean-800/75 leading-relaxed">
              {content.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="bg-sand-50 border border-sand-200 rounded-xl p-6">
            <h3 className="font-serif text-2xl text-ocean-950 mb-5">
              At a glance
            </h3>
            <ul className="space-y-3 text-sm text-ocean-800/75">
              {content.highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sand-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="bg-white border-y border-sand-200">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">
          <div>
            <p className="text-ocean-500 text-xs tracking-[0.2em] uppercase font-medium mb-2">
              Best for
            </p>
            <h2 className="font-serif text-3xl text-ocean-950 mb-5">
              Who it suits
            </h2>
            <ul className="space-y-3 text-ocean-800/75">
              {content.goodFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2 space-y-4 text-ocean-800/75 leading-relaxed">
            <h2 className="font-serif text-3xl text-ocean-950">
              Location notes
            </h2>
            {content.location.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {content.practical.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <Link
              href={content.guideHref}
              className="inline-flex mt-3 text-ocean-700 font-semibold hover:text-ocean-500"
            >
              {content.guideLabel} →
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-ocean-500 text-xs tracking-[0.2em] uppercase font-medium mb-2">
          Questions
        </p>
        <h2 className="font-serif text-3xl text-ocean-950 mb-8">
          Frequently asked questions
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {content.faqs.map((faq) => (
            <div
              key={faq.question}
              className="border border-sand-200 rounded-xl p-6 bg-white"
            >
              <h3 className="font-serif text-xl text-ocean-950 mb-3">
                {faq.question}
              </h3>
              <p className="text-ocean-800/70 leading-relaxed text-sm">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
