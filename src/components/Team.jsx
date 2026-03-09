import React from 'react';

const Team = () => {
  return (
    <section className="quote-section bg-white premium-grain">
      <div className="container">
        <div className="quote-wrapper reveal">
          <h2 className="quote-text">
            "THERE IS NO <span className="text-green">SECOND PLACE</span> IN <span className="text-orange">COMPETITION.</span>"
          </h2>
          <div className="quote-line"></div>
          <p className="quote-author text-blue">GROWRAPIDLY STRATEGIC SYSTEMS</p>
        </div>
      </div>

      <style>{`
                .quote-section {
                    padding: 120px 0;
                    text-align: left;
                    border-top: 1px solid rgba(26, 26, 26, 0.05);
                    background: var(--white);
                }

                .quote-text {
                    font-size: clamp(1.75rem, 5vw, 3.25rem);
                    font-family: var(--font-heading);
                    font-weight: 800;
                    line-height: 1.1;
                    text-transform: uppercase;
                    color: var(--brand-black);
                    max-width: 1000px;
                }

                .quote-wrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    max-width: 1200px;
                    margin: 0;
                }

                .quote-line {
                    width: 80px;
                    height: 3px;
                    background: var(--brand-orange);
                    margin: 40px 0;
                    opacity: 0.8;
                }

                .quote-author {
                    font-size: 1rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.4em;
                    opacity: 0.6;
                }

                @media (max-width: 768px) {
                    .quote-section { padding: 120px 0; }
                }
            `}</style>
    </section>
  );
};

export default Team;
