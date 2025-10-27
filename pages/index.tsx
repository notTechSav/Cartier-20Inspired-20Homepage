import type { GetServerSideProps } from 'next';

export default function Home() {
  return (
    <>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: #000;
          color: #fff;
          line-height: 1.6;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 20px;
        }
        
        h1 {
          font-size: 2.5rem;
          font-weight: 200;
          letter-spacing: 0.02em;
          margin-bottom: 2rem;
        }
        
        .nav {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(0,0,0,0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          padding: 20px 40px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        
        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-size: 1.2rem;
          font-weight: 300;
          letter-spacing: 0.1em;
        }
        
        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
        }
        
        .nav-links a {
          color: #fff;
          text-decoration: none;
          font-weight: 300;
          font-size: 0.9rem;
          letter-spacing: 0.05em;
          transition: opacity 0.3s;
        }
        
        .nav-links a:hover {
          opacity: 0.7;
        }
        
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        
        .hero-content h1 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
        }
        
        .hero-content p {
          font-size: 1.2rem;
          font-weight: 300;
          opacity: 0.8;
        }
      `}</style>

      <nav className="nav">
        <div className="nav-inner">
          <div className="logo">KATHERINE TAYLOR</div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/san-francisco">San Francisco</a></li>
            <li><a href="/journal">Journal</a></li>
            <li><a href="/gifts">Gifts</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/rates">Rates</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      
      <div className="hero">
        <div className="hero-content">
          <h1>Katherine Taylor</h1>
          <p>Elite companion serving Sacramento and San Francisco's discerning clientele</p>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // Server-side schema injection - Google sees this on first crawl
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Katherine Taylor",
      "image": "https://katherinetaylorescort.com/og-image.jpg",
      "url": "https://katherinetaylorescort.com",
      "telephone": "+1-XXX-XXX-XXXX",
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "",
        "addressLocality": "Sacramento",
        "addressRegion": "CA",
        "postalCode": "95814",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 38.5816,
        "longitude": -121.4944
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Sacramento"
        },
        {
          "@type": "City",
          "name": "San Francisco"
        }
      ],
      "description": "Elite escort services in Sacramento and San Francisco. Discreet companionship for discerning clients."
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Katherine Taylor",
      "url": "https://katherinetaylorescort.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://katherinetaylorescort.com/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ];

  return {
    props: {
      title: 'Katherine Taylor | Sacramento & San Francisco Elite Escort',
      description: 'Elite escort services in Sacramento and San Francisco. Discreet companionship for discerning clients. Professional, confidential, and available for travel.',
      canonical: 'https://katherinetaylorescort.com',
      keywords: 'escorts near me, Sacramento escort, Sac escort, California escorts, California escort, escorting, Katherine Taylor, luxury companion, elite escort, San Francisco escort',
      schema
    }
  };
};
