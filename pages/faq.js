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
        
        h3 {
          font-size: 1.3rem;
          font-weight: 300;
          margin: 2rem 0 1rem;
        }
        
        p {
          font-size: 1.1rem;
          line-height: 1.8;
          opacity: 0.9;
          margin-bottom: 1.5rem;
        }
        
        .faq-item {
          margin: 2rem 0;
          padding: 2rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
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
        <h1>Frequently Asked Questions</h1>
        <p>After more than a decade in this practice, I answer what quick searches never cover.</p>
        
        <div className="faq-item">
          <h3>What is an escort?</h3>
          <p>
            Having worked as an escort for over a decade, I can tell you it's refined companionship at its finest. 
            As Katherine Taylor escort, I offer what the best SF escorts aspire to—cultured company that's elegant, 
            confidential, and beautifully timed.
          </p>
        </div>
        
        <div className="faq-item">
          <h3>What sets Katherine Taylor apart from other escorts near me?</h3>
          <p>
            In my decade-plus among San Francisco escorts and Bay Area escorts, I've cultivated something rare: 
            truly bespoke encounters. While others juggle volume, I accept only 3-4 bookings monthly. 
            Whether you're searching 'SF escort' or 'Sacramento escorts,' you'll find I'm the outlier—immaculate 
            preparation, genuine chemistry, and experiences that transcend transaction.
          </p>
        </div>
        
        <div className="faq-item">
          <h3>Is escorting legal in San Francisco and Sacramento?</h3>
          <p>
            Yes, with nuance. In my years as both a San Francisco escort and among Sacramento escorts, 
            I've learned that companionship services operate legally when focused on social accompaniment. 
            Whether you're searching 'SF escorts' or 'Sacramento escorts,' professional boundaries and 
            mutual respect keep everything above board.
          </p>
        </div>
        
        <div className="faq-item">
          <h3>Are escorts safe?</h3>
          <p>
            In my decade-plus as an SF escort, safety has been paramount. Unlike random 'escort near me' 
            encounters, established San Francisco escorts maintain thorough screening, clear boundaries, 
            and mutual respect. My process, refined over years among Bay Area escorts, ensures both 
            parties feel secure and valued.
          </p>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  return { props: {} };
}
