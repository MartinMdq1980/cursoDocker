CREATE DATABASE cursodockerapp;
USE cursodockerapp;

CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    contraseña VARCHAR(255) NOT NULL
);

--crear usuario userDocker con pass Leonel2008