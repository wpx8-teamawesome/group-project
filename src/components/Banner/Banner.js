import React, { Component } from 'react';
import './Banner.css'; 
import { connect } from 'react-redux';
import { loginUser } from '..//../ducks/reducer'; 
import { logoutUser } from '..//../ducks/reducer'; 
//import { withRouter } from 'react-router-dom';

import userImage from '..//..//images/user.png'; 
import globe from '..//..//images/globe.png'; 
import downArrow from '..//..//images/downArrow.png'; 
import downArrowTwo from '..//..//images/downArrowTwo.png'; 

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

    render() {
        const { user } = this.props; //get image accordingly
        const { toggled, toggleImage } = this.state; 
        return (
            <div>
            <header className="App-header">
                <div className="left_nav">
                    <p>Code Planet</p>
                    <img src={globe}/>
                </div>
                <div className="right_nav">
                    <ul className="nav_items">
                        <img src={userImage}/>
                        <img className="toggle_image"
                        onClick={this.toggleNav} 
                        src={toggleImage} 
                        onMouseEnter={() => {
                            this.setState({
                              toggleImage: downArrowTwo
                            })
                        }}
                        onMouseOut={() => {
                            this.setState({
                              toggleImage: downArrow
                            })
                        }}
                        /> 
                    </ul>
                </div>
            </header> 
            {/* --- Can be own component --- */}
            { toggled === true ? <div className="toggle_container">
                <ul>
                <li><button>Home</button></li>
                <li><button>About</button></li>
                <li><button>Meetups</button></li> 
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