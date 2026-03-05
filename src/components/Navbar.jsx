import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar-white">
      <div className="container nav-container">
        <div className="logo">
          <img src="/images/logo.png" alt="Grow Rapidly" className="logo-img" />
          <span className="brand-name">Grow Rapidly</span>
        </div>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#strategy">Strategy</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="nav-cta">
          <a href="#contact" className="btn-nav">Get Started</a>
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
        }

        .btn-nav:hover {
          background-color: var(--primary-dark);
          box-shadow: 0 8px 15px rgba(102, 187, 27, 0.2);
        }

        @media (max-width: 992px) {
          .nav-links { display: none; }
        }
      `}</style>
    </nav>
  )
}

export default Navbar
