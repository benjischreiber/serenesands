# Serene Holidays Website

This file is guidance for coding agents working on the Serene Holidays website.

## Project

- Site: `https://www.serenesands.co.uk`
- Stack: Next.js App Router, TypeScript and Tailwind CSS
- Working directory: `/Users/benji/Library/CloudStorage/Dropbox/Property/Felixstowe/website`
- Dev server: `npm run dev -- --port 3001`
- Use British English throughout.

## Properties

1. **Serene Sands** — `/felixstowe`
   - 3-bedroom townhouse.
   - Direct sea views.
   - Address: 9 Old Fort Road, Felixstowe IP11 2GG.
   - Airbnb: `https://www.airbnb.co.uk/rooms/9095485`
   - Booking.com: `https://www.booking.com/hotel/gb/serene-sands.en-gb.html`

2. **Serenity Square** — `/brighton`
   - 2-bedroom ground-floor flat.
   - Clarence Square, about 350 yards from the beach.
   - Address: Ground Floor Flat, 12 Clarence Square, Brighton BN1 2ED.
   - Airbnb: `https://www.airbnb.co.uk/rooms/781279887057900075`
   - Booking.com: `https://www.booking.com/hotel/gb/clarencia-central-brighton.en-gb.html`

3. **On the Quay** — `/harwich`
   - 2-bedroom apartment in listed 1864 Quayside Court.
   - Address: Flat 19 Quayside Court, The Quay, Harwich Essex CO12 3HH.
   - Important wording note: the building is close to the Quay and Pier, but the apartment windows do not face the Quay or Pier.
   - Airbnb: `https://www.airbnb.co.uk/rooms/23714563`
   - Booking.com: `https://www.booking.com/hotel/gb/on-the-quay.en-gb.html`

## Contact

- Hosts: Benji and Leah
- Phone: 07830 301317
- Email: `info@serenesands.co.uk`

## Product Direction

- Prioritise direct booking, but keep copy calm and trustworthy.
- Do not add discount-led, referral-led or “returning guest discount” pages unless explicitly requested.
- Do not add more guide or blog content until Search Console has 3-6 weeks of query data.
- Keep Airbnb and Booking.com as secondary booking options where already present.
- Avoid implying guests should cancel OTA bookings.

## SEO And Analytics

- GA4 measurement ID is configured through `NEXT_PUBLIC_GA_MEASUREMENT_ID`.
- Track direct booking, Airbnb outbound, Booking.com outbound, email, phone and calendar interactions.
- Keep `/robots.txt`, `/sitemap.xml`, canonical URLs and Search Console verification in place.
- Property pages use `VacationRental` and `LodgingBusiness` JSON-LD.
- If changing schema, validate with Schema.org Validator and Google Rich Results Test.

## Design And Content

- Design language: calm coastal, practical and polished.
- Colours: `ocean-*` and `sand-*`.
- Fonts: Playfair Display for headings, Inter for body text.
- Background: `#fefcf8`.
- Use Next.js `<Image>` for image rendering where practical.
- Keep copy accurate and specific. Do not overstate views, distances or amenities.

## Key Files

```text
app/
  page.tsx
  layout.tsx
  globals.css
  felixstowe/page.tsx
  brighton/page.tsx
  harwich/page.tsx
  sitemap.ts
  robots.ts
components/
  BookingButtons.tsx
  BookingCalendar.tsx
  BookDirectBlock.tsx
  Footer.tsx
  Navbar.tsx
  PhotoGrid.tsx
  ReviewsCarousel.tsx
lib/
  analytics-events.ts
  reviews.ts
  seo-content.ts
  site.ts
public/
  google80843947338a1091.html
  images/
```

## Verification

Before pushing meaningful changes, run:

```bash
npm run lint
npm run build
```
