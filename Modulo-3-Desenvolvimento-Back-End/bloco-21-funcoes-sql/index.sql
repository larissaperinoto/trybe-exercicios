/* Manipulando strings - Exercícios de fixação */

-- Usando Uppercase
SELECT UCASE('Trybe');

-- Usando replace
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');

-- Usando CHAR_LENGTH
SELECT character_length('Uma frase qualquer');

-- Usando SUBSTRING
SELECT substring('A linguagem JavaScript está entre as mais usadas', 13, 10);

--Usando LCASE
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');


/* Aplicando Condicionais com SQL */

-- Usando o IF para apenas uma condição

SELECT film_id, title,
IF(title = 'ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheço o filme')
AS 'conheço o filme?'
FROM sakila.film;

-- Usando o CASE para mais de uma condição

SELECT title, rating,
	CASE
    WHEN rating = 'G' THEN 'Livre para todos'
    WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
    WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
    WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
    ELSE 'Proibido para menores de idade'
END AS 'público-alvo'
FROM sakila.film;

-- Experimentando os operadores DIV e MOD

-- Definindo se 15 é par ou ímpar com MOD
SELECT IF(15 MOD 2 = 0, 'É par', 'É ímpar') AS 'Par ou Ímpar';

-- Arredondando valores com DIV
SELECT 200 DIV 12;

SELECT 200 MOD 12;

