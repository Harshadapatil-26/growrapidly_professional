import React from 'react'

const CTA = () => {


  return (
    <section id="contact" className="contact-section premium-grain">
      <div className="container">
        <div className="contact-grid reveal">
          <div className="contact-info">
            <h2 className="section-head text-blue">Ready to Grow Your Business?</h2>
            <p className="lead-text text-black opacity-70">
              Book your Free Marketing Consultation today and let's build a strategy that brings real customers to your business.
            </p>
            <div className="cta-btns">
              <a href="tel:+919270010816" className="cta-action-btn cta-btn-call">
                <span className="cta-btn-icon">📞</span>
                <span>Call Us Now</span>
              </a>
              <a href="mailto:growrapidly1@gmail.com" className="cta-action-btn cta-btn-email">
                <span className="cta-btn-icon">✉</span>
                <span>Email Us</span>
              </a>
            </div>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-label">Phone</span>
                <a href="tel:+919270010816" className="contact-value">+91 92700 10816</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <a href="mailto:growrapidly1@gmail.com" className="contact-value">growrapidly1@gmail.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Office</span>
                <span className="contact-value">Pune, Maharashtra, India</span>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper shadow-premium">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="FULL NAME" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="EMAIL ADDRESS" required />
              </div>
              <div className="form-group">
                <select required>
                  <option value="" disabled defaultValue="">SELECT SERVICE</option>
                  <option>Social Media Marketing</option>
                  <option>Lead Generation Campaigns</option>
                  <option>Local SEO</option>
                  <option>Website Design</option>
                  <option>Content & Video Marketing</option>
                  <option>Real Estate Marketing</option>
                  <option>Hospital Marketing</option>
                  <option>Restaurant Marketing</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="PROJECT MESSAGE" rows="4" required></textarea>
              </div>
              <button type="submit" className="submit-btn uppercase">Get Free Consultation <span className="arrow">→</span></button>
            </form>
          </div>
        </div>
      </div>
      <style>{`
        .contact-section {
          background-color: var(--white);
          padding: 100px 0;
          border-top: 1px solid rgba(10, 25, 47, 0.05);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        .contact-info h2 {
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
        }

        .lead-text {
          font-size: 1rem;
          line-height: 1.7;
          margin-top: 16px;
          margin-bottom: 32px;
        }

        .cta-btns {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }

        .cta-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 24px;
          border-radius: var(--radius-sm);
          font-weight: 700;
          font-size: 0.9rem;
          text-decoration: none;
          transition: var(--transition);
          white-space: nowrap;
          flex: 1;
          justify-content: center;
          min-width: 140px;
        }

        .cta-btn-call {
          background: var(--brand-black);
          color: var(--white);
          border: 2px solid var(--brand-black);
        }

        .cta-btn-call:hover {
          background: var(--brand-blue);
          border-color: var(--brand-blue);
          transform: translateY(-3px);
          box-shadow: var(--shadow-hover);
        }

        .cta-btn-email {
          background: transparent;
          color: var(--brand-black);
          border: 2px solid var(--brand-orange);
        }

        .cta-btn-email:hover {
          background: var(--brand-orange);
          color: var(--white);
          transform: translateY(-3px);
          box-shadow: var(--shadow-hover);
        }

        .cta-btn-icon {
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .contact-label {
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--brand-green);
        }

        .contact-value {
          font-size: 1rem;
          font-weight: 600;
          color: var(--brand-black);
          text-decoration: none;
        }

        .contact-value:hover {
          color: var(--brand-blue);
        }

        .contact-form-wrapper {
          background: var(--white);
          padding: 50px 40px;
          border: 1px solid rgba(10, 25, 47, 0.08);
          border-radius: var(--radius-sm);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group input, 
        .form-group select, 
        .form-group textarea {
          width: 100%;
          padding: 16px;
          border: 1.5px solid rgba(10, 25, 47, 0.2);
          background: var(--light-gray);
          font-family: var(--font-main);
          font-weight: 500;
          font-size: 0.9rem;
          transition: var(--transition);
          outline: none;
          border-radius: var(--radius-sm);
          color: var(--brand-blue);
        }

        .form-group input:focus, 
        .form-group select:focus, 
        .form-group textarea:focus {
          border-color: var(--brand-orange);
          background: var(--white);
          box-shadow: 0 0 0 4px rgba(239, 118, 27, 0.1);
        }

        .submit-btn {
          background: var(--brand-blue);
          color: var(--white);
          border: none;
          padding: 18px;
          font-weight: 700;
          font-family: var(--font-heading);
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: var(--transition);
          border-radius: var(--radius-sm);
          width: 100%;
        }

        .submit-btn:hover {
          background: var(--brand-black);
          transform: translateY(-3px);
          box-shadow: var(--shadow-hover);
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr; gap: 50px; }
          .contact-form-wrapper { padding: 36px 28px; }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .contact-section { padding: 70px 0; }
          .cta-btns { flex-direction: column; gap: 12px; }
          .cta-action-btn { flex: unset; width: 100%; min-width: unset; padding: 16px 20px; font-size: 1rem; }
          .contact-form-wrapper { padding: 28px 18px; }
          .form-group input,
          .form-group select,
          .form-group textarea { padding: 14px; font-size: 1rem; }
          .submit-btn { padding: 16px; font-size: 1rem; }
        }
      `}</style>
    </section>
  );
};

export default CTA;
