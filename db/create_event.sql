insert into events (owner_id, title, description, address, location, start_time, end_time, image_url)
values ( ${ownerId}, ${title}, ${description}, ${address}, ${location}, ${startTime}, ${endTime}, ${imageUrl} ) returning *;

