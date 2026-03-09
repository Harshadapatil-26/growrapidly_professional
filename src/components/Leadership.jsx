import React from 'react';

const Leadership = () => {
  const leaders = [
    {
      name: "Bipin M. Jagtap",
      role: "FOUNDER & CEO",
      tag: "Ideological Authority",
      title: "IDEOLOGICAL LEADER FOR YOUTH GENERATION.",
      desc: "Strategizing at the intersection of technology, narrative, and political mobilization to architect decisive institutional advantages.",
      img: "/images/team/bipin.png",
      highlights: [
        "All systemic operations support rapid narrative deployment.",
        "Precision ground intelligence for maximum constituency impact.",
        "Fully optimized digital ecosystems for modern leadership."
      ]
    },
    {
      name: "Prathamesh G. Pawar",
      role: "CMO",
      tag: "Growth Architect",
      title: "ENGINEERING MASS MARKET DOMINANCE.",
      desc: "Deploying high-frequency digital engagement strategies to capture and convert complex demographics into loyal movements.",
      img: "/images/team/prathamesh.png",
      highlights: [
        "Advanced viral mechanics for rapid narrative saturation.",
        "Data-driven sentiment analysis and real-time response.",
        "Precision-targeted 360° digital mobilization pipelines."
      ]
    }
  ];

  return (
    <section id="leadership" className="leadership premium-grain">
      <div className="container">
        {leaders.map((leader, index) => (
          <div key={index} className={`leadership-split ${index % 2 !== 0 ? 'split-reverse' : ''} reveal`}>
            <div className="leadership-content">
              <span className="section-tag">{leader.tag}</span>
              <h2 className="display-title">
                {leader.title.split(' ').map((word, i, arr) => (
                  <React.Fragment key={i}>
                    {i === arr.length - 1 ? <span className="text-orange">{word}</span> : word}{' '}
                  </React.Fragment>
                ))}
              </h2>
              <p className="lead-text">
                {leader.desc}
              </p>

              <ul className="strategic-highlights">
                {leader.highlights.map((h, i) => (
                  <li key={i}>
                    <span className="check-icon">✓</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="ceo-badge">
                <div className="badge-info">
                  <h3 className="badge-name">{leader.name}</h3>
                  <p className="badge-role">{leader.role}</p>
                </div>
              </div>
            </div>

            <div className="leadership-visual">
              <div className="featured-leader-frame">
                <img src={leader.img} alt={leader.name} className="featured-leader-img" />
                <div className="featured-overlay"></div>
              </div>
            </div>
          </div>
        ))}

        <style>{`
                .leadership {
                    padding: 100px 0;
                    background: var(--white);
                    overflow: hidden;
                }

                .leadership-split {
                    display: grid;
                    grid-template-columns: 1.2fr 1fr;
                    gap: 80px;
                    align-items: center;
                    margin-bottom: 100px;
                }

                .leadership-split:last-of-type {
                    margin-bottom: 0px;
                }

                .leadership-split.split-reverse {
                    grid-template-columns: 1fr 1.2fr;
                }

                .leadership-split.split-reverse .leadership-content {
                    order: 2;
                }

                .leadership-split.split-reverse .leadership-visual {
                    order: 1;
                }

                .leadership-content {
                    max-width: 700px;
                }

                .lead-text {
                    font-size: 1.1rem;
                    color: var(--brand-blue);
                    opacity: 0.7;
                    margin-bottom: 25px;
                    line-height: 1.6;
                }

                .strategic-highlights {
                    list-style: none;
                    margin-bottom: 35px;
                }

                .strategic-highlights li {
                    display: flex;
                    align-items: flex-start;
                    gap: 15px;
                    margin-bottom: 12px;
                    font-weight: 600;
                    color: var(--brand-blue);
                    font-size: 0.95rem;
                }

                .check-icon {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 20px;
                    height: 20px;
                    background: rgba(0, 100, 0, 0.1);
                    color: var(--brand-green);
                    border-radius: 50%;
                    font-size: 0.7rem;
                    font-weight: 800;
                    flex-shrink: 0;
                    margin-top: 2px;
                }

                .ceo-badge {
                    display: inline-flex;
                    align-items: center;
                    padding: 12px 25px;
                    background: var(--brand-black); /* Changed from --brand-navy */
                    color: var(--white);
                    border-radius: var(--radius-sm);
                    margin-top: 5px;
                }

                .badge-name {
                    font-size: 1.1rem;
                    font-weight: 700;
                    margin-bottom: 2px;
                    color: var(--white);
                }

                .badge-role {
                    font-size: 0.7rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    color: var(--brand-orange);
                }

                .leadership-visual {
                    position: relative;
                }

                .featured-leader-frame {
                    position: relative;
                    border-radius: 30px;
                    overflow: hidden;
                    box-shadow: var(--shadow-hover);
                    background: var(--light-gray);
                    height: 500px;
                }

                .featured-leader-img {
                    width: 100%;
                    height: 100%;
                    display: block;
                    object-fit: cover;
                    object-position: top center;
                    filter: contrast(1.05);
                    transition: var(--transition);
                }

                .featured-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(10, 25, 47, 0.2), transparent);
                    pointer-events: none;
                }

                @media (max-width: 1100px) {
                    .leadership-split { grid-template-columns: 1fr; gap: 40px; margin-bottom: 80px; }
                    .leadership-split.split-reverse { grid-template-columns: 1fr; }
                    .leadership-split.split-reverse .leadership-content { order: 1; }
                    .leadership-split.split-reverse .leadership-visual { order: -1; }
                    .leadership-visual { order: -1; max-width: 500px; margin: 0 auto; }
                    .featured-leader-frame { max-height: 400px; }
                    .leadership-content .display-title { font-size: 2.25rem; }
                }

                @media (max-width: 480px) {
                    .leadership-content .display-title { font-size: 1.85rem; }
                }
            `}</style>
      </div>
    </section>
  );
};

export default Leadership;
