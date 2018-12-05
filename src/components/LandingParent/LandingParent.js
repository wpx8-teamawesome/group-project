import React, { Component } from 'react';
import './LandingParent.css'; 

import HorizontalScroll from 'react-scroll-horizontal'; 
import { TweenLite } from "gsap/all";

import testImageOne from './TestImages/codeBlue.jpg';
import testImageTwo from './TestImages/codeTwo.jpg'; 
import testImageThree from './TestImages/quasarOrSomething.jpg'; 
import testImageFour from './TestImages/travel.jpeg';  
import testProfile from './TestImages/profile_pic.jpg'; 

class LandingParent extends Component {
    constructor() {
        super() 
        this.state = {
            user: null, 
            scrollItems: [{
                id: 1, 
                eventDate: "Dec 6", 
                eventMainImageURL: testImageOne, 
                eventCreatorImageURL: testProfile, 
                eventTitle: "Javascript", 
                eventFullDateString: "",
                eventCreatorName: "Ethan"
            }, {
                id: 2,
                eventDate: "Dec 7", 
                eventMainImageURL: testImageTwo, 
                eventCreatorImageURL: testProfile, 
                eventTitle: "Java", 
                eventFullDateString: "",
                eventCreatorName: "Ethan"
            }, {
                id: 3,
                eventDate: "Dec 8", 
                eventMainImageURL: testImageThree, 
                eventCreatorImageURL: testProfile, 
                eventTitle: "Objective-C", 
                eventFullDateString: "",
                eventCreatorName: "Ethan"
            }, {
                id: 4,
                eventDate: "Dec 9", 
                eventMainImageURL: testImageFour, 
                eventCreatorImageURL: testProfile, 
                eventTitle: "React Native", 
                eventFullDateString: "",
                eventCreatorName: "Ethan"
            }] //Test
        }

        this.animationBoxOne = null; 
        this.animationBoxTwo = null; 
        this.animationBoxThree = null; 
        this.animationBoxFour = null; 
        this.animationBoxFive = null; 
        this.animationBoxSix = null; 
        this.animationBoxSeven = null; 
        this.animationBoxEight = null; 
        this.animationBoxNine = null; 
        this.animationBoxTen = null; 
        this.tweenOne = null; 
        this.tweenTwo = null;
        this.tweenThree = null; 
        this.tweenFour = null; 
        this.tweenFive = null; 
        this.tweenSix = null;
        this.tweenSeven = null; 
        this.tweenEight = null; 
        this.tweenNine = null;
        this.tweenTen = null; 
    }

    componentDidMount() {
        this.initTweenAnimations()
    }

    // # id identifies one element, class . can identify however many
    initTweenAnimations = () => {
        this.tweenOne = TweenLite.to(this.animationBoxOne, .5, { 
            x: 50,
            y: 50,
            width: 50, 
            height: 50, 
            backgroundColor: 'rgba(36, 88, 173, .4)'
        });
        this.tweenTwo = TweenLite.to(this.animationBoxTwo, 1, {
            x: 100,
            y: 100,
            width: 50, 
            height: 50, 
            backgroundColor: 'rgba(125, 214, 98, .5)'
        })
        this.tweenThree = TweenLite.to(this.animationBoxThree, 1.5, {
            x: 150,
            y: 150,
            width: 50, 
            height: 50, 
            backgroundColor: 'rgba(219, 94, 204, .85)'
        })
        this.tweenFour = TweenLite.to(this.animationBoxFour, 2, {
            x: 450,
            y: 100,
            width: 50, 
            height: 50, 
            backgroundColor: 'rgba(63, 219, 208, .7)'       
        })
        this.tweenFive = TweenLite.to(this.animationBoxFive, 2.5, {
            x: 550,
            y: 180,
            width: 50, 
            height: 50, 
            backgroundColor: 'rgba(82, 67, 242, .65)'
        })
        this.tweenSix = TweenLite.to(this.animationBoxSix, 2.5, {
            x: 300,
            y: 100,
            width: 50, 
            height: 50, 
            backgroundColor: 'rgba(82, 67, 142, .9)'
        })
        this.tweenSeven = TweenLite.to(this.animationBoxSeven, 3, {
            x: 600,
            y: 80,
            width: 50, 
            height: 50, 
            backgroundColor: 'rgba(219, 21, 51, .3)'
        })
        this.tweenEight = TweenLite.to(this.animationBoxEight, 1, {
            x: 700,
            y: 230,
            width: 50, 
            height: 50, 
            backgroundColor: 'rgba(77, 160, 14, .5)'
        })
        this.tweenNine = TweenLite.to(this.animationBoxNine, 2, {
            x: 750,
            y: 180,
            width: 50, 
            height: 50, 
            backgroundColor: 'rgba(237, 146, 9, .7)'
        })
        this.tweenTen = TweenLite.to(this.animationBoxTen, 1.5, {
            x: 650,
            y: 200,
            width: 50, 
            height: 50, 
            backgroundColor: 'rgba(17, 55, 178, 1)'
        })
    }

    handleEventOnClick = (id) => {
        console.log('event id', id)
    }

    render() {
        //Child can be own component
        const { scrollItems } = this.state;
        const children = scrollItems.map((item, index) => {
            return <div className="scroll_child">
                <div className="top_scroll_container">
                    <p>{item.eventDate}</p>
                    <img className="main_image" onClick={() => this.handleEventOnClick(item.id)} 
                src={item.eventMainImageURL} />
                </div>
                <div className="bottom_scroll_container">
                    <p>{item.eventTitle}</p>
                    <div>
                        <img src={item.eventCreatorImageURL} /> 
                        <p>{`Hosted by ${item.eventCreatorName}`}</p>
                    </div>
                </div>
            </div>
        })
        console.log('scroll items', scrollItems)
        const child = { width: `300em`, height: `100%`} //can also style like this
        return (
            <main className="Main_container">
                <div className="Main_one">
                    <div className="animation_container">
                        <div ref={div => this.animationBoxOne = div} />
                        <div ref={div => this.animationBoxTwo = div} />
                        <div ref={div => this.animationBoxThree = div} />
                        <div ref={div => this.animationBoxFour = div} />
                        <div ref={div => this.animationBoxFive = div} />
                        <div ref={div => this.animationBoxSix = div} />
                        <div ref={div => this.animationBoxSeven = div} />
                        <div ref={div => this.animationBoxEight = div} />
                        <div ref={div => this.animationBoxNine = div} />
                        <div ref={div => this.animationBoxTen = div} />
                    </div>
                </div>
                <div className="Main_two">
                    <p> Nearby Events </p>
                    <div className="animation_container_two">
                        <HorizontalScroll >
                            { children }
                        </HorizontalScroll>
                    </div>
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