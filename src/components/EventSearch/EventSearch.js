import React, { Component } from 'react';
import Map from '../Map/Map'
import EventCard from '../EventCard/EventCard'
import axios from 'axios'
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import defaultLoading from '../../media/defaultLoading.gif';
import './eventsearch.scss'


class EventSearch extends Component {
    constructor() {
        super()
        this.state = {
            eventsArray: [],
            loaded: false,
        }
    }

    componentDidMount() {
        const query = queryString.parse(this.props.location.search);
        const keywords = query.key;  // name of the search query is '?key='
        axios.get('/api/events').then(res => {
            
            const events = res.data.filter(event => {
                const search = event.title + event.description;
                for (let word of keywords.split(' ')) {
                    if ( search.includes(word)) {
                        return true;
                    }
                }
                return false;
            })
            this.setState({
                eventsArray: events,
                loaded: true
            })
        })
    }

    render() {
        const { eventsArray, loaded } = this.state

        if (! loaded ) {
            return (
                <div className='no-search'>
                    <img src={defaultLoading} alt='loading' />
                </div>
            )
        }
        const eventCard = eventsArray.map((event,i) => {
            return <EventCard events={event} />
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
                <Map events={eventsArray}/>
                {eventCard}
            </div>
        )
    }
}

export default EventSearch