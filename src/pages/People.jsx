import React from 'react';
import { ExternalLink, GraduationCap, FileText } from 'lucide-react';
import peopleData from '../data/people.json';

function People() {
  const pi = peopleData.find(p => p.status === 'Principal Investigator');
  const currentMembers = peopleData.filter(p => p.status === 'Current');
  
  const postdocs = peopleData.filter(p => p.status === 'Alumni' && p.role.includes('Postdoc'));
  const gradStudents = peopleData.filter(p => p.status === 'Alumni' && (p.role.includes('PhD') || p.role.includes('MS')));
  const staff = peopleData.filter(p => p.status === 'Alumni' && p.role.includes('Staff'));

  const renderLinks = (links) => {
    if (!links || Object.keys(links).length === 0) return null;
    return (
      <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
        {Object.entries(links).map(([label, url], idx) => {
          let Icon = ExternalLink;
          if (label.toLowerCase().includes('linkedin')) Icon = ExternalLink;
          if (label.toLowerCase().includes('scholar')) Icon = GraduationCap;
          if (label.toLowerCase().includes('cv') || label.toLowerCase().includes('resume')) Icon = FileText;
          
          return (
            <a 
              key={idx} 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.4rem', 
                padding: '0.4rem 0.8rem', 
                backgroundColor: 'rgba(255,255,255,0.05)', 
                borderRadius: '4px', 
                color: 'var(--text-primary)', 
                fontSize: '0.85rem', 
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'var(--accent-primary)'; }}
              onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
            >
              <Icon size={14} />
              {label}
            </a>
          );
        })}
      </div>
    );
  };

  const renderPersonCard = (person, idx, isAlumni = false) => (
    <div key={idx} className="card glass">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
        {person.image ? (
          <img 
            src={person.image} 
            alt={person.name} 
            style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: `2px solid var(--accent-${isAlumni ? 'secondary' : 'primary'})` }} 
          />
        ) : (
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid rgba(255,255,255,0.2)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </div>
        )}
        <div>
          <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '0.2rem' }}>{person.name}</h3>
          <div style={{ color: `var(--accent-${isAlumni ? 'secondary' : 'primary'})`, fontSize: '0.9rem', fontWeight: 600 }}>
            {isAlumni ? (person.degree || person.role) : person.role} {person.year && `(${person.year})`}
          </div>
        </div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
        {isAlumni && person.currentRole && (
          <div>
            <strong style={{ color: 'var(--accent-secondary)', fontSize: '0.95rem' }}>Currently:</strong>
            <p style={{ color: '#fff', fontSize: '0.95rem', lineHeight: 1.5, margin: 0 }}>{person.currentRole}</p>
          </div>
        )}
        {person.dissertation && (
          <div>
            <strong style={{ color: '#fff', fontSize: '0.95rem' }}>Dissertation:</strong>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5, margin: 0, fontStyle: 'italic' }}>"{person.dissertation}"</p>
          </div>
        )}
        {person.thesis && (
          <div>
            <strong style={{ color: '#fff', fontSize: '0.95rem' }}>Thesis:</strong>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5, margin: 0, fontStyle: 'italic' }}>"{person.thesis}"</p>
          </div>
        )}
        {person.research && (
          <div>
            <strong style={{ color: '#fff', fontSize: '0.95rem' }}>Research:</strong>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5, margin: 0 }}>{person.research}</p>
          </div>
        )}
      </div>
      {renderLinks(person.links)}
    </div>
  );

  return (
    <div className="page-content" style={{ padding: '8rem 0 4rem 0' }}>
      <div className="container">
        <h1 style={{ marginBottom: '3rem', textAlign: 'center' }}>The Team</h1>
        
        {pi && (
          <section style={{ marginBottom: '5rem' }}>
            <h2 style={{ color: 'var(--accent-primary)', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '2rem' }}>
              Principal Investigator
            </h2>
            <div className="grid-3">
              {renderPersonCard(pi, 0, false)}
            </div>
          </section>
        )}

        {currentMembers.length > 0 && (
          <section style={{ marginBottom: '5rem' }}>
            <h2 style={{ color: 'var(--accent-primary)', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '2rem' }}>
              Current Members
            </h2>
            <div className="grid-3">
              {currentMembers.map((person, idx) => renderPersonCard(person, idx, false))}
            </div>
          </section>
        )}

        <section className="section" style={{ paddingTop: 0 }}>
          <h2 style={{ fontSize: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '2rem' }}>
            Alumni
          </h2>
          
          {gradStudents.length > 0 && (
            <div style={{ marginBottom: '4rem' }}>
              <h3 style={{ color: 'var(--text-secondary)', fontSize: '1.4rem', marginBottom: '1.5rem', fontWeight: 400 }}>Former Graduate Students</h3>
              <div className="grid-3">
                {gradStudents.map((person, idx) => renderPersonCard(person, idx, true))}
              </div>
            </div>
          )}

          {postdocs.length > 0 && (
            <div style={{ marginBottom: '4rem' }}>
              <h3 style={{ color: 'var(--text-secondary)', fontSize: '1.4rem', marginBottom: '1.5rem', fontWeight: 400 }}>Former Postdoctoral Scholars</h3>
              <div className="grid-3">
                {postdocs.map((person, idx) => renderPersonCard(person, idx, true))}
              </div>
            </div>
          )}

          {staff.length > 0 && (
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--text-secondary)', fontSize: '1.4rem', marginBottom: '1.5rem', fontWeight: 400 }}>Former Technicians & Staff</h3>
              <div className="grid-3">
                {staff.map((person, idx) => renderPersonCard(person, idx, true))}
              </div>
            </div>
          )}

        </section>
      </div>
    </div>
  );
}

export default People;
