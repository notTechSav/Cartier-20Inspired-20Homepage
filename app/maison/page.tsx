import type { Metadata } from "next";
import SiteLayout from "@/components/site/SiteLayout";
import MaisonClient from "@/components/pages/MaisonClient";

export const metadata: Metadata = {
  title: "Maison | Katherine Taylor",
  description: "Private residences and preferred locations.",
};

export default function MaisonPage() {
  return (
    <SiteLayout>
      <MaisonClient />
    </SiteLayout>
  );
}
