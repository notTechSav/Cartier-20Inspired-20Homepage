export default function Rates() {
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
          gap: 40px;
          list-style: none;
        }
        
        .nav-links a {
          color: #fff;
          text-decoration: none;
          font-size: 0.9rem;
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
        
        h2 {
          font-size: 1.8rem;
          font-weight: 200;
          margin: 3rem 0 1rem;
        }
        
        p {
          font-size: 1.1rem;
          line-height: 1.8;
          opacity: 0.9;
          margin-bottom: 1.5rem;
        }
        
        .rate-section {
          margin: 3rem 0;
          padding: 2rem;
          border: 1px solid rgba(255,255,255,0.1);
        }
        
        .rate-item {
          display: flex;
          justify-content: space-between;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        
        .rate-item:last-child {
          border-bottom: none;
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
      
      <div className="container">
        <h1>Rates</h1>
        <p>Every figure on this page exists to protect one idea: you never have to explain yourself twice.</p>
        
        <div className="rate-section">
          <h2>New Clients</h2>
          <div className="rate-item">
            <span>Overnight (up to 14 hours)</span>
            <span>$25,000</span>
          </div>
          <div className="rate-item">
            <span>24 Hours</span>
            <span>$45,000</span>
          </div>
          <div className="rate-item">
            <span>48 Hours</span>
            <span>$75,000</span>
          </div>
        </div>
        
        <div className="rate-section">
          <h2>Established Clients</h2>
          <div className="rate-item">
            <span>Overnight (up to 14 hours)</span>
            <span>$28,000</span>
          </div>
          <div className="rate-item">
            <span>24 Hours</span>
            <span>$50,000</span>
          </div>
          <div className="rate-item">
            <span>48 Hours</span>
            <span>$80,000</span>
          </div>
        </div>
        
        <div className="rate-section">
          <h2>Strategic Partnerships</h2>
          <div className="rate-item">
            <span>Annual Retainer</span>
            <span>$240,000</span>
          </div>
        </div>
        
        <p style={{ marginTop: '3rem', fontStyle: 'italic' }}>
          I don't sell time. I reserve attention, continuity, and discretion for the few who understand their value.
        </p>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  return { props: {} };
}
