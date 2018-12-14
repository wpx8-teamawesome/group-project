select *, (select count (*) from event_attendance where event_attendance.event_id = events.id) 
as attendance_count
from events 
join users on events.owner_id = users.id 
where events.start_time >= current_timestamp
