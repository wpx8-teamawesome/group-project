select * from events 
inner join users on events.owner_id = users.id 
where events.id = ${id}

--- make sure we don't get user's password!