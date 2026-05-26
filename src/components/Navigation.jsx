import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  const links = [
    { path: '/', label: 'Home' },
    { path: '/research', label: 'Research' },
    { path: '/publications', label: 'Publications' },
    { path: '/people', label: 'Team' },
    { path: '/data-and-code', label: 'Code & Data' }
  ];

  return (
    <nav className="navbar glass">
      <div className="container nav-content">
        <Link to="/" className="nav-logo" style={{ display: 'flex', flexDirection: 'column' }}>
          <div>GEARS <span>LAB</span></div>
          <div style={{ fontSize: '0.6rem', color: 'var(--text-secondary)', fontWeight: 400, letterSpacing: '0.05em', marginTop: '-0.2rem' }}>
            Global Environmental Analysis and Remote Sensing
          </div>
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
