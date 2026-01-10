import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css'
import Features from '../home/Features';
import { Link } from 'react-router-dom';

function CollapsibleExample() {
  return (
    
    <Navbar collapseOnSelect expand="lg" className="navbar-dark bg-transparent py-3">
      <Container>
        {/* Left: Brand */}
        <Navbar.Brand href="#home" className='fw-bold  tracking-tighter'>
          VOTte
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          {/* Center: The "Pill" styled links */}
          <Nav className="mx-auto rounded nav-pill-container px-2 py-1 gap-2">
            <Nav.Link href="" className="text-white">Features</Nav.Link>
            <Nav.Link href="#capabilities" className="text-white">Capabilities</Nav.Link>
            <Nav.Link href="#how-it-works" className="text-white">How it works</Nav.Link>
            <Nav.Link href="#pricing" className="text-white">Pricing</Nav.Link>
          </Nav>
          
          {/* Right: Action Button */}
          <Nav className="align-items-lg-center">
            <Link to = '/login' >
             <button className='btn btn-request-demo px-3 py-2'>
              Get Started
            </button>
            </Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;