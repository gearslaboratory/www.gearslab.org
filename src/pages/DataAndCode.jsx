import React from 'react';

function DataAndCode() {

  return (
    <div className="page fade-in">
      <header className="page-header glass">
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Data & Code</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
            Open source software and open data produced by the GEARS Laboratory.
          </p>
        </div>
      </header>

      <div className="container">
        <section className="section">
          <h2 style={{ fontSize: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '2rem' }}>
            Open Source Tools
          </h2>
          <div className="grid-2">
            
            <div className="card glass">
              <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 17l6-6-6-6 M12 19h8"/></svg>
                robustraster
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                A Python software package designed to lower the barrier of entry for large-scale geospatial analysis. It provides scalable interfaces for manipulating and analyzing massive raster datasets without out-of-memory errors.
              </p>
              <a href="https://github.com/gearslaboratory/robustraster" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                View on GitHub
              </a>
            </div>

            <div className="card glass">
              <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 17l6-6-6-6 M12 19h8"/></svg>
                als-finder
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                A robust software tool built for managing, querying, and retrieving Airborne Laser Scanning (ALS) data across multiple open-source providers simultaneously.
              </p>
              <a href="https://github.com/cms-2024-hudak/als-finder" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                View on GitHub
              </a>
            </div>

          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <h2 style={{ fontSize: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '2rem' }}>
            Open Datasets
          </h2>
          <div className="grid-3" style={{ gap: '2rem' }}>
            
            <div className="card glass" style={{ padding: 0, overflow: 'hidden' }}>
              <img src="/images/datasets/dataset_1_khanna_delta.png" alt="Delta Genus and Community Maps" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.5rem' }}>Sacramento-San Joaquin Delta Genus and Community Classification Maps</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.95rem' }}>
                  Classification maps derived from airborne spectroscopy data characterizing the vegetation communities of the California Delta.
                </p>
                <a href="https://doi.org/10.5063/f1hh6hjx" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)' }}>KNB Data Repository (2024)</a>
              </div>
            </div>

            <div className="card glass" style={{ padding: 0, overflow: 'hidden' }}>
              <img src="/images/datasets/dataset_2_khanna_sav.png" alt="Submersed Aquatic Vegetation" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.5rem' }}>Submersed Aquatic Vegetation Community Multi-year Data</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.95rem' }}>
                  Multi-year community data mapping the submersed aquatic vegetation across the Sacramento-San Joaquin Delta.
                </p>
                <a href="https://doi.org/10.6073/pasta/6ba28bdfbf01fac6d417cd277e5d2a84" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)' }}>Environmental Data Initiative (2022)</a>
              </div>
            </div>

            <div className="card glass" style={{ padding: 0, overflow: 'hidden' }}>
              <img src="/images/datasets/dataset_3_kruse_houston.png" alt="Houston Airborne Campaign" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.5rem' }}>MASTER: Houston Airborne Campaign</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.95rem' }}>
                  Airborne campaign data across California, Colorado, and Central US utilizing the MASTER instrument.
                </p>
                <a href="https://doi.org/10.3334/ORNLDAAC/1972" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)' }}>ORNL DAAC (2022)</a>
              </div>
            </div>

            <div className="card glass" style={{ padding: 0, overflow: 'hidden' }}>
              <img src="/images/datasets/continuous-lifeform-maps-conus-fig1_orig.png" alt="Vegetative Lifeform Cover" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.5rem' }}>CMS: Vegetative Lifeform Cover from Landsat SR for CONUS, 1984-2018</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.95rem' }}>
                  Long-term wall-to-wall fractional cover mapping of vegetative lifeforms across the conterminous United States.
                </p>
                <a href="https://doi.org/10.3334/ORNLDAAC/1809" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)' }}>ORNL DAAC (2022)</a>
              </div>
            </div>

            <div className="card glass" style={{ padding: 0, overflow: 'hidden' }}>
              <img src="/images/datasets/climate-normals-modern-lgm-ak-fig1_orig.png" alt="Alaska Climate Normals" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.5rem' }}>Alaska Downscaled 30-year Climate Normals (Modern and LGM)</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.95rem' }}>
                  Downscaled climate normals at 60-meter resolution for Alaska, representing modern periods and the Last Glacial Maximum.
                </p>
                <a href="https://doi.org/10.3334/ORNLDAAC/1663" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)' }}>ORNL DAAC (2019)</a>
              </div>
            </div>

            <div className="card glass" style={{ padding: 0, overflow: 'hidden' }}>
              <img src="/images/datasets/cms-lidar-agb-california-fig1_orig.png" alt="Aboveground Biomass California" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.5rem' }}>LiDAR-Derived Aboveground Biomass and Uncertainty for California Forests, 2005-2014</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.95rem' }}>
                  Extensive dataset of biomass estimates spanning the entire state of California, heavily utilized for carbon accounting and fuel monitoring.
                </p>
                <a href="https://doi.org/10.3334/ORNLDAAC/1537" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)' }}>ORNL DAAC (2018)</a>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}

export default DataAndCode;
