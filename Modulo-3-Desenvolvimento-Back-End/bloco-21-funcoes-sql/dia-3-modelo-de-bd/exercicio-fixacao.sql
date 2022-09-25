--- Criando o banco de dados e inserindo valores

CREATE DATABASE IF NOT EXISTS Pastelaria;

CREATE TABLE Pastelaria.funcionarios (
	id_funcionario INT PRIMARY KEY,
	nome VARCHAR(45) NOT NULL,
	sobrenome VARCHAR(45) NOT NULL,
    email VARCHAR(50) NOT NULL,
    telefone VARCHAR(50) NOT NULL
) engine = InnoDB;

CREATE TABLE Pastelaria.cadastros (
	id_cadastro INT PRIMARY KEY AUTO_INCREMENT,
	id_funcionario INT NOT NULL,
	data_cadastro DATE NOT NULL,
	hora_cadastro TIME,
    FOREIGN KEY (id_funcionario) REFERENCES funcionarios (id_funcionario)
) engine = InnoDB;

CREATE TABLE Pastelaria.setores (
	id_setor INT PRIMARY KEY AUTO_INCREMENT,
	setor VARCHAR(45) NOT NULL,
    id_funcionario INT NOT NULL,
    FOREIGN KEY (id_funcionario) REFERENCES funcionarios (id_funcionario)
) engine = InnoDB;

INSERT INTO Pastelaria.funcionarios (id_funcionario, nome, sobrenome, email, telefone)
VALUES
	(12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445'),
    (13, 'André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996'),
    (14, 'Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669'),
    (15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556');

INSERT INTO Pastelaria.cadastros (id_funcionario, data_cadastro, hora_cadastro)
VALUES
	(12, '2020-05-05', '08:50:25'),
    (13, '2020-02-05', NULL),
    (14, '2020-05-05', '10:55:35'),
    (15, '2020-05-05', '11:45:40');

INSERT INTO Pastelaria.setores (setor, id_funcionario)
VALUES
	('Administração', 12),
    ('Vendas', 12),
    ('Operacional', 13),
    ('Estratégico', 14),
    ('Vendas', 14),
    ('Marketing', 15);