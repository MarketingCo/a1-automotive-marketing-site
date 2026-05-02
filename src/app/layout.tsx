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
  title: "A1 Automotive | National Logistics & HMRC Bonded Hub",
  description: "Specialist vehicle transport, storage, and PDI services. Operating from a 12-acre HMRC-bonded hub in Bathgate, Scotland.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
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
