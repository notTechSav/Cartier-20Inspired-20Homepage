import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { addDays, format } from "date-fns";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Shield,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const inquirySchema = z.object({
  serviceType: z.enum([
    "consultation",
    "keynote",
    "advisory",
    "partnership",
    "custom",
  ]),
  projectBudget: z.enum([
    "under100k",
    "100k-250k",
    "250k-500k",
    "500k-1m",
    "above1m",
  ]),
  timeline: z.enum(["immediate", "1month", "3months", "6months", "planning"]),
  firstName: z.string().min(2, "First name required"),
  lastName: z.string().min(2, "Last name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone required"),
  company: z.string().min(2, "Company required"),
  position: z.string().min(2, "Position required"),
  website: z.string().url("Valid URL required").optional().or(z.literal("")),
  projectDescription: z.string().min(100, "Minimum 100 characters required"),
  desiredOutcomes: z.array(z.string()).min(1, "Select at least one outcome"),
  referralSource: z.enum([
    "search",
    "referral",
    "social",
    "press",
    "event",
    "other",
  ]),
  referralDetails: z.string().optional(),
  preferredDates: z.array(z.string()).min(1, "Select at least one date"),
  preferredTimeSlot: z.enum(["morning", "afternoon", "evening", "flexible"]),
  meetingType: z.enum([
    "inperson-sf",
    "inperson-sac",
    "inperson-other",
    "virtual",
    "hybrid",
  ]),
  linkedinProfile: z.string().url("Valid LinkedIn URL required"),
  ndaRequired: z.boolean(),
  termsAccepted: z
    .boolean()
    .refine((val) => val === true, "Terms must be accepted"),
});

type FormData = z.infer<typeof inquirySchema>;

const PROGRESS_STEPS = [1, 2, 3, 4, 5] as const;

const SERVICE_OPTIONS = [
  { value: "consultation", label: "Consultation" },
  { value: "keynote", label: "Keynote" },
  { value: "advisory", label: "Advisory" },
  { value: "partnership", label: "Partnership" },
  { value: "custom", label: "Custom" },
] as const;

const BUDGET_OPTIONS = [
  { value: "under100k", label: "Under $100K" },
  { value: "100k-250k", label: "$100K - $250K" },
  { value: "250k-500k", label: "$250K - $500K" },
  { value: "500k-1m", label: "$500K - $1M" },
  { value: "above1m", label: "Above $1M" },
] as const;

const TIMELINE_OPTIONS = [
  { value: "immediate", label: "Immediate" },
  { value: "1month", label: "1 Month" },
  { value: "3months", label: "3 Months" },
  { value: "6months", label: "6 Months" },
  { value: "planning", label: "Planning" },
] as const;

const STEP_MOTION_PROPS = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.4, ease: "easeOut" as const },
};

const OUTCOME_OPTIONS = [
  "Brand Enhancement",
  "Thought Leadership",
  "Strategic Guidance",
  "Market Expansion",
  "Revenue Growth",
  "Team Development",
  "Innovation",
  "Partnership",
] as const;

const REFERRAL_OPTIONS = [
  { value: "search", label: "Search Engine" },
  { value: "referral", label: "Referral" },
  { value: "social", label: "Social Media" },
  { value: "press", label: "Press/Media" },
  { value: "event", label: "Event" },
  { value: "other", label: "Other" },
] as const;

const TIME_SLOTS = [
  { value: "morning", label: "Morning (9AM – 12PM)" },
  { value: "afternoon", label: "Afternoon (12PM – 5PM)" },
  { value: "evening", label: "Evening (5PM – 8PM)" },
  { value: "flexible", label: "Flexible" },
] as const;

const MEETING_TYPES = [
  { value: "inperson-sf", label: "In-Person — San Francisco" },
  { value: "inperson-sac", label: "In-Person — Sacramento" },
  { value: "inperson-other", label: "In-Person — Other Location" },
  { value: "virtual", label: "Virtual Meeting" },
  { value: "hybrid", label: "Hybrid (In-Person + Virtual)" },
] as const;

const labelClass =
  "text-xs font-light uppercase tracking-uppercase text-gray-600";
