drop table if exists users cascade;
drop table if exists events cascade;
drop table if exists direct_message_chats cascade;
drop table if exists event_message_history;
drop table if exists dm_message_history;

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
    title text,
    owner_id int references users(id),
    location text,
    description text,
    start_time timestamp, 
    end_time timestamp,
    private bool,
    socket_room text
);

create table if not exists direct_message_lobby (
    id serial primary key,
    user_1 int references users (id) on delete cascade,
    user_2 int references users (id) on delete cascade,
    socket_room text
);

create table if not exists event_message_history (
    id serial primary key,
    event_id int references events (id) on delete cascade,
    author_id int references users (id) on delete cascade,
    message text,
    created_time timestamp default current_timestamp
);

create table if not exists dm_message_history (
    id serial primary key,
    lobby_id int references direct_message_lobby(id) on delete cascade,
    author_id int references users (id) on delete cascade,
    message text,
    created_time timestamp default current_timestamp
);

create table if not exists received_messages (
    id serial primary key,
    recipient_id int references users(id) on delete cascade,
    socket_room text,
    is_read bool
    
)

-- /* EXAMPLES */
-- insert into users (name, social_list)
-- values ('Travis', '{"following":[{"34": "Matt"}], "blocked":["MATT"]}');

-- insert into dm_message_history (author_id, message)
-- values(1, 'Hello Freakin World');

-- /* Example of how to access jsonb */
-- select social_list->'blocked' from users;

-- /* Cascading works */
-- delete from users where id = 1;
-- select * from users
-- select * from dm_message_history;

