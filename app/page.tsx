import type { Metadata } from "next";
import SiteLayout from "@/components/site/SiteLayout";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: "Katherine Taylor | High-End Private Companionship",
  description:
    "High-end private companionship in San Francisco. Quiet authority, intentional scarcity, refined experiences.",
  openGraph: {
    title: "Katherine Taylor | High-End Private Companionship",
    description:
      "High-end private companionship in San Francisco. Quiet authority, intentional scarcity, refined experiences.",
  },
};

export default function Home() {
  return (
    <SiteLayout>
      <HomePage />
    </SiteLayout>
  );
}
