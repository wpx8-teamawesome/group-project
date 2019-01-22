const bcrypt = require('bcrypt');
// const session = require('express-session')
const saltRounds = 12;

function userObjCamelCase(user) {
    return {
        id: user.id,
        username: user.username,
        bio: user.bio,
        email: user.email,
        img: user.img,
        name: user.name || user.username, // in case they did not set a name
        socialList: user.social_list,
    }
}

module.exports = {
    loginUser: (req, res) => {
        const db = req.app.get('db');
        const {username, password} = req.body;
        db.find_user({username: username}).then(user => {
            if (user.length) {
                bcrypt.compare(password, user[0].password).then(passwordsMatch => {
                    if (passwordsMatch) {
                        const rtn = userObjCamelCase(user[0])
                        req.session.user = rtn
                        res.json(rtn)
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
                        const rtn = userObjCamelCase(user[0])
                        req.session.user = rtn
                        res.status(200).json(rtn)
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




