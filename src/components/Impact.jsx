import React from 'react'

const Impact = () => {
  const stats = [
    { label: "Campaign Growth", val: "145%" },
    { label: "Voters Engaged", val: "25M+" },
    { label: "Engagement Rate", val: "68%" },
    { label: "Success Ratio", val: "92%" }
  ]

  return (
    <section id="impact" className="impact-stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-node reveal">
              <span className="stat-value">{stat.val}</span>
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
          color: var(--text);
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
      `}</style>
    </section>
  )
}

export default Impact
