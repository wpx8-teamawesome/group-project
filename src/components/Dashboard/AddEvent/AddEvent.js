import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DateTime from 'react-datetime';
import axios from 'axios';
import Geocode from "react-geocode";
import moment from 'moment';
import './datetime.css';

export default class AddEvent extends Component {
    constructor(params){
        super(params);

        this.state = {
            title: '',
            address: '',
            startTime: null,
            endTime: null,
            description: '',
        }
    }

    componentDidMount() {
        Geocode.setApiKey(process.env.REACT_APP_MAPS_API_KEY);
    }
    
    updateChanges = (e, state)  => {
        console.log(state, e.target.value)
        this.setState({
            [state]: e.target.value
        })
    }

    updateStartTime = time => {
        this.setState({
            startTime: time
        })
    }
    updateEndTime = time => {
        this.setState({
            endTime: time
        })
    }

    clearState = () => {
        this.setState({
            title: '',
            address: '',
            startTime: null,
            endTime: null,
            description: '',
        })
    }

    addEvent = async () => {
        const { title, address, startTime, endTime, description } = this.state;
        const location = this.getGeoLocation(address);
        location.then( response => {
                const { lat, lng } = response.results[0].geometry.location;
                const location = {
                  lat,
                  lng
                }

                const payload = {
                    ownerId : 1, // props.id from redux
                    title, 
                    description,
                    address,
                    location,
                    startTime: moment(startTime).utc(),
                    endTime: moment(endTime).utc(),
                }

                axios.post('/api/events', payload)
                .then(res => {
                    console.log('Success', res)
                    this.props.history.push(`/event/${res.data.id}`);
                });
              },
              error => {
                console.error(error);
              }
        )
        
        
    }

    getGeoLocation = (address) => {
        return Geocode.fromAddress(address);
            
    }

    render() {
        const { title, address, startTime, endTime, description } = this.state;
        console.log('TIME', startTime);
        return (
            <div className='add-event-container'>
                <input 
                    value={title}
                    placeholder='Event Title'
                    onChange={e => this.updateChanges(e, 'title')}
                />
                <input 
                    placeholder='Address'
                    value={address}
                    onChange={e => this.updateChanges(e, 'address')}
                />
                <DateTime value={startTime} onChange={this.updateStartTime} />
                <DateTime value={endTime} onChange={this.updateEndTime} />
                <textarea placeholder='Description'/>
                <Link to='/dashboard'><button onClick={this.clearState}>Cancel</button></Link>
                <button onClick={this.addEvent}>Add Event</button>
            </div>
        );
    }
}