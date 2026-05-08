import React from 'react';

export default function About() {
  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 2rem' }}>
      <h1 className="text-primary">About Gears Lab</h1>
      <div className="glass-card" style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Our Mission</h2>
        <p className="text-muted" style={{ marginBottom: '2rem' }}>
          Welcome to the Global Environmental Analysis and Remote Sensing (GEARS) Laboratory 
          at the University of Nevada, Reno. We specialize in bringing advanced 
          computational techniques to ecological challenges.
        </p>

        <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Contact</h3>
            <p className="text-muted">jgreenberg@unr.edu</p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Location</h3>
            <p className="text-muted">
              Department of Natural Resources & Environmental Science<br />
              University of Nevada, Reno
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
