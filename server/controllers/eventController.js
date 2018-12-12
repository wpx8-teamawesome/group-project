module.exports = {
    createEvent: (req, res) => {
        const db = req.app.get('db');
        db.create_event({...req.body})
        .then(addedEvents => {
            let event = addedEvents[0];
            // add socket_room
            db.update_socket_room({room: `event-${event.id}`, id: event.id})
            .then( events => {
                event = events[0];
                res.status(200).json(event);
            })
            .catch( err => {
                console.error('Error in create Event update socket room', err);
            })
            
        })
        .catch( err => {
            console.error('Error in createEvent()', err);
        })
    },

    getAllEvents: (req, res) => {
        req.app.get('db').get_all_events().then(events => {
            console.log(events)
            res.status(200).json(events)
        }).catch( err => {
            console.log('Error in getAllEvents, ', err)
            res.status(500).json({ message: 'An Error has occurred on the server'})
        })
    },

    getEvent: (req, res) => {
        console.log(`---eventController.getEvent connection with params.id: ${req.params.id}`)
        req.app.get('db').get_event({id: parseInt(req.params.id)}).then(response => {
            res.status(200).json(response)
        }).catch(error => {
            console.log('Error in getEventsOfUser(), ', error)
            res.status(500).json({ message: 'An Error has occurred on the server'})
        })
    },

    editEvent: (req, res) => {
        console.log(`---eventController.editEvent connection with params.id: ${req.params.id}`)
    },

    deleteEvent: (req, res) => {
        console.log(`---eventController.deleteEvent connection with params.id: ${req.params.id}`)
    },
    getEventsOfUser: (req, res) => {
        const { id } = req.params;

        req.app.get('db').get_users_events({id})
        .then(events => {
            res.status(200).json(events);
        }).catch( err => {
            console.log('Error in getEventsOfUser(), ', err)
            res.status(500).json({ message: 'An Error has occurred on the server'})
        })
    },
    getLocalEvents: (req, res) => {
        const db = req.app.get('db');
        const {lat, lng} = req.body
        const highLat = lat + 0.5
        const lowLat = lat - 0.5
        const highLng = lng + 0.5
        const lowLng = lng - 0.5

        db.get_local_events({highLat: highLat, lowLat: lowLat, highLng: highLng,  lowLng: lowLng }).then(events => {
            res.status(200).json(events)
        }).catch(error => {
            console.log("Error in getLocalEvents", error)
        })
    }, 
    getUpcomingEvents: (req, res) => {
        const db = req.app.get('db')
        const { startTime } = req.body
        console.log('start date to fetch events backend', startTime, req.body)
        db.get_upcoming_events([startTime]).then(response => {
            console.log('events from backend', response)
            res.status(200).send(response)
        }).catch(error => {
            console.log('error in backend upcoming events fetch', error)
        })
    }
}




