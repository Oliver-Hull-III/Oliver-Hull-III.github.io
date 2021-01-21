import React from 'react';
import {Container, Col, Row, Button, Card } from 'react-bootstrap';
import './css/home.css';
import Gallery from 'react-photo-gallery';


function Home () {
  const paintYourPup = [
    {
      src: 'images/paintyourpup/pyp_1x1_1.jpg',
      width: 3,
      height: 3
    },
    {
      src: 'images/paintyourpup/pyp_4x3_3.jpg',
      width: 3,
      height: 4
    },
    {
      src: 'images/paintyourpup/pyp_7x5_3.jpg',
      width: 5,
      height: 7
    },
    {
      src: 'images/paintyourpup/pyp_4x3_4.jpg',
      width: 3,
      height: 4
    },
    {
      src: 'images/paintyourpup/pyp_10x8_4.jpg',
      width: 8,
      height: 10
    },
    {
      src: 'images/paintyourpup/pyp_3x2_1.jpg',
      width: 3,
      height: 2
    },
    {
      src: 'images/paintyourpup/pyp_10x8_3.jpg',
      width: 8,
      height: 10
    },
    {
      src: 'images/paintyourpup/pyp_3x2_2.jpg',
      width: 2,
      height: 3
    },
    {
      src: 'images/paintyourpup/pyp_7x5_2.jpg',
      width: 5,
      height: 7
    },
    {
      src: 'images/paintyourpup/pyp_7x5_1.jpg',
      width: 7,
      height: 5
    },
    {
      src: 'images/paintyourpup/pyp_10x8_1.jpg',
      width: 8,
      height: 10
    },
    {
      src: 'images/paintyourpup/pyp_10x8_2.jpg',
      width: 8,
      height: 10
    },
    {
      src: 'images/paintyourpup/pyp_3x2_3.jpg',
      width: 2,
      height: 3
    },
    {
      src: 'images/paintyourpup/pyp_4x3_1.jpg',
      width: 3,
      height: 4
    },
    {
      src: '/images/paintyourpup/pyp_4x3_2.jpg',
      width: 3,
      height: 4
    }

  ];

  const songsForFriends = [
      {
        src: 'images/songs4bffs/s4f_1.jpg',
        width: 1,
        height: 1
      },
      {
        src: 'images/songs4bffs/s4f_2.jpg',
        width: 1,
        height: 1
      },
      {
        src: 'images/songs4bffs/s4f_3.jpg',
        width: 1,
        height: 1
      },
      {
        src: 'images/songs4bffs/s4f_4.jpg',
        width: 1,
        height: 1
      }
    ];


  return (
    <Container fluid>



      <Container fluid className = "first-container bg-img-full p-0 d-flex" id="home">
        <h1 className="ml-md-5" style={{"alignSelf":"center", "fontSize" : "100px"}}>Kaleigh <br/> Llama</h1>
      </Container>
      <Container fluid className="primary-color" id="art">

      <Container className="p-1 p-md-2">
        <Row>
          <Col>
            <h1 className="m-3">Art</h1>
          </Col> 
        </Row>
        <Row  className="mb-4"> 
          <Col sm={12}>
            <Card> 
              <Card.Header>
                <h2>Paint ur Pup</h2>
                <p className="lead">This is a series of commisions I've been doing for owners of the animals I take care of, as well as my friends and family. you can request one <a href="/contact">here</a></p>
              </Card.Header>
              <Card.Body>
                <Gallery photos={paintYourPup} direction={"column"}/>
              </Card.Body>
            </Card>
          </Col>
        </Row>        
        <Row> 
          <Col sm={12}>
            <Card> 
              <Card.Header> 
                <h2>Songs for Friends</h2>
                <p className="lead">I took a song chosen by one of my friends and used as inspiration for each of these works.</p>
              </Card.Header>
              <Card.Body>
                <Gallery photos={songsForFriends} direction={"column"}/>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>


      </Container>

    
      <Button id="go-top-button" href="#home">^</Button>
    </Container>
  );
};

export default Home;