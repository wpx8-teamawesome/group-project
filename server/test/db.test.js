const authController = require('../controllers/authController');
const testInit = require('../../test/init');
const bcrypt = require('bcrypt');

describe("integration tests", () => {
    let db;
     
    function clearDatabase() {
        return db.query('DELETE from users')
    };

    function addTestUser() {
        const hashedPassword = '$2b$12$t5PtHHis7Wph4LzwxgiMvOCbBbD4I6TSjOB/ubA6NyH/kBBWLkFIS'
        return db.query(`Insert into users(username, password) values('testuser', '${hashedPassword}');`)
    }

    beforeAll(() => {
        return testInit.initDb().then(database => {
            db = database;
        })
    });
    

    beforeEach(() => {
        return clearDatabase();
    });

    describe('bcrypt', () => {

        it('successfully registers user', (done) => {
            const username = "testUser";
            const password = "testpassword"
            const email = "test@email.com"
            const latLng= { lat: 1, lng: 2}
            const req = {
                app: {
                    get: () => db
                },
                body: {
                    username,
                    password,
                    email,
                    latLng
                },
                session: { user : {
                    // dummy
                }}
            };

            const res = {
                json: function(user) {
                    expect(user).toMatchObject({
                        username,
                        email,
                        password: bcrypt.hash(password, 12)
                    });
                    done();
                },
                status(num) {
                    expect(num).toBe(200);
                    return res;
                }
            };
            authController.registerUser(req, res);
        })

        it('does not register if username exists', (done) => {
            addTestUser().then((user) => {
                const username = "testuser";
                const req = {
                    app: {
                        get: () => db
                    },
                    body: {
                        username
                    },
                    session: { user : {
                        // dummy
                    }}
                };
                const res = {
                    json: function(msg) {
                        expect(msg).toMatchObject({message: "Username is unavailable"})
                        done();
                    }
                };
                authController.registerUser(req, res)
            } )
        });

        it('Returns Username does not exist message', (done) => {
            const username = "testuser";
            const req = {
                app: {
                    get: () => db
                },
                body: {
                    username
                },
                session: { user : {
                    // dummy
                }}
            };

            const res = {
                json: function(msg) {
                    expect(msg).toMatchObject({message: "Username Does Not Exist. Please Click Register To Create an Account."})
                    done();
                }
            }
            authController.loginUser(req, res)
        });

        it('returns authorized user', (done) => {
            addTestUser().then(tUser => {
                const username = "testuser"
                const password = "password"
                const req = {
                    app: {
                        get: () => db
                    },
                    body: {
                        username,
                        password
                    },
                    session: { user : {
                        // dummy
                    }}
                };

                const res = {
                    json: function(userObject) {
                        const password = '$2b$12$t5PtHHis7Wph4LzwxgiMvOCbBbD4I6TSjOB/ubA6NyH/kBBWLkFIS'
                        const newObj = {
                            username: userObject.username,
                            password: userObject.password
                        }
                        expect(newObj).toMatchObject({
                            username: username, 
                            password: password
                        })
                        done();
                    }
                }
                authController.loginUser(req, res)
            })
        });

        it('returs failure message if username/password do not match', (done) => {
            addTestUser().then(() => {
                const username = "testuser"
                const password = "password"
                const req = {
                    app: {
                        get: () => db
                    },
                    body: {
                        username,
                        password
                    },
                    session: { user : {
                        // dummy
                    }}
                };

                const res = {
                    json: function(userObject) {
                        const password = 'Wrong Password'
                        const newObj = {
                            username: userObject.username,
                            password: userObject.password
                        }
                        expect(newObj).not.toMatchObject({
                            username: username, 
                            password: password
                        })
                        done();
                    }
                }
                authController.loginUser(req, res)
            })
        })
    })

});