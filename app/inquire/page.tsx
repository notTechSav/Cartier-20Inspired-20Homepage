import type { Metadata } from "next";
import SiteLayout from "@/components/site/SiteLayout";
import InquireClient from "@/components/pages/InquireClient";

export const metadata: Metadata = {
  title: "Inquire | Katherine Taylor",
  description: "Begin the conversation about partnership and engagement.",
};

export default function InquirePage() {
  return (
    <SiteLayout>
      <InquireClient />
    </SiteLayout>
  );
}
