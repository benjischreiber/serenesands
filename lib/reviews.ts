export interface Review {
  name: string;
  date: string;
  rating: number;
  text: string;
  property: "felixstowe" | "brighton" | "harwich";
  propertyName: string;
  source: "airbnb";
}

export const felixstoweReviews: Review[] = [
  {
    name: "Bron",
    date: "December 2025",
    rating: 5,
    text: "Lovely warm house with great views. Really well equipped — immaculately clean and towels and bed linen are good quality. Our family love taking part in the park-run along the promenade. Benji and Leah are great hosts.",
    property: "felixstowe",
    propertyName: "Serene Sands",
    source: "airbnb",
  },
  {
    name: "Petronella",
    date: "September 2025",
    rating: 5,
    text: "Excellent location, great views, had everything you could wish for — right on the beach, two minutes and we were in the sea. Bedrooms spacious and very comfortable, kitchen very well-equipped. Highly recommended and we will be back.",
    property: "felixstowe",
    propertyName: "Serene Sands",
    source: "airbnb",
  },
  {
    name: "Sue",
    date: "September 2025",
    rating: 5,
    text: "Great location so near to the sea. Benji and Leah are good hosts — they responded immediately when we had a problem. A great house for a family group. Spacious and comfortable. Highly recommended!",
    property: "felixstowe",
    propertyName: "Serene Sands",
    source: "airbnb",
  },
  {
    name: "Roz",
    date: "August 2025",
    rating: 5,
    text: "Lovely location overlooking the sea in a quiet neighbourhood, within walking distance of all the seaside attractions. So much to do and see. It exceeded our expectations. We would certainly recommend.",
    property: "felixstowe",
    propertyName: "Serene Sands",
    source: "airbnb",
  },
  {
    name: "David",
    date: "March 2025",
    rating: 5,
    text: "Benji & Leah's place was fabulous. Close to amenities yet in a peaceful area — clean, tidy, warm and welcoming. Parking for two cars by the back gate was so handy. In all a fabulous place; would definitely book again.",
    property: "felixstowe",
    propertyName: "Serene Sands",
    source: "airbnb",
  },
  {
    name: "Lucie",
    date: "May 2025",
    rating: 5,
    text: "Perfect location for the beach and playgrounds along the sea front. Parking was very easy. The house was spotlessly clean with decor modern and fresh. Kitchen well equipped and basic cleaning supplies provided.",
    property: "felixstowe",
    propertyName: "Serene Sands",
    source: "airbnb",
  },
];

export const brightonReviews: Review[] = [
  {
    name: "Yogeeta",
    date: "April 2025",
    rating: 5,
    text: "Benji & Leah were wonderful and responsive hosts. Their flat is centrally located with proximity to public transport and a short walk to the beach. We had a warm and comfortable stay and would recommend it for a perfect Brighton weekend.",
    property: "brighton",
    propertyName: "Serenity Square",
    source: "airbnb",
  },
  {
    name: "Donna",
    date: "September 2025",
    rating: 5,
    text: "We loved the location. It's so close to shopping, food, activities and the pier. We loved walking, taking the bus and the train. It is a nice neighbourhood and we felt safe.",
    property: "brighton",
    propertyName: "Serenity Square",
    source: "airbnb",
  },
  {
    name: "Molly",
    date: "September 2025",
    rating: 5,
    text: "Such a good location — walkable to everywhere you need. A great place to stay if you're in Brighton! Very clean.",
    property: "brighton",
    propertyName: "Serenity Square",
    source: "airbnb",
  },
  {
    name: "Judith",
    date: "November 2025",
    rating: 4,
    text: "Perfectly located — close to shops, the beach, and within walking distance of the train station. Communication with the host was smooth and all necessary information was provided well in advance. The apartment was clean with a comfortable living area and reliable Wi-Fi.",
    property: "brighton",
    propertyName: "Serenity Square",
    source: "airbnb",
  },
];

export const harwichReviews: Review[] = [
  {
    name: "Owen",
    date: "February 2026",
    rating: 5,
    text: "Lovely apartment, location was perfect and easy to find, parking was no hassle at all. The apartment had everything you could need. Couldn't have asked for an easier stay.",
    property: "harwich",
    propertyName: "On the Quay",
    source: "airbnb",
  },
  {
    name: "Ray",
    date: "January 2026",
    rating: 5,
    text: "Really great place to stay with everything I wanted. Hosts were fantastic and provided great instructions. Convenient and comfortable. I definitely hope to go back and stay again.",
    property: "harwich",
    propertyName: "On the Quay",
    source: "airbnb",
  },
  {
    name: "James",
    date: "January 2026",
    rating: 5,
    text: "Great location across from the pier and waterfront with nice accessible walks. Great places to eat all around the property. Really handy having parking onsite. The property was clean, spacious and comfy — would definitely come back.",
    property: "harwich",
    propertyName: "On the Quay",
    source: "airbnb",
  },
  {
    name: "Karen",
    date: "December 2025",
    rating: 4,
    text: "We had a lovely time at this apartment in Harwich. It was clean and matched the photos on the website. We found it easily and had no problem parking. Beds were very comfortable. Nice walks along the seafront.",
    property: "harwich",
    propertyName: "On the Quay",
    source: "airbnb",
  },
  {
    name: "Jason",
    date: "December 2025",
    rating: 5,
    text: "Great place to stay on Harwich Quay, very comfortable. All utensils on hand and a comfy bed too. Easy secure parking.",
    property: "harwich",
    propertyName: "On the Quay",
    source: "airbnb",
  },
];

// A curated cross-property selection for the homepage
export const homepageReviews: Review[] = [
  felixstoweReviews[0], // Bron — Felixstowe
  harwichReviews[0],    // Owen — Harwich
  brightonReviews[0],   // Yogeeta — Brighton
  felixstoweReviews[1], // Petronella — Felixstowe
  harwichReviews[1],    // Ray — Harwich
  brightonReviews[1],   // Donna — Brighton
  felixstoweReviews[2], // Sue — Felixstowe
  harwichReviews[2],    // James — Harwich
];
