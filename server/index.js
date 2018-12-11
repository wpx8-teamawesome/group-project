const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const authController = require('./controllers/authController');
const eventsController = require('./controllers/eventController');
const peopleController = require('./controllers/peopleController');
const socketController = require('./controllers/socketController');
const attendanceController = require('./controllers/attendanceController'); 
// const session = require('express-session');
require('dotenv').config();
// require('dotenv').config();

const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(database  => {
    app.set('db', database);
    console.log('database connect is bueno');
})

// ---------------- SOCKET IO ------------------

io.sockets.on("connection", socket => {
    // user has connected
    // here we can update them into a current list to view who is online?

    // joining a chat room
    socket.on('join', lobby => socketController.joinRoom(socket, io, lobby, app));
    
    // sending a message on a chat room
    socket.on('new message', message => socketController.addMessage(io, message, app));

    // leaving a chat room
    socket.on('leave', room => {
        socket.leave(room);
    })

    // When a user clicks away and the page un-mounts or cuts out this message removes them from all the rooms
    // Here we can update them in a current list of users online for analytics
    socket.on('disconnect', () => {
        socket.leaveAll();
    })
})

// --------------------  Endpoints  --------------------

// Login, Register. and Logout endpoints
app.post('/api/auth/login', authController.loginUser);
app.post('/api/auth/register', authController.registerUser);
app.post('/api/auth/logout', authController.logoutUser);


// User profile endpoint
app.get('/api/people/:id', peopleController.getUserProfile);
app.put('/api/people/:id', peopleController.updateUser);

// Events Endpoints
app.post('/api/events', eventsController.createEvent);
app.get('/api/event/:id', eventsController.getEvent);
app.get('/api/events', eventsController.getAllEvents)
app.post('/api/events/local', eventsController.getLocalEvents)
app.put('/api/events/:id', eventsController.editEvent);
app.delete('/api/events/:id', eventsController.deleteEvent);
app.get('/api/events/user/:id', eventsController.getEventsOfUser);

// Attendance
app.get('/api/events/attendees/:eventid', attendanceController.fetchAllAttending); 
app.post('/api/events/attending/:eventid/:uid', attendanceController.attendEvent); 
app.delete('/api/events/attending/:eventid/:uid/', attendanceController.removeAttendance); 

// --------------------  Server Connection  --------------------
const PORT = 4000

/* Use this for socketIO when we are ready to deploy */
// const path = require('path')
// app.get('*', (req, res)=>{
//     
//     res.sendFile(path.join(__dirname, '../build/index.html'));
// })

server.listen(PORT, () => console.log(`Server is super sexy on port: ${PORT}`));

// app.listen(PORT, () => {
//     console.log(`Server is super sexy on port: ${PORT}`)
// });
