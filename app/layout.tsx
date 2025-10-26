import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

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
    <html lang="en">
      <head>
        <meta name="theme-color" content="#fafaf7" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Work+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
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
