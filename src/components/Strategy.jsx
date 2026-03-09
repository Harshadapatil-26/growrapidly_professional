import React from 'react';

const Strategy = () => {
  return (
    <section id="strategy" className="strategy bg-white premium-grain">
      <div className="container">
        <div className="strategy-split reveal">
          <div className="strat-left">
            <span className="section-tag">Market Intelligence</span>
            <h2 className="display-title">THE <span className="text-emerald">WINNING</span><br />BLUEPRINT.</h2>
            <div className="strat-steps">
              <div className="strat-step">
                <span className="step-num text-emerald">01</span>
                <div className="step-txt">
                  <h3 className="text-black">SURVEILLANCE</h3>
                  <p className="text-black opacity-70">Deep-dive algorithmic mining and voter sentiment architecture.</p>
                </div>
              </div>
              <div className="strat-step">
                <span className="step-num text-navy">02</span>
                <div className="step-txt">
                  <h3 className="text-black">POSITIONING</h3>
                  <p className="text-black opacity-70">Surgical brand development and leadership framing.</p>
                </div>
              </div>
              <div className="strat-step">
                <span className="step-num text-gold">03</span>
                <div className="step-txt">
                  <h3 className="text-black">EXECUTION</h3>
                  <p className="text-black opacity-70">High-velocity digital blitz and systematic mobilization.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="strat-right">
            <div className="strat-graphic">
              <div className="data-card">
                <h4 className="text-emerald uppercase">Target Acquired</h4>
                <div className="data-line bg-emerald"></div>
                <p className="text-black">We identify the critical segments that decide the major outcomes.</p>
              </div>
              <div className="data-card offset">
                <h4 className="text-gold uppercase">Operations Active</h4>
                <div className="data-line bg-gold"></div>
                <p className="text-black">24/7 Monitoring. Instant narrative adjustment protocol.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
                .strategy {
                    padding: var(--section-padding) 0;
                    border-bottom: 1px solid rgba(10, 25, 47, 0.05);
                }

                .strategy-split {
                    display: grid;
                    grid-template-columns: 1.2fr 1fr;
                    gap: 100px;
                    align-items: center;
                }

                .strat-steps {
                    margin-top: 60px;
                    display: flex;
                    flex-direction: column;
                    gap: 45px;
                }

                .strat-step {
                    display: flex;
                    gap: 35px;
                }

                .step-num {
                    font-family: var(--font-heading);
                    font-size: 1.75rem;
                    font-weight: 800;
                    line-height: 1;
                    padding-top: 5px;
                }

                .step-txt h3 {
                    font-size: 1.35rem;
                    margin-bottom: 12px;
                    font-weight: 700;
                    color: var(--brand-blue);
                }

                .step-txt p {
                    color: var(--brand-blue);
                    opacity: 0.7;
                    line-height: 1.6;
                }

                .strat-right {
                    position: relative;
                }

                .strategy-header h3 {
                    font-size: clamp(2rem, 5vw, 3.5rem);
                    font-weight: 700;
                    color: var(--brand-blue);
                    margin-bottom: 20px;
                }

                .strategy-header p {
                    font-size: 1.15rem;
                    color: var(--brand-black);
                    opacity: 0.7;
                    max-width: 600px;
                    margin: 0 auto;
                }

                .strat-graphic {
                    position: relative;
                }

                .data-card {
                    background: var(--white);
                    border: 1px solid rgba(10, 25, 47, 0.08);
                    padding: 45px;
                    margin-bottom: 25px;
                    box-shadow: var(--shadow-subtle);
                    border-radius: var(--radius-sm);
                    transition: var(--transition);
                }

                .data-card:hover {
                    border-color: var(--brand-orange);
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-hover);
                }

                .data-card.offset {
                    margin-left: 60px;
                }

                .data-line {
                    height: 2px;
                    width: 50px;
                    margin: 25px 0;
                }

                @media (max-width: 1024px) {
                    .strategy-split { grid-template-columns: 1fr; gap: 60px; }
                    .data-card.offset { margin-left: 0; }
                    .strat-graphic { padding: 0; }
                }
            `}</style>
    </section>
  );
};

export default Strategy;
