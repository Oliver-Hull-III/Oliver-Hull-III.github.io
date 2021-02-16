import React from 'react';
import {Container, Button } from 'react-bootstrap';
import './css/home.css';
import Art from './Art';


function Home () {
  
  return (
    <Container fluid>

      <Container fluid className = "first-container bg-img-full p-0 d-flex" id = "home" style = {{backgroundImage : 'url("https://drive.google.com/uc?id=1OKtGxBf8ibdThpn5FjpjbwF275JN-tIQ")'}}>
        <img src="https://drive.google.com/uc?id=1YxeMHsKb8vnScer8QU9nUUnFbQLh_lEK" alt="Kaleigh Llama" id="name-img"/>
      </Container>
      <Art/>

    
      <Button id="go-top-button" href="#home">^</Button>
    </Container>
  );
};

export default Home;