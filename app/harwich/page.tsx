import type { Metadata } from "next";
import Image from "next/image";
import BookingButtons from "@/components/BookingButtons";
import PhotoGrid from "@/components/PhotoGrid";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import { harwichReviews } from "@/lib/reviews";

export const metadata: Metadata = {
  title: "Harwich — On the Quay | Serene Holidays",
  description:
    "2-bedroom apartment in the listed 1864 Quayside Court, Harwich — facing the Quay and Pier. Restaurant and pub on the doorstep.",
};

const photos = Array.from({ length: 24 }, (_, i) => ({
  src: `/images/harwich/${i + 1}.jpg`,
  alt: `On the Quay Harwich — photo ${i + 1}`,
}));

export default function HarwichPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-white border-b border-sand-200">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-ocean-500 text-xs tracking-[0.2em] uppercase font-medium mb-3">
              Harwich
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-ocean-950 leading-tight mb-3">
              On the Quay
            </h1>
            <p className="font-serif italic text-xl text-sand-500 mb-6">
              Historic quayside building
            </p>
            <p className="text-ocean-800/70 leading-relaxed mb-4">
              Stay in this beautifully appointed 2-bedroom apartment in the
              listed Quayside Court — built in 1864 as a Railway Hotel,
              sitting right at the heart of Harwich and facing the Quay and
              Pier.
            </p>
            <p className="text-ocean-800/70 leading-relaxed mb-8">
              Lots to explore in the area, with a lovely restaurant, pub and
              cafeteria right on the doorstep. History, character, and comfort
              all in one.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-ocean-600 mb-8">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sand-400 inline-block" />
                2 bedrooms
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sand-400 inline-block" />
                Apartment
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sand-400 inline-block" />
                Listed 1864 building
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sand-400 inline-block" />
                Quay &amp; Pier views
              </span>
            </div>

            <BookingButtons airbnbUrl="https://www.airbnb.co.uk/rooms/23714563" bookingUrl="https://www.booking.com/hotel/gb/on-the-quay.en-gb.html" />
          </div>

          {/* Hero photo */}
          <div className="aspect-[4/3] bg-ocean-50 rounded-2xl overflow-hidden relative">
            <Image
              src="/images/harwich/hero.jpg"
              alt="On the Quay — apartment in historic Quayside Court, Harwich"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Photo gallery ────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-ocean-500 text-xs tracking-[0.2em] uppercase font-medium mb-2">
          Gallery
        </p>
        <h2 className="font-serif text-3xl text-ocean-950 mb-10">
          Inside the apartment
        </h2>
        <PhotoGrid photos={photos} slug="harwich" />
      </section>

      {/* ── Book direct CTA ──────────────────────────────────── */}
      {/* ── Reviews ──────────────────────────────────────────── */}
      <section className="bg-sand-50 border-y border-sand-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-ocean-500 text-xs tracking-[0.2em] uppercase font-medium mb-2 text-center">
            Guest reviews
          </p>
          <h2 className="font-serif text-3xl text-ocean-950 mb-3 text-center">
            What guests say
          </h2>
          <p className="text-ocean-600/70 text-center mb-12">
            4.7 ★ on Airbnb · 103 reviews
          </p>
          <ReviewsCarousel reviews={harwichReviews} />
        </div>
      </section>

      {/* ── Book direct CTA ──────────────────────────────────── */}
      <section id="book" className="bg-ocean-950 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-3xl mb-2">Book On the Quay</h2>
            <p className="text-white/60">
              Call us directly for the best rate — no booking fees.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:07830301317"
              className="bg-sand-400 text-ocean-950 font-semibold px-8 py-4 rounded-full hover:bg-sand-300 transition-colors"
            >
              07830301317
            </a>
            <BookingButtons airbnbUrl="https://www.airbnb.co.uk/rooms/23714563" bookingUrl="https://www.booking.com/hotel/gb/on-the-quay.en-gb.html" />
          </div>
        </div>
      </section>
    </>
  );
}
