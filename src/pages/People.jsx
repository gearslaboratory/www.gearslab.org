import React from 'react';

export default function People() {
  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 2rem' }}>
      <h1 className="text-primary">Our Team</h1>
      <p className="text-muted" style={{ marginBottom: '3rem', fontSize: '1.2rem' }}>
        Meet the researchers, students, and collaborators of the Gears Laboratory.
      </p>

      <div className="grid grid-cols-1" style={{ gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {/* Placeholder for Principal Investigator */}
        <div className="glass-card">
          <div style={{ height: '200px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '8px', marginBottom: '1.5rem' }}></div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Dr. Jonathan Greenberg</h2>
          <p className="text-primary" style={{ marginBottom: '1rem', fontWeight: 600 }}>Principal Investigator</p>
          <p className="text-muted" style={{ fontSize: '0.95rem' }}>
            Associate Professor in the Department of Natural Resources & Environmental Science.
          </p>
        </div>

        {/* Placeholders for Lab Members */}
        {[1, 2, 3].map((i) => (
          <div key={i} className="glass-card">
            <div style={{ height: '200px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '8px', marginBottom: '1.5rem' }}></div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Lab Member Name</h2>
            <p className="text-primary" style={{ marginBottom: '1rem', fontWeight: 600 }}>Graduate Student</p>
            <p className="text-muted" style={{ fontSize: '0.95rem' }}>
              Research focus description goes here.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
