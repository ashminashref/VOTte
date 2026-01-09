import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { UserPlus, MailCheck, ShieldCheck, PieChart } from 'lucide-react';
import './working.css'; // Make sure to use the CSS provided earlier

function Working() {
  const steps = [
    {
      icon: <UserPlus size={40} />,
      title: "Secure Registration",
      description: "Voters sign up with verified credentials. Each identity is authenticated to ensure 'one person, one vote'."
    },
    {
      icon: <MailCheck size={40} />,
      title: "Receive Invite",
      description: "Eligible voters receive a unique, encrypted access key via email or SMS to enter the private polling booth."
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Cast Your Vote",
      description: "Our blockchain-backed system encrypts your selection instantly, making it immutable and anonymous."
    },
    {
      icon: <PieChart size={40} />,
      title: "Real-time Results",
      description: "Once the polls close, results are tallied automatically and transparently for everyone to verify."
    }
  ];

  return (
    <section className="process-section py-5 ">
      <Container>
        {/* Header Section */}
        <div className="text-center mb-5 ">
          <span className="process-badge px-3 py-1 rounded">The Workflow</span>
          <h2 className="display-5 fw-bold text-white mt-3">How it Works</h2>
          <p className="text-secondary">Simple, secure, and transparent steps to digital democracy.</p>
        </div>

        {/* Steps Grid */}
        <Row className="g-4">
          {steps.map((step, index) => (
            <Col lg={3} md={6} key={index} className="process-item">
              <div className="process-card text-center p-4">
                <div className="icon-box mb-4 mx-auto">
                  {step.icon}
                </div>
                <h4 className="text-white mb-3">{step.title}</h4>
                <p className="text-secondary small">{step.description}</p>
                
                {/* Visual Connector (Hidden on mobile/tablet) */}
                {index !== steps.length - 1 && (
                  <div className="process-connector d-none d-lg-block"></div>
                )}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Working;