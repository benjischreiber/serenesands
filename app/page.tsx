import Link from "next/link";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import { homepageReviews } from "@/lib/reviews";

const properties = [
  {
    slug: "brighton",
    name: "Serenity Square",
    location: "Brighton",
    tagline: "England's most happening city",
    description:
      "A stunning 2-bedroom ground floor flat on Clarence Square — 350 yards from the beach, steps from The Lanes, and minutes from the i360.",
    beds: 2,
    type: "Ground floor flat",
    accentBg: "bg-ocean-100",
  },
  {
    slug: "felixstowe",
    name: "Serene Sands",
    location: "Felixstowe",
    tagline: "Authentic relaxing seaside holiday",
    description:
      "An idyllic 3-bedroom townhouse facing directly onto the sea. Stroll the promenade or explore the Landguard Peninsula Nature Reserve.",
    beds: 3,
    type: "Townhouse",
    accentBg: "bg-sand-100",
  },
  {
    slug: "harwich",
    name: "On the Quay",
    location: "Harwich",
    tagline: "Historic quayside building",
    description:
      "A beautifully appointed 2-bedroom apartment in listed Quayside Court — built 1864 as a Railway Hotel, facing the Quay and Pier.",
    beds: 2,
    type: "Apartment",
    accentBg: "bg-ocean-50",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative bg-ocean-950 text-white overflow-hidden min-h-[82vh] flex items-center">
        {/* Gradient backdrop — replace with a hero <Image> later */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #061e38 0%, #0f4570 50%, #155a8a 100%)",
          }}
        />
        {/* Subtle stripe texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 41px)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32">
          <p className="text-sand-300 text-xs tracking-[0.25em] uppercase font-medium mb-5">
            Brighton · Felixstowe · Harwich
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-semibold leading-[1.1] mb-6">
            Your perfect
            <br />
            <em className="text-sand-300">seaside escape</em>
          </h1>
          <p className="text-white/65 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            Three beautifully appointed holiday lets on England&apos;s coast —
            Brighton, Felixstowe &amp; Harwich.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#properties"
              className="bg-sand-400 text-ocean-950 font-semibold px-7 py-3.5 rounded-full hover:bg-sand-300 transition-colors text-sm"
            >
              View our properties
            </a>
            <a
              href="tel:07830301317"
              className="border border-white/30 text-white px-7 py-3.5 rounded-full hover:border-white hover:bg-white/10 transition-colors text-sm"
            >
              07830301317
            </a>
          </div>
        </div>
      </section>

      {/* ── Properties grid ──────────────────────────────────── */}
      <section id="properties" className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-ocean-500 text-xs tracking-[0.2em] uppercase font-medium mb-2">
          Our properties
        </p>
        <h2 className="font-serif text-4xl text-ocean-950 mb-14">
          Choose your escape
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((p) => (
            <Link
              key={p.slug}
              href={`/${p.slug}`}
              className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-sand-200"
            >
              {/* Photo placeholder */}
              <div
                className={`aspect-[4/3] ${p.accentBg} relative overflow-hidden flex items-end`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/30 to-transparent" />
                <p className="relative z-10 text-white/50 text-[10px] px-4 pb-3">
                  Add photos → /public/images/{p.slug}/
                </p>
              </div>

              <div className="p-6">
                <p className="text-ocean-500 text-[10px] tracking-[0.2em] uppercase font-medium mb-1">
                  {p.location}
                </p>
                <h3 className="font-serif text-2xl text-ocean-950 mb-1">
                  {p.name}
                </h3>
                <p className="text-sand-500 italic text-sm mb-3">{p.tagline}</p>
                <p className="text-ocean-800/65 text-sm leading-relaxed mb-4">
                  {p.description}
                </p>
                <div className="flex items-center gap-3 text-xs text-ocean-600/60">
                  <span>{p.beds} bedrooms</span>
                  <span>·</span>
                  <span>{p.type}</span>
                </div>
                <div className="mt-5 pt-4 border-t border-sand-100 text-ocean-600 text-sm font-medium group-hover:text-ocean-500 transition-colors flex items-center gap-1">
                  View property
                  <span className="group-hover:translate-x-1 transition-transform inline-block">
                    {" →"}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Guest reviews carousel ───────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-ocean-500 text-xs tracking-[0.2em] uppercase font-medium mb-2 text-center">
          Guest reviews
        </p>
        <h2 className="font-serif text-4xl text-ocean-950 mb-3 text-center">
          What our guests say
        </h2>
        <p className="text-ocean-600/70 text-center mb-12">
          4.83 ★ on Airbnb across 120+ stays
        </p>
        <ReviewsCarousel reviews={homepageReviews} showProperty />
      </section>

      {/* ── Book direct strip ────────────────────────────────── */}
      <section className="bg-sand-100 border-y border-sand-200">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <p className="text-ocean-500 text-xs tracking-[0.2em] uppercase font-medium mb-3">
              Why book with us
            </p>
            <h2 className="font-serif text-3xl text-ocean-950 mb-4">
              Book direct &amp; save
            </h2>
            <p className="text-ocean-800/70 leading-relaxed max-w-xl">
              Book directly with us and skip the platform fees. We&apos;re
              also listed on Airbnb and Booking.com if you prefer — but for the
              best rate, just give us a call.
            </p>
          </div>
          <div className="text-center shrink-0">
            <a
              href="tel:07830301317"
              className="block bg-ocean-700 text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-ocean-600 transition-colors mb-2"
            >
              Call to book direct
            </a>
            <p className="text-ocean-600 text-sm">07830301317</p>
          </div>
        </div>
      </section>
    </>
  );
}
