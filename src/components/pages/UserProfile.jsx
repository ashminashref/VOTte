import React, { useState } from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { User, Users, CheckSquare, Shield, Zap, Award, LogOut, ChevronRight } from 'react-feather';
import './UserProfile.css';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const candidates = [
    { name: "Adarsh K", party: "LDF", post: "Chairman", image: "https://i.pravatar.cc/150?u=1", status: "Active" },
    { name: "Meera Nair", party: "UDF", post: "Secretary", image: "https://i.pravatar.cc/150?u=2", status: "Active" },
    { name: "Sanjay Das", party: "Ind.", post: "Arts Club", image: "https://i.pravatar.cc/150?u=3", status: "Withdrawn" },
  ];

  const renderProfile = () => (
    <div className="tab-content-wrapper">
      <div className="profile-hero mb-4">
        <div className="d-flex align-items-center">
          <div className="avatar-circle">AA</div>
          <div className="ms-4">
            <h2 className="fw-bold mb-1">Ashmin Ashraf</h2>
            <div className="d-flex align-items-center gap-2">
              <Badge bg="none" className="badge-outline">ID: 0x71C...4f92</Badge>
              <span className="text-success small fw-bold">● Verified Voter</span>
            </div>
          </div>
        </div>
      </div>
      
      <Row className="g-3">
        <Col md={6} lg={3}><StatBox label="Reputation" value="4.9" icon={<Award />} /></Col>
        <Col md={6} lg={3}><StatBox label="Votes Cast" value="12" icon={<CheckSquare />} /></Col>
        <Col md={6} lg={3}><StatBox label="Tokens" value="150" icon={<Zap />} /></Col>
        <Col md={6} lg={3}><StatBox label="Security" value="High" icon={<Shield />} /></Col>
      </Row>
    </div>
  );

  const renderCandidates = () => (
    <div className="tab-content-wrapper">
      <h5 className="section-heading">Available Candidates</h5>
      <div className="candidate-list">
        {candidates.map((c, i) => (
          <div key={i} className={`candidate-row ${c.status === 'Withdrawn' ? 'opacity-50' : ''}`}>
            <img src={c.image} alt="" />
            <div className="flex-grow-1 ms-3">
              <h6 className="mb-0 fw-bold">{c.name}</h6>
              <span className="text-muted small uppercase">{c.post} • {c.party}</span>
            </div>
            <div className="text-end">
              <div className={`status-dot ${c.status.toLowerCase()}`}></div>
              <span className="small d-block text-muted">{c.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="dashboard-root">
      {/* Sidebar for Desktop */}
      <aside className="sidebar d-none d-lg-flex">
        <div className="brand">VOT<span>te</span></div>
        <div className="nav-group">
          <NavBtn id="profile" icon={<User />} label="Profile" active={activeTab} onClick={setActiveTab} />
          <NavBtn id="candidates" icon={<Users />} label="Candidates" active={activeTab} onClick={setActiveTab} />
          <NavBtn id="voting" icon={<CheckSquare />} label="Voting" active={activeTab} onClick={setActiveTab} />
        </div>
        <button className="logout-btn mt-auto"><LogOut size={18} /> Logout</button>
      </aside>

      {/* Main Content Area */}
      <main className="content-area">
        <header className="mobile-header d-lg-none">
          <div className="brand">VOTE<span>CORE</span></div>
        </header>
        
        <Container className="py-4 py-lg-5">
          <div className="view-title mb-4">
            <h1 className="h4 text-uppercase tracking-wider fw-bold text-muted">
              {activeTab} <ChevronRight size={16} />
            </h1>
          </div>
          {activeTab === 'profile' && renderProfile()}
          {activeTab === 'candidates' && renderCandidates()}
          {activeTab === 'voting' && (
             <div className="empty-state">
                <p>No active elections at the moment.</p>
             </div>
          )}
        </Container>
      </main>

      {/* Bottom Nav for Mobile */}
      <nav className="bottom-nav d-lg-none">
        <NavBtn id="profile" icon={<User />} label="Profile" active={activeTab} onClick={setActiveTab} />
        <NavBtn id="candidates" icon={<Users />} label="List" active={activeTab} onClick={setActiveTab} />
        <NavBtn id="voting" icon={<CheckSquare />} label="Vote" active={activeTab} onClick={setActiveTab} />
      </nav>
    </div>
  );
};

const NavBtn = ({ id, icon, label, active, onClick }) => (
  <button className={`nav-item ${active === id ? 'active' : ''}`} onClick={() => onClick(id)}>
    {icon} <span>{label}</span>
  </button>
);

const StatBox = ({ label, value, icon }) => (
  <div className="stat-box">
    <div className="icon">{icon}</div>
    <div>
      <div className="label">{label}</div>
      <div className="value">{value}</div>
    </div>
  </div>
);

export default UserProfile;