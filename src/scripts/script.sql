CREATE DATABASE locadora;

USE locadora;

CREATE TABLE users
  (
     id       INT auto_increment,
          CONSTRAINT table_name_pk PRIMARY KEY (id),
     name     VARCHAR(50) NOT NULL,
     email    VARCHAR(40) NOT NULL,
     password VARCHAR(250) NOT NULL,
     blocked  BOOLEAN
  );

CREATE UNIQUE INDEX users_email_uindex ON users (email);

CREATE TABLE directors
  (
     id   INT auto_increment,
          CONSTRAINT table_name_pk PRIMARY KEY (id),
     name VARCHAR(50) NOT NULL
  );

CREATE TABLE genres
  (
     id   INT auto_increment,
          CONSTRAINT table_name_pk PRIMARY KEY (id),
     type VARCHAR(50) NOT NULL
  );

CREATE TABLE films
  (
     id           INT auto_increment,
     id_director  INT,
     title        VARCHAR(250) NOT NULL,
     lease_cost   DECIMAL(5, 2) NOT NULL,
     id_genre     INT,
     availability VARCHAR(20) NOT NULL,
     CONSTRAINT films_pk PRIMARY KEY (id),
     CONSTRAINT films_directors_id_director_fk FOREIGN KEY (id_director)
     REFERENCES directors (id),
     CONSTRAINT films_genres_id_genre_fk FOREIGN KEY (id_genre) REFERENCES
     genres (id)
  );

CREATE TABLE rent_registers_users_films
  (
     id                INT auto_increment,
     id_name_user      INT NULL,
     id_title          INT NULL,
     lease_start_at    TIMESTAMP NULL,
     lease_end_at      TIMESTAMP NULL,
     film_delivered_at TIMESTAMP NULL,
     PRIMARY KEY (id),
     CONSTRAINT rent_registers_users_films_fk FOREIGN KEY (id_title) REFERENCES
     films (id),
     CONSTRAINT rent_registers_users_films_users_fk FOREIGN KEY (id_name_user)
     REFERENCES users (id)
  );
