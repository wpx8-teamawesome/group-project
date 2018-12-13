import React, { Component } from 'react'
import axios from 'axios'
import './myprofile.scss'

export default class MyProfile extends Component {
        constructor(props) {
            super(props)
            this.state = {
                profileImg: this.props.profile.img,
                profile: this.props.profile,
                editClicked: false,
                editName: '',
                editEmail: '',
                editBio: ''
            }
        }

        componentDidUpdate(prevProps) {
            if (this.props !== prevProps) {
                this.setState({
                    profile: this.props.profile
                })
            }
        }

    handleProfileUpdate = (profileObj, itemUpdate) => {

        return Object.assign({}, profileObj, itemUpdate);

    }
    
    saveChanges = () => {
        const { id } = this.state.profile
        const { editName, editEmail, editBio, profile } = this.state
        const builderObj = {
            name: editName,
            email: editEmail, 
            bio: editBio
        }

        const updatedProfileObj = this.handleProfileUpdate(profile, builderObj)
        axios.put(`/api/people/${this.props.profile.id}`, {user: updatedProfileObj}).then(res => {
            const userObj = res.data
            this.props.updateUser(userObj)
            this.setState({
                editClicked: !this.state.editClicked
            })
        }).catch(err => {
            console.log("Error in saveChanges", err)
        })
    
    }

    handleEditToggle = () => {
        this.setState({
            editClicked: !this.state.editClicked,
            editName: this.state.profile.name,
            editEmail: this.state.profile.email,
            editBio: this.state.profile.bio
        })
    }

    handleInputChange = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    editProfileImage = () => {

        window.cloudinary.openUploadWidget(
            { cloud_name: 'dzyljunq0',
            upload_preset: 'pzerapqx',
            multiple: 'false',
            autoMinimize: true,
            showCompletedButton: true,
            
        },
        (error, result) => {
            if (result.info.secure_url) {
                
                const updatedProfileObj = this.handleProfileUpdate(this.props.profile, {img: result.info.secure_url})

                axios.put(`/api/people/${this.props.profile.id}`, {user: updatedProfileObj}).then(res => {
                    const id = this.props.profile.id.toString()
                    this.props.fetchProfileData(id)
                })
            }
        })
    }

  render() {
    const defaultImg = "https://cdn5.vectorstock.com/i/thumb-large/54/94/geek-man-cartoon-vector-19475494.jpg"
    const { myEvents, isFollowing, following, profile, switchTabs } = this.props
    const { img, name, email, bio, id, username } = this.state.profile
    const { editClicked, editName, editEmail, editBio } = this.state

    return (
        <div className='profile-container'>
        <header>
                <div onClick={this.editProfileImage} className="profile-img-box">
                    <img id="profile-img" className='profile-img' src={!img? defaultImg : img} alt='Current user' />
                    {/* <img id="profile-img" className='profile-img' src={img} alt='Current user' /> */}
                    <h3>Edit Image</h3>
                </div>
                <div className='profile-header-info'>
                    <div className="name-edit-box">
                        <h2>{name}</h2>
                        <i onClick={this.handleEditToggle} className="far fa-edit"></i>
                    </div>
                    <hr/>
                    {/* More info here? */}
                    <h3>{email}</h3>
                    {/* <button className='following' onClick={this.toggleFollow}>{isFollowing ? 'Following': 'Follow'}</button> */}
                </div>
        </header>

        <div>
            <button className='profile-control active' onClick={e => switchTabs(e, 'bio')}>Bio</button>
            <button className='profile-control' onClick={e => switchTabs(e, 'events')}>My Events</button>
            <button className='profile-control' onClick={e => switchTabs(e, 'followers')}>Following</button>
        </div>
       
        <div id='bio' className='profile-content'>
            <p>{ bio || "This nerd is a little shy..." }</p>
        </div>
        <div id='events' className='profile-content'>
            { myEvents || <p>This nerd likes to run solo</p> }
        </div>
        <div id='followers' className='profile-content'>
            { following }
        </div>

        <form className={editClicked? "edit-form": "hide-me"} action="">
            <div className="cancel-box">
                <i onClick={this.handleEditToggle} className="fas fa-times"></i>
            </div>
            <div className="input-group">
                <h4>Name:</h4>
                <div className="input-box">
                    <p className="terminal-symbols">$~</p>
                    <input onChange={(e) => this.handleInputChange("editName", e.target.value)} type="text" value={editName}/>
                </div>
            </div>

            <div className="input-group">
                <h4>Email:</h4>
                <div className="input-box">
                    <p className="terminal-symbols">$~</p>
                    <input onChange={(e) => this.handleInputChange("editEmail", e.target.value)} type="text" value={editEmail}/>
                </div>
            </div>

            <div className="input-group">
                <h4>Bio:</h4>
                <div className="input-box">
                    <p className="terminal-symbols">$~</p>
                    <textarea onChange={(e) => this.handleInputChange("editBio", e.target.value)} name="" id="" cols="30" rows="10" value={editBio}></textarea>
                </div>
            </div>

            <button onClick={e => { e.preventDefault(); this.saveChanges()}}>Save Changes</button>
        
        </form>
    </div>
    )
  }
}
