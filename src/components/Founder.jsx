import React from 'react'

const Founder = () => {
  return (
    <section id="founder" className="founder-light">
      <div className="container">
        <div className="founder-layout reveal">
          <div className="founder-img-area">
            <div className="img-frame">
              <img src="/assets/founder_headshot.png" alt="Founder" className="f-img" />
              <div className="f-badge">
                <span className="b-icon">💡</span>
                <div className="b-text">
                  <strong>Strategist</strong>
                  <span>Growth Mindset</span>
                </div>
              </div>
            </div>
          </div>
          <div className="founder-text-area">
            <span className="section-tag">The Leadership</span>
            <h2 className="section-title">Led by the Founder</h2>
            <div className="founder-bio">
              <p>
                A passionate political strategist and digital marketing professional focused on building strong political communication and impactful campaign strategies.
              </p>
              <p>
                With a deep understanding of digital platforms and ground-level dynamics, the Founder works to help leaders connect with people, strengthen their public image, and create meaningful political impact.
              </p>
            </div>
            <div className="founder-socials">
              <a href="#" className="s-link">LinkedIn</a>
              <a href="#" className="s-link">Twitter</a>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .founder-light {
          background-color: var(--white);
        }
        .founder-layout {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 80px;
          align-items: center;
        }
        .img-frame {
          position: relative;
        }
        .f-img {
          width: 100%;
          border-radius: 24px;
          box-shadow: var(--shadow-md);
        }
        .f-badge {
          position: absolute;
          bottom: -20px;
          right: -20px;
          background: white;
          padding: 16px 24px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border: 1px solid var(--border);
        }
        .f-badge .b-icon { font-size: 1.5rem; }
        .b-text { display: flex; flex-direction: column; }
        .b-text strong { font-size: 1rem; color: var(--text); }
        .b-text span { font-size: 0.75rem; color: var(--text-muted); }

        .founder-bio p {
          font-size: 1.25rem;
          line-height: 1.6;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }
        .founder-socials {
          display: flex;
          gap: 30px;
          margin-top: 3rem;
        }
        .s-link {
          text-decoration: none;
          color: var(--text);
          font-weight: 700;
          font-size: 0.9375rem;
          transition: var(--transition);
        }
        .s-link:hover { color: var(--primary); }
        @media (max-width: 992px) {
          .founder-layout { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}

export default Founder
