import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import EventPreview from './EventPreview/EventPreview';
import './profile.css';
import moment from 'moment';

class Profile extends Component {
    constructor(params) {
        super(params)

        this.state = { 
            profile: null,
            events: []
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        if (id) {
            this.fetchProfileData(id);
        }
    }

    fetchProfileData = async (id) => {
        const user = await axios.get(`/api/people/${id}`).then(user => user.data);
        const events = await axios.get(`/api/events/user/${id}`).then(events => events.data);
        for (let event of events) {
            event.start_time = moment(event.start_time).zone(new Date().getTimezoneOffset()).format('lll');
            event.end_time = moment(event.end_time).zone(new Date().getTimezoneOffset()).format('lll');
        }

        this.setState({
            profile: user,
            events
        })
    }

    switchTabs = (e, display) => {
        let buttons = document.getElementsByClassName('profile-control');
        for ( let button of buttons ) {
            button.className = button.className.replace(' active', '');
        }

        let content = document.getElementsByClassName('profile-content');
        for ( let view of content ) {
            view.style.display = 'none';
        }
        document.getElementById(display).style.display = 'block';
        e.currentTarget.className += ' active';
    }

    checkFollow = () => {
        return true
    }
    render() {
        const { profile, events } = this.state; // 
        if (!profile) {
            return <div>No user :(</div>
        }

        const myEvents = events.map(event => <EventPreview key={event.id} event={event} />); // map over events
        console.log(profile);
        const following = profile.socialList.following.map(user => <div>{user}</div>);
        const isFollowing = this.checkFollow();
        return (
            <div className='profile-container'>
                <header>
                        <img className='profile-img' src={profile.img} alt='Current user' />
                        <div className='profile-header-info'>
                            <h2>{profile.name}</h2>
                            <hr/>
                            {/* More info here? */}
                            <button className='following' onClick={this.toggleFollow}>{isFollowing ? 'Following': 'Follow'}</button>
                        </div>
                </header>

                <div>
                    <button className='profile-control active' onClick={e => this.switchTabs(e, 'bio')}>Bio</button>
                    <button className='profile-control' onClick={e => this.switchTabs(e, 'events')}>My Events</button>
                    <button className='profile-control' onClick={e => this.switchTabs(e, 'followers')}>Following</button>
                </div>
               
                <div id='bio' className='profile-content'>
                    <p>{ profile.bio || "This nerd is a little shy..." }</p>
                </div>
                <div id='events' className='profile-content'>
                    { myEvents || <p>This nerd likes to run solo</p> }
                </div>
                <div id='followers' className='profile-content'>
                    { following }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

// export default connect(mapStateToProps)(Profile)
export default Profile;