\c pups

INSERT INTO pups(id, dog_name, dog_age, dog_breed, dog_image) VALUES (DEFAULT, 'Max', 16, 'Labrador', 'https://i.imgur.com/rq2VOIv.jpg')
INSERT INTO pups(id, dog_name, dog_age, dog_breed, dog_image) VALUES (DEFAULT, 'Simon', 15, 'Goldendoodle', 'https://i.imgur.com/WLFNXDw.jpg')
INSERT INTO pups(id, dog_name, dog_age, dog_breed, dog_image) VALUES (DEFAULT, 'Luna', 6, 'King Charles', 'https://i.imgur.com/gq2gMw4.jpg')

INSERT INTO owners(id, dog_id, owner_name) VALUES (DEFAULT, 1, 'Bob')
INSERT INTO owners(id, dog_id, owner_name) VALUES (DEFAULT, 2, 'Cris')
INSERT INTO owners(id, dog_id, owner_name) VALUES (DEFAULT, 3, 'Janice')

INSERT INTO vets(id, dog_id, vet_name, vet_address, vet_phone) VALUES (DEFAULT, 'Dr. Dog', '21 Main Street', 4154352000)
INSERT INTO vets(id, dog_id, vet_name, vet_address, vet_phone) VALUES (DEFAULT, 'Dr. Log', '22 Main Street', 4154352001)
INSERT INTO vets(id, dog_id, vet_name, vet_address, vet_phone) VALUES (DEFAULT, 'Dr. Bog', '23 Main Street', 4154352002)

INSERT INTO tasks(id, owner_id, task_name, task_status) VALUES (DEFAULT, 1, 'Walk dog', 'Complete')
INSERT INTO tasks(id, owner_id, task_name, task_status) VALUES (DEFAULT, 1, 'Wash dog', 'Pending')
INSERT INTO tasks(id, owner_id, task_name, task_status) VALUES (DEFAULT, 1, 'Feed dog', 'Complete')


