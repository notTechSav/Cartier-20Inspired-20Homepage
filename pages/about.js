export default function About() {
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
          background: #fafaf9;
          color: #1a1a1a;
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
          color: #fff;
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
        
        .hero-section {
          position: relative;
          height: 60vh;
          min-height: 400px;
          overflow: hidden;
        }
        
        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.7);
        }
        
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6));
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .hero-content {
          text-align: center;
          color: #fff;
          max-width: 800px;
          padding: 0 20px;
        }
        
        .hero-title {
          font-size: 3rem;
          font-weight: 200;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
        }
        
        .hero-subtitle {
          font-size: 1.1rem;
          font-weight: 300;
          opacity: 0.9;
          line-height: 1.6;
        }
        
        .container {
          max-width: 680px;
          margin: 0 auto;
          padding: 60px 20px;
        }
        
        .intro-text {
          font-size: 1.1rem;
          line-height: 1.9;
          color: #1a1a1a;
          margin-bottom: 3rem;
        }
        
        .divider {
          display: flex;
          justify-content: center;
          margin: 4rem 0;
        }
        
        .divider-line {
          height: 96px;
          width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(139,115,85,0.6), transparent);
          opacity: 0.4;
        }
        
        .content-section {
          margin-bottom: 3rem;
        }
        
        .content-section p {
          margin-bottom: 1.5rem;
          font-size: 1rem;
          line-height: 1.8;
          color: #4a4a4a;
        }
        
        .image-container {
          position: relative;
          margin: 2rem 0;
          border-radius: 4px;
          overflow: hidden;
          aspect-ratio: 16/9;
        }
        
        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
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
      
      <div className="hero-section">
        <img 
          src="https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2F544eebd3dfb24d86b1212878113625c0?format=webp&width=1600"
          alt="Sunlit doorway opening onto herringbone floors beside linen curtains"
          className="hero-image"
        />
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">About Me</h1>
            <p className="hero-subtitle">
              The conversation never resets. I carry forward your context—professional, personal, 
              and everything unsaid—so we move without rehearsal.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container">
        <p className="intro-text">
          The conversation never resets. I carry forward everything—your
          M&amp;A timeline, your board anxieties, your daughter's college
          decision, the trip to Patagonia you've been planning. Not because I
          take notes, but because I've built a decade of pattern libraries
          that let me read what you don't say.
        </p>
        
        <div className="divider">
          <span className="divider-line"></span>
        </div>
        
        <div className="content-section">
          <p>
            A client once sent two lines: in-suite only, three hours, no
            celebrity talk. Most people would see red flags. I saw the
            date—Gateway Conference, same week last year at the Four Seasons.
            I saw the precision—three hours meant no dinner break. I saw the
            subtext—he'd had a bad experience and wanted efficiency, privacy,
            and a conversation with substance. I arrived discreetly at seven,
            no instructions needed. That's what institutional memory looks
            like when it's in practice.
          </p>
          
          <div className="image-container">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2Fc52c5d671db044f38e0442b59a54c778?format=webp&width=1200"
              alt="Hardcover journal with pencil and card in warm window light"
              loading="lazy"
            />
          </div>
          
          <p>
            My work sits at the intersection of strategic counsel and personal
            continuity. Half of what I do is high-level thinking—pattern
            recognition, operational clarity, risk sorting. The other half is
            presence—listening until I can hear the sentence you didn't
            finish. The outcome is relief: you don't have to explain yourself
            to be understood.
          </p>
          
          <p>
            I keep a small roster so every relationship stays alive in my
            head. Each engagement builds on the last; by the third, we're
            operating at full depth. Decisions move faster, and the
            conversations reach a level most people never get to have.
          </p>
          
          <p>
            I work with C-suite executives, IPO founders, and family-office
            principals who already have brilliant advisors but no one who
            remembers the whole picture—the professional, the personal, and
            the quiet space in between. That's the gap I fill.
          </p>
          
          <p>
            I don't advertise availability because capacity is limited by
            design. When I reach twenty active partnerships, I raise rates
            rather than add more names. If continuity matters to you, reach
            out before the next review window.
          </p>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  return { props: {} };
}
