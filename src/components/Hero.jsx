import React from 'react'

const Hero = () => {
  return (
    <section className="hero-centered premium-grain">
      <div className="container hero-container">
        <div className="hero-content reveal">
          <span className="hero-tagline">Strategy for Leaders. Growth for Campaigns. Impact for the Nation</span>
          <h1 className="hero-title">
            Human-centric technology <br />
            for your <span className="highlight">movement</span>
          </h1>
          <p className="hero-description">
            Empower your leadership with a modern digital framework. We synchronize high-level strategy with precision-engineered tools to build, engage, and mobilize your community.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Start a free trial</a>
            <a href="#services" className="btn-secondary">Book a demo</a>
          </div>
        </div>

      </div>

      <style>{`
        .hero-centered {
          background-color: var(--white);
          padding: 160px 0 160px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-content {
          max-width: 900px;
          margin: 0 auto;
          z-index: 10;
        }

        .hero-tagline {
          display: block;
          color: var(--primary);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-size: 0.8125rem;
          margin-bottom: 24px;
        }

        .hero-title {
          font-size: clamp(2.75rem, 6vw, 4.25rem);
          line-height: 1.15;
          margin-bottom: 24px;
          color: var(--text);
          letter-spacing: -0.04em;
          font-weight: 800;
        }

        .highlight {
          color: var(--primary);
          background: linear-gradient(120deg, var(--primary) 0%, var(--secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-description {
          font-size: 1.125rem;
          color: var(--text-muted);
          margin: 4px auto 48px;
          max-width: 700px;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 20px;
          justify-content: center;
        }

        .btn-secondary {
          padding: 16px 36px;
          border-radius: var(--radius);
          border: 1px solid var(--border);
          text-decoration: none;
          color: var(--text);
          font-weight: 700;
          transition: var(--transition);
        }

        .btn-secondary:hover {
          background-color: var(--text);
          color: var(--white);
          border-color: var(--text);
        }

        /* Centered Visual Composition */
        .hero-visual-center {
          width: 100%;
          max-width: 1000px;
          margin-top: 20px;
          position: relative;
        }

        .visual-composition {
          position: relative;
          width: 100%;
          height: auto;
          display: flex; 
          justify-content: center;
        }

        .composition-main {
          width: 100%;
          height: 480px;
          object-fit: cover;
          border-radius: 32px;
          box-shadow: 0 40px 80px rgba(0,0,0,0.08);
          position: relative;
          z-index: 2;
        }

        .composition-accessory-1 {
          position: absolute;
          top: -20px;
          left: -20px;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, var(--primary) 0%, transparent 70%);
          opacity: 0.08;
          z-index: 1;
          filter: blur(20px);
        }

        .composition-accessory-2 {
          position: absolute;
          bottom: -20px;
          right: -20px;
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, var(--secondary) 0%, transparent 70%);
          opacity: 0.08;
          z-index: 1;
          filter: blur(30px);
        }

        .floating-metric {
          position: absolute;
          bottom: 30px;
          right: 30px;
          background: white;
          padding: 14px 24px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.06);
          z-index: 5;
          border: 1px solid var(--border);
        }

        .metric-text {
          font-weight: 800;
          font-size: 0.8125rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text);
        }

        @media (max-width: 768px) {
          .hero-centered { padding-top: 120px; }
          .hero-title { font-size: 2.5rem; }
          .hero-description { font-size: 1rem; }
          .composition-main { height: 300px; }
          .hero-actions { flex-direction: column; }
        }
      `}</style>
    </section>
  )
}

export default Hero
