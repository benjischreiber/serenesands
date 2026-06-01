import Image from "next/image";
import Link from "next/link";
import type { localGuides } from "@/lib/seo-content";

type Guide = (typeof localGuides)[keyof typeof localGuides];

interface Props {
  guide: Guide;
}

export default function GuidePage({ guide }: Props) {
  return (
    <>
      <section className="relative min-h-[58vh] flex items-end bg-ocean-950 text-white overflow-hidden">
        <Image
          src={guide.heroImage}
          alt={guide.heading}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ocean-950/65" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 w-full">
          <p className="text-sand-300 text-xs tracking-[0.2em] uppercase font-medium mb-4">
            Local guide
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold leading-tight max-w-3xl">
            {guide.heading}
          </h1>
          <p className="mt-6 text-white/75 text-lg max-w-2xl leading-relaxed">
            {guide.intro}
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
          <div className="space-y-10">
            {guide.sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-serif text-3xl text-ocean-950 mb-4">
                  {section.title}
                </h2>
                <p className="text-ocean-800/75 leading-relaxed">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          <aside className="lg:sticky lg:top-24 self-start bg-sand-50 border border-sand-200 rounded-xl p-6">
            <p className="text-ocean-500 text-xs tracking-[0.2em] uppercase font-medium mb-2">
              Stay nearby
            </p>
            <h2 className="font-serif text-2xl text-ocean-950 mb-3">
              {guide.propertyName}
            </h2>
            <p className="text-ocean-800/70 text-sm leading-relaxed mb-5">
              Use the local guide to plan the day, then check live availability
              and book direct.
            </p>
            <Link
              href={`${guide.propertyHref}#book`}
              className="inline-flex items-center justify-center bg-ocean-700 text-white font-semibold px-5 py-3 rounded-full hover:bg-ocean-600 transition-colors text-sm"
            >
              Check availability
            </Link>
          </aside>
        </div>
      </section>

      <section className="bg-white border-y border-sand-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-ocean-500 text-xs tracking-[0.2em] uppercase font-medium mb-2">
            Planning notes
          </p>
          <h2 className="font-serif text-3xl text-ocean-950 mb-8">
            Frequently asked questions
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {guide.faqs.map((faq) => (
              <div
                key={faq.question}
                className="border border-sand-200 rounded-xl p-6"
              >
                <h3 className="font-serif text-xl text-ocean-950 mb-3">
                  {faq.question}
                </h3>
                <p className="text-ocean-800/70 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
