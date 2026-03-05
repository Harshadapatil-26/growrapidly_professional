import React from 'react'

const Leadership = () => {
  const leaders = [
    {
      name: "Bipin M. Jagtap",
      role: "Founder & CEO",
      image: "/images/bipin.png",
      bio: "A passionate political strategist and digital marketing professional focused on building strong political communication and impactful campaign strategies. With a deep understanding of digital platforms and ground-level dynamics, Bipin works to help leaders connect with people, strengthen their public image, and create meaningful political impact."
    },
    {
      name: "Prathamesh G. Pawar",
      role: "CMO",
      image: "/images/prathamesh.png",
      bio: "An expert in marketing operations and campaign management, Prathamesh drives the growth strategy for our clients. His expertise in digital engagement and audience segmentation ensures that every message reaches the right person at the right time, maximizing impact and conversion for political growth."
    }
  ]

  return (
    <section id="leadership" className="leadership-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">The Leadership</span>
          <h2 className="section-title">Driving Growth & Strategy</h2>
          <p className="section-subtitle">Meet the visionaries behind Grow Rapidly who are redefining political communication.</p>
        </div>

        <div className="leadership-grid">
          {leaders.map((leader, index) => (
            <div key={index} className="leader-card reveal">
              <div className="leader-img-area">
                <div className="img-frame">
                  <img src={leader.image} alt={leader.name} className="leader-img" />

                </div>
              </div>
              <div className="leader-text-area">
                <h3 className="leader-name">{leader.name}</h3>
                <span className="leader-role">{leader.role}</span>
                <p className="leader-bio">{leader.bio}</p>
                <div className="leader-socials">
                  <a href="#" className="s-link">LinkedIn</a>
                  <a href="#" className="s-link">Twitter</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .leadership-section {
          background-color: var(--white);
          padding: 120px 0;
        }
        .section-header {
          text-align: center;
          margin-bottom: 80px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        .section-title {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          color: var(--text);
        }
        .section-subtitle {
          font-size: 1.25rem;
          color: var(--text-muted);
        }
        .leadership-grid {
          display: flex;
          flex-direction: column;
          gap: 120px;
        }
        .leader-card {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 80px;
          align-items: center;
        }
        .leader-card:nth-child(even) {
          direction: rtl;
        }
        .leader-card:nth-child(even) .leader-text-area {
          direction: ltr;
          text-align: left;
        }
        .img-frame {
          position: relative;
        }
        .leader-img-area {
          max-width: 400px;
          margin: 0 auto;
        }
        .leader-img {
          width: 100%;
          aspect-ratio: 4 / 5;
          border-radius: 32px;
          box-shadow: var(--shadow-md);
          display: block;
          object-fit: cover;
          object-position: center 20%;
        }


        .leader-name {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: var(--text);
        }
        .leader-role {
          display: block;
          font-size: 1.25rem;
          color: var(--primary);
          font-weight: 700;
          margin-bottom: 2rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .leader-bio {
          font-size: 1.125rem;
          line-height: 1.8;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
        }
        .leader-socials {
          display: flex;
          gap: 30px;
        }
        .s-link {
          text-decoration: none;
          color: var(--text);
          font-weight: 700;
          font-size: 0.9375rem;
          transition: var(--transition);
        }
        .s-link:hover { color: var(--primary); }

        @media (max-width: 992px) {
          .leader-card { grid-template-columns: 1fr; gap: 40px; }
          .leader-card:nth-child(even) { direction: ltr; }
          .section-title { font-size: 2.5rem; }
          .leader-name { font-size: 2rem; }
        }
        @media (max-width: 480px) {
          .section-title { font-size: 2rem; }
          .leader-name { font-size: 1.75rem; }
          .leadership-grid { gap: 80px; }
          .leader-img-area { width: 100%; max-width: 300px; }
        }
      `}</style>
    </section>
  )
}

export default Leadership
