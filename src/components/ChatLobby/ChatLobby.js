import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
import Message from './Message/Message';
import './chatLobby.css';
let socket = socketIOClient('http://localhost:3000');


export default class ChatLobby extends Component {
    constructor(params) {
        super(params);

        this.state = {
            message: "",
            messages: []
        }
        socket.emit('join', {
            id: 1,
            socket_room: "event-1"
        });

        socket.on('message', message => {
            this.setState({
                messages: [ ...this.state.messages, message]
            }, this.updateScroll);
        })

        socket.on('chat-history', messageList => {
            this.setState({
                messages: messageList
            }, this.updateScroll)
        })
    }


    sendMessage = () => {
        const { message } = this.state;
        socket.emit('new message', {
            room: 'event-1',
            userId: 1,
            name: 'travis',
            message,
            img: ''
        });
        this.setState({
            message: ''
        })
    }

    updateScroll = () => {
        var element = document.getElementById("messages");
        element.scrollTop = element.scrollHeight;
        console.log(element);
    }

    render() {
        const { message, messages } = this.state;
        const messageDisplay = messages.map(m => 
            <Message 
                name={m.name} 
                time={m.time}
                message={m.message} 
                img={m.image}
            />
        );
        return (
            <div className="lobby-container">
                <div className="chat-box">
                    <div className="chat-title">TITLE</div>
                    <div className="message-display" id='messages'>
                        { messageDisplay }
                    </div>
                    <div className="input-box">
                        <input value={message} onChange={e => this.setState({ message: e.target.value })} />
                        <button onClick={this.sendMessage}>Click Me</button>
                    </div>

                </div>
            </div>
        );
    }
}

// .chat-box .title