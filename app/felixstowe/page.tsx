import type { Metadata } from "next";
import Image from "next/image";
import BookingButtons from "@/components/BookingButtons";
import BookingCalendar from "@/components/BookingCalendar";
import PhotoGrid from "@/components/PhotoGrid";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import { felixstoweReviews } from "@/lib/reviews";

const CALENDAR_KEY =
  "ADD4FA91A2F53198491534257B7B793007C0524B9A2CDD0947E7E8A0C5FA0C82EAFA9E1F30A0A500E9A6558C6CD2CFC02E1A9A3F2F445E5E";

export const metadata: Metadata = {
  title: "Felixstowe — Serene Sands | Serene Holidays",
  description:
    "3-bedroom townhouse facing directly onto the sea in Felixstowe. Stunning sea views, promenade walks, and the Landguard Peninsula on the doorstep.",
};

const photos = Array.from({ length: 20 }, (_, i) => ({
  src: `/images/felixstowe/${i + 1}.jpg`,
  alt: `Serene Sands Felixstowe — photo ${i + 1}`,
}));

export default function FelixstowePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-white border-b border-sand-200">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-ocean-500 text-xs tracking-[0.2em] uppercase font-medium mb-3">
              Felixstowe
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-ocean-950 leading-tight mb-3">
              Serene Sands
            </h1>
            <p className="font-serif italic text-xl text-sand-500 mb-6">
              Authentic relaxing seaside holiday
            </p>
            <p className="text-ocean-800/70 leading-relaxed mb-4">
              Stay in this idyllic 3-bedroom townhouse facing directly onto the
              sea. It&apos;s calm and peaceful — perfect for strolls up the
              promenade or onto the Landguard Peninsula Nature Reserve.
            </p>
            <p className="text-ocean-800/70 leading-relaxed mb-8">
              The house has full views of the sea, beautiful walks, and a great
              café nearby. This is a proper seaside escape.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-ocean-600 mb-8">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sand-400 inline-block" />
                3 bedrooms
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sand-400 inline-block" />
                Townhouse
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sand-400 inline-block" />
                Direct sea views
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sand-400 inline-block" />
                Landguard Peninsula nearby
              </span>
            </div>

            <BookingButtons airbnbUrl="https://www.airbnb.co.uk/rooms/9095485" bookingUrl="https://www.booking.com/hotel/gb/serene-sands.en-gb.html" directUrl="#book" />
          </div>

          {/* Hero photo */}
          <div className="aspect-[4/3] bg-sand-100 rounded-2xl overflow-hidden relative">
            <Image
              src="/images/felixstowe/hero.jpg"
              alt="Serene Sands — sea-facing townhouse in Felixstowe"
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
          Inside the house
        </h2>
        <PhotoGrid photos={photos} slug="felixstowe" />
      </section>

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
            4.83 ★ on Airbnb · 120 reviews
          </p>
          <ReviewsCarousel reviews={felixstoweReviews} />
        </div>
      </section>

      {/* ── Booking calendar ─────────────────────────────────── */}
      <section id="book" className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-ocean-500 text-xs tracking-[0.2em] uppercase font-medium mb-2">
          Availability &amp; booking
        </p>
        <h2 className="font-serif text-3xl text-ocean-950 mb-10">
          Book direct
        </h2>
        <BookingCalendar calendarKey={CALENDAR_KEY} propertyId="385019" />
      </section>

      {/* ── Book via platforms CTA ───────────────────────────── */}
      <section className="bg-ocean-950 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-3xl mb-2">Also available on</h2>
            <p className="text-white/60">
              Or book via your preferred platform.
            </p>
          </div>
          <BookingButtons airbnbUrl="https://www.airbnb.co.uk/rooms/9095485" bookingUrl="https://www.booking.com/hotel/gb/serene-sands.en-gb.html" />
        </div>
      </section>
    </>
  );
}
