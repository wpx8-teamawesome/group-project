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
        this.animationBoxEleven = null; 
        this.animationBoxTwelve = null; 
        this.animationBoxThirteen = null; 
        this.animationBoxFourteen = null; 
        this.animationBoxFifteen = null; 
        this.animationBoxSixteen = null; 
        this.animationBoxSeventeen = null; 
        this.animationBoxEighteen = null; 
        this.animationBoxNineteen = null; 
        this.animationBoxTwenty = null; 
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
        this.tweenEleven = null; 
        this.tweenTwelve = null;
        this.tweenThirteen = null; 
        this.tweenFourteen = null; 
        this.tweenFifteen = null; 
        this.tweenSixteen = null;
        this.tweenSeventeen = null; 
        this.tweenEighteen = null; 
        this.tweenNineteen = null;
        this.tweenTwenty = null; 
    }

    componentDidMount() {
        this.initTweenAnimations()
    }

    // # id identifies one element, class . can identify however many
    initTweenAnimations = () => {
        //Should have multiple? 
        const timeGroupOne = 5 
        this.tweenOne = TweenLite.to(this.animationBoxOne, timeGroupOne, { 
            x: 50, y: 50, width: 60, height: 60, backgroundColor: 'rgba(36, 88, 173, .4)', borderRadius: 30
        })
        this.tweenTwo = TweenLite.to(this.animationBoxTwo, timeGroupOne, {
            x: 100, y: 100, width: 40, height: 40, backgroundColor: 'rgba(125, 214, 98, .5)', borderRadius: 20
        })
        this.tweenThree = TweenLite.to(this.animationBoxThree, timeGroupOne, {
            x: 150, y: 150, width: 50, height: 50, backgroundColor: 'rgba(219, 94, 204, .85)', borderRadius: 25
        })
        this.tweenFour = TweenLite.to(this.animationBoxFour, timeGroupOne, {
            x: 450, y: 80, width: 55, height: 55, backgroundColor: 'rgba(63, 219, 208, .7)', borderRadius: 27.5     
        })
        this.tweenFive = TweenLite.to(this.animationBoxFive, timeGroupOne, {
            x: 550, y: 180, width: 45, height: 45, backgroundColor: 'rgba(82, 67, 242, .65)', borderRadius: 22.5
        })
        this.tweenSix = TweenLite.to(this.animationBoxSix, timeGroupOne, {
            x: 250, y: 100, width: 40, height: 40, backgroundColor: 'rgba(7, 62, 239, .9)', borderRadius: 20
        })
        this.tweenSeven = TweenLite.to(this.animationBoxSeven, timeGroupOne, {
            x: 600, y: 80, width: 35, height: 35, backgroundColor: 'rgba(219, 21, 51, .3)', borderRadius: 17.5
        })
        this.tweenEight = TweenLite.to(this.animationBoxEight, timeGroupOne, {
            x: 700, y: 230, width: 40, height: 40, backgroundColor: 'rgba(77, 160, 14, .5)', borderRadius: 20
        })
        this.tweenNine = TweenLite.to(this.animationBoxNine, timeGroupOne, {
            x: 750, y: 180, width: 50, height: 50, backgroundColor: 'rgba(237, 146, 9, .7)', borderRadius: 25
        })
        this.tweenTen = TweenLite.to(this.animationBoxTen, timeGroupOne, {
            x: 650, y: 200, width: 50, height: 50, backgroundColor: 'rgba(17, 55, 178, 1)', borderRadius: 25
        })
        //Next ten
        this.tweenEleven = TweenLite.to(this.animationBoxEleven, timeGroupOne, { 
            x: 700, y: 280, width: 60, height: 60, backgroundColor: 'rgba(36, 88, 173, .4)', borderRadius: 30
        })
        this.tweenTwelve = TweenLite.to(this.animationBoxTwelve, timeGroupOne, {
            x: 800, y: 100, width: 40, height: 40, backgroundColor: 'rgba(125, 214, 98, .5)', borderRadius: 20
        })
        this.tweenThirteen = TweenLite.to(this.animationBoxThirteen, timeGroupOne, {
            x: 770, y: 140, width: 50, height: 50, backgroundColor: 'rgba(219, 94, 204, .85)', borderRadius: 25
        })
        this.tweenFourteen = TweenLite.to(this.animationBoxFourteen, timeGroupOne, {
            x: 850, y: 350, width: 55, height: 55, backgroundColor: 'rgba(63, 219, 208, .7)', borderRadius: 27.5       
        })
        this.tweenFifteen = TweenLite.to(this.animationBoxFifteen, timeGroupOne, {
            x: 880, y: 470, width: 45, height: 45, backgroundColor: 'rgba(82, 67, 242, .65)', borderRadius: 22.5
        })
        this.tweenSixteen = TweenLite.to(this.animationBoxSixteen, timeGroupOne, {
            x: 300, y: 100, width: 75, height: 75, backgroundColor: 'rgba(82, 67, 142, .9)', borderRadius: 37.5
        })
        this.tweenSeventeen = TweenLite.to(this.animationBoxSeventeen, timeGroupOne, {
            x: 900, y: 50, width: 35, height: 35, backgroundColor: 'rgba(219, 21, 51, .3)', borderRadius: 17.5
        })
        this.tweenEighteen = TweenLite.to(this.animationBoxEighteen, timeGroupOne, {
            x: 1100, y: 30, width: 40, height: 40, backgroundColor: 'rgba(77, 160, 14, .5)', borderRadius: 20
        })
        this.tweenNineteen = TweenLite.to(this.animationBoxNineteen, timeGroupOne, {
            x: 50, y: 450, width: 50, height: 50, backgroundColor: 'rgba(237, 146, 9, .7)', borderRadius: 25
        })
        this.tweenTwenty = TweenLite.to(this.animationBoxTwenty, timeGroupOne, {
            x: 650, y: 480, width: 50, height: 50, backgroundColor: 'rgba(17, 55, 178, 1)', borderRadius: 25
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
                        <div ref={div => this.animationBoxEleven = div} />
                        <div ref={div => this.animationBoxTwelve = div} />
                        <div ref={div => this.animationBoxThirteen = div} />
                        <div ref={div => this.animationBoxFourteen = div} />
                        <div ref={div => this.animationBoxFifteen = div} />
                        <div ref={div => this.animationBoxSixteen = div} />
                        <div ref={div => this.animationBoxSeventeen = div} />
                        <div ref={div => this.animationBoxEighteen = div} />
                        <div ref={div => this.animationBoxNineteen = div} />
                        <div ref={div => this.animationBoxTwenty = div} />
                    <div className="animation_container">
                        
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