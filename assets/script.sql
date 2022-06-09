CREATE DATABASE mercadoweb;

CREATE TABLE frutas (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL,
    ruta_imagen VARCHAR(50) NOT NULL
);

CREATE TABLE bolsa (
    id SERIAL PRIMARY KEY,
    id_fruta_fk SMALLINT NOT NULL REFERENCES frutas(id)
);

BEGIN TRANSACTION;
INSERT INTO frutas (nombre, ruta_imagen) VALUES ('Banana','/banana.png');
INSERT INTO frutas (nombre, ruta_imagen) VALUES ('Cebolla','/cebollas.png');
INSERT INTO frutas (nombre, ruta_imagen) VALUES ('Lechuga', '/lechuga.png');
INSERT INTO frutas (nombre, ruta_imagen) VALUES ('Papa','/papas.png');
INSERT INTO frutas (nombre, ruta_imagen) VALUES ('Pimenton','/pimenton.png');
INSERT INTO frutas (nombre, ruta_imagen) VALUES ('Tomate','/tomate.png');
COMMIT;