insert into message_history (socket_room, author_id, name, img, message)
values ( ${room}, ${userId}, ${name}, ${img}, ${message}) returning *;