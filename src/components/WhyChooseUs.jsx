import React from 'react';

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="advantage-section bg-light premium-grain">
      <div className="container">
        <div className="advantage-top reveal">
          <span className="section-tag">Operational Excellence</span>
          <h2 className="section-head">STRATEGIC <span className="text-emerald">SUPPORT.</span></h2>
        </div>
        <div className="advantage-grid reveal">
          <div className="support-card">
            <span className="card-icon text-emerald">⊚</span>
            <h3 className="card-title">REAL-TIME MONITORING</h3>
            <p className="card-desc opacity-70">
              Our digital war rooms remain operational 24/7, providing continuous surveillance of the digital and ground-level electoral landscapes.
            </p>
          </div>
          <div className="support-card">
            <span className="card-icon text-navy">⊕</span>
            <h3 className="card-title">STRATEGY OPTIMIZATION</h3>
            <p className="card-desc opacity-70">
              We utilize high-velocity data analytics to refine campaign messaging and tactical positioning in response to shifting public sentiment.
            </p>
          </div>
        </div>
      </div>

      <style>{`
                .advantage-section {
                    padding: var(--section-padding) 0;
                    position: relative;
                    background-color: var(--light-gray);
                    overflow: hidden;
                    border-top: 1px solid rgba(10, 25, 47, 0.05);
                }

                .advantage-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 30px;
                    margin-top: 60px;
                }

                .support-card {
                    background: var(--white);
                    padding: 60px;
                    border: 1px solid rgba(10, 25, 47, 0.08);
                    transition: var(--transition);
                    border-radius: var(--radius-sm);
                }

                .support-card:hover {
                    transform: translateY(-8px);
                    box-shadow: var(--shadow-hover);
                    border-color: var(--brand-orange);
                }

                .card-icon {
                    font-size: 3rem;
                    display: block;
                    margin-bottom: 30px;
                    opacity: 0.9;
                }

                .card-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: 20px;
                    color: var(--brand-blue);
                }

                .card-desc {
                    font-size: 1.05rem;
                    line-height: 1.7;
                    max-width: 450px;
                    color: var(--brand-black);
                    opacity: 0.7;
                }

                @media (max-width: 1024px) {
                    .advantage-grid { grid-template-columns: 1fr; }
                    .support-card { padding: 40px; }
                }
            `}</style>
    </section>
  );
};

export default WhyChooseUs;
