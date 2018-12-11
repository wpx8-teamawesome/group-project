import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './LandingParent.scss'; 

//not using, can delete? 
import HorizontalScroll from 'react-scroll-horizontal'; 
import ReactCardFlip from 'react-card-flip';
import ScrollSnap from 'scroll-snap'; 

import { TweenLite, TimelineLite } from "gsap/all";
import Typing from 'react-typing-animation';
import testImageOne from './TestImages/codeBlue.jpg';
import testImageTwo from './TestImages/codeTwo.jpg'; 
import testImageThree from './TestImages/quasarOrSomething.jpg'; 
import testImageFour from './TestImages/travel.jpeg';  
import testProfile from './TestImages/profile_pic.jpg'; 
import plainSearch from '..//..//images/plainSearch.png'; 


import Slider from 'react-slick'; 

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
                eventCreatorName: "Ethan", 
                attendeeCount: 12, 
                descriptionText: "Javascript is the best! (JK everyone hates Javascript)"
            }, {
                id: 2,
                eventDate: "Dec 7", 
                eventMainImageURL: testImageTwo, 
                eventCreatorImageURL: testProfile, 
                eventTitle: "Java", 
                eventFullDateString: "",
                eventCreatorName: "Ethan",
                attendeeCount: 34, 
                descriptionText: "Java is NOT Javascript"
            }, {
                id: 3,
                eventDate: "Dec 8", 
                eventMainImageURL: testImageThree, 
                eventCreatorImageURL: testProfile, 
                eventTitle: "Objective-C", 
                eventFullDateString: "",
                eventCreatorName: "Ethan",
                attendeeCount: 17, 
                descriptionText: "All about the infamous Objective-C"
            }, {
                id: 4,
                eventDate: "Dec 9", 
                eventMainImageURL: testImageFour, 
                eventCreatorImageURL: testProfile, 
                eventTitle: "React Native", 
                eventFullDateString: "",
                eventCreatorName: "Ethan",
                attendeeCount: 26, 
                descriptionText: "React but for Phones yo!"
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
        this.animationBoxTwentyOne = null; 
        this.animationBoxTwentyTwo = null; 
        this.animationBoxTwentyThree = null; 
        this.animationBoxTwentyFour = null; 
        this.animationBoxTwentyFive = null; 
        this.animationBoxTwentySix = null; 
        this.animationBoxTwentySeven = null; 
        this.animationBoxTwentyEight = null; 
        this.animationBoxTwentyNine = null; 
        this.animationBoxThirty = null; 

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
        this.tweenTwentyOne = null; 
        this.tweenTwentyTwo = null;
        this.tweenTwentyThree = null; 
        this.tweenTwentyFour = null; 
        this.tweenTwentyFive = null; 
        this.tweenTwentySix = null;
        this.tweenTwentySeven = null; 
        this.tweenTwentyEight = null; 
        this.tweenTwentyNine = null;
        this.tweenThirty = null;
    }

    //https://stackoverflow.com/questions/5836833/create-a-array-with-random-values-in-javascript

    //Can make higher order component to clean up this file? 

    shuffle = (array) => {
        var tmp, current, top = array.length;
        if(top) while(--top) {
          current = Math.floor(Math.random() * (top + 1));
          tmp = array[current];
          array[current] = array[top];
          array[top] = tmp;
        }
        return array;
      }

    // boxShadow: '1px 1px 1px 1px rgb(127, 189, 214)' //can also add this
    // # id identifies one element, class . can identify however many
    initTweenAnimations = () => {
        //Should have multiple? 
        const timeGroupOne = 5

        const width = window.innerWidth
        const height = window.innerHeight

        //Will have width/height classes
        const widthStartOne = 10
        const widthStartTwo = 20
        const widthStartThree = 30
        const widthStartFour = 60

        const widthEndOne = 40
        const widthEndTwo = 60
        const widthEndThree = 80
        const widthEndFour = 100

        //Will also generate random points
        const startForAX = width / 4 //lower boungs for random gen.
        const endForAX = startForAX + 30 //upper bounds for random gen. 

        for (var a = [], i = startForAX ; i < endForAX ; ++ i) a[i] = i;
        a = this.shuffle(a);
        console.log('--- random numbers ---', a)

        //Can't do percentages so we'll get center this way
        const centerX = width / 2
        const centerY = (height / 2) - 100 //100 is navbar height

        console.log('center', centerX, centerY)
        this.tweenOne = TweenLite.fromTo(this.animationBoxOne, timeGroupOne, {
            x: centerX, y: centerY, width: widthStartFour, height: widthStartFour, backgroundColor: 'rgba(36, 88, 173, .5)', borderRadius: 30
        }, {
            x: 500, y: 100, width: widthEndFour, height: widthEndFour, backgroundColor: 'rgba(36, 88, 173, .7)', borderRadius: 50
        })
        this.tweenTwo = TweenLite.fromTo(this.animationBoxTwo, timeGroupOne, {
            x: centerX, y: centerY, width: 40, height: 40, backgroundColor: 'rgba(125, 214, 98, .5)', borderRadius: 20
        }, {
            x: 300, y: 150, width: 80, height: 80, backgroundColor: 'rgba(125, 214, 98, .6)', borderRadius: 40
        })
        this.tweenThree = TweenLite.fromTo(this.animationBoxThree, timeGroupOne, {
            x: centerX, y: centerY, width: 10, height: 10, backgroundColor: 'rgba(219, 94, 204, .45)', borderRadius: 5
        }, {
            x: 150, y: 150, width: 60, height: 60, backgroundColor: 'rgba(219, 94, 204, .85)', borderRadius: 30
        })
        this.tweenFour = TweenLite.fromTo(this.animationBoxFour, timeGroupOne, {
            x: centerX, y: centerY, width: 25, height: 25, backgroundColor: 'rgba(63, 219, 208, .4)', borderRadius: 12.5
        }, {
            x: 450, y: 80, width: 55, height: 55, backgroundColor: 'rgba(63, 219, 208, .7)', borderRadius: 27.5
        })
        this.tweenFive = TweenLite.fromTo(this.animationBoxFive, timeGroupOne, {
            x: centerX, y: centerY, width: 20, height: 20, backgroundColor: 'rgba(82, 67, 242, .65)', borderRadius: 10
        }, {
            x: 550, y: 180, width: 45, height: 45, backgroundColor: 'rgba(82, 67, 242, .75)', borderRadius: 22.5
        })
        this.tweenSix = TweenLite.fromTo(this.animationBoxSix, timeGroupOne, {
            x: centerX, y: centerY, width: 30, height: 30, backgroundColor: 'rgba(7, 62, 239, .6)', borderRadius: 15
        }, {
            x: 250, y: 130, width: 60, height: 60, backgroundColor: 'rgba(7, 62, 239, .9)', borderRadius: 30
        })
        this.tweenSeven = TweenLite.fromTo(this.animationBoxSeven, timeGroupOne, {
            x: centerX, y: centerY, width: 5, height: 5, backgroundColor: 'rgba(219, 21, 51, .3)', borderRadius: 2.5
        }, {
            x: 550, y: 90, width: 35, height: 35, backgroundColor: 'rgba(219, 21, 51, .65)', borderRadius: 17.5
        })
        this.tweenEight = TweenLite.fromTo(this.animationBoxEight, timeGroupOne, {
            x: centerX, y: centerY, width: 40, height: 40, backgroundColor: 'rgba(77, 160, 14, .5)', borderRadius: 20
        }, {
            x: 700, y: 60, width: 80, height: 80, backgroundColor: 'rgba(77, 160, 14, .8)', borderRadius: 40
        })
        this.tweenNine = TweenLite.fromTo(this.animationBoxNine, timeGroupOne, {
            x: centerX, y: centerY, width: 20, height: 20, backgroundColor: 'rgba(237, 146, 9, .7)', borderRadius: 10
        }, {
            x: 50, y: 180, width: 100, height: 100, backgroundColor: 'rgba(237, 146, 9, .8)', borderRadius: 50
        })
        this.tweenTen = TweenLite.fromTo(this.animationBoxTen, timeGroupOne, {
            x: centerX, y: centerY, width: 10, height: 10, backgroundColor: 'rgba(17, 55, 178, .6)', borderRadius: 5
        }, {
            x: 200, y: 200, width: 50, height: 50, backgroundColor: 'rgba(17, 55, 178, 1)', borderRadius: 25
        })

        //Next ten
        this.tweenEleven = TweenLite.fromTo(this.animationBoxEleven, timeGroupOne, {
            x: centerX, y: centerY, width: 20, height: 20, backgroundColor: 'rgba(36, 88, 173, .4)', borderRadius: 10
        }, {
            x: 700, y: 280, width: 60, height: 60, backgroundColor: 'rgba(36, 88, 173, .7)', borderRadius: 30
        })
        this.tweenTwelve = TweenLite.fromTo(this.animationBoxTwelve, timeGroupOne, {
            x: centerX, y: centerY, width: 40, height: 40, backgroundColor: 'rgba(125, 214, 98, .5)', borderRadius: 20
        }, {
            x: 800, y: 100, width: 80, height: 80, backgroundColor: 'rgba(125, 214, 98, .8)', borderRadius: 40
        })
        this.tweenThirteen = TweenLite.fromTo(this.animationBoxThirteen, timeGroupOne, {
            x: centerX, y: centerY, width: 0, height: 0, backgroundColor: 'rgba(219, 94, 204, .85)', borderRadius: 0
        }, {
            x: 770, y: 140, width: 50, height: 50, backgroundColor: 'rgba(219, 94, 204, .95)', borderRadius: 25
        })
        this.tweenFourteen = TweenLite.fromTo(this.animationBoxFourteen, timeGroupOne, {
            x: centerX, y: centerY, width: 55, height: 55, backgroundColor: 'rgba(63, 219, 208, .7)', borderRadius: 27.5 
        }, {
            x: 850, y: 350, width: 75, height: 75, backgroundColor: 'rgba(63, 219, 208, .9)', borderRadius: 37.5 
        })
        this.tweenFifteen = TweenLite.fromTo(this.animationBoxFifteen, timeGroupOne, {
            x: centerX, y: centerY, width: 45, height: 45, backgroundColor: 'rgba(82, 67, 242, .65)', borderRadius: 22.5
        }, {
            x: 980, y: 10, width: 90, height: 90, backgroundColor: 'rgba(82, 67, 242, .8)', borderRadius: 45
        })
        this.tweenSixteen = TweenLite.fromTo(this.animationBoxSixteen, timeGroupOne, {
            x: centerX, y: centerY, width: 10, height: 10, backgroundColor: 'rgba(82, 67, 142, .9)', borderRadius: 5
        }, {
            x: 1000, y: 50, width: 75, height: 75, backgroundColor: 'rgba(82, 67, 142, .9)', borderRadius: 37.5
        })
        this.tweenSeventeen = TweenLite.fromTo(this.animationBoxSeventeen, timeGroupOne, {
            x: centerX, y: centerY, width: 35, height: 35, backgroundColor: 'rgba(219, 21, 51, .3)', borderRadius: 17.5
        }, {
            x: 900, y: 50, width: 70, height: 70, backgroundColor: 'rgba(219, 21, 51, .8)', borderRadius: 35
        })
        this.tweenEighteen = TweenLite.fromTo(this.animationBoxEighteen, timeGroupOne, {
            x: centerX, y: centerY, width: 40, height: 40, backgroundColor: 'rgba(77, 160, 14, .5)', borderRadius: 20
        }, {
            x: 1100, y: 30, width: 80, height: 80, backgroundColor: 'rgba(77, 160, 14, .8)', borderRadius: 40
        })
        this.tweenNineteen = TweenLite.fromTo(this.animationBoxNineteen, timeGroupOne, {
            x: centerX, y: centerY, width: 50, height: 50, backgroundColor: 'rgba(237, 146, 9, .7)', borderRadius: 25
        }, {
            x: 1050, y: 450, width: 90, height: 90, backgroundColor: 'rgba(237, 146, 9, .9)', borderRadius: 45
        })
        this.tweenTwenty = TweenLite.fromTo(this.animationBoxTwenty, timeGroupOne, {
            x: centerX, y: centerY, width: 50, height: 50, backgroundColor: 'rgba(17, 55, 178, 1)', borderRadius: 25
        }, {
            x: 800, y: 100, width: 50, height: 50, backgroundColor: 'rgba(17, 55, 178, 1)', borderRadius: 25
        })

        //Next ten
        this.tweenTwentyOne = TweenLite.fromTo(this.animationBoxTwentyOne, timeGroupOne, {
            x: centerX, y: centerY, width: 20, height: 20, backgroundColor: 'rgba(17, 55, 178, .5)', borderRadius: 10
        }, {
            x: 600, y: 50, width: 50, height: 50, backgroundColor: 'rgba(17, 55, 178, .8)', borderRadius: 25
        })
        this.tweenTwentyTwo = TweenLite.fromTo(this.animationBoxTwentyTwo, timeGroupOne, {
            x: centerX, y: centerY, width: 50, height: 50, backgroundColor: 'rgba(17, 55, 178, .4)', borderRadius: 25
        }, {
            x: 200, y: 10, width: 70, height: 70, backgroundColor: 'rgba(17, 55, 178, .8)', borderRadius: 35
        })
        this.tweenTwentyThree = TweenLite.fromTo(this.animationBoxTwentyThree, timeGroupOne, {
            x: centerX, y: centerY, width: 50, height: 50, backgroundColor: 'rgba(17, 55, 178, .5)', borderRadius: 25
        }, {
            x: 100, y: 5, width: 80, height: 80, backgroundColor: 'rgba(17, 55, 178, 1)', borderRadius: 40
        })
        this.tweenTwentyFour = TweenLite.fromTo(this.animationBoxTwentyFour, timeGroupOne, {
            x: centerX, y: centerY, width: 50, height: 50, backgroundColor: 'rgba(17, 55, 178, .7)', borderRadius: 25
        }, {
            x: 80, y: 150, width: 80, height: 80, backgroundColor: 'rgba(17, 55, 178, .8)', borderRadius: 40
        })
        this.tweenTwentyFive = TweenLite.fromTo(this.animationBoxTwentyFive, timeGroupOne, {
            x: centerX, y: centerY, width: 30, height: 30, backgroundColor: 'rgba(17, 55, 178, .6)', borderRadius: 15
        }, {
            x: 230, y: 10, width: 40, height: 40, backgroundColor: 'rgba(17, 55, 178, .9)', borderRadius: 20
        })
        this.tweenTwentySix = TweenLite.fromTo(this.animationBoxTwentySix, timeGroupOne, {
            x: centerX, y: centerY, width: 50, height: 50, backgroundColor: 'rgba(32, 63, 173, .6)', borderRadius: 25
        }, {
            x: 340, y: 460, width: 80, height: 80, backgroundColor: 'rgba(32, 63, 173, .9)', borderRadius: 40
        })
        this.tweenTwentySeven = TweenLite.fromTo(this.animationBoxTwentySeven, timeGroupOne, {
            x: centerX, y: centerY, width: 30, height: 30, backgroundColor: 'rgba(160, 11, 224, .4)', borderRadius: 15
        }, {
            x: 5, y: 420, width: 85, height: 85, backgroundColor: 'rgba(160, 11, 224, .9)', borderRadius: 42.5
        })
        this.tweenTwentyEight = TweenLite.fromTo(this.animationBoxTwentyEight, timeGroupOne, {
            x: centerX, y: centerY, width: 50, height: 50, backgroundColor: 'rgba(36, 77, 191, .7)', borderRadius: 25
        }, {
            x: 90, y: 405, width: 80, height: 80, backgroundColor: 'rgba(36, 77, 191, .8)', borderRadius: 40
        })
        this.tweenTwentyNine = TweenLite.fromTo(this.animationBoxTwentyNine, timeGroupOne, {
            x: centerX, y: centerY, width: 50, height: 50, backgroundColor: 'rgba(84, 206, 161, .5)', borderRadius: 25
        }, {
            x: 450, y: 410, width: 90, height: 90, backgroundColor: 'rgba(84, 206, 161, .8)', borderRadius: 45
        })
        this.tweenTwentyThirty = TweenLite.fromTo(this.animationBoxThirty, timeGroupOne, {
            x: centerX, y: centerY, width: 50, height: 50, backgroundColor: 'rgba(226, 13, 74, .4)', borderRadius: 25
        }, {
            x: 630, y: 435, width: 100, height: 100, backgroundColor: 'rgba(226, 13, 74, 1)', borderRadius: 50
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

    checkOutEvent = (id) => {

    }

    //For snap test
    callback () {
        console.log('called when snap animation ends')
    }

    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        }

        // --- Child can be own component ---
        const { scrollItems } = this.state;
        const children = scrollItems.map((item, index) => {
            return <div className="scroll_child" onTouchStart="this.classList.toggle('hover');">
                <div className="flip_container">
                    <div className="front">
                        <div className="top_scroll_container">
                            <p>{item.eventDate}</p>
                        <img className="main_image" 
                        onClick={() => this.handleEventOnClick(item.id)} 
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
                    <div className="back">
                        <p> {`Atendees ${item.attendeeCount}`} </p>
                        <p> {item.descriptionText} </p>
                        <button onClick={() => this.checkOutEvent(item.id)}> Go To Page </button>
                    </div>
                </div>
            </div>
        })

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
                        <div ref={div => this.animationBoxTwentyOne = div} />
                        <div ref={div => this.animationBoxTwentyTwo = div} />
                        <div ref={div => this.animationBoxTwentyThree = div} />
                        <div ref={div => this.animationBoxTwentyFour = div} />
                        <div ref={div => this.animationBoxTwentyFive = div} />
                        <div ref={div => this.animationBoxTwentySix = div} />
                        <div ref={div => this.animationBoxTwentySeven = div} />
                        <div ref={div => this.animationBoxTwentyEight = div} />
                        <div ref={div => this.animationBoxTwentyNine = div} />
                        <div ref={div => this.animationBoxThirty = div} />
                    <div className="animation_container">
                        <Typing className="type_header_top"> Find Fellow Nerds! </Typing>
                        <div>
                            <input onChange={(e) => this.monitorTextChange(e.target.value)} placeholder="Search Events"></input>
                            <Link to="/event-search"><img src={plainSearch} onClick={this.handleSearchTapped} /></Link>
                        </div>
                    </div>
                </div>
                <div className="Main_two">
                    <Typing className="type_header"> Nearby Events </Typing>
                    <div className="animation_container_two">
                        <Slider className="slick_slider" {...settings}>
                            { children }
                        </Slider>
                    </div>
                </div>
                <div className="Main_three">
                    <div className="animation_container_three">
                        {/* <HorizontalScroll className="scroll_view" >
                            { children }
                        </HorizontalScroll> */}
                    </div>
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