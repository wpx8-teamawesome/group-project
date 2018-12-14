import React, { Component } from 'react';
import './Banner.scss'; 
import { connect } from 'react-redux';
import { loginUser } from '..//../ducks/reducer'; 
import { logoutUser } from '..//../ducks/reducer'; 
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import axios from 'axios'
import downArrow from '..//..//images/downArrow.png'; 
import downArrowTwo from '..//..//images/downArrowTwo.png'; 

import cplogo from '..//..//images/cplogo.png'; 


class Banner extends Component {
    constructor(props) {
        super(props) 
        this.state = { 
            toggled: false, 
            toggleImage: downArrow
        }
    }

    toggleNav = () => {
        this.setState({
            toggled: !this.state.toggled
        })
    }

    signOutHandler = () => {
        this.setState({ user: null, toggled: false  })
        axios.post('/api/auth/logout').then(() => {
        })
        this.props.logoutUser()
    }

    componentDidMount() {
        axios.get('/api/auth/session').then(res => {
              console.log(res.data)
              this.props.loginUser(res.data)
        })
    }

    render() {
        
        const defaultImg = "https://cdn5.vectorstock.com/i/thumb-large/54/94/geek-man-cartoon-vector-19475494.jpg"
        const { user } = this.props; 
        const { toggled, toggleImage } = this.state; 

        return (
            <div>
            <header className="App-header">
                <div className="left_nav">
                    <Link to='/'><img src={cplogo} alt="code planet"></img></Link>
                </div>
                <div className="right_nav">
                    { user.id ?
                    <ul className="nav_items">
                        <img src={!user.img? defaultImg : user.img} alt='user'/>
                        <img className="toggle_image"
                        onClick={this.toggleNav} 
                        src={toggleImage} 
                        onMouseEnter={() => { this.setState({ toggleImage: downArrowTwo }) }}
                        onMouseOut={() => { this.setState({ toggleImage: downArrow }) }}
                        alt='arrow'
                        /> 
                    </ul>
                    : <Link to="/login"><button className="lisu_button" onClick={ this.loginSignupHander } >Login / Sign Up</button></Link> } 
                </div>
            </header> 
            { toggled === true ? <div className="toggle_container">
                <ul>
                    <li><button>{ user != null ? user.username : "Sign In"}</button></li>
                    <li><Link to="dashboard"><button onClick={this.toggleNav}>Dashboard</button></Link></li>
                    <li><Link to={`/user/${user.id}`}><button onClick={this.toggleNav}>Profile</button></Link></li>
                    <li><Link to="/"><button onClick={this.signOutHandler}>Sign Out</button></Link></li> 
                </ul>
            </div> : <div></div> }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { loginUser, logoutUser })(withRouter(Banner)); 



