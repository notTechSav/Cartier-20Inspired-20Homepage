import type { Metadata } from "next";
import SiteLayout from "@/components/site/SiteLayout";
import GalleryClient from "@/components/pages/GalleryClient";

export const metadata: Metadata = {
  title: "Gallery | Katherine Taylor",
  description: "Private collections from Northern California to Los Angeles.",
};

export default function GalleryPage() {
  return (
    <SiteLayout>
      <GalleryClient />
    </SiteLayout>
  );
}
