import React, { Component } from 'react';
import './Banner.css'; 
import { connect } from 'react-redux';
import { loginUser } from '..//../ducks/reducer'; 
import { logoutUser } from '..//../ducks/reducer'; 
//import { withRouter } from 'react-router-dom';

import user from '..//..//images/user.png'; 
import globe from '..//..//images/globe.png'; 

class Banner extends Component {
    constructor() {
        super() 
        this.state = {
            user: null
        }
    }

    render() {
        return (
            <header className="App-header">
                <div className="left_nav">
                    <p>Code Planet</p>
                    <img src={globe}/>
                </div>
                <div className="right_nav">
                    <img src={user}/>
                </div>
            </header>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { loginUser, logoutUser })(Banner); 