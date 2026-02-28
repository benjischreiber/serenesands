interface Props {
  airbnbUrl: string;
  bookingUrl: string;
  /** URL for "Book direct" button — pass "#book" to scroll to the calendar.
   *  Omit entirely to hide the button (e.g. in the footer platform strip). */
  directUrl?: string;
}

export default function BookingButtons({
  airbnbUrl,
  bookingUrl,
  directUrl,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {directUrl && (
        <a
          href={directUrl}
          className="inline-flex items-center bg-ocean-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-ocean-600 transition-colors text-sm"
        >
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
