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
          <div className="support-image-container">
            <img src="/images/hero/dashboard.png" alt="24/7 Strategic Support" className="support-image" />
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
        .support-image-container {
          flex: 1;
          max-width: 450px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow-md);
        }
        .support-image {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .support-box:hover .support-image {
          transform: scale(1.05);
        }
        @media (max-width: 992px) {
          .support-box { flex-direction: column; text-align: center; padding: 60px 40px; }
          .support-image-container { margin-top: 40px; }
        }
        @media (max-width: 480px) {
          .support-box { padding: 40px 20px; border-radius: 20px; }
          .support-info h2 { font-size: 2rem; }
          .support-info p { font-size: 1rem; }
        }
      `}</style>
    </section>
  )
}

export default StrategicSupport
