import React from 'react'

const CTA = () => {


  return (
    <section id="contact" className="contact-section premium-grain">
      <div className="container">
        <div className="contact-grid reveal">
          <div className="contact-info">
            <h2 className="section-head text-blue">Ready to Command?</h2>
            <p className="lead-text text-black opacity-70">
              Let's architect your institutional dominance.
            </p>
            <div className="cta-btns">
              <a href="#contact" className="btn btn-black">SECURE THE EDGE</a>
              <a href="#services" className="btn btn-outline-black" style={{ borderColor: 'var(--brand-orange)' }}>EXPLORE PROTOCOLS</a>
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
                  <option value="" disabled selected>SELECT SERVICE</option>
                  <option>CAMPAIGN STRATEGY</option>
                  <option>SOCIAL MEDIA MANAGEMENT</option>
                  <option>LEADERSHIP BRANDING</option>
                  <option>CONSTITUENCY STRATEGY</option>
                  <option>DIGITAL ADVERTISING</option>
                  <option>CONTENT CREATION</option>
                  <option>BUSINESS MARKETING</option>
                  <option>24/7 STRATEGIC SUPPORT</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="PROJECT MESSAGE" rows="4" required></textarea>
              </div>
              <button type="submit" className="submit-btn uppercase">Initiate Strategy <span className="arrow">→</span></button>
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
