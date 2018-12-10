import React, { Component } from 'react';
import './EventDisplay.scss'; 
import { connect } from 'react-redux';
import { loginUser } from '..//..//..//ducks/reducer'; 
import { logoutUser } from '..//..//..//ducks/reducer'; 
import { Link } from 'react-router-dom'; 
import EventHeader from '..//EventHeader.js'; 
import Slider from 'react-slick'; 
//images
import axios from 'axios'; 
import matrix from '..//..//..//images/matrix.jpg'; 
import user from '..//..//..//images/user.png'; 

class EventDisplay extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            user: null, 
            event: null, 
            attendees: []
        }
    }

    //Lifecycle
    componentDidMount() {
        this.fetchEvent()
        this.fetchAttendees() //TEST
    }

    fetchAttendees = () => {
        this.setState({
            attendees: [{ name: "John", imageURL: user },
                { name: "Ethan", imageURL: user },
                { name: "Joe", imageURL: user },
                { name: "Mary", imageURL: user },
                { name: "Denise", imageURL: user },
                { name: "Bob", imageURL: user },
                { name: "Matt", imageURL: user },
                { name: "Travis", imageURL: user },
                { name: "Daniel", imageURL: user },
                { name: "Julia", imageURL: user },
                { name: "Mark", imageURL: user },
                { name: "Dan", imageURL: user },
                { name: "Jake", imageURL: user },
                { name: "Chad", imageURL: user },
                { name: "Maria", imageURL: user }]
        })
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
        const { event, attendees } = this.state; 
        const urlToGoTo = event != null ? `/api/chat/${event.socket_room}` : ``

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        }

        //Map attendees here
        const attendeesMapped = attendees.map((item, index) => {
            return <div className="attendee_card_container">
                <div className="attendee_card">
                    <img src={item.imageURL}></img>
                    <p>{item.name}</p>
                </div>
            </div>
        })

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
                            <p>Attending</p>
                            <Slider className="slick_slider" {...settings}>
                                { attendeesMapped }
                            </Slider>
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