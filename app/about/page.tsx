import type { Metadata } from "next";
import SiteLayout from "@/components/site/SiteLayout";
import AboutClient from "@/components/pages/AboutClient";

export const metadata: Metadata = {
  title: "About Katherine Taylor",
  description:
    "The conversation never resets. I carry forward your context—professional, personal, and everything unsaid—so we move without rehearsal.",
  openGraph: {
    title: "About Katherine Taylor",
    description:
      "Strategic counsel and personal continuity for C-suite executives, IPO founders, and family-office principals.",
  },
};

export default function AboutPage() {
  return (
    <SiteLayout>
      <AboutClient />
    </SiteLayout>
  );
}
