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
              <a href="tel:+919270010816" className="btn btn-black">📞 Call Us Now</a>
              <a href="mailto:growrapidly1@gmail.com" className="btn btn-outline-black" style={{ borderColor: 'var(--brand-orange)' }}>✉ Email Us</a>
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
          padding: 160px 0;
          border-top: 1px solid rgba(10, 25, 47, 0.05);
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 120px;
          align-items: center;
        }
        
        .contact-subtitle {
          font-size: 1.25rem;
          margin-top: 30px;
          line-height: 1.7;
          color: var(--brand-blue);
        }

        .contact-details {
          margin-top: 40px;
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
          padding: 60px;
          border: 1px solid rgba(10, 25, 47, 0.08);
          border-radius: var(--radius-sm);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .form-group input, 
        .form-group select, 
        .form-group textarea {
          width: 100%;
          padding: 20px;
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
          box-shadow: 0 0 0 4px rgba(197, 160, 89, 0.1);
        }

        .submit-btn {
          background: var(--brand-blue);
          color: var(--white);
          border: none;
          padding: 24px;
          font-weight: 700;
          font-family: var(--font-heading);
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          transition: var(--transition);
          border-radius: var(--radius-sm);
        }

        .submit-btn:hover {
          background: var(--black);
          transform: translateY(-3px);
          box-shadow: var(--shadow-hover);
        }

        @media (max-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr; gap: 60px; }
          .contact-form-wrapper { padding: 40px 20px; }
        }
      `}</style>
    </section>
  );
};

export default CTA;
