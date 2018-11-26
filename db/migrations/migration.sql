CREATE DATABASE pups;
\c pups;

CREATE TABLE IF NOT EXISTS pups (
  id SERIAL PRIMARY KEY,
  dog_name TEXT,
  dog_age INTEGER,
  dog_breed TEXT,
  dog_image TEXT
);

CREATE TABLE IF NOT EXISTS owners (
  id SERIAL PRIMARY KEY,
  dog_id INT REFERENCES pups(id),
  owner_name TEXT
);

CREATE TABLE IF NOT EXISTS vets (
  id SERIAL PRIMARY KEY,
  dog_id INT REFERENCES pups(id),
  vet_name TEXT,
  vet_address TEXT,
  vet_phone TEXT
);

CREATE TABLE IF NOT EXISTS medications (
  id SERIAL PRIMARY KEY,
  dog_id INT REFERENCES pups(id),
  medication_name TEXT,
  medication_dose TEXT
);

CREATE TABLE IF NOT EXISTS tasks (
  id SERIAL PRIMARY KEY,
  owner_id INT REFERENCES owners(id),
  task_name TEXT,
  task_status TEXT
);
