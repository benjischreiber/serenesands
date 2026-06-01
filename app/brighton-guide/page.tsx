import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";
import { absoluteUrl } from "@/lib/site";
import { localGuides } from "@/lib/seo-content";

const guide = localGuides.brighton;

export const metadata: Metadata = {
  title: "Brighton Guide - Beach, The Lanes and City Break Ideas",
  description: guide.description,
  alternates: {
    canonical: "/brighton-guide",
  },
  openGraph: {
    title: "Brighton Guide - Beach, The Lanes and City Break Ideas",
    description: guide.description,
    url: absoluteUrl("/brighton-guide"),
    images: [
      {
        url: absoluteUrl("/images/brighton/hero.jpg"),
        width: 1200,
        height: 630,
        alt: "Central Brighton holiday apartment guide",
      },
    ],
  },
};

export default function BrightonGuidePage() {
  return <GuidePage guide={guide} />;
}
