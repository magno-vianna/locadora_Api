INSERT INTO directors (id, name) VALUES (1, 'Steven Spielberg');
INSERT INTO directors (id, name) VALUES (2, 'James Cameron');
INSERT INTO directors (id, name) VALUES (3, 'Quentin Tarantino');
INSERT INTO directors (id, name) VALUES (4, 'David Fincher');
INSERT INTO directors (id, name) VALUES (5, 'Francis Ford Coppola');

INSERT INTO genres (id, type) VALUES (1, 'Ação');
INSERT INTO genres (id, type) VALUES (2, 'Aventura');
INSERT INTO genres (id, type) VALUES (3, 'Comédia');
INSERT INTO genres (id, type) VALUES (4, 'Drama');
INSERT INTO genres (id, type) VALUES (5, 'Fantasia');
INSERT INTO genres (id, type) VALUES (6, 'Ficção Científica');
INSERT INTO genres (id, type) VALUES (7, 'Musical');
INSERT INTO genres (id, type) VALUES (8, 'Romance');
INSERT INTO genres (id, type) VALUES (9, 'Animação');

INSERT INTO films (id, id_director, title, lease_cost, id_genre, availability) VALUES (1, 5, 'Velocidade Máxima', 5.40, 1, 'available');
INSERT INTO films (id, id_director, title, lease_cost, id_genre, availability) VALUES (2, 5, 'Velocidade Máxima', 5.40, 1, 'available');
INSERT INTO films (id, id_director, title, lease_cost, id_genre, availability) VALUES (3, 2, 'A Jornada', 5.40, 6, 'available');
INSERT INTO films (id, id_director, title, lease_cost, id_genre, availability) VALUES (4, 1, 'Borat: Fita de Cinema Seguinte', 5.40, 3, 'available');
INSERT INTO films (id, id_director, title, lease_cost, id_genre, availability) VALUES (5, 4, 'Soul', 5.40, 9, 'available');
INSERT INTO films (id, id_director, title, lease_cost, id_genre, availability) VALUES (6, 3, 'O Som do Silêncio', 5.40, 4, 'available');
INSERT INTO films (id, id_director, title, lease_cost, id_genre, availability) VALUES (7, 1, 'Um Lindo Dia na Vizinhança', 5.40, 4, 'available');
INSERT INTO films (id, id_director, title, lease_cost, id_genre, availability) VALUES (8, 1, 'Bad Boys Para Sempre', 5.40, 1, 'available');
INSERT INTO films (id, id_director, title, lease_cost, id_genre, availability) VALUES (9, 2, 'Aves de Rapina', 5.40, 1, 'available');
