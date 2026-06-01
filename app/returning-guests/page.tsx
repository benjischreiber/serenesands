import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, contactEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Returning Guests and Referrals",
  description:
    "Returning guest and referral information for Serene Holidays guests booking direct in Felixstowe, Brighton and Harwich.",
  alternates: {
    canonical: "/returning-guests",
  },
  openGraph: {
    title: "Returning Guests and Referrals | Serene Holidays",
    description:
      "Book direct again, ask about returning guest rates, or refer friends and family to Serene Holidays.",
    url: absoluteUrl("/returning-guests"),
  },
};

export default function ReturningGuestsPage() {
  return (
    <>
      <section className="bg-white border-b border-sand-200">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-ocean-500 text-xs tracking-[0.2em] uppercase font-medium mb-3">
            Book direct again
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-ocean-950 leading-tight max-w-3xl mb-6">
            Returning guests and referrals
          </h1>
          <p className="text-ocean-800/75 text-lg leading-relaxed max-w-2xl">
            If you have stayed with Benji and Leah before, the easiest next
            trip is usually a direct booking. Tell us where you stayed, roughly
            when you came, and which dates you are considering.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Returning guest rates",
            body: "Ask before booking if you have stayed before. Where dates allow, we will always try to make a direct return stay feel worthwhile.",
          },
          {
            title: "Refer friends or family",
            body: "If someone books after your recommendation, ask them to mention your name. It helps us recognise referrals and look after repeat guests properly.",
          },
          {
            title: "Book direct",
            body: "Direct bookings avoid platform fees where possible and keep communication simple with the hosts who know the properties.",
          },
        ].map((item) => (
          <div key={item.title} className="border border-sand-200 rounded-xl p-6 bg-white">
            <h2 className="font-serif text-2xl text-ocean-950 mb-4">
              {item.title}
            </h2>
            <p className="text-ocean-800/70 leading-relaxed">{item.body}</p>
          </div>
        ))}
      </section>

      <section className="bg-sand-100 border-y border-sand-200">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-8 md:items-center md:justify-between">
          <div>
            <p className="text-ocean-500 text-xs tracking-[0.2em] uppercase font-medium mb-3">
              Next stay
            </p>
            <h2 className="font-serif text-3xl text-ocean-950 mb-3">
              Choose your property
            </h2>
            <p className="text-ocean-800/70 max-w-xl">
              Check availability online, or email us if you want to discuss a
              repeat booking before choosing dates.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link className="inline-flex items-center justify-center bg-ocean-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-ocean-600 text-sm" href="/felixstowe#book">
              Felixstowe
            </Link>
            <Link className="inline-flex items-center justify-center bg-ocean-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-ocean-600 text-sm" href="/brighton#book">
              Brighton
            </Link>
            <Link className="inline-flex items-center justify-center bg-ocean-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-ocean-600 text-sm" href="/harwich#book">
              Harwich
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-ocean-800/75">
          Prefer email? Contact{" "}
          <a className="text-ocean-700 font-semibold hover:text-ocean-500" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
          .
        </p>
      </section>
    </>
  );
}
