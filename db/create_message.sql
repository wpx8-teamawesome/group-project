insert into message_history (socket_room, author_id, name, img, message)
values ( ${room}, ${userId}, ${name}, ${img}, ${message}) returning *;

/*  Message has auto-generated timestamps but we can supply it with javascripts `new Date()` if that makes more sense */