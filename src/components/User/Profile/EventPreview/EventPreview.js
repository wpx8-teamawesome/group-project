import React from 'react';
import { Link } from 'react-router-dom';
import './eventPreview.css';

const EventPreview = (props) => {

    const { event } = props;
    return (
        <Link className='event-preview' to={`/event/${event.id}`}>
            <img src='' alt='An event'/>
            <h1>{event.title}</h1>
            <h3>{event.start_time} to {event.end_time}</h3>
        </Link>
    );
};

export default EventPreview;