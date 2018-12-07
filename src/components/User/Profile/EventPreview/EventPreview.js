import React from 'react';
import { Link } from 'react-router-dom';
import './eventPreview.css';

const EventPreview = (props) => {
    return (
        <Link className='event-preview' to={`/event/${props.event.id}`}>
            <img src='' alt='An event'/>
            <h1>{props.event.title}</h1>
        </Link>
    );
};

export default EventPreview;