insert into event_attendance (event_id, attendee_id)
values ( $1, $2 ) returning *; 