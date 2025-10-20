"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import PageHeroOverlay from "@/components/site/PageHeroOverlay";

const heroImage = {
  src: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2Fff453c7ff48442fc8efd2f475a954ade?format=webp&width=800",
  alt: "Warm afternoon light casting shadows over a solitary wooden knight chess piece on linen",
};

const RatesPage = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="bg-luxury-white text-luxury-black">
      <PageHeroOverlay
        title="Rates"
        subtitle="Every figure on this page exists to protect one idea: you never have to explain yourself twice."
        eyebrow="Rate Structure"
        imageSrc={heroImage.src}
        imageAlt={heroImage.alt}
        alignment="left"
      />

      <section className="bg-luxury-white">
        <div className="container mx-auto px-6 pb-20 pt-16 md:px-8 md:pt-20">
          <div className="mx-auto max-w-2xl space-y-6 text-center">
            <p className="text-base font-light leading-[1.85] tracking-[0.01em] text-gray-700 md:text-lg">
              My work is cumulative, not transactional. Each engagement carries
              forward the full history of your context—professional, personal,
              logistical—so nothing resets.
            </p>
            <p className="text-base font-light leading-[1.85] tracking-[0.01em] text-gray-700 md:text-lg">
              The premium reflects continuity, discretion, and the scarcity
              discipline required to deliver them without compromise.
            </p>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => setIsRevealed(!isRevealed)}
              className="group inline-flex items-center gap-3 border border-gray-300 px-8 py-4 text-sm font-medium tracking-[0.1em] text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-400 hover:text-luxury-black hover:shadow-[0_4px_8px_rgba(0,0,0,0.08)]"
              style={{ fontWeight: 300 }}
            >
              <span>
                {isRevealed ? "CONCEAL STRUCTURE" : "SHOW CURRENT STRUCTURE"}
              </span>
              <ChevronDown
                className={`h-4 w-4 transition-all duration-300 ${isRevealed ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        </div>
      </section>

      {/* Expandable Rates Content */}
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isRevealed ? "max-h-[20000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {/* Tier One */}
        <section className="border-t border-gray-200 py-16 md:py-20 bg-luxury-white">
          <div className="container mx-auto px-6 md:px-8 max-w-2xl">
            <p
              className="mb-3 text-xs font-light uppercase tracking-[0.12em] text-gray-500"
              style={{ fontWeight: 200 }}
            >
              TIER ONE
            </p>
            <h2
              className="mb-4 text-3xl md:text-4xl font-extralight tracking-[-0.02em] text-luxury-black"
              style={{ fontWeight: 200 }}
            >
              New Clients
            </h2>
            <p className="text-sm font-light italic text-gray-600 mb-8">
              For first meetings and compatibility evaluations.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-baseline justify-between border-b border-gray-200 pb-3">
                <span className="text-base font-light text-gray-700">
                  Overnight (up to 14 hours)
                </span>
                <span className="text-lg font-light text-luxury-black">
                  $25,000
                </span>
              </div>
              <div className="flex items-baseline justify-between border-b border-gray-200 pb-3">
                <span className="text-base font-light text-gray-700">
                  24 Hours
                </span>
                <span className="text-lg font-light text-luxury-black">
                  $45,000
                </span>
              </div>
              <div className="flex items-baseline justify-between border-b border-gray-200 pb-3">
                <span className="text-base font-light text-gray-700">
                  48 Hours
                </span>
                <span className="text-lg font-light text-luxury-black">
                  $75,000
                </span>
              </div>
            </div>

            <p className="text-base font-light leading-[1.8] text-gray-700 mb-4">
              At this stage, I'm mapping how you think—your cadence, your
              thresholds, the specific decisions that keep you awake. These
              hours are as much reconnaissance as experience.
            </p>
            <p className="text-sm font-light italic text-gray-600">
              New partnerships open twice per quarter and are limited to a small
              number of invitations.
            </p>
          </div>
        </section>

        {/* Tier Two */}
        <section className="border-t border-gray-200 py-16 md:py-20 bg-luxury-gray-50">
          <div className="container mx-auto px-6 md:px-8 max-w-2xl">
            <p
              className="mb-3 text-xs font-light uppercase tracking-[0.12em] text-gray-500"
              style={{ fontWeight: 200 }}
            >
              TIER TWO
            </p>
            <h2
              className="mb-4 text-3xl md:text-4xl font-extralight tracking-[-0.02em] text-luxury-black"
              style={{ fontWeight: 200 }}
            >
              Established Clients
            </h2>
            <p className="text-sm font-light italic text-gray-600 mb-8">
              For clients with at least four engagements or six months of
              continuity.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-baseline justify-between border-b border-gray-200 pb-3">
                <span className="text-base font-light text-gray-700">
                  Overnight (up to 14 hours)
                </span>
                <span className="text-lg font-light text-luxury-black">
                  $28,000
                </span>
              </div>
              <div className="flex items-baseline justify-between border-b border-gray-200 pb-3">
                <span className="text-base font-light text-gray-700">
                  24 Hours
                </span>
                <span className="text-lg font-light text-luxury-black">
                  $50,000
                </span>
              </div>
              <div className="flex items-baseline justify-between border-b border-gray-200 pb-3">
                <span className="text-base font-light text-gray-700">
                  48 Hours
                </span>
                <span className="text-lg font-light text-luxury-black">
                  $80,000
                </span>
              </div>
            </div>

            <p className="text-base font-light leading-[1.8] text-gray-700">
              By now, context is embedded. I arrive briefed on your current
              landscape. You no longer waste time reintroducing yourself. The
              conversation starts where the last one ended.
            </p>
          </div>
        </section>

        {/* Tier Three */}
        <section className="border-t border-gray-200 py-16 md:py-20 bg-luxury-white">
          <div className="container mx-auto px-6 md:px-8 max-w-2xl">
            <p
              className="mb-3 text-xs font-light uppercase tracking-[0.12em] text-gray-500"
              style={{ fontWeight: 200 }}
            >
              TIER THREE
            </p>
            <h2
              className="mb-4 text-3xl md:text-4xl font-extralight tracking-[-0.02em] text-luxury-black"
              style={{ fontWeight: 200 }}
            >
              Strategic Partnerships
            </h2>
            <p className="text-sm font-light italic text-gray-600 mb-8">
              Annual Retainer
            </p>

            <div className="mb-8 border-b border-gray-300 pb-6">
              <p className="text-2xl font-light text-luxury-black">
                $240,000{" "}
                <span className="text-base text-gray-600">annually</span>
              </p>
            </div>

            <p className="mb-4 text-sm font-light uppercase tracking-[0.08em] text-gray-600">
              INCLUDES
            </p>
            <ul className="space-y-3 text-base font-light leading-[1.8] text-gray-700 mb-8">
              <li className="border-l-2 border-gray-300 pl-4">
                Four 48-hour engagements annually (priority scheduling)
              </li>
              <li className="border-l-2 border-gray-300 pl-4">
                Unlimited strategic dialogue between meetings
              </li>
              <li className="border-l-2 border-gray-300 pl-4">
                Anticipatory preparation for each engagement
              </li>
              <li className="border-l-2 border-gray-300 pl-4">
                Discretionary outreach when developments arise
              </li>
            </ul>

            <p className="text-base font-light leading-[1.8] text-gray-700">
              This tier formalizes what many of my long-term clients already
              practice. I maintain no more than twenty active partnerships at a
              time.
            </p>
          </div>
        </section>

        {/* Travel */}
        <section className="border-t border-gray-200 py-16 md:py-20 bg-luxury-gray-50">
          <div className="container mx-auto px-6 md:px-8 max-w-2xl">
            <h2
              className="mb-8 text-3xl md:text-4xl font-extralight tracking-[-0.02em] text-luxury-black"
              style={{ fontWeight: 200 }}
            >
              Travel
            </h2>

            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <p className="mb-2 text-base font-light text-luxury-black">
                  Bay Area / Northern California
                </p>
                <p className="text-sm font-light text-gray-600">No fee.</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <p className="mb-2 text-base font-light text-luxury-black">
                  West Coast
                </p>
                <p className="text-sm font-light text-gray-700">
                  Overnight $28,000 / 24 hours $50,000 + first-class travel
                </p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <p className="mb-2 text-base font-light text-luxury-black">
                  National
                </p>
                <p className="text-sm font-light text-gray-700">
                  24 hours $55,000 / 48 hours $80,000 + first-class travel
                </p>
              </div>
              <div className="pb-4">
                <p className="mb-2 text-base font-light text-luxury-black">
                  International
                </p>
                <p className="text-sm font-light text-gray-600">
                  By arrangement.
                </p>
              </div>
            </div>

            <p className="mt-8 text-sm font-light italic text-gray-700">
              Discretion is embedded, not billed.
            </p>
          </div>
        </section>

        {/* Payment */}
        <section className="border-t border-gray-200 py-16 md:py-20 bg-luxury-white">
          <div className="container mx-auto px-6 md:px-8 max-w-2xl">
            <h2
              className="mb-8 text-3xl md:text-4xl font-extralight tracking-[-0.02em] text-luxury-black"
              style={{ fontWeight: 200 }}
            >
              Payment
            </h2>

            <div className="space-y-4">
              <p className="text-base font-light leading-[1.8] text-gray-700">
                A 50% deposit secures preparation time; the balance is due in
                advance.
              </p>
              <p className="text-base font-light leading-[1.8] text-gray-700">
                I accept bank transfer, Zelle, PayPal, Visa, and MasterCard.
              </p>
              <div className="border-l-2 border-gray-300 pl-4 py-2">
                <p className="text-sm font-light text-gray-600">
                  Amex: 3% processing fee applies for transactions exceeding
                  $10,000.
                </p>
              </div>
              <p className="text-sm font-light text-gray-600">
                Cancellations are non-refundable but can be rescheduled within
                ninety days.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Closing Statement */}
      <section className="border-t border-gray-200 py-20 bg-luxury-white">
        <div className="container mx-auto px-6 md:px-8 max-w-2xl text-center">
          <p
            className="text-xl md:text-2xl font-extralight leading-[1.5] text-luxury-black mb-4"
            style={{ fontWeight: 200 }}
          >
            I don't sell time.
          </p>
          <p
            className="text-xl md:text-2xl font-extralight leading-[1.5] text-gray-700"
            style={{ fontWeight: 200 }}
          >
            I reserve attention, continuity, and discretion for the few who
            understand their value.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-luxury-white px-6 py-16">
        <div className="mx-auto max-w-[620px] space-y-4 text-left">
          <p className="text-[14px] font-light leading-[1.7] text-gray-600">
            Among San Francisco escorts and Sacramento escorts, these rates
            reflect a decade of refinement. For those searching "escorts near
            me" with serious intent, this structure ensures quality over volume.
          </p>
          <nav className="flex flex-wrap gap-3 text-[14px] font-light text-luxury-black">
            <a
              href="/inquire"
              className="underline-offset-[4px] transition-colors duration-300 hover:text-gray-600 hover:underline"
            >
              Inquire
            </a>
            <a
              href="/faq"
              className="underline-offset-[4px] transition-colors duration-300 hover:text-gray-600 hover:underline"
            >
              FAQ
            </a>
            <a
              href="/about"
              className="underline-offset-[4px] transition-colors duration-300 hover:text-gray-600 hover:underline"
            >
              About
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default RatesPage;
