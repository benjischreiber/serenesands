"use client";

export type AnalyticsEventName =
  | "book_direct_click"
  | "airbnb_outbound_click"
  | "booking_outbound_click"
  | "email_click"
  | "phone_click"
  | "calendar_interaction";

interface AnalyticsParams {
  property_name?: string;
  page_path?: string;
  link_url?: string;
  cta_text?: string;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackAnalyticsEvent(
  eventName: AnalyticsEventName,
  params: AnalyticsParams,
) {
  if (typeof window === "undefined" || !window.gtag) {
    return;
  }

  window.gtag("event", eventName, {
    page_path: `${window.location.pathname}${window.location.search}`,
    ...params,
  });
}
