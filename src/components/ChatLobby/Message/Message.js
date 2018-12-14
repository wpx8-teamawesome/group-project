import React from 'react';
import './message.css';

const Message = (props) => {
    return (
        <div className='message'>
            <img className='avatar' src={props.img} alt='profile avatar'/>
            <div className='message-body'>
                <div className='message-info'>
                    <h2>{props.name}</h2>
                    <h3>{props.time}</h3>
                </div>
                <p>{props.message}</p>
            </div>
        </div>
    );
};

export default Message;