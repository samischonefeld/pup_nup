\c pups_dev;

CREATE TABLE IF NOT EXISTS pups (
  id SERIAL PRIMARY KEY,
  dog_name VARCHAR(255),
  dog_age INTEGER,
  dog_breed TEXT VARCHAR(255),
)


