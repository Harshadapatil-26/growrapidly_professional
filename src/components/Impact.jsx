import React from 'react'

const Impact = () => {
  const stats = [
    { label: "Campaign Growth", val: "145%", color: "var(--primary)" },
    { label: "Voters Engaged", val: "25M+", color: "var(--secondary)" },
    { label: "Engagement Rate", val: "68%", color: "var(--accent)" },
    { label: "Success Ratio", val: "92%", color: "var(--primary)" }
  ]

  return (
    <section id="impact" className="impact-stats-section">
      <div className="container">
        <div className="impact-visual reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <img src="/images/logo.png" alt="Growth Graph" style={{ maxWidth: '400px', width: '100%', borderRadius: '12px', border: '1px solid var(--border)' }} />
        </div>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-node reveal">
              <span className="stat-value" style={{ color: stat.color }}>{stat.val}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .impact-stats-section {
          background-color: var(--white);
          padding: 80px 0;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .stats-grid {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 40px;
        }
        .stat-node {
          text-align: center;
        }
        .stat-value {
          display: block;
          font-family: var(--font-heading);
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 8px;
        }
        .stat-label {
          font-size: 0.875rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-muted);
          letter-spacing: 0.1em;
        }
        @media (max-width: 768px) {
          .stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr; gap: 40px; }
          .stat-value { font-size: 3rem; }
        }
      `}</style>
    </section>
  )
}

export default Impact
