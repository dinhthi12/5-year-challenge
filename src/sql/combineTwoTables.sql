CREATE SCHEMA combine_two_tables;

CREATE TABLE combine_two_tables."Person" (
"personId" INT PRIMARY KEY,
"firstName" VARCHAR(50),
"lastName" VARCHAR(50)
);

CREATE TABLE combine_two_tables."Address" (
"addressId" INT PRIMARY KEY,
"personId" INT,
"city" VARCHAR(50),
"state" VARCHAR(50)
);

INSERT INTO combine_two_tables."Person" ("personId", "firstName", "lastName") VALUES
(1, 'Allen', 'Wang'),
(2, 'Bob', 'Alice');

INSERT INTO combine_two_tables."Address" ("addressId", "personId", "city", "state") VALUES
(1, 2, 'New York City', 'New York'),
(2, 3, 'Leetcode', 'California');

-- https://leetcode.com/problems/combine-two-tables/

SELECT p."firstName", p."lastName", a."city", a."state"
FROM combine_two_tables."Person" p LEFT JOIN combine_two_tables."Address" a ON p."personId" = a."personId"
