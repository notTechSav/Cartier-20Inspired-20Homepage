import type { Metadata } from "next";
import "./home.css";

export const metadata: Metadata = {
  title: "Sacramento Escorts | Katherine Taylor | High-End Companionship",
  description: "Professional escort services in Sacramento and San Francisco. Discreet, elegant companionship for discerning clients. Available for upscale encounters.",
  keywords: "escorts near me, Sacramento escort, Sac escort, California escorts, California escort, escorting, Katherine Taylor",
  openGraph: {
    title: "Sacramento Escorts | Katherine Taylor | Luxury Companionship",
    description: "Professional escort services in Sacramento and San Francisco. Discreet, elegant companionship.",
    url: "https://katherinetaylorescort.com",
    siteName: "Katherine Taylor Escort",
    images: [
      {
        url: "https://katherinetaylorescort.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Katherine Taylor - Luxury Escort Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sacramento Escorts | Katherine Taylor",
    description: "Professional escort services in Sacramento and San Francisco",
    images: ["https://katherinetaylorescort.com/og-image.jpg"],
    creator: "@thekatherineexp",
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
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Katherine Taylor",
    url: "https://katherinetaylorescort.com",
    description: "Professional escort services in Sacramento and San Francisco. Discreet, elegant companionship.",
    image: "https://katherinetaylorescort.com/og-image.jpg",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1614 18th St",
      addressLocality: "Sacramento",
      addressRegion: "CA",
      postalCode: "95811",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Sacramento" },
      { "@type": "City", name: "San Francisco" },
    ],
    sameAs: [
      "https://instagram.com/katherineunscripted",
      "https://twitter.com/thekatherineexp",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="luxury-container">
        <div className="snap-container">
          {/* Section 1: Hero */}
          <section className="snap-section hero-section">
            <div className="hero-content">
              <h1 className="hero-title">Katherine Taylor</h1>
              <p className="hero-subtitle">Sacramento Escorts | San Francisco</p>
              <p className="hero-tagline">Quiet Authority. Intentional Scarcity.</p>
            </div>
          </section>

          {/* Section 2: About */}
          <section className="snap-section content-section">
            <div className="content-wrapper">
              <div className="image-container">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2Fbd093f662cb045d19868b4b86fde26e4?format=webp&width=1600"
                  alt="SF Escorts - Katherine Taylor"
                  loading="lazy"
                />
              </div>
              <div className="text-content">
                <h2>SF Escorts | Framed Side-By-Side</h2>
                <p>Every frame captured with intention—curated moments that reveal artistry, confidence, and chemistry in equal measure.</p>
              </div>
            </div>
          </section>

          {/* Section 3: Gallery */}
          <section className="snap-section content-section">
            <div className="content-wrapper">
              <div className="image-container">
                <img
                  src="/rose-hero.png"
                  alt="Private Collections - Sacramento Escort Services"
                  loading="lazy"
                />
              </div>
              <div className="text-content">
                <h2>Private Collections</h2>
                <p>Intimate documentation from Northern California to Los Angeles — three collections, three moments in time.</p>
              </div>
            </div>
          </section>

          {/* Section 4: Rates Video */}
          <section className="snap-section video-section">
            <div className="video-wrapper">
              <video
                className="background-video"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/videos/luxury-experience.mp4" type="video/mp4" />
              </video>
              <div className="video-overlay">
                <h2>Investment</h2>
                <p>Curated experiences starting at $1,500</p>
              </div>
            </div>
          </section>

          {/* Section 5: FAQ */}
          <section className="snap-section content-section">
            <div className="faq-wrapper">
              <h2>Frequently Asked Questions</h2>
              <p className="section-subtitle">After more than a decade in this practice, I answer what quick searches never cover.</p>
              <div className="faq-grid">
                <details className="faq-item">
                  <summary>How do I book an appointment?</summary>
                  <p>Initial inquiries are made through our secure form. Include your preferred dates, duration, and a brief introduction.</p>
                </details>
                <details className="faq-item">
                  <summary>What areas do you serve?</summary>
                  <p>Primary service areas include Sacramento and San Francisco, with availability for travel arrangements.</p>
                </details>
                <details className="faq-item">
                  <summary>What is your screening process?</summary>
                  <p>All new clients undergo a discrete verification process for mutual safety and comfort.</p>
                </details>
              </div>
            </div>
          </section>

          {/* Section 6: Journal */}
          <section className="snap-section content-section">
            <div className="content-wrapper">
              <div className="image-container">
                <img
                  src="https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&h=500&fit=crop"
                  alt="Journal - Luxury Escort Insights"
                  loading="lazy"
                />
              </div>
              <div className="text-content">
                <h2>Journal</h2>
                <p>Insights, stories, and perspectives on companionship, luxury, and the art of connection.</p>
              </div>
            </div>
          </section>

          {/* Section 7: Gifts */}
          <section className="snap-section content-section">
            <div className="content-wrapper">
              <div className="image-container">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2Fbd093f662cb045d19868b4b86fde26e4?format=webp&width=1600"
                  alt="Luxury gifts for escorts"
                  loading="lazy"
                />
              </div>
              <div className="text-content">
                <h2>Curated Gifts & Experiences</h2>
                <p>Thoughtfully selected gifts and experiences designed for those who appreciate the finest details.</p>
              </div>
            </div>
          </section>

          {/* Section 8: Contact Video */}
          <section className="snap-section video-section">
            <div className="video-wrapper">
              <video
                className="background-video"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/videos/contact.mp4" type="video/mp4" />
              </video>
              <div className="video-overlay">
                <h2>Begin Your Experience</h2>
                <a href="/inquire" className="cta-button">Inquire</a>
              </div>
            </div>
          </section>

          {/* Section 9: Footer */}
          <section className="snap-section footer-section">
            <footer className="luxury-footer">
              <div className="footer-content">
                <h3>Katherine Taylor</h3>
                <p>Sacramento & San Francisco</p>
                <nav className="footer-nav">
                  <a href="/about">About</a>
                  <a href="/gallery">Gallery</a>
                  <a href="/rates">Rates</a>
                  <a href="/faq">FAQ</a>
                  <a href="/journal">Journal</a>
                  <a href="/inquire">Inquire</a>
                </nav>
                <p className="copyright">© 2024 Katherine Taylor. All rights reserved.</p>
              </div>
            </footer>
          </section>
        </div>
      </main>
    </>
  );
}