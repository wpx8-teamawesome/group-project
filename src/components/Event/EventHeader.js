import React, { Component } from 'react';
import './EventHeader.scss'; 

import calendar from '..//..//images/calendar.png'; 
import userImg from '..//..//images/user.png'; 
import facebook from '..//..//images/facebook.png'; 
import instagram from '..//..//images/instagram.png'; 
import twitter from '..//..//images/twitter.png'; 
import share from '..//..//images/share.png'; 

class EventHeader extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            user: null, 
        }
    }

    render() {

        const { user, event, attendFn, going } = this.props; 
        console.log('going prop', going)
        const buttonStylesOne = going === "true" ? { background: 'rgb(197, 247, 247)', color: 'black' } : { background: 'black', color: 'white' }
        const buttonStylesTwo = going === "true" ? { background: 'black', color: 'white' } : { background: 'rgb(197, 247, 247)', color: 'black' }

        return (
            <div className="main_header_container">
                <div className="title_container">
                    <div className="title_left">
                        <img src={calendar}></img>
                        {/* TODO get from start time / end time? */}
                        <p>Dec 10</p> 
                    </div> 
                    <div className="title_right">
                        <div className="title_top">
                            <p>Monday, December 10, 2018</p>
                            <p>{event != null ? event.title : "Event Title"}</p>
                        </div>
                        <div className="title_bottom">
                            <img src={userImg}></img>
                            <div>
                                <p>Hosted by Ethan Hess</p>
                                <p>From Nerds United</p>
                                <p>Public group</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="attend_container">
                    <div className="attend_one">
                        {/* Get count from attendee table */}
                        <p> Are you going? 76 attendees</p> 
                    </div>
                    <div className="attend_two">
                        <button style={ buttonStylesOne } onClick={() => attendFn(true)}>Going</button>
                        <button style={ buttonStylesTwo } onClick={() => attendFn(false)}>Not going</button>
                    </div>
                    <div className="attend_three">
                        <button>Share</button>
                        <img src={facebook}></img>
                        <img src={instagram}></img>
                        <img src={twitter}></img>
                        <img src={share}></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventHeader