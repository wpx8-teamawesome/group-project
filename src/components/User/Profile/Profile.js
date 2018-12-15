import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import EventPreview from './EventPreview/EventPreview';
import './profile.scss';
import MyProfile from './ProfileToggle/MyProfile/MyProfile'
import OtherUserProfile from './ProfileToggle/OtherUserProfile/OtherUserProfile'
import moment from 'moment';

import { loginUser } from '../../../ducks/reducer';

class Profile extends Component {
    constructor(params) {
        super(params)

        this.state = { 
            profile: null,
            events: [],
            loaded: false,
        }
    }

    componentWillMount() {
        axios.get('/api/auth/session').then(res => {
            this.props.loginUser(res.data)
            this.setState({
                loaded: true
            })
      })
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
    updateUser = (userObj) => {
        this.setState({
            profile: userObj
        })

        this.props.loginUser(userObj)
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
        const { user } = this.props;
        const { profile } = this.state;
        if (!profile.id || !user.id) {
            return false;  // no profile loaded, or no user in redux
        }
        const { socialList } = user;
        if (!socialList || !socialList.following) {
            return false;
        }

        if (socialList.following.find(el => el.id === profile.id) ) {
            return true;
        }
        return false;
    }

    toggleFollow = () => {
        const { profile } = this.state;
        const { user } = this.props;
        if (! user.id ) {
            return;  // user not logged in. no following
        }
        const { socialList } = user;
        let following;
        if (this.checkFollow()) {
            const copy = socialList.following;
            copy.splice(copy.indexOf(e => e.id === profile.id), 1);
            following = copy;
        }
        else {
            following = [...socialList.following, {
                id: profile.id,
                username: profile.username,
                name: profile.name,
                img: profile.img
            }] 
        }
        const payload = {
            ...user, 
            socialList: { 
                ...socialList,
                following
            }
        }

        axios.put(`/api/people/${user.id}`, {user:  payload })
        .then( res => {
            this.props.loginUser(res.data);
        })
    }

    render() {
        const paramsId = this.props.match.params.id;
        const {id} = this.props.user;
        const { profile, events, loaded } = this.state; // 
        if (! loaded) {
            return <></>;
        }
        if (!profile) {
            return <div>No user :(</div>
        }

        const myEvents = events.map(event => <EventPreview key={event.id} event={event} />); // map over events
        const following = profile.socialList.following.map(user => <div>{user.name}</div>);
        const isFollowing = this.checkFollow();
        if (!id) {
            return <Redirect to='/login'/>;
        }
        if (+paramsId === +id) {
            return (
                <MyProfile myEvents={myEvents} 
                           isFollowing={isFollowing} 
                           following={following}
                           profile={profile}
                           switchTabs={this.switchTabs}
                           fetchProfileData={this.fetchProfileData} 
                           forceRender={this.forceRender}
                           updateUser={this.updateUser}
                           />
            );
        }else {
            return (
               <OtherUserProfile myEvents={myEvents} 
                                 isFollowing={isFollowing}
                                 toggleFollow={this.toggleFollow} 
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

export default connect(mapStateToProps, { loginUser })(Profile)

export const StubProfile = Profile;