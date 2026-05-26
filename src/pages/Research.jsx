import React from 'react';

function Research() {
  const pillars = [
    {
      title: "Advanced Remote Sensing & 3D Ecology",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
          <circle cx="12" cy="12" r="4"/>
        </svg>
      ),
      description: "Developing cutting-edge techniques for high-accuracy and high-precision products from remote sensing data. We emphasize the use of LiDAR, terrestrial laser scanning (TLS), UAS, hyperspectral, and deep learning methods to characterize 3D vegetation structure and composition."
    },
    {
      title: "Wildland Fire & Fuel Science",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
        </svg>
      ),
      description: "Applying remote sensing and spatial modeling to quantify and predict wildland fire behavior, fuel dynamics, and post-fire ecosystem response. This includes advanced fuel mapping, carbon accounting, and leveraging 3D data to inform fire management (e.g. The GigaFire Project)."
    },
    {
      title: "Climate Change & Ecosystem Dynamics",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
      description: "Investigating plant and ecosystem responses to climate variability and change, including the use of high-resolution climate modeling (microclimate modeling, downscaled data) to understand biogeography, invasive species spread, and ecohydrological processes."
    },
    {
      title: "Computational Geospatial Technologies",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 17 10 11 4 5"/>
          <line x1="12" y1="19" x2="20" y2="19"/>
        </svg>
      ),
      description: "Developing and deploying algorithms and software for managing and analyzing massive geospatial datasets. We leverage cloud computing (GCP/Google Earth Engine), high-performance computing, and open-source packages to ensure extreme efficiency and scalability."
    }
  ];

  return (
    <div className="page-content" style={{ padding: '8rem 0 4rem 0' }}>
      <div className="container">
        <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Research Areas</h1>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 4rem auto', fontSize: '1.1rem' }}>
          Our laboratory focuses on translating complex landscape data into actionable science. We operate across four core pillars of spatial and computational ecology.
        </p>

        <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
          {pillars.map((pillar, idx) => (
            <div key={idx} className="card glass" style={{ padding: '3rem 2rem' }}>
              <div style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
                {pillar.icon}
              </div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>{pillar.title}</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Research;
