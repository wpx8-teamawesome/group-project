import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './LandingParent.scss'; 
import axios from 'axios'; 

import { TweenLite } from "gsap/all";
import Typing from 'react-typing-animation';
import plainSearch from '..//..//images/plainSearch.png'; 

import Slider from 'react-slick'; 
import moment from 'moment'; 

class LandingParent extends Component {
    constructor() {
        super() 
        this.state = {
            upcomingEvents: [],
            nearbyEvents: [], 
            searchText: '',
            cityText: 'Phoenix'
        }

        this.refreshTweens()
    }

    componentDidMount() {
        this.initTweenAnimations()
        this.addListener()
        this.fetchClosestEvents()
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
        const timeGroupOne = 2
        const timeGroupTwo = 3
        const timeGroupThree = 4
        
        const width = window.innerWidth
        const height = window.innerHeight

        //We could generate random but for now we want them to go to corners of the screen and look evenly distributed
        const xEndPointArray = [width/2.2, width/3.1, width/6.2, width/2.8, width/2.1, width/4, width/1.5, width/21, width/5.1, width/1.9, width/1.4, width/1.45, width/1.3, width/1.1, width/1.25, width/1.115, width-130, width/1.23, width/1.65, width/2, width/5.8, width/12, width/15.3, width/1.4, width/3.1, width/100, width/11, width/3, width/1.95]
        const yEndPointArray = [100, 150, 150, 80, 180, 130, 90, 60, 180, 200, 280, 100, 140, 350, 10, 50, 50, 30, 450, 100, 50, 10, 5, 150, 10, 460, 420, 405, 410, 435] //we're not updating width now but when we are

        //Will have width/height classes
        const widthStartOne = width / 100
        const widthStartTwo = width / 50
        const widthStartThree = width / 30
        const widthStartFour = width / 20

        const widthEndOne = width / 25
        const widthEndTwo = width / 20
        const widthEndThree = width / 15
        const widthEndFour = width / 10

        const radiusStartOne = widthStartOne / 2
        const radiusStartTwo = widthStartTwo / 2
        const radiusStartThree = widthStartThree / 2
        const radiusStartFour = widthStartFour / 2

        const radiusEndOne = widthEndOne / 2
        const radiusEndTwo = widthEndTwo / 2
        const radiusEndThree = widthEndThree / 2
        const radiusEndFour = widthEndFour / 2

        //Will also generate random points
        const startForAX = width / 4 //lower bounds for random gen.
        const endForAX = startForAX + 30 //upper bounds for random gen. 

        for (var a = [], i = startForAX ; i < endForAX ; ++ i) a[i] = i;
        a = this.shuffle(a);
        console.log('--- random numbers ---', a)

        //Can't do percentages so we'll get center this way
        const centerX = width / 2
        const centerY = (height / 2) - 100 //100 is navbar height

        // console.log('center', centerX, centerY)
        this.tweenOne = TweenLite.fromTo(this.animationBoxOne, timeGroupOne, {
            x: centerX, y: centerY, width: widthStartFour, height: widthStartFour, backgroundColor: 'rgba(36, 88, 173, .5)', borderRadius: radiusStartFour
        }, {
            x: xEndPointArray[0], y: 100, width: widthEndFour, height: widthEndFour, backgroundColor: 'rgba(36, 88, 173, .7)', borderRadius: radiusEndFour
        })
        this.tweenTwo = TweenLite.fromTo(this.animationBoxTwo, timeGroupTwo, {
            x: centerX, y: centerY, width: widthStartThree, height: widthStartThree, backgroundColor: 'rgba(125, 214, 98, .5)', borderRadius: radiusStartThree
        }, {
            x: xEndPointArray[1], y: 150, width: widthEndThree, height: widthEndThree, backgroundColor: 'rgba(125, 214, 98, .6)', borderRadius: radiusEndThree
        })
        this.tweenThree = TweenLite.fromTo(this.animationBoxThree, timeGroupThree, {
            x: centerX, y: centerY, width: widthStartOne, height: widthStartOne, backgroundColor: 'rgba(219, 94, 204, .45)', borderRadius: radiusStartOne
        }, {
            x: xEndPointArray[2], y: 150, width: widthEndThree, height: widthEndThree, backgroundColor: 'rgba(219, 94, 204, .85)', borderRadius: radiusEndThree
        })
        this.tweenFour = TweenLite.fromTo(this.animationBoxFour, timeGroupOne, {
            x: centerX, y: centerY, width: widthStartTwo, height: widthStartTwo, backgroundColor: 'rgba(63, 219, 208, .4)', borderRadius: radiusStartTwo
        }, {
            x: xEndPointArray[3], y: 80, width: widthEndThree, height: widthEndThree, backgroundColor: 'rgba(63, 219, 208, .7)', borderRadius: radiusEndThree
        })
        this.tweenFive = TweenLite.fromTo(this.animationBoxFive, timeGroupTwo, {
            x: centerX, y: centerY, width: widthStartTwo, height: widthStartTwo, backgroundColor: 'rgba(82, 67, 242, .65)', borderRadius: radiusStartTwo
        }, {
            x: xEndPointArray[4], y: 180, width: widthStartThree, height: widthStartThree, backgroundColor: 'rgba(82, 67, 242, .75)', borderRadius: radiusEndThree
        })
        this.tweenSix = TweenLite.fromTo(this.animationBoxSix, timeGroupThree, {
            x: centerX, y: centerY, width: widthStartTwo, height: widthStartTwo, backgroundColor: 'rgba(7, 62, 239, .6)', borderRadius: radiusStartTwo
        }, {
            x: xEndPointArray[5], y: 130, width: widthEndFour, height: widthEndFour, backgroundColor: 'rgba(7, 62, 239, .9)', borderRadius: radiusEndFour
        })
        this.tweenSeven = TweenLite.fromTo(this.animationBoxSeven, timeGroupOne, {
            x: centerX, y: centerY, width: widthStartOne, height: widthStartOne, backgroundColor: 'rgba(219, 21, 51, .3)', borderRadius: radiusStartOne
        }, {
            x: xEndPointArray[6], y: 90, width: widthEndThree, height: widthEndThree, backgroundColor: 'rgba(219, 21, 51, .65)', borderRadius: radiusEndThree
        })
        this.tweenEight = TweenLite.fromTo(this.animationBoxEight, timeGroupTwo, {
            x: centerX, y: centerY, width: widthStartTwo, height: widthStartTwo, backgroundColor: 'rgba(77, 160, 14, .5)', borderRadius: radiusStartTwo
        }, {
            x: xEndPointArray[7], y: 60, width: widthEndThree, height: widthEndThree, backgroundColor: 'rgba(77, 160, 14, .8)', borderRadius: radiusEndThree
        })
        this.tweenNine = TweenLite.fromTo(this.animationBoxNine, timeGroupThree, {
            x: centerX, y: centerY, width: widthStartTwo, height: widthStartTwo, backgroundColor: 'rgba(237, 146, 9, .7)', borderRadius: radiusStartTwo
        }, {
            x: xEndPointArray[8], y: 180, width: widthEndFour, height: widthEndFour, backgroundColor: 'rgba(237, 146, 9, .8)', borderRadius: radiusEndFour
        })
        this.tweenTen = TweenLite.fromTo(this.animationBoxTen, timeGroupOne, {
            x: centerX, y: centerY, width: widthStartOne, height: widthStartOne, backgroundColor: 'rgba(17, 55, 178, .6)', borderRadius: radiusStartOne
        }, {
            x: xEndPointArray[9], y: 200, width: widthEndThree, height: widthEndThree, backgroundColor: 'rgba(17, 55, 178, 1)', borderRadius: radiusEndThree
        })

        //Next ten
        this.tweenEleven = TweenLite.fromTo(this.animationBoxEleven, timeGroupOne, {
            x: centerX, y: centerY, width: widthStartOne, height: widthStartOne, backgroundColor: 'rgba(36, 88, 173, .4)', borderRadius: radiusStartOne
        }, {
            x: xEndPointArray[10], y: 280, width: widthEndThree, height: widthEndThree, backgroundColor: 'rgba(36, 88, 173, .7)', borderRadius: radiusEndThree
        })
        this.tweenTwelve = TweenLite.fromTo(this.animationBoxTwelve, timeGroupTwo, {
            x: centerX, y: centerY, width: widthStartFour, height: widthStartFour, backgroundColor: 'rgba(125, 214, 98, .5)', borderRadius: radiusStartFour
        }, {
            x: xEndPointArray[11], y: 100, width: widthEndFour, height: widthEndFour, backgroundColor: 'rgba(125, 214, 98, .8)', borderRadius: radiusEndFour
        })
        this.tweenThirteen = TweenLite.fromTo(this.animationBoxThirteen, timeGroupThree, {
            x: centerX, y: centerY, width: 0, height: 0, backgroundColor: 'rgba(219, 94, 204, .85)', borderRadius: 0
        }, {
            x: xEndPointArray[12], y: 140, width: 50, height: 50, backgroundColor: 'rgba(219, 94, 204, .95)', borderRadius: 25
        })
        this.tweenFourteen = TweenLite.fromTo(this.animationBoxFourteen, timeGroupOne, {
            x: centerX, y: centerY, width: widthStartThree, height: widthStartThree, backgroundColor: 'rgba(63, 219, 208, .7)', borderRadius: radiusStartThree 
        }, {
            x: xEndPointArray[13], y: 350, width: widthEndThree, height: widthEndThree, backgroundColor: 'rgba(63, 219, 208, .9)', borderRadius: radiusEndThree
        })
        this.tweenFifteen = TweenLite.fromTo(this.animationBoxFifteen, timeGroupTwo, {
            x: centerX, y: centerY, width: widthStartFour, height: widthStartFour, backgroundColor: 'rgba(82, 67, 242, .65)', borderRadius: radiusStartFour
        }, {
            x: xEndPointArray[14], y: 10, width: widthEndFour, height: widthEndFour, backgroundColor: 'rgba(82, 67, 242, .8)', borderRadius: radiusEndFour
        })
        this.tweenSixteen = TweenLite.fromTo(this.animationBoxSixteen, timeGroupThree, {
            x: centerX, y: centerY, width: widthStartOne, height: widthStartOne, backgroundColor: 'rgba(82, 67, 142, .9)', borderRadius: radiusStartOne
        }, {
            x: xEndPointArray[15], y: 50, width: widthEndThree, height: widthEndThree, backgroundColor: 'rgba(82, 67, 142, .9)', borderRadius: radiusEndThree
        })
        this.tweenSeventeen = TweenLite.fromTo(this.animationBoxSeventeen, timeGroupOne, {
            x: centerX, y: centerY, width: widthStartThree, height: widthStartThree, backgroundColor: 'rgba(219, 21, 51, .3)', borderRadius: radiusStartThree
        }, {
            x: xEndPointArray[16], y: 50, width: widthEndFour, height: widthEndFour, backgroundColor: 'rgba(219, 21, 51, .8)', borderRadius: radiusEndFour
        })
        this.tweenEighteen = TweenLite.fromTo(this.animationBoxEighteen, timeGroupTwo, {
            x: centerX, y: centerY, width: widthStartTwo, height: widthStartTwo, backgroundColor: 'rgba(77, 160, 14, .5)', borderRadius: radiusStartTwo
        }, {
            x: xEndPointArray[17], y: 30, width: widthEndTwo, height: widthEndTwo, backgroundColor: 'rgba(77, 160, 14, .8)', borderRadius: radiusEndTwo
        })
        this.tweenNineteen = TweenLite.fromTo(this.animationBoxNineteen, timeGroupThree, {
            x: centerX, y: centerY, width: widthStartTwo, height: widthStartTwo, backgroundColor: 'rgba(237, 146, 9, .7)', borderRadius: radiusStartTwo
        }, {
            x: xEndPointArray[18], y: 450, width: widthEndThree, height: widthEndThree, backgroundColor: 'rgba(237, 146, 9, .9)', borderRadius: radiusEndThree
        })
        this.tweenTwenty = TweenLite.fromTo(this.animationBoxTwenty, timeGroupOne, {
            x: centerX, y: centerY, width: widthStartThree, height: widthStartThree, backgroundColor: 'rgba(17, 55, 178, 1)', borderRadius: radiusStartThree
        }, {
            x: xEndPointArray[19], y: 100, width: widthEndThree, height: widthEndThree, backgroundColor: 'rgba(17, 55, 178, 1)', borderRadius: radiusEndThree
        })

        //Next ten
        this.tweenTwentyOne = TweenLite.fromTo(this.animationBoxTwentyOne, timeGroupOne, {
            x: centerX, y: centerY, width: widthStartTwo, height: widthStartTwo, backgroundColor: 'rgba(17, 55, 178, .5)', borderRadius: radiusStartTwo
        }, {
            x: xEndPointArray[20], y: 50, width: widthEndThree, height: widthEndThree, backgroundColor: 'rgba(17, 55, 178, .8)', borderRadius: radiusEndThree
        })
        this.tweenTwentyTwo = TweenLite.fromTo(this.animationBoxTwentyTwo, timeGroupTwo, {
            x: centerX, y: centerY, width: widthStartOne, height: widthStartOne, backgroundColor: 'rgba(17, 55, 178, .4)', borderRadius: radiusStartOne
        }, {
            x: xEndPointArray[21], y: 10, width: widthEndOne, height: widthEndOne, backgroundColor: 'rgba(17, 55, 178, .8)', borderRadius: radiusEndOne
        })
        this.tweenTwentyThree = TweenLite.fromTo(this.animationBoxTwentyThree, timeGroupThree, {
            x: centerX, y: centerY, width: widthStartOne, height: widthStartOne, backgroundColor: 'rgba(17, 55, 178, .5)', borderRadius: radiusStartOne
        }, {
            x: xEndPointArray[22], y: 5, width: widthEndThree, height: widthEndThree, backgroundColor: 'rgba(17, 55, 178, 1)', borderRadius: radiusEndThree
        })
        this.tweenTwentyFour = TweenLite.fromTo(this.animationBoxTwentyFour, timeGroupOne, {
            x: centerX, y: centerY, width: widthStartThree, height: widthStartThree, backgroundColor: 'rgba(17, 55, 178, .7)', borderRadius: radiusStartThree
        }, {
            x: xEndPointArray[23], y: 150, width: widthEndFour, height: widthEndFour, backgroundColor: 'rgba(17, 55, 178, .8)', borderRadius: radiusEndFour
        })
        this.tweenTwentyFive = TweenLite.fromTo(this.animationBoxTwentyFive, timeGroupTwo, {
            x: centerX, y: centerY, width: widthStartTwo, height: widthStartTwo, backgroundColor: 'rgba(17, 55, 178, .6)', borderRadius: radiusStartTwo
        }, {
            x: xEndPointArray[24], y: 10, width: widthEndThree, height: widthEndThree, backgroundColor: 'rgba(17, 55, 178, .9)', borderRadius: radiusEndThree
        })
        this.tweenTwentySix = TweenLite.fromTo(this.animationBoxTwentySix, timeGroupThree, {
            x: centerX, y: centerY, width: widthStartOne, height: widthStartOne, backgroundColor: 'rgba(32, 63, 173, .6)', borderRadius: radiusStartOne
        }, {
            x: xEndPointArray[25], y: 460, width: widthEndThree, height: widthEndThree, backgroundColor: 'rgba(32, 63, 173, .9)', borderRadius: radiusEndThree
        })
        this.tweenTwentySeven = TweenLite.fromTo(this.animationBoxTwentySeven, timeGroupOne, {
            x: centerX, y: centerY, width: widthStartTwo, height: widthStartTwo, backgroundColor: 'rgba(160, 11, 224, .4)', borderRadius: radiusStartTwo
        }, {
            x: xEndPointArray[26], y: 420, width: widthEndThree, height: widthEndThree, backgroundColor: 'rgba(160, 11, 224, .9)', borderRadius: radiusEndThree
        })
        this.tweenTwentyEight = TweenLite.fromTo(this.animationBoxTwentyEight, timeGroupTwo, {
            x: centerX, y: centerY, width: widthStartThree, height: widthStartThree, backgroundColor: 'rgba(36, 77, 191, .7)', borderRadius: radiusStartThree
        }, {
            x: xEndPointArray[27], y: 405, width: widthEndThree, height: widthEndThree, backgroundColor: 'rgba(36, 77, 191, .8)', borderRadius: radiusEndThree
        })
        this.tweenTwentyNine = TweenLite.fromTo(this.animationBoxTwentyNine, timeGroupThree, {
            x: centerX, y: centerY, width: widthStartFour, height: widthStartFour, backgroundColor: 'rgba(84, 206, 161, .5)', borderRadius: radiusStartFour
        }, {
            x: xEndPointArray[28], y: 410, width: widthEndFour, height: widthEndFour, backgroundColor: 'rgba(84, 206, 161, .8)', borderRadius: radiusEndFour
        })
        this.tweenTwentyThirty = TweenLite.fromTo(this.animationBoxThirty, timeGroupOne, {
            x: centerX, y: centerY, width: widthStartTwo, height: widthEndTwo, backgroundColor: 'rgba(226, 13, 74, .4)', borderRadius: radiusStartTwo
        }, {
            x: xEndPointArray[29], y: 435, width: widthEndTwo, height: widthEndTwo, backgroundColor: 'rgba(226, 13, 74, 1)', borderRadius: radiusEndTwo
        })
    }

