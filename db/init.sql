drop table if exists users cascade;
drop table if exists events cascade;
drop table if exists direct_message_chats cascade;
drop table if exists event_message_history;
drop table if exists dm_message_history;
drop table if exists message_history;
drop table if exists event_attendence cascade; 

create table if not exists users (
    id serial primary key,
    username text,
    password text,
    email text,
    name text,
    bio text,
    img text,
    location jsonb,
    privileges text,
    social_list jsonb default '{ "following": [], "blocked":[] }'
);

create table if not exists events (
    id serial primary key,
    owner_id int references users(id) on delete cascade,
    title text,
    description text,
    address text,
    location jsonb,
    start_time timestamp, 
    end_time timestamp,
    private bool default false,
    socket_room text
);

create table if not exists direct_message_lobby (
    id serial primary key,
    user_1 int references users (id) on delete cascade,
    user_2 int references users (id) on delete cascade,
    socket_room text
);

create table if not exists message_history (
    id serial primary key,
    socket_room text,
    author_id int,
    name text,
    img text,
    message text,
    created_time timestamp default current_timestamp
);


create table if not exists received_messages (
    id serial primary key,
    recipient_id int references users(id) on delete cascade,
    socket_room text,
    is_read bool
);

create table if not exists event_attendance (
    id serial primary key, 
    event_id int references events (id) on delete cascade, 
    attendee_id int references users (id) on delete cascade
); 



-- /* EXAMPLES */

-- insert into dm_message_history (author_id, message)
-- values(1, 'Hello Freakin World');

-- /* Example of how to access jsonb */
-- select social_list->'blocked' from users;

-- /* Cascading works */
-- delete from users where id = 1;
-- select * from users
-- select * from dm_message_history;
-- select * from message_history;
-- select * from events;

-- delete from users;
-- Update users set img = 'http://www.petsworld.in/blog/wp-content/uploads/2014/09/adorable-cat.jpg'
-- where id = 5;

-- select * from events
-- where (location->>'lat')::float > 33.45;


insert into users ( username, password, email, name, bio, location, img)
values ('TStrat', '1234', 'T@Strat.com', 'Travis', 'I am the very best', '{"lat": 33.438649, "lng": -112.088319}', 'https://www.ssbwiki.com/images/thumb/a/a0/FRLGMaleTrainer.png/200px-FRLGMaleTrainer.png');
insert into users ( username, password, email, name, bio, location, img)
values ('GilTheStrap', '4321', 'matty@traxter.tech', 'Matt G.', 'What is a "pull request"?', '{"lat": 33.438649, "lng": -112.088319}', 'https://mk0barbendl86qlfmi9n.kinstacdn.com/wp-content/uploads/2016/09/Screen-Shot-2016-09-13-at-9.56.16-AM.png');
insert into users ( username, password, email, name, bio, location, img)
values ('E-to-the-Than', '4231', 'Ethan@likesSpace.com', 'Ethan', 'I like to code.  I like space too', '{"lat": 33.438649, "lng": -112.088319}', 'https://3c1703fe8d.site.internapcdn.net/newman/csz/news/800/2017/49-scientistsde.jpg');



insert into events (owner_id, title, description, address, location, start_time, end_time, socket_room)
values(1, 'event-1', 'first event', '1299-1101 W hadley St, Phoenix, AZ 85007', '{"lat": 33.438649, "lng": -112.088319}', 'Fri Dec 07 2018 12:21:05 GMT','Sat Dec 07 2019 12:20:01 GMT', 'event-1'),
(1, 'event-2', 'second event', '2000-2098 W Maricopa St, Phoenix, AZ 85009', '{"lat": 33.437884, "lng": -112.103226}', 'Fri Dec 07 2018 12:21:05 GMT', 'Sat Dec 08 2018 12:21:05 GMT', 'event-2'),
(1, 'event-3', 'third event', '601-799 N 10th Ave, Phoenix, AZ 85007', '{"lat": 33.456437, "lng": -112.086078}', 'Mon Jan 07 2019 03:30:30 GMT', 'Mon Jan 07 2019 03:30:30 GMT','event-3'),
(2, 'event-4', 'fourth event', '330 N 16th Ave, Phoenix, AZ 85007', '{"lat": 33.4521625, "lng": -112.0946742}', 'Mon Jan 07 2019 03:30:30 GMT', 'Fri Jan 11 2019 08:30:30 GMT', 'event-4'),
(2, 'event-5', 'fifth event', '1110 N 16th St, Phoenix, AZ 85006', '{"lat": 33.4609596, "lng": -112.0483357}', 'Mon Jan 07 2019 08:30:30 GMT', 'Mon Jan 07 2019 09:30:30 GMT','event-5'),
(2, 'event-6', 'sixth event', '1820 W Van Buren St, Phoenix, AZ 85007', '{"lat": 33.4517135, "lng": -112.0988383}', 'Tue Jan 15 2019 09:30:30 GMT', 'Wed Jan 16 2019 10:30:30 GMT', 'event-6'),
(1, 'event-7', 'seventh event', '799-701 S 13th Ave, Phoenix, AZ 85007', '{"lat": 33.4398698, "lng":-112.089162}', 'Tue Jan 15 2019 08:30:30 GMT', 'Tue Jan 15 2019 09:30:30 GMT', 'event-7'),
(3, 'event-8', 'eighth event', '723 S 7th Ave, Phoenix, AZ 85007', '{"lat": 33.4403019, "lng": -112.0818697}', 'Mon Jan 21 2019 03:30:30 GMT', 'Mon Jan 21 2019 09:30:30 GMT', 'event-8'),
(2, 'event-9', 'ninth event', '420 W Buckeye Rd, Phoenix, AZ 85003', '{"lat": 33.4373842, "lng": -112.0800998}', 'Mon Jan 21 2019 010:30:30 GMT', 'Mon Jan 21 2019 11:30:30 GMT', 'event-9'),
(3, 'event-10', 'tenth event', '1880 S 7th Ave, Phoenix, AZ 85007', '{"lat":  33.4303977, "lng":  -112.0835981}', 'Tue Jan 22 2019 08:30:30 GMT', 'Tue Jan 22 2019 09:30:30 GMT', 'event-10'),
(3, 'event-11', 'new york stuff', '725 5th Ave, New York, NY 10022', '{"lat": 40.762457, "lng": -73.97386999999999}','Tue Jan 22 2019 08:30:30 GMT', 'Tue Jan 22 2019 09:30:30 GMT', 'event-10');



