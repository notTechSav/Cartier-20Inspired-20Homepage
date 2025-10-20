import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";

import { cn } from "@/lib/utils";
import PageHeroOverlay from "@/components/site/PageHeroOverlay";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
  seoLinks: Array<{ text: string; url: string }>;
  featured: boolean;
};

const faqData: FaqItem[] = [
  {
    id: "what-is-escort",
    question: "What is an escort?",
    answer:
      "A refined companion. As Katherine Taylor escort, I offer cultured company—elegant, confidential, and beautifully timed—what discerning sf escorts aspire to.",
    seoLinks: [
      { text: "About Companionship", url: "/companion-services" },
      { text: "Etiquette Guide", url: "/escort-etiquette" },
    ],
    featured: true,
  },
  {
    id: "how-much-do-escorts-cost",
    question: "How much do escorts cost?",
    answer:
      "After over a decade as an escort in San Francisco, I've observed that rates vary significantly based on experience, location, and service quality. My current rates are transparently detailed on my rates page, reflecting the caliber of companionship I provide.",
    seoLinks: [
      { text: "View Rates", url: "/escort-rates-sf" },
      { text: "Premium Services", url: "/luxury-escort-services" },
    ],
    featured: true,
  },
  {
    id: "katherine-taylor-different",
    question: "What Sets Katherine Taylor Apart from Other Escorts Near Me?",
    answer:
      "Among San Francisco escorts and Bay Area escorts, I keep encounters bespoke: limited bookings, immaculate preparation, and chemistry that feels effortless.",
    seoLinks: [
      { text: "Exclusive Services", url: "/premium-escort-experience" },
      { text: "San Francisco Portfolio", url: "/sf-escort-gallery" },
    ],
    featured: true,
  },
  {
    id: "escorting-legal",
    question: "Is escorting legal?",
    answer:
      "Yes and no; when meeting San Francisco escorts, Sacramento escorts, or Bay Area escorts, try to keep to etiquette and the law tends favor you for being respectful.",
    seoLinks: [
      { text: "Legal Information", url: "/escort-laws-california" },
      { text: "Safety Guidelines", url: "/escort-safety-tips" },
    ],
    featured: false,
  },
  {
    id: "how-to-find-escort",
    question: "How to find an escort?",
    answer:
      "Introduce yourself with date, time, and city—San Francisco, Sacramento, or elsewhere in the Bay Area. My escort rates in San Francisco are shared upon confirmation—clear, tasteful, and simple.",
    seoLinks: [
      { text: "Booking Process", url: "/how-to-book" },
      { text: "Contact Guidelines", url: "/escort-contact-etiquette" },
    ],
    featured: false,
  },
  {
    id: "are-escorts-safe",
    question: "Are escorts safe?",
    answer:
      "Safety in escorting depends on thorough screening, clear communication, and professional boundaries. In my decade-plus experience, I maintain strict screening protocols and always prioritize mutual safety and respect.",
    seoLinks: [
      { text: "Safety Protocols", url: "/escort-safety-screening" },
      { text: "Professional Standards", url: "/escort-safety-guidelines" },
    ],
    featured: false,
  },
  {
    id: "escorts-near-me",
    question:
      'What if you\'re nowhere near me when I search "escorts near me"?',
    answer:
      "I tour and host across the Bay Area—most often as a San Francisco escort—and I indulge in being one of the Sacramento escorts. Fly-me-to-you is available; distance is merely an invitation.",
    seoLinks: [
      { text: "Bay Area Services", url: "/bay-area-escort-services" },
      { text: "Travel Arrangements", url: "/escort-travel-booking" },
    ],
    featured: false,
  },
];

const featuredFaqs = faqData.filter((item) => item.featured);
const hiddenFaqs = faqData.filter((item) => !item.featured);

const FAQ_HERO_IMAGE = {
  src: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2F4161d5d2b2b34093861f89a5d37e6c34?format=webp&width=1200",
  alt: "Clear glass vase with olive branch beside sealed envelope in warm afternoon light",
};

