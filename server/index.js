const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const authController = require('./controllers/authController');
const eventsController = require('./controllers/eventController');
const peopleController = require('./controllers/peopleController');
// const session = require('express-session');
require('dotenv').config();
// require('dotenv').config();

const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.use(bodyParser.json());

// app.use(express.static(`${__dirname}/../build`) );

massive(process.env.CONNECTION_STRING).then(database  => {
    app.set('db', database);
    console.log('database connect is bueno');
})

// ---------------- SOCKET IO ------------------

io.sockets.on("connection", socket => {
    console.log("User connected");

    socket.on('join', event => {
        console.log('joining room?', event.socket_room);
        socket.join(event.socket_room);
        app.get('db').get_messages({eventId: event.id})
        .then( messages => {
            const messageList = messages.map(m => {
                return (
                {
                    id: m.id,
                    room: m.socket_room,
                    name: m.name,
                    img: m.img,
                    message: m.message,
                    time: m.created_time
                }
                )
            })
            console.log('All Messages', messageList);
            io.in(event.socket_room).emit('chat-history', messageList);
        })
    });
    
    socket.on('new message', message => {
        console.log('Message from client', message);
        app.get('db').create_message({ ...message })
        .then(event_messages => {
            const event_message = event_messages[0];
            console.log(event_message);
            const m = {
                id: event_message.id,
                room: event_message.socket_room,
                name: event_message.name,
                img: event_message.img,
                message: event_message.message,
                time: event_message.created_time
            }
            io.in(message.room).emit('message', m); // return to sender
        })
    })
})

// --------------------  Endpoints  --------------------

// Login, Register. and Logout endpoints
app.post('/api/auth/login', authController.loginUser);
app.post('/api/auth/register', authController.registerUser);
app.post('/api/auth/logout', authController.logoutUser);


// Update user profile endpoint
app.put('/api/people/:id', peopleController.updateUser);

// Events Endpoints
app.post('/api/events', eventsController.createEvent);
app.get('/api/events/:id', eventsController.getEvent);
app.put('/api/events/:id', eventsController.editEvent);
app.delete('/api/events/:id', eventsController.deleteEvent);

// --------------------  Server Connection  --------------------
const PORT = 4000

// const path = require('path')
// app.get('*', (req, res)=>{
//     
//     res.sendFile(path.join(__dirname, '../build/index.html'));
// })

server.listen(PORT, () => console.log(`Server is super sexy on port: ${PORT}`));

// app.listen(PORT, () => {
//     console.log(`Server is super sexy on port: ${PORT}`)
// });
