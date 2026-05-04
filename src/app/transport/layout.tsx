import { Metadata } from "next";

export const metadata: Metadata = {
  title: "National Vehicle Transport | A1 Automotive",
  description: "High-capacity vehicle distribution across the UK & Ireland. A1 Automotive operates an 80+ unit fleet with real-time GPS telematics for manufacturer trunking and fleet logistics.",
};

export default function TransportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
