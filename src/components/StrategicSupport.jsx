import React from 'react'

const StrategicSupport = () => {
  return (
    <section className="support-light premium-grain">
      <div className="container">
        <div className="support-box reveal">
          <div className="support-info text-left">
            <span className="section-tag">Direct Operational Pipeline</span>
            <h2 className="section-head mb-4 text-blue text-left">24/7 Strategic Support</h2>
            <p className="lead-text text-black opacity-70 text-left">
              Rapid response intelligence and operational support for when the margin for error is zero.
            </p>
            <a href="#contact" className="btn btn-black">SECURE YOUR EDGE</a>
          </div>
          <div className="support-image-container">
            <img src="/images/hero/dashboard.png" alt="24/7 Strategic Support" className="support-image" />
          </div>
        </div>
      </div>
      <style>{`
        .support-light {
          background-color: var(--light-gray);
          padding: 140px 0;
          border-top: 1px solid rgba(10, 25, 47, 0.05);
        }
        .support-box {
          background: var(--white);
          padding: 80px;
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-subtle);
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid rgba(10, 25, 47, 0.08);
          gap: 60px;
        }
        .support-info {
          max-width: 650px;
        }
        .support-info h2 {
            margin-top: 25px;
            color: var(--brand-blue);
        }
        .support-info p {
          font-size: 1.2rem;
          color: var(--brand-blue);
          opacity: 0.7;
          margin: 35px 0 45px;
          line-height: 1.7;
        }
        .support-image-container {
          flex: 1;
          max-width: 500px;
          border-radius: var(--radius-sm);
          overflow: hidden;
          border: 1px solid rgba(10, 25, 47, 0.1);
          box-shadow: var(--shadow-premium);
        }
        .support-image {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .support-box:hover .support-image {
          transform: scale(1.08);
        }
        @media (max-width: 1100px) {
          .support-box { flex-direction: column; text-align: center; padding: 60px 40px; }
          .support-info { max-width: 100%; }
          .support-image-container { margin-top: 50px; }
        }
        @media (max-width: 768px) {
          .support-box { padding: 40px 25px; }
          .support-info p { font-size: 1.1rem; }
        }
      `}</style>
    </section>
  )
}

export default StrategicSupport
