import React, { Component } from 'react'
import { connect } from 'react-redux'
import './dashboard.scss'
import EventCard from '../EventCard/EventCard'
import eventsArray from './fakeEvents'
import axios from 'axios'

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      userLat: 33.4484,
      userLng: -112.0740,
      eventsArray: []
    }
  }
  componentWillMount() {
    const {userLat, userLng} = this.state
    axios.post('/api/events/local', {lat: userLat, lng: userLng }).then(res => {
      this.setState({
        eventsArray: res.data
      })
    })
  }

  render() {
    console.log(this.props)
      const eventCard = this.state.eventsArray.map((event,i) => {
          return <EventCard events={event} />
      })
    return (
      <div className="dashboard-container">
        <div className="dashboard-top-box">
            <button>Add/Edit <br/> Event</button>
            <h1>Hey {this.props.user.username}</h1>
            <div className="dashboard-top-box-filler"></div>
        
        </div>

        <div className="events">
            {eventCard}
        
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
    const { user } = state
    return {
        user
    }
}


export default connect(mapStateToProps)(Dashboard)



