import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { AiFillInstagram, AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai';

const Navigation = () => (

    <nav className="navbar navbar-expand-lg navbar-dark primary-color">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <Link to="/" className="navbar-brand" >      
                <img src={"/images/tessellama.png"} width="32" height="47" alt="" loading="lazy"/>
            </Link> 
            <Navbar className="collapse navbar-collapse" id="navbar">
                <Nav>
                    <li className="nav-item">
                        <Link to="/art" className="nav-link">Art</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/animal-care" className="nav-link">Animal Care</Link>
                    </li>
                    <li className="nav-item">
                    <   Link to="/about" className="nav-link">About Me</Link>
                    </li>
                    <li className="nav-item">
                    <   Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                </Nav>
                <Nav className="ml-auto">
                <li className="nav-item">
                    <a href="https://www.instagram.com/kaleigh.llama/" className="nav-link"><AiFillInstagram/></a>
                </li>
                <li className="nav-item">
                    <a href="https://www.facebook.com/kale.acevedo.3" className="nav-link"><AiFillFacebook/></a>
                </li>
                <li className="nav-item">
                    <a href="https://www.twitter.com/kaleigh.llama/" className="nav-link"><AiFillTwitterSquare/></a>
                </li>
                </Nav>
            </Navbar>
        </div>
    </nav>
);

export default Navigation;