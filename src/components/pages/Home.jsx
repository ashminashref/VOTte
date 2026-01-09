import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CircleCheck, ShieldCheck, Zap, Lock, Users } from 'lucide-react';
import CollapsibleExample from '../sharedcomponents/CollapsibleExample';
import './Home.css';
import Features from '../home/Features';
import Footer from '../sharedcomponents/Footer';
import Working from '../home/Working';
import FAQ from '../home/FAQ';

function Home() {
  return (
    <div className='home-page'>
      {/* --- SECTION 01: HERO --- */}
      <div className='hero-container'>
        <div className="video-holder">
          <video src="/video/greenline2.mp4" autoPlay loop muted playsInline className='video'></video>
          <div className="video-overlay"></div> 
        </div>

        <div className="hero-content">
          <CollapsibleExample />
          
          <Container className="d-flex flex-column align-items-lg-center justify-content-lg-center text-lg-center text-white hero-min-height mycontainer">
            <div className="text-wrapper rounded-pill px-3 py-1 mb-4 d-flex align-items-center">
              <CircleCheck size={18} className="text-success me-2" />
              <span className='small-text'>Trusted by over 1,000 organizations online</span>
            </div>

            <h1 className="display-1 hero-title fw-bold">Democracy, Delivered.</h1>
            <p className="lead mb-4 opacity-75">
              VOTte provides a transparent, blockchain-backed platform to ensure <br className="d-none d-md-block" /> 
              every voice is heard and every vote is protected.
            </p>

            <div className="d-flex gap-3">
              <button className='btn btn-voter px-4 py-2  fw-bold'>Voter Login</button>
              <button className='btn btn-org px-4 py-2 fw-bold'>For Organizers</button>
            </div>
          </Container>
        </div>
      </div>

      {/* --- SECTION 02: FEATURES --- */}
      <Container>
        <Features/>
      </Container>
      <Working/>
<Container>
  <FAQ/>
</Container>
      <Footer/>
    </div>
  );
}

export default Home;