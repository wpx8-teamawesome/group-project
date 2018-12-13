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
            event: null
        }
    }

    render() {
        const { event } = this.state; 
        const { attendFn } = this.props; 

        return (
            <div className="main_header_container">
                <div className="title_container">
                    <div className="title_left">
                        <img src={calendar} alt='calendar'></img>
                        {/* TODO get from start time / end time? */}
                        <p>Dec 10</p> 
                    </div> 
                    <div className="title_right">
                        <div className="title_top">
                            <p>Monday, December 10, 2018</p>
                            <p>{event != null ? event.title : "Event Title"}</p>
                        </div>
                        <div className="title_bottom">
                            <img src={userImg} alt='user'></img>
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
                        <button onClick={() => attendFn(true)}>Going</button>
                        <button onClick={() => attendFn(false)}>Not going</button>
                    </div>
                    <div className="attend_three">
                        <button>Share</button>
                        <img src={facebook} alt='facebook'></img>
                        <img src={instagram} alt='instagram'></img>
                        <img src={twitter} alt='twiiter'></img>
                        <img src={share} alt='share'></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventHeader