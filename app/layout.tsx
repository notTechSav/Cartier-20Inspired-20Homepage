import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Sacramento Escorts | Katherine Taylor | Luxury Companionship",
    template: "%s | Katherine Taylor Escort Services",
  },
  description: "Professional escort services in Sacramento and San Francisco. Discreet, elegant companionship for discerning clients. High-end private encounters.",
  keywords: "escorts near me, Sacramento escort, Sac escort, California escorts, California escort, escorting, Katherine Taylor",
  metadataBase: new URL("https://katherinetaylorescort.com"),
  openGraph: {
    title: "Sacramento Escorts | Katherine Taylor",
    description: "Professional escort services in Sacramento and San Francisco. Discreet, elegant companionship.",
    type: "website",
    url: "https://katherinetaylorescort.com",
    siteName: "Katherine Taylor Escort",
    images: [
      {
        url: "https://katherinetaylorescort.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@thekatherineexp",
    creator: "@thekatherineexp",
    title: "Sacramento Escorts | Katherine Taylor",
    description: "Professional escort services in Sacramento and San Francisco",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://katherinetaylorescort.com",
  },
  verification: {
    google: "google-site-verification-code",
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
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#fafafa" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}