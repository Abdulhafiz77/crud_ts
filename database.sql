CREATE TABLE game(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    discription VARCHAR(50) NOT NULL,
    version NUMERIC(15) NOT NULL,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO game (name, discription, version)
VALUES ('Cool', 'this online', 18),
('Call', 'ofline', 20);