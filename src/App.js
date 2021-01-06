import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './css/App.css';
import './css/utilities.css';
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
      <div id = "outermost-div">
        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/art" component={Art} />
        <Route path="/contact" component={Contact} />
        <Route path="/animal-care" component={AnimalCare} />
        <Footer/>
      </div>
  );
  }
}

export default App;
