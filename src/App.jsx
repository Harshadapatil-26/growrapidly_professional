import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Leadership from './components/Leadership'
import Team from './components/Team'
import Services from './components/Services'
import Strategy from './components/Strategy'
import WhyChooseUs from './components/WhyChooseUs'
import Impact from './components/Impact'
import CTA from './components/CTA'
import Footer from './components/Footer'
import StrategicSupport from './components/StrategicSupport'
import ServiceDetails from './pages/ServiceDetails'
import WhatsAppFloating from './components/WhatsAppFloating'

// Component to handle scroll reveals in a multi-page context
const ScrollReveal = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, [location]);

    return children;
};

const HomePage = () => (
    <>
        <div className="reveal"><Hero /></div>
        <div className="reveal"><Services /></div>
        <div className="reveal"><About /></div>
        <div className="reveal"><Leadership /></div>
        <div className="reveal"><Team /></div>
        <div className="reveal"><Strategy /></div>
        <div className="reveal"><StrategicSupport /></div>
        <div className="reveal"><WhyChooseUs /></div>
        <div className="reveal"><Impact /></div>
        <div className="reveal"><CTA /></div>
    </>
);

function App() {
    return (
        <Router>
            <ScrollReveal>
                <div className="app">
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Navbar />
                                <HomePage />
                                <Footer />
                            </>
                        } />
                        <Route path="/services/:slug" element={<ServiceDetails />} />
                        {/* Add more routes here as needed (e.g., /about, /founder) */}
                        <Route path="*" element={
                            <>
                                <Navbar />
                                <div className="container" style={{ padding: '200px 0', textAlign: 'center' }}>
                                    <h1>404 - Page Not Found</h1>
                                    <p style={{ marginTop: '20px' }}>The page you're looking for doesn't exist.</p>
                                </div>
                                <Footer />
                            </>
                        } />
                    </Routes>
                    <WhatsAppFloating />
                </div>
            </ScrollReveal>
        </Router>
    )
}

export default App
