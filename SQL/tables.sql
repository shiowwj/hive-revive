CREATE TABLE IF NOT EXISTS users (
id SERIAL PRIMARY KEY,
username TEXT,
password TEXT,
profile_desc VARCHAR(120),
interest VARCHAR(300),
location TEXT,
profile_pic_url TEXT,
created_at TEXT,
type TEXT
);

-- CREATE TABLE IF NOT EXISTS entities (
-- id SERIAL PRIMARY KEY,
-- username TEXT,
-- password TEXT,
-- entity_name TEXT,
-- service TEXT,
-- email TEXT,
-- contact_number VARCHAR(10),
-- location TEXT,
-- created_at TEXT,
-- type TEXT
-- );
-- profile_desc VARCHAR(200),