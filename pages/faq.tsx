import type { GetServerSideProps } from 'next';

export default function FAQ() {
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
          letter-spacing: 0.08em;
        }
        
        .nav-links {
          display: flex;
          gap: 30px;
          list-style: none;
        }
        
        .nav-links a {
          color: #fff;
          text-decoration: none;
          font-size: 0.85rem;
          letter-spacing: 0.02em;
          transition: opacity 0.3s;
        }
        
        .nav-links a:hover {
          opacity: 0.7;
        }
        
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 120px 20px 60px;
        }
        
        h1 {
          font-size: 2.5rem;
          font-weight: 200;
          letter-spacing: 0.02em;
          margin-bottom: 2rem;
        }
        
        .faq-item {
          margin: 2rem 0;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        
        .faq-item h3 {
          font-size: 1.2rem;
          font-weight: 300;
          margin-bottom: 1rem;
        }
        
        .faq-item p {
          opacity: 0.8;
        }
      `}</style>
      
      <nav className="nav">
        <div className="nav-inner">
          <div className="logo">KATHERINE TAYLOR</div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/journal">Journal</a></li>
            <li><a href="/gifts">Gifts</a></li>
            <li><a href="/rates">Rates</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      
      <div className="container">
        <h1>Frequently Asked Questions</h1>
        
        <div className="faq-item">
          <h3>How do I book?</h3>
          <p>Screening is required for all new clients. Please provide LinkedIn or employment verification.</p>
        </div>
        
        <div className="faq-item">
          <h3>What areas do you serve?</h3>
          <p>San Francisco, Sacramento, and the greater Bay Area including Peninsula, South Bay, and Wine Country.</p>
        </div>
        
        <div className="faq-item">
          <h3>How much notice do you need?</h3>
          <p>24-48 hours preferred for dinner dates and overnight arrangements.</p>
        </div>
        
        <div className="faq-item">
          <h3>Do you travel?</h3>
          <p>Yes, both domestically and internationally with advance arrangements.</p>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "FAQ | Katherine Taylor",
      "url": "https://katherinetaylorescort.com/faq",
      "description": "Frequently asked questions about Katherine Taylor's elite escort services in Sacramento and San Francisco.",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Katherine Taylor",
        "url": "https://katherinetaylorescort.com"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://katherinetaylorescort.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "FAQ",
            "item": "https://katherinetaylorescort.com/faq"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I book?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Screening is required for all new clients. Please provide LinkedIn or employment verification."
          }
        },
        {
          "@type": "Question",
          "name": "What areas do you serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "San Francisco, Sacramento, and the greater Bay Area including Peninsula, South Bay, and Wine Country."
          }
        },
        {
          "@type": "Question",
          "name": "How much notice do you need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "24-48 hours preferred for dinner dates and overnight arrangements."
          }
        },
        {
          "@type": "Question",
          "name": "Do you travel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, both domestically and internationally with advance arrangements."
          }
        }
      ]
    }
  ];

  return {
    props: {
      title: 'FAQ | Katherine Taylor - Sacramento & San Francisco Escort',
      description: 'Frequently asked questions about Katherine Taylor\'s elite escort services in Sacramento and San Francisco. Learn about booking, service areas, and travel arrangements.',
      canonical: 'https://katherinetaylorescort.com/faq',
      keywords: 'Sacramento escort FAQ, California escort questions, elite escort services, Bay Area companion, escort booking',
      schema
    }
  };
};
