CREATE SCHEMA employees_earning_more_than_their_managers;

CREATE TABLE
  employees_earning_more_than_their_managers."Employee" (
    "id" INT PRIMARY KEY,
    "name" VARCHAR(50),
    "salary" INT,
    "managerId" INT
  );

INSERT INTO
  employees_earning_more_than_their_managers."Employee" ("id", "name", "salary", "managerId")
VALUES
  ('1', 'Joe', 70000, 3),
  ('2', 'Henry', 80000, 4),
  ('3', 'Sam', 60000, null),
  ('4', 'Max', 70000, null);

-- https://leetcode.com/problems/employees-earning-more-than-their-managers/
SELECT
  e1."name"
FROM
  employees_earning_more_than_their_managers."Employee" e1
  INNER JOIN employees_earning_more_than_their_managers."Employee" e2 ON e1."managerId" = e2."id"
WHERE
  e1."salary" > e2."salary"