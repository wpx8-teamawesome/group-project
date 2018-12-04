const authController = require('../controllers/authController');
const testInit = require('../../test/init');




describe("integration tests", () => {
    let db;
    // function clearDatabase() {
    //     return db.query('DELETE from users')
    // };

    beforeAll(() => {
        testInit.initDb().then(database => {
            console.log("--------------------------------------------", database)
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
            const req = {
                app: {
                    get: () => db
                },
                body: {username, password, email}
            };

            const res = {
                json: function(user) {
                    expect(data).toMatchObject({
                        username,
                        email,
                        password
                    });
                    done();
                }
            };
            authController.registerUser(req, res);
        })
    })

});