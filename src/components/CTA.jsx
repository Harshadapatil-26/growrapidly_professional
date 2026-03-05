import React from 'react'

const CTA = () => {
  return (
    <section id="contact" className="final-cta dark-section">
      <div className="container">
        <div className="cta-box reveal">
          <h2>Get started in 15 minutes or less</h2>
          <div className="cta-btns">
            <a href="mailto:growrapidaly@gmail.com" className="btn-cta btn-primary">growrapidaly@gmail.com</a>
            <a href="#" className="btn-cta btn-accent">Book a Demo</a>
          </div>
        </div>
      </div>
      <style>{`
        .final-cta {
          padding: 160px 0;
          background-color: var(--secondary);
          text-align: center;
        }
        .final-cta h2 {
          color: var(--white);
        }
        .cta-box h2 {
          font-size: 4rem;
          margin-bottom: 48px;
        }
        .cta-btns {
          display: flex;
          justify-content: center;
          gap: 20px;
        }
        .btn-cta {
          padding: 18px 36px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 700;
          transition: all 0.3s ease;
          display: inline-block;
        }
        .btn-cta.btn-primary {
          background-color: var(--primary);
          color: var(--white);
          box-shadow: 0 10px 20px rgba(87, 176, 0, 0.2);
        }
        .btn-cta.btn-primary:hover {
          background-color: var(--accent);
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(247, 126, 30, 0.3);
        }
        .btn-cta.btn-accent {
          background-color: var(--accent);
          color: var(--white);
          box-shadow: 0 10px 20px rgba(247, 126, 30, 0.2);
        }
        .btn-cta.btn-accent:hover {
          background-color: var(--primary);
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(87, 176, 0, 0.3);
        }
        @media (max-width: 600px) {
          .cta-box h2 { font-size: 2.5rem; }
          .cta-btns { flex-direction: column; }
        }
        @media (max-width: 480px) {
          .final-cta { padding: 100px 0; }
          .cta-box h2 { font-size: 2rem; margin-bottom: 32px; }
          .btn-cta { width: 100%; box-sizing: border-box; }
        }
      `}</style>
    </section>
  )
}

export default CTA
