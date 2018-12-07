import React from 'react'
import './eventcard.scss'

export default function EventCard(props) {
   console.log(props.events)
      const {title, address, date, time, host} = props.events
    
        return  (
            <div className="event-card-container">
                 <h1>{title}</h1>
                 <div className="lower-box">

                 <div className="lower-box-left">
                    <h2 className="event-date">{date}</h2>
                    <h2 className="event-time">{time}</h2>
                    <h2 className="location">{address}</h2>
                 </div>

                 <div className="lower-box-right">
                    <div className="img-placeholder"></div>
                    <h2 className="host">{host}</h2>
                 </div>

                 </div>
            </div>
        )
    
  
}
