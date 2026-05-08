import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '3rem 2rem',
      color: 'var(--text-muted)',
      fontSize: '0.9rem',
      borderTop: '1px solid var(--border-color)',
      marginTop: 'auto'
    }}>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Gears Laboratory. University of Nevada, Reno.</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>
          Advancing research in spatial informatics and natural resource management.
        </p>
      </div>
    </footer>
  );
}
