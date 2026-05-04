import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | A1 Automotive",
  description: "Join the A1 Automotive team. We are actively recruiting Class 1 HGV drivers for national operations. Competitive rates, modern fleet, and elite training.",
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