const inputClass =
  "w-full rounded-[2px] border border-gray-200 bg-white px-6 py-4 text-base font-light tracking-luxury text-gray-700 placeholder:text-gray-400 transition-colors duration-250 ease-out focus:border-gray-400 focus:outline-none";
const textareaClass = cn(inputClass, "min-h-[192px] resize-none");
const selectionBase =
  "w-full rounded-[2px] border border-gray-200 px-6 py-5 text-left font-light tracking-luxury text-gray-700 transition-colors duration-250 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2";
const selectionActive = "border-luxury-black bg-luxury-black text-luxury-white";
const selectionPassive = "hover:border-gray-400";
const tagBase =
  "rounded-[2px] border border-gray-200 px-5 py-3 text-sm font-light tracking-luxury text-gray-700 transition-colors duration-250 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2";
const errorClass = "text-xs font-light text-destructive";
const checkboxWrapper =
  "flex items-center gap-3 rounded-[2px] border border-gray-200 px-6 py-4 transition-colors duration-250 ease-out hover:border-gray-400";
const sectionHeadingClass =
  "mb-3 text-5xl font-extralight tracking-display leading-[1.1] text-luxury-black";
const sectionBodyClass =
  "text-base font-light leading-relaxed tracking-luxury text-gray-600";

const InquireLuxury = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [availableDates, setAvailableDates] = useState<string[]>([]);

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    trigger,
    setValue,
    getValues,
  } = useForm<FormData>({
    resolver: zodResolver(inquirySchema),
    mode: "onChange",
    defaultValues: {
      desiredOutcomes: [],
      preferredDates: [],
      ndaRequired: false,
      termsAccepted: false,
      website: "",
    },
  });

  useEffect(() => {
    document.title = "Luxury Inquiry | Katherine Taylor";

    const dates: string[] = [];
    const baseDate = new Date();
    for (let i = 7; i < 60; i += 1) {
      const date = addDays(baseDate, i);
      if (Math.random() > 0.8) {
        dates.push(format(date, "yyyy-MM-dd"));
      }
    }
    setAvailableDates(dates);
  }, []);

  const selectedOutcomes = watch("desiredOutcomes") || [];
  const selectedDates = watch("preferredDates") || [];

  const toggleOutcome = (outcome: string) => {
    const current = getValues("desiredOutcomes") || [];
    const updated = current.includes(outcome)
      ? current.filter((item) => item !== outcome)
      : [...current, outcome];
    setValue("desiredOutcomes", updated, { shouldValidate: true });
  };

  const toggleDate = (date: string) => {
    const current = getValues("preferredDates") || [];
    const updated = current.includes(date)
      ? current.filter((d) => d !== date)
      : [...current, date];
    setValue("preferredDates", updated, { shouldValidate: true });
  };

  const validateStep = async (step: number): Promise<boolean> => {
    switch (step) {
      case 1:
        return trigger(["serviceType", "projectBudget", "timeline"]);
      case 2:
        return trigger([
          "firstName",
          "lastName",
          "email",
          "phone",
          "company",
          "position",
        ]);
      case 3:
        return trigger([
          "projectDescription",
          "desiredOutcomes",
          "referralSource",
        ]);
      case 4:
        return trigger(["preferredDates", "preferredTimeSlot", "meetingType"]);
      case 5:
        return trigger(["linkedinProfile", "termsAccepted"]);
      default:
        return false;
    }
  };

  const nextStep = async () => {
    const isStepValid = await validateStep(currentStep);
    if (isStepValid && currentStep < PROGRESS_STEPS.length) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/luxury-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        window.location.href = "/inquiry-confirmed";
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-luxury-white">
      <div className="mx-auto max-w-3xl px-8 py-24 md:py-32">
        <div className="mb-12">
          <div className="mb-4 flex justify-between">
            {PROGRESS_STEPS.map((step) => {
              const isActive = currentStep >= step;
              return (
                <div
                  key={step}
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full border-2 text-sm font-light transition-colors duration-250 ease-out",
                    isActive
                      ? "border-luxury-black bg-luxury-black text-luxury-white"
                      : "border-gray-200 text-gray-500",
                  )}
                >
                  {step}
                </div>
              );
            })}
          </div>
          <div className="h-1 overflow-hidden rounded-full bg-gray-200">
            <motion.div
              className="h-full bg-luxury-black"
              initial={{ width: "0%" }}
              animate={{
                width: `${(currentStep / PROGRESS_STEPS.length) * 100}%`,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                {...STEP_MOTION_PROPS}
                className="space-y-10"
              >
                <div>
                  <h1 className={sectionHeadingClass}>Begin Your Journey</h1>
                  <p className={sectionBodyClass}>
                    Tell us about your engagement needs.
                  </p>
                </div>

                <div className="space-y-4">
                  <label className={labelClass}>Service Type</label>
                  <Controller
                    name="serviceType"
                    control={control}
                    render={({ field }) => (
                      <div className="grid grid-cols-2 gap-4">
                        {SERVICE_OPTIONS.map((option) => {
                          const isActive = field.value === option.value;
                          return (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => field.onChange(option.value)}
                              className={cn(
                                selectionBase,
                                isActive ? selectionActive : selectionPassive,
                              )}
                              aria-pressed={isActive}
                            >
                              {option.label}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  />
                  {errors.serviceType && (
                    <p className={errorClass}>{errors.serviceType.message}</p>
                  )}
                </div>

                <div className="space-y-4">
                  <label className={labelClass}>Investment Range</label>
                  <Controller
                    name="projectBudget"
                    control={control}
                    render={({ field }) => (
                      <div className="space-y-3">
                        {BUDGET_OPTIONS.map((option) => {
                          const isActive = field.value === option.value;
                          return (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => field.onChange(option.value)}
                              className={cn(
                                selectionBase,
                                isActive ? selectionActive : selectionPassive,
                              )}
                              aria-pressed={isActive}
                            >
                              {option.label}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  />
                  {errors.projectBudget && (
                    <p className={errorClass}>{errors.projectBudget.message}</p>
                  )}
                </div>

                <div className="space-y-4">
                  <label className={labelClass}>Timeline</label>
                  <Controller
                    name="timeline"
                    control={control}
                    render={({ field }) => (
                      <div className="flex flex-wrap gap-4">
                        {TIMELINE_OPTIONS.map((option) => {
                          const isActive = field.value === option.value;
                          return (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => field.onChange(option.value)}
                              className={cn(
                                tagBase,
                                "uppercase tracking-uppercase",
                                isActive ? selectionActive : selectionPassive,
                              )}
                              aria-pressed={isActive}
                            >
                              {option.label}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  />
                  {errors.timeline && (
                    <p className={errorClass}>{errors.timeline.message}</p>
                  )}
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                {...STEP_MOTION_PROPS}
                className="space-y-10"
              >
                <div>
                  <h1 className={sectionHeadingClass}>Your Information</h1>
                  <p className={sectionBodyClass}>Tell us about yourself.</p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className={labelClass}>First Name</label>
                    <input
                      {...register("firstName")}
                      className={inputClass}
                      placeholder="John"
                      autoComplete="given-name"
                    />
                    {errors.firstName && (
                      <p className={errorClass}>{errors.firstName.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className={labelClass}>Last Name</label>
                    <input
                      {...register("lastName")}
                      className={inputClass}
                      placeholder="Doe"
                      autoComplete="family-name"
                    />
                    {errors.lastName && (
                      <p className={errorClass}>{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className={labelClass}>Email</label>
                    <input
                      {...register("email")}
                      type="email"
                      className={inputClass}
                      placeholder="john@company.com"
                      autoComplete="email"
                    />
                    {errors.email && (
                      <p className={errorClass}>{errors.email.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className={labelClass}>Phone</label>
                    <input
                      {...register("phone")}
                      type="tel"
                      className={inputClass}
                      placeholder="+1 (555) 123-4567"
                      autoComplete="tel"
                    />
                    {errors.phone && (
                      <p className={errorClass}>{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className={labelClass}>Company</label>
                    <input
                      {...register("company")}
                      className={inputClass}
                      placeholder="Katherine Taylor Group"
                    />
                    {errors.company && (
                      <p className={errorClass}>{errors.company.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className={labelClass}>Position</label>
                    <input
                      {...register("position")}
                      className={inputClass}
                      placeholder="CEO, Director, etc."
                    />
                    {errors.position && (
                      <p className={errorClass}>{errors.position.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className={labelClass}>Website (Optional)</label>
                  <input
                    {...register("website")}
                    type="url"
                    className={inputClass}
                    placeholder="https://company.com"
                  />
                  {errors.website && (
                    <p className={errorClass}>{errors.website.message}</p>
                  )}
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                {...STEP_MOTION_PROPS}
                className="space-y-10"
              >
                <div>
                  <h1 className={sectionHeadingClass}>Project Details</h1>
                  <p className={sectionBodyClass}>
                    Describe what you hope to achieve.
                  </p>
                </div>

                <div className="space-y-2">
                  <label className={labelClass}>Project Description</label>
                  <textarea
                    {...register("projectDescription")}
                    rows={6}
                    className={textareaClass}
                    placeholder="Tell us about your project, goals, and what you hope to achieve... (minimum 100 characters)"
                  />
                  {errors.projectDescription && (
                    <p className={errorClass}>
                      {errors.projectDescription.message}
                    </p>
                  )}
                </div>

                <div className="space-y-4">
                  <label className={labelClass}>Desired Outcomes</label>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {OUTCOME_OPTIONS.map((outcome) => {
                      const isActive = selectedOutcomes.includes(outcome);
                      return (
                        <button
                          key={outcome}
                          type="button"
                          onClick={() => toggleOutcome(outcome)}
                          className={cn(
                            tagBase,
                            "text-left",
                            isActive ? selectionActive : selectionPassive,
                          )}
                          aria-pressed={isActive}
                        >
                          {outcome}
                        </button>
                      );
                    })}
                  </div>
                  {errors.desiredOutcomes && (
                    <p className={errorClass}>
                      {errors.desiredOutcomes.message}
                    </p>
                  )}
                </div>

                <div className="space-y-4">
                  <label className={labelClass}>
                    How Did You Hear About Us?
                  </label>
                  <Controller
                    name="referralSource"
                    control={control}
                    render={({ field }) => (
                      <div className="space-y-3">
                        {REFERRAL_OPTIONS.map((option) => {
                          const isActive = field.value === option.value;
                          return (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => field.onChange(option.value)}
                              className={cn(
                                selectionBase,
                                isActive ? selectionActive : selectionPassive,
                              )}
                              aria-pressed={isActive}
                            >
                              {option.label}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  />
                  {errors.referralSource && (
                    <p className={errorClass}>
                      {errors.referralSource.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className={labelClass}>
                    Additional Details (Optional)
                  </label>
                  <input
                    {...register("referralDetails")}
                    className={inputClass}
                    placeholder="Referred by Jane Smith; saw you at TechConf 2024"
                  />
                </div>
              </motion.div>
            )}

            {currentStep === 4 && (
              <motion.div
                key="step4"
                {...STEP_MOTION_PROPS}
                className="space-y-10"
              >
                <div>
                  <h1 className={sectionHeadingClass}>Scheduling</h1>
                  <p className={sectionBodyClass}>
                    Choose your preferred meeting times.
                  </p>
                </div>

                <div className="space-y-4">
                  <label className={labelClass}>Preferred Dates</label>
                  <div className="grid max-h-64 grid-cols-3 gap-3 overflow-y-auto rounded-[2px] border border-gray-200 bg-white p-4">
                    {availableDates.map((date) => {
                      const isActive = selectedDates.includes(date);
                      return (
                        <button
                          key={date}
                          type="button"
                          onClick={() => toggleDate(date)}
                          className={cn(
                            tagBase,
                            "text-center",
                            isActive ? selectionActive : selectionPassive,
                          )}
                          aria-pressed={isActive}
                        >
                          {format(new Date(date), "MMM dd")}
                        </button>
                      );
                    })}
                  </div>
                  {errors.preferredDates && (
                    <p className={errorClass}>
                      {errors.preferredDates.message}
                    </p>
                  )}
                </div>

                <div className="space-y-4">
                  <label className={labelClass}>Preferred Time</label>
                  <Controller
                    name="preferredTimeSlot"
                    control={control}
                    render={({ field }) => (
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {TIME_SLOTS.map((option) => {
                          const isActive = field.value === option.value;
                          return (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => field.onChange(option.value)}
                              className={cn(
                                tagBase,
                                "text-left",
                                isActive ? selectionActive : selectionPassive,
                              )}
                              aria-pressed={isActive}
                            >
                              {option.label}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  />
                  {errors.preferredTimeSlot && (
                    <p className={errorClass}>
                      {errors.preferredTimeSlot.message}
                    </p>
                  )}
                </div>

                <div className="space-y-4">
                  <label className={labelClass}>Meeting Type</label>
                  <Controller
                    name="meetingType"
                    control={control}
                    render={({ field }) => (
                      <div className="space-y-3">
                        {MEETING_TYPES.map((option) => {
                          const isActive = field.value === option.value;
                          return (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => field.onChange(option.value)}
                              className={cn(
                                selectionBase,
                                isActive ? selectionActive : selectionPassive,
                              )}
                              aria-pressed={isActive}
                            >
                              {option.label}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  />
                  {errors.meetingType && (
                    <p className={errorClass}>{errors.meetingType.message}</p>
                  )}
                </div>
              </motion.div>
            )}

            {currentStep === 5 && (
              <motion.div
                key="step5"
                {...STEP_MOTION_PROPS}
                className="space-y-10"
              >
                <div>
                  <h1 className={sectionHeadingClass}>Verification</h1>
                  <p className={sectionBodyClass}>
                    Final details for your inquiry.
                  </p>
                </div>

                <div className="space-y-2">
                  <label className={labelClass}>LinkedIn Profile</label>
                  <input
                    {...register("linkedinProfile")}
                    type="url"
                    className={inputClass}
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                  {errors.linkedinProfile && (
                    <p className={errorClass}>
                      {errors.linkedinProfile.message}
                    </p>
                  )}
                </div>

                <div className="space-y-3">
                  <label className={cn(labelClass, "sr-only")}>
                    NDA Requirement
                  </label>
                  <label className={checkboxWrapper}>
                    <input
                      {...register("ndaRequired")}
                      type="checkbox"
                      className="h-4 w-4 border-gray-300 text-luxury-black focus:ring-gray-400 accent-luxury-black"
                    />
                    <span className="text-sm font-light leading-relaxed tracking-luxury text-gray-700">
                      This project requires an NDA
                    </span>
                  </label>

                  <label className={checkboxWrapper}>
                    <input
                      {...register("termsAccepted")}
                      type="checkbox"
                      className="h-4 w-4 border-gray-300 text-luxury-black focus:ring-gray-400 accent-luxury-black"
                    />
                    <span className="text-sm font-light leading-relaxed tracking-luxury text-gray-700">
                      I agree to the{" "}
                      <a href="/terms" className="underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="/privacy" className="underline">
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                  {errors.termsAccepted && (
                    <p className={errorClass}>{errors.termsAccepted.message}</p>
                  )}
                </div>

                <div className="rounded-[2px] border border-gray-200 bg-gray-50 px-6 py-6">
                  <h3 className="mb-4 flex items-center gap-2 text-base font-light tracking-luxury text-gray-700">
                    <Shield className="h-5 w-5" />
                    What Happens Next
                  </h3>
                  <ul className="space-y-3 text-sm font-light leading-relaxed tracking-luxury text-gray-600">
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-luxury-black" />
                      <span>
                        Immediate confirmation email with inquiry number
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-luxury-black" />
                      <span>Verification review within 24–48 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-luxury-black" />
                      <span>Discovery call scheduled within 72 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-luxury-black" />
                      <span>Custom proposal delivered within 1 week</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-12 flex items-center gap-4 border-t border-gray-200 pt-8">
            {currentStep > 1 && (
              <Button
                type="button"
                variant="ctaSecondary"
                onClick={prevStep}
                className="flex items-center gap-2 px-10 py-4"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
            )}

            {currentStep < PROGRESS_STEPS.length ? (
              <Button
                type="button"
                variant="ctaPrimary"
                onClick={nextStep}
                className="ml-auto flex items-center gap-2 px-10 py-4"
              >
                Continue
                <ChevronRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                type="submit"
                variant="ctaPrimary"
                className="ml-auto flex items-center gap-2 px-10 py-4"
                disabled={isSubmitting || !isValid}
              >
                {isSubmitting ? "Processing…" : "Submit Inquiry"}
                <Sparkles className="h-4 w-4" />
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default InquireLuxury;
