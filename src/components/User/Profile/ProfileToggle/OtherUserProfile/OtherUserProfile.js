import React, { Component } from 'react'

export default class OtherUserProfile extends Component {

  render() {

    const { myEvents, isFollowing, following, profile, switchTabs } = this.props
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
            <button className='profile-control active' onClick={e => switchTabs(e, 'bio')}>Bio</button>
            <button className='profile-control' onClick={e => switchTabs(e, 'events')}>My Events</button>
            <button className='profile-control' onClick={e => switchTabs(e, 'followers')}>Following</button>
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
    )
  }
}