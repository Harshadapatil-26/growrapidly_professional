import React from 'react';

const About = () => {
  return (
    <section id="about" className="about premium-grain">
      <div className="container">
        <div className="about-split reveal">
          <div className="about-content">
            <span className="section-tag">Institutional Advantage</span>
            <h2 className="display-title">
              TEN YEARS OF <span className="text-gold">DOMINANCE.</span>
            </h2>
            <p className="lead-text">
              In a world of noise, we deliver signal. Our firm isn't built on theory;
              it's built on a decade of strategic dominance in the most complex
              competitive landscapes in the world.
            </p>

            <ul className="strategic-highlights">
              <li>
                <span className="check-icon">✓</span>
                Signal-to-noise ratio optimization for global narratives.
              </li>
              <li>
                <span className="check-icon">✓</span>
                Institutional-grade strategic engineering and deployment.
              </li>
              <li>
                <span className="check-icon">✓</span>
                Proven dominance in high-stakes competitive environments.
              </li>
            </ul>

            <div className="btn-wrap">
              <a href="#contact" className="btn btn-black">Discuss The Blueprint</a>
            </div>
          </div>

          <div className="about-visual">
            <div className="about-image-frame">
              <img
                src="/images/backgrounds/about_bg.png"
                alt="Strategic Dominance"
                className="featured-about-img"
              />
              <div className="about-overlay"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
                .about {
                    padding: 100px 0;
                    background: var(--white);
                    overflow: hidden;
                }

                .about-split {
                    display: grid;
                    grid-template-columns: 1.1fr 1fr;
                    gap: 70px;
                    align-items: center;
                }

                .about-content {
                    max-width: 650px;
                }

                .about-tag {
                    color: var(--brand-blue);
                    font-weight: 700;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    font-size: 0.85rem;
                    margin-bottom: 15px;
                    display: block;
                }

                .lead-text {
                    font-size: 1.1rem;
                    color: var(--brand-black);
                    opacity: 0.7;
                    margin-bottom: 25px;
                    line-height: 1.6;
                }

                .strategic-highlights {
                    list-style: none;
                    margin-bottom: 40px;
                }

                .strategic-highlights li {
                    display: flex;
                    align-items: flex-start;
                    gap: 15px;
                    margin-bottom: 20px;
                    font-weight: 600;
                    color: var(--brand-black);
                    font-size: 1.05rem;
                }

                .check-icon {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 20px;
                    height: 20px;
                    background: rgba(197, 160, 89, 0.1);
                    color: var(--brand-orange);
                    border-radius: 50%;
                    font-size: 0.7rem;
                    font-weight: 800;
                    flex-shrink: 0;
                    margin-top: 2px;
                }

                .about-visual {
                    position: relative;
                }

                .about-image-frame {
                    position: relative;
                    border-radius: 30px;
                    overflow: hidden;
                    box-shadow: var(--shadow-hover);
                    background: var(--light-gray);
                    height: 450px;
                }

                .featured-about-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                    display: block;
                    filter: contrast(1.02);
                    transition: var(--transition);
                }

                .about-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to right, rgba(255, 255, 255, 0.1), transparent);
                    pointer-events: none;
                }

                @media (max-width: 1024px) {
                    .about-split { grid-template-columns: 1fr; gap: 60px; }
                    .about-visual { order: -1; height: 400px; }
                    .about-image-frame { height: 100%; }
                }
            `}</style>
    </section>
  );
};

export default About;
