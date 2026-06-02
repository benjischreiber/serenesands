import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BookDirectBlock from "@/components/BookDirectBlock";
import BookingButtons from "@/components/BookingButtons";
import BookingCalendar from "@/components/BookingCalendar";
import PhotoGrid from "@/components/PhotoGrid";
import PropertySeoSections from "@/components/PropertySeoSections";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import { harwichReviews } from "@/lib/reviews";
import { absoluteUrl, getProperty, propertyJsonLd } from "@/lib/site";
import { propertySeoContent } from "@/lib/seo-content";

const CALENDAR_KEY =
  "ADD4FA91A2F53198491534257B7B793007C0524B9A2CDD0947E7E8A0C5FA0C82EAFA9E1F30A0A500E9A6558C6CD2CFC02E1A9A3F2F445E5E";
const property = getProperty("harwich");

export const metadata: Metadata = {
  title: propertySeoContent.harwich.searchTitle,
  description: propertySeoContent.harwich.metaDescription,
  alternates: {
    canonical: "/harwich",
  },
  openGraph: {
    title: `${property.name} - Harwich Holiday Let`,
    description: property.description,
    url: absoluteUrl("/harwich"),
    images: [
      {
        url: absoluteUrl("/images/harwich/hero.jpg"),
        width: 1200,
        height: 630,
        alt: "On the Quay apartment in historic Quayside Court, Harwich",
      },
    ],
  },
};

const photos = Array.from({ length: 24 }, (_, i) => ({
  src: `/images/harwich/${i + 1}.jpg`,
  alt: `On the Quay Harwich — photo ${i + 1}`,
}));

export default function HarwichPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(propertyJsonLd("harwich")),
        }}
      />
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
              sitting right at the heart of Harwich, close to the Quay and
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

            <BookingButtons
              airbnbUrl="https://www.airbnb.co.uk/rooms/23714563"
              bookingUrl="https://www.booking.com/hotel/gb/on-the-quay.en-gb.html"
              directUrl="#book"
              propertyName={property.name}
            />
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

      <PropertySeoSections slug="harwich" />

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <p className="text-ocean-800/75 leading-relaxed max-w-3xl">
          If you want a{" "}
          <Link
            href="/harwich"
            className="text-ocean-700 font-semibold hover:text-ocean-500"
          >
            Harwich Quay holiday apartment
          </Link>{" "}
          rather than a standard hotel stopover, On the Quay gives you historic
          surroundings, harbour walks and a self-catering base by the water.
        </p>
      </section>

      {/* ── Photo gallery ────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-ocean-500 text-xs tracking-[0.2em] uppercase font-medium mb-2">
          Gallery
        </p>
        <h2 className="font-serif text-3xl text-ocean-950 mb-10">
          Inside the apartment
        </h2>
        <PhotoGrid photos={photos} />
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
            4.7 ★ on Airbnb · 103 reviews
          </p>
          <ReviewsCarousel reviews={harwichReviews} />
        </div>
      </section>

      {/* ── Booking calendar ─────────────────────────────────── */}
      <section id="book" className="py-20">
        <BookDirectBlock />
        <div className="max-w-6xl mx-auto px-6 mb-10">
          <p className="text-ocean-500 text-xs tracking-[0.2em] uppercase font-medium mb-2">
            Availability &amp; booking
          </p>
          <h2 className="font-serif text-3xl text-ocean-950">
            Book direct
          </h2>
        </div>
        <div className="max-w-6xl mx-auto px-6">
          <BookingCalendar
            calendarKey={CALENDAR_KEY}
            propertyId="532734"
            propertyName={property.name}
          />
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
            airbnbUrl="https://www.airbnb.co.uk/rooms/23714563"
            bookingUrl="https://www.booking.com/hotel/gb/on-the-quay.en-gb.html"
            propertyName={property.name}
          />
        </div>
      </section>
    </>
  );
}
