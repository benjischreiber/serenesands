"use client";

import { trackAnalyticsEvent } from "@/lib/analytics-events";

interface Props {
  airbnbUrl: string;
  bookingUrl: string;
  /** URL for "Book direct" button — pass "#book" to scroll to the calendar.
   *  Omit entirely to hide the button (e.g. in the footer platform strip). */
  directUrl?: string;
  propertyName?: string;
}

export default function BookingButtons({
  airbnbUrl,
  bookingUrl,
  directUrl,
  propertyName,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {directUrl && (
        <a
          href={directUrl}
          onClick={() =>
            trackAnalyticsEvent("book_direct_click", {
              property_name: propertyName,
              link_url: directUrl,
              cta_text: "Book direct",
            })
          }
          className="inline-flex items-center bg-ocean-700 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-ocean-600 transition-colors text-sm shadow-sm"
        >
          Book direct
        </a>
      )}

      <a
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackAnalyticsEvent("booking_outbound_click", {
            property_name: propertyName,
            link_url: bookingUrl,
            cta_text: "Booking.com",
          })
        }
        className="inline-flex items-center gap-2 border border-ocean-300 text-ocean-700 font-semibold px-5 py-3 rounded-full hover:border-ocean-600 hover:text-ocean-600 transition-colors text-sm bg-white"
      >
        Booking.com
      </a>

      <a
        href={airbnbUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackAnalyticsEvent("airbnb_outbound_click", {
            property_name: propertyName,
            link_url: airbnbUrl,
            cta_text: "Airbnb",
          })
        }
        className="inline-flex items-center gap-2 border border-sand-300 text-ocean-700 font-semibold px-5 py-3 rounded-full hover:border-sand-500 hover:text-ocean-600 transition-colors text-sm bg-white"
      >
        Airbnb
      </a>
    </div>
  );
}
