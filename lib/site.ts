export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.serenesands.co.uk",
);

export const siteName = "Serene Holidays";
export const contactEmail = "info@serenesands.co.uk";
export const contactPhone = "+447830301317";

export const properties = [
  {
    slug: "brighton",
    name: "Serenity Square",
    location: "Brighton",
    title: "Brighton Holiday Let - Serenity Square",
    description:
      "Central Brighton holiday apartment on Clarence Square, 350 yards from the beach and close to The Lanes. Book direct.",
    shortDescription:
      "A 2-bedroom ground floor flat on Clarence Square in central Brighton, 350 yards from the beach.",
    type: "Ground floor flat",
    bedrooms: 2,
    ratingValue: 4.53,
    reviewCount: 40,
    airbnbUrl: "https://www.airbnb.co.uk/rooms/781279887057900075",
    bookingUrl:
      "https://www.booking.com/hotel/gb/clarencia-central-brighton.en-gb.html",
  },
  {
    slug: "felixstowe",
    name: "Serene Sands",
    location: "Felixstowe",
    title: "Felixstowe Holiday Let - Serene Sands",
    description:
      "Seafront holiday house in Felixstowe with 3 bedrooms, direct sea views, promenade walks and Landguard Peninsula nearby.",
    shortDescription:
      "A 3-bedroom townhouse in Felixstowe with direct sea views and promenade walks nearby.",
    type: "Townhouse",
    bedrooms: 3,
    ratingValue: 4.83,
    reviewCount: 120,
    airbnbUrl: "https://www.airbnb.co.uk/rooms/9095485",
    bookingUrl: "https://www.booking.com/hotel/gb/serene-sands.en-gb.html",
  },
  {
    slug: "harwich",
    name: "On the Quay",
    location: "Harwich",
    title: "Harwich Holiday Let - On the Quay",
    description:
      "Harwich Quay holiday apartment in listed Quayside Court, facing the Quay and Pier with harbour walks nearby.",
    shortDescription:
      "A 2-bedroom apartment in listed Quayside Court, facing Harwich Quay and Pier.",
    type: "Apartment",
    bedrooms: 2,
    ratingValue: 4.7,
    reviewCount: 103,
    airbnbUrl: "https://www.airbnb.co.uk/rooms/23714563",
    bookingUrl: "https://www.booking.com/hotel/gb/on-the-quay.en-gb.html",
  },
] as const;

export type PropertySlug = (typeof properties)[number]["slug"];

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function getProperty(slug: PropertySlug) {
  return properties.find((property) => property.slug === slug)!;
}

export function propertyJsonLd(slug: PropertySlug) {
  const property = getProperty(slug);
  const propertyUrl = absoluteUrl(`/${property.slug}`);
  const imageUrl = absoluteUrl(`/images/${property.slug}/hero.jpg`);
  const propertyId = `${propertyUrl}#property`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VacationRental",
        "@id": propertyId,
        name: property.name,
        description: property.shortDescription,
        url: propertyUrl,
        image: imageUrl,
        telephone: contactPhone,
        email: contactEmail,
        numberOfBedrooms: property.bedrooms,
        accommodationCategory: property.type,
        address: {
          "@type": "PostalAddress",
          addressLocality: property.location,
          addressCountry: "GB",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: property.ratingValue,
          reviewCount: property.reviewCount,
          bestRating: 5,
          worstRating: 1,
        },
        sameAs: [property.airbnbUrl, property.bookingUrl],
      },
      {
        "@type": "LodgingBusiness",
        "@id": `${propertyUrl}#lodging-business`,
        name: property.name,
        description: property.shortDescription,
        url: propertyUrl,
        image: imageUrl,
        telephone: contactPhone,
        email: contactEmail,
        address: {
          "@type": "PostalAddress",
          addressLocality: property.location,
          addressCountry: "GB",
        },
        containsPlace: {
          "@type": "Accommodation",
          "@id": propertyId,
          name: property.name,
          numberOfBedrooms: property.bedrooms,
          accommodationCategory: property.type,
        },
        parentOrganization: {
          "@type": "Organization",
          name: siteName,
          url: absoluteUrl("/"),
        },
      },
    ],
  };
}

export const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: siteName,
  url: absoluteUrl("/"),
  image: absoluteUrl("/images/hero.jpg"),
  telephone: contactPhone,
  email: contactEmail,
  description:
    "Seaside holiday lets in Brighton, Felixstowe and Harwich, available to book direct.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "GB",
  },
  makesOffer: properties.map((property) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "VacationRental",
      name: property.name,
      url: absoluteUrl(`/${property.slug}`),
      address: {
        "@type": "PostalAddress",
        addressLocality: property.location,
        addressCountry: "GB",
      },
    },
  })),
};
