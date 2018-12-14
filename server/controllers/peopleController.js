module.exports = {
    getUserProfile: (req, res) => {
        const { id } = req.params;

        req.app.get('db').find_user_profile({id})
        .then( users => {
            if (users.length) {
                const user = users[0] // get result
                /* We dont want to expose sensitive info here so there should not be a password in user object */
                const payload = {
                    username: user.username,
                    bio: user.bio,
                    email: user.email,
                    img: user.img,
                    name: user.name || user.username, // in case they did not set a name
                    socialList: user.social_list,
                    id: user.id
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
        const { id } = req.params;
        let { user } = req.body
        req.app.get('db').update_user({
            id: id,
            username: user.username,
            name: user.name,
            img: user.img,
            email: user.email,
            bio: user.bio,
            social_list: user.socialList
        }).then(users => {
            user = users[0]
            console.log("Response from updateUser", user)
            const payload ={
                id: id,
                username: user.username,
                name: user.name,
                img: user.img,
                email: user.email,
                bio: user.bio,
                socialList: user.social_list
            }
            req.session.user = payload;
            res.status(200).json(payload)
        }).catch(err => {
            console.log("Error in peopleController.updateUser", err)
        })
    }
}