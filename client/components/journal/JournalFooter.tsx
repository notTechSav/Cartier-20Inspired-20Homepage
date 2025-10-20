import { memo } from "react";

interface JournalFooterLink {
  href: string;
  text: string;
}

interface JournalFooterProps {
  intro: string;
  links: JournalFooterLink[];
}

const JournalFooter = memo(({ intro, links }: JournalFooterProps) => {
  return (
    <footer className="border-t border-gray-200 bg-luxury-white px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-[620px] space-y-4 text-left">
        <p className="text-[14px] font-light leading-[1.7] text-gray-600">
          {intro}
        </p>
        <nav className="flex flex-wrap gap-3 text-[14px] font-light text-luxury-black">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="underline-offset-[4px] transition-colors duration-300 hover:text-gray-600 hover:underline"
            >
              {link.text}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
});

JournalFooter.displayName = "JournalFooter";

export default JournalFooter;
