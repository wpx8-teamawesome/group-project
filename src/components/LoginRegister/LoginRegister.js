import React, { Component } from 'react'
import './login_register.scss'
import axios from 'axios';
import Geocode from "react-geocode"
import { loginUser } from '../../ducks/reducer'
import { connect } from 'react-redux'

class LoginRegister extends Component {
    constructor() {
        super()
        this.state ={
            registerBtnClicked: false,
            usernameInput: 'testuser19',
            passwordInput: 'testuser19',
            emailInput: '',
            cityInput: ''
        }
    }
    componentDidMount() {
        Geocode.setApiKey(process.env.REACT_APP_MAPS_API_KEY);
     }  
    
    handleInputChange = (key, value) => {
        this.setState({
            [key]: value,
        })
      }
    handleRegisterClick = () => {
        const {usernameInput, passwordInput, emailInput, cityInput} = this.state
        if (!usernameInput || !passwordInput || !emailInput || !cityInput) {
            alert("All fields must be filled out")
        } else {
            Geocode.fromAddress(cityInput).then(
                response => {
                  const { lat, lng } = response.results[0].geometry.location;
                  const latLng = {lat: lat, lng: lng}
                  axios.post('/api/auth/register', {username: usernameInput, password: passwordInput, email: emailInput, latLng: latLng }).then(res => {
                      if (res.data.message === "Username is unavailable") {
                          alert(res.data.message)
                      } else {
                          this.props.loginUser(res.data)
                          this.props.history.push('/dashboard')
                      }
                  })
                },
                error => {
                  console.error(error);
                }
              );
            
        }
    }
    handleLoginClick = () => {
        const { usernameInput, passwordInput } = this.state
        if (!usernameInput || !passwordInput) {
            alert("All fields must be filled out")
        } else {
            axios.post('/api/auth/login', {username:usernameInput, password: passwordInput }).then(res => {
                if (res.data.message === 'Username and Password do not match' || res.data.message === 'Username Does Not Exist. Please Click Register To Create an Account.') {
                    alert(res.data.message)
                } else {
                    this.props.loginUser(res.data)
                    this.props.history.push('/dashboard')
                }
            })
        }
        
    }
    
    toggleDisplayClick = () => {
        this.setState({
            registerBtnClicked: !this.state.registerBtnClicked
        })
    }  
    render() {
        const {usernameInput, passwordInput, emailInput, cityInput} = this.state

        if (!this.state.registerBtnClicked) {
            return (
                <div className="login-container">
                    <h1>Login</h1>
                    
                    <input onChange={(e) => this.handleInputChange('usernameInput', e.target.value)} value={usernameInput} type="text" placeholder="Username"/>
                    <input onChange={(e) => this.handleInputChange('passwordInput', e.target.value)} value={passwordInput} type="password" placeholder="Password"/>
                    
                    <div className="login-btns-box">
                    <button onClick={this.handleLoginClick} className="login-">Login</button>
                    <p>|</p>
                    <button onClick={this.toggleDisplayClick} className="login-">New Account</button>
                    </div>
                </div>
            )
        }else {
            return (
                <div className="login-container register-container">
                    <h1>Register</h1>

                    <input onChange={(e) => this.handleInputChange('usernameInput', e.target.value)} value={usernameInput} type="text" placeholder="Enter username"/>
                    <input onChange={(e) => this.handleInputChange('passwordInput', e.target.value)} value={passwordInput} type="password" placeholder="Enter password"/>
                    <input onChange={(e) => this.handleInputChange('emailInput', e.target.value)} value={emailInput} type="text" placeholder="Enter email"/>
                    <input onChange={(e) => this.handleInputChange('cityInput', e.target.value)} value={cityInput} type="text" placeholder="Enter city"/>
                    
                    <div className="register-btns-box">
                        <button onClick={this.handleRegisterClick} className="register-btn">Submit</button>
                        {/* <Link to="/"><button onClick={this.handleRegisterClick} className="register-btn">Submit</button></Link> */}
                        <button className="back-to-login" onClick={this.toggleDisplayClick}>Back To Login</button>
                    </div>

                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    const { user } = state
    return {
        user
    }
 }

export default connect(mapStateToProps, {loginUser} )(LoginRegister)