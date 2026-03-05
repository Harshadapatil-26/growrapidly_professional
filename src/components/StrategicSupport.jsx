import React from 'react'

const StrategicSupport = () => {
  return (
    <section className="support-light premium-grain">
      <div className="container">
        <div className="support-box reveal">
          <div className="support-info">
            <span className="section-tag" style={{ color: 'var(--primary)' }}>Always On • Always Strategic</span>
            <h2>24/7 Strategic Support</h2>
            <p>
              Our team provides continuous support, monitoring campaigns, managing communication, and responding quickly to digital trends and public reactions to ensure strong and consistent impact.
            </p>
            <a href="#contact" className="btn btn-primary">Secure Your Edge</a>
          </div>
          <div className="support-indicator">
            <div className="live-pulse">
              <div className="pulse-circle"></div>
              <div className="pulse-ring"></div>
            </div>
            <span className="live-text">OPERATIONAL</span>
          </div>
        </div>
      </div>
      <style>{`
        .support-light {
          background-color: var(--light-bg);
          padding: 100px 0;
        }
        .support-box {
          background: white;
          padding: 80px;
          border-radius: 32px;
          box-shadow: var(--shadow-md);
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid var(--border);
        }
        .support-info {
          max-width: 600px;
        }
        .support-info h2 {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }
        .support-info p {
          font-size: 1.25rem;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
        }
        .support-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .live-pulse {
          position: relative;
          width: 100px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .pulse-circle {
          width: 20px;
          height: 20px;
          background: var(--primary);
          border-radius: 50%;
          z-index: 2;
        }
        .pulse-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 2px solid var(--primary);
          border-radius: 50%;
          animation: pulseRing 2s infinite ease-out;
        }
        .live-text {
          font-weight: 900;
          letter-spacing: 0.2em;
          font-size: 0.75rem;
          color: var(--primary);
        }
        @keyframes pulseRing {
          0% { transform: scale(0.4); opacity: 1; }
          100% { transform: scale(1.2); opacity: 0; }
        }
        @media (max-width: 992px) {
          .support-box { flex-direction: column; text-align: center; padding: 60px 40px; }
          .support-indicator { margin-top: 40px; }
        }
      `}</style>
    </section>
  )
}

export default StrategicSupport
