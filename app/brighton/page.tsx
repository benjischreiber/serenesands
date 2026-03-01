import type { Metadata } from "next";
import Image from "next/image";
import BookingButtons from "@/components/BookingButtons";
import BookingCalendar from "@/components/BookingCalendar";
import PhotoGrid from "@/components/PhotoGrid";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import { brightonReviews } from "@/lib/reviews";

const CALENDAR_KEY =
  "ADD4FA91A2F53198491534257B7B793007C0524B9A2CDD0947E7E8A0C5FA0C82EAFA9E1F30A0A500E9A6558C6CD2CFC02E1A9A3F2F445E5E";

export const metadata: Metadata = {
  title: "Brighton — Serenity Square | Serene Holidays",
  description:
    "2-bedroom ground floor flat on Clarence Square, Brighton — 350 yards from the beach. Book direct or via Airbnb and Booking.com.",
};

const photos = Array.from({ length: 25 }, (_, i) => ({
  src: `/images/brighton/${i + 1}.jpg`,
  alt: `Serenity Square Brighton — photo ${i + 1}`,
}));

export default function BrightonPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-white border-b border-sand-200">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-ocean-500 text-xs tracking-[0.2em] uppercase font-medium mb-3">
              Brighton
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-ocean-950 leading-tight mb-3">
              Serenity Square
            </h1>
            <p className="font-serif italic text-xl text-sand-500 mb-6">
              England&apos;s most happening city
            </p>
            <p className="text-ocean-800/70 leading-relaxed mb-4">
              Experience the buzz of life in Brighton — one of England&apos;s
              most dynamic and varied cities. A fabulous 2-bedroom ground floor
              flat in a superb location on Clarence Square in central Brighton,
              just 350 yards from the beach.
            </p>
            <p className="text-ocean-800/70 leading-relaxed mb-8">
              Near to all the central shopping and The Lanes, walking distance
              from the train station, and a few minutes from the i360 tower.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-ocean-600 mb-8">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sand-400 inline-block" />
                2 bedrooms
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sand-400 inline-block" />
                Ground floor flat
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sand-400 inline-block" />
                350 yards to beach
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sand-400 inline-block" />
                Central Brighton
              </span>
            </div>

            <BookingButtons
              airbnbUrl="https://www.airbnb.co.uk/rooms/781279887057900075"
              bookingUrl="https://www.booking.com/hotel/gb/clarencia-central-brighton.en-gb.html"
              directUrl="#book"
            />
          </div>

          {/* Hero photo */}
          <div className="aspect-[4/3] bg-ocean-100 rounded-2xl overflow-hidden relative">
            <Image
              src="/images/brighton/hero.jpg"
              alt="Serenity Square — ground floor flat on Clarence Square, Brighton"
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
          Inside the flat
        </h2>
        <PhotoGrid photos={photos} slug="brighton" />
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
            4.53 ★ on Airbnb · 40 reviews
          </p>
          <ReviewsCarousel reviews={brightonReviews} />
        </div>
      </section>

      {/* ── Booking calendar ─────────────────────────────────── */}
      <section id="book" className="py-20">
        <div className="max-w-6xl mx-auto px-6 mb-10">
          <p className="text-ocean-500 text-xs tracking-[0.2em] uppercase font-medium mb-2">
            Availability &amp; booking
          </p>
          <h2 className="font-serif text-3xl text-ocean-950">
            Book direct
          </h2>
        </div>
        <div className="max-w-lg mx-auto px-6">
          <BookingCalendar calendarKey={CALENDAR_KEY} propertyId="618325" />
        </div>
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
          <BookingButtons
            airbnbUrl="https://www.airbnb.co.uk/rooms/781279887057900075"
            bookingUrl="https://www.booking.com/hotel/gb/clarencia-central-brighton.en-gb.html"
          />
        </div>
      </section>
    </>
  );
}
