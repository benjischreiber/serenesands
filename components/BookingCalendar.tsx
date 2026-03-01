"use client";

import { useEffect, useRef } from "react";

interface Props {
  calendarKey: string;
  propertyId: string;
}

export default function BookingCalendar({ calendarKey, propertyId }: Props) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Listen for height messages from the iframe content
  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type === "sc-height" && iframeRef.current) {
        iframeRef.current.style.height = `${e.data.height + 24}px`;
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>html,body{margin:0;padding:0;background:transparent;}</style>
</head>
<body>
  <div data-calendar-key="${calendarKey}" data-calendar-property-id="${propertyId}"></div>
  <script src="https://secure.supercontrol.co.uk/components/embed.js" async></script>
  <script>
    // Report actual content height to parent so iframe can resize
    var reported = 0;
    var interval = setInterval(function() {
      var h = document.body.scrollHeight;
      if (h > 50 && h !== reported) {
        reported = h;
        window.parent.postMessage({ type: 'sc-height', height: h }, '*');
      }
    }, 300);
    setTimeout(function(){ clearInterval(interval); }, 10000);
  </script>
</body>
</html>`;

  return (
    <iframe
      ref={iframeRef}
      srcDoc={html}
      style={{ width: "100%", height: "420px", border: "none" }}
      title="Availability calendar"
      scrolling="no"
    />
  );
}
