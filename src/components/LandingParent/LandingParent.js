import React, { Component } from 'react';
import './LandingParent.css'; 

import { TweenMax, CSSPlugin, ScrollToPlugin, Draggable, Elastic, TweenLite } from "gsap/all";

class LandingParent extends Component {
    constructor() {
        super() 
        this.state = {
            //User ect.
        }

        this.animationBoxOne = null; 
        this.tweenOne = null; 
    }

    componentDidMount() {
        this.tweenOne = TweenLite.to(this.animationBoxOne, 1, { 
            width: 100, 
            height: 100, 
            backgroundColor: "red" 
        });
    }

    render() {
        return (
            <main className="Main_container">
                <div className="Main_one">
                    <div className="animation_container">
                        <div ref={div => this.animationBoxOne = div} />
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