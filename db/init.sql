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
    socket_room text, 
    image_url text
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

insert into users ( username, password, email, name, bio, location, img)
values ('TStrat', '1234', 'T@Strat.com', 'Travis', 'I am the very best', '{"lat": 33.438649, "lng": -112.088319}', 'https://www.ssbwiki.com/images/thumb/a/a0/FRLGMaleTrainer.png/200px-FRLGMaleTrainer.png'),
('GilTheStrap', '4321', 'matty@traxter.tech', 'Matt G.', 'What is a "pull request"?', '{"lat": 33.438649, "lng": -112.088319}', 'https://mk0barbendl86qlfmi9n.kinstacdn.com/wp-content/uploads/2016/09/Screen-Shot-2016-09-13-at-9.56.16-AM.png'),
('E-to-the-Than', '4231', 'Ethan@likesSpace.com', 'Ethan', 'I like to code.  I like space too', '{"lat": 33.438649, "lng": -112.088319}', 'https://3c1703fe8d.site.internapcdn.net/newman/csz/news/800/2017/49-scientistsde.jpg'),
('testuser19', '$2b$12$BThVbWsZpKH0/8ufauMQP.laaO4Mq9PPDCtc4pSln9n3o5dX9TFIO', 'testuser19@email.com', 'Englebert Humperdink', 
'Engelbert Humperdinck never wanted to be a singer. A career in music, yes, but he was extraordinarily shy. The youngest boy of a family of ten children originally from Leicester, England, he grew up in Madras, India, where his father was stationed during World War II. Engelbert’s childhood was dominated by the love of his parents and his brothers and sisters. He knew he could sing harmonies, but the power of his own voice came as a surprise to him and other people. “It`s just so loud, but I discovered I can be tender with it at the same time.” Like all great icons, he is a man of great depth – masculine and loving, shy inside and uninhibited onstage, prepared to play the sex god to the hilt and still, at this stage of his career, managing to get away with it. “My mother’s side of the family had the signing voice so I must have inherited that from her. My father was a man’s man – strong, athletic, charismatic. And I like to do all kind of men things. I love sports, golf, tennis martial arts, soccer, skiing, but at the same time, yes I do appreciate women.”', 
'{"lat": 59.9342802, "lng": 30.3350986}', 'https://res.cloudinary.com/dzyljunq0/image/upload/v1544657768/o1hpou2cteop0pbirc7x.jpg'),
('T$', 'tmoney', 'tyler@rocks.com', 'Tyler Collier', 'I love teaching, coding, sweet talking to my beautiful computer, and Techno Jazzercise with singing and sparkles.', '{"lat": 33.438649, "lng": -112.088319}', 'https://pbs.twimg.com/profile_images/378800000861672234/6PlOuezZ_400x400.jpeg');

