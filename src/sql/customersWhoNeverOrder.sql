CREATE SCHEMA customer_who_never_order;

CREATE TABLE
  customer_who_never_order."Customers" ("id" INT PRIMARY KEY, "name" VARCHAR(50));

CREATE TABLE
  customer_who_never_order."Orders" ("id" INT PRIMARY KEY, "customerId" INT);

INSERT INTO
  customer_who_never_order."Customers" ("id", "name")
VALUES
  (1, 'Joe'),
  (2 'Henry'),
  (3, 'Sam'),
  (4, 'Max');

INSERT INTO
  customer_who_never_order."Orders" ("id", "customerId")
VALUES
  (1, 3),
  (2, 1);

-- https://leetcode.com/problems/customers-who-never-order/
SELECT
  c."id",
  c."name"
FROM
  customer_who_never_order."Customers" c
  LEFT JOIN customer_who_never_order."Orders" o ON c."id" = o."customerId"
WHERE
  o."customerId" is null