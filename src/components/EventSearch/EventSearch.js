import React, { Component } from 'react';
import Map from '../Map/Map'
import EventCard from '../EventCard/EventCard'
import axios from 'axios'
import './eventsearch.scss'


class EventSearch extends Component {
    constructor() {
        super()
        this.state = {
            eventsArray: []
        }
    }

    componentDidMount() {
        axios.get('/api/events').then(res => {
            this.setState({
                eventsArray: res.data
            })
        })
    }

    render() {
        const { eventsArray } = this.state
        const eventCard = eventsArray.map((event,i) => {
            return <EventCard events={event} />
        })
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