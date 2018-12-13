import React, { Component } from 'react';
import Map from '../Map/Map'
import EventCard from '../EventCard/EventCard'
import axios from 'axios'
import queryString from 'query-string';
import Geocode from "react-geocode";
import { Link } from 'react-router-dom';
import defaultLoading from '../../media/defaultLoading.gif';
import './eventsearch.scss'


class EventSearch extends Component {
    constructor() {
        super()
        this.state = {
            eventsArray: [],
            loaded: false,
            lat: null,
            lng: null
        }
    }

    componentDidMount() {
        Geocode.setApiKey(process.env.REACT_APP_MAPS_API_KEY);
        const query = queryString.parse(this.props.location.search);
        const keywords = query.key;  // name of the search query is '?key='
        this.getGeoLocation(query.city).then(res => {
            const { lat, lng } = res.results[0].geometry.location;
            this.setState({
                lat,
                lng
            });
        }).catch(err=> console.log(err));
        axios.get('/api/events').then(res => {
            
            const events = res.data.filter(event => {
                return this.eventFilter(event, keywords)
            })
            
            this.setState({
                eventsArray: events,
                loaded: true
            })
        })
    }

    eventFilter = (event, keywords) => {
        const search = (event.title + event.description).toLowerCase();
        for (let word of keywords.split(' ')) {
            if ( search.includes(word.toLowerCase())) {
                return true;
            }
        }
        return false;
    }
    getGeoLocation = (city) => {
        return Geocode.fromAddress(city);
            
    }

    render() {
        const { eventsArray, loaded, lat, lng } = this.state

        if (! loaded ) {
            return (
                <div className='no-search'>
                    <img src={defaultLoading} alt='loading' />
                </div>
            )
        }
        const eventCard = eventsArray.map((event,i) => {
            return <EventCard key={i} events={event} />
        })
        if (!eventCard.length) {
            return (
                <div className='no-search'>
                    <h1>Sorry, we found no events with the provided search.</h1>
                    <Link to='/'>Try again?</Link>
                </div>
            )
        }
        return (
            <div className="event-search-container">
                <h1 className="search-title">Nerd Events Near You!!</h1>
                <Map events={eventsArray} loadLat={lat} loadLng={lng}/>
                {eventCard}
            </div>
        )
    }
}

export default EventSearch