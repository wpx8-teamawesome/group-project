update events set socket_room = ${room}
where id = ${id} returning *;