import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import About from "./About";
import Navbar from './Components/Navbar';
import Gallery from "./Gallery";


function App() {
  return (
    <div>
      <Navbar/>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/art/:category" component={Gallery} />
    </div>
  );
}

export default App;
