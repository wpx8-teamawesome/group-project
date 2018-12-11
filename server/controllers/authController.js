const bcrypt = require('bcrypt');
// const session = require('express-session')
const saltRounds = 12;

module.exports = {
    loginUser: (req, res) => {
        const db = req.app.get('db');
        const {username, password} = req.body;
        db.find_user({username: username}).then(user => {
            if (user.length) {
                bcrypt.compare(password, user[0].password).then(passwordsMatch => {
                    if (passwordsMatch) {
                        req.session.user = user[0]
                        res.json(user[0])
                    }else {
                        res.json({ message: 'Username and Password do not match' })
                    }
                })
            }else {
                res.json({message: 'Username Does Not Exist. Please Click Register To Create an Account.'})
            }
        })
    },

    registerUser: (req, res) => {
        const db = req.app.get('db');
        console.log(req.body)
        const {username, password, email, latLng} =  req.body
        db.check_existing_username({
            username: username
        }).then(users => {
            if (users.length) {
                res.json({message: "Username is unavailable"})
            }else {
                bcrypt.hash(password, saltRounds).then(hash => {
                    db.create_new_user({
                        username: username,
                        password: hash,
                        email: email,
                        latLng: latLng
                    }).then(user => {
                        req.session.user = user[0]
                        res.status(200).json(user[0])
                    })
                })
            }
        })
    },

    getSession: (req, res) => {
        const { session } = req;
        res.status(200).send( session.user || {} );
    },

    logoutUser: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    },
}




