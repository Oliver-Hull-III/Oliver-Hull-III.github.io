import React, { useEffect } from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import './css/home.css';
import Scrollspy from 'react-scrollspy'


function Home () {

  return (
    <Container fluid>
    <div>
    

    
      <Scrollspy items={ ['home-section', 'art-section', 'animalcare-section'] } currentClassName="is-current">
        <li><a href="#home-section">section 1</a></li>
        <li><a href="#art-section">section 2</a></li>
        <li><a href="#animalcare-section">section 3</a></li>
      </Scrollspy>
    
    </div>



      <Container fluid className = "first-container bg-img-full p-0" id="home-section">
        <h1>Kaleigh</h1>
      </Container>
      <Container className="second-container" id="art-section">
      <h1>Art</h1>

      </Container>

      <Container className="second-container" id="animalcare-section">
        <h1>animalcare</h1>
      </Container>
    </Container>
  );
};

export default Home;