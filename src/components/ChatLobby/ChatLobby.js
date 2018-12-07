import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
import Message from './Message/Message';
import './chatLobby.css';
let socket; 


export default class ChatLobby extends Component {
    constructor(params) {
        super(params);
        socket = socketIOClient('http://localhost:4000');  // update to match when on production 
        this.state = {
            message: "",
            messages: [],
            room: 'test-lobby', // set to `event-${this.props.event.id}` when ready to launch
            joined: false,

        }
        socket.emit('join', {
            id: this.props.eventId,
            socket_room: this.state.room
        });

        socket.on('message', message => {
            /*
                // for when we set up users so that 
                // the current message that they just wrote
                // gets displayed but doesn't stop people from
                // scrolling through the chat every time someone posts
                // something new.

                if (message.user_id === my_user_id) {
                    updateScroll()
                }
            */
            this.setState({
                messages: [ ...this.state.messages, message]
            });
        })

        socket.on('chat-history', messageList => {
            this.setState({
                messages: messageList,
                joined: true
            }, this.updateScroll)
        })

    }


    sendMessage = () => {
        console.log('hit');
        const { message, room } = this.state;
        socket.emit('new message', {
            room,
            userId: 1,
            name: 'travis',
            message,
            img: ''
        });

        // Clear input
        this.setState({
            message: ''
        })
    }

    /**
     * updateScroll()
     *      adjusts user view to start at the most recent message.  If
     *      they send a message the update will also auto scroll to the bottom to see the new
     *      message
     */
    updateScroll = () => {
        var element = document.getElementById("messages");
        element.scrollTop = element.scrollHeight;
    }

    render() {
        const { message, messages, joined } = this.state;

        const messageDisplay = messages.map(m => 
            <Message 
                key={m.id}
                name={m.name} 
                time={m.time}
                message={m.message} 
                img={m.image}
            />
        );
        return (
            <div className="lobby-container">
                { 
                    !joined ?
                    <div className="loading"></div> 
                    : 
                    <div className="chat-box">
                        
                        <div className="chat-title">TITLE</div>
                        <div className="message-display" id='messages'>
                            { messageDisplay }
                        </div>
                        <div className="input-box">
                            <p style={{'color':'white'}}>~$</p>
                            <input 
                                value={message} 
                                onChange={e => this.setState({ message: e.target.value })}
                                onKeyUp={e => e.key==='Enter' ? this.sendMessage() : null } />
                            <button onClick={this.sendMessage}>Send</button>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

// .chat-box .title