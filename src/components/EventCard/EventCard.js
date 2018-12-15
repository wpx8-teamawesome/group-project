import React from 'react'
import moment from 'moment'
import './eventcard.scss'
import { Link } from 'react-router-dom'

export default function EventCard(props) {
      const {title, address, start_time, end_time, owner_id, id, image_url, username, img} = props.events
      const formattedStart = moment(start_time).utcOffset( - new Date().getTimezoneOffset()).format('lll');
      const formattedEnd = moment(end_time).utcOffset( - new Date().getTimezoneOffset()).format('lll');
    
        return  (
            <div className="event-card-container">
                <div className="main-box">
                    <img src={image_url} alt="Img"/>
                    <div className="overlay"></div>
                    <div className="title-text"><Link to={`/event/${id}`}><h1>{title}</h1></Link></div>
                </div>

                 <div className="lower-box">
                    <div className="lower-box-left">
                        <h2 className="event-date marg-bot"><span className="describer">Start: </span> {formattedStart}</h2>
                        <h2 className="event-date marg-bot"><span className="describer">End: </span> {formattedEnd}</h2>

                        <h2 className="location marg-bot"><span className="describer">Address: </span>{address}</h2>
                    </div>

                    <div className="lower-box-right">
                        <h2 className="host"><span className="describer">Organizer: </span>{username}</h2>
                        <div className="organizer-box">
                            <Link to={`user/${owner_id}`}><img src={img} alt="Organizer Photo"/></Link>
                        </div>
                    </div>
                 </div> 
            </div>
        )
}
