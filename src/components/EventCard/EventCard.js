import React from 'react'
import moment from 'moment'
import './eventcard.scss'
import { Link } from 'react-router-dom'

export default function EventCard(props) {
      const {title, address, start_time, end_time, owner_id, id} = props.events
      const formattedStart = moment(start_time).utcOffset( - new Date().getTimezoneOffset()).format('lll');
      const formattedEnd = moment(end_time).utcOffset( - new Date().getTimezoneOffset()).format('lll');
    //   console.log(formatedStart)
    
        return  (
            <div className="event-card-container">
                 <Link to={`/event/${id}`}><h1>{title}</h1></Link>
                 <div className="lower-box">

                 <div className="lower-box-left">
                    <h2 className="event-date">Start: {formattedStart}</h2>
                    <h2 className="event-date">End: {formattedEnd}</h2>

                    <h2 className="location">{address}</h2>
                 </div>

                 <div className="lower-box-right">
                    <div className="img-placeholder"></div>
                    <h2 className="host">Organizer: {owner_id}</h2>
                 </div>

                 </div>
            </div>
        )
    
  
}
