import React, { Component } from 'react'
import { connect } from 'react-redux'
import './dashboard.scss'
import EventCard from '../EventCard/EventCard'

class Dashboard extends Component {
  render() {
      const eventsArray = [1,2,3,4,5,6,7,8,9,10,11,12]
    return (
      <div className="dashboard-container">
        <div className="dashboard-top-box">
            <button>Add/Edit <br/> Event</button>
            <h1>Nerd-Board</h1>
            <div className="dashboard-top-box-filler"></div>
        
        </div>

        <div className="events">
            <EventCard events={eventsArray}/>
        
        </div>
      </div>
    )
  }
}


// const mapStateToProps = (state) => {
//     const { user } = state
//     return {
//         user
//     }
// }

export default Dashboard
// export default connect(mapStateToProps)(Dashboard)
