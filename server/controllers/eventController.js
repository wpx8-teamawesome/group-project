module.exports = {
    createEvent: (req, res) => {
        console.log('---eventController.createEvent connection---')
    },

    getEvent: (req, res) => {
        console.log(`---eventController.getEvent connection with params.id: ${req.params.id}`)
    },

    editEvent: (req, res) => {
        console.log(`---eventController.editEvent connection with params.id: ${req.params.id}`)
    },

    deleteEvent: (req, res) => {
        console.log(`---eventController.deleteEvent connection with params.id: ${req.params.id}`)
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




