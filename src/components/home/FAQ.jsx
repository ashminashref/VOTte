import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import './FAQ.css';

function FAQ() {
  return (
    <Container className='faq-section my-5 py-5'>
      <div className="text-lg-center mb-5">
        <span className="process-badge px-3 py-1 rounded">FAQ'S</span>
        <h2 className="display-5 fw-bold text-white mt-3">Frequently Asked <br /> Questions</h2>
        <p className="text-secondary">Raising your voice starts with raising your questions.</p>
      </div>

      <div className="faq-wrapper mx-auto" style={{ maxWidth: '800px' }}>
        <Accordion flush className="custom-accordion">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How secure is my vote on VOTte?</Accordion.Header>
            <Accordion.Body>
              Your vote is encrypted at the source and stored on a decentralized ledger. 
              This means once a vote is cast, it cannot be altered, deleted, or tampered 
              with by anyone—not even our administrators.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Is my identity kept anonymous?</Accordion.Header>
            <Accordion.Body>
              Absolutely. While we verify your identity to ensure you are an eligible voter, 
              the link between your identity and your specific vote is encrypted and disconnected 
              to maintain total ballot secrecy.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Can I change my vote after submitting?</Accordion.Header>
            <Accordion.Body>
              To maintain the integrity of the election and prevent fraud, once a vote is 
              finalized and recorded on the blockchain, it cannot be changed.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>How are the results verified?</Accordion.Header>
            <Accordion.Body>
              At the end of the polling period, the system automatically tallies the 
              encrypted votes. A public audit trail is provided so organizations can 
              verify the mathematical accuracy of the results without compromising privacy.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </Container>
  );
}

export default FAQ;