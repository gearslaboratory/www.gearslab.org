import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1.5rem' }}>
          Welcome to the <span className="text-primary">Gears</span> Laboratory
        </h1>
        <p className="text-muted" style={{ fontSize: '1.25rem', marginBottom: '3rem' }}>
          We focus on the interface of ecology, remote sensing, and environmental informatics 
          at the University of Nevada, Reno.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="/research" className="btn-primary">
            Explore Research <ArrowRight size={20} />
          </a>
          <a href="/people" className="btn-secondary">
            Meet the Team
          </a>
        </div>
      </div>
      
      <div className="grid grid-cols-1" style={{ gap: '2rem', marginTop: '5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        <div className="glass-card" style={{ textAlign: 'left' }}>
          <h3>Spatial Informatics</h3>
          <p className="text-muted">Leveraging advanced computing to understand complex spatial patterns in ecology and natural resources.</p>
        </div>
        <div className="glass-card" style={{ textAlign: 'left' }}>
          <h3>Remote Sensing</h3>
          <p className="text-muted">Utilizing LiDAR and satellite imagery to measure and model vegetation dynamics.</p>
        </div>
        <div className="glass-card" style={{ textAlign: 'left' }}>
          <h3>Open Science</h3>
          <p className="text-muted">Committed to developing open-source tools and datasets for the scientific community.</p>
        </div>
      </div>
    </div>
  );
}
