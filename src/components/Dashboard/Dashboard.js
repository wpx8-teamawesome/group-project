import React, { Component } from 'react'
import { connect } from 'react-redux'
import './dashboard.scss'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <div className="dashboard-top-box">
            <button>Add/Edit <br/> Event</button>
            <h1>Nerd-Board</h1>
            <div className="dashboard-top-box-filler"></div>
        
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
