-- DROP DATABASE
DROP DATABASE IF EXISTS todo_db;

-- CREATE DATABASE
CREATE DATABASE todo_db;

-- Switch to the new database (PostgreSQL)
\c todo_db

-- For MySQL or other databases, use: USE todo_db;

-- Create the 'todo' table
CREATE TABLE todo (
    id SERIAL PRIMARY KEY,         -- Auto-incrementing primary key
    description VARCHAR(255) NOT NULL -- Non-nullable description column
);

-- Insert data into the 'todo' table
INSERT INTO todo (description) VALUES ('Buy groceries');
INSERT INTO todo (description) VALUES ('Wash the dishes');
INSERT INTO todo (description) VALUES ('Clean the bathroom');
