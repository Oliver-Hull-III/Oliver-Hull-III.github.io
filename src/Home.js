import React, { useEffect } from 'react';
import {Container, Col, Row, Button} from 'react-bootstrap';
import './css/home.css';
import Scrollspy from 'react-scrollspy'


function Home () {

  return (
    <Container fluid>



      <Container fluid className = "first-container bg-img-full p-0" id="home">
        <h1>Kaleigh</h1>
      </Container>
      <Container fluid className="second-container" id="art">
      <h1>Art</h1>

      </Container>

      <Container fluid className="second-container" id="animalcare">
        <h1>animalcare</h1>
      </Container>
      <Button id="go-top-button" href="#home">^</Button>
    </Container>
  );
};

export default Home;