import React, { Component } from 'react';
import './App.scss';
import Banner from './components/Banner/Banner.js';
import axios from 'axios'
import { connect } from 'react-redux'
import { loginUser } from './ducks/reducer'


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
      this.setState({ scrolling: false });
    }
    else if (window.scrollY !== 0 && this.state.scrolling !== true) {
      this.setState( {scrolling: true });
    }
  }

  //Lifecycle
  componentDidMount() {
    this.addListener() 
    // axios.get('/api/auth/session').then(res => {
    //   console.log(res.data)
    //   if (res.data) {
    //     this.props.loginUser(res.data)
    //   }
    // })
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
// export default connect(null, {loginUser})(App);
