import * as DialogPrimitive from "@radix-ui/react-dialog";
import { type CSSProperties, useMemo } from "react";
import type { JournalEssay } from "@/lib/journal-content";

interface JournalModalProps {
  isOpen: boolean;
  onClose: () => void;
  essay: JournalEssay | undefined;
  closeLabel: string;
  readNextLabel: string;
  nextEssay?: JournalEssay;
  onNavigateNext?: (slug: string) => void;
}

const overlayClassName =
  "fixed inset-0 z-[70] bg-[rgba(0,0,0,0.08)] transition-opacity duration-[350ms] ease-in-out data-[state=open]:opacity-100 data-[state=closed]:opacity-0";

const contentClassName =
  "fixed left-1/2 top-1/2 z-[80] w-full max-w-[640px] -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-luxury-white px-8 py-12 shadow-[0_32px_80px_rgba(0,0,0,0.14)] outline-none transition-opacity duration-[350ms] ease-in-out data-[state=open]:opacity-100 data-[state=closed]:opacity-0 sm:rounded-none";

const innerScrollClassName =
  "max-h-[84vh] overflow-y-auto pr-2 pt-6 sm:pr-3 sm:pt-8";

const transitionStyle: CSSProperties = {
  transitionDuration: "350ms",
  transitionTimingFunction: "ease-in-out",
};

const linenWashStyle: CSSProperties = {
  backgroundColor: "var(--luxury-white)",
  backgroundImage:
    "linear-gradient(135deg, rgba(250,247,238,0.12) 0%, rgba(237,234,224,0.12) 100%), radial-gradient(rgba(26,26,26,0.05) 1px, transparent 1px)",
  backgroundSize: "100% 100%, 14px 14px",
  backgroundBlendMode: "soft-light",
};

const JournalModal = ({
  isOpen,
  onClose,
  essay,
  closeLabel,
  readNextLabel,
  nextEssay,
  onNavigateNext,
}: JournalModalProps) => {
  const paragraphs = useMemo(() => {
    if (!essay) return [];
    return essay.body.split(/\n\n+/g).map((paragraph) => paragraph.trim());
  }, [essay]);

  const formattedPublishedDate = useMemo(() => {
    if (!essay) return "";
    const parsed = new Date(essay.publishedDate);
    if (Number.isNaN(parsed.getTime())) {
      return essay.publishedDate;
    }
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(parsed);
  }, [essay]);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={handleOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className={overlayClassName}
          style={transitionStyle}
        />
        <DialogPrimitive.Content
          className={contentClassName}
          style={{ ...transitionStyle, ...linenWashStyle }}
          aria-describedby={undefined}
        >
          <DialogPrimitive.Close asChild>
            <button
              type="button"
              onClick={onClose}
              className="absolute right-8 top-8 text-sm font-light tracking-[0.08em] text-luxury-black underline-offset-4 transition-colors duration-300 hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-luxury-black/40 focus-visible:ring-offset-4 focus-visible:ring-offset-luxury-white"
            >
              {closeLabel}
            </button>
          </DialogPrimitive.Close>

          <div className={innerScrollClassName}>
            <div className="flex flex-col gap-8 text-left">
              <header className="space-y-3">
                {formattedPublishedDate ? (
                  <p className="text-xs font-light uppercase tracking-[0.12em] text-gray-600">
                    Published {formattedPublishedDate}
                  </p>
                ) : null}
                <DialogPrimitive.Title asChild>
                  <h2
                    className="text-[32px] font-extralight leading-[1.2] tracking-[-0.02em] text-luxury-black"
                    style={{ fontWeight: 200 }}
                  >
                    {essay?.title}
                  </h2>
                </DialogPrimitive.Title>
              </header>

              <DialogPrimitive.Description asChild>
                <div className="space-y-6 text-[18px] font-light leading-[1.75] text-luxury-black">
                  {paragraphs.map((paragraph, index) => (
                    <p key={`${essay?.slug ?? ""}-paragraph-${index}`}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </DialogPrimitive.Description>

              {essay?.readNext && onNavigateNext && nextEssay ? (
                <footer className="border-t border-gray-200 pt-6">
                  <button
                    type="button"
                    onClick={() => onNavigateNext(essay.readNext!)}
                    className="text-sm font-light tracking-[0.01em] text-luxury-black underline-offset-[6px] transition-colors duration-300 hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-luxury-black/40 focus-visible:ring-offset-4 focus-visible:ring-offset-luxury-white"
                  >
                    {readNextLabel}{" "}
                    <span className="font-normal">{nextEssay.title}</span>
                  </button>
                </footer>
              ) : null}
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default JournalModal;
