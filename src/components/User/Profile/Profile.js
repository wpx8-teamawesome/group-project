import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import EventPreview from './EventPreview/EventPreview';
import './profile.scss';
import MyProfile from './ProfileToggle/MyProfile/MyProfile'
import OtherUserProfile from './ProfileToggle/OtherUserProfile/OtherUserProfile'
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

    forceRender = () => {
        this.setState({ 
            profile: this.state.profile,
            events: this.state.events
        })
    }

    fetchProfileData = async (id) => {
        const user = await axios.get(`/api/people/${id}`).then(user => user.data);
        const events = await axios.get(`/api/events/user/${id}`).then(events => events.data);
        for (let event of events) {
            event.start_time = moment(event.start_time).utcOffset( - new Date().getTimezoneOffset()).format('lll');
            event.end_time = moment(event.end_time).utcOffset( - new Date().getTimezoneOffset()).format('lll');
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
        // console.clear()
        const paramsId = this.props.match.params.id;
        const userId = this.props.user.id
        
        const { profile, events } = this.state; // 
        if (!profile) {
            return <div>No user :(</div>
        }

        const myEvents = events.map(event => <EventPreview key={event.id} event={event} />); // map over events
        const following = profile.socialList.following.map(user => <div>{user}</div>);
        const isFollowing = this.checkFollow();

        if (paramsId == userId) {
            return (
                <MyProfile myEvents={myEvents} 
                           isFollowing={isFollowing} 
                           following={following}
                           profile={profile}
                           switchTabs={this.switchTabs}
                           fetchProfileData={this.fetchProfileData} 
                           forceRender={this.forceRender}/>
            );
        }else {
            return (
               <OtherUserProfile myEvents={myEvents} 
                                 isFollowing={isFollowing} 
                                 following={following}
                                 profile={profile}
                                 switchTabs={this.switchTabs} />
            )
        }
        
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Profile)
// export default Profile;