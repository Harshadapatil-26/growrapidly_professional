import React from 'react';

const Impact = () => {
  return (
    <section id="impact" className="impact bg-white premium-grain">
      <div className="impact-image-overlay">
        <img src="/images/backgrounds/impact_bg.png" alt="Indian Electoral Strength" />
      </div>
      <div className="container">
        <div className="impact-center reveal">
          <h2 className="display-title">
            LOCAL <span className="text-emerald">INSTINCT.</span><br />
            NORTHERN <span className="text-navy">DOMINANCE.</span>
          </h2>
          <p className="text-black opacity-70 impact-lead">
            We've spent a decade in the grime of ground politics and the velocity of professional war rooms.
            We know exactly how to move the needle where it matters most.
          </p>
          <div className="impact-cta">
            <a href="#contact" className="btn btn-black">INITIATE OPERATIONS</a>
          </div>
        </div>
      </div>

      <style>{`
                .impact {
                    padding: 160px 0;
                    text-align: left;
                    position: relative;
                    background: var(--white);
                    overflow: hidden;
                }

                .impact-image-overlay {
                    position: absolute;
                    inset: 0;
                    z-index: 1;
                    pointer-events: none;
                }

                .impact-image-overlay img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 0.05;
                    filter: brightness(0.6);
                }

                .metric-val {
                    font-size: clamp(3.5rem, 8vw, 6rem);
                    font-weight: 800;
                    line-height: 1;
                    color: var(--brand-blue);
                    margin-bottom: 20px;
                    letter-spacing: -0.02em;
                }

                .metric-tag {
                    font-size: 0.75rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.3em;
                    color: var(--brand-black);
                    opacity: 0.6;
                }

                .impact-center {
                    position: relative;
                    z-index: 10;
                    max-width: 100%;
                    margin: 0;
                }

                .impact-center h2 {
                    color: var(--brand-blue);
                }

                .impact-lead {
                    font-size: 1.75rem;
                    margin: 50px 0;
                    max-width: 850px;
                    line-height: 1.7;
                    font-weight: 500;
                    color: var(--brand-blue);
                }

                @media (max-width: 1024px) {
                    .impact { padding: 160px 0; }
                    .impact-lead { font-size: 1.4rem; }
                }

                @media (max-width: 768px) {
                    .impact { padding: 120px 0; }
                    .impact-lead { font-size: 1.2rem; }
                    .display-title { font-size: 3rem; }
                }
            `}</style>
    </section>
  );
};

export default Impact;
