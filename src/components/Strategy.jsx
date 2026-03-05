import React from 'react'

const Strategy = () => {
  const steps = [
    { num: "01", title: "Research", desc: "Data insights to decode voter behavior and sentiment.", color: "var(--primary)" },
    { num: "02", title: "Narrative", desc: "Crafting a powerful vision that resonates with citizens.", color: "var(--secondary)" },
    { num: "03", title: "Strategy", desc: "Omni-channel planning for digital and ground action.", color: "var(--accent)" },
    { num: "04", title: "Execution", desc: "Precision-timed delivery to mobilize and win.", color: "var(--primary)" }
  ]

  return (
    <section id="strategy" className="strategy-modern-section">
      <div className="container">
        <div className="strategy-header reveal">
          <span className="section-tag">Our Process</span>
          <h2 className="section-title">A Data-Driven <span className="text-secondary">Strategic Workflow</span></h2>
          <p className="section-subtitle">We follow a precision-engineered methodology to transform leadership vision into measurable ground-level results.</p>
        </div>

        <div className="process-flow">
          <div className="flow-line-bg"></div>
          <div className="strategy-grid">
            {steps.map((step, index) => (
              <div key={index} className="strategy-node reveal" style={{ '--accent-color': step.color }}>
                <div className="node-marker">
                  <div className="node-pulse"></div>
                  <span className="node-number">{step.num}</span>
                </div>
                <div className="node-card">
                  <h3 className="node-title">{step.title}</h3>
                  <p className="node-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .strategy-modern-section {
          background-color: var(--white);
          padding: 140px 0;
          position: relative;
          overflow: hidden;
        }
        .strategy-header {
          text-align: center;
          margin-bottom: 100px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        .strategy-header .section-title {
          font-size: 3.5rem;
          margin-bottom: 24px;
        }
        .strategy-header .section-subtitle {
          font-size: 1.25rem;
          color: var(--text-muted);
        }
        .process-flow {
          position: relative;
          padding: 40px 0;
        }
        .flow-line-bg {
          position: absolute;
          top: 100px;
          left: 5%;
          right: 5%;
          height: 2px;
          background: linear-gradient(to right, 
            var(--primary), 
            var(--secondary), 
            var(--accent), 
            var(--primary)
          );
          opacity: 0.2;
          z-index: 1;
        }
        .strategy-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          position: relative;
          z-index: 2;
        }
        .strategy-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .node-marker {
          width: 80px;
          height: 80px;
          background: var(--white);
          border: 2px solid var(--accent-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 32px;
          position: relative;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .strategy-node:hover .node-marker {
          transform: scale(1.1);
          background: var(--accent-color);
        }
        .node-number {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--accent-color);
          z-index: 2;
          transition: color 0.3s ease;
        }
        .strategy-node:hover .node-number {
          color: var(--white);
        }
        .node-pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 2px solid var(--accent-color);
          opacity: 0;
          animation: node-ping 3s infinite;
        }
        @keyframes node-ping {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        .node-card {
          padding: 30px;
          background: var(--white);
          border-radius: 20px;
          transition: all 0.4s ease;
          border: 1px solid transparent;
        }
        .strategy-node:hover .node-card {
          transform: translateY(-10px);
          box-shadow: var(--shadow-md);
          border-color: var(--border);
        }
        .node-title {
          font-size: 1.5rem;
          margin-bottom: 16px;
          color: var(--text);
        }
        .node-desc {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
        
        @media (max-width: 1024px) {
          .strategy-grid { grid-template-columns: repeat(2, 1fr); gap: 60px; }
          .flow-line-bg { display: none; }
        }
        @media (max-width: 600px) {
          .strategy-grid { grid-template-columns: 1fr; gap: 40px; }
          .strategy-header .section-title { font-size: 2.5rem; }
        }
        @media (max-width: 480px) {
          .strategy-header .section-title { font-size: 2rem; }
          .node-title { font-size: 1.25rem; }
        }
      `}</style>
    </section>
  )
}

export default Strategy
