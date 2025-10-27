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
        
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        
        .hero-content h1 {
          font-size: 3rem;
          font-weight: 100;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
        }
        
        .hero-content p {
          font-size: 1.1rem;
          font-weight: 300;
          opacity: 0.8;
          max-width: 600px;
          margin: 0 auto;
        }
      `}</style>
      
      <nav className="nav">
        <div className="nav-inner">
          <div className="logo">KATHERINE TAYLOR</div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/san-francisco">San Francisco</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      
      <div className="hero">
        <div className="hero-content">
          <h1>Katherine Taylor</h1>
          <p>Luxury companion serving San Francisco's discerning elite</p>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  return { props: {} };
}
