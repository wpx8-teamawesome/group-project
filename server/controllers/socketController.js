module.exports = {
    /**
     *  addMessage ( messageObj )
     *      This function receives a message object from a user post
     *      then submits it into the database as a new message entry within that
     *      chat lobby socket_room.  Finally, the message is sent out to all users
     *      currently in the same socket room.
     *  @params {Object}
     *      - messageObj : {
     *          room // socket room name
     *          userId // the id of the author user (used to update reference of name and img on future requests)
     *          name // author name
     *          img // the icon for the author
     *          message // text of the message
     *      }
     */
    addMessage: (io, message, app) => {
        // create the message
        app.get('db').create_message({ ...message })
        .then(event_messages => {
            const event_message = event_messages[0]; // get the message from db after creation

            // re-format the message to include time
            const m = {
                id: event_message.id,
                room: event_message.socket_room,
                name: event_message.name,
                img: event_message.img,
                message: event_message.message,
                time: event_message.created_time  
                // created_time comes from db right now.  It could easily be changed to new Date() as well.
            }

            io.in(message.room).emit('message', m); // return to sender
        })
    },
    /**
     * joinRoom ( socket, io, chat-room-string, app)
     *      A request by the client to join a specific chat room that the server is keeping available.
     *      This will enable the user to connect and receive all the message history of the chat room
     *      from the database.
     * @params
     *  - socket: the socket to the client used in joining a specific room and monitoring broadcasts from server
     *  - io: allows server to broadcast messages to an individual or room
     *  - lobby (String): the name of the room that the client wishes to join
     *  - app: a reference to the server application for db access
     */
    joinRoom: (socket, io, lobby, app) => {
        socket.join(lobby.socket_room);
        app.get('db').get_messages({room: lobby.socket_room })
        .then( messages => {
            const messageList = messages.map(m => {
                return (
                {
                    id: m.id,
                    authorId: m.author_id,
                    room: m.socket_room,
                    name: m.name,
                    img: m.img,
                    message: m.message,
                    time: m.created_time
                }
                )
            })
            io.in(lobby.socket_room).emit('chat-history', messageList);
        }).catch( err => console.log('Error in socket controller Join room',err));
    }
}
