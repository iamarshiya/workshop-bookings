import React from 'react'

const InstructorDashboard = ({ workshops }) => {
  return (
    <div className="dashboard-view animate-fade-in">
      <div className="dashboard-header mb-5">
        <h1 className="gradient-text">Instructor Dashboard</h1>
        <p className="text-secondary">Manage your upcoming workshops and track performance.</p>
      </div>

      <div className="stats-box glass mb-5">
        <div className="stats-grid">
          <div className="stat-item">
            <h2 className="stat-number primary">{workshops.length}</h2>
            <p>Assigned Workshops</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number secondary">12</h2>
            <p>Completed This Month</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number accent">4.8</h2>
            <p>Avg Rating</p>
          </div>
        </div>
      </div>

      <h3 className="mb-4">Recent Proposals</h3>
      <div className="grid">
        {workshops.map((w) => (
          <div key={w.id} className="card glass">
            <div className="card-status-badge glass-accent">Pending Approval</div>
            <div className="card-icon" style={{ fontSize: '1.5rem' }}>📚</div>
            <h3 style={{ fontSize: '1.2rem' }}>{w.title}</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>{w.description}</p>
            <div className="card-actions" style={{ display: 'flex', gap: '0.5rem' }}>
              <button className="btn btn-primary" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}>Accept</button>
              <button className="btn secondary-btn" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}>Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InstructorDashboard
