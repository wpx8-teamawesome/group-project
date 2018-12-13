const socketController = require('../controllers/socketController');
const io_client = require("socket.io-client");
const io_server = require("socket.io").listen(4001);
const testInit = require('../../test/init');


describe('Socket IO Tests', () => {
    let socket;
	let db;

	function clearDatabase() {
        return db.query('DELETE from message_history;')
    };


	beforeAll(() => {
		io_server.on('connect', socket => {
			socket.join('test_room');
		});

        return testInit.initDb().then(database => {
            db = database;
        })
	});
	
	beforeEach(function(done) {
		// Setup
		
		socket = io_client.connect(
			"http://localhost:4001",
			{
				"reconnection delay": 0,
				"reopen delay": 0,
				"force new connection": true
			}
		);

		socket.on("connect", () => {
			done()
		});

		socket.on("disconnect", () => {
			// console.log('disconnected...');
		});
		return clearDatabase();
	});

	afterEach((done) => {
		// Cleanup
		if (socket.connected) {
			socket.disconnect();
		}
		
		done();
	});

	afterAll(done => {
		io_server.close();
		done();
	})
    
    describe('creates new message with timestamp', () => {

		it('checks for timestamp on message', (done) => {
			let message = {
				userId: 1,
				name: 'big daddy d',
				room: "test_room",
				message: "Hey girl",
				img: ''
			};

			socketController.addMessage(io_server, message, {
				get: () => db
			});

			socket.on('message', message => {
				expect(message).toEqual({
					id: expect.any(Number),
					name: 'big daddy d',
					room: 'test_room',
					message: 'Hey girl',
					img: '',
					time: expect.any(String)  // checking here
				})
				done();
			})
		})
	})

	describe('fetches chat history', () => {
		it('gets chat history on joining room', done => {
			socket.on('chat-history', array => {
				expect(array.length).toBe(1)
				done()
			})

			const custom_socket = {
				join: lobby => expect(lobby).toBe('test_room')
			}
			//console.log('socket', socket);
			console.log('rooms?', io_server);
			socketController.joinRoom(custom_socket, io_server, { socket_room:'test_room' }, {get: ()=> db})
		})
	})

})