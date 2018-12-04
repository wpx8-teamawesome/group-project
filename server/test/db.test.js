const authController = require('../controllers/authController');
const testInit = require('../../test/init');
const bcrypt = require('bcrypt');

describe("integration tests", () => {
    let db;
    function clearDatabase() {
        return db.query('DELETE from users')
    };

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
            const req = {
                app: {
                    get: () => db
                },
                body: {username, password, email}
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
    })

});