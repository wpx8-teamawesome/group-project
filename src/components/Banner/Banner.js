import React, { Component } from 'react';
import './Banner.scss'; 
import { connect } from 'react-redux';
import { loginUser } from '..//../ducks/reducer'; 
import { logoutUser } from '..//../ducks/reducer'; 
import { Link } from 'react-router-dom';

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
        // this.props.history.push('/login')
    }

    signOutHandler = () => {
        this.setState({ user: null, toggled: false  })
        this.props.logoutUser()
    }

    componentDidMount() {

    }

    render() {
        const { user } = this.props
        const { toggled, toggleImage } = this.state 
        const userPath = user ? `user/${user.id}` : `/`
        return (
            <div>
            <header className="App-header">
                <div className="left_nav">
                    <Link to='/'><p>Code Planet</p></Link>
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
                    : <Link to="/login"><button className="lisu_button" onClick={ this.loginSignupHander } >Login / Sign Up</button></Link> } 
                </div>
            </header> 
            {/* --- Can be own component --- */}
            { toggled === true ? <div className="toggle_container">
                <ul>
                    <li><button>{ user != null ? user.username : "Sign In"}</button></li>
                    <li><Link to="/dashboard"><button>Dashboard</button></Link></li>
                    <li><Link to={ userPath }><button>Profile</button></Link></li>
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

export default connect(mapStateToProps, { loginUser, logoutUser })(Banner); 