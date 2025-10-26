import type { Metadata } from "next";
import SiteLayout from "@/components/site/SiteLayout";
import JournalClient from "@/components/pages/JournalClient";

export const metadata: Metadata = {
  title: "Journal | Katherine Taylor",
  description:
    "Insights, stories, and perspectives on companionship, luxury, and the art of connection.",
  openGraph: {
    title: "Journal | Katherine Taylor",
    description:
      "Insights, stories, and perspectives on companionship, luxury, and the art of connection.",
  },
};

export default function JournalPage() {
  return (
    <SiteLayout>
      <JournalClient />
    </SiteLayout>
  );
}
