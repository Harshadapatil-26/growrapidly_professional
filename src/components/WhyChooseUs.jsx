import React from 'react';

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="advantage-section bg-light premium-grain">
      <div className="container">
        <div className="advantage-top reveal">
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-head">BUILT FOR <span className="text-emerald">RESULTS.</span></h2>
        </div>
        <div className="advantage-grid reveal">
          <div className="support-card">
            <span className="card-icon text-emerald">⊚</span>
            <h3 className="card-title">INDUSTRY-SPECIFIC EXPERTISE</h3>
            <p className="card-desc opacity-70">
              Deep knowledge of Real Estate, Healthcare, and Restaurant industries means we know exactly what works for your audience and market.
            </p>
          </div>
          <div className="support-card">
            <span className="card-icon text-navy">⊕</span>
            <h3 className="card-title">DATA-DRIVEN STRATEGIES</h3>
            <p className="card-desc opacity-70">
              Every campaign is backed by real data and analytics. We optimize continuously to maximize your ROI and minimize wasted spend.
            </p>
          </div>
          <div className="support-card">
            <span className="card-icon text-gold">⊛</span>
            <h3 className="card-title">CREATIVE VIRAL CONTENT</h3>
            <p className="card-desc opacity-70">
              Our creative team produces high-quality reels, graphics, and videos that capture attention and drive real engagement.
            </p>
          </div>
          <div className="support-card">
            <span className="card-icon text-emerald">⊞</span>
            <h3 className="card-title">TRANSPARENT REPORTING</h3>
            <p className="card-desc opacity-70">
              You always know where your money is going. We provide clear, honest reports on campaign performance and lead quality.
            </p>
          </div>
          <div className="support-card">
            <span className="card-icon text-navy">⊠</span>
            <h3 className="card-title">HIGH-QUALITY LEAD GENERATION</h3>
            <p className="card-desc opacity-70">
              We don't chase vanity metrics. Every campaign is built to attract real, qualified leads that convert into paying customers.
            </p>
          </div>
          <div className="support-card">
            <span className="card-icon text-gold">⊘</span>
            <h3 className="card-title">ROI-FOCUSED CAMPAIGNS</h3>
            <p className="card-desc opacity-70">
              Every rupee you invest is tracked and optimized. We focus on returns, not just reach — your growth is our success metric.
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
                    grid-template-columns: repeat(3, 1fr);
                    gap: 30px;
                    margin-top: 60px;
                }

                .support-card {
                    background: var(--white);
                    padding: 40px;
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
                    .advantage-grid { grid-template-columns: 1fr 1fr; }
                    .support-card { padding: 30px 20px; }
                }

                @media (max-width: 600px) {
                    .advantage-grid { grid-template-columns: 1fr; }
                }
            `}</style>
    </section>
  );
};

export default WhyChooseUs;
