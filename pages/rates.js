export default function Rates() {
  const [isRevealed, setIsRevealed] = React.useState(false);
  
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
        
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 120px 20px 60px;
        }
        
        h1 {
          font-size: 3rem;
          font-weight: 200;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
        }
        
        h2 {
          font-size: 2.2rem;
          font-weight: 200;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
        }
        
        .subtitle {
          font-size: 1.1rem;
          font-weight: 300;
          color: #666;
          margin-bottom: 3rem;
          line-height: 1.6;
        }
        
        .reveal-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 32px;
          background: transparent;
          border: 1px solid #333;
          color: #333;
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: all 0.3s;
          margin: 2rem 0;
        }
        
        .reveal-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.08);
        }
        
        .tier-section {
          padding: 60px 0;
          border-top: 1px solid #e0e0e0;
        }
        
        .tier-label {
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          color: #999;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        
        .rate-item {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding: 16px 0;
          border-bottom: 1px solid #e0e0e0;
        }
        
        .rate-name {
          font-size: 1rem;
          color: #666;
        }
        
        .rate-price {
          font-size: 1.1rem;
          color: #1a1a1a;
        }
        
        .description {
          margin-top: 2rem;
          font-size: 1rem;
          line-height: 1.8;
          color: #666;
        }
        
        .chevron {
          display: inline-block;
          transition: transform 0.3s;
        }
        
        .chevron.rotated {
          transform: rotate(180deg);
        }
        
        .expandable-content {
          overflow: hidden;
          transition: all 0.7s ease-in-out;
        }
        
        .bg-gray {
          background: #f8f8f7;
        }
        
        .footer-section {
          padding: 60px 20px;
          text-align: center;
          border-top: 1px solid #e0e0e0;
        }
        
        .footer-text {
          font-size: 1.3rem;
          font-weight: 200;
          line-height: 1.5;
          color: #333;
          margin-bottom: 8px;
        }
        
        .footer-subtext {
          font-size: 1.2rem;
          font-weight: 200;
          color: #666;
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
        <h1>Rates</h1>
        <p className="subtitle">
          Every figure on this page exists to protect one idea: you never have to explain yourself twice.
        </p>
        
        <div style={{textAlign: 'center', marginTop: '3rem'}}>
          <p className="description" style={{maxWidth: '600px', margin: '0 auto 2rem'}}>
            My work is cumulative, not transactional. Each engagement carries
            forward the full history of your context—professional, personal,
            logistical—so nothing resets.
          </p>
          <p className="description" style={{maxWidth: '600px', margin: '0 auto 3rem'}}>
            The premium reflects continuity, discretion, and the scarcity
            discipline required to deliver them without compromise.
          </p>
          
          <button 
            className="reveal-button"
            onClick={() => setIsRevealed(!isRevealed)}
          >
            <span>{isRevealed ? 'CONCEAL STRUCTURE' : 'SHOW CURRENT STRUCTURE'}</span>
            <span className={isRevealed ? 'chevron rotated' : 'chevron'}>▼</span>
          </button>
        </div>
        
        <div className={`expandable-content`} style={{
          maxHeight: isRevealed ? '20000px' : '0',
          opacity: isRevealed ? 1 : 0
        }}>
          {/* Tier One */}
          <section className="tier-section">
            <p className="tier-label">TIER ONE</p>
            <h2>New Clients</h2>
            <p style={{fontStyle: 'italic', color: '#666', marginBottom: '2rem'}}>
              For first meetings and compatibility evaluations.
            </p>
            
            <div className="rate-item">
              <span className="rate-name">Overnight (up to 14 hours)</span>
              <span className="rate-price">$25,000</span>
            </div>
            <div className="rate-item">
              <span className="rate-name">24 Hours</span>
              <span className="rate-price">$45,000</span>
            </div>
            <div className="rate-item">
              <span className="rate-name">48 Hours</span>
              <span className="rate-price">$75,000</span>
            </div>
            
            <p className="description">
              At this stage, I'm mapping how you think—your cadence, your
              thresholds, the specific decisions that keep you awake. These
              hours are as much reconnaissance as experience.
            </p>
            <p style={{fontStyle: 'italic', fontSize: '0.9rem', color: '#666', marginTop: '1rem'}}>
              New partnerships open twice per quarter and are limited to a small
              number of invitations.
            </p>
          </section>
          
          {/* Tier Two */}
          <section className="tier-section bg-gray">
            <div style={{maxWidth: '800px', margin: '0 auto'}}>
              <p className="tier-label">TIER TWO</p>
              <h2>Established Clients</h2>
              <p style={{fontStyle: 'italic', color: '#666', marginBottom: '2rem'}}>
                For clients with at least four engagements or six months of continuity.
              </p>
              
              <div className="rate-item">
                <span className="rate-name">Overnight (up to 14 hours)</span>
                <span className="rate-price">$28,000</span>
              </div>
              <div className="rate-item">
                <span className="rate-name">24 Hours</span>
                <span className="rate-price">$50,000</span>
              </div>
              <div className="rate-item">
                <span className="rate-name">48 Hours</span>
                <span className="rate-price">$80,000</span>
              </div>
              
              <p className="description">
                By now, context is embedded. I arrive briefed on your current
                landscape. You no longer waste time reintroducing yourself. The
                conversation starts where the last one ended.
              </p>
            </div>
          </section>
          
          {/* Tier Three */}
          <section className="tier-section">
            <p className="tier-label">TIER THREE</p>
            <h2>Strategic Partnerships</h2>
            <p style={{fontStyle: 'italic', color: '#666', marginBottom: '2rem'}}>
              Annual Retainer
            </p>
            
            <div style={{fontSize: '1.5rem', marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid #ddd'}}>
              $240,000 <span style={{fontSize: '1rem', color: '#666'}}>annually</span>
            </div>
            
            <p style={{fontSize: '0.85rem', letterSpacing: '0.08em', color: '#666', marginBottom: '1rem'}}>
              INCLUDES
            </p>
            <ul style={{listStyle: 'none', marginBottom: '2rem'}}>
              <li style={{paddingLeft: '1rem', borderLeft: '2px solid #ddd', marginBottom: '0.75rem'}}>
                Four 48-hour engagements annually (priority scheduling)
              </li>
              <li style={{paddingLeft: '1rem', borderLeft: '2px solid #ddd', marginBottom: '0.75rem'}}>
                Unlimited strategic dialogue between meetings
              </li>
              <li style={{paddingLeft: '1rem', borderLeft: '2px solid #ddd', marginBottom: '0.75rem'}}>
                Anticipatory preparation for each engagement
              </li>
              <li style={{paddingLeft: '1rem', borderLeft: '2px solid #ddd', marginBottom: '0.75rem'}}>
                Discretionary outreach when developments arise
              </li>
            </ul>
            
            <p className="description">
              This tier formalizes what many of my long-term clients already
              practice. I maintain no more than twenty active partnerships at a time.
            </p>
          </section>
          
          {/* Travel */}
          <section className="tier-section bg-gray">
            <div style={{maxWidth: '800px', margin: '0 auto'}}>
              <h2>Travel</h2>
              
              <div className="rate-item">
                <span className="rate-name">Bay Area / Northern California</span>
                <span style={{fontSize: '0.9rem', color: '#666'}}>No fee.</span>
              </div>
              <div className="rate-item">
                <span className="rate-name">West Coast</span>
                <span style={{fontSize: '0.9rem', color: '#666'}}>Overnight $28,000 / 24 hours $50,000 + first-class travel</span>
              </div>
              <div className="rate-item">
                <span className="rate-name">National</span>
                <span style={{fontSize: '0.9rem', color: '#666'}}>24 hours $55,000 / 48 hours $80,000 + first-class travel</span>
              </div>
              <div className="rate-item" style={{borderBottom: 'none'}}>
                <span className="rate-name">International</span>
                <span style={{fontSize: '0.9rem', color: '#666'}}>By arrangement.</span>
              </div>
              
              <p style={{fontStyle: 'italic', fontSize: '0.9rem', color: '#666', marginTop: '2rem'}}>
                Discretion is embedded, not billed.
              </p>
            </div>
          </section>
          
          {/* Payment */}
          <section className="tier-section">
            <h2>Payment</h2>
            
            <p className="description">
              A 50% deposit secures preparation time; the balance is due in advance.
            </p>
            <p className="description">
              I accept bank transfer, Zelle, PayPal, Visa, and MasterCard.
            </p>
            <div style={{paddingLeft: '1rem', borderLeft: '2px solid #ddd', margin: '1rem 0'}}>
              <p style={{fontSize: '0.9rem', color: '#666'}}>
                Amex: 3% processing fee applies for transactions exceeding $10,000.
              </p>
            </div>
            <p style={{fontSize: '0.9rem', color: '#666', marginTop: '1rem'}}>
              Cancellations are non-refundable but can be rescheduled within ninety days.
            </p>
          </section>
        </div>
      </div>
      
      <div className="footer-section">
        <p className="footer-text">I don't sell time.</p>
        <p className="footer-subtext">
          I reserve attention, continuity, and discretion for the few who understand their value.
        </p>
      </div>
      
      <script dangerouslySetInnerHTML={{__html: `
        const React = { useState: function(initial) {
          let state = initial;
          return [state, function(newState) { 
            state = newState; 
            window.location.reload();
          }];
        }};
      `}} />
    </>
  );
}

export async function getServerSideProps() {
  return { props: {} };
}
