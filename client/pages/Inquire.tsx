"use client";

import { useEffect } from "react";

import PageHeroOverlay from "@/components/site/PageHeroOverlay";

const INQUIRE_HERO_IMAGE = {
  src: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2F3421a1dc239145b8a286313100a81833?format=webp&width=1200",
  alt: "White ranunculus in glass bud vase with satin ribbon on linen table",
};

const Inquire = () => {
  useEffect(() => {
    document.title =
      "Inquire | Katherine Taylor Escort - San Francisco & Sacramento";
  }, []);

  return (
    <div className="bg-luxury-white text-luxury-black">
      <PageHeroOverlay
        title="Inquire"
        subtitle="I keep a limited calendar—typically three to four engagements each month—so every meeting receives the preparation it deserves."
        eyebrow="Connect with Katherine Taylor"
        imageSrc={INQUIRE_HERO_IMAGE.src}
        imageAlt={INQUIRE_HERO_IMAGE.alt}
        alignment="right"
      />

      {/* Content Section */}
      <section className="bg-luxury-white px-6 pb-24 pt-8 text-luxury-black sm:px-10">
        <div className="mx-auto max-w-[680px] space-y-16">
          {/* Introduction */}
          <div className="space-y-6">
            <p className="text-[16px] font-light leading-[1.75] text-gray-600">
              If you're seeking a San Francisco or Sacramento engagement that
              values depth over volume, this is where we begin. The more context
              you share, the better I can prepare.
            </p>
          </div>

          {/* Contact Information */}
          <article className="border-t border-gray-200 pt-10">
            <header className="mb-6">
              <h2
                className="text-[28px] font-extralight leading-[1.25] tracking-[-0.02em] text-luxury-black"
                style={{ fontWeight: 200 }}
              >
                How to Reach Me
              </h2>
            </header>

            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-[14px] font-light uppercase tracking-[0.1em] text-gray-500">
                  Email
                </h3>
                <a
                  href="mailto:inquiries@katherinetaylor.com"
                  className="text-[18px] font-light text-luxury-black underline-offset-[4px] transition-colors duration-300 hover:text-gray-600 hover:underline"
                >
                  inquiries@katherinetaylor.com
                </a>
              </div>

              <div>
                <h3 className="mb-2 text-[14px] font-light uppercase tracking-[0.1em] text-gray-500">
                  When You Write
                </h3>
                <p className="text-[16px] font-light leading-[1.75] text-gray-600">
                  Include your name, date, time, duration, and city (San
                  Francisco, Sacramento, or elsewhere in the Bay Area).
                  Screening is required—references from established escorts near
                  me or professional LinkedIn verification.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-[14px] font-light uppercase tracking-[0.1em] text-gray-500">
                  Response Time
                </h3>
                <p className="text-[16px] font-light leading-[1.75] text-gray-600">
                  I respond within 24-48 hours. Last-minute requests rarely work
                  with my calendar, but advance planning—ideally a week or
                  more—ensures we can create something memorable.
                </p>
              </div>
            </div>
          </article>

          {/* Screening & Expectations */}
          <article className="border-t border-gray-200 pt-10">
            <header className="mb-6">
              <h2
                className="text-[28px] font-extralight leading-[1.25] tracking-[-0.02em] text-luxury-black"
                style={{ fontWeight: 200 }}
              >
                What to Expect
              </h2>
            </header>

            <div className="space-y-4">
              <p className="text-[16px] font-light leading-[1.75] text-gray-600">
                Among San Francisco escorts and Bay Area escorts, I maintain
                thorough screening protocols. This protects both of us and
                ensures mutual respect from first contact.
              </p>
              <p className="text-[16px] font-light leading-[1.75] text-gray-600">
                Once confirmed, I'll share details about our
                appointment—location recommendations if hosting, preparation
                suggestions, and any questions you might have. Discretion is
                default, never negotiable.
              </p>
            </div>
          </article>

          {/* Note */}
          <div className="rounded border border-gray-200 bg-luxury-gray-50 p-6 sm:p-8">
            <p className="text-[14px] font-light italic leading-[1.7] text-gray-500">
              For those searching "escorts near me" or seeking "San Francisco
              escorts" with substance: this page exists to begin conversations
              that lead somewhere meaningful. Not every inquiry becomes a
              booking, and that's by design.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-luxury-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-[620px] space-y-4 text-left">
          <p className="text-[14px] font-light leading-[1.7] text-gray-600">
            Questions about process, rates, or availability? Most answers live
            in the FAQ or on my rates page.
          </p>
          <nav className="flex flex-wrap gap-3 text-[14px] font-light text-luxury-black">
            <a
              href="/faq"
              className="underline-offset-[4px] transition-colors duration-300 hover:text-gray-600 hover:underline"
            >
              FAQ
            </a>
            <a
              href="/rates"
              className="underline-offset-[4px] transition-colors duration-300 hover:text-gray-600 hover:underline"
            >
              Rates & Registry
            </a>
            <a
              href="/about"
              className="underline-offset-[4px] transition-colors duration-300 hover:text-gray-600 hover:underline"
            >
              About
            </a>
            <a
              href="/journal"
              className="underline-offset-[4px] transition-colors duration-300 hover:text-gray-600 hover:underline"
            >
              The High-End Edition
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Inquire;
