--- Criando o banco
CREATE DATABASE IF NOT EXISTS albuns_da_lari;

--- Adicionando tabelas

USE albuns_da_lari;

CREATE TABLE artista(
	artista_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50)
) ENGINE=InnoDB;


CREATE TABLE albuns_da_lari.estilomusical (
	estilo_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

--- Criando tabela com chave estrangeira

CREATE TABLE album (
	album_id INT PRIMARY KEY AUTO_INCREMENT,
    artist_id INT NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    preco decimal(5,2) NOT NULL,
    estilo_id INT NOT NULL,
    FOREIGN KEY (artist_id) REFERENCES artista(artista_id),
    FOREIGN KEY (estilo_id) REFERENCES estilomusical(estilo_id)
) 	ENGINE=InnoDB;
