import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Social Media Marketing",
      icon: "⊚",
      color: "var(--brand-blue)",
      desc: "Content strategy, viral reels, graphic design, and audience engagement to grow your brand."
    },
    {
      title: "Lead Generation Campaigns",
      icon: "⊕",
      color: "var(--brand-orange)",
      desc: "Facebook Ads, Instagram Ads, Google Ads, and YouTube Ads that bring quality leads."
    },
    {
      title: "Local SEO",
      icon: "⊞",
      color: "var(--brand-green)",
      desc: "Google Business Profile optimization, local keyword ranking, and review management."
    },
    {
      title: "Website Design",
      icon: "⊡",
      color: "var(--brand-blue)",
      desc: "Fast, mobile-optimized websites and high-converting landing pages for your business."
    },
    {
      title: "Content & Video Marketing",
      icon: "⊛",
      color: "var(--brand-orange)",
      desc: "Reels, educational videos, and storytelling content that connects with your audience."
    },
    {
      title: "Real Estate Marketing",
      icon: "⊠",
      color: "var(--brand-green)",
      desc: "Property lead generation, landing pages, virtual tours, and WhatsApp automation."
    },
    {
      title: "Hospital Marketing",
      icon: "⊘",
      color: "var(--brand-blue)",
      desc: "Doctor branding, patient lead generation, and online reputation management."
    },
    {
      title: "Restaurant Marketing",
      icon: "⊞",
      color: "var(--brand-orange)",
      desc: "Food reels, influencer marketing, and Google Maps ranking to fill your tables."
    },
  ];

  return (
    <section id="services" className="services bg-white premium-grain">
      <div className="container">
        <div className="services-top reveal">
          <span className="section-tag">Our Core Services</span>
          <h2 className="section-head">WHAT WE <span className="text-orange">DO.</span></h2>
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
                    LEARN MORE
                    <span className="arrow">→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="philosophy-strip reveal">
          <div className="philosophy-header">
            <span className="section-tag">Industry Specific Services</span>
            <h2 className="display-title">REAL ESTATE. <span className="text-orange">HOSPITALS.</span> <span className="text-green">RESTAURANTS.</span></h2>
            <p className="philosophy-desc">We don't do generic marketing. Every strategy is built specifically for your industry so you get results that actually matter to your business.</p>
          </div>
          <div className="philosophy-cta">
            <a href="#contact" className="btn btn-black">Get Free Consultation →</a>
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

                .philosophy-desc {
                    margin-top: 20px;
                    font-size: 1rem;
                    line-height: 1.7;
                    color: var(--brand-black);
                    opacity: 0.6;
                    max-width: 500px;
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
