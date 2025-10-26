import type { Metadata } from "next";
import Script from "next/script";
import SiteLayout from "@/components/site/SiteLayout";
import AboutClient from "@/components/pages/AboutClient";

export const metadata: Metadata = {
  title: "About Katherine Taylor | Sacramento Escort | Professional Escort Services",
  description:
    "Sacramento's trusted escort. Katherine Taylor offers professional, discreet escort services in Sacramento and San Francisco.",
  openGraph: {
    title: "Katherine Taylor | Sacramento Escort",
    description:
      "Professional escort services in Sacramento and California. Trusted, discreet, and elegant companionship.",
    url: "https://katherinetaylorescort.com",
    images: [
      {
        url: "https://katherinetaylorescort.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Katherine Taylor",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://katherinetaylorescort.com",
  },
};

export default function AboutPage() {
  return (
    <>
      <Script id="structured-data" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Katherine Taylor",
          url: "https://katherinetaylorescort.com",
          description:
            "Professional escort services in Sacramento and San Francisco. Discreet, elegant companionship.",
          image: "https://katherinetaylorescort.com/og-image.jpg",
          priceRange: "$$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1614 18th St",
            addressLocality: "Sacramento",
            addressRegion: "CA",
            postalCode: "95811",
            addressCountry: "US",
          },
          areaServed: [
            { "@type": "City", name: "Sacramento" },
            { "@type": "City", name: "San Francisco" },
          ],
          sameAs: [
            "https://instagram.com/katherineunscripted",
            "https://twitter.com/thekatherineexp",
          ],
        })}
      </Script>

      <SiteLayout>
        {/* AboutClient must be a Client Component */}
        <AboutClient />
      </SiteLayout>
    </>
  );
}

