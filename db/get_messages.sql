select * from message_history
where socket_room =
(select socket_room from events
where id = ${eventId});