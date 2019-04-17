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
-- following TEXT,
-- followers TEXT
);

CREATE TABLE IF NOT EXISTS tweeds (
id SERIAL PRIMARY KEY,
tweeds TEXT,
created_at TEXT,
user_id INTEGER
);