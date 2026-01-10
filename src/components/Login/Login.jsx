import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Login.css';

const Login = () => {
  return (
    <div style={{ backgroundColor: '#000b00', minHeight: '100vh', position: 'relative', overflow: 'hidden' }} className="d-flex align-items-center">
      {/* Dynamic Background Element */}
      <div className="bg-glow"></div>

      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={5}>
            <div className="px-4">
              {/* Brand Section */}
              <div className="mb-5">
                <h1 className="text-white display-5 fw-bold mb-0 tracking-tighter">
                  VOT<span style={{ color: '#198754' }}>te</span>.
                </h1>
                <div style={{ width: '40px', height: '2px', backgroundColor: '#198754', marginTop: '10px' }}></div>
              </div>

              {/* Header Text */}
              <div className="mb-5">
                <h3 className="text-white fw-light">Start Marking Your <span className="fw-bold">Vote.</span></h3>
                <p className="text-secondary small">Identify yourself to access the decentralized voting node.</p>
              </div>

              {/* Minimal Form */}
              <Form>
                <Form.Group className="mb-5">
                  <Form.Label className="text-secondary small tracking-widest text-uppercase">Voter Identity</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="UID-000-000" 
                    className="premium-input"
                  />
                </Form.Group>

                <Form.Group className="mb-5">
                  <Form.Label className="text-secondary small tracking-widest text-uppercase">Secret Access Key</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Enter Key" 
                    className="premium-input"
                  />
                </Form.Group>

                <div className="d-flex justify-content-between align-items-center mb-5">
                  <Form.Check 
                    type="checkbox" 
                    label="Maintain Session" 
                    className="text-secondary small"
                  />
                  <a href="#forgot" className="text-success small text-decoration-none">Reset Access ?</a>
                </div>

                <div className="d-grid">
                  <Button 
                    variant="success" 
                    className="premium-btn py-3 fw-bold"
                    style={{ backgroundColor: '#198754' }}
                  >
                    Authorize Session
                  </Button>
                </div>
              </Form>

              <div className="mt-5 pt-4 border-top border-secondary opacity-25">
                <p className="text-secondary small">
                  Votte © 2026-27
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;