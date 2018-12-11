select users.id, users.username, users.email, users.name, users.img, users.location
from users 
inner join event_attendance on users.id = event_attendance.attendee_id and event_attendance.event_id = $1