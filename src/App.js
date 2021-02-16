import React, {useEffect, useState} from 'react';
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




export function cacheImage(src) {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => resolve(src);
    img.onerror = () => Promise.reject("couldn't load image:" + src);
    img.src = src;
  })
};

function App(){


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imgs = [
      'https://drive.google.com/uc?id=1YMS6ZZ1raoUIEMVP2s4DJ6nXPwH5Yfq5', //about-bg-lg.png
      'https://drive.google.com/uc?id=1UyEmh3LveWv85QpFjf8EhWjW-2tsEw0_', //about-bg-sm.png
      'https://drive.google.com/uc?id=1OKtGxBf8ibdThpn5FjpjbwF275JN-tIQ', //llama-lg.png
      'https://drive.google.com/uc?id=12gRvFlX4_5528Vy8ARpNefAY-Gkc0Bbk', //pyp-bg.png
      'https://drive.google.com/uc?id=1wMxoC8zz9qk-4sPL3_fgLhg2AJ-oNzgV', //request-painting-bg.png
      'https://drive.google.com/uc?id=1YxeMHsKb8vnScer8QU9nUUnFbQLh_lEK', //kaleigh-llama.png
      'https://drive.google.com/uc?id=1EZA3rWKF1hkV2Alb0dypDKfUzbTwQHMb',  //portrait.png
      'https://drive.google.com/uc?id=11S4IMTgYDy7hcEMVVYZdY-QHrBLxjQj2',   //animal-care.png
      

      //Contact pages
      'https://drive.google.com/uc?id=12gRvFlX4_5528Vy8ARpNefAY-Gkc0Bbk',
      'https://drive.google.com/uc?id=11S4IMTgYDy7hcEMVVYZdY-QHrBLxjQj2',
      'https://drive.google.com/uc?id=1wMxoC8zz9qk-4sPL3_fgLhg2AJ-oNzgV',
      'https://drive.google.com/uc?id=1OKtGxBf8ibdThpn5FjpjbwF275JN-tIQ'
    ];

    cacheImages(imgs);
  }, []);



  
  const cacheImages = async (srcArray) => {

    document.body.classList.add("no-scroll");

    const promises = await srcArray.map((src) => cacheImage(src));

    await Promise.all(promises);

    document.body.classList.remove("no-scroll");
    setIsLoading(false);
  }


  return(
    <div id = "outermost-div">
      {isLoading ? 
      <div className="loading-overlay">
        <div className="spinner">
          <div className="bounce1"/>
          <div className="bounce2"/>
          <div className="bounce3"/>
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