import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import DateTime from 'react-datetime';
import axios from 'axios';
import Geocode from "react-geocode";
import moment from 'moment';
import './datetime.css';
import software01 from '..//..//..//images/software01.jpg'; 

class AddEvent extends Component {
    constructor(params){
        super(params);

        this.state = {
            title: '',
            address: '',
            startTime: null,
            endTime: null,
            description: '',
            eventImageURL: software01
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
        const { title, address, startTime, endTime, description, eventImageURL } = this.state;
        const location = this.getGeoLocation(address);
        location.then( response => {
                const { lat, lng } = response.results[0].geometry.location;
                const location = {
                  lat,
                  lng
                }

                const payload = {
                    ownerId : this.props.user.id, // props.id from redux
                    title, 
                    description,
                    address,
                    location,
                    startTime: moment(startTime).utc(),
                    endTime: moment(endTime).utc(),
                    imageUrl: eventImageURL
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

    addEventImage = () => {

        window.cloudinary.openUploadWidget(
            { cloud_name: 'dzyljunq0',
            upload_preset: 'pzerapqx',
            multiple: 'false',
            autoMinimize: true,
            showCompletedButton: true,
            
        },
        (error, result) => {
            if (result.info.secure_url) {
                console.log(result.info.secure_url)
                this.setState({
                    eventImageURL: result.info.secure_url
                })
            }
            
        })
    }

    render() {
        const { title, address, startTime, endTime, description, eventImageURL } = this.state;
        console.log(eventImageURL)
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
                <textarea 
                    value={description} 
                    onChange={e => this.updateChanges(e, 'description')} 
                    placeholder='Description'
                />
                <button onClick={this.addEventImage}>Add Event Image</button>
                <Link to='/dashboard'><button onClick={this.clearState}>Cancel</button></Link>
                <button onClick={this.addEvent}>Add Event</button>
                <img src={eventImageURL} alt=""/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(AddEvent);