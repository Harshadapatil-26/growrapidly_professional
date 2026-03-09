import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <nav className="breadcrumbs-nav">
      <div className="container">
        <ul className="breadcrumbs-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const label = value
              .split('-')
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');

            return (
              <li key={to}>
                <span className="separator">/</span>
                {last ? (
                  <span className="current">{label}</span>
                ) : (
                  <Link to={to}>{label}</Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <style>{`
        .breadcrumbs-nav {
          padding: 24px 0;
          background: var(--light-gray);
          border-bottom: 1px solid rgba(10, 25, 47, 0.05);
          margin-top: var(--header-height);
        }
        .breadcrumbs-list {
          display: flex;
          list-style: none;
          gap: 12px;
          align-items: center;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .breadcrumbs-list a {
          color: var(--brand-black);
          text-decoration: none;
          opacity: 0.6;
          transition: var(--transition);
        }

        .breadcrumb-link:hover {
          color: var(--brand-blue);
          opacity: 1;
        }

        .breadcrumb-current {
          color: var(--brand-black);
          font-weight: 700;
        }
        .separator {
          color: var(--brand-black);
          opacity: 0.2;
          margin: 0 8px;
        }
      `}</style>
    </nav>
  );
};

export default Breadcrumbs;
