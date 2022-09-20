/* EXERCÍCIOS DO DIA */

--- 1
SELECT MAX(salary) FROM hr.employees;

--- 2
SELECT MAX(salary) - MIN(salary) FROM hr.employees;

--- 3
SELECT job_id, AVG(salary) AS media
FROM hr.employees
GROUP BY job_id
ORDER BY media DESC;

--- 4
SELECT SUM(salary) FROM hr.employees;

--- 5
SELECT SUM(salary) AS total,
MAX(salary) AS maior_salario,
MIN(salary) AS menor_salario,
ROUND(AVG(salary), 2) AS media
FROM hr.employees;

--- 6
SELECT job_id, COUNT(*) AS programers FROM hr.employees WHERE job_id = 'IT_PROG';

--- 7
SELECT job_id, sum(salary) AS total_salary FROM hr.employees GROUP BY job_id;

--- 8
SELECT job_id, sum(salary) AS total_salary
FROM hr.employees
GROUP BY job_id
HAVING job_id = 'it_prog';

--- 9
SELECT job_id, AVG(salary) AS media
FROM hr.employees
GROUP BY job_id
HAVING job_id <> 'it_prog'
ORDER BY media DESC;

--- 10
SELECT job_id, AVG(salary) AS media, COUNT(employee_id) AS number_employes
FROM hr.employees
GROUP BY department_id
HAVING number_employes > 10;

--- 11
SET SQL_SAFE_UPDATES = 0;
UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

--- 12
SELECT first_name from hr.employees where char_length(first_name) >= 8;

--- 13SELECT last_name, hire_date
FROM hr.employees
WHERE MONTH(HIRE_DATE)=7 and YEAR(HIRE_DATE)=1987;

--- 18
SELECT first_name, last_name, DATEDIFF(now(), hire_date) AS tempo_de_trabalho FROM hr.employees;
SELECT employee_id, first_name, year(hire_date) AS year FROM hr.employees;

--- 14
SELECT employee_id, first_name, day(hire_date) AS day FROM hr.employees;

--- 15
SELECT employee_id, first_name, MONTH(hire_date) AS month FROM hr.employees;

--- 16
SELECT UCASE(first_name) FROM hr.employees;

--- 17
SELECT last_name, hire_date
FROM hr.employees
WHERE MONTH(HIRE_DATE)=7 and YEAR(HIRE_DATE)=1987;

--- 18
SELECT first_name, last_name, DATEDIFF(now(), hire_date) AS dias_de_trabalho FROM hr.employees;