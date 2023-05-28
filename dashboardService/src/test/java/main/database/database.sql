
create database posts;

use posts;

create table posts(
post_id d AUTO_INCREMENT INTEGER PRIMARY KEY,
post_title VARCHAR(100),
post_content TEXT,
date_created DATETIME,
updated_date DATETIME,
author_id INTEGER,
post_picture BLOB,
tags
);

INSERT INTO posts (post_title, post_content, date_created, updated_date, author_id) VALUES
("My first Post",
"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
NOW(),
NOW(),
1);

INSERT INTO posts (post_title, post_content, date_created, updated_date, author_id) VALUES
("I love my puppy!",
"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
NOW(),
NOW(),
1);