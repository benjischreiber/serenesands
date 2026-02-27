# Serene Holidays — Website Project

## Permissions
The following tools are pre-authorised — no need to prompt for approval:
- Read, Write, Edit files anywhere in this project directory
- Bash commands: npm run dev, npm run build, npm run lint, git status/diff/log
- preview_start / preview_stop / preview_screenshot / preview_snapshot / preview_inspect
- WebFetch and WebSearch for research
- Navigating to Airbnb, Booking.com and similar listing sites to fetch reviews/data
- Clicking through cookie banners on external sites (always choose "Only necessary")

## Project Overview
Next.js (App Router) + TypeScript + Tailwind CSS website for three holiday let properties.

**Working directory:** `/Users/benji/Dropbox/property/felixstowe/website/`

**Dev server:** `npm run dev -- --port 3001` → localhost:3001
(Note: port 3001 to avoid clash with the Benji Schreiber site on 3000)

## Properties
1. **Serene Sands** — Felixstowe (`/felixstowe`)
   - 3-bed townhouse, direct sea views
   - Airbnb: https://www.airbnb.co.uk/rooms/9095485 (4.83★, 120 reviews)
   - Booking.com: https://www.booking.com/hotel/gb/serene-sands.en-gb.html

2. **Serenity Square** — Brighton (`/brighton`)
   - 2-bed ground floor flat, Clarence Square, 350 yards from beach
   - Airbnb: https://www.airbnb.co.uk/rooms/781279887057900075 (4.53★, 40 reviews)
   - Booking.com: https://www.booking.com/hotel/gb/clarencia-central-brighton.en-gb.html

3. **On the Quay** — Harwich (`/harwich`)
   - 2-bed apartment, listed 1864 Quayside Court, faces the Quay and Pier
   - Airbnb: https://www.airbnb.co.uk/rooms/23714563 (4.7★, 103 reviews)
   - Booking.com: https://www.booking.com/hotel/gb/on-the-quay.en-gb.html

## Contact
- **Phone:** 07830301317
- **Hosts:** Benji & Leah

## Photo locations (Dropbox)
- Felixstowe: `/Users/benji/Dropbox/property/felixstowe/Photos/Philip Aveston hi res/`
- Brighton: `/Users/benji/Dropbox/property/Brighton/Photos/SMALL FILES/`
- Harwich: `/Users/benji/Dropbox/property/Harwich/Photos/Mulberry photos/`

## Design System
- **Colours:** `ocean-*` (navy blues, 50–950) + `sand-*` (warm amber, 50–500)
- **Fonts:** Playfair Display (serif headings) + Inter (sans body)
- **Background:** `#fefcf8` (sand-50)

## Tech Notes
- App Router — files go in `/app/`
- Use `"use client"` only for interactive components (useState, useEffect)
- Images: Next.js `<Image>` with `fill` + `object-cover`
- Reviews data: `lib/reviews.ts`
- British English throughout

## Files & Structure
```
app/
  page.tsx          — Homepage (property grid + reviews carousel + book direct)
  layout.tsx        — Root layout (Navbar + Footer)
  globals.css       — Tailwind theme (colours, fonts)
  felixstowe/page.tsx
  brighton/page.tsx
  harwich/page.tsx
components/
  Navbar.tsx
  Footer.tsx
  BookingButtons.tsx
  PhotoGrid.tsx
  ReviewsCarousel.tsx
lib/
  reviews.ts        — All review data (Airbnb, real guests)
public/images/
  felixstowe/       — hero.jpg + 1–20.jpg
  brighton/         — hero.jpg + 1–25.jpg
  harwich/          — hero.jpg + 1–24.jpg
```
