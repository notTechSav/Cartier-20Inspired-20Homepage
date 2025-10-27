export default function Journal() {
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
        
        .hero {
          padding: 160px 20px 80px;
          text-align: center;
          background: linear-gradient(180deg, #fafaf9 0%, #f5f5f2 100%);
        }
        
        .hero h1 {
          font-size: 3.5rem;
          font-weight: 200;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
          color: #1a1a1a;
        }
        
        .hero-subtitle {
          font-size: 1.1rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 60px 20px;
        }
        
        .essays-grid {
          display: grid;
          gap: 60px;
        }
        
        .essay-card {
          padding: 40px;
          background: #fff;
          border: 1px solid rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .essay-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.08);
        }
        
        .essay-title {
          font-size: 2rem;
          font-weight: 300;
          margin-bottom: 1rem;
          color: #1a1a1a;
          letter-spacing: -0.01em;
        }
        
        .essay-excerpt {
          font-size: 1rem;
          line-height: 1.7;
          color: #666;
          margin-bottom: 1.5rem;
        }
        
        .essay-date {
          font-size: 0.85rem;
          color: #999;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        
        .essay-full {
          max-width: 680px;
          margin: 0 auto;
          padding: 80px 20px;
        }
        
        .essay-full h1 {
          font-size: 3rem;
          font-weight: 200;
          margin-bottom: 2rem;
          letter-spacing: -0.02em;
        }
        
        .essay-body {
          font-size: 1.1rem;
          line-height: 1.9;
          color: #333;
        }
        
        .essay-body p {
          margin-bottom: 1.5rem;
        }
        
        .back-button {
          display: inline-block;
          margin-bottom: 3rem;
          color: #666;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s;
        }
        
        .back-button:hover {
          color: #1a1a1a;
        }
        
        .read-next {
          margin-top: 4rem;
          padding-top: 3rem;
          border-top: 1px solid #e0e0e0;
        }
        
        .read-next-label {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #999;
          margin-bottom: 1rem;
        }
        
        .read-next-title {
          font-size: 1.5rem;
          font-weight: 300;
          color: #1a1a1a;
          text-decoration: none;
          display: block;
          transition: opacity 0.3s;
        }
        
        .read-next-title:hover {
          opacity: 0.7;
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
      
      <div className="hero">
        <h1>The High-End Edition</h1>
        <p className="hero-subtitle">
          Notes on presence, continuity, and the art of anticipation in luxury companionship.
        </p>
      </div>
      
      <div className="container">
        <div className="essays-grid">
          <article className="essay-card" onClick={() => window.location.hash = '#continuity-as-craft'}>
            <h2 className="essay-title">Continuity as Craft</h2>
            <p className="essay-excerpt">
              I don't begin from introductions anymore. Most of my work starts in the middle—continuing 
              a conversation we left half-finished six months ago. Continuity isn't remembering; it's architecture.
            </p>
            <time className="essay-date">October 7, 2025</time>
          </article>
          
          <article className="essay-card" onClick={() => window.location.hash = '#the-luxury-of-unsaid-things'}>
            <h2 className="essay-title">The Luxury of Unsaid Things</h2>
            <p className="essay-excerpt">
              The higher the rate, the quieter the room gets. People assume they're paying for polish; 
              they're really paying for the silence where nothing has to be explained. Silence is expensive 
              because anticipation takes work.
            </p>
            <time className="essay-date">October 7, 2025</time>
          </article>
          
          <article className="essay-card" onClick={() => window.location.hash = '#scarcity-discipline'}>
            <h2 className="essay-title">Scarcity Discipline</h2>
            <p className="essay-excerpt">
              Scarcity isn't a tactic. It's infrastructure. I keep twenty active clients because any more 
              and I'd start forgetting the rhythm of their sentences. Price is the safety valve that preserves precision.
            </p>
            <time className="essay-date">October 7, 2025</time>
          </article>
        </div>
      </div>
      
      {/* Essay: Continuity as Craft */}
      <div id="continuity-as-craft" className="essay-full" style={{display: 'none'}}>
        <a href="/journal" className="back-button">← Back to Journal</a>
        <h1>Continuity as Craft</h1>
        <div className="essay-body">
          <p>
            I don't begin from introductions anymore. Most of my work starts in the middle—continuing a 
            conversation we left half-finished six months ago. Continuity isn't remembering; it's architecture. 
            I build silent frameworks that let decisions land without translation.
          </p>
          <p>
            Over time, that structure becomes the product. A new client once asked what he was actually paying for. 
            I told him, "The first meeting is expensive because I have to build the blueprint. Every one after that 
            gets faster." They never doubt the math again.
          </p>
          <p>
            People mistake institutional memory for recall, but memory alone has no value. Continuity becomes art 
            when it turns knowledge into anticipation. I can tell from a client's punctuation when he's under pressure. 
            Their silence tells me what their schedule wouldn't dare admit.
          </p>
          <p>
            The easiest way to lose that craft is to scale. Once you widen the roster, you start to forget the 
            temperature of each relationship. You start needing notes. Notes are the death of intuition. I learned 
            that from watching partners at a law firm re-introduce themselves to the same client annually.
          </p>
          <p>
            My favorite moments happen in silence. A client will start to brief me, then pause, realizing I already 
            know what he's about to say. That pause is worth more than any testimonial. It's the sound of efficiency 
            replacing ceremony.
          </p>
          <p>
            Continuity isn't sentimentality. It's operational mastery disguised as empathy. It saves two or three 
            hours of re-establishing context every engagement. It's the difference between someone performing interest 
            and someone fluent in your private vocabulary.
          </p>
          <p>
            The mistake is thinking continuity just happens. It's a discipline—preparation, repetition, review. 
            I reread old threads before every meeting the way a litigator studies precedent. The patterns compound; 
            decisions shorten.
          </p>
          <p>
            I don't sell first meetings anymore. I sell the third one—the one that moves at full depth because we 
            no longer waste energy on translation. Continuity is why my rates rise and my volume doesn't. The product 
            is certainty that you'll be heard before you speak.
          </p>
          <p>
            After a decade of practice, I've learned that mastery isn't variety; it's precision repeated until it 
            becomes intuition. Continuity is my medium. It's the invisible structure that holds everything else upright.
          </p>
          <p>
            The conversation never resets. It just gets quieter, faster, and closer to truth.
          </p>
        </div>
        <div className="read-next">
          <p className="read-next-label">Read Next</p>
          <a href="#the-luxury-of-unsaid-things" className="read-next-title">The Luxury of Unsaid Things</a>
        </div>
      </div>
      
      {/* Essay: The Luxury of Unsaid Things */}
      <div id="the-luxury-of-unsaid-things" className="essay-full" style={{display: 'none'}}>
        <a href="/journal" className="back-button">← Back to Journal</a>
        <h1>The Luxury of Unsaid Things</h1>
        <div className="essay-body">
          <p>
            The higher the rate, the quieter the room gets. People assume they're paying for polish; 
            they're really paying for the silence where nothing has to be explained.
          </p>
          <p>
            Silence is expensive because anticipation takes work. You can't read subtext until you've spent 
            years reading people. I built that fluency the slow way—thousands of hours noticing what tone, 
            pacing, or phrasing signals worry.
          </p>
          <p>
            When someone new arrives, they often test the space. They fill the first few minutes with disclaimers 
            or self-editing, the reflexes of people who are constantly managed or recorded. Then they stop. 
            The moment they realize I'm already calibrated, their breathing changes.
          </p>
          <p>
            That stillness isn't emotional theatre; it's operational efficiency. In rooms where the stakes are high, 
            the ability to understand someone without translation shortens every decision loop. You get to clarity 
            faster because you're not wasting time interpreting.
          </p>
          <p>
            Luxury brands have known this for decades. Aman remembers your preferred pillow and the exact hour you 
            like to swim. Ritz-Carlton briefs the staff ten days before arrival so you never have to repeat yourself. 
            The result is relief disguised as service.
          </p>
          <p>
            At this level, conversation itself becomes a form of craftsmanship. What's left unsaid carries the weight. 
            I don't need a client to describe his exhaustion from a merger or the tension in a board seat; 
            it's there in cadence, in the pauses between sentences.
          </p>
          <p>
            The irony of ultra-premium work is that you can only sustain it through restraint. Every detail is 
            deliberate—the tempo, the brevity, the fact that I never ask questions I already know the answers to. 
            The quiet signals are the proof of competence.
          </p>
          <p>
            When a client leaves, I don't follow up with thanks or reminders. The silence after is part of the service. 
            He knows I'll remember when the next decision point comes; he doesn't need reassurance. The trust is in 
            the continuity of quiet.
          </p>
          <p>
            What most people call luxury is ornament—excess applied to simplicity. The real luxury is conservation: 
            saying less, promising less, remembering more. It's the calm that only exists when two people know the 
            conversation is already underway.
          </p>
          <p>
            Silence, at this level, isn't emptiness. It's the most articulate proof of understanding there is.
          </p>
        </div>
        <div className="read-next">
          <p className="read-next-label">Read Next</p>
          <a href="#scarcity-discipline" className="read-next-title">Scarcity Discipline</a>
        </div>
      </div>
      
      {/* Essay: Scarcity Discipline */}
      <div id="scarcity-discipline" className="essay-full" style={{display: 'none'}}>
        <a href="/journal" className="back-button">← Back to Journal</a>
        <h1>Scarcity Discipline</h1>
        <div className="essay-body">
          <p>
            Scarcity isn't a tactic. It's infrastructure. I keep twenty active clients because any more and 
            I'd start forgetting the rhythm of their sentences. At this level, forgetting isn't forgivable—it's 
            the fracture that breaks trust.
          </p>
          <p>
            People think raising rates is about ambition. It isn't. It's about preservation. When demand rises, 
            I have two choices: expand or refine. Expansion would mean delegation, assistants, notes, performance. 
            Refinement means deeper recall.
          </p>
          <p>
            Scarcity protects continuity. It keeps institutional memory alive by keeping it human. When I know 
            exactly how many conversations I can hold in my head at once, my service stops being reactive. 
            I can prepare in advance because I already know the context.
          </p>
          <p>
            Every industry that survives at the top practices some form of this. Hermès caps production because 
            mastery can't be scaled. Private banks limit portfolios so their relationship managers remember family 
            histories without prompting.
          </p>
          <p>
            I learned the same rule by accident. Early in my career I took everyone who asked. The work was constant 
            but shallow—too many names, too much reset. I was busy but forgettable. Then I started saying no. 
            What remained was depth.
          </p>
          <p>
            Scarcity requires nerve. Turning people away in a culture built on volume feels wrong at first. 
            But when you realize that attention is the true limited commodity, everything else reorders itself. 
            You start guarding the resource instead of your calendar.
          </p>
          <p>
            Now, when someone new reaches out, I don't think about whether I can fit them in. I think about which 
            existing client's cadence I'd have to sacrifice to make room. That arithmetic keeps me honest. 
            It's why my rates rise, and my availability doesn't.
          </p>
          <p>
            This is why I don't advertise availability, and why "fully booked" isn't posturing. It's an ecosystem rule. 
            If continuity is the craft, scarcity is the workshop that keeps the craft possible.
          </p>
          <p>
            The older I get, the clearer the equation becomes: attention divided is memory diluted. And without memory, 
            there is no discretion, no foresight, no real luxury.
          </p>
          <p>
            I don't sell more time. I protect the conditions that make the time worth anything at all.
          </p>
        </div>
        <div className="read-next">
          <p className="read-next-label">Read Next</p>
          <a href="#continuity-as-craft" className="read-next-title">Continuity as Craft</a>
        </div>
      </div>
      
      <script dangerouslySetInnerHTML={{__html: `
        if (typeof window !== 'undefined') {
          // Simple hash-based navigation for essays
          function showEssay() {
            const hash = window.location.hash;
            const essays = document.querySelectorAll('.essay-full');
            const grid = document.querySelector('.essays-grid');
            const hero = document.querySelector('.hero');
            
            essays.forEach(essay => essay.style.display = 'none');
            
            if (hash && hash !== '#') {
              const essay = document.querySelector(hash);
              if (essay) {
                essay.style.display = 'block';
                if (grid) grid.style.display = 'none';
                if (hero) hero.style.display = 'none';
              }
            } else {
              if (grid) grid.style.display = 'grid';
              if (hero) hero.style.display = 'block';
            }
          }
          
          window.addEventListener('hashchange', showEssay);
          window.addEventListener('load', showEssay);
        }
      `}} />
    </>
  );
}

export async function getServerSideProps() {
  return { 
    props: {
      title: "The High-End Edition — Katherine Taylor Escort",
      description: "Notes on presence, continuity, and scarcity in luxury companionship.",
    }
  };
}
