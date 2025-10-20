import { useEffect, useMemo, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import PageHeroOverlay from "@/components/site/PageHeroOverlay";
import { Button } from "@/components/ui/button";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

const featuredFaqs: FaqItem[] = [
  {
    id: "what-is-escort",
    question: "What is an escort?",
    answer:
      "Having worked as an escort for over a decade, I can tell you it's refined companionship at its finest. As Katherine Taylor escort, I offer what the best SF escorts aspire to—cultured company that's elegant, confidential, and beautifully timed. Unlike what you might find searching 'escorts near me,' this is bespoke connection.",
  },
  {
    id: "how-much-do-escorts-cost",
    question: "How much do escorts cost?",
    answer:
      "After over a decade as a San Francisco escort, I've seen rates vary wildly—from $400 to $5000+ per hour. My rates begin at $2000 hourly, reflecting the caliber of experience you won't find in typical 'escort near me' searches. This investment ensures exclusive attention, impeccable preparation, and the refined companionship that distinguishes premium SF escorts.",
  },
  {
    id: "katherine-taylor-different",
    question: "What sets Katherine Taylor apart from other escorts near me?",
    answer:
      "In my decade-plus among San Francisco escorts and Bay Area escorts, I've cultivated something rare: truly bespoke encounters. While others juggle volume, I accept only 3-4 bookings monthly. Whether you're searching 'SF escort' or 'Sacramento escorts,' you'll find I'm the outlier—immaculate preparation, genuine chemistry, and experiences that transcend transaction.",
  },
];

const hiddenFaqs: FaqItem[] = [
  {
    id: "escort-vs-prostitute",
    question: "What is the difference between an escort and a prostitute?",
    answer:
      "After over a decade as an escort in San Francisco, I can clarify: escorts provide companionship services—attending events, dinners, cultural activities, offering sophisticated conversation. The distinction matters. When you search 'San Francisco escorts' or 'Bay Area escorts,' you're seeking social companionship, not transactional encounters. The focus remains on genuine connection.",
  },
  {
    id: "escorting-legal",
    question: "Is escorting legal in San Francisco and Sacramento?",
    answer:
      "Yes, with nuance. In my years as both a San Francisco escort and among Sacramento escorts, I've learned that companionship services operate legally when focused on social accompaniment. Whether you're searching 'SF escorts' or 'Sacramento escorts,' professional boundaries and mutual respect keep everything above board. Bay Area escorts who maintain these standards thrive.",
  },
  {
    id: "what-do-escorts-do",
    question: "What do escorts do?",
    answer:
      "Having spent over a decade as Katherine Taylor escort, I provide sophisticated companionship that goes beyond what most 'escorts near me' searches yield. From tech galas in SF to wine country retreats, I offer genuine connection, cultural fluency, and social ease. This isn't what you'll find from typical San Francisco escorts—it's carefully curated experience.",
  },
  {
    id: "are-escorts-safe",
    question: "Are escorts safe?",
    answer:
      "In my decade-plus as an SF escort, safety has been paramount. Unlike random 'escort near me' encounters, established San Francisco escorts maintain thorough screening, clear boundaries, and mutual respect. My process, refined over years among Bay Area escorts, ensures both parties feel secure and valued.",
  },
  {
    id: "escorts-near-me-travel",
    question: "What if I'm searching 'escorts near me' but you're not nearby?",
    answer:
      "I split my time as both a San Francisco escort and among Sacramento escorts, but distance is merely logistics. Whether you're searching 'SF escort,' 'Bay Area escorts,' or need me elsewhere entirely, fly-me-to-you arrangements are welcome. After a decade of travel companionship, I've perfected the art of arrival.",
  },
];

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
    <div className="border-t border-gray-200">
      <button
        onClick={() => handleToggle(item.id)}
        className="group flex w-full items-start justify-between py-8 transition-all duration-250 ease-out focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 md:py-10"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
        ref={(el) => {
          faqRefs.current[item.id] = el;
        }}
      >
        <h3 className="pr-8 text-left text-base font-light tracking-luxury text-luxury-black transition-colors duration-250 ease-out group-hover:text-gray-600">
          {item.question}
        </h3>
        <div className="mt-1">
          <span
            aria-hidden="true"
            className={cn(
              "inline-block text-base leading-none text-gray-400 transition-colors duration-250 ease-out",
              isOpen && "text-gray-600",
            )}
          >
            {isOpen ? "–" : "+"}
          </span>
        </div>
      </button>

      <div
        id={`faq-answer-${item.id}`}
        className={`overflow-hidden transition-all duration-400 ease-out ${
          isOpen ? "max-h-96 pb-8" : "max-h-0"
        }`}
      >
        <div className="pr-6 md:pr-24 max-md:pr-6">
          <p className="max-w-[65ch] text-base font-light leading-relaxed tracking-luxury text-gray-600">
            {item.answer}
          </p>

          <div className="mt-6">
            <a
              href="/booking"
              className="inline-flex items-center text-xs font-light uppercase tracking-uppercase text-gray-800 underline underline-offset-4 transition-opacity duration-250 ease-out hover:opacity-70"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-luxury-white">
      <PageHeroOverlay
        title="Frequently Asked Questions"
        subtitle="After more than a decade in this practice, I answer what quick searches never cover—standards, discretion, and how engagements actually unfold."
        eyebrow="Insights & Guidance"
        imageSrc={FAQ_HERO_IMAGE.src}
        imageAlt={FAQ_HERO_IMAGE.alt}
        alignment="left"
      />

      <section
        className="relative bg-luxury-white py-16 md:py-32 lg:py-40 max-md:py-16"
        aria-label="Frequently asked questions about escort services and engagement details"
      >
        <div className="mx-auto max-w-luxury px-6 md:px-12 max-md:px-6">
          <div className="mx-auto mb-16 max-w-[65ch] text-center text-base font-light leading-relaxed tracking-luxury text-gray-600 md:mb-24 max-md:mb-12">
            The following answers distill the questions I receive most often
            from clients balancing public visibility with private lives.
          </div>

          <div className="mx-auto max-w-4xl">
            <div role="region" aria-label="FAQ items list">
              {featuredFaqs.map((item) => (
                <FAQItem
                  key={item.id}
                  item={item}
                  isOpen={openFaq === item.id}
                />
              ))}

              {showHidden &&
                hiddenFaqs.map((item) => (
                  <FAQItem
                    key={item.id}
                    item={item}
                    isOpen={openFaq === item.id}
                  />
                ))}

              <div className="border-t border-gray-200" />
            </div>

            <div className="mt-12 text-center">
              <Button
                variant="ctaSecondary"
                type="button"
                onClick={() => setShowHidden((prev) => !prev)}
                aria-expanded={showHidden}
                className="max-md:w-full md:w-auto"
              >
                {showHidden ? "Show Less" : "View All Questions"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQSectionLuxury;