const FAQSectionLuxury = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [showHidden, setShowHidden] = useState(false);
  const faqRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const structuredData = useMemo(() => {
    const entities = [...featuredFaqs, ...hiddenFaqs].map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    }));

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: entities,
    };
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [structuredData]);

  const handleToggle = (id: string) => {
    const nextOpen = openFaq === id ? null : id;
    setOpenFaq(nextOpen);

    if (nextOpen) {
      const element = faqRefs.current[nextOpen];
      if (element) {
        window.setTimeout(() => {
          element.focus();
        }, 120);
      }
    }
  };

  const FAQItem = ({ item, isOpen }: { item: FaqItem; isOpen: boolean }) => (
    <article
      id={item.id}
      className="group overflow-hidden border border-gray-200 bg-luxury-white transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-luxury-sm"
    >
      <button
        onClick={() => handleToggle(item.id)}
        className="flex w-full items-center justify-between px-6 py-6 text-left transition-all duration-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 md:px-8 md:py-8"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
        ref={(el) => {
          faqRefs.current[item.id] = el;
        }}
      >
        <h3 className="pr-4 text-lg font-light tracking-luxury text-luxury-black transition-colors duration-300 group-hover:text-gray-600 md:text-xl">
          {item.question}
        </h3>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-gray-400 transition-all duration-300 md:h-6 md:w-6",
            isOpen ? "rotate-180 scale-110" : "group-hover:scale-110",
          )}
        />
      </button>

      <div
        id={`faq-answer-${item.id}`}
        className={cn(
          "transition-all duration-500 ease-out overflow-hidden",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="px-6 pb-6 md:px-8 md:pb-8">
          <div className="mb-4 h-px w-16 bg-gradient-to-r from-gray-300 to-transparent md:mb-6" />

          <p className="mb-4 max-w-[65ch] text-base font-light leading-[1.8] tracking-[0.01em] text-gray-700 md:mb-6 md:text-lg">
            {item.answer}
          </p>

          <div className="flex flex-wrap gap-3">
            {item.seoLinks.map((link, linkIndex) => (
              <a
                key={linkIndex}
                href={link.url}
                className="group inline-flex items-center gap-2 bg-gray-100 px-4 py-2.5 text-xs font-medium tracking-[0.08em] text-gray-800 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-200 hover:text-luxury-black hover:shadow-[0_2px_4px_rgba(0,0,0,0.1)] md:px-6 md:py-3 md:text-sm"
              >
                <span>{link.text}</span>
                <ExternalLink className="w-3 h-3 md:w-4 md:h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );

  return (
    <div className="bg-luxury-white" id="faq">
      <PageHeroOverlay
        title="Frequently Asked Questions"
        subtitle="After more than a decade in this practice, I answer what quick searches never cover—standards, discretion, and how engagements actually unfold."
        eyebrow="Insights & Guidance"
        imageSrc={FAQ_HERO_IMAGE.src}
        imageAlt={FAQ_HERO_IMAGE.alt}
        alignment="left"
      />

      <section className="relative bg-luxury-white py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <div className="mb-16 text-center md:mb-20">
            <h2 className="mb-6 font-serif text-4xl font-extralight tracking-display text-luxury-black md:text-5xl">
              FAQ
            </h2>
            <p className="mx-auto max-w-3xl text-lg font-light leading-[1.8] tracking-[0.02em] text-gray-600 md:text-xl">
              What is an escort? How much do escorts cost? After over a decade
              in San Francisco, Katherine Taylor escorts You, If You Will,
              Through Escort Culture as your personal tour guide through San
              Francisco, Sacramento, and the Bay Area.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Featured FAQs (always visible) */}
            <div className="space-y-4 mb-6">
              {featuredFaqs.map((item) => (
                <FAQItem
                  key={item.id}
                  item={item}
                  isOpen={openFaq === item.id}
                />
              ))}
            </div>

            {/* Hidden FAQs (expandable) */}
            <div
              className={cn(
                "space-y-4 transition-all duration-700 ease-in-out overflow-hidden",
                showHidden ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0",
              )}
            >
              {hiddenFaqs.map((item) => (
                <FAQItem
                  key={item.id}
                  item={item}
                  isOpen={openFaq === item.id}
                />
              ))}
            </div>

            {/* Show More/Less Toggle */}
            <div className="text-center mt-8">
              <button
                onClick={() => setShowHidden((prev) => !prev)}
                className="group inline-flex items-center gap-3 border border-gray-300 px-8 py-4 text-sm font-medium tracking-[0.1em] text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-400 hover:text-luxury-black hover:shadow-[0_4px_8px_rgba(0,0,0,0.08)]"
                aria-expanded={showHidden}
              >
                <span>{showHidden ? "SHOW FEWER" : "STEP FURTHER"}</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-all duration-300",
                    showHidden && "rotate-180",
                  )}
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQSectionLuxury;
