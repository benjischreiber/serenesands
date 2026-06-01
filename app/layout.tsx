import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { absoluteUrl, siteName, siteUrl } from "@/lib/site";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Serene Holidays - Seaside Holiday Lets",
    template: `%s | ${siteName}`,
  },
  description:
    "Three beautifully appointed holiday lets on England's coast: Brighton, Felixstowe and Harwich. Book direct for the best rate.",
  applicationName: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName,
    url: absoluteUrl("/"),
    title: "Serene Holidays - Seaside Holiday Lets",
    description:
      "Three beautifully appointed holiday lets on England's coast: Brighton, Felixstowe and Harwich.",
    images: [
      {
        url: absoluteUrl("/images/hero.jpg"),
        width: 1200,
        height: 630,
        alt: "Serene Holidays seaside holiday lets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Serene Holidays - Seaside Holiday Lets",
    description:
      "Three beautifully appointed holiday lets on England's coast: Brighton, Felixstowe and Harwich.",
    images: [absoluteUrl("/images/hero.jpg")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
