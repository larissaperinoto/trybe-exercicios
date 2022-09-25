/* EXERCÍCIOS DO DIA COM JOIN */

--- 1
SELECT
	t1.movie_id,
	t1.domestic_sales,
    t2.international_sales
FROM Pixar.BoxOffice AS t1
INNER JOIN Pixar.BoxOffice AS t2
ON t1.movie_id = t2.movie_id;

--- 2
SELECT
	t1.movie_id,
    (t2.international_sales + t1.domestic_sales) AS total_sales
FROM Pixar.BoxOffice AS t1
INNER JOIN Pixar.BoxOffice AS t2
ON t1.movie_id = t2.movie_id
WHERE t2.international_sales > t1.domestic_sales;

--- 3
SELECT
	t1.title,
    t2.rating
FROM Pixar.Movies AS t1
INNER JOIN Pixar.BoxOffice AS t2
ON t1.id = t2.movie_id;

--- 4
SELECT
	t1.name,
	t1.location,
	t2.title
FROM Pixar.Theater AS t1
LEFT JOIN Pixar.Movies AS t2
ON t2.theater_id = t1.id
ORDER BY t1.name;

--- 5
SELECT
	t1.name,
	t1.location,
	t2.title
FROM Pixar.Theater AS t1
Right JOIN Pixar.Movies AS t2
ON t2.theater_id = t1.id
ORDER BY t1.name;
