import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import './utilities.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import About from "./About";
import Navbar from './Components/Navbar';
import Art from "./Art";
import Contact from './Contact';
import AnimalCare from './AnimalCare';
import Footer from './Components/Footer';


class App extends Component  {
  render (){
    return(
      <div>
        <Navbar/>
        <Route path="/about" component={About} />
        <Route path="/art" component={Art} />
        <Route path="/contact" component={Contact} />
        <Route path="/animal-care" component={AnimalCare} />
        <Route path="/*" component={Home} />
        <Footer/>
      </div>
  );
  }
}

export default App;
