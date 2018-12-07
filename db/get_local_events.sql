select * from events
where
(location ->> 'lat')::float < ${highLat} and (location ->> 'lat')::float > ${lowLat}
and 
(location ->> 'lng')::float < ${highLng} and (location ->> 'lng')::float > ${lowLng}