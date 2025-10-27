export default function SanFrancisco() {
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
          line-height: 1.8;
        }
        
        .nav {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(0,0,0,0.98);
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
        
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 120px 20px 60px;
        }
        
        h1 {
          font-size: 2.5rem;
          font-weight: 200;
          letter-spacing: 0.02em;
          margin-bottom: 3rem;
          line-height: 1.3;
        }
        
        h2 {
          font-size: 2rem;
          font-weight: 300;
          letter-spacing: 0.02em;
          margin: 3rem 0 1.5rem;
        }
        
        h3 {
          font-size: 1.5rem;
          font-weight: 300;
          margin: 2rem 0 1rem;
        }
        
        h4 {
          font-size: 1.2rem;
          font-weight: 400;
          margin: 1.5rem 0 0.5rem;
        }
        
        p {
          margin-bottom: 1.5rem;
          opacity: 0.9;
        }
        
        .cold-open {
          font-style: italic;
          margin-bottom: 3rem;
          padding: 2rem;
          border-left: 1px solid rgba(255,255,255,0.2);
        }
        
        .bridge {
          font-weight: 400;
          margin: 2rem 0;
        }
        
        .signature {
          text-align: right;
          font-style: italic;
          margin-top: 2rem;
        }
        
        .story-reveal {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.3);
          color: #fff;
          padding: 15px 30px;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s;
          margin: 2rem auto;
          display: block;
        }
        
        .story-reveal:hover {
          background: rgba(255,255,255,0.1);
        }
        
        .hidden {
          display: none;
        }
        
        .chapter {
          margin: 4rem 0;
        }
        
        .carrie-opening {
          font-style: italic;
          margin-bottom: 3rem;
        }
        
        .question, .observation {
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }
        
        .hint {
          opacity: 0.7;
          font-size: 0.95rem;
        }
        
        .quote {
          padding: 1.5rem;
          background: rgba(255,255,255,0.05);
          border-left: 2px solid rgba(255,255,255,0.3);
          margin: 2rem 0;
        }
        
        .location-card {
          margin: 2rem 0;
          padding: 1.5rem;
          background: rgba(255,255,255,0.03);
        }
        
        .faq {
          margin: 4rem 0;
        }
        
        .faq-item {
          margin: 2rem 0;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        
        .booking-details {
          margin: 2rem 0;
        }
        
        .booking-details ul {
          margin-left: 2rem;
          margin-bottom: 1.5rem;
        }
        
        .heart {
          font-size: 1.5rem;
          text-align: center;
          margin: 2rem 0;
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
        <h1>"San Francisco escorts" - "escorts near me" won't help you find Katherine Taylor</h1>
        
        <div className="cold-open">
          <p>
            A rush of searches: "Katherine Taylor", "Katherine Taylor Steph Curry", 
            "Katherine Taylor Warriors" - nothing. "Katherine Taylor website"? TMZ inquired. 
            "Katherine Taylor Twitter"? New York Post. Nothing. "San Francisco escorts"? 
            "Sacramento escorts"? "Bay Area escorts"? "Escorts near me"? -*googled* an Amish man 
            on his time away on a library computer. The website: "KatherineTaylorEscort.com" - gone.
          </p>
          
          <p className="bridge">
            How does someone become viral and decide to suddenly walk?
          </p>
          
          <p className="context">
            This is the story I've been meaning to tell for a long time, why I left San Francisco.
          </p>
          
          <p className="signature">-Katherine</p>
        </div>
        
        <button className="story-reveal" onClick={() => document.getElementById('full-story').classList.toggle('hidden')}>
          If you'd like to hear this story →
        </button>
        
        <div id="full-story" className="hidden love-letter">
          
          <div className="carrie-opening">
            <p className="question">
              In a city built on being seen, what happens when you choose to disappear?
            </p>
            
            <p className="observation">
              I couldn't help but wonder: when you walk away from everything at the peak—
              do you cease to exist, or finally start living?
            </p>
          </div>
          
          <section className="chapter">
            <h2>What Sacramento Couldn't Give Me</h2>
            
            <p>
              I moved back to Sacramento in December 2024 after teetering with the idea of marriage. 
              I left escorting to try to find love. A normal life, perhaps. The kind where people 
              don't Google you after a Warriors game.
            </p>
            
            <p className="hint">
              <em>(Hint—for anyone wanting to skip to the bottom, "love" I did find. Just not the 
              kind I was looking for.)</em>
            </p>
            
            <p>
              For a few months, it worked. I tried civilian dating. Went to the usual Sacramento spots 
              trying to forget what I'd left behind.
            </p>
            
            <p>
              I went to Mix Ultra Lounge on K Street hoping to find a trace of Balboa Café—the Marina 
              energy, the espresso-then-vodka progression, the back booths that served their purpose. 
              They didn't have espresso martinis.
            </p>
            
            <p>
              I went to Barwest on J Street and somehow found myself thinking about the Tenderloin. 
              The IPO founders I'd known who didn't care about appearances and chose to stay in those 
              tiny hotels anyway. The ones who called me mediocre and meant it as a compliment.
            </p>
            
            <p>
              I went to Revival at the Sawyer Hotel and remembered my favorite Sacramento couple—the ones 
              who would periodically visit me in San Francisco. We'd go to Left Door on Union and they'd 
              systematically dismantle every business idea I considered viable. I miss them.
            </p>
            
            <p>It still wasn't San Francisco.</p>
          </section>
          
          <section className="chapter">
            <h2>The Clients Who Made Me Better</h2>
            
            <p>
              The Steph Curry moment crashed my website. Not emotionally—technically. The bandwidth 
              couldn't handle the traffic from TMZ and the New York Post. Three months offline.
            </p>
            
            <p>
              I should've expected it. Nothing about that night was discreet. The problem wasn't 
              discretion—it was visibility. Wrong place, wrong photographer, wrong timing. Basketball 
              players aren't supposed to be subtle. Neither are viral moments.
            </p>
          </section>
          
          <section className="chapter">
            <h2>Service Areas Throughout the Bay</h2>
            
            <p>
              Ten years taught me geography matters. Not just which city—which neighborhood. 
              Not just which hotel—which entrance.
            </p>
            
            <h3>Elite Companion Services: Peninsula</h3>
            <p>
              Palo Alto. Sand Hill Road. Stanford. Venture capital epicenter. Clients in town for 
              pitch meetings who need someone fluent in cap tables.
            </p>
            
            <h3>Luxury Escort Services: South Bay</h3>
            <p>
              San Jose. Downtown, Santana Row, the sprawling tech hub people underestimate.
            </p>
            
            <h3>Professional Companion: East Bay</h3>
            <p>
              Oakland. Songbird, Art Murmur, the lake. Less pretension than San Francisco, more 
              authenticity.
            </p>
          </section>
          
          <section className="faq">
            <h2>Frequently Asked Questions</h2>
            
            <div className="faq-item">
              <h3>What areas of San Francisco do you serve?</h3>
              <p>
                I provide luxury companion services throughout San Francisco including Pacific Heights, 
                Nob Hill, Russian Hill, the Financial District, SoMa, Marina District, Cow Hollow, and 
                Mission District. I also serve the entire Bay Area.
              </p>
            </div>
            
            <div className="faq-item">
              <h3>What services do you offer as a San Francisco escort?</h3>
              <p>
                I offer elite companion services including dinner dates at restaurants like Gary Danko, 
                Spruce, and Quince; overnight arrangements at luxury hotels such as the Four Seasons and 
                St. Regis; weekend travel to Napa Valley and beyond.
              </p>
            </div>
          </section>
          
          <section className="booking">
            <h2>How to Book a Luxury Companion in San Francisco</h2>
            
            <p>
              As an independent, verified escort serving San Francisco's tech and finance elite, 
              I offer high-end companion services for discerning professionals who value discretion, 
              intelligence, and sophistication.
            </p>
            
            <div className="booking-details">
              <h3>Screening Required</h3>
              <ul>
                <li>LinkedIn profile or employment verification</li>
                <li>Two provider references, or verification through preferred screening service</li>
              </ul>
              
              <h3>Advance Notice</h3>
              <p>24-48 hours preferred for dinner dates and overnight arrangements.</p>
            </div>
          </section>
          
          <section className="closing">
            <p className="heart">
              <strong>I ♥ SF.</strong>
            </p>
            
            <p className="signature">-Katherine</p>
          </section>
        </div>
      </div>
      
      <script dangerouslySetInnerHTML={{__html: `
        if (typeof window !== 'undefined') {
          document.querySelector('.story-reveal')?.addEventListener('click', function() {
            document.getElementById('full-story')?.classList.toggle('hidden');
          });
        }
      `}} />
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      title: "Katherine Taylor - Elite San Francisco Escort | Luxury Companion Bay Area",
      description: "Katherine Taylor - independent luxury escort serving San Francisco's tech elite. High-end dinner dates, overnight arrangements, travel companionship. Pacific Heights, Nob Hill, Financial District. Verified, discreet, exceptional.",
      schema: {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Katherine Taylor",
        "jobTitle": "Luxury Companion",
        "description": "Elite San Francisco escort providing high-end companion services",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "San Francisco",
          "addressRegion": "CA",
          "addressCountry": "US"
        },
        "areaServed": [
          "San Francisco",
          "Bay Area",
          "Peninsula",
          "South Bay",
          "East Bay",
          "Sacramento",
          "Napa Valley",
          "Sonoma"
        ]
      }
    }
  };
}
