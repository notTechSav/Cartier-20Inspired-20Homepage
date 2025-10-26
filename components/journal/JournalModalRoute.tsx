'use client';

import { useEffect, useRef } from "react";
import { useRouter, useParams, usePathname } from "next/navigation";
import JournalModal from "@/components/journal/JournalModal";
import { getEssayBySlug, getReadNextEssay, journalDisplay } from "@/lib/journal-content";

type LocationState = {
  backgroundLocation?: Location;
};

const JournalModalRoute = () => {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const scrollPositionRef = useRef(0);

  const slug = typeof params.slug === 'string' ? params.slug : params.slug?.[0];

  const essay = getEssayBySlug(slug);
  const nextEssay = getReadNextEssay(slug ?? undefined);

  useEffect(() => {
    if (!slug) {
      router.replace("/journal");
      return;
    }
    if (!essay) {
      router.replace("/journal");
    }
  }, [essay, router, slug]);

  useEffect(() => {
    if (!essay) {
      return;
    }
    if (typeof window === "undefined") {
      return;
    }

    const body = document.body;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const alreadyLocked = body.style.position === "fixed";

    if (!alreadyLocked) {
      scrollPositionRef.current = window.scrollY;
      body.style.position = "fixed";
      body.style.top = `-${scrollPositionRef.current}px`;
      body.style.width = "100%";
      if (scrollbarWidth > 0) {
        body.style.paddingRight = `${scrollbarWidth}px`;
      }
      body.classList.add("journal-modal-open");
    }

    return () => {
      const storedScroll = scrollPositionRef.current;
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
      body.style.paddingRight = "";
      body.classList.remove("journal-modal-open");
      window.scrollTo(0, storedScroll);
    };
  }, [Boolean(essay)]);

  const handleClose = () => {
    router.push("/journal");
  };

  useEffect(() => {
    if (!essay) return;
    const previousTitle = document.title;
    document.title = `${essay.title} — Katherine Taylor Escort`;
    return () => {
      document.title = previousTitle;
    };
  }, [essay]);

  const handleNavigateNext = (nextSlug: string) => {
    router.replace(`/journal/${nextSlug}`);
  };

  return (
    <JournalModal
      isOpen={Boolean(essay)}
      essay={essay}
      nextEssay={nextEssay}
      onClose={handleClose}
      onNavigateNext={handleNavigateNext}
      closeLabel={journalDisplay.closeLabel}
      readNextLabel={journalDisplay.readNextPrefix}
    />
  );
};

export default JournalModalRoute;
