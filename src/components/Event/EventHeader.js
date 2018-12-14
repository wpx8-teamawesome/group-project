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

    }

    render() {
        const { event, attendFn, going, attendeeCount, monthAndDay, fullTimeString } = this.props; 
        console.log('going prop + event', going, event)
        const buttonStylesOne = going === "true" ? { background: 'rgb(197, 247, 247)', color: 'black' } : { background: 'black', color: 'white' }
        const buttonStylesTwo = going === "true" ? { background: 'black', color: 'white' } : { background: 'rgb(197, 247, 247)', color: 'black' }

        const time = event ? `${fullTimeString}` : ""
        const publicOrPrivate = event ? `${event.private}` : ""
        const hostName = event ? event.name : ""

        let attendCountString = `${attendeeCount} are attending`
        if (attendeeCount === 1) {
            attendCountString = `${attendeeCount} is attending`
        }

        return (
            <div className="main_header_container">
                <div className="title_container">
                    <div className="title_left">
                        <img src={calendar} alt='calendar'></img>
                        {/* TODO get from start time / end time? */}
                        <p>{ monthAndDay }</p> 
                    </div> 
                    <div className="title_right">
                        <div className="title_top">
                            <p>{ time }</p>
                            <p>{ event ? event.title : "" }</p>
                        </div>
                        <div className="title_bottom">
                            <img src={userImg} alt='user'></img>
                            <div>
                                <p>{`Hosted by ${hostName}`}</p>
                                <p>From Nerds United</p>
                                <p>{`Public: ${publicOrPrivate}`}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="attend_container">
                    <div className="attend_one">
                        {/* Get count from attendee table */}
                        <p> Are you going? {attendCountString} </p> 
                    </div>
                    <div className="attend_two">
                        <button style={ buttonStylesOne } onClick={() => attendFn(true)}>Going</button>
                        <button style={ buttonStylesTwo } onClick={() => attendFn(false)}>Not going</button>
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