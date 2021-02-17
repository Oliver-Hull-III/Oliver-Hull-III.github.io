import React from 'react';
import {Container, Button } from 'react-bootstrap';
import './css/home.css';
import Art from './Art';


function Home () {

  return (
    <Container fluid>

      <Container fluid className = "first-container bg-img-full p-0 d-flex" id = "home" style = {{backgroundImage : 'url("https://u.cubeupload.com/kaleighllama/llama.jpg")'}}>
        <img src="https://u.cubeupload.com/kaleighllama/kaleighllama.png" alt="Kaleigh Llama" id="name-img"/>
      </Container>
      <Art/>

      <Button id="go-top-button" href="#home">^</Button>
    </Container>
  );
};

export default Home;