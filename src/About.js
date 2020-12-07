import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import Portrait from './images/portrait.png';
const About = () => (
  <Container id="about-me">
    <Row className="mt-2 align-items-end h-100  main-component" >
      <Col sm={12} md ={4} className="h-100">
        <h1>About Me</h1>
        <p id="about-me-intro">I'm an artist/animal care-taker based in Bend, Oregon</p>
        <p id="about-me-main">I've been painting for most of my life, and have been caring for dogs, cats and farm animals for the past 3 years.</p>
                 
      </Col>
      <Col sm={12} md ={4}>
        <img src={Portrait} alt="" className="w-100"/>
      </Col>
    </Row>
  </Container>
);

export default About;