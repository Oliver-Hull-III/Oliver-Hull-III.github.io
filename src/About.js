import React from 'react';
import {Col, Card} from 'react-bootstrap';
import './css/about.css';
import { Link } from 'react-router-dom';
const About = () => (
    <div className = "about-section first-container bg-img-full">
      <Col xl={4} lg={6} md={7} id="portrait" className="d-none d-md-block">
        <img src="https://u.cubeupload.com/kaleighllama/portrait.png" alt="a pictur of nectar"/>
      </Col>
      <Col lg={4} md={5} sm={12} className="offset-lg-1 offset-xl-3 offset-xs-0 mt-2 mt-md-0" id ="about-text">
        <Card >
          <Card.Header>
            <h1>About Me</h1>
          </Card.Header>
          <Card.Body>
            <p>I'm an artist based in Oregon.  After attending FIT in 2017, I moved here to pursue a career as an Animal Caretaker. Since then I have watched over animals small and large (including llamas of course). I am also in the process of learning Canine Massage Therapy.</p>

            <p>My two passions were intertwined when I started Paint Your Pup, a series of pieces featuring my client's/friends dogs. If you have a pup you'd like painted you can request one <Link to="/contact">here</Link> </p>
          </Card.Body>
        </Card> 
      </Col>

    </div>

);

export default About;