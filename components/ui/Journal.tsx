"use client";

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import JournalFooter from "@/components/journal/JournalFooter";
import JournalGrid from "@/components/journal/JournalGrid";
import JournalHero from "@/components/journal/JournalHero";
import {
  essays,
  heroImage,
  journalDisplay,
  journalFooter,
  journalMetadata,
} from "@/lib/journal-content";
import {
  injectJsonLd,
  removeJsonLd,
  setLinkTag,
  setNamedMeta,
  setPropertyMeta,
} from "@/lib/seo-helpers";

const Journal = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const { title, description, keywords, openGraph } = journalMetadata;
    document.title = title;

    setNamedMeta("description", description);
    setNamedMeta("keywords", keywords);
    setNamedMeta("geo.region", "US-CA");
    setNamedMeta("geo.position", "37.7749;-122.4194");
    setNamedMeta("ICBM", "37.7749, -122.4194");

    const canonicalUrl =
      typeof window !== "undefined"
        ? `${window.location.origin}/journal`
        : "/journal";

    const heroImageUrl =
      typeof window !== "undefined"
        ? new URL(heroImage.src, window.location.origin).toString()
        : heroImage.src;

    setLinkTag("canonical", canonicalUrl);
    setPropertyMeta("og:type", "website");
    setPropertyMeta("og:title", openGraph.title);
    setPropertyMeta("og:description", openGraph.description);
    setPropertyMeta("og:url", canonicalUrl);
    setPropertyMeta("og:image", heroImageUrl);
    setPropertyMeta("og:image:alt", heroImage.alt);

    injectJsonLd("journal", {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: journalDisplay.pageTitle,
      description: openGraph.description,
      url: canonicalUrl,
      image: heroImageUrl,
      author: {
        "@type": "Person",
        name: "Katherine Taylor",
      },
      keywords: journalMetadata.keywords,
    });

    return () => {
      removeJsonLd("journal");
    };
  }, []);

  const handleOpen = (slug: string) => {
    navigate(`/journal/${slug}`, {
      state: { backgroundLocation: location },
    });
  };

  return (
    <div className="bg-luxury-white text-luxury-black">
      <JournalHero
        title={journalDisplay.pageTitle}
        subtitle={journalDisplay.subtitle}
        imageSrc={heroImage.src}
        imageAlt={heroImage.alt}
      />
      <JournalGrid
        entries={essays}
        microline={journalDisplay.microline}
        onOpen={handleOpen}
        ctaLabel={journalDisplay.ctaLabel}
      />
      <JournalFooter intro={journalFooter.intro} links={journalFooter.links} />
    </div>
  );
};

export default Journal;
