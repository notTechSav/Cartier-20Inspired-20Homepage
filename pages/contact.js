export default function Contact() {
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
          min-height: 100vh;
        }
        
        h1 {
          font-size: 2.5rem;
          font-weight: 200;
          letter-spacing: 0.02em;
          margin-bottom: 2rem;
        }
        
        p {
          font-size: 1.1rem;
          line-height: 1.8;
          opacity: 0.9;
          margin-bottom: 1.5rem;
        }
        
        .contact-section {
          margin-top: 3rem;
        }
        
        .contact-item {
          padding: 2rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        
        .contact-item h3 {
          font-size: 1.2rem;
          font-weight: 300;
          margin-bottom: 0.5rem;
        }
        
        .contact-item p {
          opacity: 0.7;
          font-size: 0.95rem;
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
        <h1>Inquire</h1>
        <p>For serious inquiries only. Screening required for all new clients.</p>
        
        <div className="contact-section">
          <div className="contact-item">
            <h3>Screening Requirements</h3>
            <p>LinkedIn profile or employment verification required. Two provider references may be accepted as alternative.</p>
          </div>
          
          <div className="contact-item">
            <h3>Response Time</h3>
            <p>Allow 24-48 hours for response. Priority given to established clients.</p>
          </div>
          
          <div className="contact-item">
            <h3>Advance Notice</h3>
            <p>Minimum 48 hours for first meetings. 24 hours for established relationships.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  return { props: {} };
}