    handleEventOnClick = (id) => {
        // console.log('event id', id)
    }

    //Scroll listeners

    //Listen for scrolling
    addListener() {
      window.addEventListener('scroll', this.handleScroll)
      window.addEventListener('resize', this.handleResize)
    }

    removeListener() {
      window.removeEventListener('scroll', this.handleScroll)
      window.removeEventListener('resize', this.handleResize)
    }

    handleResize = () => {
        console.log('resized yo!')
        this.initTweenAnimations()
    }

    handleScroll = () => {
        // console.log('window y', window.scrollY, window.innerHeight)
    }

    //End lifecycle
    componentWillUnmount() {
        this.removeListener()
    }

    checkOutEvent = (id) => {

    }

    //For now we'll just fetch upcoming events, but eventually will filter by location
    fetchClosestEvents = () => {
        axios.post('api/events/upcoming').then(response => {
            console.log('response data', response.data)
            this.setState({ upcomingEvents: response.data })
        }).catch(error => {
            console.log('error fetching events in landing parent', error)
        })
    }

    getKeywords = () => {
        const { searchText } = this.state;
        let keywords = searchText.replace(/[,\s]+/g, '%20');
        return keywords;
    }

    eventDateToString = (event) => {

        //2019-01-07T10:30:30.000Z 1 7
        //--- TODO Also using in Event Display so eventually create HOC because DRY ---
        var checkDate = moment(event.start_time, 'YYYY/MM/DD')
        var month = checkDate.format('M');
        var day = checkDate.format('D');
        var checkHourStart = moment(event.start_time).format('hh:mm a')
        var checkHourEnd = moment(event.end_time).format('hh:mm a')
        var readableTimeString = `${checkHourStart} - ${checkHourEnd}`

        const monthForNumber = { 
            1: "Jan",
            2: "Feb",
            3: "March",
            4: "April",
            5: "May",
            6: "Jun",
            7: "Jul",
            8: "Aug", 
            9: "Sep", 
            10: "Oct", 
            11: "Nov", 
            12: "Dec"
        }

        const monthAndDay = `${monthForNumber[month]} ${day}`
        return `${monthAndDay} ${readableTimeString}`
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
        const { searchText, cityText, upcomingEvents } = this.state;
        const children = upcomingEvents.map((item, index) => {
            return <div className="scroll_child" key={index} onTouchStart="this.classList.toggle('hover');">
                <div className="flip_container">
                    <div className="front">
                    <div className="top_scroll_container">
                            <p>{this.eventDateToString(item)}</p>
                        <img className="main_image" 
                        onClick={() => this.handleEventOnClick(item.id)} 
                        src={item.image_url}
                        alt='event-card'/>
                    </div>
                    <div className="bottom_scroll_container">
                        <p>{item.title}</p>
                    <div>
                        <img alt='event owner' src={item.img} /> 
                        <p>{`Hosted by ${item.name}`}</p>
                    </div>
                    </div>
                    </div>
                    <div className="back">
                        <p> {`Atendees ${item.attendance_count}`} </p>
                        <p> {item.description} </p>
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
                            <input value={searchText} onChange={(e) => this.setState({ searchText: e.target.value})} placeholder="Search Events" />
                            <input value={cityText} onChange={e => this.setState({ cityText: e.target.value })} placeholder="City" />
                            <Link to={`/event-search?key=${this.getKeywords()}&city=${cityText}`}><img src={plainSearch} alt='eye glass' /></Link>
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
            </main>
        )
    }
}

export default LandingParent