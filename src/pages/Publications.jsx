import React, { useState, useEffect } from 'react';

function Publications() {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dynamic import to avoid build errors if the file doesn't exist yet
    import('../data/publications.json')
      .then((module) => {
        setPublications(module.default);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load publications:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="page-content" style={{ padding: '8rem 0 4rem 0' }}>
      <div className="container">
        <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Publications</h1>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 4rem auto', fontSize: '1.1rem' }}>
          A comprehensive feed of our research outputs. For a full citation index, please visit our <a href="https://scholar.google.com/citations?hl=en&user=M3AZCp0AAAAJ" target="_blank" rel="noreferrer">Google Scholar Profile</a>.
        </p>

        {loading ? (
          <div style={{ textAlign: 'center', color: 'var(--accent-primary)' }}>Loading Google Scholar Feed...</div>
        ) : publications.length === 0 ? (
          <div style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>No publications found or feed is currently syncing.</div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {publications.map((pub, idx) => (
              <div key={idx} className="card glass" style={{ padding: '1.5rem 2rem' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', lineHeight: '1.4' }}>
                  {pub.url ? (
                    <a href={pub.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>
                      {pub.title}
                    </a>
                  ) : (
                    <span style={{ color: '#fff' }}>
                      {pub.title}
                    </span>
                  )}
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                  {pub.citation}
                </p>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--accent-primary)' }}>
                  <span>{pub.year}</span>
                  {pub.num_citations > 0 && (
                    <span>• {pub.num_citations} Citations</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Publications;
