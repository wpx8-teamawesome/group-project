import React, { Component } from 'react';
import './App.css';
import Banner from './components/Banner/Banner.js';

import routes from './routes'; 

class App extends Component {
  constructor() {
    super() 
    this.state = {
      scrolling : false, 
      user: null,
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  //Listen for scrolling
  addListener() {
    window.addEventListener('scroll', this.handleScroll)
  }

  removeListener() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    if (window.scrollY === 0 && this.state.scrolling === true) {
      this.setState({scrolling: false});
    }
    else if (window.scrollY !== 0 && this.state.scrolling !== true) {
      this.setState({scrolling: true});
    }
  }

  //Lifecycle
  componentDidMount() {
    this.addListener() 
  }

  componentWillUnmount() {
    this.removeListener()
  }

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

//COLOR SCHEME

// Teal: #27E5E9
// Blue/Gray: #27303F,
// Dark Gray: #1A202B,
// Regular blue: #1896DA,
// Darkest color: #0E131B