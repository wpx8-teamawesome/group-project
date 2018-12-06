drop table if exists users cascade;
drop table if exists events cascade;
drop table if exists direct_message_chats cascade;
drop table if exists event_message_history;
drop table if exists dm_message_history;
drop table if exists message_history;

create table if not exists users (
    id serial primary key,
    username text,
    password text,
    email text,
    name text,
    bio text,
    img text,
    privileges text,
    social_list jsonb
);

create table if not exists events (
    id serial primary key,
    owner_id int references users(id),
    title text,
    description text,
    location text,
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
    author_id int, /* Could make this reference user but if the user removes an account it will affect how this works */
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

-- /* EXAMPLES */
-- insert into users (name, social_list)
-- values ('Travis', '{"following":[{"34": "Matt"}], "blocked":["MATT"]}');

-- insert into events(owner_id, title, description, location, socket_room) 
-- values( 1, 'My First Event', 'Here is a desc', '101 N St.', 'event-1');

-- /* Example of how to access jsonb */
-- select social_list->'blocked' from users;

-- select * from users
-- select * from message_history;
-- select * from events;

