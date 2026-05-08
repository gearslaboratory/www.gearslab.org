import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'People', path: '/people' },
  { name: 'Research', path: '/research' },
  { name: 'Data & Code', path: '/data-and-code' },
  { name: 'Services', path: '/services' }
];

export default function Navigation() {
  const location = useLocation();

  return (
    <nav style={{
      padding: '1.5rem 5%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(11, 15, 25, 0.8)'
    }}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div style={{
          fontSize: '1.5rem',
          fontWeight: 800,
          letterSpacing: '-0.5px'
        }} className="text-gradient">
          Gears<span className="text-primary">Laboratory</span>
        </div>
      </Link>
      <div style={{ display: 'flex', gap: '2rem' }}>
        {navLinks.map((link) => (
          <Link 
            key={link.path}
            to={link.path}
            style={{
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.95rem',
              transition: 'color 0.2s',
              color: location.pathname === link.path ? 'var(--primary)' : 'var(--text-muted)'
            }}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
