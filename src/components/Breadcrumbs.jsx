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
          padding: 20px 0;
          background: var(--light-bg);
          border-bottom: 1px solid var(--border);
          margin-top: var(--header-height);
        }
        .breadcrumbs-list {
          display: flex;
          list-style: none;
          gap: 12px;
          align-items: center;
          font-size: 0.875rem;
          font-weight: 600;
        }
        .breadcrumbs-list a {
          color: var(--text-muted);
          text-decoration: none;
          transition: var(--transition);
        }
        .breadcrumbs-list a:hover {
          color: var(--primary);
        }
        .separator {
          color: var(--border);
          margin: 0 4px;
        }
        .current {
          color: var(--text);
        }
      `}</style>
        </nav>
    );
};

export default Breadcrumbs;
