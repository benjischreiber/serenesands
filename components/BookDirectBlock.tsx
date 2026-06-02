"use client";

import Link from "next/link";
import { trackAnalyticsEvent } from "@/lib/analytics-events";

interface LinkItem {
  href: string;
  label: string;
  propertyName: string;
}

interface Props {
  title?: string;
  links?: LinkItem[];
}

export default function BookDirectBlock({
  title = "Book Direct & Save",
  links = [],
}: Props) {
  return (
    <section className="bg-sand-100 border-y border-sand-200">
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-start md:items-center gap-10">
        <div className="flex-1">
          <p className="text-ocean-500 text-xs tracking-[0.2em] uppercase font-medium mb-3">
            Why book with us
          </p>
          <h2 className="font-serif text-3xl text-ocean-950 mb-4">
            {title}
          </h2>
          <p className="text-ocean-800/75 leading-relaxed max-w-2xl">
            Book direct for our best available rates, direct contact with the
            owner, and no third-party platform fees.
          </p>
        </div>
        {links.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() =>
                  trackAnalyticsEvent("book_direct_click", {
                    property_name: link.propertyName,
                    link_url: link.href,
                    cta_text: link.label,
                  })
                }
                className="inline-flex items-center justify-center bg-ocean-700 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-ocean-600 transition-colors text-sm shadow-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
