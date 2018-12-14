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
import userImgDefault from '..//..//..//images/user.png'; 
import clock from '..//..//..//images/clock.png';
import marker from '..//..//..//images/marker.png'; 

//Map
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Geocode from "react-geocode"

import moment from 'moment'; 


class EventDisplay extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            user: null, 
            event: null, 
            attendees: [],

            //Map stuff
            loadLat: '',
            loadLng: '',
            markerClicked: false,
            markerEventTitle: '',
            markerEventAddress: '',
            showInfoWindow: false,
            activeMarker: {}
        }

        //this.geocodeConfig()
    }

    //Lifecycle
    componentDidMount() {
        this.fetchEvent()
    }

    geocodeConfig = () => {
       Geocode.setApiKey(process.env.REACT_APP_MAPS_API_KEY)
    }

    fetchEvent = () => {
        axios.get(`/api/event/${this.props.match.params.id}`).then(response => {
            this.setState({ 
                event: response.data[0],
                loadLat: response.data[0].location.lat,
                loadLng: response.data[0].location.lng,
                markerEventTitle: response.data[0].title,
                markerEventAddress: response.data[0].address
            }, () => {
                this.fetchAttendees()
            })
        }).catch(error => {
            console.log('error fetching event', error)
        })
    }

    fetchAttendees = () => {
        if (this.state.event === null) { return }
        axios.get(`/api/events/attendees/${this.state.event.id}`).then(response => {
            this.setState({ attendees: response.data })
        }).catch(error => {
            console.log('error fetching attendees front end', error)
        })
    }

    attendHandler = (going) => {
        if (this.state.event === null || this.props.user === null) { return }
        if (going === true) {
            axios.post(`/api/events/attending/${this.state.event.id}/${this.props.user.id}`).then(response => {
                response.status === 200 ? this.fetchAttendees() : console.log('response going', response)
            }).catch(error => {
                console.log('error attending front end', error)
            })
        } else {
            axios.delete(`/api/events/attending/${this.state.event.id}/${this.props.user.id}`).then(response => {
                response.status === 200 ? this.fetchAttendees() : console.log('response removing attendance', response)
            }).catch(error => {
                console.log('error removing attendance front end', error)
            })
        }
    }
    onMarkerClick = (props, marker, e) => {
        this.setState({
            activeMarker: marker,
            showInfoWindow: !this.state.showInfoWindow,
            markerClicked: !this.state.markerClicked,
            markerEventTitle: this.state.markerEventTitle,
            markerEventAddress: this.state.markerEventAddress,
            markerEventId: marker.id
        })
    } 

    render() {
        const { user } = this.props; 
        const { event, attendees, loadLat, loadLng, markerArray, markerEventTitle, markerEventAddress } = this.state;
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    
        const urlToGoTo = event != null ? `/chat/${event.socket_room}` : ``

        // Map attendees here
        const attendeesMapped = attendees.map((item, index) => {
            return <div key={item} className="attendee_card_container">
                <div className="attendee_card">
                    <img src={ item.img ? item.img : userImgDefault }></img>
                    <p>{ item.email }</p>
                </div>
            </div>
        })

        //Does .some() work on all browsers? 
        const userId = user ? user.id : "" 
        const isGoing = attendees.some(function(o) { return o["id"] === userId })
        //Moment date auxiliary 
        var checkDate = moment(event ? event.start_time : "", 'YYYY/MM/DD')

        var month = checkDate.format('M');
        var day   = checkDate.format('D');
        var year  = checkDate.format('YYYY');

        var checkHourStart = moment(event ? event.start_time : "", 'hh:mm')
        var checkHourEnd = moment(event ? event.end_time : "", 'hh:mm')

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

        console.log('event date readable', monthForNumber[month], day, year)
        console.log('event time readable', readableTimeString)
        const monthAndDay = event ? `${monthForNumber[month]} ${day}` : ""
        const fullDateReadable = event ? `${monthAndDay} ${year}` : ""
        const fullTime = event ? readableTimeString : ""
        let eventImageUrl = matrix
        if (event) {
            eventImageUrl = event.image_url ? event.image_url : matrix
        }

        //Pass bool prop as string
        return (
            <div className="main_container">
                <EventHeader fullTimeString={fullTime} monthAndDay={monthAndDay} attendeeCount={this.state.attendees.length} going={isGoing ? "true" : "false"} event={this.state.event} attendFn={this.attendHandler}></EventHeader>
                <div className="event_body_parent">
                    <div className="left_container">
                        <img src={ eventImageUrl } alt='event'></img>
                        <p>{event ? event.description : ""}</p>
                        <div className="attendee_container">
                            <p>Attending</p>
                            <Slider className="slick_slider" {...settings}>
                                { attendeesMapped }
                            </Slider>
                        </div>
                        <div className="button_options_container">
                            <button>Photos</button>
                            {isGoing ? <Link to={urlToGoTo}><button>Chat</button></Link>: <div></div>}
                        </div>
                    </div>
                    <div className="right_container">
                        <div className="map_address_container">
                            <div className="top_image_and_text">
                                <img src={clock}></img>
                                <div>
                                    <p>{ fullDateReadable }</p>
                                    <p>{fullTime}</p>
                                    <button>Add to calendar</button>
                                </div>
                            </div>
                            <div className="top_image_and_text">
                                <img src={marker}></img>
                                <div>
                                    <button>Galvanize San Francisco - Soma</button>
                                    <p>44 Tehama St, San Francisco, CA </p>
                                    <p>94105 · San Francisco, CA</p>
                                    <p>How to find us</p>
                                    <p>We are hosting the event in the </p>
                                    <p>Speakeasy room in the lower level.</p>
                                </div>
                            </div>
                            <div className="map_container">
                                <Map className="mini_map-box" 
                                    google={this.props.google} 
                                    zoom={13.5}
                                    center={{
                                        lat: loadLat,
                                        lng: loadLng
                                    }}
                                    initialCenter={{
                                        lat: loadLat,
                                        lng: loadLng
                                    }}>

                                    <Marker
                                        id={marker.id}
                                        key={marker.id}
                                        address={marker.address}
                                        title={marker.title}
                                        position ={{
                                            lat: loadLat,
                                            lng: loadLng
                                        }}  
                                        onClick={this.onMarkerClick} 
                                        />
                                    <InfoWindow 
                                        marker={this.state.activeMarker}
                                        visible={this.state.showInfoWindow}
                                        onClose={this.onInfoWindowClose}>
                                        <h1>{markerEventTitle}</h1>
                                        <p>{markerEventAddress}</p>
                                    </InfoWindow>
                                </Map>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// Event props
//(owner_id, title, description, address, location, start_time, end_time, socket_room)

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const childHOC = GoogleApiWrapper({ apiKey: (process.env.REACT_APP_MAPS_API_KEY)})(EventDisplay)
export default connect(mapStateToProps, { loginUser, logoutUser })(childHOC); 