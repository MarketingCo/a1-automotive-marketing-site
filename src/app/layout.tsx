import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://a1automotive.co.uk"),
  title: {
    default: "A1 Automotive Ltd | Vehicle Transport & Storage — UK & Ireland",
    template: "%s | A1 Automotive Ltd",
  },
  description:
    "A1 Automotive Ltd is the UK's leading supplier of vehicle transport and storage solutions. Operating a modern fleet of 80+ transporters with a 12-acre HMRC-bonded hub in Bathgate, Scotland.",
  keywords: [
    "vehicle transport UK",
    "car transporter UK",
    "vehicle storage Scotland",
    "PDI services UK",
    "defleet services",
    "automotive logistics UK",
    "FORS Gold transport",
    "Bathgate vehicle storage",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://a1automotive.co.uk",
    siteName: "A1 Automotive Ltd",
    title: "A1 Automotive Ltd | Vehicle Transport & Storage — UK & Ireland",
    description:
      "Operating a modern fleet of 80+ transporters with a 12-acre HMRC-bonded hub in Bathgate, Scotland. The UK's trusted partner for vehicle logistics.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "A1 Automotive Ltd — Vehicle Transport & Storage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A1 Automotive Ltd | Vehicle Transport & Storage",
    description:
      "80+ transporters, 12-acre hub, 27 years of reliability. The UK's leading automotive logistics partner.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://a1automotive.co.uk/#business",
  name: "A1 Automotive Ltd",
  description:
    "A1 Automotive Ltd is the UK's leading supplier of vehicle transport and storage solutions, operating a modern fleet of 80+ transporters from a 12-acre hub in Bathgate, Scotland.",
  url: "https://a1automotive.co.uk",
  telephone: "+441506631133",
  email: "info@a1automotive.co.uk",
  foundingDate: "1998",
  address: {
    "@type": "PostalAddress",
    streetAddress: "12 Blackburn Road",
    addressLocality: "Bathgate",
    addressRegion: "West Lothian",
    postalCode: "EH48 2EY",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 55.907,
    longitude: -3.645,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Automotive Logistics Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Vehicle Transport",
          description:
            "National UK & Ireland vehicle distribution for manufacturers and fleets.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Vehicle Storage",
          description:
            "12-acre high-security HMRC-bonded storage with 2,000+ unit capacity.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "PDI & Defleet",
          description:
            "Precision Pre-Delivery Inspection and end-of-lease fleet management.",
        },
      },
    ],
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="antialiased font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
