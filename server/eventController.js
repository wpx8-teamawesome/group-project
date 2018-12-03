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
}



