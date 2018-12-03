const bcrypt = require('bcrypt');
const saltRounds = 12;

module.exports = {
    loginUser: (req, res) => {
        console.log('---authController.loginUser connection---')
    },

    registerUser: (req, res) => {
        console.log('---authController.registerUser connection---')
    },

    logoutUser: (req, res) => {
        console.log('---authController.logoutUser connection---')
    },
}






