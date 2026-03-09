import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Campaign Strategy",
      icon: "⊕",
      color: "var(--brand-blue)",
      desc: "Precision architecting of multi-channel political and corporate campaigns for absolute victory."
    },
    {
      title: "Social Media Command",
      icon: "⊚",
      color: "var(--brand-orange)",
      desc: "Dominating the digital narrative through real-time sentiment analysis and viral engineering."
    },
    {
      title: "Institutional Branding",
      icon: "⊡",
      color: "var(--brand-green)",
      desc: "Constructing unshakeable reputation frameworks for leaders and high-growth organizations."
    },
    {
      title: "Constituency Intelligence",
      icon: "⊞",
      color: "var(--brand-blue)",
      desc: "Deep-layer data mining and behavioral profiling to decode voter and market intent."
    },
    {
      title: "Digital Dominance",
      icon: "⊠",
      color: "var(--brand-orange)",
      desc: "Aggressive SEO, PPC, and algorithm manipulation to secure the primary digital real estate."
    },
    {
      title: "Strategic Content",
      icon: "⊛",
      color: "var(--brand-green)",
      desc: "Linguistic engineering and high-authority messaging that drives belief and action."
    },
    {
      title: "Business Expansion",
      icon: "⊞",
      color: "var(--brand-orange)",
      desc: "Identifying structural growth opportunities and architecting market entry dominance."
    },
    {
      title: "24/7 War Room Support",
      icon: "⊘",
      color: "var(--brand-blue)",
      desc: "Continuous tactical monitoring and crisis management for high-stakes operations."
    },
  ];

  return (
    <section id="services" className="services bg-white premium-grain">
      <div className="container">
        <div className="services-top reveal">
          <span className="section-tag">Battle-Tested Capabilities</span>
          <h2 className="section-head">STRATEGIC <span className="text-orange">POWER.</span></h2>
        </div>

        <div className="capabilities-grid reveal">
          {services.map((item, index) => (
            <div key={index} className="cap-card">
              <div className="cap-accent" style={{ background: item.color }}></div>
              <div className="cap-body">
                <div className="cap-icon-wrap" style={{ '--icon-color': item.color }}>
                  <span className="cap-icon">{item.icon}</span>
                </div>
                <h3 className="cap-name">{item.title}</h3>
                <p className="cap-desc">{item.desc}</p>
                <div className="cap-footer">
                  <span className="learn-more" style={{ color: item.color }}>
                    ANALYZE PROTOCOL
                    <span className="arrow">→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="philosophy-strip reveal">
          <div className="philosophy-header">
            <span className="section-tag">Strategy Philosophy</span>
            <h2 className="display-title">WE DON'T <span className="text-orange">GUESS.</span> WE PLAN, PRESSURE, AND <span className="text-green">EXECUTE.</span></h2>
          </div>
          <div className="philosophy-cta">
            <Link to="/services" className="btn btn-black">INITIATE FULL PROTOCOL</Link>
          </div>
        </div>
      </div>

      <style>{`
                .services {
                    padding: var(--section-padding) 0;
                    position: relative;
                }

                .capabilities-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 30px;
                    margin: 80px 0 120px;
                }

                .cap-card {
                    background: var(--white);
                    border: 1px solid rgba(26, 26, 26, 0.05);
                    position: relative;
                    border-radius: 20px;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                    height: 100%;
                }

                .cap-card:hover {
                    transform: translateY(-12px);
                    box-shadow: 0 30px 60px rgba(26, 26, 26, 0.08);
                    border-color: rgba(26, 26, 26, 0.1);
                }

                .cap-accent {
                    height: 5px;
                    width: 100%;
                    opacity: 0.9;
                }

                .cap-body {
                    padding: 40px 35px;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                }

                .cap-icon-wrap {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 60px;
                    height: 60px;
                    background: rgba(var(--icon-color), 0.05);
                    border-radius: 12px;
                    margin-bottom: 30px;
                    color: var(--icon-color);
                    transition: var(--transition);
                }

                .cap-card:hover .cap-icon-wrap {
                    transform: scale(1.1);
                    background: var(--icon-color);
                    color: white;
                }

                .cap-icon {
                    font-size: 2rem;
                }

                .cap-name {
                    font-size: 1.35rem;
                    margin-bottom: 18px;
                    font-weight: 800;
                    color: var(--brand-black);
                    letter-spacing: -0.01em;
                    line-height: 1.2;
                }

                .cap-desc {
                    font-size: 0.95rem;
                    line-height: 1.6;
                    color: var(--brand-black);
                    opacity: 0.6;
                    margin-bottom: 30px;
                }

                .cap-footer {
                    margin-top: auto;
                }

                .learn-more {
                    font-size: 0.75rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    opacity: 0.6;
                    transition: var(--transition);
                }

                .cap-card:hover .learn-more {
                    opacity: 1;
                    gap: 15px;
                }

                .arrow {
                    transition: var(--transition);
                }

                .philosophy-strip {
                    display: grid;
                    grid-template-columns: 1.5fr 1fr;
                    gap: 100px;
                    align-items: center;
                    padding: 100px 0;
                    background: transparent;
                    border-top: 1px solid rgba(26, 26, 26, 0.1);
                    border-radius: 0;
                }

                .philosophy-strip h2 {
                    margin-top: 25px;
                    max-width: 850px;
                    line-height: 1.1;
                    color: var(--brand-black);
                }

                @media (max-width: 1280px) {
                    .capabilities-grid { grid-template-columns: repeat(2, 1fr); }
                }

                @media (max-width: 1024px) {
                    .philosophy-strip { 
                        grid-template-columns: 1fr; 
                        gap: 50px; 
                        padding: 60px 40px;
                    }
                }

                @media (max-width: 768px) {
                    .capabilities-grid { grid-template-columns: 1fr; gap: 20px; }
                    .cap-body { padding: 40px 25px; }
                    .philosophy-strip { padding: 60px 20px; text-align: left; }
                    .philosophy-header h2 { font-size: 2.15rem; margin-top: 20px; }
                }

                @media (max-width: 480px) {
                    .philosophy-header h2 { font-size: 1.85rem; }
                }
            `}</style>
    </section>
  );
};

export default Services;
