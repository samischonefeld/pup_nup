\c pups

INSERT INTO pups(id, dog_name, dog_age, dog_breed, dog_image) VALUES (DEFAULT, 'Max', 16, 'Labrador', 'https://i.imgur.com/rq2VOIv.jpg');
INSERT INTO pups(id, dog_name, dog_age, dog_breed, dog_image) VALUES (DEFAULT, 'Simon', 15, 'Goldendoodle', 'https://i.imgur.com/WLFNXDw.jpg');
INSERT INTO pups(id, dog_name, dog_age, dog_breed, dog_image) VALUES (DEFAULT, 'Luna', 6, 'King Charles', 'https://i.imgur.com/gq2gMw4.jpg');

INSERT INTO owners(id, dog_id, owner_name) VALUES (DEFAULT, 1, 'Bob');
INSERT INTO owners(id, dog_id, owner_name) VALUES (DEFAULT, 2, 'Cris');
INSERT INTO owners(id, dog_id, owner_name) VALUES (DEFAULT, 3, 'Janice');

INSERT INTO vets(id, dog_id, vet_name, vet_address, vet_phone) VALUES (DEFAULT, 1, 'Dr. Dog', '21 Main Street', '4154462000');
INSERT INTO vets(id, dog_id, vet_name, vet_address, vet_phone) VALUES (DEFAULT, 2, 'Dr. Log', '22 Main Street', '4154462001');
INSERT INTO vets(id, dog_id, vet_name, vet_address, vet_phone) VALUES (DEFAULT, 3, 'Dr. Bog', '23 Main Street', '4154462002');

INSERT INTO tasks(id, owner_id, task_name, task_status) VALUES (DEFAULT, 1, 'Walk dog', 'Complete');
INSERT INTO tasks(id, owner_id, task_name, task_status) VALUES (DEFAULT, 2, 'Wash dog', 'Pending');
INSERT INTO tasks(id, owner_id, task_name, task_status) VALUES (DEFAULT, 3, 'Feed dog', 'Complete');

INSERT INTO medications(id, dog_id, medication_name, medication_dose) VALUES (DEFAULT, 1, 'allergy', '1 pill per day');
INSERT INTO medications(id, dog_id, medication_name, medication_dose) VALUES (DEFAULT, 2, 'heartworm', '1 pill per week');
INSERT INTO medications(id, dog_id, medication_name, medication_dose) VALUES (DEFAULT, 3, 'flea medication', '2 applications per week');

