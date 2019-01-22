insert into users(username, password, email, location) values (
    ${username}, ${password}, ${email}, ${latLng}
) returning *;

