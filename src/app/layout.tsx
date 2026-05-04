import type { Metadata } from "next";
import { Space_Grotesk, Chivo } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import NetworkPartners from "@/components/NetworkPartners";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const chivo = Chivo({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.a1automotive.co.uk'),
  title: {
    template: "%s | A1 Automotive",
    default: "UK Vehicle Transport, Storage & PDI Services | A1 Automotive",
  },
  description: "Specialist vehicle transport, storage, and PDI services. Operating from a 12-acre HMRC-bonded hub in Bathgate, Scotland. National logistics for automotive fleets.",
  keywords: ["vehicle transport UK", "car transport Scotland", "vehicle storage Scotland", "HMRC bonded vehicle storage", "PDI services UK", "fleet logistics UK", "car transporter hire UK", "vehicle defleet services"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "UK Vehicle Transport, Storage & PDI Services | A1 Automotive",
    description: "Specialist vehicle logistics from our 12-acre HMRC-bonded hub in Bathgate, Scotland.",
    url: "/",
    siteName: "A1 Automotive",
    locale: "en_GB",
    type: "website",
    images: ["https://www.a1automotive.co.uk/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "UK Vehicle Transport & Storage | A1 Automotive",
    description: "Specialist vehicle logistics from our HMRC-bonded hub in Bathgate.",
    images: ["https://www.a1automotive.co.uk/og-image.jpg"],
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.a1automotive.co.uk",
  name: "A1 Automotive",
  description: "Specialist vehicle transport, storage, and PDI services operating from a 12-acre HMRC-bonded hub in Bathgate, Scotland.",
  url: "https://www.a1automotive.co.uk",
  logo: "https://www.a1automotive.co.uk/logo.png",
  telephone: "+441506000000",
  email: "info@a1automotive.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "12 Acre HMRC Bonded Hub",
    addressLocality: "Bathgate",
    addressRegion: "Scotland",
    postalCode: "EH48",
    addressCountry: "GB",
  },
  areaServed: ["Scotland", "England", "Wales", "Northern Ireland"],
  knowsAbout: ["Vehicle Transport", "Vehicle Storage", "PDI Services", "HMRC Bonded Storage", "Fleet Logistics"],
  sameAs: [],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.a1automotive.co.uk/bathgate",
  name: "A1 Automotive Bathgate Hub",
  description: "HMRC-bonded vehicle storage and PDI facility in Bathgate, Scotland.",
  url: "https://www.a1automotive.co.uk",
  telephone: "+441506000000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "12 Acre HMRC Bonded Hub",
    addressLocality: "Bathgate",
    addressRegion: "Scotland",
    postalCode: "EH48",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className="h-full">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      </head>
      <body className={`${spaceGrotesk.variable} ${chivo.variable} font-body antialiased`}>
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
          <NetworkPartners />
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
