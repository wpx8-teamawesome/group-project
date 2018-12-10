import React, { Component } from 'react';
import './EventDisplay.scss'; 
import { connect } from 'react-redux';
import { loginUser } from '..//..//..//ducks/reducer'; 
import { logoutUser } from '..//..//..//ducks/reducer'; 

import { Link } from 'react-router-dom'; 

import EventHeader from '..//EventHeader.js'; 
import axios from 'axios'; 

import matrix from '..//..//..//images/matrix.jpg'; 

class EventDisplay extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            user: null, 
            event: null
        }
    }

    //Lifecycle
    componentDidMount() {
        this.fetchEvent()
    }

    fetchEvent = () => {
        axios.get(`/api/event/${this.props.match.params.id}`).then(response => {
            console.log('response data', response.data)
            this.setState({ event: response.data[0] })
        }).catch(error => {
            console.log('error fetching event', error)
        })
    }

    attendHandler = (going) => {
        if (going === true) {
            //TODO add to attendee table
        } else {

        }
    }

    render() {
        const { user } = this.props; 
        const { event } = this.state; 
        const urlToGoTo = event != null ? `/chat/${event.socket_room}` : ``
        console.log('event socket room', event)
        //Map attendees here
        return (
            <div className="main_container">
                <EventHeader event={this.state.event} attendFn={this.attendHandler}></EventHeader>
                <div className="event_body_parent">
                    <div className="left_container">
                        <img src={matrix}></img>
                        <p>Description: 
                            Here is a description about the event
                            This event will be just awesome! :)
                        </p>
                        <div className="attendee_container">

                        </div>
                        <div className="button_options_container">
                            <button>Photos</button>
                            <Link to={urlToGoTo}><button>Chat</button></Link>
                        </div>
                    </div>
                    <div className="right_container">
                    
                    </div>
                </div>
            </div>
        )
    }
}

//(owner_id, title, description, address, location, start_time, end_time, socket_room)

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { loginUser, logoutUser })(EventDisplay); 