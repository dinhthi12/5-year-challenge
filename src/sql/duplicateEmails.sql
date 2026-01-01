CREATE SCHEMA duplicate_emails;

CREATE TABLE
  duplicate_emails."Person" ("personId" INT PRIMARY KEY, "email" VARCHAR(50));

INSERT INTO
  duplicate_emails."Person" ("personId", "email")
VALUES
  (1, 'a@b.com'),
  (2, 'c@d.com'),
  (3, 'a@b.com');

-- https://leetcode.com/problems/duplicate-emails/
SELECT
  d."email"
FROM
  duplicate_emails."Person" d
GROUP BY
  d."email"
HAVING
  COUNT(*) > 1