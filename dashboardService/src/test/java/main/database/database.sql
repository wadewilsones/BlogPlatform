
create database posts;

use posts;

create table posts(
post_id d AUTO_INCREMENT INTEGER PRIMARY KEY,
post_title VARCHAR(50),
post_content TEXT,
date_created DATETIME,
updated_date DATETIME,
author_id INTEGER,
post_picture BLOB,
tags VARCHAR (70),
);


CREATE TABLE TAGS (
tag_id INT AUTO_INCREMENT PRIMARY KEY,
tag_name VARCHAR(40)
);


CREATE TABLE CATEGORY (
category_id INT AUTO_INCREMENT PRIMARY KEY,
category_name VARCHAR(40));


INSERT INTO posts (post_title, post_content, date_created, updated_date, author_id) VALUES
("My first Post",
"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
NOW(),
NOW(),
1);

INSERT INTO posts (post_title, post_content, date_created, updated_date, author_id) VALUES
("Machine Learning Boom",
"One of the key advantages of machine learning is its ability to handle complex and large datasets, enabling it to uncover hidden patterns and relationships that might not be apparent to human analysts. Machine learning algorithms can be applied to various domains, including image and speech recognition, natural language processing, recommendation systems, fraud detection, and autonomous vehicles.",
NOW(),
NOW(),
1);


INSERT INTO posts (post_title, post_content, date_created, updated_date, author_id) VALUES
("I love my puppy!",
"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
NOW(),
NOW(),
1);



INSERT INTO TAGS (tag_name) VALUES
("Technology");
INSERT INTO TAGS (tag_name) VALUES
("Animals");
INSERT INTO TAGS (tag_name) VALUES
("Machine Learning");
INSERT INTO TAGS (tag_name) VALUES
("WEB");