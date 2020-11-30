import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import Portrait from './images/portrait.png';
const About = () => (
  <Container fluid >
    <Row className="first-section" >
      <Col sm={12} md ={6} style={{backgroundImage:`url(${Portrait})`}}>
        <h1>About Me</h1>
        <p>Hi, I'm Kaleigh Llama. I'm a coast to coast Artist and Animal Lover. My two passions combined when Paint Your Pup was established in 2018. These commissions were portraits of the dogs' I worked with at a dog training school. My experience there led me to branch out, and become a Small and Large Animal Caretaker. Now my dream of painting alongside llamas has come true. Kaleigh is passionate about listening to musicians and turning their sounds into a visual experience. "Songs 4 BFFs'" is an ongoing project that runs on a submission based forum. Kaleigh takes your favorite song and turns it into a hard copy of colorful flows and melodies, that you can hang in your home. To see more follow me on instagram @kaleigh.llama </p>
      </Col>
    </Row>
  </Container>
);

export default About;