"use client";

import { useEffect } from "react";

interface Props {
  calendarKey: string;
  propertyId: string;
  affiliate?: string;
}

export default function BookingCalendar({
  calendarKey,
  propertyId,
  affiliate = "lovetoescape.com",
}: Props) {
  useEffect(() => {
    // Only add the script once — check if it's already present
    const existing = document.querySelector(
      'script[src="https://secure.supercontrol.co.uk/components/embed.js"]'
    );
    if (existing) {
      // Script already loaded — re-trigger initialisation if needed
      (window as Window & { SuperControl?: { init?: () => void } })
        .SuperControl?.init?.();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://secure.supercontrol.co.uk/components/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Leave the script in place on unmount — removing it mid-session
      // can break the widget on re-mount
    };
  }, []);

  return (
    <div
      data-calendar-key={calendarKey}
      data-calendar-property-id={propertyId}
      data-calendar-affiliate={affiliate}
    />
  );
}
