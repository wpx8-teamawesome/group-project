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
    getEventsOfUser: (req, res) => {
        const { id } = req.params;

        req.app.get('db').get_users_events({id})
        .then(events => {
            res.status(200).json(events);
        }).catch( err => {
            console.log('Error in getEventsOfUser(), ', err)
            res.status(500).json({ message: 'An Error has occurred on the server'})
        })
    }
}



