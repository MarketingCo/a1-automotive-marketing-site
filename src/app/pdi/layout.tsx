import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PDI & Defleet Services | A1 Automotive",
  description: "Manufacturer-standard Pre-Delivery Inspection and end-of-lease defleet management. Rapid turnaround technical preparation from our Bathgate hub.",
};

export default function PDILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
