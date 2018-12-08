import React from 'react';
import './message.css';
import defaultIcon from '../../../media/chip.png';

const Message = (props) => {
    return (
        <div className='message'>
            <img className='avatar' src={defaultIcon} alt='profile avatar'/>
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