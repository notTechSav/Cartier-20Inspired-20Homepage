import type { Metadata } from "next";
import SiteLayout from "@/components/site/SiteLayout";
import GiftsClient from "@/components/pages/GiftsClient";

export const metadata: Metadata = {
  title: "Gifts | Katherine Taylor",
  description: "Curated gifts and experiences for discerning tastes.",
};

export default function GiftsPage() {
  return (
    <SiteLayout>
      <GiftsClient />
    </SiteLayout>
  );
}
