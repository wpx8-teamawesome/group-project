import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './login_register.scss'

class LoginRegister extends Component {
    constructor() {
        super()
        this.state ={
            registerBtnClicked: false,
            usernameInput: '',
            passwordInput: '',
            emailInput: '',
            cityInput: ''
        }
    }

    handleInputChange = (key, value) => {
        this.setState({
            [key]: value,
        })
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
                    <button className="login-">Login</button>
                    <p>|</p>
                    <button onClick={this.toggleDisplayClick} className="login-">New Account</button>
                    </div>
                </div>
            )
              
        }else {
            return (
                <div className="login-container register-container">
                    <h1>Register</h1>

                    <div className="input-group">
                        <h2>Enter Username:</h2>
                        <input onChange={(e) => this.handleInputChange('usernameInput', e.target.value)} value={usernameInput} type="text" placeholder="Username"/>
                    </div>

                    <div className="input-group">
                        <h2>Enter Password:</h2>
                        <input onChange={(e) => this.handleInputChange('passwordInput', e.target.value)} value={passwordInput} type="text" placeholder="Password"/>
                    </div>

                    <div className="input-group">
                        <h2>Enter Valid Email:</h2>
                        <input onChange={(e) => this.handleInputChange('emailInput', e.target.value)} value={emailInput} type="text" placeholder="Email"/>
                    </div>

                    <div className="input-group">
                        <h2>Enter Your Home City:</h2>
                        <input onChange={(e) => this.handleInputChange('cityInput', e.target.value)} value={cityInput} type="text" placeholder="City"/>
                    </div>

                    <div className="register-btns-box">
                    <Link to="/"><button>Submit</button></Link>
                    <button onClick={this.toggleDisplayClick}>Back To Login</button>
                    </div>
                    
                
                </div>
            )
            
        }
      }
}

export default LoginRegister