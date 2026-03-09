import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/#leadership' },
    { name: 'Leadership', href: '/#leadership' },
    { name: 'Support', href: '/#why-us' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-wrapper">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="Grow Rapidly" className="logo-img" />
          <span className="logo-text text-black">GROWRAPIDLY</span>
        </Link>

        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.href.startsWith('/#') || link.href === '/' ? (
                <a
                  href={link.href}
                  className="nav-link text-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  to={link.href}
                  className="nav-link text-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
          <li className="mobile-only">
            <a href="#contact" className="btn btn-emerald">LET'S TALK</a>
          </li>
        </ul>

        <div className="nav-actions">
          <a href="#contact" className="btn btn-emerald desktop-only">LET'S TALK</a>
          <button
            className={`menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <style>{`
                .navbar {
                    height: var(--header-height);
                    display: flex;
                    align-items: center;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    background-color: transparent;
                    transition: var(--transition);
                    border-bottom: 1px solid transparent;
                }

                .navbar.scrolled {
                    background-color: rgba(255, 255, 255, 0.8);
                    backdrop-filter: blur(15px);
                    -webkit-backdrop-filter: blur(15px);
                    box-shadow: var(--shadow-subtle);
                    border-bottom: 1px solid var(--glass-border);
                    height: 80px;
                }

                .nav-wrapper {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                }

                .nav-logo {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    text-decoration: none;
                }

                .logo-img {
                    height: 44px;
                }

                .logo-text {
                    font-family: var(--font-heading);
                    font-weight: 800;
                    font-size: 1.15rem;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                }

                .nav-menu {
                    display: flex;
                    list-style: none;
                    gap: 48px;
                    align-items: center;
                }

                .nav-link {
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 0.85rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    transition: var(--transition);
                    opacity: 0.7;
                    position: relative;
                }

                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: var(--brand-green);
                    transition: var(--transition);
                }

                .nav-link:hover {
                    opacity: 1;
                    color: var(--brand-green) !important;
                }

                .nav-link:hover::after {
                    width: 100%;
                }

                .nav-actions {
                    display: flex;
                    align-items: center;
                    gap: 24px;
                }

                .desktop-only { display: flex; }
                .mobile-only { display: none; }

                .menu-toggle {
                    display: none;
                    flex-direction: column;
                    gap: 6px;
                    background: none;
                    border: none;
                    cursor: pointer;
                    z-index: 1001;
                }

                .menu-toggle span {
                    display: block;
                    width: 28px;
                    height: 2px;
                    background-color: var(--brand-black);
                    transition: var(--transition);
                }

                @media (max-width: 1024px) {
                    .nav-menu {
                        position: fixed;
                        top: 0;
                        right: -100%;
                        width: 100%;
                        height: 100vh;
                        background: var(--white);
                        flex-direction: column;
                        justify-content: center;
                        padding: 60px;
                        transition: 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                    }

                    .nav-menu.active { right: 0; }
                    .nav-menu.active .nav-link { color: var(--brand-blue); font-size: 1.5rem; margin-bottom: 20px; }
                    .menu-toggle { display: flex; }
                    .desktop-only { display: none; }
                    .mobile-only { display: block; }
                }

                .menu-toggle.active span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
                .menu-toggle.active span:nth-child(2) { opacity: 0; }
                .menu-toggle.active span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
            `}</style>
    </nav>
  );
};

export default Navbar;
