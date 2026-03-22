import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Business Analysis',
    desc: 'We deep-dive into your business, audience, competitors, and current digital presence to understand exactly where you stand.',
    color: 'var(--brand-blue)',
  },
  {
    num: '02',
    title: 'Strategy Development',
    desc: 'We build a custom marketing strategy tailored to your industry, goals, and budget — no generic templates.',
    color: 'var(--brand-orange)',
  },
  {
    num: '03',
    title: 'Campaign Execution',
    desc: 'Our team launches ads, content, SEO, and social campaigns with precision targeting to reach your ideal customers.',
    color: 'var(--brand-green)',
  },
  {
    num: '04',
    title: 'Optimization & Growth',
    desc: 'We track every metric, optimize continuously, and scale what works — so your results keep improving month after month.',
    color: 'var(--brand-blue)',
  },
];

const Process = () => {
  return (
    <section id="process" className="process-section bg-white premium-grain">
      <div className="container">
        <div className="process-top reveal">
          <span className="section-tag">Our Marketing Process</span>
          <h2 className="section-head">HOW WE <span className="text-orange">WORK.</span></h2>
        </div>

        <div className="process-grid reveal">
          {steps.map((step, i) => (
            <div className="process-card" key={i}>
              <div className="process-num" style={{ color: step.color }}>{step.num}</div>
              <div className="process-bar" style={{ background: step.color }}></div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-desc">{step.desc}</p>
              {i < steps.length - 1 && <div className="process-arrow">→</div>}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .process-section {
          padding: var(--section-padding) 0;
          border-top: 1px solid rgba(10, 25, 47, 0.05);
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          margin-top: 60px;
          position: relative;
        }

        .process-card {
          padding: 40px 35px;
          position: relative;
          border: 1px solid rgba(10, 25, 47, 0.07);
          border-right: none;
          background: var(--white);
          transition: var(--transition);
        }

        .process-card:last-child {
          border-right: 1px solid rgba(10, 25, 47, 0.07);
        }

        .process-card:hover {
          background: var(--light-gray);
          transform: translateY(-6px);
          box-shadow: var(--shadow-hover);
          z-index: 1;
        }

        .process-num {
          font-family: var(--font-heading);
          font-size: 3rem;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 20px;
          opacity: 0.15;
        }

        .process-bar {
          width: 40px;
          height: 3px;
          margin-bottom: 20px;
          border-radius: 2px;
        }

        .process-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--brand-black);
          margin-bottom: 14px;
          line-height: 1.3;
        }

        .process-desc {
          font-size: 0.92rem;
          line-height: 1.7;
          color: var(--brand-black);
          opacity: 0.6;
        }

        .process-arrow {
          position: absolute;
          top: 40px;
          right: -14px;
          font-size: 1.4rem;
          color: var(--brand-orange);
          z-index: 2;
          background: var(--white);
          padding: 2px 4px;
        }

        @media (max-width: 1024px) {
          .process-grid { grid-template-columns: 1fr 1fr; }
          .process-card { border-right: 1px solid rgba(10, 25, 47, 0.07); }
          .process-arrow { display: none; }
        }

        @media (max-width: 600px) {
          .process-grid { grid-template-columns: 1fr; }
          .process-card { border-right: 1px solid rgba(10, 25, 47, 0.07); }
        }
      `}</style>
    </section>
  );
};

export default Process;
