-- CREATE DATABASE pernstack;

--\c pernstack

CREATE TABLE todo(
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);

insert into todo(description) values('Estudiar');