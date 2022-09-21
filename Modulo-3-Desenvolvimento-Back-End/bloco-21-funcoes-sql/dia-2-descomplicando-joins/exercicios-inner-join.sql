/* EXERCÍCIOS DE FIXAÇÃO */

--- Utilizando o INNER JOIN

--- 1
SELECT actor.actor_id, actor.first_name, film.film_id
FROM sakila.actor AS actor
INNER JOIN sakila.film_actor AS film
ON actor.actor_id = film.actor_id;

--- 2
SELECT t1.first_name, t1.last_name, t2.address
FROM sakila.staff AS t1
INNER JOIN sakila.address AS t2
ON t1.address_id = t2.address_id;

--- 3
SELECT t1.first_name, t1.last_name, t1.email, t2.address_id, t2.address
FROM sakila.customer AS t1
INNER JOIN sakila.address AS t2
ON t1.address_id = t2.address_id
ORDER BY first_name DESC
LIMIT 100;

--- 4
SELECT t1.first_name, t1.email, t2.address_id, t2.address, t2.district
FROM sakila.customer AS t1
INNER JOIN sakila.address AS t2
ON t1.address_id = t2.address_id
WHERE t2.district = 'California'
AND t1.first_name LIKE '%rene%';

--- 5
SELECT t1.first_name, COUNT(t2.address) AS quantity
FROM sakila.customer AS t1
INNER JOIN sakila.address AS t2
ON t1.address_id = t2.address_id
WHERE t1.active = 1
GROUP BY t1.customer_id
ORDER BY t1.first_name DESC;

--- 6
SELECT t2.first_name, t2.last_name, AVG(t1.amount) AS media_pagamento
FROM sakila.payment AS t1
INNER JOIN sakila.staff AS t2
ON t1.staff_id = t2.staff_id
WHERE YEAR(t1.payment_date) = 2006
GROUP BY t2.staff_id;

--- 7

