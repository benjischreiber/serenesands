import type { PropertySlug } from "@/lib/site";

export const guideLinks = [
  {
    href: "/felixstowe-guide",
    title: "Felixstowe Guide",
    description:
      "Beaches, promenade walks, Landguard Fort, the ferry, family days out and easy places to eat near Serene Sands.",
  },
  {
    href: "/harwich-guide",
    title: "Harwich Guide",
    description:
      "Historic harbour walks, Ha'penny Pier, maritime heritage, ferry links and relaxed quayside days near On the Quay.",
  },
  {
    href: "/brighton-guide",
    title: "Brighton Guide",
    description:
      "The beach, The Lanes, Royal Pavilion, Palace Pier, restaurants and family-friendly ideas near Serenity Square.",
  },
];

export const propertySeoContent: Record<
  PropertySlug,
  {
    searchTitle: string;
    metaDescription: string;
    intro: string[];
    highlights: string[];
    goodFor: string[];
    location: string[];
    practical: string[];
    faqs: { question: string; answer: string }[];
    guideHref: string;
    guideLabel: string;
  }
> = {
  felixstowe: {
    searchTitle: "Seafront Holiday House in Felixstowe | Sleeps 6",
    metaDescription:
      "Book Serene Sands, a 3-bedroom seafront holiday house in Felixstowe with direct sea views, promenade walks and easy access to Landguard Fort.",
    intro: [
      "Serene Sands is a seafront holiday house in Felixstowe for families, couples and small groups who want the sea right in front of them. The house faces directly onto the coast, with big views, easy promenade walks and a calmer feel than a busy resort hotel.",
      "It works especially well for guests searching for self-catering accommodation in Felixstowe, a family holiday house near the beach, or a quiet base for exploring the Suffolk coast. You can settle in, cook properly, walk out to the seafront, and come back to a comfortable home rather than a cramped room.",
    ],
    highlights: [
      "3 bedrooms, ideal for up to 6 guests",
      "Direct sea views from the house",
      "Self-catering setup for easy family meals",
      "Promenade walks from the doorstep",
      "Landguard Peninsula and nature reserve nearby",
      "Book direct calendar for availability and rates",
    ],
    goodFor: [
      "Family seaside holidays",
      "Multi-generation breaks",
      "Guests who want a Felixstowe holiday house with sea views",
      "Walking weekends on the Suffolk coast",
      "Longer self-catering stays",
    ],
    location: [
      "Felixstowe is a classic Suffolk seaside town with a long seafront, colourful beach huts, Edwardian gardens, beach cafes and family attractions. The promenade makes gentle days easy: walk, stop for coffee, head to the beach, and come back without needing to plan every hour.",
      "For history and nature, Landguard is one of the area's strongest draws. The peninsula brings together Landguard Fort, Felixstowe Museum, a nature reserve, big-ship views over the port, and open coastal walking. It gives the stay a proper sense of place beyond the beach.",
    ],
    practical: [
      "The house is best suited to guests who want a whole-home stay rather than hotel facilities. Use the direct booking calendar for live availability, and contact Benji and Leah if you need to check details before booking.",
      "Felixstowe works well by car and also for rail travellers who are happy using local taxis or buses. Attraction opening times vary seasonally, especially around Landguard, so check before making a special trip.",
    ],
    faqs: [
      {
        question: "Is Serene Sands close to the beach?",
        answer:
          "Yes. Serene Sands faces directly onto the sea in Felixstowe, so it is a strong fit for guests looking for seafront accommodation or a holiday house with sea views.",
      },
      {
        question: "How many bedrooms does the Felixstowe house have?",
        answer:
          "Serene Sands has 3 bedrooms, making it suitable for families, friends and small groups looking for self-catering accommodation in Felixstowe.",
      },
      {
        question: "Can I book Serene Sands direct?",
        answer:
          "Yes. Use the availability calendar on this page to book direct and avoid platform fees where possible.",
      },
      {
        question: "What is nearby for families?",
        answer:
          "The seafront, promenade, beach cafes, Felixstowe attractions and Landguard Peninsula are all good options for relaxed family days.",
      },
    ],
    guideHref: "/felixstowe-guide",
    guideLabel: "Read the Felixstowe guide",
  },
  brighton: {
    searchTitle: "Central Brighton Holiday Apartment | Sleeps 4",
    metaDescription:
      "Book Serenity Square, a 2-bedroom central Brighton holiday apartment on Clarence Square, 350 yards from the beach and close to The Lanes.",
    intro: [
      "Serenity Square is a central Brighton holiday apartment on Clarence Square, made for guests who want the beach, The Lanes, restaurants and city energy within easy reach. It is a ground floor flat with 2 bedrooms, giving you a more practical base than a hotel room for a weekend, short break or longer stay.",
      "For people searching for a Brighton holiday apartment near the beach, self-catering accommodation in central Brighton, or a 2-bedroom flat close to The Lanes, the location is the main advantage: you can step out for coffee, shopping, the seafront, dinner, or the train without building the day around transport.",
    ],
    highlights: [
      "2 bedrooms, ideal for up to 4 guests",
      "Ground floor flat on Clarence Square",
      "Around 350 yards from the beach",
      "Close to The Lanes, shops and restaurants",
      "Walkable from Brighton station",
      "Book direct calendar for availability and rates",
    ],
    goodFor: [
      "Brighton weekends",
      "Couples or friends sharing",
      "Small families wanting central accommodation",
      "Guests visiting The Lanes, seafront and Royal Pavilion",
      "Train-friendly city breaks",
    ],
    location: [
      "Brighton is at its best when you can walk. From Clarence Square, guests are close to the seafront and within easy reach of The Lanes, the historic shopping and restaurant quarter between North Laine and the sea. The Royal Pavilion, Palace Pier and beach are all natural parts of a Brighton day.",
      "The city suits guests who want a flexible break rather than a fixed itinerary: breakfast nearby, a beach walk, independent shops, music, restaurants, or a slower afternoon back at the flat before heading out again.",
    ],
    practical: [
      "Central Brighton is lively, walkable and busy at peak times. Guests arriving by train often find the location convenient; guests driving should plan parking in advance, as city-centre parking is limited and usually charged.",
      "The flat is a good fit for guests who value location and convenience. Use the direct booking calendar to check dates, and message Benji and Leah if you have questions before booking.",
    ],
    faqs: [
      {
        question: "How close is Serenity Square to Brighton beach?",
        answer:
          "The flat is around 350 yards from the beach, making it suitable for guests searching for a Brighton holiday apartment near the seafront.",
      },
      {
        question: "Is the Brighton flat central?",
        answer:
          "Yes. Serenity Square is on Clarence Square in central Brighton, close to shops, restaurants, The Lanes and the seafront.",
      },
      {
        question: "How many bedrooms does Serenity Square have?",
        answer:
          "The flat has 2 bedrooms and is designed for comfortable self-catering stays for couples, friends or small families.",
      },
      {
        question: "Can I book the Brighton apartment direct?",
        answer:
          "Yes. Use the availability calendar on this page to check dates and book direct.",
      },
    ],
    guideHref: "/brighton-guide",
    guideLabel: "Read the Brighton guide",
  },
  harwich: {
    searchTitle: "Harwich Quay Holiday Apartment | Sleeps 4",
    metaDescription:
      "Book On the Quay, a 2-bedroom holiday apartment in historic Harwich, facing the Quay and Pier with harbour walks on the doorstep.",
    intro: [
      "On the Quay is a 2-bedroom holiday apartment in historic Harwich, set in listed Quayside Court and facing the Quay and Pier. It is a characterful base for guests who want maritime history, harbour views, walks, ferries, pubs and slower coastal days close at hand.",
      "The apartment works well for people searching for Harwich holiday accommodation, a self-catering apartment near Harwich Quay, or a comfortable stay before or after travelling through the port. It gives you a proper home base in the old town rather than a stopover box.",
    ],
    highlights: [
      "2 bedrooms, ideal for up to 4 guests",
      "Apartment in listed 1864 Quayside Court",
      "Faces Harwich Quay and Pier",
      "Restaurants, pub and cafe close by",
      "Maritime walks from the doorstep",
      "Book direct calendar for availability and rates",
    ],
    goodFor: [
      "Harwich harbour breaks",
      "Couples or friends sharing",
      "Small families exploring the Essex coast",
      "Guests interested in maritime history",
      "Pre-ferry or post-ferry stays with more character",
    ],
    location: [
      "Historic Harwich has a distinctive quayside setting, with maritime buildings, harbour views and walking routes that suit a slower, more atmospheric coastal break. Ha'penny Pier is one of the town's best-known landmarks and remains a working wooden pier.",
      "Harwich also has strong Mayflower connections: the Mayflower is believed to have been built in Harwich before 1600, and Captain Christopher Jones's house still stands near the waterfront. That gives the town a richer story than many small coastal destinations.",
    ],
    practical: [
      "The apartment is best for guests who want a characterful town-and-harbour stay rather than resort-style facilities. You can use the direct booking calendar to check availability and rates.",
      "Harwich is useful for ferry connections, coastal walking and quiet breaks. Some attractions and visitor facilities vary by season, so check opening times before building a day around a specific stop.",
    ],
    faqs: [
      {
        question: "Is On the Quay near Harwich harbour?",
        answer:
          "Yes. The apartment faces the Quay and Pier, placing guests close to harbour walks, historic streets and local places to eat.",
      },
      {
        question: "How many bedrooms does the Harwich apartment have?",
        answer:
          "On the Quay has 2 bedrooms, suitable for couples, friends or small families looking for self-catering accommodation in Harwich.",
      },
      {
        question: "Is it useful for ferry travel?",
        answer:
          "Harwich is well known for ferry links. On the Quay is a more characterful option for guests who want to stay in the historic town around a journey.",
      },
      {
        question: "Can I book On the Quay direct?",
        answer:
          "Yes. Use the availability calendar on this page to check dates and book direct.",
      },
    ],
    guideHref: "/harwich-guide",
    guideLabel: "Read the Harwich guide",
  },
};

