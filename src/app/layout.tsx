import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "A1 Automotive Ltd | UK & Ireland Vehicle Transport & Storage",
  description: "A leading supplier of vehicle transport and storage solutions in the UK. Operating a modern fleet of over 80 transporters with a 12-acre hub in Bathgate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
