import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <header className="hero" style={{
        backgroundImage: `linear-gradient(rgba(11, 15, 25, 0.6), rgba(11, 15, 25, 0.95)), url('/hero_bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '10rem 0 6rem 0',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <h1 style={{ marginBottom: '1.5rem', fontSize: '4rem' }}>
              Pioneering 3D Ecology &<br/>
              <span style={{ color: 'var(--accent-secondary)' }}>Wildland Fire Science</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.4rem', fontWeight: 300 }}>
              The GEARS Laboratory at the University of Nevada, Reno, operates at the intersection of advanced remote sensing, high-performance computing, and ecosystem dynamics to solve the defining environmental challenges of our time.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link to="/research" className="btn btn-primary">Explore Research</Link>
              <Link to="/data-and-code" className="btn glass">Access Open Data</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Research Pillars Overview */}
      <section className="section" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', marginTop: '-8rem', zIndex: 10, position: 'relative' }}>
            
            <div className="card glass">
              <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '0.5rem' }}>3D Ecology & Remote Sensing</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Leveraging LiDAR, TLS, UAS, and hyperspectral data to model 3D vegetation structure.
              </p>
            </div>

            <div className="card glass">
              <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '0.5rem' }}>Wildland Fire Science</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Spatial modeling for wildland fire behavior prediction and high-resolution fuels mapping.
              </p>
            </div>

            <div className="card glass">
              <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '0.5rem' }}>Climate Change Dynamics</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Investigating plant and ecosystem responses to climate variability using downscaled modeling.
              </p>
            </div>

            <div className="card glass">
              <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '0.5rem' }}>Computational Geospatial Tech</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Cloud computing, GEE, and open-source packages for extreme-scale geospatial analysis.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* About Overview */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2rem' }}>Directed by Dr. Jonathan A. Greenberg</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Our laboratory focuses on developing high-accuracy, high-precision products from remote sensing data. We leverage Airborne and Terrestrial Laser Scanning (LiDAR), UAS, hyperspectral data, and deep learning to model 3D vegetation structure and composition.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                Our mission is to translate complex landscape data into actionable science for carbon accounting, wildland fire behavior prediction, and climate change response. We actively partner with state and federal agencies (NASA, NSF, CALFIRE, USFS) to deliver robust, scalable data pipelines.
              </p>
              <Link to="/people" className="btn btn-primary" style={{ background: 'transparent', border: '1px solid var(--accent-primary)' }}>Meet the Team</Link>
            </div>
            <div>
              <img src="/images/news/real_point_cloud.png" alt="3D Forest Point Cloud" style={{ width: '100%', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }} />
            </div>
          </div>
        </div>
      </section>
      {/* In The News */}
      <section className="section" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(20,26,41,0.3)' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>In The News</h2>
          <div className="grid-3" style={{ gap: '2rem' }}>
            <div className="card glass" style={{ padding: 0, overflow: 'hidden' }}>
              <img src="/images/news/news_real_1.jpeg" alt="News feature" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Lab Featured in Local News</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Highlighting our recent advances in high-resolution 3D forest mapping and carbon accounting.</p>
              </div>
            </div>
            
            <div className="card glass" style={{ padding: 0, overflow: 'hidden' }}>
              <img src="/images/news/news_real_2.jpeg" alt="News feature" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Wildfire Research Grant</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Partnering with state agencies to leverage the GigaFire pipeline for predictive modeling.</p>
              </div>
            </div>

            <div className="card glass" style={{ padding: 0, overflow: 'hidden' }}>
              <img src="/images/news/news_real_3.jpeg" alt="News feature" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>New Open Source Tools</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Release of new Python and R software tools for extreme-scale geospatial analysis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
