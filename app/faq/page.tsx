import type { Metadata } from "next";
import SiteLayout from "@/components/site/SiteLayout";
import FAQClient from "@/components/pages/FAQClient";

export const metadata: Metadata = {
  title: "FAQ | Katherine Taylor",
  description: "Frequently asked questions about high-end private companionship.",
};

export default function FAQPage() {
  return (
    <SiteLayout>
      <FAQClient />
    </SiteLayout>
  );
}