export const localGuides = {
  felixstowe: {
    slug: "felixstowe-guide",
    title: "Felixstowe Guide",
    heading: "Felixstowe Guide: Beaches, Walks and Landguard",
    description:
      "A practical Felixstowe visitor guide for guests staying at Serene Sands, covering beaches, promenade walks, Landguard Fort, family activities and places to eat.",
    propertyName: "Serene Sands",
    propertyHref: "/felixstowe",
    heroImage: "/images/felixstowe/hero.jpg",
    intro:
      "Felixstowe is an easy seaside town: long seafront, beach huts, gardens, cafes, family attractions and enough coastal walking to fill a weekend without rushing.",
    sections: [
      {
        title: "Beaches and promenade",
        body: "The seafront is the simplest pleasure here. Walk the promenade, stop for coffee, watch the beach huts and choose between a gentle stroll or a longer walk towards Landguard. Visit Felixstowe describes the town as having four miles of beaches, a seafront promenade and Edwardian gardens.",
      },
      {
        title: "Landguard Peninsula",
        body: "Landguard combines coast, history and wildlife in one place. The destination includes Landguard Fort, Felixstowe Museum, the nature reserve, beach and viewing areas for the port and harbour. It is ideal for families, walkers and anyone who likes big skies and big ships.",
      },
      {
        title: "Family days out",
        body: "For relaxed family time, keep things simple: beach, promenade, cafes, gardens and an unhurried walk. Landguard is also a strong option, with seasonal attractions and open outdoor spaces that work well when everyone needs room to roam.",
      },
      {
        title: "Food and easy evenings",
        body: "Felixstowe has classic seaside food, cafes and restaurants around the town and waterfront. Serene Sands is self-catering, so you can mix meals out with simple evenings at home when children, weather or tired legs make that the better plan.",
      },
    ],
    faqs: [
      {
        question: "Is Felixstowe good for a family seaside holiday?",
        answer:
          "Yes. The promenade, beach, gardens, cafes and Landguard Peninsula make it a practical, low-stress choice for families.",
      },
      {
        question: "What is the best thing to do near Serene Sands?",
        answer:
          "Start with the seafront and promenade. If you want a bigger outing, head to Landguard for the fort, museum, nature reserve and port views.",
      },
      {
        question: "Do I need a car in Felixstowe?",
        answer:
          "A car helps for exploring wider Suffolk, but many guests can enjoy a short break focused on the seafront, town and local taxis.",
      },
    ],
  },
  brighton: {
    slug: "brighton-guide",
    title: "Brighton Guide",
    heading: "Brighton Guide: Beach, The Lanes and Easy City Days",
    description:
      "A central Brighton visitor guide for guests staying at Serenity Square, covering the beach, The Lanes, Palace Pier, Royal Pavilion, food and family ideas.",
    propertyName: "Serenity Square",
    propertyHref: "/brighton",
    heroImage: "/images/brighton/hero.jpg",
    intro:
      "Brighton rewards guests who stay centrally. From Clarence Square, the best days are mostly on foot: beach, shops, restaurants, Pavilion, pier and a little wandering.",
    sections: [
      {
        title: "The beach and seafront",
        body: "Brighton is a city break with the sea built in. The beach is close to Serenity Square, so it is easy to begin or end the day with a walk, coffee, ice cream or a slow hour by the water.",
      },
      {
        title: "The Lanes",
        body: "Visit Brighton describes The Lanes as a famous, labyrinth-like area between North Laine and the seafront, filled with narrow alleyways, hidden squares, shops, jewellers and places to eat. It is one of the best reasons to stay central.",
      },
      {
        title: "Royal Pavilion and Palace Pier",
        body: "The Royal Pavilion gives Brighton its grand, eccentric history, while Palace Pier brings the classic seaside side of the city: arcades, rides, food and sea views. Both are natural additions to a first-time Brighton weekend.",
      },
      {
        title: "Food, shops and evenings",
        body: "Brighton is strong for independent cafes, restaurants and casual evenings out. Staying at Serenity Square means you can head out, come back for a rest, then choose a second round without needing the car.",
      },
    ],
    faqs: [
      {
        question: "Is Serenity Square close to Brighton beach?",
        answer:
          "Yes. The flat is around 350 yards from the beach, so seafront walks are easy to fit around the rest of the day.",
      },
      {
        question: "What can I do in Brighton without a car?",
        answer:
          "The beach, The Lanes, Royal Pavilion, Palace Pier, shops, restaurants and station are all practical on foot from central Brighton.",
      },
      {
        question: "Is Brighton good for families?",
        answer:
          "Yes, especially for families who like a mix of beach, pier, food and short city walks. Plan busy periods carefully because central Brighton can get crowded.",
      },
    ],
  },
  harwich: {
    slug: "harwich-guide",
    title: "Harwich Guide",
    heading: "Harwich Guide: Historic Harbour, Quay Walks and Maritime Days",
    description:
      "A Harwich visitor guide for guests staying at On the Quay, covering Ha'penny Pier, Mayflower history, harbour walks, maritime attractions and ferry links.",
    propertyName: "On the Quay",
    propertyHref: "/harwich",
    heroImage: "/images/harwich/hero.jpg",
    intro:
      "Harwich is for guests who like history, harbour views and slower coastal wandering. Stay on the quay and the town's maritime story is outside the door.",
    sections: [
      {
        title: "Ha'penny Pier and the quay",
        body: "Visit Harwich describes Ha'penny Pier as one of the UK's only surviving wooden working piers. Built in 1853, it remains one of the town's defining landmarks and is an easy starting point from On the Quay.",
      },
      {
        title: "Mayflower and maritime history",
        body: "Harwich has strong Mayflower links: the Mayflower is believed to have been built here before 1600, and Captain Christopher Jones's house still stands near the waterfront. That history gives a simple harbour walk much more depth.",
      },
      {
        title: "Walking routes and sea air",
        body: "Harwich suits unhurried walking: quayside views, old streets, Dovercourt, maritime details and changing light across the harbour. It is a good fit for guests who want a break that feels coastal without being loud.",
      },
      {
        title: "Ferry links and practical stays",
        body: "Harwich is well placed for ferry travel, but it deserves more than an overnight stop. On the Quay lets guests stay in the historic part of town, close to the water, food and short walks.",
      },
    ],
    faqs: [
      {
        question: "What is Harwich best known for?",
        answer:
          "Harwich is known for maritime history, ferry links, the historic quay, Ha'penny Pier and its Mayflower connections.",
      },
      {
        question: "Is On the Quay close to the main sights?",
        answer:
          "Yes. The apartment faces the Quay and Pier, so harbour walks and historic streets are close by.",
      },
      {
        question: "Is Harwich good for a quiet weekend?",
        answer:
          "Yes. Harwich is a strong choice for a slower coastal break with history, views, walks and simple places to eat nearby.",
      },
    ],
  },
} as const;
