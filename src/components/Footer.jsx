import React from 'react';

function Footer() {
  return (
    <footer style={{ 
      borderTop: '1px solid rgba(255,255,255,0.05)', 
      padding: '3rem 0', 
      marginTop: 'auto',
      backgroundColor: 'var(--bg-color)' 
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.5rem' }}>GEARS Laboratory</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Department of Natural Resources and Environmental Sciences<br/>
            University of Nevada, Reno
          </p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <h3 style={{ fontSize: '1rem', color: '#fff', marginBottom: '0.5rem' }}>Contact Us</h3>
          <a href="mailto:jgreenberg@unr.edu" style={{ color: 'var(--accent-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'flex-end' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            jgreenberg@unr.edu
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
