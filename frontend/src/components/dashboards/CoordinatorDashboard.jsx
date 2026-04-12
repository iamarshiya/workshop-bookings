import React from 'react'

const CoordinatorDashboard = ({ workshops }) => {
  return (
    <div className="dashboard-view animate-fade-in">
      <div className="dashboard-header mb-5">
        <h1 className="gradient-text">Coordinator Hub</h1>
        <p className="text-secondary">Propose new workshops and track your campus events.</p>
      </div>

      <div className="propose-cta glass mb-5" style={{ padding: '2rem', borderRadius: '32px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))' }}>
        <h2 className="mb-3">Organize a Workshop at Your College</h2>
        <p className="mb-4 text-secondary">Bring IIT Bombay expertise to your students by proposing a new session today.</p>
        <a href="/workshop/propose/" className="btn btn-primary btn-lg">Propose Now</a>
      </div>

      <h3 className="mb-4">Available Workshop Types</h3>
      <div className="grid">
        {workshops.map((w) => (
          <div key={w.id} className="card glass">
            <div className="card-icon" style={{ fontSize: '1.5rem' }}>✨</div>
            <h3 style={{ fontSize: '1.2rem' }}>{w.title}</h3>
            <p style={{ fontSize: '0.9rem' }}>{w.description}</p>
            <div className="card-footer" style={{ marginTop: '1.5rem', color: 'var(--primary)', fontWeight: '600' }}>
              Learn More →
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CoordinatorDashboard
