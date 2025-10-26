import type { Metadata } from "next";
import { Cormorant_Garamond, Work_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const workSans = Work_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Katherine Taylor",
    template: "%s | Katherine Taylor",
  },
  description:
    "High-end private companionship. Quiet authority, intentional scarcity, refined experiences.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
  openGraph: {
    title: "Katherine Taylor",
    description:
      "High-end private companionship. Quiet authority, intentional scarcity, refined experiences.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Katherine Taylor",
    description:
      "High-end private companionship. Quiet authority, intentional scarcity, refined experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${workSans.variable}`}
    >
      <head>
        <meta name="theme-color" content="#fafaf7" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </head>
      <body className="font-sans antialiased">
        <TooltipProvider>
          {children}
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </body>
    </html>
  );
}
