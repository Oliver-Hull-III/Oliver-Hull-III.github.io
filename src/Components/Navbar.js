import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { AiFillInstagram, AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai';
import Logo from '../images/alpaca-svgrepo-com.svg';

const Navigation = () => (

    <Navbar collapseOnSelect expand="lg" className="primary-color" variant='dark'>
    <Navbar.Brand>
      <img src={Logo} width="50" height="50"/>
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
        <Nav.Item>
            <Link to="/art" className="nav-link">Art</Link>
        </Nav.Item>
        <Nav.Item>
            <Link to="/animal-care" className="nav-link">Animal Care</Link>
        </Nav.Item>
        <Nav.Item>
            <Link to="/about" className="nav-link">About Me</Link>
        </Nav.Item>   
        <Nav.Item>
            <Link to="/contact" className="nav-link">Contact</Link>
        </Nav.Item>
    </Nav>
    <Nav>
        <Nav.Item>
            <a href="https://www.instagram.com/kaleigh.llama/" className="nav-link"><AiFillInstagram size={30}/></a>
        </Nav.Item>
        <Nav.Item>
            <a href="https://www.facebook.com/kale.acevedo.3" className="nav-link"><AiFillFacebook size={30}/></a>
        </Nav.Item>
        <Nav.Item>
            <a href="https://www.twitter.com/kaleigh.llama/" className="nav-link"><AiFillTwitterSquare size={30}/></a>
        </Nav.Item>
    </Nav>
  </Navbar.Collapse>
</Navbar>

);

export default Navigation;