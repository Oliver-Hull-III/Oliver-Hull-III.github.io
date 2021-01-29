import React, { useEffect, useState } from 'react';
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


function App(){

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imgs = [
      '/images/kaleigh_llama.png',
      '/images/llama.jpg'
    ];

    cacheImages(imgs);
  }, []);

  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {

      document.body.classList.add("no-scroll");

      return new Promise(function(resolve, reject) {
        const img = new Image();

        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });

    await Promise.all(promises);

    document.body.classList.remove("no-scroll");
    setIsLoading(false);
  }

  return(
    <div id = "outermost-div">
        {isLoading ? 
        <div className="loading-overlay">
         <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
        </div> 
      : null}
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

export default App;