insert into events (owner_id, title, description, address, location, start_time, end_time, socket_room, image_url)
values(1, 'Gold Plating: All its cracked up to be?', 'A brief history of the gold craze and why its used in electronics today', '1299-1101 W hadley St, Phoenix, AZ 85007', '{"lat": 33.438649, "lng": -112.088319}', 'Fri Dec 07 2018 12:21:05 GMT','Sat Dec 07 2019 12:20:01 GMT', 'event-1', 'http://gemstoneslab.com/wp-content/uploads/2016/04/Tiger-Eye-Gold-Random-800x600.jpg'),
(3, 'Code cracking 101', 'A walk through decryption tactics used in language parsing', '2000-2098 W Maricopa St, Phoenix, AZ 85009', '{"lat": 33.437884, "lng": -112.103226}', 'Fri Dec 07 2018 12:21:05 GMT', 'Sat Dec 08 2018 12:21:05 GMT', 'event-2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFnLOgYMTwUaZ7QHMTMj7zo-47-QkOILqvYDcYpS5nPb6ByI0k1A'),
(2, 'Weird lobster', 'Meet the lobster man', '601-799 N 10th Ave, Phoenix, AZ 85007', '{"lat": 33.456437, "lng": -112.086078}', 'Mon Jan 07 2019 03:30:30 GMT', 'Mon Jan 07 2019 03:30:30 GMT','event-3', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMceYgTVNR2V51OCosOvLkSxzQG7kmnJqjGpwvVvfCcF1Kj2xA'),
(5, 'Tyler Colliers Techno Jazzercise Sing Along Sparkle Princess Extravaganza', 'Why hello, ladies.  Do you like to work out? Do you like sexy coders?  Do you like pretty sparkles and a silky smooth voice?  Then join me for a night you wont soon forget.', '101 N 1st Ave STE 2075, Phoenix, AZ 85003', '{"lat": 33.449620, "lng": -112.075400}', 'Mon Jan 07 2019 03:30:30 GMT', 'Fri Jan 11 2019 08:30:30 GMT', 'event-4', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxlyqRJpMw5CtC2Ao_Q4ASYRRCLN2HLe_269Mrpmdi0dmDywa-_Q'),
(2, 'Pattern Matching', 'Can you hanlde the crazy?', '1110 N 16th St, Phoenix, AZ 85006', '{"lat": 33.4609596, "lng": -112.0483357}', 'Mon Jan 07 2019 08:30:30 GMT', 'Mon Jan 07 2019 09:30:30 GMT','event-5', 'https://cdn.dribbble.com/users/357265/screenshots/3947486/171001_v4-03.png'),
(4, 'Daft Punk', '... enough said.', '1820 W Van Buren St, Phoenix, AZ 85007', '{"lat": 33.4517135, "lng": -112.0988383}', 'Tue Jan 15 2019 09:30:30 GMT', 'Wed Jan 16 2019 10:30:30 GMT', 'event-6', 'https://static.esea.net/global/images/teams/8699791.1505777539.png'),
(2, 'Coders who get Outside', 'I mean... if you arent scared of a little sun...', '799-701 S 13th Ave, Phoenix, AZ 85007', '{"lat": 33.4398698, "lng":-112.089162}', 'Tue Jan 15 2019 08:30:30 GMT', 'Tue Jan 15 2019 09:30:30 GMT', 'event-7', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCwbrOGQJ8JSe_NaPuMjl5yUdJAa-vv058BKixkSGbJHV55EM9fA'),
(3, 'Learn Canvas', 'Canvas is awesome! Come learn it today!', '723 S 7th Ave, Phoenix, AZ 85007', '{"lat": 33.4403019, "lng": -112.0818697}', 'Mon Jan 21 2019 03:30:30 GMT', 'Mon Jan 21 2019 09:30:30 GMT', 'event-8', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnzrRPahz6WENtQcy4uV2q4XRA0sXNfeUh6ZVfz84DnmCHg1GA2Q'),
(4, 'Something Strange is happening...', '[ERROR- 404 NOT FOUND]', '420 W Buckeye Rd, Phoenix, AZ 85003', '{"lat": 51.178883, "lng": -1.826215}', 'Mon Jan 21 2019 010:30:30 GMT', 'Mon Jan 21 2019 11:30:30 GMT', 'event-9', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsLWz2PfImA7fOkiE0_SrtYO8Uhb3R69g_Tz-hUo_JJHHB-INj'),
(1, 'Constructing a Perfect Pyramid', 'The egyptians did it the right way.  Lets fix that...', '1880 S 7th Ave, Phoenix, AZ 85007', '{"lat":  29.979235, "lng":  31.134201}', 'Tue Jan 22 2019 08:30:30 GMT', 'Tue Jan 22 2019 09:30:30 GMT', 'event-10', 'http://www.freakingnews.com/pictures/20000/Round-Pyramids-in-Egypt--20480.jpg'),
(2, 'Hiking and Tech Talks on the Cammels back', 
'Ornare aenean euismod elementum nisi quis. At quis risus sed vulputate odio ut. Nunc sed id semper risus. In hac habitasse platea dictumst quisque sagittis purus sit amet. Dictum varius duis at consectetur lorem donec massa sapien faucibus. Amet luctus venenatis lectus magna fringilla. Tortor at auctor urna nunc. Massa tincidunt dui ut ornare lectus sit amet est. Turpis cursus in hac habitasse. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Diam vel quam elementum pulvinar etiam. Amet nisl purus in mollis nunc sed id semper risus. Sodales neque sodales ut etiam sit amet nisl purus in.\nTortor id aliquet lectus proin nibh nisl condimentum. Amet venenatis urna cursus eget nunc. Sit amet luctus venenatis lectus. At consectetur lorem donec massa. Eget sit amet tellus cras adipiscing enim. Enim nec dui nunc mattis enim ut. Vitae congue mauris rhoncus aenean. Fringilla ut morbi tincidunt augue interdum velit. Neque viverra justo nec ultrices dui sapien eget mi proin. Turpis massa sed elementum tempus egestas sed sed risus. Nulla facilisi cras fermentum odio eu feugiat pretium. Erat velit scelerisque in dictum non consectetur a erat.\nSit amet justo donec enim diam vulputate ut. Sem viverra aliquet eget sit. In eu mi bibendum neque egestas congue quisque. Et malesuada fames ac turpis egestas maecenas pharetra convallis. Sed odio morbi quis commodo odio aenean sed adipiscing diam. Ultricies leo integer malesuada nunc vel risus commodo viverra. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Dictum varius duis at consectetur lorem donec massa sapien faucibus. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Pellentesque nec nam aliquam sem et tortor. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Quis lectus nulla at volutpat diam ut venenatis tellus. Volutpat lacus laoreet non curabitur gravida arcu ac tortor. Purus in massa tempor nec. Leo urna molestie at elementum eu. Cursus euismod quis viverra nibh cras pulvinar mattis. Nullam ac tortor vitae purus faucibus ornare suspendisse sed. Hac habitasse platea dictumst quisque sagittis purus. Nisi lacus sed viverra tellus in hac.', 
'725 5th Ave, New York, NY 10022', '{"lat": 42.395681, "lng": -105.754658}','Tue Jan 22 2019 08:30:30 GMT', 'Tue Jan 22 2019 09:30:30 GMT', 'event-11', 'https://i.pinimg.com/originals/c1/a1/8a/c1a18a9e2d18a0339768f88fb168bba5.jpg');

