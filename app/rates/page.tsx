import type { Metadata } from "next";
import SiteLayout from "@/components/site/SiteLayout";
import RatesClient from "@/components/pages/RatesClient";

export const metadata: Metadata = {
  title: "Rates | Katherine Taylor",
  description:
    "Investment structure and engagement options for high-level companionship.",
};

export default function RatesPage() {
  return (
    <SiteLayout>
      <RatesClient />
    </SiteLayout>
  );
}
