import React, { useState } from 'react';
import './Features.css';
import { Row, Col, Container } from 'react-bootstrap';
import { ShieldCheck, Activity, Fingerprint } from 'lucide-react';

// Data Array
const featuresData = [
  {
    icon: <ShieldCheck size={88} className="feature-icon-svg" />,
    tagline: "End-to-end encryption",
    title: "Secure Digital Ballots",
    description: "Every vote is encrypted at the source, ensuring total privacy and preventing any tampering before it hits the box."
  },
  {
    icon: <Activity size={88} className="feature-icon-svg" />,
    tagline: "Live updates. No delays.",
    title: "Real-time Auditing",
    description: "Monitor voter turnout and engagement live with our transparent dashboard. Instant results."
  },
  {
    icon: <Fingerprint size={88} className="feature-icon-svg" />,
    tagline: "Immutable record keeping.",
    title: "Blockchain Verification",
    description: "Leverage decentralized ledger technology to provide a permanent record of every election."
  }
];

// Single Card Component
const FeatureCard = ({ f }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className='feature-card'
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      style={{
        '--mouse-x': `${position.x}px`,
        '--mouse-y': `${position.y}px`,
        '--spotlight-opacity': opacity,
      }}
    >
      {/* glow layer */}
      <div className="spotlight-layer"></div>
      
      <div className="content-layer">
        <div className="icon-wrapper mb-4">
          {f.icon}
        </div>
        <p className='feature-tagline mb-2'>{f.tagline}</p>
        <h3 className="feature-title mb-3">{f.title}</h3>
        <p className="feature-description">{f.description}</p>
      </div>
    </div>
  );
};

// Main Component
function Features() {
  return (
    <div className='my-5'>
      <div className="heading-wrapper">
        <Container>
          <Row className='align-items-center mb-5'>
            <Col lg={6}>
              <span className='heading-label px-3 py-1 rounded'>Features</span>
              <h1 className='mt-3 display-4 fw-bold text-white'>Built To Protect Every Layer</h1>
            </Col>
            <Col lg={6} className='text-lg-end'>
              <h6 className='f-h6-1 text-secondary'>
                From backend to frontend, every part <br /> of your browser gets locked.
              </h6>
            </Col>
          </Row>

          <Row className='g-4'>
            {featuresData.map((f, index) => (
              <Col lg={4} md={6} key={index}>
                <FeatureCard f={f} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Features;