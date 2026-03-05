import React from 'react'

const Team = () => {
    const teamMembers = [
        {
            name: "Strategy & Planning",
            role: "Political Analysts",
            desc: "Our core think-tank focused on analyzing data, voter behavior, and campaign direction.",
            icon: "📊"
        },
        {
            name: "Digital Communications",
            role: "Social & Digital Experts",
            desc: "Specialists in messaging, social media amplification, and digital narrative building.",
            icon: "📱"
        },
        {
            name: "Ground Operations",
            role: "Campaign Managers",
            desc: "Executing strategy on the ground, mobilizing workers, and conducting localized surveys.",
            icon: "📍"
        },
        {
            name: "Content & Creative",
            role: "Writers & Designers",
            desc: "Crafting impactful speeches, compelling visual content, and strong political messaging.",
            icon: "🎨"
        }
    ]

    return (
        <section id="team" className="team-section">
            <div className="container">
                <div className="team-header reveal">
                    <span className="section-tag">Our Team</span>
                    <h2 className="section-title">The Force Behind the Strategy</h2>
                    <p className="section-subtitle">A multidisciplinary team of political strategists, digital experts, and creative communicators dedicated to your success.</p>
                </div>

                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-card reveal">
                            <div className="team-icon-wrapper">
                                <span className="team-icon">{member.icon}</span>
                            </div>
                            <div className="team-info">
                                <h3 className="team-name">{member.name}</h3>
                                <span className="team-role">{member.role}</span>
                                <p className="team-desc">{member.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        .team-section {
          background-color: var(--light-bg);
          padding: 120px 0;
          border-top: 1px solid var(--border);
        }
        .team-header {
          text-align: center;
          margin-bottom: 80px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        .team-header .section-title {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          color: var(--text);
        }
        .team-header .section-subtitle {
          font-size: 1.125rem;
          color: var(--text-muted);
        }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }
        .team-card {
          background: var(--white);
          padding: 40px 30px;
          border-radius: 20px;
          text-align: center;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border);
          transition: var(--transition);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .team-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-md);
          border-color: var(--primary);
        }
        .team-icon-wrapper {
          width: 80px;
          height: 80px;
          background: rgba(87, 176, 0, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }
        .team-icon {
          font-size: 2rem;
        }
        .team-name {
          font-size: 1.5rem;
          margin-bottom: 8px;
          color: var(--text);
        }
        .team-role {
          display: block;
          font-size: 0.875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--primary);
          margin-bottom: 16px;
        }
        .team-desc {
          color: var(--text-muted);
          font-size: 0.9375rem;
          line-height: 1.6;
        }
        
        @media (max-width: 768px) {
          .team-header .section-title { font-size: 2.5rem; }
          .team-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
        }
        
        @media (max-width: 480px) {
          .team-header .section-title { font-size: 2rem; }
          .team-grid { grid-template-columns: 1fr; }
        }
      `}</style>
        </section>
    )
}

export default Team
