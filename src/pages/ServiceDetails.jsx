import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';

const servicesData = {
    "political-campaign-strategy": {
        title: "Political Campaign Strategy",
        description: "We design complete campaign strategies including voter outreach, messaging, and communication planning to help political leaders run effective and impactful campaigns.",
        icon: "🎯",
        features: ["Voter Outreach", "Messaging", "Communication Planning"]
    },
    "political-social-media-management": {
        title: "Political Social Media Management",
        description: "Our team manages political social media accounts with engaging content, reels, graphics, and regular updates to maintain a strong connection with voters.",
        icon: "📱",
        features: ["Engaging Content", "Reels & Graphics", "Regular Updates"]
    },
    "leadership-branding": {
        title: "Leadership Branding",
        description: "We help leaders build a powerful public identity through strategic messaging, storytelling, and digital positioning to strengthen their image among citizens.",
        icon: "👑",
        features: ["Public Identity", "Strategic Messaging", "Digital Positioning"]
    },
    "constituency-strategy-ground-planning": {
        title: "Constituency Strategy & Ground Planning",
        description: "We create constituency-focused strategies based on local issues, voter behavior, and ground-level insights to improve public engagement.",
        icon: "🗺️",
        features: ["Local Issue Focus", "Voter Behavior Analysis", "Ground Insights"]
    },
    "digital-advertising-campaigns": {
        title: "Digital Advertising Campaigns",
        description: "We run targeted digital campaigns to reach the right audience, increase visibility, and strengthen the impact of political and business campaigns.",
        icon: "📣",
        features: ["Targeted Ads", "Visibility Boost", "Impact Analytics"]
    },
    "content-creation-political-messaging": {
        title: "Content Creation & Political Messaging",
        description: "Our team creates impactful content including campaign messages, videos, graphics, and speeches that clearly communicate the leader’s vision.",
        icon: "✍️",
        features: ["Speeches & Scripts", "High-impact Videos", "Visual Messaging"]
    },
    "business-digital-marketing": {
        title: "Business Digital Marketing",
        description: "Along with political strategy, we provide digital marketing services for businesses including branding, social media marketing, and lead generation.",
        icon: "💼",
        features: ["Corporate Branding", "Lead Generation", "Social Marketing"]
    }
};

const ServiceDetails = () => {
    const { slug } = useParams();
    const service = servicesData[slug];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!service) {
        return (
            <div className="error-page">
                <Navbar />
                <div className="container" style={{ padding: '200px 0', textAlign: 'center' }}>
                    <h1>Service Not Found</h1>
                    <Link to="/" className="btn btn-primary" style={{ marginTop: '20px' }}>Back Home</Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="service-details-page">
            <Navbar />
            <Breadcrumbs />

            <section className="service-hero premium-grain">
                <div className="container">
                    <div className="service-header-content">
                        <span className="service-icon-large">{service.icon}</span>
                        <h1 className="service-title">{service.title}</h1>
                        <p className="service-lead">{service.description}</p>
                    </div>
                </div>
            </section>

            <section className="service-info">
                <div className="container">
                    <div className="info-grid">
                        <div className="info-main">
                            <h2>Overview</h2>
                            <p>
                                In the modern political landscape, generic communication is no longer enough. Our {service.title} approach is built on data, empathy, and strategic foresight. We ensure your message doesn't just reach people—it resonates with them.
                            </p>
                            <div className="feature-list">
                                {service.features.map((f, i) => (
                                    <div key={i} className="feature-item">
                                        <span className="check">✓</span>
                                        <span>{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="info-sidebar">
                            <div className="cta-card">
                                <h3>Ready to strategize?</h3>
                                <p>Let's build a movement that lasts.</p>
                                <Link to="/#contact" className="btn btn-primary" style={{ width: '100%' }}>Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            <style>{`
        .service-hero {
          padding: 80px 0 100px;
          background: white;
          text-align: center;
        }
        .service-icon-large {
          font-size: 5rem;
          display: block;
          margin-bottom: 24px;
        }
        .service-title {
          font-size: 3.5rem;
          margin-bottom: 24px;
        }
        .service-lead {
          font-size: 1.25rem;
          color: var(--text-muted);
          max-width: 800px;
          margin: 0 auto;
        }
        .service-info {
          padding: 100px 0;
          background: var(--light-bg);
        }
        .info-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 80px;
        }
        .info-main h2 {
          font-size: 2rem;
          margin-bottom: 24px;
        }
        .info-main p {
          font-size: 1.125rem;
          color: var(--text-muted);
          margin-bottom: 32px;
        }
        .feature-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 700;
          background: white;
          padding: 16px;
          border-radius: 12px;
          border: 1px solid var(--border);
        }
        .check {
          color: var(--primary);
        }
        .info-sidebar .cta-card {
          background: white;
          padding: 40px;
          border-radius: 24px;
          border: 1px solid var(--border);
          box-shadow: var(--shadow-md);
          text-align: center;
        }
        .cta-card h3 {
          margin-bottom: 12px;
        }
        .cta-card p {
          margin-bottom: 24px;
          color: var(--text-muted);
        }
        @media (max-width: 992px) {
          .info-grid { grid-template-columns: 1fr; }
          .feature-list { grid-template-columns: 1fr; }
        }
      `}</style>
        </div>
    );
};

export default ServiceDetails;
