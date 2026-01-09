import React from 'react'
import './Footer.css'
import { Container, Row, Col } from 'react-bootstrap'
function Footer() {
  return (
    <div>
<h1 className='text-center display-1 logo'>VOTte</h1>
    <div className='p-5 foot-container'>
        
        <Container>
            <Row className='gy-5'>
                <Col lg = {3}>
                <h4>VOTte</h4>
<p className='p-0 m-0 footer-p-1'>Integrity at every interactions</p>
<div className="contact my-5">
<h5 className='text-muted'>Email</h5>
<h6 className='mail-txt'>services@votte.com</h6>
</div>

<div className="contact my-5">
<h5 className='text-muted'>Phone</h5>
<h6>+91 752 90 88 28</h6>
</div>
                </Col>
                
                <Col lg = {3} className='d-flex justify-content-lg-end'>
                <ul className='m-0 p-0'>
                    <h6>Navigations</h6>
                    <li>FAQ</li>
                    <li>Home</li>
                    <li>Features</li>
                </ul>
                </Col>

                <Col lg = {3} className='d-flex justify-content-lg-end'>
                <ul className='m-0 p-0'>
                    <h6>Follow Us</h6>
                    <li>Instagram</li>
                    <li>X - Formerly Twitter</li>
                    <li>Facebook</li>
                    <li>Threads</li>
                </ul>
                </Col>

                <Col lg = {3} className='d-flex justify-content-lg-end'>
                <ul className='m-0 p-0'>
                    <h6>Address</h6>
                    <li>Kozhikode, Kerala <br />673574, CyberPark</li>
                 
                </ul>
                </Col>
            </Row>
            <p className='mt-4'>2026-27 VOTte All rights reserved</p>
        </Container>

    </div>
        </div>

  )
}

export default Footer