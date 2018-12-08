import React, { Component } from 'react';
import './Banner.scss'; 
import { connect } from 'react-redux';
import { loginUser } from '..//../ducks/reducer'; 
import { logoutUser } from '..//../ducks/reducer'; 
//import { withRouter } from 'react-router-dom';

import userImage from '..//..//images/user.png'; 
import globe from '..//..//images/globe.png'; 
import downArrow from '..//..//images/downArrow.png'; 
import downArrowTwo from '..//..//images/downArrowTwo.png'; 

import testProfileImage from '..//LandingParent/TestImages/profile_pic.jpg'; 

class Banner extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            user: null, 
            toggled: false, 
            toggleImage: downArrow
        }
    }

    toggleNav = () => {
        this.setState({
            toggled: !this.state.toggled
        })
    }

    loginSignupHander = () => {

    }

    signOutHandler = () => {
        this.setState({ user: null, toggled: false  })
    }

    componentDidMount() {
        setInterval(this.assignUserForTestAfterThreeSeconds(), 3000)
    }

    //TEST
    assignUserForTestAfterThreeSeconds = () => {
        const newUser = {
            username: "Ethan", 
            profileURL: testProfileImage
        }
        this.setState({ user: newUser })
    }

    render() {
        //const { user } = this.props; //get image accordingly
        const { user } = this.state; //test, will do via props (redux)
        const { toggled, toggleImage } = this.state; 
        return (
            <div>
            <header className="App-header">
                <div className="left_nav">
                    <p>Code Planet</p>
                    <img src={globe}/>
                </div>
                <div className="right_nav">
                    { user != null ?
                    <ul className="nav_items">
                        <img src={ testProfileImage }/>
                        <img className="toggle_image"
                        onClick={this.toggleNav} 
                        src={toggleImage} 
                        onMouseEnter={() => { this.setState({ toggleImage: downArrowTwo }) }}
                        onMouseOut={() => { this.setState({ toggleImage: downArrow }) }}
                        /> 
                    </ul>
                    : <button className="lisu_button" onClick={ this.loginSignupHander } >Login / Sign Up</button> }
                </div>
            </header> 
            {/* --- Can be own component --- */}
            { toggled === true ? <div className="toggle_container">
                <ul>
                    {/* user.username */}
                    <li><button>{ user != null ? user.username : "Sign In"}</button></li>
                    <li><button>Dashboard</button></li>
                    <li><button>Profile</button></li>
                    <li><button onClick={this.signOutHandler}>Sign Out</button></li> 
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

export default connect(mapStateToProps, { loginUser, logoutUser })(Banner); 