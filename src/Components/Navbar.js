import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
const Navigation = () => (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <Link to="/" className="navbar-brand" >      
                <img src={"/images/tessellama.png"} width="32" height="47" alt="" loading="lazy"/>
            </Link> 
            <Navbar className="collapse navbar-collapse" id="navbar">
                <Nav>
                    <NavDropdown title="Art" id="basic-nav-dropdown">
                        <li className="nav-item">
                            <Link to="/art" className="nav-link">View All</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/art/painturpup" className="nav-link">Paint-Your-Pup</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/art/songs4friendz" className="nav-link">Songs 4 Friendz</Link>
                        </li>
                    </NavDropdown>
                        <li className="nav-item">
                            <Link to="/gallery" className="nav-link">Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/gallery" className="nav-link">Dog/Animal Watching</Link>
                        </li>
                        <li className="nav-item">
                        <   Link to="/about" className="nav-link">About Me</Link>
                        </li>
                </Nav>
            </Navbar>
        </div>
    </nav>
);

export default Navigation;