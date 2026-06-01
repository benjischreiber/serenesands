import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";
import { absoluteUrl } from "@/lib/site";
import { localGuides } from "@/lib/seo-content";

const guide = localGuides.felixstowe;

export const metadata: Metadata = {
  title: "Felixstowe Guide - Beaches, Promenade and Landguard",
  description: guide.description,
  alternates: {
    canonical: "/felixstowe-guide",
  },
  openGraph: {
    title: "Felixstowe Guide - Beaches, Promenade and Landguard",
    description: guide.description,
    url: absoluteUrl("/felixstowe-guide"),
    images: [
      {
        url: absoluteUrl("/images/felixstowe/hero.jpg"),
        width: 1200,
        height: 630,
        alt: "Felixstowe sea view from Serene Sands",
      },
    ],
  },
};

export default function FelixstoweGuidePage() {
  return <GuidePage guide={guide} />;
}
