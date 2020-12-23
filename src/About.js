import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import Portrait from './images/portrait.png';
import aboutBackground from './images/about-background.jpg';

const About = () => (
  <div className="main-container vw-100" style={{backgroundImage:`url(${aboutBackground})`}}>
    <Container>
      <Row>
        <Col sm={12} lg ={6} className="h-100">
          <div className="card">
            <div className="card-body">
              <h1>About Me</h1>
              <p id="about-me-intro">I'm an artist/animal care-taker based in Bend, Oregon</p>
              <p id="about-me-main">I've been painting for most of my life, and have been caring for dogs, cats and farm animals for the past 3 years.</p>
            </div>
          </div>                  
        </Col>
        <Col sm={12} lg ={6} className="align-self-end" >
          <img src={Portrait} alt="" className="w-100 portrait-img"/>
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;