select * 
from events 
join users on events.owner_id = users.id 
where events.start_time >= $1
