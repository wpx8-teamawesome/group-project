import React, { Component } from 'react';
import './App.css';
import Banner from './components/Banner/Banner.js';


import routes from './routes'; 

class App extends Component {
  render() {
    return (
      
      <div>
        <Banner /> 
        { routes }
      </div>
    );
  }
}

export default App;
