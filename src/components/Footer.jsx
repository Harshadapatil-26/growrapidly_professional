import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Footer = () => {
  return (
    <footer className="footer bg-white premium-grain">
      <div className="container">
        <div className="footer-main">
          <div className="footer-top-grid">
            <div className="footer-brand-col">
              <div className="f-logo">
                <img src={logo} alt="GROWRAPIDLY" />
                <span className="text-black">GROWRAPIDLY</span>
              </div>
              <p className="f-mission opacity-70 text-black">
                Architecting institutional dominance through precision narrative deployment,
                high-frequency digital engagement, and data-driven sentiment analysis.
                We deliver signal in a world of noise.
              </p>
            </div>

            <div className="footer-links-grid">
              <div className="f-col">
                <span className="col-tag text-emerald">Strategize</span>
                <a href="/#about">Mindset</a>
                <Link to="/services">Intelligence</Link>
                <a href="/#strategy">Blueprint</a>
                <a href="/#impact">Impact</a>
              </div>
              <div className="f-col">
                <span className="col-tag text-navy">Connect</span>
                <a href="mailto:growrapidly1@gmail.com">Gmail</a>
                <a href="https://www.instagram.com/growrapidly_/" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="#">LinkedIn</a>
                <a href="#">Twitter</a>
              </div>
              <div className="f-col">
                <span className="col-tag text-gold">Contact</span>
                <a href="mailto:growrapidly1@gmail.com" className="contact-link">growrapidly1@gmail.com</a>
                <p className="contact-text opacity-60">Available 24/7 For Strategic Support</p>
              </div>
            </div>
          </div>

          <div className="footer-bottom-line">
            <p className="copyright opacity-70 text-black">© 2026 GROWRAPIDLY STRATEGIC SYSTEMS. ALL RIGHTS RESERVED.</p>
            <div className="footer-legal-links">
              <a href="#">Privacy Protocol</a>
              <a href="#">Terms of Engagement</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
                .footer {
                    padding: 100px 0 40px;
                    border-top: 1px solid rgba(10, 25, 47, 0.05);
                    background: var(--white);
                }

                .footer-main {
                    display: flex;
                    flex-direction: column;
                }

                .footer-top-grid {
                    display: grid;
                    grid-template-columns: 1.2fr 2fr;
                    gap: 100px;
                    margin-bottom: 80px;
                }

                .footer-brand-col {
                    max-width: 400px;
                }

                .f-mission {
                    margin-top: 25px;
                    line-height: 1.8;
                    font-size: 0.95rem;
                    font-weight: 500;
                }

                .footer-links-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 60px;
                    width: 100%;
                }

                .col-tag {
                    display: block;
                    font-size: 0.75rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.2rem;
                    margin-bottom: 2rem;
                }

                .f-col a {
                    display: block;
                    color: var(--brand-black);
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 0.95rem;
                    margin-bottom: 1rem;
                    opacity: 0.6;
                    transition: var(--transition);
                }

                .f-col a:hover {
                    opacity: 1;
                    color: var(--brand-green);
                    transform: translateX(5px);
                }

                .contact-text {
                    font-size: 0.85rem;
                    margin-top: 10px;
                    line-height: 1.5;
                }

                .footer-bottom-line {
                    padding-top: 40px;
                    border-top: 1px solid rgba(26, 26, 26, 0.05);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .f-logo {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .f-logo img {
                    height: 30px;
                }

                .f-logo span {
                    font-weight: 800;
                    letter-spacing: 0.15em;
                    font-size: 1rem;
                    color: var(--brand-black);
                }

                .copyright {
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--brand-blue);
                    opacity: 0.5;
                }

                .footer-legal-links {
                    display: flex;
                    gap: 30px;
                }

                .footer-legal-links a {
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--brand-blue);
                    opacity: 0.5;
                    text-decoration: none;
                    transition: var(--transition);
                }

                .footer-legal-links a:hover {
                    opacity: 1;
                }

                @media (max-width: 1024px) {
                    .footer-top-grid { grid-template-columns: 1fr; gap: 60px; }
                    .footer-links-grid { grid-template-columns: repeat(2, 1fr); gap: 40px; }
                }

                @media (max-width: 768px) {
                    .footer-links-grid { grid-template-columns: 1fr; }
                    .footer-bottom-line { flex-direction: column; gap: 20px; text-align: center; }
                    .footer-legal-links { justify-content: center; }
                }
            `}</style>
    </footer>
  );
};

export default Footer;
