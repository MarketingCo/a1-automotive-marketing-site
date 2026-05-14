import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | A1 Automotive",
  description: "Contact A1 Automotive for large-scale transport contracts, manufacturer storage solutions, and technical preparation requirements. Based in Bathgate, Scotland.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
