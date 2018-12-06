module.exports = {
    getUserProfile: (req, res) => {
        const { id } = req.params;

        req.app.get('db').find_user_profile({id})
        .then( users => {
            console.log("-- users", users);
            if (users.length) {
                const user = users[0] // get result
                /* We dont want to expose sensitive info here so there should not be a password in user object */
                const payload = {
                    username: user.username,
                    bio: user.bio,
                    email: user.email,
                    img: user.img,
                    name: user.name || user.username, // in case they did not set a name
                    socialList: JSON.parse(user.social_list)
                }
                res.status(200).json(payload);
            }
            else {
                res.status(404).json({ message: "No user was found" });
            }
        }).catch( err => {
            console.log("Error in getUserProfile(): ", err);
            res.status(500).json({ message: "An Error has occured on the server" })
        })
    },
    updateUser: (req, res) => {
        console.log(`---peopleController.updateUser connection with params.id: ${req.params.id}`)
    }
}