import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HMRC Bonded Vehicle Storage | A1 Automotive",
  description: "Strategic vehicle inventory management in Central Scotland. 12-acre secure compound with HMRC bonded storage, 24/7 monitored security, and in-house PDI suites.",
};

export default function StorageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
