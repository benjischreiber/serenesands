import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";
import { absoluteUrl } from "@/lib/site";
import { localGuides } from "@/lib/seo-content";

const guide = localGuides.harwich;

export const metadata: Metadata = {
  title: "Harwich Guide - Historic Harbour, Quay and Maritime Walks",
  description: guide.description,
  alternates: {
    canonical: "/harwich-guide",
  },
  openGraph: {
    title: "Harwich Guide - Historic Harbour, Quay and Maritime Walks",
    description: guide.description,
    url: absoluteUrl("/harwich-guide"),
    images: [
      {
        url: absoluteUrl("/images/harwich/hero.jpg"),
        width: 1200,
        height: 630,
        alt: "Harwich Quay holiday apartment guide",
      },
    ],
  },
};

export default function HarwichGuidePage() {
  return <GuidePage guide={guide} />;
}
