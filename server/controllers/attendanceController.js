module.exports = {
    attendEvent: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { params } = req; 
        dbInstance.check_attendance([params.eventid, params.uid]).then(attendees => {
            if (attendees.length) {
                console.log('already attending') // not removing because there are two different buttons, although we could
                 res.status(200).send()
            } else {
                dbInstance.attend_event([params.eventid, params.uid]).then(response => {
                    res.status(200).send(response)
                }).catch(error => {
                    console.log('backend error attending event', error)
                })
            }
        })
    }, 
    removeAttendance: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { params } = req; 
        dbInstance.leave_event([params.eventid, params.uid]).then(response => {
            res.status(200).send(response)
        }).catch(error => {
            console.log('backend error removing attending event', error)
        })
    }, 
    fetchAllAttending: (req, res, next) => {
        const dbInstance = req.app.get('db'); 
        const { params } = req; 
        dbInstance.get_all_attendees([params.eventid]).then(response => {
            res.status(200).send(response)
        }).catch(error => {
            console.log('backend error fetching attending event', error)
        })
    }
}