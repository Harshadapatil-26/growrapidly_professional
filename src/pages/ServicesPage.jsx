import React, { useEffect } from 'react';

const ServicesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const servicesList = [
        {
            id: "01",
            title: "Political Campaign Strategy",
            tag: "Comprehensive Roadmap",
            description: "We design complete campaign strategies including voter outreach, messaging, and communication planning to help political leaders run effective and impactful campaigns.",
            features: ["Targeted Voter Outreach", "Strategic Messaging", "Communication Mapping"],
            img: "/images/backgrounds/hero_bg_v2.png"
        },
        {
            id: "02",
            title: "Political Social Media Management",
            tag: "Digital Domination",
            description: "Our team manages political social media accounts with engaging content, reels, graphics, and regular updates to maintain a strong connection with voters.",
            features: ["Viral Reels & Content", "Graphics Engineering", "Voter Engagement Hubs"],
            img: "/images/backgrounds/about_bg.png"
        },
        {
            id: "03",
            title: "Leadership Branding",
            tag: "Iconic Positioning",
            description: "We help leaders build a powerful public identity through strategic messaging, storytelling, and digital positioning to strengthen their image among citizens.",
            features: ["Strategic Storytelling", "Digital Persona Building", "Messaging Frameworks"],
            img: "/images/backgrounds/leadership_bg.png"
        },
        {
            id: "04",
            title: "Constituency Strategy & Ground Planning",
            tag: "Local Intelligence",
            description: "We create constituency-focused strategies based on local issues, voter behavior, and ground-level insights to improve public engagement.",
            features: ["Micro-Voter Profiling", "Ground Insights", "Engagement Optimization"],
            img: "/images/backgrounds/impact_bg.png"
        },
        {
            id: "05",
            title: "Digital Advertising Campaigns",
            tag: "Massive Reach",
            description: "We run targeted digital campaigns to reach the right audience, increase visibility, and strengthen the impact of political and business campaigns.",
            features: ["Precision Ad Targeting", "Visibility Blitzes", "Impact Multipliers"],
            img: "/images/backgrounds/hero_bg.png"
        },
        {
            id: "06",
            title: "Content Creation & Political Messaging",
            tag: "Narrative Warfare",
            description: "Our team creates impactful content including campaign messages, videos, graphics, and speeches that clearly communicate the leader’s vision.",
            features: ["Speech Writing", "Cinematic Campaign Videos", "Graphic Storytelling"],
            img: "/images/backgrounds/about_bg.png"
        },
        {
            id: "07",
            title: "Business Digital Marketing",
            tag: "Corporate Growth",
            description: "Along with political strategy, we provide digital marketing services for businesses including branding, social media marketing, and lead generation.",
            features: ["Business Branding", "Lead Generation Systems", "Market Domination"],
            img: "/images/backgrounds/impact_bg.png"
        }
    ];

    return (
        <div className="services-page premium-grain">
            <section className="services-hero bg-white">
                <div className="container">
                    <div className="services-hero-inner reveal active">
                        <div className="services-hero-text">
                            <span className="section-tag">GROWRAPIDLY Capabilities</span>
                            <h1 className="display-title">STRATEGIC <br /><span className="text-emerald">POWER.</span></h1>
                            <p className="text-black opacity-70 max-600">
                                We deliver a comprehensive suite of tactical services designed for institutional leaders and innovative businesses.
                            </p>
                        </div>
                        <div className="services-hero-img-wrap">
                            <img src="/images/backgrounds/hero_bg_v2.png" alt="Services" className="services-hero-img" />
                        </div>
                    </div>
                </div>
            </section>

            {servicesList.map((service, index) => (
                <section key={service.id} className={`service-detail ${index % 2 !== 0 ? 'bg-light' : 'bg-white'}`}>
                    <div className="container">
                        <div className="detail-split reveal">
                            <div className="detail-info">
                                <span className={`service-num ${index % 2 !== 0 ? 'text-emerald' : 'text-navy'}`}>{service.id}</span>
                                <span className="service-tag-small uppercase text-black">{service.tag}</span>
                                <h2 className="section-head text-black">{service.title}</h2>
                                <p className="opacity-70 service-desc-large text-black">{service.description}</p>
                                <ul className="feature-list">
                                    {service.features.map(f => (
                                        <li key={f}>
                                            <div className={`feature-line ${index % 2 !== 0 ? 'bg-emerald' : 'bg-navy'}`}></div>
                                            <span className="text-black">{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="detail-visual">
                                <div className="detail-img-wrap">
                                    <img src={service.img} alt={service.title} className="gritty-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            <section className="cta-banner bg-white premium-grain">
                <div className="container text-center">
                    <h2 className="display-title">READY TO ARCHITECT <br /><span className="text-emerald">VICTORY?</span></h2>
                    <div className="mt-50">
                        <a href="#contact" className="btn btn-black">INITIATE STRATEGY</a>
                    </div>
                </div>
            </section>

            <style>{`
                .services-page {
                    padding-top: var(--header-height);
                }

                .services-hero {
                    padding: 100px 0 80px;
                }

                .services-hero-inner {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 80px;
                    align-items: center;
                }

                .services-hero-text {
                    max-width: 560px;
                }

                .services-hero-img-wrap {
                    border-radius: 20px;
                    overflow: hidden;
                    height: 420px;
                    box-shadow: var(--shadow-hover);
                }

                .services-hero-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }                .service-detail {
                    padding: 140px 0;
                    border-bottom: 1px solid rgba(10, 25, 47, 0.05);
                }

                .detail-split {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 100px;
                    align-items: center;
                }

                .service-num {
                    font-family: var(--font-heading);
                    font-size: 1.25rem;
                    font-weight: 800;
                    color: var(--brand-orange);
                    margin-bottom: 15px;
                    display: block;
                }

                .service-tag-small {
                    font-size: 0.85rem;
                    font-weight: 800;
                    letter-spacing: 0.25em;
                    margin-bottom: 1.5rem;
                    display: block;
                    color: var(--brand-blue);
                }

                .service-desc-large {
                    font-size: 1.35rem;
                    margin: 35px 0 45px;
                    line-height: 1.7;
                    color: var(--brand-black);
                    font-weight: 500;
                }

                .feature-list {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }

                .feature-list li {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    font-weight: 700;
                    font-family: var(--font-heading);
                    text-transform: uppercase;
                    font-size: 0.9rem;
                    letter-spacing: 0.1em;
                    color: var(--brand-blue);
                }

                .feature-line {
                    width: 40px;
                    height: 2px;
                }

                .detail-img-wrap {
                    position: relative;
                    height: 550px;
                    border: 1px solid rgba(10, 25, 47, 0.1);
                    border-radius: var(--radius-sm);
                    overflow: hidden;
                }

                .services-hero-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .gritty-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }

                .max-600 { max-width: 560px; font-size: 1.1rem; margin-top: 20px; line-height: 1.7; }

                @media (max-width: 1024px) {
                    .services-hero-inner { grid-template-columns: 1fr; gap: 40px; }
                    .services-hero-img-wrap { height: 300px; }
                    .services-hero-text { max-width: 100%; }
                }

                .img-overlay-light-detail {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to right, rgba(255,255,255,0.1), var(--white) 90%);
                    z-index: 2;
                }

                .cta-banner {
                    padding: 180px 0;
                    border-top: 1px solid rgba(10, 25, 47, 0.1);
                }

                .text-center { text-align: center; }
                .mt-50 { margin-top: 50px; }

                @media (max-width: 1024px) {
                    .detail-split { grid-template-columns: 1fr; gap: 60px; }
                    .service-detail:nth-child(even) .detail-info { order: 1; }
                    .service-detail:nth-child(even) .detail-visual { order: 2; }
                }
            `}</style>
        </div>
    );
};

export default ServicesPage;
