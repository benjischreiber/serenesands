interface Props {
  airbnbUrl: string;
  bookingUrl: string;
  /** URL for "Book direct" button. Pass "#book" to scroll to calendar, or omit for phone link. */
  directUrl?: string;
  directPhone?: string;
  /** Set true to hide the "Book direct" button entirely (e.g. in footer platform strip) */
  hideDirect?: boolean;
}

export default function BookingButtons({
  airbnbUrl,
  bookingUrl,
  directUrl,
  directPhone = "07830301317",
  hideDirect = false,
}: Props) {
  const bookDirectHref = directUrl ?? `tel:${directPhone}`;

  return (
    <div className="flex flex-wrap gap-3">
      {!hideDirect && (
        <a
          href={bookDirectHref}
          className="inline-flex items-center gap-2 bg-ocean-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-ocean-600 transition-colors text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          Book direct
        </a>
      )}

      <a
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border-2 border-[#003580] text-[#003580] font-semibold px-6 py-3 rounded-full hover:bg-[#003580] hover:text-white transition-colors text-sm"
      >
        Booking.com
      </a>

      <a
        href={airbnbUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border-2 border-[#FF5A5F] text-[#FF5A5F] font-semibold px-6 py-3 rounded-full hover:bg-[#FF5A5F] hover:text-white transition-colors text-sm"
      >
        Airbnb
      </a>
    </div>
  );
}
