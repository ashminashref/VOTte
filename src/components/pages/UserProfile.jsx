import React from 'react';
import { Container, Row, Col, Card, Badge, ProgressBar } from 'react-bootstrap';
import { CheckCircle, Activity, Users, Award } from 'react-feather'; // Optional: npm i react-feather
import './UserProfile.css';

const UserProfile = () => {
  const candidates = [
    { name: "Adarsh K", party: "LDF", post: "Chairman", image: "https://via.placeholder.com/50", status: "Active" },
    { name: "Meera Nair", party: "UDF", post: "General Secretary", image: "https://via.placeholder.com/50", status: "Active" },
    { name: "Sanjay Das", party: "Independent", post: "Arts Club", image: "https://via.placeholder.com/50", status: "Withdrawn" },
  ];

  return (
    <div className="profile-wrapper">
      <Container className="py-5">
        {/* Header Section */}
        <Row className="mb-5 align-items-center">
          <Col md={8}>
            <h6 className="text-success tracking-widest uppercase mb-1">Voter Dashboard</h6>
            <h2 className="text-white fw-bold">Ashmin Ashraf <Badge bg="success" className="ms-2 fs-6 fw-normal">Verified</Badge></h2>
            <p className="text-secondary mb-0">Node ID: 0x71C...4f92 • Thamarassery Precinct</p>
          </Col>
          <Col md={4} className="text-md-end mt-3 mt-md-0">
            <div className="status-orb d-inline-flex align-items-center bg-dark px-3 py-2 rounded-pill border border-secondary">
              <span className="pulse-dot me-2"></span>
              <span className="text-white small fw-bold">Blockchain Synced</span>
            </div>
          </Col>
        </Row>

        {/* Stats Row */}
        <Row className="g-4 mb-5">
          <Col xs={12} md={6} lg={3}>
            <div className="stat-card">
              <Activity className="text-success mb-3" size={20} />
              <div className="text-secondary small uppercase">Voting Status</div>
              <div className="text-white fs-4 fw-bold">Active</div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <div className="stat-card">
              <Award className="text-success mb-3" size={20} />
              <div className="text-secondary small uppercase">Participation Rate</div>
              <div className="text-white fs-4 fw-bold">92%</div>
              <ProgressBar variant="success" now={92} className="mt-2" style={{ height: '4px' }} />
            </div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <div className="stat-card">
              <Users className="text-success mb-3" size={20} />
              <div className="text-secondary small uppercase">Total Votes Cast</div>
              <div className="text-white fs-4 fw-bold">12</div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <div className="stat-card">
              <CheckCircle className="text-success mb-3" size={20} />
              <div className="text-secondary small uppercase">Next Election</div>
              <div className="text-white fs-4 fw-bold">Jan 25</div>
            </div>
          </Col>
        </Row>

        {/* Candidate Section */}
        <h4 className="text-white mb-4 fw-light">Live <span className="fw-bold">Candidates</span></h4>
        <Row className="g-4">
          {candidates.map((c, index) => (
            <Col key={index} lg={4}>
              <Card className="candidate-card h-100">
                <Card.Body className="d-flex align-items-center">
                  <img src={c.image} alt={c.name} className="rounded-circle border border-success p-1 me-3" width="60" />
                  <div>
                    <h5 className="text-white mb-0">{c.name}</h5>
                    <div className="text-success small fw-bold">{c.party}</div>
                    <div className="text-secondary x-small mt-1 uppercase tracking-wider">{c.post}</div>
                  </div>
                  <div className="ms-auto">
                    <div className={`status-indicator ${c.status === 'Active' ? 'bg-success' : 'bg-danger'}`}></div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default UserProfile;