# Plan

## Imports 
- axios
- react-redux
- redux
- express
- express-session
- dotenv
- massive
- bcrypt 
- react-router-dom
- body-parser

## Server Endpoints

* api/auth
* api/events
* api/people

## Database Schema

### User
* id SERIAL
* name TEXT
* password TEXT (hashed with bcrypt)
* email TEXT
* bio TEXT
* img TEXT
* privileges TEXT
* friends JSONB

### Event
* id SERIAL
* owner_id INT ref user_id
* location TEXT
* description TEXT
* start_time TIMESTAMP
* end_time TIMESTAMP
* private BOOL
* Socket text

### Direct_Message_Lobby 
* id SERIAL
* user_1 ref user_id
* user_2 ref user_id
* Socket text

### EventMessageHistory
* id SERIAL
* event_id
* author_id ref user_id
* message TEXT
* created_time TIMESTAMP

### DM_MessageHistory
* id SERIAL
* lobby_id
* author_id ref user_id
* message TEXT
* created_time TIMESTAMP

### received_messaged
(FOR NOTIFICATIONS)
* id SERIAL
* recipient_id ref user_id
* lobby_id or Socket thing?
* is_read BOOL

