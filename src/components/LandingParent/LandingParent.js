import React, { Component } from 'react';
import './LandingParent.css'; 

class LandingParent extends Component {
    constructor() {
        super() 
        this.state = {
            //User ect.
        }
    }

    render() {
        return (
            <main className="Main_container">
                <div className="Main_one">
                    <div className="animation_container">
                        <script className="script_container" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>
                    </div>
                </div>
                <div className="Main_two">
                
                </div>
                <div className="Main_three">
                
                </div>
                <div className="Main_four">
                
                </div>
            </main>
        )
    }
}

export default LandingParent