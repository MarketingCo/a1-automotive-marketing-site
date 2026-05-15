import type { Metadata } from "next";
import { Space_Grotesk, Chivo } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import CookieBanner from "@/components/CookieBanner";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const chivo = Chivo({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://a1automotive.co.uk'),
  title: {
    template: "%s | A1 Automotive",
    default: "UK Vehicle Transport, Storage & PDI Services | A1 Automotive Bathgate",
  },
  description: "Professional UK vehicle transport, secure HMRC bonded vehicle storage, PDI services, defleet management and fleet logistics. Operating from our 12-acre hub in Bathgate, Scotland since 1998. Serving manufacturers, leasing companies and fleet operators nationwide.",
  keywords: ["vehicle transport UK", "car transport Scotland", "vehicle storage Scotland", "HMRC bonded vehicle storage", "PDI services UK", "fleet logistics UK", "car transporter hire UK", "vehicle defleet services", "vehicle logistics UK", "car storage Bathgate", "automotive transport Scotland"],
  alternates: { canonical: "https://a1automotive.co.uk/" },
  openGraph: {
    title: "UK Vehicle Transport, Storage & PDI Services | A1 Automotive Bathgate",
    description: "Professional UK vehicle transport, secure HMRC bonded vehicle storage, PDI services, defleet management and fleet logistics from our 12-acre hub in Bathgate, Scotland.",
    url: "https://a1automotive.co.uk/",
    siteName: "A1 Automotive",
    locale: "en_GB",
    type: "website",
    images: ["https://a1automotive.co.uk/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "UK Vehicle Transport, Storage & PDI Services | A1 Automotive Bathgate",
    description: "Professional UK vehicle transport, secure HMRC bonded vehicle storage, PDI services, defleet management and fleet logistics from our 12-acre hub in Bathgate, Scotland.",
    images: ["https://a1-automotive-marketing-site.vercel.app/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const offerCatalog = {
  "@type": "OfferCatalog",
  name: "Vehicle Logistics Services",
  itemListElement: [
    { "@type": "ListItem", position: 1, item: { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vehicle Transport" } } },
    { "@type": "ListItem", position: 2, item: { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vehicle Storage" } } },
    { "@type": "ListItem", position: 3, item: { "@type": "Offer", itemOffered: { "@type": "Service", name: "PDI Services" } } },
    { "@type": "ListItem", position: 4, item: { "@type": "Offer", itemOffered: { "@type": "Service", name: "Defleet Services" } } },
    { "@type": "ListItem", position: 5, item: { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fleet Logistics" } } },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://a1automotive.co.uk",
  name: "A1 Automotive",
  description: "Professional UK vehicle transport, secure HMRC bonded vehicle storage, PDI services, defleet management and fleet logistics. Operating from our 12-acre hub in Bathgate, Scotland since 1998.",
  url: "https://a1automotive.co.uk",
  logo: "https://a1automotive.co.uk/logo.png",
  telephone: "+441506631133",
  email: "info@a1automotive.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "12 Blackburn Road",
    addressLocality: "Bathgate",
    addressRegion: "Scotland",
    postalCode: "EH48 2EY",
    addressCountry: "GB",
  },
  areaServed: ["Scotland", "England", "Wales", "Northern Ireland"],
  knowsAbout: ["Vehicle Transport", "Vehicle Storage", "PDI Services", "HMRC Bonded Storage", "Fleet Logistics", "Defleet Services"],
  hasOfferCatalog: offerCatalog,
  paymentAccepted: "Cash, Credit Card, Invoice, BACS",
  currenciesAccepted: "GBP",
  sameAs: [],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://a1-automotive-marketing-site.vercel.app/bathgate",
  name: "A1 Automotive Bathgate Hub",
  description: "HMRC-bonded vehicle storage and PDI facility in Bathgate, Scotland.",
  url: "https://a1-automotive-marketing-site.vercel.app",
  telephone: "+441506631133",
  address: {
    "@type": "PostalAddress",
    streetAddress: "12 Blackburn Road",
    addressLocality: "Bathgate",
    addressRegion: "Scotland",
    postalCode: "EH48 2EY",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 55.9024,
    longitude: -3.6431,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "14:00" },
  ],
  hasOfferCatalog: offerCatalog,
  paymentAccepted: "Cash, Credit Card, Invoice, BACS",
  currenciesAccepted: "GBP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className="h-full">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      </head>
      <body className={`${spaceGrotesk.variable} ${chivo.variable} font-body antialiased`}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
