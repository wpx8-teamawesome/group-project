const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const authController = require('./authController');
const eventsController = require('./eventController');
const peopleController = require('./peopleController');
// const session = require('express-session');
require('dotenv').config();
// require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// app.use(express.static(`${__dirname}/../build`) );


//Using .env_test
massive(process.env.CONNECTION_STRING).then(database  => {
    app.set('db', database);
    console.log('database connect is bueno');
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
const port = 4000

// const path = require('path')
// app.get('*', (req, res)=>{
//     console.log('hit')
//     res.sendFile(path.join(__dirname, '../build/index.html'));
// })

app.listen(port, () => {
    console.log(`Server is super sexy on port: ${port}`)
});