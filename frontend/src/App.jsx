import React, { useState, useEffect } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const WorkshopsView = ({ workshops, navigate }) => (
  <section className="reveal" style={{ padding: '40px 0' }}>
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
        <div style={{ minWidth: '280px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', lineHeight: '1.2' }}>Explore Workshops</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Master open source with IIT Bombay.</p>
        </div>
        <a href="/workshop/add_workshop_type/" className="btn-primary" style={{ fontSize: '0.85rem' }}>+ Add Workshop</a>
      </div>

      <div className="card-grid">
        {workshops.map((w, i) => (
          <div className="premium-card-wrapper" key={i}>
            <div className="glass-card" style={{ padding: '0', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '140px', background: 'rgba(37, 99, 235, 0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem' }}>
                {w.icon || '📚'}
              </div>
              <div style={{ padding: '24px', flex: '1', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '12px', color: 'var(--text-main)' }}>{w.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '20px' }}>{w.description}</p>
                <div style={{ marginTop: 'auto' }}>
                  <a href={`/workshop/types/${w.id}`} className="btn-primary" style={{ width: '100%', fontSize: '0.85rem' }}>View Details</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HomeView = ({ workshops, navigate }) => (
  <>
    <section className="hero reveal">
      <div className="container">
        <h1 className="gradient-text">Learn Anything.</h1>
        <h1>Build Everything.</h1>
        <p className="section-subtitle">
          Join India's advanced learning platform curated by IIT Bombay. Master open-source technical innovation.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/workshop/types/" onClick={(e) => navigate(e, '/workshop/types/')} className="btn-primary">Browse Catalog</a>
          <a href="#featured" className="btn-primary btn-glass">Learn More</a>
        </div>
        <div className="hero-visual">
          <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200" alt="Premium Learning" />
        </div>
      </div>
    </section>

    <div className="container reveal" style={{ animationDelay: '0.1s' }}>
      <div className="stats-row">
        {[
          { v: '50K+', l: 'Learners' },
          { v: '1.2K', l: 'Courses' },
          { v: '98%', l: 'Satisfaction' },
          { v: '150+', l: 'Partners' }
        ].map((s, idx) => (
          <div className="stat-item" key={idx}>
            <span className="stat-value">{s.v}</span>
            <span className="stat-label">{s.l}</span>
          </div>
        ))}
      </div>
    </div>

    <section id="featured" className="reveal" style={{ padding: '80px 0', animationDelay: '0.2s' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '800' }}>Featured Content</h2>
            <p style={{ color: 'var(--text-muted)' }}>Hand-picked opportunities starting this week.</p>
          </div>
          <a href="/workshop/types/" onClick={(e) => navigate(e, '/workshop/types/')} style={{ color: 'var(--primary)', fontWeight: '800', textDecoration: 'none' }}>View All →</a>
        </div>
        <div className="card-grid">
           {workshops.slice(0, 3).map((w, i) => (
              <div className="premium-card-wrapper" key={i}>
                <div className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
                  <div style={{ height: '140px', background: 'rgba(37, 99, 235, 0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>📚</div>
                    <div style={{ padding: '24px' }}>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '8px' }}>{w.title}</h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{w.description}</p>
                    </div>
                </div>
              </div>
           ))}
        </div>
      </div>
    </section>
  </>
);

function App() {
  const [workshops, setWorkshops] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    fetch('/workshop/api/workshops/')
      .then(res => res.json())
      .then(data => {
        setWorkshops(data.workshops || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))

    const handleLocationChange = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, [])

  const navigate = (e, path) => {
    if (path.includes('login') || path.includes('logout') || path.includes('signup') || path.includes('profile')) return;
    e.preventDefault();
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  if (loading) return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-surface)' }}>
      <div className="logo-dots" style={{ width: '40px', height: '40px', animation: 'spin 1.5s linear infinite' }}></div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )

  return (
    <HelmetProvider>
      <div className="app-shell" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Helmet>
          <title>FOSSEE Portal | Master Innovation</title>
        </Helmet>

        <header className="navbar">
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <a href="/" onClick={(e) => navigate(e, '/')} className="logo">
              <div className="logo-dots"></div>
              FOSSEE<span className="gradient-text">PORTAL</span>
            </a>
            
            <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
               <a href="/workshop/types/" onClick={(e) => navigate(e, '/workshop/types/')} style={{ color: currentPath === '/workshop/types/' ? 'var(--primary)' : 'var(--text-main)', textDecoration: 'none', fontWeight: '800', fontSize: '0.9rem' }}>Workshops</a>
               <a href="/statistics/public/" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: '800', fontSize: '0.9rem' }}>Stats</a>
               <a href="/workshop/login/" className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.8rem' }}>Login</a>
            </nav>
          </div>
        </header>

        <main style={{ flex: '1' }}>
           {currentPath === '/workshop/types/' ? (
             <WorkshopsView workshops={workshops} navigate={navigate} />
           ) : (
             <HomeView workshops={workshops} navigate={navigate} />
           )}
        </main>

        <nav className="mobile-nav">
          <a href="/" onClick={(e) => navigate(e, '/')} className={`mobile-nav-item ${currentPath === '/' ? 'active' : ''}`}>
            <span className="icon">🏠</span>
            <span>Home</span>
          </a>
          <a href="/workshop/types/" onClick={(e) => navigate(e, '/workshop/types/')} className={`mobile-nav-item ${currentPath === '/workshop/types/' ? 'active' : ''}`}>
            <span className="icon">📚</span>
            <span>Courses</span>
          </a>
          <a href="/statistics/public/" className="mobile-nav-item">
            <span className="icon">📊</span>
            <span>Stats</span>
          </a>
          <a href="/workshop/login/" className="mobile-nav-item">
            <span className="icon">👤</span>
            <span>Login</span>
          </a>
        </nav>

        <footer className="premium-footer">
           <div className="container">
              <div className="footer-grid">
                <div>
                   <div className="logo" style={{ marginBottom: '16px' }}>
                      <div className="logo-dots"></div>
                      FOSSEE<span className="gradient-text">PORTAL</span>
                   </div>
                   <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5' }}>
                      IIT Bombay's initiative to promote open-source education globally.
                   </p>
                </div>
                <div>
                   <h4 style={{ marginBottom: '16px', fontSize: '0.9rem', fontWeight: '800' }}>Platform</h4>
                   <ul style={{ listStyle: 'none', fontSize: '0.85rem' }}>
                      <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>About</a></li>
                      <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Experts</a></li>
                   </ul>
                </div>
                <div>
                   <h4 style={{ marginBottom: '16px', fontSize: '0.9rem', fontWeight: '800' }}>Legal</h4>
                   <ul style={{ listStyle: 'none', fontSize: '0.85rem' }}>
                      <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Privacy</a></li>
                      <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Terms</a></li>
                   </ul>
                </div>
                <div>
                   <h4 style={{ marginBottom: '16px', fontSize: '0.9rem', fontWeight: '800' }}>Contact</h4>
                   <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>support@fossee.in</p>
                </div>
              </div>
              <div style={{ borderTop: '1px solid var(--border-glass)', marginTop: '48px', paddingTop: '24px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                 © 2026 FOSSEE, IIT Bombay.
              </div>
           </div>
        </footer>
      </div>
    </HelmetProvider>
  )
}

export default App
