"use client";

import { trackAnalyticsEvent } from "@/lib/analytics-events";
import { contactEmail, contactPhone } from "@/lib/site";

export default function Footer() {
  const displayPhone = "07830 301317";

  return (
    <footer className="bg-ocean-950 text-white/60">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-serif text-xl text-white font-medium mb-1">
            Serene Holidays
          </p>
          <p className="text-xs tracking-widest uppercase text-sand-400">
            Seaside Holiday Lets
          </p>
        </div>

        <div className="text-center text-sm">
          <a
            href={`mailto:${contactEmail}`}
            onClick={() =>
              trackAnalyticsEvent("email_click", {
                property_name: "Serene Holidays",
                link_url: `mailto:${contactEmail}`,
                cta_text: contactEmail,
              })
            }
            className="hover:text-white transition-colors"
          >
            {contactEmail}
          </a>
          <span className="mx-3 text-white/25">/</span>
          <a
            href={`tel:${contactPhone}`}
            onClick={() =>
              trackAnalyticsEvent("phone_click", {
                property_name: "Serene Holidays",
                link_url: `tel:${contactPhone}`,
                cta_text: displayPhone,
              })
            }
            className="hover:text-white transition-colors"
          >
            {displayPhone}
          </a>
        </div>

        <p className="text-xs">
          © {new Date().getFullYear()} Serene Holidays. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
