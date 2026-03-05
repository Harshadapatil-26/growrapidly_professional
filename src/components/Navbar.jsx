import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollToSection = (id) => {
    setIsMenuOpen(false); // Close menu on click
    if (isHome) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="navbar-white">
      <div className="container nav-container">
        <Link to="/" className="logo">
          <img src="/images/logo.png" alt="Grow Rapidly" className="logo-img" />
          <span className="brand-name">Grow Rapidly</span>
        </Link>

        {/* Mobile menu toggle */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            {isHome ? (
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
            ) : (
              <Link to="/#about" onClick={() => setIsMenuOpen(false)}>About</Link>
            )}
          </li>
          <li>
            {isHome ? (
              <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a>
            ) : (
              <Link to="/#services" onClick={() => setIsMenuOpen(false)}>Services</Link>
            )}
          </li>
          <li>
            {isHome ? (
              <a href="#strategy" onClick={(e) => { e.preventDefault(); scrollToSection('strategy'); }}>Strategy</a>
            ) : (
              <Link to="/#strategy" onClick={() => setIsMenuOpen(false)}>Strategy</Link>
            )}
          </li>
          <li>
            {isHome ? (
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
            ) : (
              <Link to="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            )}
          </li>
          {/* Include CTA inside menu for mobile */}
          <li className="mobile-only-cta">
            <Link to="/#contact" className="btn-nav" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
          </li>
        </ul>

        <div className="nav-cta desktop-only">
          <Link to="/#contact" className="btn-nav">Get Started</Link>
        </div>
      </div>
      <style>{`
        .navbar-white {
          height: var(--header-height);
          background-color: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          display: flex;
          align-items: center;
          border-bottom: 1px solid var(--border);
        }
        
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          z-index: 1002;
        }

        .logo-img {
          height: 42px;
        }

        .brand-name {
          font-weight: 900;
          font-size: 1.5rem;
          color: var(--text);
          letter-spacing: -0.03em;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 40px;
          align-items: center;
        }

        .nav-links a {
          text-decoration: none;
          color: var(--text);
          font-weight: 600;
          font-size: 0.9375rem;
          transition: var(--transition);
          opacity: 0.7;
        }

        .nav-links a:hover {
          opacity: 1;
          color: var(--primary);
        }

        .btn-nav {
          background-color: var(--primary);
          color: var(--white);
          padding: 12px 24px;
          border-radius: var(--radius);
          text-decoration: none;
          font-weight: 700;
          font-size: 0.875rem;
          transition: var(--transition);
          display: block;
        }

        .btn-nav:hover {
          background-color: var(--primary-dark);
          box-shadow: 0 8px 15px rgba(102, 187, 27, 0.2);
          opacity: 1;
          color: var(--white);
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text);
          z-index: 1002;
        }

        .mobile-only-cta {
          display: none;
        }

        @media (max-width: 992px) {
          .mobile-menu-btn {
            display: block;
          }
          
          .desktop-only {
            display: none;
          }

          .nav-links {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background-color: var(--white);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 40px;
            transform: translateY(-100%);
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            z-index: 1001;
            padding: 20px;
            box-sizing: border-box;
          }

          .nav-links.active {
            transform: translateY(0);
          }
          
          .nav-links a {
            font-size: 1.5rem;
          }
          
          .mobile-only-cta {
            display: block;
            margin-top: 20px;
          }
          
          .mobile-only-cta .btn-nav {
            font-size: 1.125rem;
            padding: 16px 32px;
          }
        }
        
        @media (max-width: 480px) {
           .logo-img { height: 32px; }
           .brand-name { font-size: 1.25rem; }
        }
      `}</style>
    </nav>
  )
}

export default Navbar
