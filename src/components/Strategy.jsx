import React from 'react'

const Strategy = () => {
  const steps = [
    { num: "01", title: "Research", desc: "Data insights to decode voter behavior and sentiment.", color: "var(--primary)" },
    { num: "02", title: "Narrative", desc: "Crafting a powerful vision that resonates with citizens.", color: "var(--secondary)" },
    { num: "03", title: "Strategy", desc: "Omni-channel planning for digital and ground action.", color: "var(--accent)" },
    { num: "04", title: "Execution", desc: "Precision-timed delivery to mobilize and win.", color: "var(--primary)" }
  ]

  return (
    <section id="strategy" className="strategy-section">
      <div className="container">
        <div className="strategy-grid">
          {steps.map((step, index) => (
            <div key={index} className="strategy-card reveal">
              <div className="step-num" style={{ color: step.color }}>{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .strategy-section {
          background-color: var(--white);
          border-top: 1px solid var(--border);
        }
        .strategy-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 60px;
        }
        .strategy-card {
          text-align: left;
        }
        .step-num {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .step-num::after {
          content: "";
          height: 2px;
          flex-grow: 1;
          background: var(--border);
        }
        .strategy-card h3 {
          font-size: 1.5rem;
          margin-bottom: 16px;
        }
        .strategy-card p {
          color: var(--text-muted);
          line-height: 1.6;
        }
      `}</style>
    </section>
  )
}

export default Strategy
