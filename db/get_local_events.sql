select * from events
inner join users on events.owner_id = users.id 
where
(events.location ->> 'lat')::float < ${highLat} and (events.location ->> 'lat')::float > ${lowLat}
and 
(events.location ->> 'lng')::float < ${highLng} and (events.location ->> 'lng')::float > ${lowLng}


-- select * from events 
-- inner join users on events.owner_id = users.id 
-- where events.id = ${id}

--- make sure we don't get user's password!