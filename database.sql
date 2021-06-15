-- CREATE DATABASE pernstack;

--\c pernstack

CREATE TABLE todo(
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);

insert into todo(description) values('Estudiar');



-- para login
CREATE DATABASE authtodo;

CREATE TABLE users(
  user_id uuid DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
 
);

CREATE TABLE todo(
  todo_id SERIAL,
  user_id UUID ,
  description VARCHAR(255),
  PRIMARY KEY (todo_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);


INSERT INTO users (user_name, user_email, user_password) VALUES ('henry', 'henryly213@gmail.com', 'kthl8822');



----SAGI

CREATE DATABASE sagi;


CREATE TABLE users(
  id SERIAL,
  username VARCHAR(50) NOT NULL,
  pw VARCHAR(50) NOT NULL,
  create_on TIMESTAMP,
  last_login TIMESTAMP,
  name VARCHAR(50),
  emp_id int
 
);

CREATE TABLE emp(
  id SERIAL,
  name VARCHAR(50),
  lastname VARCHAR(50),
  email VARCHAR(50),
  tel VARCHAR(50),
  cedula VARCHAR(50),
  address VARCHAR(100).
  salary float,
  din date,
  dout date
);

CREATE TABLE items(
  id SERIAL,
  name VARCHAR(50),
  descrip text,
  amount int,
  bprice float,
  sprice float,

)