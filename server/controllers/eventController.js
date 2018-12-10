module.exports = {
    createEvent: (req, res) => {
        console.log('---eventController.createEvent connection---')
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
    }
}




