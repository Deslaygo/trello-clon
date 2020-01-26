create database db_trello;

use db_trello;
/*Creación de la tabla tableros*/
create TABLE tableros(
    id int not NULL auto_increment primary KEY,
    nombre varchar(150) not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
);
/*Creación de la tabla para las listas*/
CREATE TABLE listas(
    id int not null AUTO_INCREMENT PRIMARY KEY,
    nombre varchar(150) not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_tablero int not null
);
/*Creación de la tabla para las tareas*/
CREATE TABLE tareas(
    id int not null AUTO_INCREMENT PRIMARY KEY,
    nombre varchar(256) not null,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_lista int not null
);
/*Creacion de las llaves foraneas con alter table*/
/*Llave foranea que viene de tableros hacia listas (relación de uno a muchos)*/
alter table listas add CONSTRAINT fk_tableros_listas FOREIGN KEY(id_tablero) REFERENCES tableros(id);
/*Llave foranea que viene de listas hacia tareas (relación de uno a muchos )*/
ALTER TABLE tareas add CONSTRAINT fk_listas_tareas FOREIGN KEY(id_lista) REFERENCES listas(id);
