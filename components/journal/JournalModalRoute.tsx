'use client';

import { useEffect, useRef } from "react";
import { type Location, useLocation, useNavigate, useParams } from "react-router-dom";
import JournalModal from "@/components/journal/JournalModal";
import { getEssayBySlug, getReadNextEssay, journalDisplay } from "@/lib/journal-content";

type LocationState = {
  backgroundLocation?: Location;
};

const JournalModalRoute = () => {
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState | undefined;
  const scrollPositionRef = useRef(0);

  const essay = getEssayBySlug(slug);
  const nextEssay = getReadNextEssay(slug ?? undefined);

  useEffect(() => {
    if (!slug) {
      navigate("/journal", { replace: true });
      return;
    }
    if (!essay) {
      navigate("/journal", { replace: true });
    }
  }, [essay, navigate, slug]);

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
    if (state?.backgroundLocation) {
      navigate(-1);
    } else {
      navigate("/journal", { replace: true });
    }
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
    navigate(`/journal/${nextSlug}`, {
      replace: true,
      state: { backgroundLocation: state?.backgroundLocation ?? location },
    });
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
