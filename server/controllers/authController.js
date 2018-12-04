const bcrypt = require('bcrypt');
const saltRounds = 12;

module.exports = {
    loginUser: (req, res) => {
        // console.log('---authController.loginUser connection---')
        const db = req.app.get('db');
        const {username, password} = req.body;
        db.find_user({username: username}).then(user => {
            if (user.length) {
                bcrypt.compare(password, user[0].password).then(passwordsMatch => {
                    if (passwordsMatch) {
                        res.json(user)
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
        // console.log('---authController.registerUser connection---')
        const db = req.app.get('db');
        const {username, password, email} =  req.body
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
                        email: email
                    }).then(user => {
                        res.status(200).json(user[0])
                    })
                })
            }
        })
    },

    logoutUser: (req, res) => {
        console.log('---authController.logoutUser connection---')
    },
}




