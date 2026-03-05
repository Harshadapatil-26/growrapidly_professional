import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Founder from './components/Founder'
import Services from './components/Services'
import Strategy from './components/Strategy'
import WhyChooseUs from './components/WhyChooseUs'
import Impact from './components/Impact'
import CTA from './components/CTA'
import Footer from './components/Footer'

import StrategicSupport from './components/StrategicSupport'

function App() {
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
    }, []);

    return (
        <div className="app">
            <Navbar />
            <div className="reveal"><Hero /></div>
            <div className="reveal"><About /></div>
            <div className="reveal"><Founder /></div>
            <div className="reveal"><Services /></div>
            <div className="reveal"><Strategy /></div>
            <div className="reveal"><StrategicSupport /></div>
            <div className="reveal"><WhyChooseUs /></div>
            <div className="reveal"><Impact /></div>
            <div className="reveal"><CTA /></div>
            <Footer />
        </div>
    )
}

export default App
