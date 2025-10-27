export default function Gifts() {
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
          margin: 2rem 0 1rem;
        }
        
        p {
          font-size: 1.1rem;
          line-height: 1.8;
          opacity: 0.9;
          margin-bottom: 1.5rem;
        }
        
        .guidance {
          margin: 3rem 0;
          padding: 2rem;
          border-left: 1px solid rgba(255,255,255,0.2);
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
        <h1>Gifts</h1>
        <p>A quiet page, by request.</p>
        
        <div className="guidance">
          <h2>On Thoughtful Gestures</h2>
          <p>I don't expect gifts. When they happen, they feel like punctuation — a quiet thank-you, a gesture that marks continuity, not transaction.</p>
          
          <p>The most meaningful ones usually reflect the texture of what we've talked about: a book that deepened a conversation, a bottle tied to a story, a small object that travels well, or an experience that creates calm.</p>
          
          <p>I don't accept extravagant or public gifts. The intention matters more than the scale, and privacy always comes first. If you're uncertain, ask — I'll answer honestly.</p>
          
          <p>The best gift, though, is time well spent. Continuity itself — the ongoing conversation, the trust that builds when you realize I remember the details you didn't need to repeat — that's the one that stays.</p>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  return { props: {} };
}
