import React from 'react';

const Hero = () => {
    return (
        <section className="hero-v3 premium-grain" id="home">
            <div className="hero-background">
                <div className="hero-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                </div>
                <div className="hero-image-wrap">
                    <img src="/images/backgrounds/hero_bg_v2.png" alt="Strategic Command Center" className="hero-image-main" />
                    <div className="hero-image-overlay"></div>
                </div>
            </div>

            <div className="container hero-interface">
                <div className="hero-branding">
                    <div className="system-status">
                        <span className="dot"></span>
                        <span className="status-text text-navy">Results-Driven Digital Marketing Agency</span>
                    </div>
                </div>

                <div className="hero-core">
                    <div className="message-block reveal active">
                        <h1 className="hero-main-title">
                            <div className="title-row">
                                <span className="word">Grow</span>
                                <span className="connector">Your</span>
                                <span className="text-navy emphasis">Business</span>
                            </div>
                            <div className="title-row">
                                <span className="connector">with</span>
                                <span className="text-saffron emphasis">Data-Driven</span>
                            </div>
                            <div className="title-row">
                                <span className="text-emerald emphasis">Digital Marketing</span>
                            </div>
                        </h1>

                        <div className="hero-divider"></div>

                        <p className="hero-lead text-black">
                            We help Real Estate, Hospitals, and Restaurants generate more leads, bookings, and revenue through powerful digital marketing strategies.
                        </p>

                        <div className="hero-btns">
                            <a href="#contact" className="btn btn-black">
                                Get Free Consultation
                                <span className="btn-icon">→</span>
                            </a>
                            <a href="#contact" className="btn btn-outline-black">Book Strategy Call</a>
                        </div>
                    </div>
                </div>

                <div className="hero-footer-elements">
                    <div className="coordinate-block">
                        <span className="coord">28.6139° N, 77.2090° E</span>
                        <span className="coord-label text-blue">Operational Delta</span>
                    </div>
                    <div className="scroll-hint">
                        <div className="scroll-bar"></div>
                        <span className="scroll-label">Explore Strategy</span>
                    </div>
                    <div className="stat-quick">
                        <span className="stat-val text-orange">94.2%</span>
                        <span className="stat-tag">Win Probability</span>
                    </div>
                </div>
            </div>

            <style>{`
                .hero-v3 {
                    min-height: 100vh;
                    position: relative;
                    background: var(--white);
                    overflow: visible;
                    display: flex;
                    align-items: center;
                    padding-top: var(--header-height);
                    padding-bottom: 80px;
                }

                .hero-background {
                    position: absolute;
                    inset: 0;
                    z-index: 1;
                    overflow: hidden;
                }

                .hero-shapes {
                    position: absolute;
                    inset: 0;
                    z-index: 2;
                    pointer-events: none;
                }

                .shape {
                    position: absolute;
                    filter: blur(100px);
                    opacity: 0.12;
                    border-radius: 50%;
                    animation: float 25s infinite alternate ease-in-out;
                }

                .shape-1 {
                    width: 500px;
                    height: 500px;
                    background: var(--brand-blue);
                    top: -150px;
                    left: -100px;
                }

                .shape-2 {
                    width: 400px;
                    height: 400px;
                    background: var(--brand-orange);
                    bottom: 5%;
                    right: 15%;
                    animation-delay: -7s;
                }

                @keyframes float {
                    0% { transform: translate(0, 0) scale(1); }
                    100% { transform: translate(60px, 80px) scale(1.1); }
                }

                .hero-image-wrap {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 55%;
                    height: 100%;
                    clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
                }

                .hero-image-main {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: brightness(0.7) contrast(1.1);
                    opacity: 1;
                }

                .hero-image-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to right, var(--white) 0%, rgba(255,255,255,0.6) 30%, transparent 100%);
                }

                .hero-interface {
                    position: relative;
                    z-index: 10;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding-top: 60px;
                    padding-bottom: 40px;
                    gap: 40px;
                }

                .system-status {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .dot {
                    width: 8px;
                    height: 8px;
                    background: var(--brand-green);
                    border-radius: 50%;
                    box-shadow: 0 0 15px var(--brand-green);
                    animation: statusPulse 2s infinite;
                }

                @keyframes statusPulse {
                    0% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.4; transform: scale(0.9); }
                    100% { opacity: 1; transform: scale(1); }
                }

                .status-text {
                    font-size: 0.75rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.25em;
                    color: var(--brand-blue);
                }

                .hero-main-title {
                    font-size: clamp(2.5rem, 6vw, 4.5rem);
                    line-height: 1.05;
                    margin-bottom: 30px;
                }

                .title-row {
                    display: flex;
                    align-items: baseline;
                    gap: 0.35em;
                    margin-bottom: 0.15em;
                }

                .connector {
                    font-size: 0.45em;
                    text-transform: lowercase;
                    font-weight: 500;
                    opacity: 0.5;
                    font-family: var(--font-main);
                    font-style: italic;
                }

                .emphasis {
                    font-weight: 800;
                }

                .hero-divider {
                    width: 100px;
                    height: 4px;
                    background: var(--brand-orange);
                    margin: 28px 0;
                }

                .hero-lead {
                    font-size: 1.1rem;
                    max-width: 580px;
                    line-height: 1.7;
                    margin-bottom: 36px;
                    font-weight: 500;
                    opacity: 0.85;
                }

                .hero-btns {
                    display: flex;
                    gap: 16px;
                    flex-wrap: wrap;
                    align-items: center;
                }

                .hero-btns .btn {
                    padding: 1rem 2rem;
                    font-size: 0.82rem;
                    white-space: nowrap;
                }

                .btn-icon {
                    font-size: 1.2rem;
                    transition: transform 0.3s ease;
                }

                .hero-btns a:hover .btn-icon {
                    transform: translateX(5px);
                }

                .hero-footer-elements {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                }

                .coordinate-block {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .coord {
                    font-size: 0.75rem;
                    font-weight: 700;
                    letter-spacing: 0.1em;
                    color: var(--brand-black);
                }

                .coord-label {
                    font-size: 0.6rem;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    font-weight: 800;
                    color: var(--brand-blue);
                }

                .scroll-hint {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 20px;
                }

                .scroll-bar {
                    width: 1px;
                    height: 60px;
                    background: rgba(26, 26, 26, 0.1);
                    position: relative;
                    overflow: hidden;
                }

                .scroll-bar::after {
                    content: '';
                    position: absolute;
                    top: -100%;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: var(--brand-blue);
                    animation: scrollAnim 2.5s infinite;
                }

                @keyframes scrollAnim {
                    0% { top: -100%; }
                    100% { top: 100%; }
                }

                .scroll-label {
                    font-size: 0.7rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.4em;
                    writing-mode: vertical-rl;
                    color: var(--brand-black);
                }

                .stat-quick {
                    display: flex;
                    flex-direction: column;
                    text-align: right;
                    gap: 4px;
                }

                .stat-val {
                    font-size: 1.75rem;
                    font-weight: 800;
                    line-height: 1;
                    color: var(--brand-orange);
                }

                .stat-tag {
                    font-size: 0.65rem;
                    text-transform: uppercase;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                    opacity: 0.7;
                    color: var(--brand-black);
                }

                @media (max-width: 1024px) {
                    .hero-v3 { height: auto; padding: 120px 0 80px; }
                    .hero-image-wrap {
                        width: 100%;
                        clip-path: none;
                        opacity: 0.25;
                    }
                    .hero-image-overlay {
                        background: linear-gradient(to bottom, var(--white) 0%, transparent 50%, var(--white) 100%);
                    }
                    .hero-footer-elements {
                        display: none;
                    }
                    .hero-main-title {
                        font-size: 2.25rem;
                    }
                    .title-row {
                        flex-wrap: wrap;
                        gap: 0.2em;
                    }
                    .hero-btns {
                        flex-direction: column;
                    }
                    .hero-divider { margin: 30px 0; }
                    .hero-lead { font-size: 1.1rem; margin-bottom: 40px; }
                }

                @media (max-width: 480px) {
                    .hero-main-title { font-size: 1.85rem; }
                    .connector { font-size: 0.5em; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
