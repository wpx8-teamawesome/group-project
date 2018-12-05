import React, { Component } from 'react';
import './App.css';
import Banner from './components/Banner/Banner.js';
import Map from './components/Map/Map'

import routes from './routes'; 

class App extends Component {
  render() {
    return (
      <div id="container">
      <Map />
      </div>
      // // <div>
      // {/* <Banner />    */}
      // {/* { routes } */}
      // {/* </div> */}
    );
  }
}

export default App;

//COLOR SCHEME

// Teal: #27E5E9
// Blue/Gray: #27303F,
// Dark Gray: #1A202B,
// Regular blue: #1896DA,
// Darkest color: #0E131B