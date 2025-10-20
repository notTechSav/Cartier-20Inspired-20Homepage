'use client';

import { useState } from "react";

const RatesPage = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-50">
      <section className="relative px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-8 text-[2.75rem] font-extralight tracking-[0.02em] text-neutral-900 leading-[1.15] md:text-6xl">
            Rates
          </h1>
          <p className="mb-12 text-[1.0625rem] font-light tracking-[0.01em] text-neutral-700 leading-[1.85]">
            Every figure on this page exists to protect one idea: you never have to explain yourself twice.
          </p>
          <p className="mb-6 text-[1.0625rem] font-light tracking-[0.01em] text-neutral-700 leading-[1.85]">
            My work is cumulative, not transactional. Each engagement carries forward the full history of your context—professional, personal, logistical—so nothing resets. The premium reflects continuity, discretion, and the scarcity discipline required to deliver them without compromise.
          </p>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-2xl">
          <button
            onClick={() => setIsRevealed((prev) => !prev)}
            className="group relative inline-flex items-center gap-3 bg-neutral-900 px-8 py-4 text-sm font-light tracking-[0.03em] text-neutral-50 transition-all duration-500 hover:bg-neutral-800"
            style={{
              boxShadow: isRevealed
                ? "0 1px 2px rgba(0,0,0,0.05)"
                : "0 2px 8px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.08)",
            }}
          >
            <span className="transition-opacity duration-300">
              {isRevealed ? "Conceal structure" : "Show current structure"}
            </span>
            <svg
              className={`h-3 w-3 transition-transform duration-500 ${isRevealed ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </section>

      <div
        className="overflow-hidden transition-all duration-700 ease-in-out"
        style={{
          maxHeight: isRevealed ? "10000px" : "0",
          opacity: isRevealed ? 1 : 0,
        }}
      >
        <section className="border-t border-neutral-200 px-6 py-16">
          <div className="mx-auto max-w-2xl">
            <div className="mb-10">
              <p className="mb-3 text-xs font-light uppercase tracking-[0.08em] text-neutral-500">
                Tier One
              </p>
              <h2 className="mb-4 text-[1.75rem] font-extralight tracking-[0.01em] text-neutral-900 leading-[1.2] md:text-4xl">
                New Clients / Trial Engagements
              </h2>
              <p className="text-sm font-light italic tracking-[0.02em] text-neutral-600">
                For first meetings and compatibility evaluations.
              </p>
            </div>
            <div className="mb-10 space-y-6">
              <div className="flex items-baseline justify-between border-b border-neutral-200 pb-3">
                <span className="text-base font-light text-neutral-700">Overnight (up to 14 hours)</span>
                <span className="text-lg font-light tracking-[0.02em] text-neutral-900">$25,000</span>
              </div>
              <div className="flex items-baseline justify-between border-b border-neutral-200 pb-3">
                <span className="text-base font-light text-neutral-700">24 Hours</span>
                <span className="text-lg font-light tracking-[0.02em] text-neutral-900">$45,000</span>
              </div>
              <div className="flex items-baseline justify-between border-b border-neutral-200 pb-3">
                <span className="text-base font-light text-neutral-700">48 Hours</span>
                <span className="text-lg font-light tracking-[0.02em] text-neutral-900">$75,000</span>
              </div>
            </div>
            <p className="mb-6 text-[1.0625rem] font-light tracking-[0.01em] text-neutral-700 leading-[1.85]">
              At this stage, I'm mapping how you think—your cadence, your thresholds, the specific decisions that keep you awake. These hours are as much reconnaissance as experience. I listen, learn, and build the early architecture of institutional memory.
            </p>
            <p className="text-sm font-light italic tracking-[0.01em] text-neutral-600 leading-[1.8]">
              New partnerships open twice per quarter and are limited to a small number of invitations.
            </p>
          </div>
        </section>

        <section className="border-t border-neutral-200 bg-gradient-to-b from-transparent to-neutral-100/30 px-6 py-16">
          <div className="mx-auto max-w-2xl">
            <div className="mb-10">
              <p className="mb-3 text-xs font-light uppercase tracking-[0.08em] text-neutral-500">
                Tier Two
              </p>
              <h2 className="mb-4 text-[1.75rem] font-extralight tracking-[0.01em] text-neutral-900 leading-[1.2] md:text-4xl">
                Established Clients
              </h2>
              <p className="text-sm font-light italic tracking-[0.02em] text-neutral-600">
                For clients with at least four engagements or six months of continuity.
              </p>
            </div>
            <div className="mb-10 space-y-6">
              <div className="flex items-baseline justify-between border-b border-neutral-200 pb-3">
                <span className="text-base font-light text-neutral-700">Overnight (up to 14 hours)</span>
                <span className="text-lg font-light tracking-[0.02em] text-neutral-900">$28,000</span>
              </div>
              <div className="flex items-baseline justify-between border-b border-neutral-200 pb-3">
                <span className="text-base font-light text-neutral-700">24 Hours</span>
                <span className="text-lg font-light tracking-[0.02em] text-neutral-900">$50,000</span>
              </div>
              <div className="flex items-baseline justify-between border-b border-neutral-200 pb-3">
                <span className="text-base font-light text-neutral-700">48 Hours</span>
                <span className="text-lg font-light tracking-[0.02em] text-neutral-900">$80,000</span>
              </div>
            </div>
            <p className="mb-6 text-[1.0625rem] font-light tracking-[0.01em] text-neutral-700 leading-[1.85]">
              By now, context is embedded. I arrive briefed on your current landscape—board politics, family logistics, the deal that's gone sideways. You no longer waste time reintroducing yourself. The conversation starts where the last one ended.
            </p>
            <p className="text-[1.0625rem] font-light tracking-[0.01em] text-neutral-700 leading-[1.85]">
              Continuity is the true luxury here. These rates protect the hours of preparation that happen before I arrive—the research, the recall, and the calibration that make each meeting feel immediate.
            </p>
          </div>
        </section>

        <section className="border-t border-neutral-200 bg-gradient-to-b from-neutral-100/30 to-transparent px-6 py-16">
          <div className="mx-auto max-w-2xl">
            <div className="mb-10">
              <p className="mb-3 text-xs font-light uppercase tracking-[0.08em] text-neutral-500">
                Tier Three
              </p>
              <h2 className="mb-4 text-[1.75rem] font-extralight tracking-[0.01em] text-neutral-900 leading-[1.2] md:text-4xl">
                Strategic Partnerships
              </h2>
              <p className="text-sm font-light italic tracking-[0.02em] text-neutral-600">Annual Retainer</p>
            </div>
            <div className="mb-10 border-b border-neutral-300 pb-6">
              <p className="text-2xl font-light tracking-[0.02em] text-neutral-900">
                $240,000 <span className="text-base text-neutral-600">annually</span>
              </p>
            </div>
            <div className="mb-10">
              <p className="mb-4 text-sm font-light uppercase tracking-[0.04em] text-neutral-600">
                Includes
              </p>
              <ul className="space-y-4 text-[1.0625rem] font-light tracking-[0.01em] text-neutral-700 leading-[1.85]">
                <li className="border-l-2 border-neutral-300 pl-6">Four 48-hour engagements annually (priority scheduling)</li>
                <li className="border-l-2 border-neutral-300 pl-6">Unlimited strategic dialogue between meetings</li>
                <li className="border-l-2 border-neutral-300 pl-6">Anticipatory preparation for each engagement, based on your current environment</li>
                <li className="border-l-2 border-neutral-300 pl-6">Discretionary outreach when developments arise that intersect with your interests</li>
              </ul>
            </div>
            <p className="text-[1.0625rem] font-light tracking-[0.01em] text-neutral-700 leading-[1.85]">
              This tier formalizes what many of my long-term clients already practice: a relationship where counsel and presence are continuous. I maintain no more than twenty active partnerships at a time. When that number is reached, I raise rates rather than expand volume.
            </p>
          </div>
        </section>

        <section className="border-t border-neutral-200 px-6 py-16">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-10 text-[1.75rem] font-extralight tracking-[0.01em] text-neutral-900 leading-[1.2] md:text-4xl">
              The Rationale
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="mb-3 text-base font-normal tracking-[0.02em] text-neutral-900">Time</h3>
                <p className="text-[1.0625rem] font-light tracking-[0.01em] text-neutral-700 leading-[1.85]">
                  Institutional memory takes years to accumulate. Each engagement compounds on that archive, compressing decision cycles and removing friction.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-base font-normal tracking-[0.02em] text-neutral-900">Rarity</h3>
                <p className="text-[1.0625rem] font-light tracking-[0.01em] text-neutral-700 leading-[1.85]">
                  Scarcity is deliberate. A capped roster ensures the quality of recall and attention remains exact.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-base font-normal tracking-[0.02em] text-neutral-900">Endeavor</h3>
                <p className="text-[1.0625rem] font-light tracking-[0.01em] text-neutral-700 leading-[1.85]">
                  Preparation is the invisible labor that defines this work: research, risk mapping, and anticipatory alignment.
                </p>
              </div>
            </div>
            <p className="mt-10 text-[1.0625rem] font-light italic tracking-[0.01em] text-neutral-700 leading-[1.85]">
              You're not paying more for the same experience—you're paying to preserve the conditions that make the experience possible.
            </p>
          </div>
        </section>

        <section className="border-t border-neutral-200 bg-gradient-to-b from-transparent to-neutral-100/30 px-6 py-16">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-10 text-[1.75rem] font-extralight tracking-[0.01em] text-neutral-900 leading-[1.2] md:text-4xl">
              Quantified Value
            </h2>
            <div className="mb-10 space-y-6">
              <div className="flex items-start gap-8 justify-between border-b border-neutral-200 pb-4">
                <span className="flex-1 text-sm font-light text-neutral-700">
                  Strategic Dialogue: 4–6 hours of peer-level conversation per engagement
                </span>
                <span className="whitespace-nowrap text-sm font-light text-neutral-900">
                  $1,500–$3,000/hour
                </span>
              </div>
              <div className="flex items-start gap-8 justify-between border-b border-neutral-200 pb-4">
                <span className="flex-1 text-sm font-light text-neutral-700">
                  Time Efficiency: 2–3 hours saved per engagement by eliminating re-explanation
                </span>
                <span className="whitespace-nowrap text-sm font-light text-neutral-900">
                  $2,000–$3,000
                </span>
              </div>
              <div className="flex items-start gap-8 justify-between border-b border-neutral-200 pb-4">
                <span className="flex-1 text-sm font-light text-neutral-700">
                  Certainty and Continuity: Known quality, no risk of mismatch
                </span>
                <span className="whitespace-nowrap text-sm font-light text-neutral-900">
                  $5,000–$10,000
                </span>
              </div>
              <div className="flex items-start gap-8 justify-between border-b border-neutral-200 pb-4">
                <span className="flex-1 text-sm font-light text-neutral-700">
                  Depth and Anticipation: Relationship history that produces insight before it's requested
                </span>
                <span className="whitespace-nowrap text-sm font-light text-neutral-900">
                  $10,000–$15,000
                </span>
              </div>
            </div>
            <div className="border-t-2 border-neutral-300 pt-6">
              <div className="mb-2 flex items-baseline justify-between">
                <span className="text-base font-light text-neutral-700">
                  Typical value delivered per 24-hour engagement
                </span>
                <span className="text-lg font-light text-neutral-900">$28,000–$56,000</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-base font-light text-neutral-700">Rate charged</span>
                <span className="text-lg font-light text-neutral-900">$45,000–$50,000</span>
              </div>
            </div>
            <p className="mt-8 text-base font-light tracking-[0.02em] text-neutral-900">The math holds.</p>
          </div>
        </section>

        <section className="border-t border-neutral-200 px-6 py-16">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-[1.75rem] font-extralight tracking-[0.01em] text-neutral-900 leading-[1.2] md:text-4xl">
              Availability
            </h2>
            <p className="mb-6 text-[1.0625rem] font-light tracking-[0.01em] text-neutral-700 leading-[1.85]">
              I maintain a limited client roster. New partnerships are reviewed quarterly and only when an existing one concludes.
            </p>
            <p className="text-[1.0625rem] font-light italic tracking-[0.01em] text-neutral-700 leading-[1.85]">
              If continuity matters to you, inquire before the next review window.
            </p>
          </div>
        </section>

        <section className="border-t border-neutral-200 bg-gradient-to-b from-transparent to-neutral-100/30 px-6 py-16">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-10 text-[1.75rem] font-extralight tracking-[0.01em] text-neutral-900 leading-[1.2] md:text-4xl">
              Travel
            </h2>
            <div className="space-y-6">
              <div className="border-b border-neutral-200 pb-4">
                <p className="mb-2 text-base font-light text-neutral-900">Bay Area / Northern California</p>
                <p className="text-sm font-light text-neutral-600">No fee.</p>
              </div>
              <div className="border-b border-neutral-200 pb-4">
                <p className="mb-2 text-base font-light text-neutral-900">West Coast (LA, Seattle, Portland, San Diego)</p>
                <p className="text-sm font-light text-neutral-700">
                  Overnight $28,000 / 24 hours $50,000 + first-class travel and accommodation.
                </p>
              </div>
              <div className="border-b border-neutral-200 pb-4">
                <p className="mb-2 text-base font-light text-neutral-900">National (NYC, Miami, Chicago, Austin)</p>
                <p className="text-sm font-light text-neutral-700">
                  24 hours $55,000 / 48 hours $80,000 + first-class travel and accommodation.
                </p>
              </div>
              <div className="pb-4">
                <p className="mb-2 text-base font-light text-neutral-900">International</p>
                <p className="text-sm font-light text-neutral-600">By arrangement.</p>
              </div>
            </div>
            <p className="mt-10 text-sm font-light italic tracking-[0.02em] text-neutral-700">
              Discretion is embedded, not billed.
            </p>
          </div>
        </section>

        <section className="border-t border-neutral-200 px-6 py-16">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-[1.75rem] font-extralight tracking-[0.01em] text-neutral-900 leading-[1.2] md:text-4xl">
              Payment
            </h2>
            <p className="mb-6 text-[1.0625rem] font-light tracking-[0.01em] text-neutral-700 leading-[1.85]">
              A 50% deposit secures preparation time; the balance is due in advance so neither of us spends the engagement managing logistics.
            </p>
            <p className="mb-6 text-[1.0625rem] font-light tracking-[0.01em] text-neutral-700 leading-[1.85]">
              I accept bank transfer, Zelle, PayPal Merchant, Visa, and MasterCard.
            </p>
            <div className="mb-8 border-l-2 border-neutral-300 pl-6">
              <p className="mb-3 text-[1.0625rem] font-light tracking-[0.01em] text-neutral-700 leading-[1.85]">
                I also accept Amex, with the following policy:
              </p>
              <p className="mb-2 text-sm font-light tracking-[0.01em] text-neutral-600 leading-[1.8]">
                For Amex transactions exceeding $10,000, a 3% processing fee applies.
              </p>
              <p className="text-sm font-light tracking-[0.01em] text-neutral-600 leading-[1.8]">
                Direct wire or ACH is preferred for transactions above that threshold.
              </p>
            </div>
            <p className="mb-6 text-[1.0625rem] font-light tracking-[0.01em] text-neutral-700 leading-[1.85]">
              S-Corp invoicing is available for clients who classify this as consultancy or strategic advisory.
            </p>
            <p className="text-sm font-light tracking-[0.01em] text-neutral-600 leading-[1.8]">
              Cancellations are non-refundable but can be rescheduled within ninety days.
            </p>
          </div>
        </section>

        <section className="border-t border-neutral-200 bg-gradient-to-b from-transparent to-neutral-100/30 px-6 py-16">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-[1.75rem] font-extralight tracking-[0.01em] text-neutral-900 leading-[1.2] md:text-4xl">
              Rate Transition
            </h2>
            <p className="mb-6 text-[1.0625rem] font-light tracking-[0.01em] text-neutral-700 leading-[1.85]">
              Rates are scheduled to adjust fully to this 2–2.5× structure over the next twelve months.
            </p>
            <p className="mb-6 text-[1.0625rem] font-light tracking-[0.01em] text-neutral-700 leading-[1.85]">
              Existing relationships receive six to twelve months' notice and priority scheduling to secure preferred dates at their current rate.
            </p>
            <p className="text-[1.0625rem] font-light tracking-[0.01em] text-neutral-700 leading-[1.85]">
              This isn't a rate increase for its own sake—it's a formal acknowledgment of what the work already represents: limited capacity, high consequence, and continuity that compounds.
            </p>
          </div>
        </section>
      </div>

      <section className="border-t border-neutral-200 px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <p className="mb-4 text-xl font-extralight tracking-[0.01em] text-neutral-900 leading-[1.5] md:text-2xl">
            I don't sell time.
          </p>
          <p className="text-xl font-extralight tracking-[0.01em] text-neutral-700 leading-[1.5] md:text-2xl">
            I reserve attention, continuity, and discretion for the few who understand their value.
          </p>
        </div>
      </section>
    </div>
  );
};

export default RatesPage;
