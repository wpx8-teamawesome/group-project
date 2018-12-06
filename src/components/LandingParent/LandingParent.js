import React, { Component } from 'react';
import './LandingParent.css'; 

import HorizontalScroll from 'react-scroll-horizontal'; 
import { TweenLite, TimelineLite } from "gsap/all";
import ReactCardFlip from 'react-card-flip';
import Typing from 'react-typing-animation';

import testImageOne from './TestImages/codeBlue.jpg';
import testImageTwo from './TestImages/codeTwo.jpg'; 
import testImageThree from './TestImages/quasarOrSomething.jpg'; 
import testImageFour from './TestImages/travel.jpeg';  
import testProfile from './TestImages/profile_pic.jpg'; 
import plainSearch from '..//..//images/plainSearch.png'; 

class LandingParent extends Component {
    constructor() {
        super() 
        this.state = {
            searchText: '',
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

        this.refreshTweens()
    }

    componentDidMount() {
        this.initTweenAnimations()
        this.addListener()
    }

    refreshTweens = () => {
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

    // boxShadow: '1px 1px 1px 1px rgb(127, 189, 214)' //can also add this
    // # id identifies one element, class . can identify however many
    initTweenAnimations = () => {
        //Should have multiple? 
        const timeGroupOne = 10 
        this.tweenOne = TweenLite.fromTo(this.animationBoxOne, timeGroupOne, {
            x: 900, y: 0, width: 60, height: 60, backgroundColor: 'rgba(36, 88, 173, .5)', borderRadius: 30
        }, {
            x: 500, y: 100, width: 100, height: 100, backgroundColor: 'rgba(36, 88, 173, .7)', borderRadius: 50
        })
        this.tweenTwo = TweenLite.fromTo(this.animationBoxTwo, timeGroupOne, {
            x: 800, y: 50, width: 40, height: 40, backgroundColor: 'rgba(125, 214, 98, .5)', borderRadius: 20
        }, {
            x: 300, y: 150, width: 80, height: 80, backgroundColor: 'rgba(125, 214, 98, .6)', borderRadius: 40
        })
        this.tweenThree = TweenLite.fromTo(this.animationBoxThree, timeGroupOne, {
            x: 1100, y: 0, width: 10, height: 10, backgroundColor: 'rgba(219, 94, 204, .45)', borderRadius: 5
        }, {
            x: 150, y: 150, width: 60, height: 60, backgroundColor: 'rgba(219, 94, 204, .85)', borderRadius: 30
        })
        this.tweenFour = TweenLite.fromTo(this.animationBoxFour, timeGroupOne, {
            x: 1000, y: 40, width: 25, height: 25, backgroundColor: 'rgba(63, 219, 208, .4)', borderRadius: 12.5
        }, {
            x: 450, y: 80, width: 55, height: 55, backgroundColor: 'rgba(63, 219, 208, .7)', borderRadius: 27.5
        })
        this.tweenFive = TweenLite.fromTo(this.animationBoxFive, timeGroupOne, {
            x: 1050, y: 10, width: 20, height: 20, backgroundColor: 'rgba(82, 67, 242, .65)', borderRadius: 10
        }, {
            x: 550, y: 180, width: 45, height: 45, backgroundColor: 'rgba(82, 67, 242, .75)', borderRadius: 22.5
        })
        this.tweenSix = TweenLite.fromTo(this.animationBoxSix, timeGroupOne, {
            x: 1250, y: 100, width: 30, height: 30, backgroundColor: 'rgba(7, 62, 239, .6)', borderRadius: 15
        }, {
            x: 250, y: 130, width: 60, height: 60, backgroundColor: 'rgba(7, 62, 239, .9)', borderRadius: 30
        })
        this.tweenSeven = TweenLite.fromTo(this.animationBoxSeven, timeGroupOne, {
            x: 950, y: 75, width: 5, height: 5, backgroundColor: 'rgba(219, 21, 51, .3)', borderRadius: 2.5
        }, {
            x: 550, y: 90, width: 35, height: 35, backgroundColor: 'rgba(219, 21, 51, .65)', borderRadius: 17.5
        })
        this.tweenEight = TweenLite.fromTo(this.animationBoxEight, timeGroupOne, {
            x: 1100, y: 30, width: 40, height: 40, backgroundColor: 'rgba(77, 160, 14, .5)', borderRadius: 20
        }, {
            x: 700, y: 60, width: 80, height: 80, backgroundColor: 'rgba(77, 160, 14, .8)', borderRadius: 40
        })
        this.tweenNine = TweenLite.fromTo(this.animationBoxNine, timeGroupOne, {
            x: 1080, y: 90, width: 20, height: 20, backgroundColor: 'rgba(237, 146, 9, .7)', borderRadius: 10
        }, {
            x: 50, y: 180, width: 100, height: 100, backgroundColor: 'rgba(237, 146, 9, .8)', borderRadius: 50
        })
        this.tweenTen = TweenLite.fromTo(this.animationBoxTen, timeGroupOne, {
            x: 980, y: 150, width: 10, height: 10, backgroundColor: 'rgba(17, 55, 178, .6)', borderRadius: 5
        }, {
            x: 200, y: 200, width: 50, height: 50, backgroundColor: 'rgba(17, 55, 178, 1)', borderRadius: 25
        })

        //Next ten
        this.tweenEleven = TweenLite.fromTo(this.animationBoxEleven, timeGroupOne, {
            x: 50, y: 125, width: 20, height: 20, backgroundColor: 'rgba(36, 88, 173, .4)', borderRadius: 10
        }, {
            x: 700, y: 280, width: 60, height: 60, backgroundColor: 'rgba(36, 88, 173, .7)', borderRadius: 30
        })
        this.tweenTwelve = TweenLite.fromTo(this.animationBoxTwelve, timeGroupOne, {
            x: 10, y: 50, width: 40, height: 40, backgroundColor: 'rgba(125, 214, 98, .5)', borderRadius: 20
        }, {
            x: 800, y: 100, width: 80, height: 80, backgroundColor: 'rgba(125, 214, 98, .8)', borderRadius: 40
        })
        this.tweenThirteen = TweenLite.fromTo(this.animationBoxThirteen, timeGroupOne, {
            x: 0, y: 0, width: 0, height: 0, backgroundColor: 'rgba(219, 94, 204, .85)', borderRadius: 0
        }, {
            x: 770, y: 140, width: 50, height: 50, backgroundColor: 'rgba(219, 94, 204, .95)', borderRadius: 25
        })
        this.tweenFourteen = TweenLite.fromTo(this.animationBoxFourteen, timeGroupOne, {
            x: 100, y: 0, width: 55, height: 55, backgroundColor: 'rgba(63, 219, 208, .7)', borderRadius: 27.5 
        }, {
            x: 850, y: 350, width: 75, height: 75, backgroundColor: 'rgba(63, 219, 208, .9)', borderRadius: 37.5 
        })
        this.tweenFifteen = TweenLite.fromTo(this.animationBoxFifteen, timeGroupOne, {
            x: 30, y: 470, width: 45, height: 45, backgroundColor: 'rgba(82, 67, 242, .65)', borderRadius: 22.5
        }, {
            x: 980, y: 10, width: 90, height: 90, backgroundColor: 'rgba(82, 67, 242, .8)', borderRadius: 45
        })
        this.tweenSixteen = TweenLite.fromTo(this.animationBoxSixteen, timeGroupOne, {
            x: 0, y: 100, width: 10, height: 10, backgroundColor: 'rgba(82, 67, 142, .9)', borderRadius: 5
        }, {
            x: 1000, y: 50, width: 75, height: 75, backgroundColor: 'rgba(82, 67, 142, .9)', borderRadius: 37.5
        })
        this.tweenSeventeen = TweenLite.fromTo(this.animationBoxSeventeen, timeGroupOne, {
            x: 10, y: 150, width: 35, height: 35, backgroundColor: 'rgba(219, 21, 51, .3)', borderRadius: 17.5
        }, {
            x: 900, y: 50, width: 70, height: 70, backgroundColor: 'rgba(219, 21, 51, .8)', borderRadius: 35
        })
        this.tweenEighteen = TweenLite.fromTo(this.animationBoxEighteen, timeGroupOne, {
            x: 0, y: 400, width: 40, height: 40, backgroundColor: 'rgba(77, 160, 14, .5)', borderRadius: 20
        }, {
            x: 1100, y: 30, width: 80, height: 80, backgroundColor: 'rgba(77, 160, 14, .8)', borderRadius: 40
        })
        this.tweenNineteen = TweenLite.fromTo(this.animationBoxNineteen, timeGroupOne, {
            x: 50, y: 300, width: 50, height: 50, backgroundColor: 'rgba(237, 146, 9, .7)', borderRadius: 25
        }, {
            x: 1050, y: 450, width: 90, height: 90, backgroundColor: 'rgba(237, 146, 9, .9)', borderRadius: 45
        })
        this.tweenTwenty = TweenLite.fromTo(this.animationBoxTwenty, timeGroupOne, {
            x: 200, y: 480, width: 50, height: 50, backgroundColor: 'rgba(17, 55, 178, 1)', borderRadius: 25
        }, {
            x: 800, y: 100, width: 50, height: 50, backgroundColor: 'rgba(17, 55, 178, 1)', borderRadius: 25
        })
    }

    handleEventOnClick = (id) => {
        console.log('event id', id)
    }

    //Scroll listeners

    //Listen for scrolling
    addListener() {
      window.addEventListener('scroll', this.handleScroll)
    }

    removeListener() {
      window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        console.log('window y', window.scrollY, window.innerHeight)
    }

    //End lifecycle
    componentWillUnmount() {
        this.removeListener()
    }

    handleSearchTapped = () => {

    }

    monitorTextChange = (val) => {
        this.setState({ searchText: val })
    }

    render() {
        //Child can be own component   
        const { scrollItems } = this.state;
        const children = scrollItems.map((item, index) => {
            return <div className="scroll_child" onTouchStart="this.classList.toggle('hover');">
                <div className="flip_container">
                    <div className="front">
                    
                    </div>
                    <div className="back">
                    
                    </div>
                </div>
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
                        <Typing className="type_header_top"> Find Fellow Nerds! </Typing>
                        <div>
                            <input onChange={(e) => this.monitorTextChange(e.target.value)}></input>
                            <img src={plainSearch} onClick={this.handleSearchTapped} />
                        </div>
                    </div>
                </div>
                <div className="Main_two">
                    <Typing className="type_header"> Nearby Events </Typing>
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





{/* <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
	<div class="flipper">
		<div class="front">
			<!-- front content -->
		</div>
		<div class="back">
			<!-- back content -->
		</div>
	</div>
</div> */}