CREATE DATABASE pups;
\c pups_dev;

CREATE TABLE IF NOT EXISTS pups (
  id SERIAL PRIMARY KEY,
  dog_name VARCHAR(255),
  dog_age INTEGER,
  dog_breed TEXT VARCHAR(255),
  dog_image TEXT,
);

CREATE TABLE IF NOT EXISTS owners (
  id SERIAL PRIMARY KEY,
  dog_id INT REFERENCES pups(id),
  owner_name TEXT VARCHAR(255),
);

CREATE TABLE IF NOT EXISTS vets (
  id SERIAL PRIMARY KEY,
  dog_id INT REFERENCES pups(id),
  vet_name TEXT VARCHAR(255),
  vet_address VARCHAR(255),
  vet_phone INT,
);

CREATE TABLE IF NOT EXISTS medications (
  id SERIAL PRIMARY KEY,
  dog_id INT REFERENCES pups(id),
  medication_name TEXT VARCHAR(255),
  medication_dose TEXT VARCHAR(255),
);

CREATE TABLE IF NOT EXISTS tasks (
  id SERIAL PRIMARY KEY,
  owner_id REFERENCES owners(id),
  task_name TEXT VARCHAR(255),
  task_status TEXT VARCHAR(255)
);
